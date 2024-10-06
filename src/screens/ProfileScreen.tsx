import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Feather from "react-native-vector-icons/Feather";
import CustomInput from '../components/CustomInput';
import Header from '../components/Header';
import { colors } from '../constants/color';
import { fontSize, iconSize, spacing } from '../constants/dimensions';
import { fontFamily } from '../constants/fontFamily';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
        <Header />
            { /* profile image container */}
            <View style={styles.profileImageContainer}>
                <Image source={require("../assets/torrence.png")}
                style= {styles.profileImage} />
                <TouchableOpacity style={styles.editIconContainer}>
                <Feather name={"edit-3"} size={iconSize.md} color={colors.iconWhite} />
                </TouchableOpacity>
            </View>


            {/* profile details container */}
            <View style={styles.nameRoleContainer} >
                <Text style={styles.name}>  Torrence S. Elamparo </Text>
                <Text style={styles.role}>  Developer </Text>
            </View>


            {/* input fields container */}
            <View style={styles.inputFieldsContainer} >
                {/* add all input fields */}
                <CustomInput />
            </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: spacing.md
    },
    profileImageContainer:{
        justifyContent: "center",
        alignItems: "center",
        marginTop: spacing.md
    },
    profileImage:{
        height:140,
        width:140
    },
    editIconContainer:{
        height: 31,
        width: 31,
        backgroundColor: colors.orange,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        marginTop: -22,
        marginLeft: 50
    },
    nameRoleContainer:{
        alignItems: "center",
        marginVertical: spacing.sm
    },
    name:{
        fontFamily: fontFamily.semiBold,
        fontSize: fontSize.lg,
        color: colors.textPrimary
    },
    role:{
        fontFamily: fontFamily.regular,
        fontSize: fontSize.md,
        color: colors.textSecondary
    }
})