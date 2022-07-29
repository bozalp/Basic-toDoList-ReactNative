import React, { useState, useEffect } from 'react';
import {
    TouchableOpacity,
    Text,
    Image,
    View,
    ScrollView,
    SafeAreaView,
    StyleSheet,
    Switch,
    FlatList,
    Alert,
    TextInput,
} from 'react-native';
import styles from './styles.style';
import ToDoList from './ToDoList';

const ToDoApp = () => {
    return (
        <View style={{ backgroundColor: '#e55554' }}>
            <View style={styles.container}>
                <ToDoList />
            </View>
        </View>
    );
};


export default ToDoApp;