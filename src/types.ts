import icons from "./iconsObject";

export type IconName = keyof typeof icons;

export interface IconProps {
  readonly color?: string;
  readonly size?: string | number;
  readOnly className?: string
}

export interface IconComponentProps extends IconProps {
  readonly name: IconName;
}
