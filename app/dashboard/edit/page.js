'use client'

import { Typography, Input, Form, Radio, Space, Checkbox, Select, Button } from 'antd';

const { Title, Text, Link } = Typography;

export default function Edit() {
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
      <Form
        autoComplete="off"
        layout="vertical"
        initialValues={{
          title: exercise.title,
        }}
      >
        <Form.Item
          name="title"
          label="Titolo"
        >
          <Input />
        </Form.Item>
        {exercise.questions.map(question => (
          <Flex>
            
          </Flex>
        ))}
        <Button type="primary" htmlType="submit">Conferma</Button>
      </Form>
    </main>
  );
}
