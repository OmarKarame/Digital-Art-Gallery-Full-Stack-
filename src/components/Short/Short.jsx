import "./Short.scss";

const Short = ({
  shortLabelText,
  shortType,
  shortPlaceHolderText,
  handleShortValue,
  inputClassName,
  name,
  value
}) => {
  return (
    <div className="short">
      <label className="short__label">{shortLabelText}</label>
      <input
        className={inputClassName}
        type={shortType}
        name={name}
        spellCheck="true"
        value={value}
        placeholder={shortPlaceHolderText}
        onInput={handleShortValue}
      ></input>
    </div>
  );
};

export default Short;