import React from 'react';
import wallpapers from '../configs/wallpapers';

const Desktop = () => {
  const dark = true;

  return (
    <div
      className="w-full h-full overflow-hidden bg-center bg-cover"
      style={{
        backgroundImage: `url(${dark ? wallpapers.night : wallpapers.day})`,
        filter: `brightness( ${(70 as number) * 0.7 + 50}% )`
      }}
    ></div>
  );
};

export default Desktop;
