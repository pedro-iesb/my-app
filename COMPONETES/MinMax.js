import React from "react";
import { Text } from "react-native";

export default function MinMax(props) {
    const { min, max } = props;

    const maxValue = Math.max(parseInt(min), parseInt(max));

    return (
        <Text>O maior valor é: {maxValue}</Text>
    );
}