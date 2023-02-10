import "./Form.scss";
import Short from "../Short/Short";
import { useState } from "react";

const Form = ({
    handleSubmit, 
    formTitle,
    defaultFormState
}) => {
    const [cardInfo, setCardInfo] = useState(defaultFormState);

    const handleValidation = event => {
        event.preventDefault();
    
        if (Object.values(cardInfo).some(value => !value)) {
          alert("Missing content, unable to proceed");
          return;
        }
    
        handleSubmit(cardInfo);
      };

  return (
    <div className="add-art">
        <h2>{formTitle}</h2>
        <form className="form-container__form" onSubmit={handleValidation}> 
            <input
            className="form-container__input"
            type="text"
            placeholder="URL of art image"
            value={cardInfo.artImage}
            onInput={event => setCardInfo({ ...cardInfo, artImage: event.target.value })}
            />
            <input
            className="form-container__input"
            type="text"
            placeholder="Creator of art"
            value={cardInfo.createdBy}
            onInput={event => setCardInfo({ ...cardInfo, createdBy: event.target.value })}
            />
            <input
            className="form-container__input"
            type="text"
            placeholder="Description of art"
            value={cardInfo.artDescription}
            onInput={event => setCardInfo({ ...cardInfo, artDescription: event.target.value })}
            />
            <input
            className="form-container__input"
            type="text"
            placeholder="Name of art"
            value={cardInfo.artName}
            onInput={event => setCardInfo({ ...cardInfo, artName: event.target.value })}
            />
            <button className="form-container__button" onClick={handleSubmit}>
                Submit
            </button>
        </form>
    </div>
  )
}

export default Form