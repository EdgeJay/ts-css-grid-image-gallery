import images from './images.json';

interface ImageGenerationParams {
  total: number;
}

const imagesGenerator = ({ total }: ImageGenerationParams): ImageProps[] => {
  const arr: ImageProps[] = [];
  const totalImages = images.length;
  let count = total;
  while ((count -= 1) > 0) {
    arr.push(images[Math.floor(Math.random() * totalImages)]);
  }
  return arr;
};

export { imagesGenerator };
