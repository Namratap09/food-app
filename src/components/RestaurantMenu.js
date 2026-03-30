import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { restoMenu } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () =>{
    const {resId}= useParams();
    console.log(resId)
    const[restaurantMenu,setRestaurantMenu]=useState()
    useEffect(() =>{
        fetchRestoData()
    },[])

    const fetchRestoData = async () => {
        console.log('inside fetchresto data')
        let response = await fetch(restoMenu + resId);
        let data = await response.json()
        const restoData= data?.data?.cards[2]?.card?.card?.info;
        console.log(restoData)
        setRestaurantMenu(restoData)
    }

    const { id, name, cuisines, costForTwo } = restaurantMenu || {};


 return (!restaurantMenu) ? <Shimmer/> : (
    <div>
      <p>{name}</p>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwo}</p>
    </div>
 )
}

export default RestaurantMenu;