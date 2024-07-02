import { useEffect } from "react";

const FileInput = ({ setFile, fileInputRef, label, file }) => {
  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  useEffect(() => {
    if (fileInputRef.current && file) {
      const dataTransfer = new DataTransfer();
      dataTransfer.items.add(file);
      fileInputRef.current.files = dataTransfer.files;
    }
  }, [file, fileInputRef]);

  return (
    <div className="w-full">
      {label && (
        <div className="label pb-0 pt-0">
          <span className="label-text text-base w-full">{label}</span>
        </div>
      )}
      <input
        ref={fileInputRef}
        accept="image/*"
        type="file"
        onChange={handleChange}
        className="file-input file-input-bordered w-full"
      />
    </div>
  );
};

export default FileInput;
