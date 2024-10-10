'use client';

import React, { FormEventHandler, useEffect, useRef, useState } from 'react';
import { Editor, Viewer } from '@toast-ui/react-editor';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

const MyEditor = () => {
  const editorRef = useRef<Editor>(null);
  const [getContent, setGetContent] = useState('');

  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const content = editorRef.current?.getInstance().getHTML();

    setGetContent(content);
    console.log('출력 데이터', content);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Editor
          ref={editorRef}
          height="600px"
          initialEditType="markdown"
          initialValue="### 본문 내용을 작성해 주세요."
          hideModeSwitch={true}
          previewStyle="vertical"
          plugins={[colorSyntax]}
          toolbarItems={[
            ['heading', 'bold', 'italic', 'strike'],
            ['ul', 'ol'],
            ['code', 'codeblock'],
            ['table'],
            ['link'],
            ['image'],
            ['scrollSync'],
          ]}
        />
        <div className="mt-10 flex justify-end">
          <button
            type="submit"
            className="w-36 h-10 bg-[#cbcaca] text-white rounded-[10px] font-bold text-xl "
          >
            출간하기
          </button>
        </div>
      </form>
      <div className="w-[983px] flex gap-8 mt-[40px] justify-center mb-[10px]">
        <div className="text-xl font-bold">출력된 HTML</div>
      </div>
      <div className="w-[983px] flex gap-8 justify-center">{getContent}</div>
    </div>
  );
};
export default MyEditor;
