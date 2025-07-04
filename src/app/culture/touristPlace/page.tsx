import Image from 'next/image'
import React from 'react'
import { bdPlaces as places } from '@/data/bdPlace'

type Props = {
    params: {
        slug: string
    }
}
const BDTourDetails = ({params}: Props) => {
    const place = places.find((p)=> p.slug === params.slug)
    if(!place){
        return <div className='text-center py-20'>Place not Found</div>
    }

  return (
    <section className='bg-white py-16 px-6 w-full '>
      <Image src={place.image} alt={place.title}/>
      <h1 className=''>{place.title}</h1>
      <p>{place.fullDesc}</p>
    </section>
  )
}

export default BDTourDetails