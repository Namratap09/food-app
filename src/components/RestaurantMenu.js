import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../customHooks/useRestaurantMenu"

const RestaurantMenu = () =>{
    const {resId}= useParams();
    const restoMenu =  useRestaurantMenu(resId)

    const { id, name, cuisines, costForTwo } = restoMenu || {};


 return (!restoMenu) ? <Shimmer/> : (
    <div>
      <p>{name}</p>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwo}</p>
    </div>
 )
}

export default RestaurantMenu;