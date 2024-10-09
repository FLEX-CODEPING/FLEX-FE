'use client'

import React, { useEffect, useState } from 'react';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const MyEditor = () => {

  return (
    <Editor
    height="600px" 
    initialEditType="markdown"
    initialValue="## 본문 내용을 작성해 주세요." 
    hideModeSwitch={true}
      toolbarItems={[
        ['heading', 'bold'],
        ['ul', 'ol'],
        ['code', 'codeblock'],
      ]}
    />
  );
};
export default MyEditor;
