import { CDNURL } from "../utils/constants";

const RestoCard = (props) => {
  const { cardData } = props;
  const {
    name,
    avgRating,
    cuisines,
    costForTwo,
    cloudinaryImageId
  } = cardData?.info

  return (
    <>
      <img
        className="res-logo"
        src={CDNURL + cloudinaryImageId}
        alt="Pizza Paradise"
      />
      <div className="res-details">
        <h3 className="res-name">{name}</h3>
        <div className="res-meta">
          <span className="rating">⭐ {avgRating}</span>
          <span className="dot">•</span>
        </div>
        <p className="cuisines">{cuisines.join(", ")}</p>
        <p className="location">MG Road, Central District</p>
        <p className="cost">{costForTwo}</p>
      </div>
    </>
  )
}

export default RestoCard;