import React, { ReactNode } from "react";
import { View } from "react-native";

interface RowProps {
    children: ReactNode;
}

export default ({ children }: RowProps) => (
  <View style={{ flexDirection: "row" }}>{children}</View>
);