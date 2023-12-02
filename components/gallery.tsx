import Image from 'next/image';
import React from 'react';

const Gallery = () => {
  return (
    <section>
      <div className="p-5 md:p-10">
        <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>div:not(:first-child)]:mt-5 lg:[&>div:not(:first-child)]:mt-8">
          {[...Array(30)].map((_, i) => (
            <div key={i}>
              <Image
                src={`/gallery/${i + 1}.jpg`}
                alt={`Gallery image ${i + 1}`}
                width={500}
                height={300}
                layout="responsive"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;