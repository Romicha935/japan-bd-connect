// app/culture/tourist/[slug]/page.tsx

import { bdPlaces } from '../../../../data/bdPlace'; // এখানে ঠিক bdPlaces import করো
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface Props {
  params: { slug: string };
}


export function generateStaticParams() {
  return bdPlaces.map(place => ({
    slug: place.slug,
  }));
}

const TouristPlacePage = ({ params }: Props) => {
  const place = bdPlaces.find(item => item.slug === params.slug);

  if (!place) return notFound();

  return (
    <div className='max-w-4xl mx-auto px-4 py-16'>
      <h1 className='text-4xl font-bold text-blue-700 mb-6'>{place.title}</h1>
      <Image
        src={place.image}
        alt={place.title}
        width={800}
        height={500}
        className='w-full h-96 object-cover rounded-xl mb-6'
      />
      <p className='text-lg text-gray-700'>{place.fullDesc}</p>
    </div>
  );
};

export default TouristPlacePage;
