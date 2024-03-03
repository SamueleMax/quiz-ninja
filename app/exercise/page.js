'use client'

import { Typography, Form, Radio, Space, Checkbox, Input, Button } from 'antd';

const { Title, Text, Link } = Typography;

function RadioQuestion({ question }) {
  return (
    <>
      <Text>{question.text}</Text>
      <Form.Item key={question.id}>
        <Radio.Group>
          <Space direction="vertical">
            {question.answers.map((answer) => (
              <Radio key={answer.id} value={answer.id}>{answer.text}</Radio>
            ))}
          </Space>
        </Radio.Group>
      </Form.Item>
    </>
  );
}

function CheckboxQuestion({ question }) {
  return (
    <>
      <Text>{question.text}</Text>
      <Form.Item key={question.id}>
        <Checkbox.Group>
          <Space direction="vertical">
            {question.answers.map((answer) => (
              <Checkbox key={answer.id} value={answer.id}>{answer.text}</Checkbox>
            ))}
          </Space>
        </Checkbox.Group>
      </Form.Item>
    </>
  );
}

function TextQuestion({ question }) {
  return (
    <>
      <Text>{question.text}</Text>
      <Form.Item key={question.id} name={question.id}>
        <Input />
      </Form.Item>
    </>
  );
}

export default function Exercise() {
  const exercise = {
    id: 1,
    title: 'Le variabili',
    description: 'In questo esercizio imparerai a dichiarare e utilizzare le variabili in JavaScript.',
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
        type: 'radio',
        text: 'Qual è il simbolo per dichiarare una costante in JavaScript?',
        answers: [
          { id: 1, text: 'Il simbolo const'},
          { id: 2, text: 'Il simbolo let' },
          { id: 3, text: 'Il simbolo var' },
          { id: 4, text: 'Il simbolo #' },
        ],
      },
      {
        id: 3,
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
        id: 4,
        type: 'text',
        text: 'Qual è il simbolo per concatenare due stringhe in JavaScript?',
      },
    ],
  }
  
  return (
    <main style={{maxWidth: '1000px', margin: 'auto'}}>
      <Title>{exercise.title}</Title>
      <Text>{exercise.description}</Text>
      <Form autoComplete="off" wrapperCol={{ span: 16 }}>
        {exercise.questions.map((question) => {
          if (question.type === 'radio') {
            return <RadioQuestion key={question.id} question={question} />
          } else if (question.type === 'checkbox') {
            return <CheckboxQuestion key={question.id} question={question} />
          } else if (question.type === 'text') {
            return <TextQuestion key={question.id} question={question} />
          }
        })}
        <Button type="primary" htmlType="submit">Invia</Button>
      </Form>
    </main>
  );
}
