'use client';

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCheck, ArrowRight, Loader2 } from 'lucide-react';

import NavBar from '@/src/components/Home Page/Navbar';
import Field from '@/src/components/ui/InputField';

export interface FormState {
  name: string;
  email: string;
  phoneNo: string;
  college: string;
  state: string;
  instagramUsername: string;
  instagramProfileLink: string;
  participateContest: 'Yes' | 'No' | '';
  agreedToTerms: boolean;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const initialForm: FormState = {
  name: '',
  email: '',
  phoneNo: '',
  college: '',
  state: '',
  instagramUsername: '',
  instagramProfileLink: '',
  participateContest: '',
  agreedToTerms: false,
};

function ApplyForm() {
  const router = useRouter();
  const [form, setForm] = React.useState<FormState>(initialForm);
  const [errors, setErrors] = React.useState<FormErrors>({});
  const [isPending, setIsPending] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  // Auto-redirect to home page after success
  useEffect(() => {
    if (isSuccess) {
      const timer = setTimeout(() => {
        router.push('/');
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [isSuccess, router]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const key = name as keyof FormState;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;

      setForm((f) => ({
        ...f,
        [key]: checked,
      }));
    } else {
      setForm((f) => ({
        ...f,
        [key]: value,
      }));
    }

    if (errors[key]) {
      setErrors((er) => {
        const next = { ...er };
        delete next[key];
        return next;
      });
    }
  };

  const validate = () => {
    const next: FormErrors = {};

    if (!form.name.trim()) {
      next.name = 'Enter your full name';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Enter a valid email';
    }

    if (!form.phoneNo.trim()) {
      next.phoneNo = 'Enter your contact number';
    }

    if (!form.college.trim()) {
      next.college = 'Enter your college name';
    }

    if (!form.state.trim()) {
      next.state = 'Enter your state';
    }

    if (!form.instagramUsername.trim()) {
      next.instagramUsername = 'Enter your Instagram username';
    }

    if (!form.instagramProfileLink.trim()) {
      next.instagramProfileLink = 'Enter your Instagram profile link';
    }

    if (!form.participateContest) {
      next.participateContest = 'Please select an option';
    }

    if (!form.agreedToTerms) {
      next.agreedToTerms =
        'You must agree to the terms and conditions to proceed';
    }

    return next;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const next = validate();

    setErrors(next);

    if (Object.keys(next).length > 0) {
      return;
    }

    setIsPending(true);

    try {
      const googleSheetUrl =
        'https://script.google.com/macros/s/AKfycbyK4e-6gqx0ztYAN4C6XgIGyzHDPS1_ON8uD2eOLnFdtQfljvI0ZQR18Kg4sV10x2w/exec';

      if (!googleSheetUrl) {
        throw new Error('Google Sheets Apps Script URL is not configured');
      }

      /*
       * We intentionally do NOT send agreedToTerms
       * to Google Sheets.
       */
      const sheetData = {
        name: form.name,
        email: form.email,
        phoneNo: form.phoneNo,
        college: form.college,
        state: form.state,
        instagramUsername: form.instagramUsername,
        instagramProfileLink: form.instagramProfileLink,
        participateContest: form.participateContest,
      };

      await fetch(googleSheetUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(sheetData),
      });

      console.log('Application submitted:', sheetData);

      setIsSuccess(true);

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } catch (error) {
      console.error('Failed to submit application:', error);

      alert(
        'Something went wrong while submitting the application. Please try again.'
      );
    } finally {
      setIsPending(false);
    }
  };

  if (isSuccess) {
    return (
      <section
        id="apply"
        className="bg-background py-20 sm:py-28 min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="mx-auto max-w-xl px-4 sm:px-6 text-center animate-in fade-in zoom-in-95 duration-500">
          <div className="relative flex items-center justify-center w-24 h-24 mx-auto mb-6">
            {/* Outer pulsating glow effect */}
            <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping" />

            {/* Inner check icon container */}
            <div className="relative w-20 h-20 rounded-full bg-primary flex items-center justify-center shadow-xl shadow-primary/30 transform transition-transform duration-500 hover:scale-105">
              <CheckCheck className="w-10 h-10 text-background animate-bounce" />
            </div>
          </div>

          <h2 className="font-secondary uppercase text-3xl sm:text-4xl tracking-tight text-secondary animate-in slide-in-from-bottom-3 duration-700">
            Application Submitted!
          </h2>

          <p className="mt-3 text-secondary/80 text-base sm:text-lg animate-in slide-in-from-bottom-4 duration-700">
            Welcome aboard,{' '}
            <span className="font-semibold text-secondary">
              {form.name.split(' ')[0] || 'Creator'}
            </span>
            ! We&apos;ve logged your submission and will get in touch soon.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-4 py-2 rounded-full">
            <Loader2 className="w-4 h-4 animate-spin text-primary" />
            Redirecting to home page...
          </div>
        </div>
      </section>
    );
  }

  const nameFieldName: keyof FormState = 'name';
  const phoneFieldName: keyof FormState = 'phoneNo';
  const emailFieldName: keyof FormState = 'email';
  const collegeFieldName: keyof FormState = 'college';
  const stateFieldName: keyof FormState = 'state';
  const instagramUsernameFieldName: keyof FormState = 'instagramUsername';
  const instagramProfileLinkFieldName: keyof FormState = 'instagramProfileLink';

  return (
    <section id="apply" className="bg-background py-20 sm:py-28">
      <NavBar />

      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-2">
            Recruitment Desk
          </p>

          <h2 className="font-secondary uppercase text-3xl sm:text-4xl tracking-tight text-secondary">
            Enlist As Old Spice Creator
          </h2>
        </div>

        <form onSubmit={handleSubmit} noValidate className="mt-10 grid sm:grid-cols-2 gap-5">
          <Field
            label="Full Name"
            name={nameFieldName}
            value={form.name}
            onChange={handleChange}
            error={errors.name}
            placeholder="Jordan Lee"
          />

          <Field
            label="Contact Number"
            name={phoneFieldName}
            type="tel"
            value={form.phoneNo}
            onChange={handleChange}
            error={errors.phoneNo}
            placeholder="+91 9876543210"
          />

          <Field
            label="Email ID"
            name={emailFieldName}
            type="email"
            value={form.email}
            onChange={handleChange}
            error={errors.email}
            placeholder="jordan@email.com"
          />

          <Field
            label="College Name"
            name={collegeFieldName}
            value={form.college}
            onChange={handleChange}
            error={errors.college}
            placeholder="IIT Delhi"
          />

          <Field
            label="State"
            name={stateFieldName as any}
            value={form.state}
            onChange={handleChange}
            error={errors.state}
            placeholder="Delhi"
          />

          <Field
            label="Instagram Username"
            name={instagramUsernameFieldName as any}
            value={form.instagramUsername}
            onChange={handleChange}
            error={errors.instagramUsername}
            placeholder="@yourhandle"
          />

          <div className="sm:col-span-2">
            <Field
              label="Instagram Profile Link"
              name={instagramProfileLinkFieldName as any}
              value={form.instagramProfileLink}
              onChange={handleChange}
              error={errors.instagramProfileLink}
              placeholder="https://instagram.com/yourhandle"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-semibold text-secondary mb-2">
              Would you like to participate in the Old Spice Creator Contest?
            </label>

            <div className="flex items-center gap-6">
              <label className="inline-flex items-center gap-2 cursor-pointer text-sm text-neutral-800 font-medium">
                <input
                  type="radio"
                  name="participateContest"
                  value="Yes"
                  checked={form.participateContest === 'Yes'}
                  onChange={handleChange}
                  className="w-4 h-4 text-primary border-secondary/30 focus:ring-primary"
                />
                Yes
              </label>

              <label className="inline-flex items-center gap-2 cursor-pointer text-sm text-neutral-800 font-medium">
                <input
                  type="radio"
                  name="participateContest"
                  value="No"
                  checked={form.participateContest === 'No'}
                  onChange={handleChange}
                  className="w-4 h-4 text-primary border-secondary/30 focus:ring-primary"
                />
                No
              </label>
            </div>

            {errors.participateContest && (
              <p className="mt-1 text-xs text-red-500">
                {errors.participateContest}
              </p>
            )}
          </div>

          <div className="sm:col-span-2 border border-secondary/20 bg-white rounded-xl p-4 sm:p-5 text-xs text-neutral-600 space-y-2 leading-relaxed">
            <p className="font-semibold text-secondary text-sm mb-1">
              Terms &amp; Conditions
            </p>

            <p>
              By confirming your participation, you, the Creator, acknowledge
              and agree to the following terms:
            </p>

            <ol className="list-decimal pl-4 space-y-1.5">
              <li>
                <strong className="text-neutral-800">
                  Adherence to Brand Brief:
                </strong>{' '}
                You agree to strictly follow the brand brief, content
                guidelines, deliverables, and instructions communicated by
                HYPEDIN, the Partner Agency, on behalf of the Brand.
              </li>

              <li>
                <strong className="text-neutral-800">
                  Content Creation and Delivery:
                </strong>{' '}
                You undertake to create and submit the required Reel in
                accordance with the approved brief and within the timelines
                communicated by HYPEDIN.
              </li>

              <li>
                <strong className="text-neutral-800">
                  Revision and Resubmission:
                </strong>{' '}
                You agree to incorporate all reasonable edits, corrections, and
                modifications communicated by HYPEDIN or the Brand and submit
                the final revised Reel within three (3) days from the date of
                receipt of the product.
              </li>

              <li>
                <strong className="text-neutral-800">
                  Commitment to Deliverables:
                </strong>{' '}
                You acknowledge that your participation entails a commitment to
                complete the agreed deliverables within the prescribed
                timelines. Any delay, non-submission, or failure to comply with
                the communicated requirements must be promptly reported to
                HYPEDIN with valid reasons and in cases provided with
                compensation.
              </li>

              <li>
                <strong className="text-neutral-800">
                  Consent and Acknowledgment:
                </strong>{' '}
                By providing your confirmation, you expressly acknowledge that
                you have read, understood, and voluntarily agreed to comply with
                the above terms and conditions.
              </li>
            </ol>

            <p className="text-[11px] text-neutral-500 pt-1">
              Please note: Any additional consequences arising from
              non-compliance, including cancellation of participation or
              recovery of documented losses, shall be subject to the applicable
              campaign terms.
            </p>
          </div>

          <div className="sm:col-span-2">
            <label className="inline-flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="agreedToTerms"
                checked={form.agreedToTerms}
                onChange={handleChange}
                className="mt-1 w-4 h-4 rounded border-secondary/30 text-primary focus:ring-primary"
              />

              <span className="text-xs text-neutral-700 font-medium leading-normal">
                I have read, understood, and agree to the Old Spice Creator
                Contest terms and conditions above.
              </span>
            </label>

            {errors.agreedToTerms && (
              <p className="mt-1 text-xs text-red-500">
                {errors.agreedToTerms}
              </p>
            )}
          </div>

          <div className="sm:col-span-2 mt-2">
            <button
              type="submit"
              disabled={isPending || !form.agreedToTerms}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed text-background font-bold uppercase tracking-wide px-8 py-3.5 rounded-full transition-colors cursor-pointer"
            >
              {isPending
                ? 'Submitting Application...'
                : 'Submit Application'}

              {!isPending && <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ApplyForm;