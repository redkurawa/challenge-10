'use client';
import React from 'react';

interface FormLayoutProps {
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  maxWidth?: number;
  onSubmit?: React.FormEventHandler;
}

export default function FormLayout({
  title,
  children,
  footer,
  maxWidth = 400,
}: FormLayoutProps) {
  return (
    <div className='min-h-dvh flex items-center justify-center bg-white px-4'>
      <form
        className={`border border-neutral-200 w-full max-w-[${maxWidth}px] flex flex-col shadow-lg rounded-lg p-6 space-y-4`}
      >
        <h1 className='text-xl font-bold text-center text-neutral-900'>
          {title}
        </h1>
        {children}
        {footer && (
          <div className='pt-2 text-center text-sm text-gray-600'>{footer}</div>
        )}
      </form>
    </div>
  );
}
