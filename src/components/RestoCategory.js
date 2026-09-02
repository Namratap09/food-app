import { useState } from "react";
import ItemList from "./ItemList";

// Lifting state up: Child component of restaurant Menu
const RestoCategory = (props) => {
  const { data, showItems, setShowIndex } = props

  //const [activeIndex, setActiveIndex] = useState(0)
  const HandleClick = () => {
    setShowIndex()
  }

  console.log(data)
  return (
    <>
      <div className="bg-red-50">
        <h3 className="text-center inline-block" onClick={HandleClick}>{data?.title}</h3>
        {showItems && <ItemList />}
      </div>
    </>
  )
}

export default RestoCategory;