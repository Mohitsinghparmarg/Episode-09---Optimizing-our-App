import RestaurantCard from "./RestaurantCard";
import {useState,useEffect} from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utills/useOnlineStatus";


const Body = () => {
      
        const [ListOfRestaurants,setListOfRestaurant] = useState([]);
         const [filteredRestaurant,setFilteredRestaurant] = useState([]);
        const [searchText,setSearchText] = useState("");

       useEffect(() =>{
            fetchData();
       },[]);
      const fetchData = async () =>{
           const data = await fetch(
                 "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.775411574373877&lng=86.14687514014905&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
          
            const json = await data.json();

            console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            
           setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
           setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        };

      const onlineStatus = useOnlineStatus();

      if(onlineStatus === false)
          return (
                <h1>Looks like yo're offline!! Please check you Internet Connection </h1>
            )

    

        return ListOfRestaurants?.length === 0 ? <Shimmer/> :  (
      <div className="body">
        <div className="filter">
            <div className="search">
               <input
                  type="text" className="search-box" 
                  value={searchText} onChange={(e)=>{
                  setSearchText(e.target.value);
               }} />
               <button onClick={() =>{
                const filteredRestaurant = ListOfRestaurants.filter(
                    (res) =>
                     res.data.name.toLowerCase().includes(searchText.toLowerCase())
                );
                 setFilteredRestaurant(filteredRestaurant);
               }}>Search</button>
            </div>
          <button className="filter-btn"
            onClick={ () =>
              {
                 const filteredList = ListOfRestaurants.filter(
                    (res) => res.data.avgRating>4
                );
                 setListOfRestaurant(filteredList);
              }
            }
          >Top Rated Restaurants
         </button>
        </div>
        <div className="res-container">
          {filteredRestaurant?.map((restaurant) => (
             <Link
                 key={restaurant.info.id}
                 to= {"/restaurants/"+restaurant.info.id}>
                <RestaurantCard resData={restaurant} 
                /> 
               </Link>
          ))}
        </div>
      </div>
    );
  };

  export default Body;