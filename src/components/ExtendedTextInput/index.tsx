import { BackgroundShadow } from '#components/BackgroundShadow';
import { SectionTitle } from '#components/SectionTitle';
import clsx from 'clsx';
import React, { forwardRef, Ref } from 'react';
import { TextInputProps, TextInput, View } from 'react-native';

type ExtendedTextInputProps = TextInputProps & { title?: string };

export const ExtendedTextInput = forwardRef(
  ({ title, className, ...restProps }: ExtendedTextInputProps, ref: Ref<TextInput>) => {
    return (
      <>
        {!!title && <SectionTitle>{title}</SectionTitle>}
        <View>
          <TextInput
            ref={ref}
            className={clsx(
              'font-firasans-medium text-xl text-secondaryDarkGray border-orangeAccent bg-orange-100 bg-opacity-10 border-4 rounded-2xl px-4 py-3',
              className,
            )}
            {...restProps}
          />
          <BackgroundShadow className="bg-orangeAccent" />
        </View>
      </>
    );
  },
);

ExtendedTextInput.displayName = 'ExtendedTextInput';
