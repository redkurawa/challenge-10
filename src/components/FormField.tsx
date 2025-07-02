interface FormFieldProps {
  id: string;
  label: string;
  value: string;
  type?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormField({
  id,
  label,
  value,
  type = 'text',
  placeholder,
  onChange,
}: FormFieldProps) {
  return (
    <div className='flex flex-col gap-1 mb-5'>
      <label
        htmlFor={id}
        className='text-text-sm font-semibold text-neutral-950'
      >
        {label}
      </label>
      <div className='border border-[#D5D7DA] px-4 py-[10px] h-12 rounded-xl text-text-sm'>
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className='font-regular w-full text-[#717680]'
        />
      </div>
    </div>
  );
}
