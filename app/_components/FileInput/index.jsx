const FileInput = ({ setFile, fileInputRef }) => {
  const handleChange = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <input
      ref={fileInputRef}
      accept="image/*"
      type="file"
      onChange={handleChange}
      className="file-input file-input-bordered w-full max-w-xs"
    />
  );
};

export default FileInput;
