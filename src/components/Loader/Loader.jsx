import { Watch } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      {' '}
      <Watch
        height={80}
        width={80}
        radius={48}
        color="#3f51b5"
        ariaLabel="watch-loading"
        visible={true}
      />
    </div>
  );
};
