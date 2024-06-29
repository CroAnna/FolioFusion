const FileInput = ({ setFile, fileInputRef, label, onChange }) => {
  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

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
