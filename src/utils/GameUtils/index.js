export const checkForSequence = (option1, option2, option3) => {
  if (option1 === null || option2 === null || option3 === null) {
    return false;
  }
    return option1 === option2 && option2 === option3
}

export const checkForWinner = (board) => {
  
  //columns
  for (let i = 0; i < 3; i += 1) {
    if (checkForSequence(board[i], board[i + 3], board[i + 6])) {
      console.log('column winner')
      return [i, i + 3, i + 6];
    }
  }

  // rows
  for (let i = 0; i < 9; i += 3) {
    if (checkForSequence(board[i], board[i + 1], board[i + 2])) {
      console.log('row winner')
      return [i, i + 1, i + 2];
    }
  }

  //diagnol
  if (checkForSequence(board[0], board[4], board[8])) {
    console.log('diagnol winner')
    return [0, 4, 8];
  }

  //diagnol 2
  if (checkForSequence(board[2], board[4], board[6])) {
    console.log('diagnol winner')
    return [2, 4, 6];
  }

  //check if the game has drawn
  // the game is over or there is no winner
  if (!board.includes(null)) {
    return 'draw'
  }
  return false;

};
