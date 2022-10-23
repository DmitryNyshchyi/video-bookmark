import React from 'react';

import AddNewItem from './addNewItem/AddNewItem';
import Layout from './layout/Layout';
import Main from './main/Main';
import Sidebar from './sidebar/Sidebar';

const App = () => (
  <Layout>
    <Sidebar>
      <AddNewItem />
    </Sidebar>
    <Main>Main</Main>
  </Layout>
);

export default App;
