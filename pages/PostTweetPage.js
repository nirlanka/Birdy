/**
 * @format
 * @flow
 */

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import type { NavigationState, NavigationScreenProp}from 'react-navigation';
import { useSelector, useDispatch } from "react-redux";
import { ping } from "../api/twitterApi";
import { pinged } from "../store/actions/twitterActions";

const PostTweetPage = ({navigation}: NavigationScreenProp<NavigationState>) => { 
    const tweets = useSelector(state => state.tweets);
    const dispatch = useDispatch();

    return (
        <View>
            <TouchableOpacity
                onPress={async ()=>{
                    const pong = await ping();
                    dispatch(pinged(pong ? pong.pong : ''));
                    navigation.navigate('HomePage');
                }}
            >
                <Text>Go back</Text>
            </TouchableOpacity>
            <Text>{tweets.length}</Text>
        </View>
    );
}

PostTweetPage.navigationOptions = () => ({
    title:'Create new tweet',
})

export default PostTweetPage