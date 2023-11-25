import { ImageGalleryBox } from './ImageGallery.styled';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images, onClick }) => {
  return (
    <ImageGalleryBox>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onClick={onClick}
        ></ImageGalleryItem>
      ))}
    </ImageGalleryBox>
  );
};
