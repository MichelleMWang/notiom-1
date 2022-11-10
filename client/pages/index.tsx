import type { NextPage } from 'next'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import Link from 'next/link'
import Landing from "../pages/landing"

const Home: NextPage = ({user}: any) => {
  return (
    <div>
      <Landing></Landing>
    </div>
  )
}

export default Home
