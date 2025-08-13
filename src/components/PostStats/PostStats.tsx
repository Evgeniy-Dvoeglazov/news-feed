import { Flex } from 'antd';
import { DislikeOutlined, EyeOutlined, LikeOutlined } from '@ant-design/icons';

import type { INewsPost } from '../../utils/types';

import { PostStatsItem } from '../PostStatsItem/PostStatsItem';

interface IPostStats {
  post: INewsPost;
}

export const PostStats = ({ post }: IPostStats) => {
  const { reactions, views } = post;

  return (
    <Flex justify="space-between">
      <Flex gap={12}>
        <PostStatsItem icon={<LikeOutlined />} stats={reactions.likes} />
        <PostStatsItem icon={<DislikeOutlined />} stats={reactions.dislikes} />
      </Flex>
      <PostStatsItem icon={<EyeOutlined />} stats={views} />
    </Flex>
  );
};
