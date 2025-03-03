import { UploadCloud, X } from "lucide-react";
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Label } from "../label";

interface UploaderProps {
  label: string;
  name: string;
  onChange: (event: { target: { name: string; value: File | File[] | null } }) => void;
  helperText?: string | boolean;
  multiple?: boolean;
}

const Uploader: React.FC<UploaderProps> = ({ label, name, onChange, helperText, multiple = false }) => {
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleImageRemove = (index: number) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    const newPreviews = imagePreviews.filter((_, i) => i !== index);
    
    setSelectedFiles(newFiles);
    setImagePreviews(newPreviews);

    onChange({
      target: {
        name,
        value: multiple ? newFiles : newFiles[0] || null,
      },
    });
  };

  return (
    <Dropzone
      onDrop={(acceptedFiles: File[]) => {
        const validImageTypes = ["image/jpeg", "image/png", "image/jpg"];
        const filteredFiles = acceptedFiles.filter(file => validImageTypes.includes(file.type));

        if (filteredFiles.length === 0) {
          setErrorMessage("Please upload a valid image file (JPG, PNG). ");
          return;
        }

        setErrorMessage(null);
        const previewUrls = filteredFiles.map(file => URL.createObjectURL(file));
        
        setImagePreviews(multiple ? [...imagePreviews, ...previewUrls] : previewUrls);
        setSelectedFiles(multiple ? [...selectedFiles, ...filteredFiles] : filteredFiles);

        onChange({
          target: {
            name,
            value: multiple ? [...selectedFiles, ...filteredFiles] : filteredFiles[0],
          },
        });
      }}
      multiple={multiple}
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

          {/* Display Image Previews */}
          <div className="mt-4 grid grid-cols-3 gap-4">
            {imagePreviews.map((preview, index) => (
              <div key={index} className="relative bg-white shadow-lg rounded-lg p-2 w-32 h-32">
                <img src={preview} alt="Preview" className="w-full h-full object-cover rounded-lg" />
                <button
                  onClick={() => handleImageRemove(index)}
                  className="absolute top-1 right-1 bg-gray-700 text-white rounded-full p-1 hover:bg-gray-900 transition-all"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </section>
      )}
    </Dropzone>
  );
};

export default Uploader;