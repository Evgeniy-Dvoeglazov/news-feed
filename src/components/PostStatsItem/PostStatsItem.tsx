import type { ReactNode } from 'react';
import { Flex, Typography } from 'antd';

interface IPostStatsItem {
  icon: ReactNode;
  stats: number;
}

const { Text } = Typography;

export const PostStatsItem = ({ icon, stats }: IPostStatsItem) => {
  return (
    <Flex gap={4}>
      {icon}
      <Text>{stats}</Text>
    </Flex>
  );
};
