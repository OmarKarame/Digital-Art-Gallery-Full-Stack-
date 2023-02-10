import "./ArtList.scss";
import ArtCard from "../ArtCard/ArtCard";
import { Link } from "react-router-dom";

const ArtList = ({ artImages }) => {
  return (
      <div className="art-list">
        {artImages.map(artImage => (
          <Link key={artImage.id} to={`/artimage/edit/${artImage.id}`}>
            <ArtCard artImage={artImage} />
          </Link>
        ))}
      </div>
  )
}

export default ArtList