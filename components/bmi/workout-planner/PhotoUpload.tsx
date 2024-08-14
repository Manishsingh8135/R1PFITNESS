// File: app/components/WorkoutPlanner/PhotoUpload.tsx

"use client";

import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { motion } from 'framer-motion';
import { FaCloudUploadAlt } from 'react-icons/fa';
import { Button } from "../../../ /ui/button";

interface PhotoUploadProps {
  onUpload: (photos: File[]) => void;
}

const PhotoUpload: React.FC<PhotoUploadProps> = ({ onUpload }) => {
  const [photos, setPhotos] = useState<File[]>([]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setPhotos(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop, 
    accept: {'image/*': []}, 
    maxFiles: 3 
  });

  const handleUpload = () => {
    if (photos.length > 0) {
      onUpload(photos);
    }
  };

  return (
    <div className="space-y-4">
      <div 
        {...getRootProps()} 
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
          isDragActive ? 'border-amber-400 bg-amber-400/10' : 'border-gray-600 hover:border-amber-400'
        }`}
      >
        <input {...getInputProps()} />
        <FaCloudUploadAlt className="mx-auto text-4xl mb-4 text-amber-400" />
        <p className="text-lg">Drag & drop up to 3 photos here, or click to select files</p>
      </div>
      {photos.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative aspect-square"
            >
              <img 
                src={URL.createObjectURL(photo)} 
                alt={`Uploaded photo ${index + 1}`} 
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          ))}
        </div>
      )}
      <Button 
        onClick={handleUpload} 
        disabled={photos.length === 0} 
        className="w-full bg-amber-500 text-black hover:bg-amber-600"
      >
        Upload and Analyze Photos
      </Button>
    </div>
  );
};

export default PhotoUpload;