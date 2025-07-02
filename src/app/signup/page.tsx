'use client';
import { useState } from 'react';
import { signupUser } from '../lib/api';
import axios from 'axios';
import FormField from '@/components/FormField';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signupUser({ name, email, password });
      setMessage('Signup berhasil!');
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error('Signup error:', err.response?.data || err.message);
        setMessage(
          'Gagal signup: ' +
            (err.response?.data?.message || 'Terjadi kesalahan.')
        );
      } else {
        console.error('Unexpected error:', err);
        setMessage('Gagal signup: Terjadi kesalahan tak terduga.');
      }
    }
  };

  return (
    <>
      <div className='min-h-dvh flex items-center justify-center'>
        <form
          onSubmit={handleSubmit}
          className='border border-neutral-200 max-w-[400px] w-full flex flex-col shadow-lg rounded-lg p-6'
        >
          <h1 className='text-text-xl font-bold text-neutral-900 mb-5'>
            Sign Up
          </h1>
          <FormField
            id='name'
            label='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter your name'
          />
          <FormField
            id='email'
            label='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Email'
          />
          <FormField
            id='password'
            label='Password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your password'
          />
          <FormField
            id='password'
            label='Password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter your confirm password'
          />
          <button
            type='submit'
            className='bg-[#0093DD] text-white font-semibold w-full rounded-full h-12'
          >
            Register
          </button>
          <p className='text-center'>Already have an account?Log in</p>
          <p>{message}</p>
        </form>
      </div>
    </>
  );
}
