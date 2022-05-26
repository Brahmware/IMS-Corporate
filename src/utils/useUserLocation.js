import axios from 'axios';
import { useEffect, useState } from 'react'

const useUserLocation = async () => {
    const [userLocation, setUserLocation] = useState({});

    useEffect(() => {

      let isFetched = false;
      axios.get("https://api.db-ip.com/v2/free/self").then((response) => {

        if(!isFetched) {
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
        }
      }).catch((err) => {
        isFetched = true;
        console.error("We are unable to fetch your location. Please select it manually!")
      })

      return () => {
        isFetched = true
      }

    }, [])

    Object.keys(userLocation).forEach((key) => {
      localStorage.setItem(key, userLocation[key])
    })
}

export default useUserLocation