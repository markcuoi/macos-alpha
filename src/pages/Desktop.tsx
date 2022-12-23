import React from 'react';
import wallpapers from '../configs/wallpapers';
import Dock from '../components/dock/Dock';
import TopBar from '../components/TopBar';

const Desktop = () => {
  const dark = true;

  const renderApps = () => {
    return <div></div>;
  };

  return (
    <div
      className="w-full h-full overflow-hidden bg-center bg-cover"
      style={{
        backgroundImage: `url(${dark ? wallpapers.night : wallpapers.day})`,
        filter: `brightness( ${(70 as number) * 0.7 + 50}% )`
      }}
    >
      <TopBar />
      <>{renderApps()}</>
      <Dock />
    </div>
  );
};

export default Desktop;
