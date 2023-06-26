import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
  return (
    <>
      <h1>Loading...</h1>

      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#000000"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </>
  );
};

export default Loader;
