import AIContentSuggestion from "./AIContentSuggestion";

const Textarea = ({
  allowAIRecommendation = false,
  onGenerateContentWithAI = () => {},
  label = "",
  error,
  name,
  placeholder,
  disabled = false,
  required = false,
  onChange,
  rows,
  value,
}) => {
  return (
    <div className="w-full">
      <label className="form-control">
        <div className="label pb-0 pt-0">
          <span className="label-text text-base flex gap-2">
            {label}
            {allowAIRecommendation &&
              value.split("").length >= 20 &&
              value.split("").length < 100 && (
                <AIContentSuggestion
                  onGenerateContentWithAI={onGenerateContentWithAI}
                />
              )}
          </span>
        </div>
        <textarea
          className="textarea textarea-bordered h-24 text-base"
          id={name}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          required={required}
          rows={rows}
          value={value}
        ></textarea>
      </label>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default Textarea;
