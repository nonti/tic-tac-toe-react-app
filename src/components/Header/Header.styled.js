import styled from "styled-components";
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  height: 10vh;
  align-items: center;

  padding: 2rem;

  .logo {
    height: 50px;
    fill: ${(props) => props.theme.colors.text};
    cursor: pointer;
  }
`;

export const LightModeIcon = styled(MdOutlineLightMode)`
  color: ${(props) => props.theme.colors.text};
  font-size: 2rem;
  cursor: pointer;
`;
  
export const DarkModeIcon = styled(MdOutlineDarkMode)`
  color: ${(props) => props.theme.colors.text};
  font-size: 2rem;
  cursor: pointer;
`;
  