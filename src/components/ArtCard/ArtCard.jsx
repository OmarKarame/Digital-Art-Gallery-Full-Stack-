import './ArtCard.scss';

const ArtCard = ({ artImage }) => {
  return (
    <div className="art">
      <img src={artImage.artImage} alt="Art being displayed in gallery" />
      <h3 className="art__title">{artImage.artName}</h3>
      <p className="art__text">Created by: {artImage.createdBy}</p>
    </div>
  )
}

export default ArtCard