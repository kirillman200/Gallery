import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";

export default function GridGallery({ images }) {
  const [imagesShownArray, setImagesShownArray] = useState(
    Array(images.length).fill(false)
  );

  const imageVisibleChange = (index, isVisible) => {
    if (isVisible) {
      setImagesShownArray((currentImagesShownArray) => {
        currentImagesShownArray[index] = true;
        return [...currentImagesShownArray];
      });
    }
  };

  return (
    <div className='grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 '>
      {images &&
        images.map((imageUrl, index) => (
          <VisibilitySensor
            key={index}
            partialVisibility={true}
            offset={{ bottom: 80 }}
            onChange={(isVisible) => imageVisibleChange(index, isVisible)}
          >
            <GridGalleryCard imageUrl={imageUrl} show={imagesShownArray[index]} />
          </VisibilitySensor>
        ))}
    </div>
  );
}

function GridGalleryCard({ imageUrl, show }) {
  return (
    <div
      className={`relative transition ease-in duration-300 transform ${
        show ? "" : "translate-y-16 opacity-0"
      }`}
    >
      <div className='group absolute inset-0 z-10 flex  '>
        <div className='bg-overlay absolute inset-0 bg-red-600 transition duration-200 ease-in opacity-0 group-hover:opacity-70 '></div>
        <div className='mx-auto text-white z-10 self-center uppercase tracking-widest text-sm opacity-0  group-hover:opacity-100 transition duration-200 ease-in delay-75'>
          Hello World
        </div>
      </div>
      <img src={imageUrl} alt='' />
    </div>
  );
}
