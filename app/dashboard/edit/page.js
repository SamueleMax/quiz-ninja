'use client'

import { Typography, Table, Button, Modal, Flex } from 'antd';
import { DeleteOutlined, PlusOutlined, FundViewOutlined, EditOutlined } from '@ant-design/icons';

const { Title, Text, Link } = Typography;

export default function Dashboard() {
  const exercise = {
    id: 1,
    title: 'Le variabili',
    questions: [
      {
        id: 1,
        type: 'radio',
        text: 'Qual è il simbolo per dichiarare una variabile in JavaScript?',
        answers: [
          { id: 1, text: 'Il simbolo $' },
          { id: 2, text: 'Il simbolo @' },
          { id: 3, text: 'Il simbolo #' },
          { id: 4, text: 'Il simbolo var'},
        ],
      },
      {
        id: 2,
        type: 'checkbox',
        text: 'Quali di queste sono parole chiave riservate in JavaScript?',
        answers: [
          { id: 1, text: 'function' },
          { id: 2, text: 'let' },
          { id: 3, text: 'var' },
          { id: 4, text: 'const' },
        ],
      },
      {
        id: 3,
        type: 'text',
        text: 'Qual è il simbolo per concatenare due stringhe in JavaScript?',
      },
      {
        id: 4,
        type: 'upload',
        text: 'Crea un programma che stampi "Hello, World!" a schermo.',
      },
      {
        id: 5,
        type: 'select',
        text: 'Quale dei seguenti è un tipo di dato primitivo in JavaScript?',
        answers: [
          { id: 1, text: 'string' },
          { id: 2, text: 'array' },
          { id: 3, text: 'object' },
          { id: 4, text: 'function' },
        ],
      },
      {
        id: 6,
        type: 'text',
        text: 'Inserisci la keyword mancante',
        code: `public class HelloWorld {
  public static void main(String[] args) {
    System.out._______("Hello, World!");
  }
}`
      }
    ],
  }

  return (
    <main style={{maxWidth: "1000px", margin: "auto"}}>
      <Title>Dashboard</Title>
      <Flex gap={10} style={{marginBottom: '1rem'}}>
        <Button type="primary">Nuovo esercizio <PlusOutlined /></Button>
        <Button danger>Elimina selezionati <DeleteOutlined /></Button>
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
              <Link><FundViewOutlined /></Link>
            </Flex>
          )}
        />
      </Table>
    </main>
  );
}
