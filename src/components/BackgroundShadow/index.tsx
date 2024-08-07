import clsx from 'clsx';
import { View, ViewProps } from 'react-native';

export const BackgroundShadow = ({ className, ...restProps }: ViewProps) => {
  return (
    <View
      className={clsx(className, 'rounded-2xl absolute top-[5px] -bottom-[5px] left-1 -right-1 -z-30')}
      {...restProps}
    />
  );
};
