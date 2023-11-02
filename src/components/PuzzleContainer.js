import React from 'react';
import { View, TouchableOpacity, ImageBackground } from 'react-native';
import styles from '../styles/styles';

const PuzzleContainer = ({ tiles, onTileClick, openTiles, matchedTiles }) => {
  return (
    <View style={styles.puzzleContainer}>
      {tiles.map((tile, index) => (
        <TouchableOpacity 
          key={index}
          style={styles.tile}
          onPress={() => onTileClick(index)}
        >
           { (openTiles.includes(index) || matchedTiles.includes(index)) &&
      <ImageBackground source={tile} style={styles.imageBackground}>
      </ImageBackground>
    }
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default PuzzleContainer;
