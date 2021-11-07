import styled from 'styled-components';
import './styles.css';

const Grid = styled.div`
  display: grid;
  background-color: aqua;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 10vw);
  grid-gap: 10px;

  & + & {
    padding-top: 10px;
  }

  .cell {
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
  }
`;

const App = () => {
  return (
    <div className="App">
      <Grid>
        <div className="cell">
          <img src="https://www.fillmurray.com/640/360" />
        </div>
        <div className="cell">
          <img src="https://www.fillmurray.com/720/480" />
        </div>
        <div className="cell">
          <img src="https://loremflickr.com/640/360" />
        </div>
        <div className="cell">
          <img src="https://loremflickr.com/720/480" />
        </div>
        <div className="cell">
          <img src="https://placebeard.it/640x360" />
        </div>
        <div className="cell">
          <img src="https://placebeard.it/640x360" />
        </div>
        <div className="cell">
          <img src="https://lorempixel.com/640/360" />
        </div>
        <div className="cell">
          <img src="https://lorempixel.com/480/360" />
        </div>
        <div className="cell">
          <img src="https://lorempixel.com/360/240" />
        </div>
        <div className="cell">
          <img src="https://www.placecage.com/c/480/480" />
        </div>
        <div className="cell">
          <img src="https://www.placecage.com/c/640/640" />
        </div>
      </Grid>
      <Grid>
        <div className="cell">
          <img src="https://placeimg.com/640/480/people" />
        </div>
        <div className="cell">
          <img src="https://placeimg.com/640/480/nature" />
        </div>
        <div className="cell">
          <img src="https://placeimg.com/640/480/arch" />
        </div>
        <div className="cell">
          <img src="https://placebear.com/640/360" />
        </div>
        <div className="cell">
          <img src="https://placebear.com/480/360" />
        </div>
        <div className="cell">
          <img src="https://placekitten.com/480/360" />
        </div>
        <div className="cell">
          <img src="https://placekitten.com/640/360" />
        </div>
        <div className="cell">
          <img src="https://loremflickr.com/640/360?random=1" />
        </div>
        <div className="cell">
          <img src="https://loremflickr.com/640/360?random=2" />
        </div>
        <div className="cell">
          <img src="https://loremflickr.com/640/360?random=3" />
        </div>
        <div className="cell">
          <img src="https://loremflickr.com/640/360/dogs" />
        </div>
      </Grid>
      <Grid>
        <div className="cell">
          <img src="https://www.placecage.com/640/640" />
        </div>
        <div className="cell">
          <img src="https://placeimg.com/640/480/any" />
        </div>
        <div className="cell">
          <img src="https://placeimg.com/640/480/tech" />
        </div>
        <div className="cell">
          <img src="https://loremflickr.com/640/360/dogs?random=4" />
        </div>
      </Grid>
    </div>
  );
};

export default App;
