'use client';

import { TOOLBAR_ITEMS } from '@/app/constants/blog';
import '@toast-ui/chart/dist/toastui-chart.min.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { useRef } from 'react';
import 'tui-color-picker/dist/tui-color-picker.css';

interface MyEditorProps {
  setContent: (value: string) => void;
}

const MyEditor = ({ setContent }: MyEditorProps) => {
  const editorRef = useRef<Editor>(null);

  const handleImageUpload = async (blob: File, callback: Function) => {
    try {
      const response = await fetch(
        `/api/blog/images?bucketName=dev-blog&fileName=${blob.name}`,
      );
      const resData = await response.json();
      const presignedUrl = resData.result;
      await fetch(presignedUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': blob.type,
        },
        body: blob,
      });
      const imageUrl = presignedUrl.split('?')[0];
      await fetch(imageUrl)
        .then((res) => {
          if (!res.ok) {
            throw new Error(
              `Failed to fetch image: ${res.status} ${res.statusText}`,
            );
          }
          return res.blob();
        })
        .catch((error) => {
          console.error('Error fetching uploaded image:', error);
        });
      callback(imageUrl, 'image');
    } catch (error) {
      console.error('Error handling image upload:', error);
      alert('이미지 업로드에 실패했습니다.');
    }
  };

  const handleContentChange = () => {
    const content = editorRef.current?.getInstance().getMarkdown() || '';
    setContent(content);
  };

  return (
    <div className="w-full">
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
