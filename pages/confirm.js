import React from 'react'
import tw from "tailwind-styled-components"
import Map from "./components/Map"
const confirm = () => {
  return (
    <Wrapper>
      <Map/>
    </Wrapper>
  )
}

export default confirm
const Wrapper=tw.div`
flex h-screen
`
