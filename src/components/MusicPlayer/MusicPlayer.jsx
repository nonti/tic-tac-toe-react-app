import React, { useEffect, useRef, useState } from 'react';
import { MusicPlayerWrapper } from './MusicPlayer.styled';
import { randomizeIndex } from '../../utils/MusicUtils';
import playList from '../../utils/MusicUtils/playlist';

const MusicPlayer = () => {
  
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(randomizeIndex(playList));
  const [playPromise, setPlayPromise] = useState(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      const promise = playerRef.current?.play();
      setPlayPromise(promise);
      return;
    }
    playerRef.current.pause();
  }, [isPlaying]);

  const shuffleHandler = async () => {
    await playPromise.then(() => {
      playerRef.current.pause();
      setIsPlaying(false);
    });

    setCurrentSong(randomizeIndex(playList));
    setIsPlaying(true);
  };

  return (
    <MusicPlayerWrapper>
      {isPlaying ? (
      <button onClick={() => setIsPlaying(false)}>pause</button>

      ) : (
      <button onClick={() => setIsPlaying(true)}>play</button>

      )}
      <button onClick={shuffleHandler}>shuffle</button>

      <audio ref={playerRef} src={playList[currentSong]}></audio>
      <p>{playList.current}</p>
    </MusicPlayerWrapper>
  );
};

export default MusicPlayer;