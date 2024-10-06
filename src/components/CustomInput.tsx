import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Ionicons from "react-native-vector-icons/Ionicons";
import { colors } from '../constants/color';
import { fontSize, iconSize, spacing } from '../constants/dimensions';
import { fontFamily } from '../constants/fontFamily';

const CustomInput = () => {
  return (
    <View style={styles.container} >
      <Text style={styles.inputLabel} >Email</Text>
        <View style={styles.inputFieldContainer} >
            
            <Ionicons name={"mail-outline"} size={iconSize.md} color={colors.iconSecondary} style={styles.icon} />
            <TextInput style={styles.textInput} placeholder='elamparo@gmail.com' placeholderTextColor={colors.iconSecondary} />

        </View>

        <Text style={styles.inputLabel} >Phone Number</Text>
        <View style={styles.inputFieldContainer} >
            
            <Ionicons name={"phone-portrait"} size={iconSize.md} color={colors.iconSecondary} style={styles.icon} />
            <TextInput style={styles.textInput} placeholder='0908-xxx-xxxx' placeholderTextColor={colors.iconSecondary} />
        </View>

        <Text style={styles.inputLabel} >Occupation</Text>
        <View style={styles.inputFieldContainer} >
            
            <FontAwesome name={"suitcase"} size={iconSize.md} color={colors.iconSecondary} style={styles.icon} />
            <TextInput style={styles.textInput} placeholder='Student' placeholderTextColor={colors.iconSecondary} />
        </View>

        <Text style={styles.inputLabel} >Organization</Text>
        <View style={styles.inputFieldContainer} >
            
            <Ionicons name={"business"} size={iconSize.md} color={colors.iconSecondary} style={styles.icon} />
            <TextInput style={styles.textInput} placeholder='USTP' placeholderTextColor={colors.iconSecondary} />
        </View>


    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    container:{},
    inputLabel:{
        paddingTop: spacing.md,
        fontFamily: fontFamily.semiBold,
        fontSize: fontSize.md,
        color: colors.textPrimary
    },
    icon:{
        marginHorizontal: spacing.sm
    },
    inputFieldContainer:{
        borderWidth: 1,
        borderRadius: 12,
        flexDirection: "row",
        alignItems: "center"
    },
    textInput:{
        flex: 1,
        fontFamily: fontFamily.bold,
        fontSize: fontSize.md
    }
})