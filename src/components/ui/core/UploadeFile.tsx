import { UploadCloud, X } from "lucide-react";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Label } from "../label";

interface UploaderProps {
  label: string;
  name: string;
  onChange: (event: { target: { name: string; value: File | null } }) => void;
  helperText?: string | boolean;
}

const Uploader: React.FC<UploaderProps> = ({ label, name, onChange, helperText }) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleImageRemove = () => {
    setImagePreview(null);
    setSelectedFile(null);

    onChange({
      target: {
        name,
        value: null,
      },
    });
  };

  return (
    <Dropzone
      onDrop={(acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) {
          const validImageTypes = ["image/jpeg", "image/png", "image/jpg"];
          const file = acceptedFiles[0];

          if (!validImageTypes.includes(file.type)) {
            setErrorMessage("Please upload a valid image file (JPG, PNG). ");
            return;
          }

          setErrorMessage(null);
          const previewUrl = URL.createObjectURL(file);
          setImagePreview(previewUrl);
          setSelectedFile(file);

          onChange({
            target: {
              name,
              value: file,
            },
          });
        }
      }}
      multiple={false}
    >
      {({ getRootProps, getInputProps }) => (
        <section>
          <Label>{label}</Label>
          <div
            className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition-all"
            {...getRootProps()}
          >
            <input accept="image/*" {...getInputProps()} name={name} />
            <UploadCloud className="w-6 h-6 text-gray-500" />
            <p className="text-gray-600 mt-2">Drag & drop an image here, or click to select</p>
          </div>

          {helperText && <p className="text-sm text-red-500 mt-2">{helperText}</p>}
          {errorMessage && <p className="text-sm text-red-500 mt-2">{errorMessage}</p>}

          {/* Display Single Image Preview */}
          {imagePreview && (
            <div className="mt-4 relative bg-white shadow-lg rounded-lg p-2 w-32 h-32">
              <img src={imagePreview} alt="Preview" className="w-full h-full object-cover rounded-lg" />
              {/* Remove Image Button */}
              <button
                onClick={handleImageRemove}
                className="absolute top-1 right-1 bg-gray-700 text-white rounded-full p-1 hover:bg-gray-900 transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}
        </section>
      )}
    </Dropzone>
  );
};

export default Uploader;
