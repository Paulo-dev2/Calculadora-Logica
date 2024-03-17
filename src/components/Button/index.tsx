import React from 'react';
import { TouchableOpacity, Text, TouchableOpacityProps, TextStyle, ViewStyle } from "react-native";

import { styles } from './styles';


interface ButtonProps extends TouchableOpacityProps {
    text: string;
    size?: "double";
    theme?: "secondary" | "accent";
}

export function Button({onPress, text, size, theme}: ButtonProps) {
    const buttonStyles: ViewStyle[] = [styles.button];
    const textStyles: TextStyle[] = [styles.text];
  
    if (size === "double") {
      buttonStyles.push(styles.buttonDouble);
    }
  
    if (theme === "secondary") {
      buttonStyles.push(styles.buttonSecondary);
      textStyles.push(styles.textSecondary);
    } else if (theme === "accent") {
      buttonStyles.push(styles.buttonAccent);
    }
  
    return (
      <TouchableOpacity onPress={onPress} style={buttonStyles}>
        <Text style={textStyles}>{text}</Text>
      </TouchableOpacity>
    );
}