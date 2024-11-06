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
      'https://www.kcie.or.kr/webbook_img?file=webbook/MjAyMTA2MzBfMTEg/MDAxNjI1MDE2Mzg0MDQ5.84-tA-RQkkuB_-bTpllTG2J7XQNGGqgxekJTuboeBQEg.8708-QyOZaPOvyf2l_3Z8tA9aZH2BMqAoeq_qeJWZwcg.PNG/Read_theChart_img_04.png';
    const fileName = blob.name;
    callback(dummyUrl, '이미지 설명');
  };

  const handleContentChange = () => {
    const content = editorRef.current?.getInstance().getMarkdown() || '';
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
