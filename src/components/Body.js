import { useState, useEffect } from "react";
import RestoCard from "./RestoCard"
import { restaurantsList } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import { WithPromotedLabel } from "./RestoCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([])
  const [filteredRestoList, setFilteredRestoList] = useState([]);
  const [searchText, setSearchText] = useState("");
  //  WithPromotedLabel(RestoCard) function will return component
  const PromotedRestaurant = WithPromotedLabel(RestoCard)

  useEffect(() => { fetchData() }, []);

  let RestoList = []; 
  const fetchData = async () => {
    try {
      let response = await fetch(restaurantsList)
      const json = await response.json();
      RestoList = json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      //console.log(json)
      setListOfRestaurants(RestoList)

      let filteredRestos = RestoList.filter((restaurant) => {
        return restaurant.info.avgRating > 4.2
      })
      setFilteredRestoList(filteredRestos)
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
          let value = searchText.toLowerCase();
          const filteredRestoList = listOfRestaurants.filter((restaurant) => {
            //console.log(restaurant)
            return restaurant?.info?.name.toLowerCase().includes(value);
          })
          setFilteredRestoList(filteredRestoList)
        }}>Search</button>
        <div className="top-restos">
          <h3>Top Rated Restaurants</h3>
          {filteredRestoList.map(restaurant => (
              <Link key={restaurant.info.id} to={"/api/v1/listRestaurantMenu/"+ restaurant.info.id}>
                <div key={restaurant.info.id} className="restoCard" id="filtered card">
                  <RestoCard cardData={restaurant}></RestoCard>
                </div>
              </Link>
            ))
          }
        </div>
        <div className="dine-in-restos">
          <h3>Dine In Restaurants</h3>
          {listOfRestaurants.map(restaurant => (
            <Link key={restaurant.info.id} to={"/api/v1/listRestaurantMenu/"+ restaurant.info.id}>
              <div className="restoCard">
                {
                  restaurant.info.veg ? <PromotedRestaurant cardData={restaurant}></PromotedRestaurant> :
                  <RestoCard cardData={restaurant}></RestoCard>
                }
              </div>
            </Link>
          ))
          }
        </div>
      </div>
    </main>
  )
}

export default Body;