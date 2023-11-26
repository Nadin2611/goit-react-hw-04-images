import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SearchBar } from './Searchbar/Searchbar';
import { Modal } from './Modal/Modal';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { getImage } from 'service/image-service';

export const App = () => {
  const [images, setImages] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [largeImage, setLargeImage] = useState(null);
  const [totalImage, setTotalImage] = useState(0);

  useEffect(() => {
    if (!searchValue) {
      return;
    }
    const fetchData = async () => {
      setLoading(true);

      try {
        const { hits, totalHits } = await getImage(searchValue, page);

        if (hits.length === 0) {
          toast.warn(
            `Sorry, there are no images matching your search query. Please try again.`
          );
          return;
        }

        if (page === Math.ceil(totalHits / 12)) {
          toast.info(
            `We're sorry, but you've reached the end of search results.`
          );
        }
        setImages(prevImages => [...prevImages, ...hits]);
        setLoading(false);
        setTotalImage(totalHits);

        if (page === 1) {
          toast.success(`Hooray! We found ${totalHits} images.`);
        }
      } catch (error) {
        if (error.response.status === 404) {
          toast.error(`Not Found!`, error);
        }
        if (error.response.status === 400) {
          toast.error(`Bad Request!`, error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchValue, page]);

  const handleSearchValue = formValue => {
    setImages([]);
    setSearchValue(formValue);
    setPage(1);
  };
  const handleLoadMore = () => setPage(prevPage => prevPage + 1);
  const handleClickImage = largeImage => setLargeImage(largeImage);
  const handleCloseModal = () => setLargeImage(null);

  return (
    <>
      <SearchBar onGetSearchValue={handleSearchValue}></SearchBar>

      <ImageGallery
        images={images}
        onClick={selectedImage => {
          handleClickImage(selectedImage);
        }}
      ></ImageGallery>

      {loading && <Loader />}

      {totalImage > images.length && !loading && (
        <Button onClick={handleLoadMore} />
      )}

      {largeImage && <Modal imageURL={largeImage} onClose={handleCloseModal} />}

      <ToastContainer />
    </>
  );
};

// componentDidUpdate(_, prevState) {
//   const { page, searchValue } = this.state;

//   if (searchValue !== prevState.searchValue || page !== prevState.page) {
//     this.fetchData();
//   }
// }
