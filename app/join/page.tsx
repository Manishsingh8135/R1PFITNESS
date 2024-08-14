"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Toaster, toast } from 'react-hot-toast';
import JoinPageHeader from '@/components/join/JoinPageHeader';
import JoinForm from '@/components/join/JoinForm';

const JoinPage: React.FC = () => {
  const handleSubmit = async (formData: {
    name: string;
    email: string;
    country: string;
    reason: string;
  }) => {
    const loadingToast = toast.loading('Submitting your application...', {
      style: {
        background: '#333',
        color: '#fff',
      },
    });

    try {
      const response = await fetch('/api/join', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      toast.dismiss(loadingToast);

      if (response.ok) {
        showSuccessToast();
      } else if (response.status === 409) {
        showDuplicateApplicationToast();
      } else {
        throw new Error(data.error || 'Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.dismiss(loadingToast);
      showErrorToast();
    }
  };

  const showSuccessToast = () => {
    toast.custom((t) => (
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.5 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-green-100 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <svg className="h-10 w-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-green-900">
                Application Submitted Successfully!
              </p>
              <p className="mt-1 text-sm text-green-700">
                Your royal journey begins now. We'll be in touch soon!
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-green-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-green-600 hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Close
          </button>
        </div>
      </motion.div>
    ), { duration: 5000 });
  };

  const showErrorToast = () => {
    toast.custom((t) => (
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.5 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-red-100 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <svg className="h-10 w-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-red-900">
                Oops! Something went wrong.
              </p>
              <p className="mt-1 text-sm text-red-700">
                Please try submitting your application again.
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-red-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-red-600 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            Close
          </button>
        </div>
      </motion.div>
    ), { duration: 5000 });
  };

  const showDuplicateApplicationToast = () => {
    toast.custom((t) => (
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.5 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
        className={`${
          t.visible ? 'animate-enter' : 'animate-leave'
        } max-w-md w-full bg-orange-400 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        <div className="flex-1 w-0 p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0 pt-0.5">
              <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-sm font-medium text-white">
                Application Already Exists
              </p>
              <p className="mt-1 text-sm text-white">
                You've already applied. Please wait for our response. We'll be in touch soon!
              </p>
            </div>
          </div>
        </div>
        <div className="flex border-l border-orange-200">
          <button
            onClick={() => toast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-orange-600 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
          >
            Close
          </button>
        </div>
      </motion.div>
    ), { duration: 5000 });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black from-10% via-amber-400 via-55% to-black to-85% py-12 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-center" reverseOrder={false} />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-black/30 backdrop-blur-lg rounded-xl shadow-2xl overflow-hidden border border-yellow"
      >
        <div className="p-8 bg-gradient-to-br from-amber-500 from-30% via-amber-300 via-50% to-amber-500 to-85%">
          <JoinPageHeader />
          <JoinForm onSubmit={handleSubmit} />
        </div>
      </motion.div>
    </div>
  );
};

export default JoinPage;