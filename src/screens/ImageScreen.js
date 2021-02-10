import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native';
import ImageDetail from '../components/ImageDetail';
const ImageScreen = () => {
    return (
        <View>
            <ImageDetail 
            title="Forest" 
            imageSource={require('../../assets/forest.jpg')}
            imageScore='89'
            
            />
            
            <ImageDetail
             title="Beach" 
            imageSource={require('../../assets/beach.jpg')}
            imageScore='56'
            
             />
            
            <ImageDetail 
            title="Mountain" 
            imageSource={require('../../assets/mountain.jpg')}
            imageScore= '678'
             />



        </View>
    )
};

const styles = StyleSheet.create({});
export default ImageScreen;