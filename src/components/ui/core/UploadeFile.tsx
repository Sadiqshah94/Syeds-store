import { UploadCloud, X } from "lucide-react";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Label } from "../label";

interface UploaderProps {
  label: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  helperText?: string | boolean;
}

const Uploader: React.FC<UploaderProps> = ({ label, name, onChange, helperText }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageRemove = () => {
    setImagePreview(null); 
    const event = {
      target: {
        name,
        value: "",
      },
    } as React.ChangeEvent<HTMLInputElement>;

    onChange(event); 
  };

  return (
    <Dropzone
      onDrop={(acceptedFiles:any) => {
        if (acceptedFiles.length > 0) {
          const file = acceptedFiles[0]; 

          setImagePreview(URL.createObjectURL(file));

          const event = {
            target: {
              name,
              value: file, 
            },
          } as React.ChangeEvent<HTMLInputElement>;

          onChange(event); 
        }
      }}
    >
      {({ getRootProps, getInputProps }:any) => (
        <section>
          <Label>{label}</Label>
          <div
            className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition-all"
            {...getRootProps()}
          >
            <input {...getInputProps()} name={name} />
            <UploadCloud className="w-12 h-12 text-gray-500" />
            <p className="text-gray-600 mt-2">
              Drag & drop files here, or click to select
            </p>
          </div>

          {helperText && <p className="text-sm text-red-500 mt-2">{helperText}</p>}
          {imagePreview && (
            <div className="mt-4 relative max-w-xs mx-auto bg-white shadow-lg rounded-lg p-4">
              <p className="text-gray-600">Uploaded Image:</p>
              <div className="relative">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="mt-2 w-full h-32 object-cover rounded-lg"
                />
                {/* Close Button */}
                <button
                  onClick={handleImageRemove}
                  className="absolute top-2 right-2 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-900 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </section>
      )}
    </Dropzone>
  );
};

export default Uploader;
