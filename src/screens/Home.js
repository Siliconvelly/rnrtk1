import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import store from '../redux/store';
import { decrement, increment } from '../redux/action';

const Home = () => {
    console.log("store value ==> ", store);
    console.log("store.getState() ==> ", store.getState());

    const [number, setNumber] = useState(0);

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            let value = store.getState().num;
            setNumber(value);
        })
        return () => {
            unsubscribe();
        }
    }, [])


    const onAdd = () => {
        store.dispatch(increment(number))
    }

    const onDec = () => {
        store.dispatch(decrement(number))
    }
    return (
        <View style={styles.container}>
            <Text>{number}</Text>
            <Text>Home</Text>

            <Button
                title='ADD'
                onPress={onAdd}
            />

            <Button
                title='DEC'
                onPress={onDec}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})