import Head from 'next/head'
import Image from 'next/image'
// import styles from '@/styles/Home.module.css'
import tw from "tailwind-styled-components"
import Map from "./components/map"
import Link from 'next/link'
export default function Home() {
  
  return (
    <Wrapper>
      <Map/>
      <ActionItems>
        {/* Header */}
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"/>
          <Profile>
            <Name>Kundan</Name>
            <UserImage src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80"/>
          </Profile>
        </Header>
        <ActionButtons>

          <Link href="/search">
          <ActionButton>
          <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png"/> 
          Ride
        </ActionButton>
        </Link>
          <ActionButton>
          <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png"/>
           Wheels
        </ActionButton>
        <ActionButton>
        <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png"/>
           Reserve
        </ActionButton>
        </ActionButtons>
      </ActionItems>
      <InputButton>
      Where to ?
      </InputButton>

    </Wrapper>
  )
}
const Wrapper=tw.div`
flex flex-col  h-screen
`


const ActionItems=tw.div`
flex-1 p-4
`
const Header=tw.div`
flex justify-between item center

`
const UberLogo= tw.img `
h-28
`
const Profile=tw.div`
flex items-center`
const Name=tw.div`
mr-4 w-20 text-sm`
const UserImage=tw.img`
h-12 w-12 rounded-full border border-gray-200 p-px`
const ActionButtons=tw.div`
flex
`
const ActionButton=tw.div`
flex bg-gray-200 flex-1 m-1 h-34 items-center flex-col justify-center rounded-lg hover:scale-105 transition text-xl

`
const ActionButtonImage=tw.img`
h-3/5`
const InputButton=tw.div`
h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8`

