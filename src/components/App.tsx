import React from 'react';

import AddOrEditItem from './addOrEditItem/AddOrEditItem';
import Layout from './layout/Layout';
import Main from './main/Main';
import Sidebar from './sidebar/Sidebar';
import VideoListGrid from './VideoListGrid';

const App = () => (
  <Layout>
    <Sidebar>
      <AddOrEditItem />
    </Sidebar>

    <Main>
      <VideoListGrid />
    </Main>
  </Layout>
);

export default App;
