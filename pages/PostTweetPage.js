/**
 * @format
 * @flow
 */

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import type { NavigationState, NavigationScreenProp}from 'react-navigation';
import { useDispatcher, useSelector } from "react-redux";

const PostTweetPage = ({navigation}: NavigationScreenProp<NavigationState>) => { 
    const tweets = useSelector(state => state.tweets);

    return (
        <View>
            <TouchableOpacity
                onPress={()=>{
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