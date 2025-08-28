import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  text?: string;
  variant?: 'solid' | 'outline' | 'ghost' | 'link';
  colorScheme?: 'blue' | 'green' | 'red' | 'yellow' | 'gray';
  size?: 'xs' | 'sm' | 'md' | 'lg';
  isDisabled?: boolean;
  isLoading?: boolean;
  leftIcon?: string;
  rightIcon?: string;
  onPress?: () => void;
  style?: any;
  textStyle?: any;
}

const Button: React.FC<ButtonProps> = ({
  text = 'Button',
  variant = 'solid',
  colorScheme = 'blue',
  size = 'md',
  isDisabled = false,
  isLoading = false,
  onPress,
  style,
  textStyle,
  ...props
}) => {
  const getButtonStyle = () => {
    const baseStyle = [styles.button, styles[size]];
    
    if (variant === 'solid') {
      baseStyle.push(styles[`${colorScheme}Solid`]);
    } else if (variant === 'outline') {
      baseStyle.push(styles.outline, styles[`${colorScheme}Outline`]);
    } else if (variant === 'ghost') {
      baseStyle.push(styles.ghost);
    } else if (variant === 'link') {
      baseStyle.push(styles.link);
    }
    
    if (isDisabled) {
      baseStyle.push(styles.disabled);
    }
    
    return [...baseStyle, style];
  };

  const getTextStyle = () => {
    const baseTextStyle = [styles.text, styles[`text${size.charAt(0).toUpperCase() + size.slice(1)}`]];
    
    if (variant === 'solid') {
      baseTextStyle.push(styles.solidText);
    } else if (variant === 'outline') {
      baseTextStyle.push(styles[`${colorScheme}OutlineText`]);
    } else if (variant === 'ghost') {
      baseTextStyle.push(styles[`${colorScheme}GhostText`]);
    } else if (variant === 'link') {
      baseTextStyle.push(styles[`${colorScheme}LinkText`]);
    }
    
    if (isDisabled) {
      baseTextStyle.push(styles.disabledText);
    }
    
    return [...baseTextStyle, textStyle];
  };

  return (
    <TouchableOpacity
      style={getButtonStyle()}
      onPress={onPress}
      disabled={isDisabled || isLoading}
      activeOpacity={0.8}
      {...props}
    >
      <Text style={getTextStyle()}>
        {isLoading ? 'Loading...' : text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'transparent',
  },
  // Size styles
  xs: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    minHeight: 24,
  },
  sm: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    minHeight: 32,
  },
  md: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    minHeight: 40,
  },
  lg: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    minHeight: 48,
  },
  // Variant styles
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  link: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  // Color scheme styles - Solid
  blueSolid: {
    backgroundColor: '#3182ce',
  },
  greenSolid: {
    backgroundColor: '#38a169',
  },
  redSolid: {
    backgroundColor: '#e53e3e',
  },
  yellowSolid: {
    backgroundColor: '#d69e2e',
  },
  graySolid: {
    backgroundColor: '#718096',
  },
  // Color scheme styles - Outline
  blueOutline: {
    borderColor: '#3182ce',
  },
  greenOutline: {
    borderColor: '#38a169',
  },
  redOutline: {
    borderColor: '#e53e3e',
  },
  yellowOutline: {
    borderColor: '#d69e2e',
  },
  grayOutline: {
    borderColor: '#718096',
  },
  // Disabled state
  disabled: {
    opacity: 0.4,
  },
  // Text styles
  text: {
    fontWeight: '600',
    textAlign: 'center',
  },
  textXs: {
    fontSize: 12,
  },
  textSm: {
    fontSize: 14,
  },
  textMd: {
    fontSize: 16,
  },
  textLg: {
    fontSize: 18,
  },
  solidText: {
    color: 'white',
  },
  // Outline text colors
  blueOutlineText: {
    color: '#3182ce',
  },
  greenOutlineText: {
    color: '#38a169',
  },
  redOutlineText: {
    color: '#e53e3e',
  },
  yellowOutlineText: {
    color: '#d69e2e',
  },
  grayOutlineText: {
    color: '#718096',
  },
  // Ghost text colors
  blueGhostText: {
    color: '#3182ce',
  },
  greenGhostText: {
    color: '#38a169',
  },
  redGhostText: {
    color: '#e53e3e',
  },
  yellowGhostText: {
    color: '#d69e2e',
  },
  grayGhostText: {
    color: '#718096',
  },
  // Link text colors
  blueLinkText: {
    color: '#3182ce',
    textDecorationLine: 'underline',
  },
  greenLinkText: {
    color: '#38a169',
    textDecorationLine: 'underline',
  },
  redLinkText: {
    color: '#e53e3e',
    textDecorationLine: 'underline',
  },
  yellowLinkText: {
    color: '#d69e2e',
    textDecorationLine: 'underline',
  },
  grayLinkText: {
    color: '#718096',
    textDecorationLine: 'underline',
  },
  disabledText: {
    opacity: 0.6,
  },
});

export default Button;
