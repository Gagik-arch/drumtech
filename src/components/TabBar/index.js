import React from 'react'
import { View } from 'react-native'
import { TabBarButton } from '../TabBarButton'
import s from './style'

export const TabBar = ({ state, descriptors, navigation }) => {

    return (
        <View style={s.container }>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key]
                const isFocused = state.index === index

                let icon = ''
                let type = 'Normal'
                switch (route.name) {
                    case 'Package':
                        icon = 'Package'
                        break
                    case 'History':
                        icon = 'History'
                        break
                    case 'Statistics':
                        icon = 'Chart'
                        break
                    case 'Settings':
                        icon = 'Settings'
                        break
                    default:
                        break
                }


                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true
                    })

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate({ name: route.name, merge: true })
                    }
                }

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key
                    })
                }

                return (
                    <TabBarButton
                        key={index}
                        accessibilityRole='button'
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        icon={icon}
                        type={type}
                        selected={isFocused}
                        label={route.name}
                    />
                )
            })}
        </View>
    )
}
