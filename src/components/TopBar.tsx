import React, { ReactNode, forwardRef, useRef, useState } from 'react';
import ControlCenterMenu from './ControlCenterMenu';

const CCMIcon = ({ size }: { size: number }) => {
  return (
    <svg
      viewBox="0 0 29 29"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path d="M7.5,13h14a5.5,5.5,0,0,0,0-11H7.5a5.5,5.5,0,0,0,0,11Zm0-9h14a3.5,3.5,0,0,1,0,7H7.5a3.5,3.5,0,0,1,0-7Zm0,6A2.5,2.5,0,1,0,5,7.5,2.5,2.5,0,0,0,7.5,10Zm14,6H7.5a5.5,5.5,0,0,0,0,11h14a5.5,5.5,0,0,0,0-11Zm1.43439,8a2.5,2.5,0,1,1,2.5-2.5A2.5,2.5,0,0,1,22.93439,24Z" />
    </svg>
  );
};

const TopBar = () => {
  const [showControlCenter, setShowControlCenter] = useState<boolean>(false);
  const controlCenterBtnRef = useRef<HTMLDivElement>(null);
  return (
    <div
      className={`w-full h-8 px-2 fixed top-0 flex items-center justify-between z-20 text-sm text-white bg-gray-700/10 backdrop-blur-2xl shadow transition`}
    >
      <div></div>
      <div className="flex items-center flex-row justify-end space-x-2">
        <TopBarItem
          forceHover={showControlCenter}
          onClick={() => {
            setShowControlCenter(!showControlCenter);
          }}
          ref={controlCenterBtnRef}
        >
          <CCMIcon size={16} />
        </TopBarItem>
      </div>
      {showControlCenter && <ControlCenterMenu />}
    </div>
  );
};

export default TopBar;

interface TopBarItemProps {
  hideOnMobile?: boolean;
  forceHover?: boolean;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
}

const TopBarItem = forwardRef((props: TopBarItemProps, ref: any) => {
  const hide = props.hideOnMobile ? 'hidden sm:inline-flex' : 'inline-flex';
  const hover = props.forceHover
    ? 'bg-gray-100/30 dark:bg-gray-400/40'
    : 'hover:(bg-gray-100/30 dark:bg-gray-400/40)';
  return (
    <div
      ref={ref}
      className={`hstack space-x-1 h-6 px-1 cursor-default rounded ${hide} ${hover} ${
        props.className || ''
      }`}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
    >
      {props.children}
    </div>
  );
});
