import styled from "styled-components";

export const CellStyle = styled.div`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  width: 10rem;
  font-size: 3rem;
  height: 10rem;
  border: none;
  border-radius: 2.5rem;
  padding: 2rem;
  box-shadow: 5px 10px ${(props) => props.theme.colors.gray};
  cursor: pointer;


    .markedItem {
      path: {
        fill: ${(props) => props.theme.colors.primary};
      }
    }
  .outlineIcon {
    path{
      stroke: ${(props) => props.theme.colors.primary};
      stroke-width: 0;
    }
  }

  &:hover {
    .outlineIcon {
    path{
      stroke-width:2;
    }
  }
`;

