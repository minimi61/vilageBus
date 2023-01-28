import React from 'react'
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import { TouchableOpacity, Text, View, Platform } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown"

const RegionAccordion = () => {
    return (
        <View style={{
            width: '25%',
            zIndex: 3,
            position: 'absolute',
            top: 30,
            bottom: 0,
            right: 20
        }}
        >
            <Collapse>
                <CollapseHeader>
                    <View style={{ backgroundColor: '#f7d46c', flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderRadius: 5, padding: 5 }}>
                        <Text style={{ marginLeft: 5, fontSize: 16 }}>과천시</Text>
                        <FontAwesomeIcon icon={faCaretDown} />

                    </View>
                </CollapseHeader>
                <CollapseBody>
                    <View style={{ backgroundColor: '#f7d46c', borderWidth: 1, }}>
                        <Text>과천시 </Text>
                        <Text>과천시 </Text>
                        <Text>과천시 </Text>
                    </View>
                </CollapseBody>
            </Collapse>
        </View>
    )
}

export default RegionAccordion