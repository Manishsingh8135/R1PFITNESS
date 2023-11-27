// pages/contact.tsx
import React from 'react';
import Head from 'next/head';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { NextPage } from 'next';

const ContactPage: NextPage = () => {
  const address = '1502 Industrial Dr, Missouri City, TX 77489, United States';
  const hours = {
    monFri: '5 AM - 12 AM',
    sat: '8 AM - 10 PM',
    sun: '8 AM - 9 PM'
  };
  const containerStyle = {
    width: '100%',
    height: '400px'
  };
  const center = {
    lat: 29.618931, // Coordinates for Missouri City, TX
    lng: -95.537721
  };

  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Get in touch with us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="w-full p-8 bg-gray-900 text-white">
          <h1 className="text-4xl font-bold mb-4">Come say hi 👋</h1>
          <div className="mb-6">
            <p className="text-lg">Address:</p>
            <p className="text-lg">{address}</p>
          </div>
          <div className="bg-yellow-500 text-black rounded px-4 py-2 font-semibold mb-6 cursor-pointer">
            DIRECTIONS
          </div>
          <div className="border-t border-gray-700 py-4">
            <p className="text-lg">Hours:</p>
            <p className="text-lg">MON-FRI: {hours.monFri}</p>
            <p className="text-lg">SAT: {hours.sat}</p>
            <p className="text-lg">SUN: {hours.sun}</p>
          </div>
          <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            >
              {/* Child components, like markers, info windows, etc. here */}
            </GoogleMap>
          </LoadScript>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
