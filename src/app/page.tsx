'use client'

import { FoodList } from '../components/FoodList'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FoodList />
    </>
  )
}
