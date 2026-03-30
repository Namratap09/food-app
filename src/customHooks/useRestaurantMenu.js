import { useEffect, useState } from "react"
import { restoMenuApi } from "../utils/constants"

const useRestaurantMenu = (resId) => {
    const [restoMenu, setRestoMenu] = useState('online');
    useEffect(()=>{
        fetchRestoData()
    },[])

    const fetchRestoData = async () => {
        const response = await fetch(restoMenuApi + resId);
        const json = await response.json()
        const restoMenuData = json?.data?.cards[2]?.card?.card?.info;
        setRestoMenu(restoMenuData)
    }
    return restoMenu;
}

export default useRestaurantMenu; 