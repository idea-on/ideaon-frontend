'use client';

import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { RobotIllustration } from '@/components/common/RobotIllustration';


export default function ForgotPasswordPage() {
  const [formData, setFormData] = useState({
    email: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Forgot password form submitted:', formData);
    // Add your password reset logic here
  };

  return (
    <div className="min-h-screen bg-slate-900 flex">
      {/* Left side - Illustration */}
      <div className="hidden lg:flex lg:w-1/2">
        <RobotIllustration />
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <Link
              href="/auth/sign-in"
              className="inline-flex items-center text-gray-400 hover:text-gray-300 mb-6"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to sign in
            </Link>
            <h1 className="text-3xl lg:text-4xl font-bold text-white mb-2">Forgot Password?</h1>
            <p className="text-gray-400 text-sm">{"Don't worry! Enter your email and we'll send you a reset link"}</p>
          </div>

          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">EMAIL</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              >
                Send Reset Link
              </button>
            </form>

            <div className="text-center">
              <p className="text-gray-400 text-sm mb-4">
                Remember your password?{' '}
                <Link
                  href="/auth/sign-in"
                  className="text-green-400 hover:text-green-300 font-medium"
                >
                  Sign in
                </Link>
              </p>
              
              <p className="text-gray-400 text-sm">
                {"Don't have an account?{' '}"}
                <Link
                  href="/auth/sign-up"
                  className="text-green-400 hover:text-green-300 font-medium"
                >
                  Sign up now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}