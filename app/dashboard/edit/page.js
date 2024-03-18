'use client';

import { useState } from 'react';

import { Typography, Input, Form, Button, Popconfirm, Flex } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const { Title, Link } = Typography;

import Question from '@/app/components/Question';

export default function Edit() {
  const [exercise, setExercise] = useState({
    id: 1,
    title: 'Le variabili',
    questions: [
      {
        id: 1,
        type: 'radio',
        text: 'Qual è il simbolo per dichiarare una variabile in JavaScript?',
        answers: [
          { id: 1, text: 'Il simbolo $', correct: true },
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
          { id: 1, text: 'function', correct: true },
          { id: 2, text: 'let' },
          { id: 3, text: 'var', correct: true },
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
        type: 'text',
        text: 'Inserisci la keyword mancante',
        code: `public class HelloWorld {
  public static void main(String[] args) {
    System.out._______("Hello, World!");
  }
}`
      }
    ],
  });


  function EditableQuestion({ question }) {
    return (
      <Flex vertical={question.type !== 'radio' && question.type !== 'checkbox'}>
        <Form.Item
          name={[question.id, 'choices']}
        >
          <Question question={question} editable />
        </Form.Item>
        <Flex vertical>
          {(question.type === 'radio' || question.type === 'checkbox') && question.answers.map((answer, i) => (
            <Form.Item
              key={answer.id}
              name={[question.id, 'answers', answer.id]}
            >
              <Input placeholder={"Risposta " + (parseInt(i) + 1)} />
            </Form.Item>
          ))}
        </Flex>
      </Flex>
    );
  }

  function deleteQuestion(id) {
    setExercise({
      ...exercise,
      questions: exercise.questions.filter(question => question.id !== id),
    })
  }

  return (
    <main style={{maxWidth: "1000px", margin: "auto"}}>
      <Title>Dashboard</Title>
      <Form
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          name="title"
          label="Titolo"
        >
          <Input />
        </Form.Item>

        {exercise.questions.map(question => (
          <>
            <Popconfirm
              placement="topLeft"
              title="Elimina domanda"
              description="Vuoi veramente eliminare questa domanda?"
              okText="Elimina"
              cancelText="Annulla"
              onConfirm={() => deleteQuestion(question.id)}
            >
              <Link style={{fontSize: "1.2rem"}}><DeleteOutlined /></Link>
            </Popconfirm>

            <Form.Item
              key={question.id}
              name={[question.id, 'text']}
            >
              <Input placeholder={"Domanda " + question.id} />
            </Form.Item>

            <EditableQuestion question={question} />
          </>
        ))}

        <Button type="primary" htmlType="submit">Conferma</Button>
      </Form>
    </main>
  );
}
