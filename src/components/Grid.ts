import styled from 'styled-components';

const GRID_GAP_PX = 1;

const Grid = styled.div`
  display: grid;
  background-color: white;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 10vw);
  grid-gap: ${GRID_GAP_PX}px;

  & + & {
    padding-top: ${GRID_GAP_PX}px;
  }
`;

export default Grid;
