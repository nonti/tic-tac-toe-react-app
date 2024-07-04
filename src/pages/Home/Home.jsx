import React, { useContext } from 'react';
import { Subtitle, Title, Container } from '../../styles/General.styled';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { SfxContext } from '../../contexts/SfxContexts';

const Home = () => {
  const navigate = useNavigate();
  const {hoverSfx, clickSfx} = useContext(SfxContext)
  return (
    <Container columnBased>
      <Title>
        TicTacToe
      </Title>
      <Subtitle>Play with your friends, higher score wins</Subtitle>
      <Button
        onClick={() => {
          clickSfx();
          navigate('/game-on')
        }
    }
      onMouseEnter={() => hoverSfx()}>Play Now</Button>
    </Container>
  );
};

export default Home;
