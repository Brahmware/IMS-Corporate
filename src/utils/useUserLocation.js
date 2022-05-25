import axios from 'axios';
import { useEffect, useState } from 'react'

const useUserLocation = () => {
    const [userLocation, setUserLocation] = useState({});

    useEffect(() => {
      axios.get("https://api.db-ip.com/v2/free/self").then((response) => {
        response.status && response.status === 200 ?
        setUserLocation({
          "continentcode": response.data["continentCode"],
          "continentname": response.data["continentName"],
          "countrycode": response.data["countryCode"],
          "countryname": response.data["countryName"]
        }) :
        setUserLocation({
          "continentcode": "AS",
          "continentname": "Asia",
          "countrycode": "IN",
          "countryname": "India"
        })
      }).catch((err) => {
        console.error("We are unable to fetch your location. Please select it manually!")
      })
    }, [])

    return userLocation;
}

export default useUserLocation