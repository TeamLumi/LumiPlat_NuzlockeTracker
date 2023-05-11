import React from 'react';

interface PkmImageProps {
  dexNum: number;
  form: number;
  name?: string;
  shiny?: boolean;
}

function getImage(monsno: number, formIndex: number) {
  const defaultMonsno = 0;
  const defaultFormIndex = 0;

  // Use input value if it is not undefined or null, otherwise use default value
  const inputMonsno = (monsno !== undefined && monsno !== null) ? monsno : defaultMonsno;
  const inputFormIndex = (formIndex !== undefined && formIndex !== null) ? formIndex : defaultFormIndex;

  const paddedMonsno = inputMonsno.toString().padStart(4, '0');
  const paddedFormIndex = inputFormIndex.toString().padStart(2, '0');
  return `pm${paddedMonsno}_${paddedFormIndex}_00_00_L.webp`;
}

const PkmImage = ({ dexNum, form, name, shiny = false }: PkmImageProps) => {
  const baseImgSrc = 'https://raw.githubusercontent.com/TeamLumi/luminescent-team/main/static/img/';
  const imgSrc = baseImgSrc + getImage(dexNum, form);
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
