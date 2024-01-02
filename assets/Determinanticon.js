import React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
export default function Determinanticon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-percentage"
      width={28}
      height={28}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="black"
      fill={props.focused ? 'rgb(153, 214, 255)' : 'none'}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Circle cx={17} cy={17} r={1} />
      <Circle cx={7} cy={7} r={1} />
      <Path d="M6 18L18 6" />
    </Svg>
  );
}
