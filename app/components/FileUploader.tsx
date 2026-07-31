import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

interface FileUploaderProps {
  onFileSelect?: (file: File | null) => void;
}

const formatSize = (bytes: number) => {
  if (bytes < 1024) return `${bytes} B`;
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(2)} KB`;
  const mb = kb / 1024;
  if (mb < 1024) return `${mb.toFixed(2)} MB`;
  const gb = mb / 1024;
  return `${gb.toFixed(2)} GB`;
};

const FileUploader = ({ onFileSelect }: FileUploaderProps) => {
  const [file, setFile] = useState<File | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const selectedFile = acceptedFiles[0] ?? null;
      setFile(selectedFile);
      onFileSelect?.(selectedFile);
    },
    [onFileSelect]
  );

  const handleRemoveFile = useCallback(() => {
    setFile(null);
    onFileSelect?.(null);
  }, [onFileSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
    maxSize: 20 * 1024 * 1024,
  });

  return (
    <div className="w-full gradient-border rounded-3xl p-6">
      <div
        {...getRootProps()}
        className="cursor-pointer rounded-3xl bg-white p-6 text-center transition-shadow duration-200 hover:shadow-lg"
      >
        <input {...getInputProps()} />

        <div className="space-y-4">
          {file ? (
            <div className="uploader-selected-file" onClick={(e) => e.stopPropagation()}>
              <img src="/images/pdf.png" alt="pdf" className="size-10" />
              <div className="flex items-center space-x-3 rounded-2xl bg-slate-50 p-4 text-left">
                <div>
                  <p className="text-gray-700 truncate max-w-xs font-semibold text-slate-900">{file.name}</p>
                  <p className="text-gray-500 text-sm text-slate-500">
                    {formatSize(file.size)}
                  </p>
                </div>
              </div>
              <button className="p-2 cursor-pointer" onClick={(e) => {
                e.stopPropagation();
                handleRemoveFile();
              }}>
                <img src="/icons/cross.svg" alt="remove" className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 mb-2">
                <img src="/icons/info.svg" alt="upload" className="h-8 w-8" />
              </div>
              <p className="text-lg text-gray-500">
                <span className="font-semibold text-slate-900">Click to upload</span> or drag and drop
              </p>
              <p className="text-lg text-gray-500">PDF (MAX 20 MB)</p>
              {isDragActive && <p className="text-sm text-slate-500">Drop the file here...</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUploader;