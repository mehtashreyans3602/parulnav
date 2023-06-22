// import Image from 'next/image'
import Directions from '@/components/MapComponent'
// import { useUser } from  '@auth0/nextjs-auth0/client';
import Profile from './profile';

export default function Home() {
  // const { user, error, isLoading } = useUser();

  // console.log(user);
  return (
    <>
      {/* <Directions /> */}
      <Profile/>
    </>
  )
}
