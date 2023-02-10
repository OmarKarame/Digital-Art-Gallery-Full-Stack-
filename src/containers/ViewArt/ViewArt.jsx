import "./ViewArt.scss";
import { useState, useEffect } from "react";
import ArtList from "../../components/ArtList/ArtList";
import SearchBar from "../../components/SearchBar/SearchBar";

const ViewArt = () => {
    const [artImages, setArtImages] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchInput = (event) => {
        setSearchTerm(event.target.value);
      };

    const getArtImages = async () => {
        console.log("called again");
        const response = await fetch("http://localhost:8080/artimages");
        const data = await response.json();
        setArtImages(data.map(artImage => {
            return artImage;
        }));
      };

      useEffect(() => {
        getArtImages();
        console.log(artImages);
      }, []);

  return (
    <div className="view-art">
        <h1>DIGITAL ART GALLERY</h1>
        <div>
            <SearchBar 
                placeHolderText="Search for art by name"
                handleSearchInput={handleSearchInput}
                value={searchTerm}
            />
        </div>
        <div>
            <ArtList artImages={artImages}/>
        </div>
    </div>
  )
}

export default ViewArt