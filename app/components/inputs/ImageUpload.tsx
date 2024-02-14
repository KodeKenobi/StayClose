import React, { useCallback, useState } from "react";
import { TbPhotoPlus } from "react-icons/tb";
import { useDropzone } from "react-dropzone";

interface ImageUploadProps {
  onChange: (value: string[]) => void;
  value: string[];
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFiles(acceptedFiles);
      const urls = acceptedFiles.map((file) => URL.createObjectURL(file));
      onChange([...value, ...urls]); // Concatenate the new URLs with the existing ones
    },
    [onChange, value]
  );

  const removeImage = (index: number) => {
    const updatedImages = [...value];
    updatedImages.splice(index, 1);
    onChange(updatedImages);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: true, // Allow multiple file selection
  });

  return (
    <div
      {...getRootProps()}
      className="relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600"
    >
      <input {...getInputProps()} />
      <TbPhotoPlus size={50} />
      <div className="font-semibold text-lg">Click to upload</div>
      {value.map((url, index) => (
        <div key={index} className="relative">
          <button
            className="absolute top-0 right-0 p-1 bg-gray-800 text-white rounded-full"
            onClick={() => removeImage(index)}
          >
            X
          </button>
          <img
            src={url}
            alt={`Uploaded Image ${index + 1}`}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageUpload;
