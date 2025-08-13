import { Card, Tag, Typography } from 'antd';

import type { INewsPost } from '../../utils/types';

import { PostStats } from '../PostStats/PostStats';

import './NewsPost.scss';

interface INewsPostProps {
  post: INewsPost;
}

const { Title, Paragraph } = Typography;

export const NewsPost = ({ post }: INewsPostProps) => {
  const { title, body, tags } = post;

  return (
    <Card className="newsPost">
      <Title className="newsPost__title" level={2}>
        {title}
      </Title>
      {tags.map(tag => (
        <Tag key={tag}>{tag}</Tag>
      ))}
      <Paragraph
        className="newsPost__content"
        ellipsis={{
          rows: 3,
          expandable: true,
        }}
      >
        {body}
      </Paragraph>
      <PostStats post={post} />
    </Card>
  );
};
