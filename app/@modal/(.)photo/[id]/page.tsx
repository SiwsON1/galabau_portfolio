"use client";

import { useRouter } from 'next/navigation';
import swagPhotos, { Photo } from '@/lib/photos';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogFooter
} from '@/components/ui/dialog';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function PhotoModal({ params: { id: photoId } }: { params: { id: string } }) {
    const router = useRouter();

    const photos = swagPhotos
  const photo: Photo = photos.find((p) => p.id === photoId)!



  if (!photo) return null;

  return (
    <Dialog open={true} >
      <DialogContent>
        <DialogHeader>
        </DialogHeader>
        <Image
          src={photo.imageSrc}
          alt={`Gallery image ${photo.id}`}
          width={800} // Zdefiniuj odpowiednią szerokość
          height={600} // Zdefiniuj odpowiednią wysokość
        />
                <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button  onClick={() => router.push('/', { scroll: false })}  variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

