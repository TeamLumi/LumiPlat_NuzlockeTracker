import React, { useEffect, useState } from 'react';

interface PkmImageProps {
  dexNum: number;
  form: number;
  name?: string;
  shiny?: boolean;
}

function getImage(monsno: number, formIndex: number) {

  // Use input value if it is not undefined or null, otherwise use default value
  const inputMonsno =  monsno ;
  const inputFormIndex = formIndex ;

  const paddedMonsno = inputMonsno.toString().padStart(4, '0');
  const paddedFormIndex = inputFormIndex.toString().padStart(2, '0');
  return `pm${paddedMonsno}_${paddedFormIndex}_00_00_L.webp`;
}

const PkmImage = ({ dexNum, form, name, shiny = false }: PkmImageProps) => {
  const baseImgSrc = 'https://raw.githubusercontent.com/TeamLumi/luminescent-team/main/static/img/';
  const [imgSrc, setImgSrc] = useState(baseImgSrc + getImage(dexNum, form));

  const loadImage = (src: string) => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(src);
      img.onerror = () => reject(new Error(`Error loading image: ${src}`));
      img.src = src;
    });
  };

  useEffect(() => {
    loadImage(imgSrc)
      .catch((error) => {
        console.error(error);
        setImgSrc(baseImgSrc + getImage(dexNum, 0));
      })
      .then((src) => {
        if (src !== imgSrc) {
          setImgSrc(src as string);
        }
      });
  }, [dexNum, form, name, shiny, imgSrc]);

  return (
    <div
      className={`pkm ${shiny ? 'shiny' : ''}`}
      role="img"
      style={{ transform: 'scale(1.25)' }}
    >
      <img src={imgSrc} style={{ maxWidth: '56px', maxHeight: '56px' }} />
    </div>
  );
};

export default PkmImage;

