import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { decrement, increment } from '../../redux/action';

const Home = ({ dispatch, getState, subscribe }) => {
    // console.log("props ", props);

    const [number, setNumber] = useState(0);
    useEffect(() => {
        const unsubscribe = subscribe(() => {
            let value = getState().num;
            setNumber(value);
            console.log("value ==> ", value);
        })
        return () => {
            unsubscribe();
        }
    }, [])


    const onAdd = () => {
        dispatch(increment(number));
    }

    const onDec = () => {
        dispatch(decrement(number));
    }

    return (
        <View style={styles.container}>
            <Text>{number}</Text>
            <Text>Home</Text>

            <Button
                title='Add'
                onPress={onAdd}
            />

            <Button
                title='Dec'
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
        alignItems: 'center'
    }
})