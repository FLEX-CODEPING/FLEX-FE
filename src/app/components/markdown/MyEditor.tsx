'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Editor } from '@toast-ui/react-editor';
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import '@toast-ui/editor/dist/toastui-editor.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';


const MyEditor = () => {


  return (
    <Editor
      height="600px"
      initialEditType="markdown"
      initialValue="### 본문 내용을 작성해 주세요."
      hideModeSwitch={true}
      previewStyle="vertical"
      plugins={[colorSyntax]}
      toolbarItems={[
        ['heading', 'bold','italic', 'strike'],
        ['ul', 'ol'],
        ['code', 'codeblock'],
        ['table'],
        ['link'],
        ['image'],
        ['scrollSync'],
      ]}
    />
  );
};
export default MyEditor;
