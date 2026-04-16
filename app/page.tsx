
import FeaturedSection from '@/components/web/HomePage/Featured-section'
import HeroSection from '@/components/web/HomePage/Hero'
import RecentlyLaunchedProducts from '@/components/web/HomePage/recently-launched-products'
import ProductSkeleton from '@/components/web/Product/product-skeleton'
import React, { Suspense } from 'react'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <FeaturedSection/>
      <Suspense fallback ={<div><ProductSkeleton/></div>}>
      <RecentlyLaunchedProducts/>
      </Suspense>
    </div>
  )
}

export default Home
