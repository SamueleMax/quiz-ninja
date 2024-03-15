import { Flex, Radio, Checkbox, Input, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';


function RadioQuestion({ question, disabled, editable }) {
  return (
    <Radio.Group>
      <Flex gap={editable && 35} vertical>
        {question.answers.map(answer => (
          <Radio
            key={answer.id}
            value={answer.id}
          >
            {!editable && answer.text}
          </Radio>
        ))}
      </Flex>
    </Radio.Group>
  );
}

function CheckboxQuestion({ question, disabled, editable }) {
  return (
    <Checkbox.Group>
      <Flex gap={editable && 35} vertical>
        {question.answers.map(answer => (
          <Checkbox
            key={answer.id}
            value={answer.id}
          >
            {!editable && answer.text}
          </Checkbox>
        ))}
      </Flex>
    </Checkbox.Group>
  );
}

function TextQuestion({ question, disabled }) {
  return (
    <Input placeholder="Risposta"  />
  );
}

function UploadQuestion({ question, disabled }) {
  return (
    <Upload.Dragger>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Clicca o trascina file in quest'area per caricarli</p>
      <p className="ant-upload-hint">Dimensione massima: 4MB</p>
    </Upload.Dragger>
  );
}

function Code({ code }) {
  return (
    <SyntaxHighlighter showLineNumbers language="java" style={dracula}>
      {code}
    </SyntaxHighlighter>
  );
}

export default function Question({ question, disabled = false, editable = false }) {
    return (
      <>
        {'code' in question && <Code code={question.code} />}
        {question.type === 'radio' && <RadioQuestion question={question} disabled={disabled} editable={editable} />}
        {question.type === 'checkbox' && <CheckboxQuestion question={question} disabled={disabled} editable={editable} />}
        {question.type === 'text' && <TextQuestion question={question} disabled={disabled} />}
        {question.type === 'upload' && <UploadQuestion question={question} disabled={disabled} />}
      </>
    );
}
