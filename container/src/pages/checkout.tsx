import Head from 'next/head'
import { DefaultLayout } from '../layouts/DefaultLayout'

export default function Checkout() {
  return (
    <>
      <Head>
        <title>Coffee Delivery - Checkout</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <DefaultLayout>
        Checkout
      </DefaultLayout>
    </>
  )
}