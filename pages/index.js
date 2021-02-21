import Layout from '../components/Layout';
import Extra from '../components/Extra';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';

import useWindowSize, { WINDOW_SIZES } from '../hooks/useWindowSize';

const HomePage = () => {
  const isLarge = useWindowSize(WINDOW_SIZES.LARGE);

  return (
    <Layout>
      <Sidebar />
      <Main />
      {isLarge && <Extra />}
    </Layout>
  );
};

export default HomePage;
