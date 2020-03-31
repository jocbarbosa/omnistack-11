import Rect from 'react';
import { View } from 'react-native';

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <Text style={styles.headerText}>
                    Total de <Text style={styles.headertextBold}>0 casos</Text>.
                </Text>
            </View>

        </View>
    );
}