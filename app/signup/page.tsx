'use client';

import { useState } from 'react';
import InputField from '@/components/InputField';
import SelectField from '@/components/SelectField';
import Logo from '@/components/svg';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    gender: '',
    phone: '',
    occupation: '',
    accountHolderName: '',
    bankName: '',
    accountNumber: '',
    ifscCode: '',
    upiId: '',
  });

  const [isGovtEmployee, setIsGovtEmployee] = useState(false);

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const submitData = {
      ...formData,
      isGovtEmployee,
    };
    console.log('Signup form submitted:', submitData);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white py-4">
      <div className="w-full max-w-md px-6 py-4">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <Logo />
        </div>

        {/* Signup Heading */}
        <h1 className="text-xl font-bold text-gray-800 text-center mb-4">
          Create Your Account
        </h1>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Name */}
          <InputField
            label="Full Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />

          {/* Date of Birth */}
          <InputField
            label="Date of Birth"
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />

          {/* Gender */}
          <SelectField
            label="Gender"
            name="gender"
            options={genderOptions}
            value={formData.gender}
            onChange={handleChange}
            placeholder="Select your gender"
            required
          />

          <InputField
            label="Phone Number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, '').slice(0, 10);
              setFormData({ ...formData, phone: value });
            }}
            placeholder="Enter your phone number"
            required
          />

          <InputField
            label="Occupation Type"
            name="occupation"
            type="text"
            value={formData.occupation}
            onChange={handleChange}
            placeholder="Enter your Occupation"
            required
          />

          {/* UPI ID */}

          <InputField
            label="UPI ID"
            type="text"
            name="upiId"
            value={formData.upiId}
            onChange={handleChange}
            placeholder="Enter UPI ID (e.g., name@upi)"
          />


          {/* Government Employee Toggle */}
          <div className="w-full">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isGovtEmployee}
                onChange={(e) => setIsGovtEmployee(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300 text-gray-800 focus:ring-gray-400 cursor-pointer"
              />
              <span className="text-sm font-medium text-gray-700">
                I am a Government Employee
              </span>
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2.5 px-4 bg-gray-800 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            Sign Up
          </button>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 mt-2">
            Already have an account?{' '}
            <a
              href="/login"
              className="text-gray-800 font-medium hover:underline"
            >
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
