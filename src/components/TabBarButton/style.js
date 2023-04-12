import { StyleSheet } from 'react-native'
import { fonts, Colors } from '../../resources';

const s = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    label: {
        ...fonts.normal10
    },
})

export default s
