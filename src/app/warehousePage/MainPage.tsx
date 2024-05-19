import React, { useState } from 'react';
import Markdown from 'react-markdown';
export default function MainPage() {
  const initData = `### 123
  *React-Markdown* is **Awesome**`;
  const [data] = useState<string>(initData);

  return (
    <div>
      <Markdown>{data}</Markdown>
    </div>
  );
}
