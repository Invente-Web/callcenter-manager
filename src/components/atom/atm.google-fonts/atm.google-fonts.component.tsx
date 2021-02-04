import React from 'react';
import { googleFonts as fontsData } from "../../../../public/assets/fonts/data.json";
export const GoogleFonts: React.FC<any> = () => {
  return (
    <>
      {fontsData.fonts.map((v) => (
        <link
          key={v}
          rel="preload"
          href={v}
          as="font"
          type="font/ttf"
          crossOrigin=""
        />
      ))}
      {fontsData.style.map((v) => (
        <React.Fragment key={v}>
          <link rel="stylesheet" href={v} />
          <link rel="preload" as="style" href={v} />
        </React.Fragment>
      ))}
    </>
  );
}