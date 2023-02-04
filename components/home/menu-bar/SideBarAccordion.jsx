import React from 'react'
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import { StyleSheet, Text, View, Platform, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown"
import { color } from '../../../assets/colors'
import { useNavigation } from '@react-navigation/native'
import TimeTable from './../TimeTable';
import { useMyContext } from '../../../hooks/contextAPI';

const SideBarAccordion = () => {
    const navigation = useNavigation();
    const myContext = useMyContext();
    console.log(myContext)
    return (
        <TouchableOpacity onPress={() => { myContext.setOpenMenu(!myContext.openMenu) }} style={{
            width: '55%',
            height: '100%',
            backgroundColor: '#80abb0',
            zIndex: 3,
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }}
        >
            <View style={{ marginTop: 50, marginLeft: 10 }}>
                <Text style={{ fontSize: 20 }}>시간표 전체보기</Text>
            </View>

            {/* 평일 */}
            <Collapse>
                <CollapseHeader>
                    <View style={{ flexDirection: 'row', padding: 20, marginBottom: -10 }}>
                        <FontAwesomeIcon icon={faChevronDown} style={{ marginTop: 3 }} />
                        <Text style={{ marginLeft: 10, fontSize: 16 }}>평일</Text>

                    </View>
                </CollapseHeader>
                <CollapseBody>
                    <View style={{ marginLeft: 50, fontSize: 16 }}>
                        <TouchableOpacity onPress={() => navigation.navigate('TimeTable')}>
                            <Text style={styles.textCommon}>1번 버스 </Text>
                        </TouchableOpacity>
                        <Text style={styles.textCommon}>2번 버스 </Text>
                    </View>
                </CollapseBody>
            </Collapse>

            {/* 토요일 */}
            <Collapse>
                <CollapseHeader>

                    <View style={{ flexDirection: 'row', padding: 20, marginBottom: -10 }}>
                        <FontAwesomeIcon icon={faChevronDown} style={{ marginTop: 3 }} />
                        <Text style={{ marginLeft: 10, fontSize: 16 }}>토요일</Text>

                    </View>
                </CollapseHeader>
                <CollapseBody>
                    <View style={{ marginLeft: 50, fontSize: 16 }}>
                        <Text style={styles.textCommon}>1번 버스 </Text>
                        <Text style={styles.textCommon}>2번 버스 </Text>
                    </View>
                </CollapseBody>
            </Collapse>

            {/* 일요일 */}
            <Collapse>
                <CollapseHeader>

                    <View style={{ flexDirection: 'row', padding: 20, marginBottom: -10 }}>
                        <FontAwesomeIcon icon={faChevronDown} style={{ marginTop: 3 }} />
                        <Text style={{ marginLeft: 10, fontSize: 16 }}>일요일</Text>

                    </View>
                </CollapseHeader>
                <CollapseBody>
                    <View style={{ marginLeft: 50, fontSize: 16 }}>
                        <Text style={styles.textCommon}>1번 버스 </Text>
                        <Text style={styles.textCommon}>2번 버스 </Text>
                    </View>
                </CollapseBody>
            </Collapse>

            {/* 공휴일 */}
            <Collapse>
                <CollapseHeader>

                    <View style={{ flexDirection: 'row', padding: 20, marginBottom: -10 }}>
                        <FontAwesomeIcon icon={faChevronDown} style={{ marginTop: 3 }} />
                        <Text style={{ marginLeft: 10, fontSize: 16 }}>공휴일</Text>

                    </View>
                </CollapseHeader>
                <CollapseBody>
                    <View style={{ marginLeft: 50, fontSize: 16 }}>
                        <Text style={styles.textCommon}>1번 버스 </Text>
                        <Text style={styles.textCommon}>2번 버스 </Text>
                    </View>
                </CollapseBody>
            </Collapse>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    textCommon: {
        fontSize: 15,
        marginTop: 10,
    }
})
export default SideBarAccordion