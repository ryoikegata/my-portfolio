import useCreateGeometry from '@/hooks/useCreateGeometry';
import Nav from '@/components/Nav'
import Geometry from '@/components/Geometry'
import { useEffect } from 'react'


export default function Home({}) {
  return (
    <div className='w-screen h-screen bg-radial-gradient relative overflow-hidden'>
    <Nav></Nav>
    <Geometry></Geometry>
    </div>
  )
}
