'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface TermSection {
  id: string;
  number: string;
  title: string;
  content: (string | React.ReactNode)[];
}

const termsData: TermSection[] = [
  {
    id: 'section-1',
    number: '01',
    title: 'ABOUT THE CONTEST',
    content: [
      '1.1 The Contest is a creator-led campaign for eligible college and university students across India. Selected Participants will receive an Old Spice Deo Stick / perfume stick and create original content featuring it, as per the campaign brief and content guidelines shared by HYPEDIN.',
      '1.2 The Contest has a total prize pool of up to ₹4,00,000, to be distributed among eligible winners as per the prize categories and winner-selection process communicated through official campaign channels.',
      '1.3 No purchase or participation fee is required to enter the Contest.',
      '1.4 The planned content publishing period is 7 October 2026 to 5 November 2026. Individual submission, approval and publishing deadlines will be communicated by HYPEDIN.',
    ],
  },
  {
    id: 'section-2',
    number: '02',
    title: 'ELIGIBILITY',
    content: [
      '2.1 The Contest is open to male college or university student creators residing in India who are 18 years of age or older on the date of registration and are currently enrolled in a recognised college, university or higher-education institution in India.',
      '2.2 Participants must have an active, genuine and publicly accessible Instagram account, or another platform expressly approved in the campaign brief. Fake, impersonation or engagement-farming accounts may be rejected.',
      '2.3 HYPEDIN may verify a Participant’s age, student status, identity and social media account authenticity at any stage.',
      '2.4 Employees, contractors and anyone directly involved in organising, administering or evaluating the Contest may be excluded from participation.',
    ],
  },
  {
    id: 'section-3',
    number: '03',
    title: 'REGISTRATION, SELECTION AND PRODUCT SHIPMENT',
    content: [
      '3.1 Registration through the official landing page, Google Form or any other authorised channel does not guarantee selection, product shipment, content approval, winner status or any prize.',
      '3.2 Participants must provide accurate and complete details, including name, phone number, email address, college details, social media handles and shipping address. Incomplete, inaccurate, duplicate or fraudulent registrations may be rejected.',
      '3.3 HYPEDIN may limit the number of Participants based on campaign capacity, eligibility and brand approval. By confirming participation and sharing shipping details, a selected Participant commits to completing the required deliverables within the campaign timelines.',
      '3.4 Each selected Participant will receive one Old Spice product, subject to courier serviceability and product availability. HYPEDIN is not responsible for failed, lost or delayed delivery caused by incorrect details, courier issues or circumstances beyond its reasonable control.',
      '3.5 The product does not need to be returned unless communicated otherwise, and receiving it does not guarantee a prize. It is provided for campaign participation and must not be misrepresented, substituted or used fraudulently.',
    ],
  },
  {
    id: 'section-4',
    number: '04',
    title: 'CONTENT CREATION AND APPROVAL',
    content: [
      '4.1 Each selected Participant must create one original Instagram Reel featuring the Old Spice product, unless additional or alternative deliverables are specified in the campaign brief. Content must follow the concept, messaging, product-visibility and creative guidelines shared by HYPEDIN and be submitted through the designated process within the given deadlines.',
      '4.2 Content must be the Participant’s own original work and must comply with applicable laws, Instagram and platform policies, advertising disclosure requirements, Old Spice brand guidelines, HYPEDIN campaign guidelines and these Terms.',
      '4.3 Content must not contain false, misleading or unauthorised claims about Old Spice or its products, or any unlawful, defamatory, discriminatory, hateful, threatening, sexually explicit or otherwise inappropriate material. Participants are responsible for ensuring that any music, footage, images or other third-party material used is properly licensed or permitted by the platform.',
      '4.4 All content may go through a quality check ("QC") by HYPEDIN, Old Spice and/or their authorised representatives for brief compliance, product visibility, brand representation, originality, creative and technical quality, disclosure and legal compliance. Participants may be asked to make reasonable revisions within the timeline given.',
      '4.5 Where pre-publication approval is required, content must not be published before approval. HYPEDIN may reject content that materially fails to meet campaign requirements. Approval of content does not guarantee winner status or a prize.',
    ],
  },
  {
    id: 'section-5',
    number: '05',
    title: 'PUBLISHING AND AD DISCLOSURE',
    content: [
      '5.1 Approved content must be published on the Instagram account submitted at registration, within the assigned campaign timeline, unless HYPEDIN approves otherwise.',
      '5.2 Since Participants receive a product and may win rewards, they must clearly disclose their brand connection using a visible tag such as #Ad, #Sponsored, #Collaboration, #Partnership or #FreeGift, or Instagram’s Paid Partnership feature, as instructed in the campaign brief. The disclosure must be prominent and not hidden at the end of the caption or among unrelated hashtags.',
      '5.3 Participants must include all mandatory tags, mentions and hashtags communicated by HYPEDIN.',
      '5.4 Published content must remain live and public for the minimum period stated in the campaign brief and must not be deleted, archived, hidden or materially edited during that period without HYPEDIN’s prior written approval, except where required by law or the platform.',
      '5.5 Participants must share the live URL and any screenshots, insights or analytics reasonably required for verification.',
    ],
  },
  {
    id: 'section-6',
    number: '06',
    title: 'FAIR PLAY',
    content: [
      '6.1 Participants must not artificially boost the performance of their content. Purchased views, likes, comments, shares or followers, bots or automated engagement, fake or duplicate accounts, engagement groups or any other form of manipulation are strictly prohibited.',
      '6.2 HYPEDIN may review public data, platform analytics, screenshots and engagement patterns to verify performance. Suspicious or manipulated engagement will be excluded and may lead to disqualification.',
    ],
  },
  {
    id: 'section-7',
    number: '07',
    title: 'EVALUATION AND WINNER SELECTION',
    content: [
      '7.1 Eligible entries may be evaluated on originality, creativity, relevance to the brief, product integration, content quality, audience engagement (such as views, reach, likes, comments, shares and saves) and compliance with campaign requirements. Specific prize categories, thresholds or weightages, if any, will be communicated through official campaign channels.',
      '7.2 Only genuine and verifiable engagement will be considered. Before confirming a winner, HYPEDIN may verify the Participant’s identity, age, student status, social media account, content ownership, performance data and required payment or tax documents.',
      '7.3 The decision of HYPEDIN and/or the authorised evaluation team on eligibility, verification and winner selection shall be final, subject to applicable law.',
    ],
  },
  {
    id: 'section-8',
    number: '08',
    title: 'PRIZES',
    content: [
      '8.1 The number of winners, individual prize values and category-wise distribution of the prize pool will be communicated through official campaign channels before winner selection is completed.',
      '8.2 A Participant is entitled to a prize only after being formally selected as a winner, completing verification, complying with campaign requirements and providing the documents required for payment, such as PAN and bank details.',
      '8.3 Prizes are non-transferable unless HYPEDIN approves otherwise. Applicable taxes and statutory deductions, including tax deducted at source, will be handled as per applicable Indian law.',
      '8.4 Winners must respond to verification and prize communications within the timeline given. Failure to respond after reasonable follow-up may result in forfeiture of the prize. HYPEDIN is not responsible for delays caused by incorrect details, banking or payment provider issues, or circumstances beyond its reasonable control.',
      '8.5 If an announced non-cash prize becomes unavailable, HYPEDIN may replace it with a reward of comparable or greater value.',
    ],
  },
  {
    id: 'section-9',
    number: '09',
    title: 'INTELLECTUAL PROPERTY AND CONTENT USAGE',
    content: [
      '9.1 Participants retain ownership of their original content, subject to any third-party material used in it, and confirm that they hold all rights needed to create, submit and license it.',
      '9.2 By submitting content, the Participant grants HYPEDIN, Old Spice and their authorised campaign partners a non-exclusive, royalty-free licence for twelve (12) months from the date of submission to use the approved content for campaign-related purposes, including organic reposting on brand or agency social media, campaign pages, recaps, internal reporting, case studies and portfolio use. Reasonable technical edits such as resizing, cropping, subtitling or thumbnails are permitted, provided they do not misrepresent the Participant.',
      '9.3 Paid advertising, media boosting, whitelisting, creator-handle advertising, sublicensing for unrelated campaigns or substantial commercial reuse beyond this licence will require separate written consent and, where applicable, separate commercial terms.',
      '9.4 After the licence period, archival copies may be kept for records, legal compliance and campaign reporting, but any new external commercial use will need fresh permission.',
      '9.5 Participants must not use Old Spice, HYPEDIN or any campaign partner’s trademarks, logos or assets except as permitted by the campaign guidelines.',
    ],
  },
  {
    id: 'section-10',
    number: '10',
    title: 'PERSONAL DATA AND PRIVACY',
    content: [
      '10.1 HYPEDIN collects the personal information shared by Participants (such as name, age, contact details, college details, social media handles, shipping address, content and performance data, and for winners, PAN and bank details) only to run the Contest. This covers registration, verification, communication, shipping, QC, evaluation, prize processing, tax compliance, fraud prevention and legal requirements.',
      '10.2 Data may be shared, where reasonably necessary, with Old Spice, authorised campaign partners, courier and payment providers, verification and technology vendors and professional advisers involved in the Contest.',
      '10.3 Data will be retained only as long as reasonably needed for these purposes or as required by law.',
      '10.4 Participants may request correction, updating or deletion of their data, or withdraw consent where permitted by law, through the official HYPEDIN campaign contact. Withdrawing consent may affect HYPEDIN’s ability to continue a Participant’s involvement, ship the product or process a prize.',
    ],
  },
  {
    id: 'section-11',
    number: '11',
    title: 'DISQUALIFICATION',
    content: [
      '11.1 HYPEDIN may reject a submission, suspend participation or disqualify a Participant where there is reasonable evidence of false or misleading registration, identity or student-status details; plagiarised or unauthorised content; manipulated engagement; failure to complete required deliverables or revisions on time; unlawful, abusive or inappropriate conduct; misuse or leak of confidential campaign information; interference with the Contest; or any material breach of these Terms.',
      '11.2 Where reasonably practicable, the Participant may be given a chance to clarify or fix the issue first. Serious fraud, manipulation, plagiarism or misconduct may result in immediate disqualification.',
    ],
  },
  {
    id: 'section-12',
    number: '12',
    title: 'CONFIDENTIALITY',
    content: [
      '12.1 Participants must not share, publish, leak or misuse any non-public campaign information (such as briefs, unreleased creatives, product details, strategy or launch schedules) without prior written approval, and may use it only for authorised campaign activities.',
      '12.2 This obligation continues for three (3) years after the Participant’s involvement ends, and for trade secrets, for as long as they remain protected under applicable law.',
    ],
  },
  {
    id: 'section-13',
    number: '13',
    title: 'CHANGES TO THE CONTEST',
    content: [
      'HYPEDIN may modify, postpone, suspend or cancel the Contest where reasonably necessary due to operational, legal, brand, security, fraud or platform-related reasons, force majeure or other circumstances beyond its reasonable control. Material changes to eligibility, deliverables, evaluation or prizes will be communicated through official channels where reasonably practicable, subject to applicable law and rights already accrued by Participants.',
    ],
  },
  {
    id: 'section-14',
    number: '14',
    title: 'PLATFORMS AND LIMITATION OF LIABILITY',
    content: [
      '14.1 Instagram, Meta and other social media platforms are not organisers or sponsors of the Contest. Participation remains subject to their terms and policies, and HYPEDIN is not responsible for platform outages, algorithm changes, restrictions or account issues. To the extent permitted by law, Participants release these platforms from claims arising solely from HYPEDIN’s administration of the Contest.',
      '14.2 To the extent permitted by law, HYPEDIN will not be liable for indirect, incidental, special or consequential losses arising from participation, or for delays or failures caused by internet, platform, courier, payment-network or device issues, third-party outages or force majeure events. Nothing in these Terms limits liability that cannot lawfully be limited.',
      '14.3 Participants remain responsible for their own social media accounts, content, representations and compliance with applicable laws and platform policies.',
    ],
  },
  {
    id: 'section-15',
    number: '15',
    title: 'GOVERNING LAW AND DISPUTES',
    content: [
      'These Terms are governed by the laws of India. Any concern should first be raised with HYPEDIN through the official campaign support channel for good-faith resolution. Disputes that cannot be resolved this way will be subject to the jurisdiction of the competent courts having territorial jurisdiction over HYPEDIN’s principal place of business in India.',
    ],
  },
  {
    id: 'section-16',
    number: '16',
    title: 'GENERAL AND CONTACT',
    content: [
      '16.1 These Terms, together with the official campaign brief, content guidelines and registration confirmation, govern participation in the Contest. If there is a conflict with any informal communication, these Terms and the latest formally issued campaign brief will prevail.',
      '16.2 If any provision is found invalid or unenforceable, the remaining provisions continue to apply. Failure to enforce a provision on one occasion is not a waiver of it.',
      '16.3 HYPEDIN may update these Terms where reasonably necessary. Material changes will be communicated through official campaign channels.',
      '16.4 For queries on registration, shipment, submissions, winner verification or personal data requests, Participants may contact the official HYPEDIN campaign team through the support email, WhatsApp channel or campaign POC listed on the Contest landing page or registration form. Participants should rely only on communications received through official HYPEDIN channels.',
    ],
  },
];

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState<string>('section-1');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] font-['Open_Sans'] pb-12 selection:bg-[#C40D2E] selection:text-white">
      {/* Google Font Open Sans Injection */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
        * {
          font-family: 'Open Sans', system-ui, -apple-system, BlinkMacSystemFont, sans-serif !important;
        }
      `}</style>

      {/* Hero Header Area */}
      <header className="relative pt-16 pb-12 sm:pt-10 sm:pb-14 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            
            {/* Pill Badge matched to landing page screenshot */}
            {/* <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FCE8EC] text-[#C40D2E] text-xs font-extrabold uppercase tracking-widest mb-6">
              LEGAL AGREEMENT
            </div> */}

            {/* Title styled after hero banner typography */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#111111] leading-tight">
              TERMS & <span className="text-[#C40D2E]">CONDITIONS</span>
            </h1>

            <p className="mt-4 text-sm sm:text-base text-gray-600 font-semibold tracking-wide">
              Old Spice Creator Contest | Organised by HYPEDIN
            </p>

            <div className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap gap-x-6 gap-y-2 text-xs text-gray-500 font-bold uppercase tracking-wider">
              <span>Partner Agency: HYPEDIN</span>
              <span>•</span>
              <span>Brand: Old Spice</span>
              <span>•</span>
              <span>Effective Date: September 29, 2026</span>
            </div>

          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Table of Contents - Sticky Sidebar */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-20 bg-white border border-gray-200/80 rounded-2xl p-6 shadow-sm max-h-[calc(100vh-6rem)] overflow-y-auto">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#C40D2E] mb-4">
                Table of Contents
              </h3>

              <nav className="space-y-1">
                {termsData.map((section) => {
                  const isActive = activeSection === section.id;
                  return (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center gap-3 cursor-pointer ${
                        isActive
                          ? 'bg-[#C40D2E] text-white shadow-md'
                          : 'text-gray-600 hover:text-[#111111] hover:bg-gray-100/70'
                      }`}
                    >
                      <span className={`font-black ${isActive ? 'text-white' : 'text-[#C40D2E]'}`}>
                        {section.number}
                      </span>
                      <span className="truncate">{section.title}</span>
                    </button>
                  );
                })}
              </nav>

              <div className="mt-6 pt-6 border-t border-gray-100 text-xs text-gray-500 leading-relaxed font-normal">
                By participating in this campaign, you confirm agreement to all terms detailed here.
              </div>
            </div>
          </aside>

          {/* Legal Text Area */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Preamble Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 text-gray-700 text-sm sm:text-base leading-relaxed space-y-4 shadow-sm">
              <p className="font-bold text-[#111111]">
                These Terms & Conditions (&quot;Terms&quot;) govern participation in the Old Spice Creator Contest (&quot;Contest&quot;), organised and managed by HYPEDIN (&quot;HYPEDIN&quot;, &quot;Organiser&quot;, &quot;we&quot; or &quot;us&quot;) in association with Old Spice and/or its authorised representatives.
              </p>
              <p className="text-gray-600 font-normal">
                By registering for, accepting a product for, submitting content to or otherwise participating in the Contest, you (&quot;Participant&quot; or &quot;Creator&quot;) confirm that you have read, understood and agreed to these Terms. If you do not agree, please do not participate.
              </p>
            </div>

            {/* Terms Sections Card List */}
            <div className="space-y-6">
              {termsData.map((section) => (
                <section
                  id={section.id}
                  key={section.id}
                  className="scroll-mt-24 p-6 sm:p-8 rounded-2xl bg-white border border-gray-200 hover:border-[#C40D2E]/40 transition-colors shadow-sm"
                >
                  <div className="flex items-baseline gap-3 mb-4 pb-3 border-b border-gray-100">
                    <span className="text-4xl font-extrabold text-gray-200 tracking-tight">
                      {section.number}
                    </span>
                    <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-[#111111]">
                      {section.title}
                    </h2>
                  </div>

                  <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed font-normal">
                    {section.content.map((paragraph, pIdx) => (
                      <p key={pIdx}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* Bottom Callout & Action Box */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#C40D2E] text-center space-y-5 shadow-lg text-white">
              <h3 className="text-xl font-black uppercase tracking-wide">
                CONFIRMATION OF TERMS
              </h3>
              <p className="text-sm text-white/90 max-w-xl mx-auto leading-relaxed font-semibold">
                By registering for or participating in the Old Spice Creator Contest, the Participant confirms that they have read, understood and agreed to these Terms & Conditions.
              </p>
              <div className="pt-2">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center bg-white text-[#C40D2E] font-black text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-md cursor-pointer"
                >
                  BACK TO HOME PAGE
                </Link>
              </div>
            </div>

          </div>

        </div>
      </main>

      {/* Red Bottom Accent Bar (as seen in landing screenshots) */}
      <div className="fixed bottom-0 left-0 right-0 h-3 bg-[#C40D2E] z-50 pointer-events-none" />
    </div>
  );
}