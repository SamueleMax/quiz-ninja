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
  public static void main(String[]trans
}`
      }
    ],
  }

  const a = {
    1: {
      text: 'Il simbolo $',
      choices: 1,
      answers: {
        1: 'Il simbolo $',
        2: 'Il simbolo @',
        3: 'Il simbolo #',
        4: 'Il simbolo var',
      },
    },
    2: {
      text: 'Quali di queste sono parole chiave riservate in JavaScript?',
      choices: [1, 2],
      answers: {
        1: 'function',
        2: 'let',
        3: 'var',
        4: 'const',
      },
    },
  }

  const initialValues = {};
  initialValues.title = exercise.title;
  for (const question of exercise.questions) {
    initialValues[question.id] = {};
    initialValues[question.id].text = question.text;
    initialValues[question.id].code = question.code;
    if ('answers' in question) {
      initialValues[question.id].choices = [];
      initialValues[question.id].answers = {};
      for (const answer of question.answers) {
        initialValues[question.id].answers[answer.id] = answer.text;
        if (answer.correct) {
          initialValues[question.id].choices.push(answer.id);
        }
      }
      if (initialValues[question.id].choices.length === 1) {
        initialValues[question.id].choices = initialValues[question.id].choices[0];
      }
    }
  }

  return (
    <main style={{maxWidth: "1000px", margin: "auto"}}>
      <Title>Dashboard</Title>
      <Form
        autoComplete="off"
        layout="vertical"
        initialValues={initialValues}
      >
        <Form.Item
          name="title"
          label="Titolo"
        >
          <Input />
        </Form.Item>
        {exercise.questions.map(question => (
          <Flex gap={10} vertical>
            <Space>
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
                  defaultValue={question.type}
                  style={{width: '10rem'}}
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
            </Space>
            <Form.Item
              key={question.id}
              name={[question.id, 'text']}
            >
              <Input />
            </Form.Item>
            {'code' in question && (
              <Form.Item
                name={[question.id, 'code']}
              >
                <Input.TextArea rows={4} style={{marginBottom: '1rem'}} />
              </Form.Item>
            )}
            <Flex gap={10} align="center">
              <Form.Item
                name={[question.id, 'choices']}
              >
                {question.type === 'radio' && (
                  <Radio.Group>
                    <Flex gap={34} vertical>
                      {question.answers.map(answer => (
                        <Radio key={answer.id} value={answer.id} />
                      ))}
                    </Flex>
                  </Radio.Group>
                )}
                {question.type === 'checkbox' && (
                  <Checkbox.Group>
                    <Flex gap={34} vertical>
                      {question.answers.map(answer => (
                        <Checkbox key={answer.id} value={answer.id} />
                      ))}
                    </Flex>
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
              </Form.Item>
              <Flex vertical>
                {'answers' in question && question.answers.map(answer => (
                  <Form.Item
                    name={[question.id, 'answers', answer.id]}
                  >
                    <Input />
                  </Form.Item>
                ))}
              </Flex>
            </Flex>
          </Flex>
        ))}
        <Button type="primary" htmlType="submit">Conferma</Button>
      </Form>
    </main>
  );
}
