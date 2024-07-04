import styled from "styled-components";
import { MdPause, MdPlayArrow, MdSkipNext } from "react-icons/md";

export const MusicPlayerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  margin-bottom: 2rem;
  position: fixed;
  bottom: 0;
  width: 100vw;
`

export const PlayIcon = styled(MdPlayArrow)`
  color: ${(props) => props.theme.colors.secondary}
  font-size: 5rem;
  cursor: pointer;
`
export const PauseIcon = styled(MdPause)`
  color: ${(props) => props.theme.colors.secondary}
  font-size: 5rem;
  cursor: pointer;
`
export const NextIcon = styled(MdSkipNext)`
  color: ${(props) => props.theme.colors.secondary}
  font-size: 5rem;
  cursor: pointer;
`