import React, {useState} from "react";
import {Image, StatusBar, View} from "react-native";
import {Button, Icon, NavigationHeader, Screen, Text} from "../../core";
import s from "./style";
import {Colors, margin} from "../../resources";
import example from '../../../assets/images/ex_lesson.png'
import {ExerciseModal} from "../../modals";

export const Music = (props) => {
    const [modalVisibility, setModalVisibility] = useState(false)

    const onPressList = () => {
        setModalVisibility(true)
    }
    return (
        <Screen>
            <StatusBar backgroundColor={Colors.yellow} barStyle="light-content"/>
            <View style={[s.top]}>
                <Button style={s.circle}><Icon type={"User"}/></Button>
                <Text size={"18_400"}>Hello, Name Surname</Text>
            </View>
            <View style={s.body}>
                <Text size={"24_600"}>Select Exercise</Text>
                {renderBlock({onPress: onPressList})}
                {renderBlock({onPress: onPressList})}
            </View>
            <ExerciseModal modalVisibility={modalVisibility}
                           setModalVisibility={setModalVisibility}
                           navigation={props.navigation}
            />
        </Screen>
    );
};

const renderBlock = ({onPress}) => {
    return (
        <Button style={s.list} onPress={onPress}>
            <View style={s.image}>
                <Image source={example} style={{width: "100%"}}/>
            </View>
            <View style={s.title_block}>
                <Text size={'20_600'} style={s.title}>Eights</Text>
            </View>
        </Button>
    )
}