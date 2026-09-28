import type { FormState } from "./formState";

interface FieldProps {
    label: string;
    name: keyof FormState;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    error?: string;
    type?: string;
    placeholder?: string;
    list?: string;
}

export type { FieldProps }