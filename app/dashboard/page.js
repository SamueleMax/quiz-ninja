'use client'

import { Typography, Table, Button, Modal, Flex } from 'antd';
import { DeleteOutlined, PlusOutlined, FundViewOutlined, EditOutlined, UserAddOutlined } from '@ant-design/icons';

const { Title, Text, Link } = Typography;

export default function Dashboard() {  
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
      <Title>Dashboard</Title>
      <Flex gap={10} style={{marginBottom: '1rem'}}>
        <Button type="primary">Nuovo esercizio <PlusOutlined /></Button>
        <Button danger>Elimina selezionati <DeleteOutlined /></Button>
        <Button type="default">Assegna selezionati <UserAddOutlined /></Button>
      </Flex>
      <Table
        dataSource={exercises}
        rowSelection={{
          getCheckboxProps: item => ({
            name: item.name,
          }),
        }}
      >
        <Table.Column title="Esercizio" dataIndex="title" key="title" />
        <Table.Column
          title="Azione"
          key="action"
          render={exercise => (
            <Flex gap={25}>
              <Link
                onClick={() => {
                  Modal.confirm({
                    title: 'Conferma eliminazione',
                    content: 'Vuoi davvero eliminare l\'esercizio?',
                    footer: (_, { OkBtn, CancelBtn }) => (
                      <>
                        <CancelBtn />
                        <OkBtn />
                      </>
                    )
                  })
                }}
              >
                <DeleteOutlined />
              </Link>
              <Link><EditOutlined /></Link>
              <Link><UserAddOutlined /></Link>
              <Link><FundViewOutlined /></Link>
            </Flex>
          )}
        />
      </Table>
    </main>
  );
}
