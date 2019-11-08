/**
 * @format
 * @flow
 */

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import type { NavigationState, NavigationScreenProp}from 'react-navigation';

const HomePage = ({navigation}: NavigationScreenProp<NavigationState>) =>(
    <View>
        <TouchableOpacity
            onPress={()=>{/*navigation.navigate('Article')*/}}
        >
            <Text>Click Here</Text>
        </TouchableOpacity>
    </View>
)

HomePage.navigationOptions = () => ({
    title:'Home page',
})

export default HomePage