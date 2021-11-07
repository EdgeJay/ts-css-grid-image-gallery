import styled from 'styled-components';

const Cell = styled.div`
  background-color: blueviolet;

  &:nth-child(1) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 3;
  }

  &:nth-child(10) {
    grid-column-start: 3;
    grid-column-end: 6;
    grid-row-start: 3;
    grid-row-end: 6;
  }

  &:nth-child(11) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 4;
    grid-row-end: 6;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const GridCell = (props: ImageProps) => (
  <Cell>
    <img {...props} />
  </Cell>
);

export default GridCell;
