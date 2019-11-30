import React from 'react';
import icons from './iconsObject';

export type IconName = keyof typeof icons;

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  readonly color?: string;
  readonly size?: string | number;
}

export interface IconComponentProps extends IconProps {
  readonly name: IconName;
}
