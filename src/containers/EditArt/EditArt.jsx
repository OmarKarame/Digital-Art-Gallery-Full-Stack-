import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Form from "../../components/Form/Form";
import ArtCard from "../../components/ArtCard/ArtCard";
import "./EditArt.scss";

const EditArt = () => {
  const { id } = useParams();
//   const navigate = useNavigate();
  const [artCard, setArtCard] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const getArtCardById = async id => {
    const response = await fetch(`http://localhost:8080/artimage/${id}`);
    const data = await response.json();
    setArtCard(data);
  };

  useEffect(() => {
    getArtCardById(id);
  }, [id]);

  const handleUpdateArtCard = async updatedArtCard => {
    const response = await fetch(`http://localhost:8080/artimage/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf8",
      },
      body: JSON.stringify(updatedArtCard),
  })
  };

  const handleDeleteArtImage = async () => {
    const response = await fetch(`http://localhost:8080/artimage/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf8",
      }
  })
  };

  const handleShowForm = () => setShowForm(!showForm);

  return (
    <section class="edit-art">
      <h2 class="edit-art">Edit Art</h2>
      <div class="edit-art__content">
        <ArtCard artImage={artCard} />
        <div class="edit-art__buttons">
          <button
            class={showForm ? "edit-art__button" : "edit-art__button edit-art__button--secondary"}
            onClick={handleShowForm}
          >
            Update
          </button>
          <button class="edit-art__button edit-art__button--secondary" onClick={handleDeleteArtImage}>
            Delete
          </button>
        </div>
      </div>
      {showForm && <Form defaultFormState={artCard} formTitle="Update Art" handleSubmit={handleUpdateArtCard} />}
    </section>
  );
};

export default EditArt;
