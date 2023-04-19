import React from 'react'
import s from './style'
import {Modal, Image, View} from "react-native";
import {Button, Icon, Text} from '../../core'
import frame from '../../../assets/images/frame.png'

export const ExerciseModal = ({
                                  modalVisibility,
                                  setModalVisibility
                              }) => {
    return <Modal animationType="fade"
                  visible={modalVisibility}
    >
        <View style={s.container}>
            <View style={s.top}>
                <Button onPress={() => setModalVisibility(false)}>
                    <Icon type={'ChevronLeft'}/>
                    <Text>Back</Text>
                </Button>
            </View>
            <View style={s.block}>
                <View style={s.flex}>
                    <View style={s.img_container}>
                        <Image source={frame}/>
                    </View>
                    <Text size={'16_500'} style={s.line}>1. Put your Headphones on !</Text>
                    <Text size={'16_500'} style={s.line}>2. Record yourself performing the rhythms</Text>
                    <Text size={'16_500'} style={s.line}>3. If you’re not sure about the rhythm, you
                        can press the play button to listen to it </Text>
                    <Text size={'16_500'} style={s.line}>4. Record once you think you’ve got it
                        down!</Text>
                </View>
                <Button variant={'primary'} label={'Next'}/>
            </View>
        </View>
    </Modal>
}