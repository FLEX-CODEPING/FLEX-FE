'use client';

import React, { FormEventHandler, useRef, useState } from 'react';
import { Editor } from '@toast-ui/react-editor';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { TOOLBAR_ITEMS } from '@/app/constants/blog';

const MyEditor = () => {
  const editorRef = useRef<Editor>(null);
  const [getContent, setGetContent] = useState(''); 

  const handleImageUpload = (blob: File, callback: Function) => {
    
    const dummyUrl = 'https://i.namu.wiki/i/Vj5qbEFSnNirgU_WzuKbQmLd20hbM6QyNGHb8f87wB4iUuMA-OliDHoQMBnxu7jSowmBl5R-wBKXIb5Voe1bxw.webp'; 
    const fileName = blob.name; 
    callback(dummyUrl, '이미지 설명');
  };

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
          height="800px"
          initialEditType="markdown"
          initialValue="### 본문 내용을 작성해 주세요."
          hideModeSwitch={true}
          previewStyle="vertical"
          plugins={[colorSyntax]}
          toolbarItems={TOOLBAR_ITEMS}
          hooks={{
            addImageBlobHook: handleImageUpload, 
          }}
        />
        <div className="mt-10 flex justify-end">
          <button
            type="submit"
            className="w-36 h-10 bg-[#000000] text-white rounded-[10px] font-bold text-xl "
          >
            출간하기
          </button>
        </div>
      </form>
    </div>
  );
};
export default MyEditor;
