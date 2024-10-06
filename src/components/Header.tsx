import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import Octicons from "react-native-vector-icons/Octicons";
import { colors } from '../constants/color';
import { iconSize } from '../constants/dimensions';

const Header = () => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <Ionicons name={"arrow-back"} color={colors.iconPrimary} size={iconSize.md} />
        </TouchableOpacity>
        <TouchableOpacity> 
            <Octicons name={"gear"} color={colors.iconPrimary} size={iconSize.md} />
        </TouchableOpacity>
      
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        justifyContent: "space-between"
    }
})