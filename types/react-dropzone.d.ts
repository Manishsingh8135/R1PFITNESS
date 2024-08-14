// File: app/types/react-dropzone.d.ts

declare module 'react-dropzone' {
    import { DropzoneOptions } from 'react-dropzone';
    
    export function useDropzone(options?: DropzoneOptions): {
      getRootProps: (props?: any) => any;
      getInputProps: (props?: any) => any;
      isDragActive: boolean;
    };
  }