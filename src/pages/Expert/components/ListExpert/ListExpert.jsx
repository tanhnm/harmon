import { Card, List, Typography } from 'antd';

const { Text } = Typography;

export const ListExpert = ({ data }) => {
  return (
    <List
      style={{ width: '100%', padding: '1rem' }}
      grid={{ gutter: 16, column: 1 }} // Adjust the layout (columns) as needed
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Card title={<Text strong>{item.name}</Text>} bordered>
            <Text type='secondary'>Schedule:</Text>
            <br />
            <Text>{item.schedule}</Text>
          </Card>
        </List.Item>
      )}
    />
  );
};
