import Head from 'next/head'
import { DefaultLayout } from '../layouts/DefaultLayout'

import {
  HomeContainer,
  HomeContent,
} from '../styles/pages/Home'

// @ts-ignore
import { HeroSection } from '@lucascprazeres/hero'
// @ts-ignore
import { ProductsSection } from '@lucascprazeres/products'

export default function Home() {
  return (
    <>
      <Head>
        <title>Coffee Delivery - Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <DefaultLayout>
        <HomeContainer>
          <HomeContent>
            <HeroSection />
            <ProductsSection />
          </HomeContent>
        </HomeContainer>
      </DefaultLayout>
    </>
  )
}
