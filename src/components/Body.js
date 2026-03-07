import { useState, useEffect } from "react";
import RestoCard from "./RestoCard"
import { restaurantsList } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([])
  useEffect(() => { fetchData() }, []);

  let RestoList = [];
  const fetchData = async () => {
    try {
      let response = await fetch(restaurantsList)
      const json = await response.json();
      RestoList = json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      setListOfRestaurants(RestoList)
    } catch (error) {
      console.error("error while fetching the data")
    }
  }
  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <main>
      <div  className="res-container">
        {listOfRestaurants.map(restaurant => (
          <div key={restaurant.info.id} className="restoCard">
            <RestoCard cardData={restaurant}></RestoCard>
          </div>
        ))
        }
      </div>
    </main>
  )
}

export default Body;