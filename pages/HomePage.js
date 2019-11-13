/**
 * @format
 * @flow
 */

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import type { NavigationState, NavigationScreenProp}from 'react-navigation';
import { useSelector } from "react-redux";
import { loadedNewTweets } from "../store/actions/twitterActions";

import { useState } from 'react';

const HomePage = ({navigation}: NavigationScreenProp<NavigationState>) => {
    const pong = useSelector(state => state.pong);
    const tweets = useSelector(state => state.tweets);
    
    return (
        <View>
            <TouchableOpacity
                onPress={()=>{
                    navigation.navigate('PostTweetPage');
                }}
            >
                <Text>LOAD_NEW_TWEETS</Text>
            </TouchableOpacity>
            <Text>{pong}</Text>
            <Text>{tweets.length}</Text>
        </View>
    )
}

HomePage.navigationOptions = () => ({
    title:'Home page',
})

export default HomePage