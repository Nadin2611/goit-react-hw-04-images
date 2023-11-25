import {
  ImageGalleryCard,
  ImageGalleryPicture,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ image, onClick }) => {
  // console.log(image.largeImageURL);
  return (
    <ImageGalleryCard>
      <ImageGalleryPicture
        src={image.webformatURL}
        alt={image.id}
        onClick={() => {
          onClick(image.largeImageURL);
        }}
      />
    </ImageGalleryCard>
  );
};
