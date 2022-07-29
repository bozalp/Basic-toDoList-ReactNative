import { Button } from '@rneui/base';
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
    TouchableHighlight,
} from 'react-native';
import styles from './styles.style';

const List = [
    {
        id: 0,
        title: "Homework",
        completed: false,
        removed: false
    },
    {
        id: 1,
        title: "Yoga",
        completed: false,
        removed: false
    },
    {
        id: 2,
        title: "Market",
        completed: false,
        removed: false
    },
]

let id_counter = List.length;
const ToDoList = () => {

    function ListWithoutRemoved() {
        return (
            List.filter(items => !items.removed)
        );
    };

    const [list, setToDo] = useState(List);
    const [newTask, setTask] = useState(""); //get text input value

    const addToDo = () => {
        setToDo([...list,
        { id: id_counter, title: newTask, completed: false },
        ]);
        id_counter++;
        setTask('');
    };

    const MarkAsCompleted = (id) => {
        const newTodoList = list.map(t => {
            if (t.id === id)
                t.completed = !t.completed;
            return t;
        });
        setToDo(newTodoList);
    };

   /* function RemoveDoTo(id) {
        const newTodoList = list.map(t =>
            t.id === id ? { ...t, removed: !t.removed } : t,
        );
        setToDo(newTodoList);
        //Alert.alert(newTodoList[0].removed.toString());
    };*/

   /* const deleteTodo = (id) => {
        // Alert.alert(List[id.toString()].title.toString());
        const newTodoList = List.filter(todo => todo.removed != id.removed);
        setToDo(newTodoList);
    };*/

    const deleteTodo = (id) => {
        const newTodos = list.filter(todo => todo.id !== id);
        setToDo(newTodos);
    }



    const TotalToDo = list.filter(todo => !todo.completed);

    return (
        <View>
            <Header totalToDo={TotalToDo} />
            <TextInput placeholder='to Do'
                value={newTask}
                onChangeText={newText => setTask(newText)}
                style={styles.textbox_area}
            />
            <Button title="Add new task"
                onPress={addToDo} />
            <FlatList
                style={{ height: '85%', paddingTop: 20 }}
                data={list}
                keyExtractor={item => item.id}
                ListFooterComponent={
                    <View style={styles.footer} />
                }
                renderItem={({ item }) =>
                    <TouchableHighlight style={item.completed ?
                        styles.item_completed :
                        styles.item
                    }
                        onLongPress={() => deleteTodo(item.id)}
                        onPress={() => MarkAsCompleted(item.id)}
                        underlayColor="#ccc">
                        <Text
                            style={item.completed ?
                                styles.item_text_completed :
                                styles.item_text
                            }>
                            {item.title}

                        </Text>

                    </TouchableHighlight>

                }
            />

        </View>
    );
};

const Header = ({ totalToDo }) => {

    return (
        <View style={styles.header_area}>
            <Text style={styles.header_text}>
                To Do List
            </Text>
            <Text style={styles.header_text}>
                {totalToDo.length}
            </Text>

        </View>
    );
}

export default ToDoList;