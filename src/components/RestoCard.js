import { CDNURL } from "../utils/constants";

const RestoCard = (props) => {
  const { cardData } = props;
  const {
    name,
    avgRating,
    cuisines,
    costForTwo,
    cloudinaryImageId,
    locality,
    areaName
  } = cardData?.info

  return (
    <>
      <div className="res-img-container">
        <img
          className="res-logo"
          src={CDNURL + cloudinaryImageId}
          alt={name}
        />
      </div>
      <div className="res-details">
        <h3 className="res-name">{name}</h3>
        <div className="res-meta">
          <span className="rating">⭐ {avgRating}</span>
        </div>
        <p className="cuisines">{cuisines.join(", ")}</p>
        <p className="location">{locality + "," + areaName}</p>
        <p className="cost">{costForTwo}</p>
      </div>
    </>
  )
}

export default RestoCard;