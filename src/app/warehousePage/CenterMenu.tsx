'use client';

import React, { useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Editor from 'react-markdown-editor-lite';

import { Button } from 'antd';

import 'react-markdown-editor-lite/lib/index.css';
export default function CenterMenu() {
  const centerStyles: React.CSSProperties = {
    width: '100%',
    height: '96%',
    display: 'flex',
    justifyContent: 'left',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04)',
    borderRadius: '2px',
    padding: '1%',
    marginTop: '2%',
    flexDirection: 'column',
  };
  const titleStyles: React.CSSProperties = {
    color: '#388BFF',
    fontSize: '20px',
    fontWeight: 'bold',
  };
  const topLineStyles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '2%',
  };

  const mdEditor = useRef(null);
  const [value, setValue] = useState<string>('');

  const handleEditorChange = ({ text }: { html: string; text: string }) => {
    // const newValue = text.replace(/\d/g, ''); 不明白为什么要把数字注掉
    const newValue = text;
    setValue(newValue);
  };

  return (
    <>
      <div style={centerStyles}>
        <div style={topLineStyles}>
          <h1 style={titleStyles}>修改文档</h1>
          <Button type="primary">保存</Button>
        </div>
        <Editor
          ref={mdEditor}
          value={value}
          style={{
            height: '90%',
            width: '100%',
          }}
          onChange={handleEditorChange}
          renderHTML={(text) => <ReactMarkdown>{text}</ReactMarkdown>}
        />
      </div>
    </>
  );
}
