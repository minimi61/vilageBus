import React,{useState,useEffect} from 'react';
import Header from './components/home/header/Header';
import Main from './components/home/Main';
import TimeTable from './components/home/TimeTable';
import { View } from 'react-native';
import SideBarAccordion from './components/home/menu-bar/SideBarAccordion';
const App = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <View style={{flex:1}}>
     <Header openMenu={openMenu} setOpenMenu={setOpenMenu}/>
      <Main />
      <TimeTable />
      {openMenu ? <SideBarAccordion openMenu={openMenu} setOpenMenu={setOpenMenu} /> : null}

     </View>
  );
}


export default App;

