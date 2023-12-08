import { Photo } from '@/lib/photos'
import Image from 'next/image'

export default function Frame({ photo }: { photo: Photo}) {
  return (

      <Image
        alt=""
        src={photo.imageSrc}
        height={800}
        width={800}
      />

  )
}