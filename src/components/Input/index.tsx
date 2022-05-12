/* eslint-disable react/jsx-props-no-spreading */
import React, { RefAttributes } from 'react';
import {
  StyleProp,
  Text,
  TextInput,
  TextInputProps as InnerTextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

import { styles } from './styles';

type TextInputProps = Omit<InnerTextInputProps, 'style'>;

interface InputProps extends TextInputProps, RefAttributes<TextInput> {
  extraStyles?: StyleProp<ViewStyle>;
  inputStyles?: StyleProp<TextStyle>;
  error?: boolean;
  helperText?: string;
  helperTextStyle?: StyleProp<TextStyle>;
}

const renderHelperTextColor: { [key: string]: string } = {
  true: theme.colors.danger,
  false: theme.colors.black,
};

export const Input: React.FC<InputProps> = React.forwardRef(
  (
    { extraStyles, error, helperText, helperTextStyle, inputStyles, ...rest },
    ref,
  ) => (
    <View style={extraStyles}>
      <TextInput
        ref={ref}
        style={[styles.container, inputStyles]}
        {...rest}
        selectionColor={theme.colors.inputTextColor}
      />

      <Text
        style={[
          {
            fontFamily: theme.fonts.text400,
            fontSize: 16,
            color:
              error || helperText
                ? renderHelperTextColor[String(error)]
                : 'transparent',
            paddingLeft: 20,
            paddingTop: 5,
          },
          helperTextStyle,
        ]}
      >
        {helperText}
      </Text>
    </View>
  ),
);
