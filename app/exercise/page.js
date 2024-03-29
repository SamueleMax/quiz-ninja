'use client';

import { Typography, Form, Button } from 'antd';

const { Title } = Typography;

import Question from '../components/Question';

export default function Exercise() {
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
      <Title>{exercise.title}</Title>
      <Form
        layout="vertical"
        autoComplete="off"
      >
        {exercise.questions.map(question => (
          <Form.Item
            key={question.id}
            name={question.id}
            label={question.text}
          >
            <Question question={question} />
          </Form.Item>
        ))}
        <Button type="primary" htmlType="submit">Invia</Button>
      </Form>
    </main>
  );
}
