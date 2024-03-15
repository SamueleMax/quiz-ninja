'use client';

import { Typography, Table, Tag } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

const { Title, Text, Link } = Typography;

export default function Home() {
  const exercises = [
    {
      key: '1',
      title: 'Le variabili',
      status: 'complete',
    },
    {
      key: '2',
      title: 'I cicli',
      status: 'complete',
    },
    {
      key: '3',
      title: 'Le condizioni',
      status: 'incomplete',
    },
    {
      key: '4',
      title: 'Le funzioni',
      status: 'incomplete',
    },
  ]

  return (
    <main style={{maxWidth: "1000px", margin: "auto"}}>
      <Title>Quiz Ninja</Title>
      <Table dataSource={exercises}>
        <Table.Column title="Esercizio" dataIndex="title" key="title" />
        <Table.Column
          title="Stato"
          dataIndex="status"
          key="status"
          render={status => (
            status === 'complete'
              ? <Tag color="green">Completato</Tag>
              : <Tag color="red">Da completare</Tag>
          )}
        />
        <Table.Column
          title="Visualizza"
          key="view"
          render={exercise => (
            exercise.status === 'incomplete'
              ? <Link href="/exercise">Completa <ArrowRightOutlined /></Link>
              : <Link href="/exercise">Visualizza</Link>
          )}
        />
      </Table>
    </main>
  );
}
