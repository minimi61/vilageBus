import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Header from './components/home/header/Header';
import Main from './components/home/Main';
import TimeTable from './components/home/TimeTable';
import { View } from 'react-native';
import SideBarAccordion from './components/home/menu-bar/SideBarAccordion';
import { OpenSideBarMenu } from './hooks/contextAPI';
import { useMyContext } from './hooks/contextAPI';

const App = () => {
  const Stack = createNativeStackNavigator();
  const myContext = useMyContext();

  return (
    <OpenSideBarMenu>
      <NavigationContainer>
         <Stack.Navigator initialRouteName='Main'>

          <Stack.Screen options={{
            headerShown: false
          }} name="Main" component={Main} />
          <Stack.Screen options={{ headerShown: false }} name="TimeTable" component={TimeTable} />
          {/* {myContext.openMenu ? <SideBarAccordion /> : null} */}
        </Stack.Navigator>
       </NavigationContainer>
    </OpenSideBarMenu>
  );
}


export default App;

