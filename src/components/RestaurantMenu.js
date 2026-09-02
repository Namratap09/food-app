import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../customHooks/useRestaurantMenu"
import RestoCategory from "./RestoCategory";
import { useState } from "react";

// Parent component
// lifting state up
// moving the state from lower to upper component
const RestaurantMenu = () => {
	const { resId } = useParams();
	const restoMenu = useRestaurantMenu(resId)
	console.log(restoMenu?.REGULAR?.cards)
	const [showIndex, setShowIndex] = useState(0)

	const categories = restoMenu?.REGULAR?.cards.filter(
		(c) =>
			c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
	)

	console.log(categories)

	return (!categories) ? <Shimmer /> : (
		<div>
			<h2 className="text-center">Accordian</h2>
			{
				categories.map((category,index) => (
					<RestoCategory key={category?.card?.card?.itemCards[0]?.card?.info?.id}
					  data={category?.card?.card}
						showItems={index === showIndex ? true : false} 
						setShowIndex = {()=> setShowIndex(index)}/>
				))
			}
		</div>
	)
}

export default RestaurantMenu;