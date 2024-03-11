'use client'

import { DeleteOutlined, InboxOutlined, EditOutlined } from '@ant-design/icons';
import { Typography, Input, Form, Radio, Space, Checkbox, Select, Button, Flex, Popconfirm, Upload } from 'antd';

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
        type: 'text',
        text: 'Inserisci la keyword mancante',
        code: `public class HelloWorld {
  public static void main(String[]trans
}`
      }
    ],
  }

  const exerciseAnswers = [
    {
      id: 1,
      answer: 1,
    },
    {
      id: 2,
      answer: [1, 2],
    },
  ]

  return (
    <main style={{maxWidth: "1000px", margin: "auto"}}>
      <Title>Dashboard</Title>
      <Form
        autoComplete="off"
        layout="vertical"
        initialValues={{
          title: exercise.title,
          ...exerciseAnswers.reduce((acc, exerciseAnswer) => {
            acc[exerciseAnswer.id] = exerciseAnswer.answer;
            return acc;
          }, {}),
        }}
      >
        <Form.Item
          name="title"
          label="Titolo"
        >
          <Input />
        </Form.Item>
        {/* TODO: Create a Form.Item for every input, so one for the question, one for each answer I think? */}
        {exercise.questions.map(question => (
          <Flex gap={20} vertical>
            <Flex gap={15} align="center">
              <Popconfirm
                placement="topLeft"
                title="Elimina domanda"
                description="Vuoi veramente eliminare questa domanda?"
                okText="Elimina"
                cancelText="Annulla"
              >
                <Link style={{fontSize: '1.2rem'}}><DeleteOutlined /></Link>
              </Popconfirm>
              {question.type !== 'upload' && (
                <Select
                  style={{width: '10rem'}}
                  defaultValue={question.type}
                  options={[
                    {
                      value: 'radio',
                      label: 'Radio',
                    },
                    {
                      value: 'checkbox',
                      label: 'Checkbox',
                    },
                    {
                      value: 'text',
                      label: 'Text',
                    },
                  ]}
                />
              )}
            </Flex>
            <Form.Item
              key={question.id}
              name={question.id}
            >
              <Flex gap={10} vertical>
              <Input defaultValue={question.text} />
              {'code' in question && (
                <Input.TextArea rows={4} style={{marginBottom: '1rem'}} />
              )}
              {question.type === 'radio' && (
                <Radio.Group>
                  <Space direction="vertical">
                    {question.answers.map(answer => (
                      <Flex gap={10}>
                        <Radio key={answer.id} value={answer.id} />
                        <Input defaultValue={answer.text} />
                      </Flex>
                    ))}
                  </Space>
                </Radio.Group>
              )}
              {question.type === 'checkbox' && (
                <Checkbox.Group>
                  <Space direction="vertical">
                    {question.answers.map(answer => (
                      <Flex gap={18}>
                        <Checkbox key={answer.id} value={answer.id} />
                        <Input defaultValue={answer.text} />
                      </Flex>
                    ))}
                  </Space>
                </Checkbox.Group>
              )}
              {question.type === 'text' && (
                <Input disabled />
              )}
              {question.type === 'upload' && (
                <Upload.Dragger disabled>
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">Clicca o trascina file in quest'area per caricali</p>
                  <p className="ant-upload-hint">Dimensione massima: 1MB</p>
                </Upload.Dragger>
              )}
              </Flex>
            </Form.Item>
          </Flex>
        ))}
        <Button type="primary" htmlType="submit">Conferma</Button>
      </Form>
    </main>
  );
}
