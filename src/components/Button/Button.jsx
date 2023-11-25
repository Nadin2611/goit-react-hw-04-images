import { LoadMoreButton } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
      }}
    >
      <LoadMoreButton type="button" onClick={onClick}>
        Load more
      </LoadMoreButton>
    </div>
  );
};
