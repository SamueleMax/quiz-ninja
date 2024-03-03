'use client'

import { Typography, Form, Radio, Space, Checkbox, Input, Button, Upload, Select } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const { Title, Text, Link } = Typography;

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
            {'code' in question && (
              <SyntaxHighlighter showLineNumbers language="java" style={dracula}>
                {question.code}
              </SyntaxHighlighter>
            )}
            {question.type === 'radio' && (
              <Radio.Group>
                <Space direction="vertical">
                  {question.answers.map(answer => (
                    <Radio key={answer.id} value={answer.id}>{answer.text}</Radio>
                  ))}
                </Space>
              </Radio.Group>
            )}
            {question.type === 'checkbox' && (
              <Checkbox.Group>
                <Space direction="vertical">
                  {question.answers.map(answer => (
                    <Checkbox key={answer.id} value={answer.id}>{answer.text}</Checkbox>
                  ))}
                </Space>
              </Checkbox.Group>
            )}
            {question.type === 'text' && (
              <Input />
            )}
            {question.type === 'upload' && (
              <Upload.Dragger>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Clicca o trascina file in quest'area per caricali</p>
                <p className="ant-upload-hint">Dimensione massima: 1MB</p>
              </Upload.Dragger>
            )}
            {question.type === 'select' && (
              <Select
                showSearch
                placeHolder="Seleziona una risposta"
                optionFilterProp="children"
                filterOption={(input, option) => option.label.toLowerCase().includes(input.toLowerCase())}
                options={question.answers.map(answer => ({label: answer.text, value: answer.id}))}
              />
            )}
          </Form.Item>
        ))}
        <Button type="primary" htmlType="submit">Invia</Button>
      </Form>
    </main>
  );
}
