import React, { useEffect } from 'react'
import tw from "tailwind-styled-components"
import Map from "./components/map"
const Confirm = () => {
    const getCoordinates=()=>{
        const location ="Santa Monica"
        //good
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?`+
        new URLSearchParams({
            accessToken:
'pk.eyJ1Ijoia3VuZGFuYWdyYXdhbCIsImEiOiJjbGR4YTBsaHkwY2hyM3FvYXZicGI1dmpjIn0.OC7q3kt1ad09Uww3IH0fxw'
        })
    )
        .then(response=> response.json())
        .then(data=>{
            console.log(data)
        })
    }
    useEffect(()=>{
     getCoordinates();
    },[])

    return(
    <Wrapper>
      <Map/>
      <RideContainer>

         Ride Selector
         Confirm Button
      </RideContainer>
    </Wrapper>
  )
}

export default Confirm
const Wrapper=tw.div`
flex h-screen flex-col
`
const RideContainer=tw.div`
flex-1`
