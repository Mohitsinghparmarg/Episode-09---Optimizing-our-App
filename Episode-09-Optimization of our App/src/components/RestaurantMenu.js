import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utills/useRestaurantMenu";

const RestaurantMenu = () => {
       

       const {resId} = useParams();


       const resInfo = useRestaurantMenu(resId);
  
      if(resInfo === null) 
      return <Shimmer/>
   
      const {name,cuisines,costForTwoMessage} = resInfo?.cards[0].card?.card?.info;
      const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
      
        console.log(itemCards);


  return (
    <div className="menu">
          <h1>{name}</h1>
         <h2>{cuisines.join(",")}</h2>
         <h3>{costForTwoMessage}</h3>

         <ul>
             {itemCards.map(item =>(
                <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                ))}
            
         </ul>
    </div>
  )
}

export default RestaurantMenu;