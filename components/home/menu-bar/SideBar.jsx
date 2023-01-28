import React from 'react'
import { Platform, TouchableOpacity } from 'react-native';
import { color } from '../../../assets/colors'
const SideBar = (
    { openMenu, setOpenMenu }) => {
    return (
        <TouchableOpacity style={{
            width: '35%',
            height: '100%',
            backgroundColor: color.MainNavy,
            zIndex: 3,
            elevation: (Platform.OS === 'android') ? 50 : 0,
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }} onPress={() => setOpenMenu(!openMenu)}>
        </TouchableOpacity>
    )
}

export default SideBar