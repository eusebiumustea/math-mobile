import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function MatrixIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-math-symbols"
      width={28}
      height={28}
      viewBox="0 0 24 24"
      stroke="black"
      fill={props.focused ? 'rgb(153, 214, 255)' : 'none'}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}>
      <Path d="M0 0h24v24H0z" stroke="none" />
      <Path d="M3 12L21 12" />
      <Path d="M12 3L12 21" />
      <Path d="M16.5 4.5L19.5 7.5" />
      <Path d="M19.5 4.5L16.5 7.5" />
      <Path d="M6 4L6 8" />
      <Path d="M4 6L8 6" />
      <Path d="M18 16L18.01 16" />
      <Path d="M18 20L18.01 20" />
      <Path d="M4 18L8 18" />
    </Svg>
  );
}
