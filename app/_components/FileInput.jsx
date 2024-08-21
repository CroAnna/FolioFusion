import { useEffect } from "react";
import Resizer from "react-image-file-resizer";

const FileInput = ({
  setFile,
  fileInputRef,
  label,
  file,
  disabled = false,
}) => {
  const handleChange = async (event) => {
    const file = event.target.files[0];
    const resized = await resizeFile(file);
    setFile(resized);
  };

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        1920,
        8000,
        "JPEG",
        20,
        0,
        (uri) => {
          resolve(uri);
        },
        "file"
      );
    });

  useEffect(() => {
    if (fileInputRef.current && file) {
      const dataTransfer = new DataTransfer();
      if (file instanceof File) {
        dataTransfer.items.add(file);
        fileInputRef.current.files = dataTransfer.files;
      } else {
        console.error("Provided file is not an instance of File.");
      }
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
        disabled={disabled}
        type="file"
        onChange={handleChange}
        className="file-input file-input-bordered w-full"
      />
    </div>
  );
};

export default FileInput;
