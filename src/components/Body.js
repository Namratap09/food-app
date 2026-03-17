import { useState, useEffect } from "react";
import RestoCard from "./RestoCard"
import { restaurantsList } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([])
  const [filteredRestoList, setFilteredRestoList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => { fetchData() }, []);

  let RestoList = [];
  const fetchData = async () => {
    try {
      let response = await fetch(restaurantsList)
      const json = await response.json();
      RestoList = json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      setListOfRestaurants(RestoList)

      let filteredRestos = RestoList.filter((restaurant) => restaurant.info.avgRating > 4.2)
      console.log(filteredRestos, "filtered restos")
      setFilteredRestoList(filteredRestos)
      console.log(filteredRestoList, "filtered restos via set")

    } catch (error) {
      console.error("error while fetching the data")
    }
  }
  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <main>
      <div className="res-container">
        <input type="text" value={searchText} onChange={
          (e) => {
            setSearchText(e.target.value)
          }} ></input>
        <button onClick={() => {
          let value = searchText;
          const filteredRestoList = listOfRestaurants.filter((restaurant) => {
            return restaurant?.info?.name.toLowerCase().includes(value.toLowerCase);
          })
          console.log(filteredRestoList)
          setFilteredRestoList(filteredRestoList)
          }}>Search</button>
        <div className="top-restos">
          <h3>Top Rated Restaurants</h3>
          {
            filteredRestoList.map(restaurant => (
              <div key={restaurant.info.id} className="restoCard">
                <RestoCard cardData={restaurant}></RestoCard>
              </div>
            ))
          }
        </div>
        <div className="dine-in-restos">
          <h3>Dine In Restaurants</h3>
          {listOfRestaurants.map(restaurant => (
            <div key={restaurant.info.id} className="restoCard">
              <RestoCard cardData={restaurant}></RestoCard>
            </div>
          ))
          }
        </div>
      </div>
    </main>
  )
}

export default Body;