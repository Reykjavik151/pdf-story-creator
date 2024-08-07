import { TextProps, Text } from 'react-native';

export const SectionTitle = ({ children, ...restProps }: TextProps) => {
  return (
    <Text className="text-2xl font-oswald-bold text-secondaryDarkGray pl-4" {...restProps}>
      {children}
    </Text>
  );
};
