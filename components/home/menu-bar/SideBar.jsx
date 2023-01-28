import React from 'react'
import { useState } from 'react';
import { Platform, TouchableOpacity,View } from 'react-native';
import { color } from '../../../assets/colors'
import SideBarAccordion from './SideBarAccordion';
const SideBar = (
    { openMenu, setOpenMenu }) => {
    const [state, setState] = useState(true)
    return (
        <View style={{
            width: '45%',
            height: '100%',
            backgroundColor: color.MainNavy,
            zIndex: 3,
            elevation: (Platform.OS === 'android') ? 50 : 0,
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }}>
            {/* ////////// */}
            {/* onPress={() => setOpenMenu(!openMenu)}> */}
            <SideBarAccordion isActive={state} />
        </View>
    )
}

export default SideBar