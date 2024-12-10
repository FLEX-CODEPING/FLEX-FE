'use client';

import { TOOLBAR_ITEMS } from '@/app/constants/blog';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { useEffect, useRef } from 'react';
import 'tui-color-picker/dist/tui-color-picker.css';

interface MyEditorProps {
  setContent: (value: string) => void;
}

const MyEditor = ({ setContent }: MyEditorProps) => {
  const editorRef = useRef<Editor>(null);

  const handleImageUpload = async (blob: File, callback: Function) => {
    try {
      console.log('fileName', blob.name);
      const response = await fetch(
        `/api/blog/images?bucketName=dev-blog&fileName=${blob.name}`,
      );
      if (!response.ok) {
        throw new Error('Failed to get presigned URL');
      }
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

  useEffect(() => {
    const editorInstance = editorRef.current?.getInstance();
    if (editorInstance) {
      editorInstance.on('keyup', (_: any, event: KeyboardEvent) => {
        if (event.key === '!') {
          // 기존 팝업이 있다면 삭제
          const existingPopup = document.querySelector('.investment-popup');
          if (existingPopup) {
            existingPopup.remove();
          }

          // 팝업 생성
          const popup = document.createElement('ul');
          popup.classList.add('investment-popup');

          // 팝업 스타일 설정
          popup.style.position = 'absolute';
          popup.style.backgroundColor = 'white';
          popup.style.border = '1px solid #ddd';
          popup.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
          popup.style.padding = '10px';
          popup.style.listStyle = 'none';
          popup.style.zIndex = '1000';

          // 샘플 데이터 (API로 대체할 수 있음)
          const investmentList = [
            { name: '삼성전자', price: 70000, shares: 60, date: '2024-12-25' },
            { name: '카카오', price: 95000, shares: 30, date: '2024-12-20' },
          ];

          // 투자 내역 리스트 추가
          investmentList.forEach((investment) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${investment.name} / ${investment.price}원 / ${investment.shares}주 / ${investment.date}`;
            listItem.style.padding = '5px';
            listItem.style.cursor = 'pointer';

            listItem.addEventListener('click', () => {
              // 선택된 내역을 에디터에 삽입
              const selection = editorInstance.getSelection();
              // "!" 기호를 포함해 선택 영역을 설정
              const start = [selection[0], selection[1] - 1];

              editorInstance.replaceSelection(
                `[${investment.name}](${investment.price}원, ${investment.shares}주, ${investment.date})`,
                start,
                selection[1],
              );
              popup.remove(); // 팝업 제거
            });

            listItem.addEventListener('mouseenter', () => {
              listItem.style.backgroundColor = '#f0f0f0';
            });

            listItem.addEventListener('mouseleave', () => {
              listItem.style.backgroundColor = 'white';
            });

            popup.appendChild(listItem);
          });

          // 팝업을 에디터에 추가
          editorInstance.addWidget(popup, 'top');
        }
      });
    }
  }, []);

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
