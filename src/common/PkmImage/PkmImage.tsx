import React, { useEffect, useState } from 'react';
import styles from './PkmImage.module.scss';

interface PkmImageProps {
  dexNum: number;
  form: number;
  name?: string;
  shiny?: boolean;
}

function getImage(monsno: number, formIndex: number) {
  const inputMonsno = monsno;
  const inputFormIndex = formIndex;

  const paddedMonsno = inputMonsno.toString().padStart(4, '0');
  const paddedFormIndex = inputFormIndex.toString().padStart(2, '0');
  return `pm${paddedMonsno}_${paddedFormIndex}_00_00_L.webp`;
}

const Pkm = ({ children }: React.PropsWithChildren<{}>) => (
  <div className={styles.pkm}>{children}</div>
);

const Shiny = ({ children }: React.PropsWithChildren<{}>) => (
  <div className={`${styles.pkm} ${styles.shiny}`}>{children}</div>
);

const PkmImage = ({ dexNum, form, name, shiny = false }: PkmImageProps) => {
  const baseImgSrc = 'https://raw.githubusercontent.com/TeamLumi/luminescent-team/main/static/img/';
  const [imgSrc, setImgSrc] = useState(baseImgSrc + getImage(dexNum, form));

  const loadImage = (src: string) => {
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => reject(new Error(`Error loading image: ${src}`));
      img.src = src;
    });
  };

  useEffect(() => {
    loadImage(baseImgSrc + getImage(dexNum, form))
      .then(() => {
        setImgSrc(baseImgSrc + getImage(dexNum, form));
      })
      .catch((error) => {
        console.error(error);
        setImgSrc(baseImgSrc + getImage(dexNum, 0));
      });
  }, [dexNum, form, name, shiny]);

  const PkmComponent = shiny ? Shiny : Pkm;

  return (
    <PkmComponent>
      <img src={imgSrc} style={{ maxWidth: '56px', maxHeight: '56px' }} />
    </PkmComponent>
  );
};

export default PkmImage;