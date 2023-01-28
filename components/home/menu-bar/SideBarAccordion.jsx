import React from 'react'
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import { StyleSheet, Text, View, Platform, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown"

const SideBarAccordion = (isActive) => {
  return (
    <View style={{
        width: '100%',
        backgroundColor:'lightblue'
    }}
    >
      <View style={{marginTop:50, marginLeft:10}}>
        <Text style={{fontSize:20}}>시간표 전체보기</Text>
      </View>

      {/* 평일 */}
      <Collapse>
            <CollapseHeader>
              <View style={{ flexDirection:'row',padding: 20, marginBottom:-10 }}>
              <FontAwesomeIcon icon={faChevronDown} style={{marginTop:3}} />
              <Text style={{ marginLeft: 10, fontSize: 16 }}>평일</Text>

                </View>
            </CollapseHeader>
            <CollapseBody>
                <View style={{ marginLeft: 50, fontSize: 16  }}>
                  <Text style={styles.textCommon}>1번 버스 </Text>
                  <Text style={styles.textCommon}>2번 버스 </Text>
                </View>
            </CollapseBody>
      </Collapse>

      {/* 토요일 */}
      <Collapse>
            <CollapseHeader>
            
                <View style={{ flexDirection:'row',padding: 20, marginBottom:-10 }}>
            <FontAwesomeIcon icon={faChevronDown} style={{marginTop:3}} />
                    <Text style={{ marginLeft: 10, fontSize: 16 }}>토요일</Text>

                </View>
            </CollapseHeader>
            <CollapseBody>
                <View style={{ marginLeft: 50, fontSize: 16  }}>
                    <Text style={styles.textCommon}>1번 버스 </Text>
                    <Text style={styles.textCommon}>2번 버스 </Text>
                </View>
            </CollapseBody>
      </Collapse>

      {/* 일요일 */}
      <Collapse>
            <CollapseHeader>
            
                <View style={{ flexDirection:'row',padding: 20, marginBottom:-10 }}>
            <FontAwesomeIcon icon={faChevronDown} style={{marginTop:3}} />
                    <Text style={{ marginLeft: 10, fontSize: 16 }}>일요일</Text>

                </View>
            </CollapseHeader>
            <CollapseBody>
                <View style={{ marginLeft: 50, fontSize: 16  }}>
                    <Text style={styles.textCommon}>1번 버스 </Text>
                    <Text style={styles.textCommon}>2번 버스 </Text>
                </View>
            </CollapseBody>
      </Collapse>
      
      {/* 공휴일 */}
      <Collapse>
            <CollapseHeader>
            
                <View style={{ flexDirection:'row',padding: 20, marginBottom:-10 }}>
            <FontAwesomeIcon icon={faChevronDown} style={{marginTop:3}} />
                    <Text style={{ marginLeft: 10, fontSize: 16 }}>공휴일</Text>

                </View>
            </CollapseHeader>
            <CollapseBody>
                <View style={{ marginLeft: 50, fontSize: 16  }}>
                    <Text style={styles.textCommon}>1번 버스 </Text>
                    <Text style={styles.textCommon}>2번 버스 </Text>
                </View>
            </CollapseBody>
      </Collapse>
      
    </View>
)
}

const styles = StyleSheet.create({
  textCommon: {
    fontSize: 15,
    marginTop:10
  }
})
export default SideBarAccordion