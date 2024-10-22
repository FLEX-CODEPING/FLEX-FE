'use client';

import { TOOLBAR_ITEMS } from '@/app/constants/blog';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { FormEventHandler, useRef, useState } from 'react';
import 'tui-color-picker/dist/tui-color-picker.css';

interface MyEditorProps {
  setContent: (value: string) => void;
}

const MyEditor = ({ setContent }: MyEditorProps) => {
  const editorRef = useRef<Editor>(null);

  const handleImageUpload = (blob: File, callback: Function) => {
    const dummyUrl =
      'https://i.namu.wiki/i/Vj5qbEFSnNirgU_WzuKbQmLd20hbM6QyNGHb8f87wB4iUuMA-OliDHoQMBnxu7jSowmBl5R-wBKXIb5Voe1bxw.webp';
    const fileName = blob.name;
    callback(dummyUrl, '이미지 설명');
  };

  const handleContentChange = () => {
    const content = editorRef.current?.getInstance().getHTML() || '';
    setContent(content);
  };

  return (
    <div>
      <Editor
        ref={editorRef}
        height="800px"
        initialEditType="markdown"
        initialValue="### 본문 내용을 작성해 주세요."
        hideModeSwitch
        previewStyle="vertical"
        plugins={[colorSyntax]}
        toolbarItems={TOOLBAR_ITEMS}
        hooks={{
          addImageBlobHook: handleImageUpload,
        }}
        onChange={handleContentChange}
      />
    </div>
  );
};
export default MyEditor;
