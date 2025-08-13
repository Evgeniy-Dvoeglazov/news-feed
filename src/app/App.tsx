import { Layout } from 'antd';

import { NewsFeed } from '../components/NewsFeed/NewsFeed';

import './App.scss';

const { Header, Footer, Content } = Layout;

export const App = () => {
  return (
    <div className="app">
      <Layout className="app__layout">
        <Header className="app__header">
          <h1 className="app__title">News feed</h1>
        </Header>
        <Content>
          <NewsFeed />
        </Content>
        <Footer className="app__footer">
          <p>&copy; Evgeniy Dvoeglazov</p>
        </Footer>
      </Layout>
    </div>
  );
};
