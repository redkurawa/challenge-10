'use client';
import { useState } from 'react';
import { loginUser } from '../lib/api';
import axios from 'axios';
import FormField from '@/components/FormField';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await loginUser({ email, password });
      setMessage('Login berhasil!');
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error('Login error:', err.response?.data || err.message);
        setMessage(
          'Login gagal: ' +
            (err.response?.data?.message || 'Terjadi kesalahan.')
        );
      } else {
        console.error('Unexpected error:', err);
        setMessage('Login gagal: Terjadi kesalahan tak terduga.');
      }
    }
  };

  return (
    <>
      <div className='min-h-dvh flex items-center justify-center'>
        <form
          onSubmit={handleLogin}
          className='border  border-neutral-200 max-w-[360px] w-full flex flex-col shadow-lg rounded-lg p-6'
        >
          <h1 className='text-xl font-bold mb-5'>Sign In</h1>
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
          <button
            type='submit'
            className='bg-[#0093DD] text-white font-semibold w-full rounded-full h-12'
          >
            Login
          </button>
          <p className='text-center'>Don&apos;t have an account?Register</p>
          <p>{message}</p>
        </form>
      </div>
    </>
  );
}
