import styles from './Layout.module.css';

import Extra from './Extra';

import Main from './Main';
import Sidebar from './Sidebar';

import useWindowSize, { WINDOW_SIZES } from '../hooks/useWindowSize';

const Layout = ({ children }) => {
  const isLarge = useWindowSize(WINDOW_SIZES.LARGE);

  return (
    <div className={styles.layout}>
      <Sidebar />
      <Main>{children}</Main>
      {isLarge && <Extra />}
    </div>
  );
};

export default Layout;
