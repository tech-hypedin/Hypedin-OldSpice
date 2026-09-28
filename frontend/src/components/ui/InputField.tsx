import type { FieldProps } from '@/src/types/fieldProps';

function Field({ label, name, value, onChange, error, type = 'text', placeholder, list }: FieldProps) {
    return (
        <div>
            <label htmlFor={name} className='block text-sm font-semibold text-secondary mb-1.5'>
                {label}
            </label>
            
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                list={list}
                className={`w-full rounded-xl border px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-shadow text-neutral-900 bg-white ${
                    error
                      ? 'border-red-500 focus:ring-red-200'
                      : 'border-secondary/20 focus:ring-primary/80 focus:border-secondary'
                }`}
            />
            
            {error && <p className='mt-1 text-xs text-red-600 font-medium'>{error}</p>}
        </div>
    );
}

export default Field;