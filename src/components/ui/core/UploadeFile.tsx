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
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleImageRemove = (index: number) => {
    const updatedPreviews = imagePreviews.filter((_, i) => i !== index);
    const updatedFiles = selectedFiles.filter((_, i) => i !== index);

    setImagePreviews(updatedPreviews);
    setSelectedFiles(updatedFiles);

    const event = {
      target: {
        name,
        value: updatedFiles,
      },
    } as React.ChangeEvent<HTMLInputElement>;

    onChange(event);
  };

  return (
    <Dropzone
      onDrop={(acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
          const validImageTypes = ["image/jpeg", "image/png", "image/jpg"];

          const filteredFiles = acceptedFiles.filter((file) => validImageTypes.includes(file.type));
          if (filteredFiles.length === 0) {
            setErrorMessage("Please upload valid image files (JPG, PNG).");
            return;
          }

          setErrorMessage(null);

          const previewUrls = filteredFiles.map((file) => URL.createObjectURL(file));

          setImagePreviews((prev) => [...prev, ...previewUrls]);
          setSelectedFiles((prev) => [...prev, ...filteredFiles]);

          const event = {
            target: {
              name,
              value: [...selectedFiles, ...filteredFiles], // Include previous files
            },
          } as React.ChangeEvent<HTMLInputElement>;

          onChange(event);
        }
      }}
      multiple // Allow multiple file selection
    >
      {({ getRootProps, getInputProps }) => (
        <section>
          <Label>{label}</Label>
          <div
            className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition-all"
            {...getRootProps()}
          >
            <input accept="image/*" {...getInputProps()} name={name} multiple />
            <UploadCloud className="w-6 h-6 text-gray-500" />
            <p className="text-gray-600 mt-2">
              Drag & drop files here, or click to select
            </p>
          </div>

          {helperText && <p className="text-sm text-red-500 mt-2">{helperText}</p>}
          {errorMessage && <p className="text-sm text-red-500 mt-2">{errorMessage}</p>}

          {/* Display Multiple Image Previews */}
          {imagePreviews.length > 0 && (
            <div className="mt-4 grid grid-cols-3 gap-2">
              {imagePreviews.map((preview, index) => (
                <div key={index} className="relative bg-white shadow-lg rounded-lg p-2">
                  <img
                    src={preview}
                    alt={`Preview ${index + 1}`}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  {/* Remove Image Button */}
                  <button
                    onClick={() => handleImageRemove(index)}
                    className="absolute top-1 right-1 bg-gray-700 text-white rounded-full p-1 hover:bg-gray-900 transition-all"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </section>
      )}
    </Dropzone>
  );
};

export default Uploader;
