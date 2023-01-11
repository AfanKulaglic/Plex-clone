import React from 'react'
import { NavbarCmp } from './Components/NavbarCmp'
import { CarouselCmp } from './Components/CarouselCmp'
import { UnderCarouselCmp } from './Components/UnderCarouselCmp'
import { BorderRegisterCmp } from './Components/BorderRegisterCmp'
import { MoviesRecommendCmp } from './Components/MoviesRecommendCmp'
import { StreamTvCmp } from './Components/StreamTvCmp'
import { CompatibleInfoCmp } from './Components/CompatibleInfoCmp'
import { ProudPartnersCmp } from './Components/ProudPartnersCmp'
import { FooterCmp } from './Components/FooterCmp'
import './home.css'

export const HomePage = () => {
  return (
    <div style={{overflow:'hidden',marginLeft:'50px',marginRight:'50px'}}>
        <NavbarCmp />
        <CarouselCmp />
        <UnderCarouselCmp />
        <BorderRegisterCmp />
        <MoviesRecommendCmp />
        <StreamTvCmp />
        <CompatibleInfoCmp />
        <ProudPartnersCmp />
        <FooterCmp />
    </div>
  )
}
