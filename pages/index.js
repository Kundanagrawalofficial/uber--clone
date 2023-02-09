import Head from 'next/head'
import Image from 'next/image'
// import styles from '@/styles/Home.module.css'
import tw from "tailwind-styled-components"
import mapboxgl from "!mapbox-gl"
import { useEffect } from 'react'
mapboxgl.accessToken=
'pk.eyJ1Ijoia3VuZGFuYWdyYXdhbCIsImEiOiJjbGR4YTBsaHkwY2hyM3FvYXZicGI1dmpjIn0.OC7q3kt1ad09Uww3IH0fxw'

export default function Home() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [-99.29011,39.39172],
      zoom: 3,
    });
  });
  return (
    <Wrapper>
      <Map id='map'>Map</Map>
      <ActionItems>Start</ActionItems>

    </Wrapper>
  )
}
const Wrapper=tw.div`
flex flex-col bg-red-300 h-screen
`

const Map=tw.div`
bg-red-500 flex-1

`


const ActionItems=tw.div`
flex-1
`