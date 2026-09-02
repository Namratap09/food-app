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
        // console.log(json)
        const restoMenuData = json?.data?.cards[4]?.groupedCard?.cardGroupMap;
        //console.log(restoMenuData)
        setRestoMenu(restoMenuData)
    }
    return restoMenu;
}

export default useRestaurantMenu; 