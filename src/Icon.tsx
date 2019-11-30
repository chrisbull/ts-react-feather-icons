import React from 'react';
import icons from './iconsObject';
import { IconComponentProps } from './types';

/**
 * Icon
 * @param param0
 * @example <Icon name="tool" color="blue" size={32} />
 * @returns <Icon name="tool" color="blue" size={32} />
 */
export const Icon = ({ name, ...props }: IconComponentProps) => {
  const IconComponent = icons[name];
  return <IconComponent {...props} />;
};
