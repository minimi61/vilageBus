import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars"
import RegionAccordion from './RegionAccordion'
import { color } from '../../../assets/colors'
import Today from '../../common/Today'
import { useMyContext } from '../../../hooks/contextAPI'

const Header = () => {
  const myContext = useMyContext();

  return (
    <View style={styles.header}>
      <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', padding: 30, marginTop: 30 }}>
        <TouchableOpacity onPress={() => myContext.setOpenMenu(!myContext.openMenu)}>
          <FontAwesomeIcon icon={faBars} size={32} />
        </TouchableOpacity>
        <RegionAccordion />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: color.MainYellow,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
export default Header
