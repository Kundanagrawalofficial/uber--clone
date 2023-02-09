import React from 'react'
import tw from "tailwind-styled-components"
import Map from "./components/map"
const confirm = () => {
  return (
    <Wrapper>
      <Map/>
      <RideContainer>

      </RideContainer>
    </Wrapper>
  )
}

export default confirm
const Wrapper=tw.div`
flex h-screen
`
const RideContainer=tw.div`
flex-1`
