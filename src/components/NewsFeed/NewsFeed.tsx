import { useEffect, useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Divider, List, Skeleton, Typography } from 'antd';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getNews, newsSelector } from '../../features/news/newsApiSlice';
import { NewsPost } from '../NewsPost/NewsPost';

import './NewsFeed.scss';

const { Title } = Typography;

export const NewsFeed = () => {
  const dispatch = useAppDispatch();
  const isInitialMounted = useRef(true);
  const { news, loading, error, newsTotal } = useAppSelector(newsSelector);

  useEffect(() => {
    if (isInitialMounted.current) {
      void dispatch(getNews({ limit: 10, skip: news.length }));
      isInitialMounted.current = false;
    }
  }, [dispatch, news.length]);

  return (
    <section className="newsFeed">
      {loading && !news.length && (
        <Skeleton className="newsFeed__skeleton" paragraph={{ rows: 3 }} active />
      )}
      {error && (
        <Title className="newsFeed__error" level={2}>
          {error}
        </Title>
      )}
      {!!news.length && (
        <div id="newsFeedContent" className="newsFeed__content">
          <InfiniteScroll
            dataLength={news.length}
            next={() => dispatch(getNews({ limit: 10, skip: news.length }))}
            hasMore={news.length < newsTotal}
            loader={<Skeleton className="newsFeed__skeleton" paragraph={{ rows: 3 }} active />}
            endMessage={<Divider plain>Это все новости</Divider>}
            scrollableTarget="newsFeedContent"
          >
            <List
              dataSource={news}
              split={false}
              renderItem={post => (
                <List.Item key={post.id} style={{ justifyContent: 'center' }}>
                  <NewsPost post={post} />
                </List.Item>
              )}
            />
          </InfiniteScroll>
        </div>
      )}
    </section>
  );
};
