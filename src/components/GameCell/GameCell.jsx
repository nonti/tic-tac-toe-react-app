import React, { useContext } from "react";
import { CellStyle } from "./GameCell.styled";
import { GameContext } from "../../contexts/GameContext";
import { checkForWinner } from "../../utils/GameUtils";
import { ReactComponent as IconX } from "../../assets/svgs/xs.svg";
import { ReactComponent as IconH } from "../../assets/svgs/hs.svg";
import { ReactComponent as IconHOutline } from "../../assets/svgs/ho.svg";
import { ReactComponent as IconXOutline } from "../../assets/svgs/xo.svg";
import { ModalContext } from "../../contexts/modalContext";
import RoundOverModal from "../Modal/RoundOverModal/RoundOverModal";
import { SfxContext } from "../../contexts/SfxContexts";

const GameCell = ({ cellItem, index, isWinningCell }) => {
  const { updateBoard, game, roundComplete } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);
  const {hoverSfx, clickSfx, winSfx} = useContext(SfxContext );

  const cellClickHandler = () => {
    console.log(isWinningCell)
    clickSfx();
    updateBoard(index);
    const result = checkForWinner(game.board);
    console.log(result)
    if (result) {
      roundComplete(result);
      if (result !== 'draw') {
        winSfx();
      } 
      setTimeout(() => {
      handleModal(<RoundOverModal />);
      }, 2000);
    }
  };
  
  if (cellItem === "x") {
    return (
      <CellStyle isWinningCell={ isWinningCell ?? false}>
        <IconX className="markedItem"  />
      </CellStyle>
    );
  } else if (cellItem === "o") {
    return (
      <CellStyle isWinningCell={ isWinningCell ?? false}>
        <IconH className="markedItem" />
      </CellStyle>
    );
  }

  return (
    <CellStyle onClick={cellClickHandler} onMouseEnter={() => hoverSfx()}>
      {game.turn === "x" ? (
        <IconXOutline className="outlineIcon" />
      ) : (
        <IconHOutline className="outlineIcon" />
      )}
    </CellStyle>
  );
};

export default GameCell;
