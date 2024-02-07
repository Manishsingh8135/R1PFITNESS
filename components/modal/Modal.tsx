// components/GlofoxModal.tsx
'use client'
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import GlofoxIframe from './GlowfoxForm';

const GlofoxModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button
        className="px-6 py-4 bg-black border border-maincolor font-bold text-xl text-white rounded-full hover:bg-maincolor hover:shadow-2xl transition duration-150"
        onClick={openModal}
      >
        Get 3 day pass!!
      </button>

      <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
        {/* The overlay */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        {/* The modal container */}
        <div className="fixed inset-0 overflow-y-auto">
          {/* The modal content */}
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Dialog.Panel className="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all relative">
              {/* Close icon in the top-right corner */}
              <div className="absolute top-0 right-0 pt-4 pr-4">
                <button onClick={closeModal} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Close</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <GlofoxIframe />
              <div className="mt-4 flex justify-end">
                <button
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-red-500 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default GlofoxModal;
