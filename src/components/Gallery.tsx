import Grid from './Grid';
import GridCell from './GridCell';
import { imagesGenerator } from '../utils/images';

interface Props {
  images: ImageProps[];
}

const NUM_IMAGES_PER_GRID = 11;

const Gallery = () => {
  const images = imagesGenerator({ total: 26 });

  let gridIndex = 0;

  return (
    <div>
      {images
        .reduce<JSX.Element[][]>(
          (arr, img) => {
            if (arr[arr.length - 1].length === NUM_IMAGES_PER_GRID) {
              arr.push([]);
            }
            const list = arr[arr.length - 1];
            list.push(<GridCell key={img.alt} {...img} />);
            return arr;
          },
          [[]]
        )
        .map((list) => (
          <Grid key={`grid_${(gridIndex += 1)}`}>{list}</Grid>
        ))}
    </div>
  );
};

export default Gallery;
