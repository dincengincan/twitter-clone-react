import Layout from '../components/Layout';
import useWindowSize, { WINDOW_SIZES } from '../hooks/useWindowSize';

const HomePage = () => {
  const isLarge = useWindowSize(WINDOW_SIZES.LARGE);

  return (
    <Layout>
      <div>Sidebar</div>
      <div>Middlebar</div>
      {isLarge && <div>Extrabar</div>}
    </Layout>
  );
};

export default HomePage;
