/**
 * @format
 * @flow
 */

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import type { NavigationState, NavigationScreenProp}from 'react-navigation';
import { useDispatch, useSelector } from "react-redux";
import { loadedNewTweets } from "../store/actions/twitterActions";

const HomePage = ({navigation}: NavigationScreenProp<NavigationState>) => {
    const dispatch = useDispatch();

    return (
        <View>
            <TouchableOpacity
                onPress={()=>{
                    dispatch(loadedNewTweets([{}, {}]));
                    navigation.navigate('PostTweetPage');
                }}
            >
                <Text>LOAD_NEW_TWEETS</Text>
            </TouchableOpacity>
        </View>
    )
}

HomePage.navigationOptions = () => ({
    title:'Home page',
})

export default HomePage