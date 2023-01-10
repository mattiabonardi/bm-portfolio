import React from "react";

interface IconProps {
  iconName: string;
  size: string;
  color?: string;
  onClickEvent?: () => void;
}

export const Icon: React.FC<IconProps> = (props) => {
  const iconStyle = {
    WebkitMask:
      "url(/icons/" + props.iconName + ".svg) center center no-repeat",
    width: (props.size ? props.size : "16") + "px",
    height: (props.size ? props.size : "16") + "px",
    background: props.color ? props.color : "#E8EAED",
  };
  return <div style={iconStyle} onClick={props.onClickEvent}></div>;
};
