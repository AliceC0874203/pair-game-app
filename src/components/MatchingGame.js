import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles/styles';
import PuzzleContainer from '../components/PuzzleContainer';

// Importing images

const image1 = require('../../assets/images/image1.png');
const image2 = require('../../assets/images/image2.png');
const image3 = require('../../assets/images/image3.png');
const image4 = require('../../assets/images/image4.png');
const image5 = require('../../assets/images/image5.png');
const image6 = require('../../assets/images/image6.png');
const image7 = require('../../assets/images/image7.png');
const image8 = require('../../assets/images/image8.png');

const MatchingGame = () => {
    const images = [image1, image2, image3, image4, image5, image6, image7, image8];
    const [tiles, setTiles] = useState([]);
    const [matchedTiles, setMatchedTiles] = useState([]);
    const [openTiles, setOpenTiles] = useState([]);
    const [pairCount, setPairCount] = useState(0);
    const [time, setTime] = useState(0);
    const [winners, setWinners] = useState([]);
    const [timer, setTimer] = useState(null);

    useEffect(() => {
        resetGame();
    }, []);

    const shuffle = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    const startGame = () => {
        const shuffledTiles = shuffle([...images, ...images]);
        setTiles(shuffledTiles);

        clearInterval(timer);
        setTime(0);
        setPairCount(0);

        const newTimer = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);
        setTimer(newTimer);
    };

    const [isWaiting, setIsWaiting] = useState(false); // New state variable

    const onTileClick = async (clickedIndex) => {
        if (matchedTiles.includes(clickedIndex) || openTiles.includes(clickedIndex) || isWaiting) {
            return;
        }

        const newOpenTiles = [...openTiles, clickedIndex];
        setOpenTiles(newOpenTiles);

        if (newOpenTiles.length === 2) {
            const [firstIndex, secondIndex] = newOpenTiles;
            const firstTile = tiles[firstIndex];
            const secondTile = tiles[secondIndex];

            setPairCount(pairCount + 1);

            if (firstTile === secondTile) {
                setMatchedTiles([...matchedTiles, ...newOpenTiles]);
                setOpenTiles([]);
                
                if (matchedTiles.length + 2 === tiles.length) {
                    clearInterval(timer);
                    Alert.alert('You win!', `Time: ${time} seconds, Pairs Opened: ${pairCount} times`);
                    resetGame();
                }
            } else {
                setIsWaiting(true);  // Prevent new clicks
                setTimeout(() => {
                    setOpenTiles([]);
                    setIsWaiting(false);  // Allow new clicks
                }, 2000);
            }
        }
    };

    const resetGame = () => {
        setTiles(shuffle([...images, ...images]));
        setOpenTiles([]);
        setMatchedTiles([]); // Reset matched tiles
        clearInterval(timer);
        setTime(0);
        setPairCount(0);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Matching Game</Text>
            <PuzzleContainer tiles={tiles} onTileClick={onTileClick} openTiles={openTiles} matchedTiles={matchedTiles} />
            <TouchableOpacity style={styles.button} onPress={startGame}>
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
            <View style={styles.gameInfo}>
                <Text>Pairs Opened: {pairCount} times</Text>
                <Text>Time: {time} seconds</Text>
            </View>
            {/* Your winner table */}
        </View>
    );
};

export default MatchingGame;
