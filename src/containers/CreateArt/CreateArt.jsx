import "./CreateArt.scss";
import Form from "../../components/Form/Form";

const CreateArt = () => {

    const handleSubmit = async artImage => {
        const response = await fetch(`http://localhost:8080/artimage/`, {
            method: "POST",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            },
            body: JSON.stringify(artImage)});
    };

    const defaultFormState = { artImage: "", createdBy: "", artDescription: "", artName: ""}

  return (
    <div className="create-art">
        <h2 className="create-art__title">Create Art</h2>
        <Form 
            shortLabelTextOne="Image URL:"
            shortLabelTextTwo="Name of Creator:"
            shortLabelTextThree="Description for Art"
            shortPlaceHolderTextFour="Name of the Art"
            formTitle="Create a new addition to the gallery"
            handleSubmit={handleSubmit}
            defaultFormState={defaultFormState}
        />
    </div>
  )
}

export default CreateArt;