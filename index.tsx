import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends TouchableOpacityProps {
  /**
   * The text to display inside the button
   */
  title: string;
  /**
   * Button variant that affects the visual style
   * @default 'primary'
   */
  variant?: ButtonVariant;
  /**
   * Size of the button
   * @default 'medium'
   */
  size?: ButtonSize;
  /**
   * Whether the button is in a loading state
   * @default false
   */
  loading?: boolean;
  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Optional icon component to render on the left side of the text
   */
  leftIcon?: React.ReactNode;
  /**
   * Optional icon component to render on the right side of the text
   */
  rightIcon?: React.ReactNode;
  /**
   * Custom style for the button container
   */
  containerStyle?: ViewStyle;
  /**
   * Custom style for the button text
   */
  textStyle?: TextStyle;
}

/**
 * A customizable button component with multiple variants and states
 */
const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'primary',
  size = 'medium',
  loading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  containerStyle,
  textStyle,
  style,
  ...rest
}) => {
  const isDisabled = disabled || loading;

  // Button container styles
  const buttonStyles: ViewStyle[] = [
    styles.baseButton,
    styles[`${variant}Button`],
    styles[`${size}Button`],
    isDisabled && styles.disabledButton,
    containerStyle,
  ];

  // Button text styles
  const textStyles: TextStyle[] = [
    styles.baseText,
    styles[`${variant}Text`],
    styles[`${size}Text`],
    isDisabled && styles.disabledText,
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={[buttonStyles, style]}
      disabled={isDisabled}
      activeOpacity={0.7}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'primary' ? '#FFFFFF' : '#007AFF'}
          size={size === 'small' ? 'small' : 'large'}
        />
      ) : (
        <>
          {leftIcon && <>{leftIcon} </>}
          <Text style={textStyles}>{title}</Text>
          {rightIcon && <>{' '}{rightIcon}</>}
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // Base styles
  baseButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  baseText: {
    textAlign: 'center',
    fontWeight: '600',
  },

  // Variant styles
  primaryButton: {
    backgroundColor: '#007AFF',
  },
  primaryText: {
    color: '#FFFFFF',
  },

  secondaryButton: {
    backgroundColor: '#E3F2FD',
  },
  secondaryText: {
    color: '#007AFF',
  },

  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007AFF',
  },
  outlineText: {
    color: '#007AFF',
  },

  textButton: {
    backgroundColor: 'transparent',
    padding: 0,
  },
  textText: {
    color: '#007AFF',
  },

  // Size styles
  smallButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  smallText: {
    fontSize: 14,
  },

  mediumButton: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  mediumText: {
    fontSize: 16,
  },

  largeButton: {
    paddingVertical: 14,
    paddingHorizontal: 24,
  },
  largeText: {
    fontSize: 18,
  },

  // State styles
  disabledButton: {
    opacity: 0.6,
  },
  disabledText: {
    opacity: 0.6,
  },
});

export default Button;
