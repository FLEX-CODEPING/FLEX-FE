# 📈 나만을 위한 재테크 전용 블로그 FLEX ReadME

![image](https://github.com/user-attachments/assets/d2bb93b7-eb41-4fed-a9c0-c058521f52be)

**배포주소** : 현재는 미운영중입니다, 다시 또 만나요! 👋

[<img src="https://img.shields.io/badge/프로젝트 기간-2024.09~2024.12.09-F95700?style=flat&logo=&logoColor=white" />]()

<br>

## 1. 프로젝트 소개
재테크에 대한 관심이 높아지는 시대 속에서, 초보 투자자들이 보다 쉽고 편리하게 재테크를 경험할 수 있도록 제작되었습니다.
<br>


### 1. 제태크 정보 공유 블로그
- 비슷한 연령이나 급여를 가진 사용자의 게시물을 추천, 개인화된 콘텐츠 제공
- 댓글을 통해 의견을 공유하고 다른 사용자들과 소통

### 2. 모의 투자
- 가상 투자 환경에서 사용자는 가상의 자금으로 실제 주식 시장과 유사한 거래를 경험을 제공
- AI 기술로 투자 성향과 데이터를 분석해 맞춤형 전략을 추천 및 최신 동향을 반영한 자료 제공
  
### 3. AI 경제 뉴스요약
- 선택한 키워드의 뉴스검색을 통해 한 눈에 볼 수 있는 AI 경제 뉴스 요약을 제공
- AI 뉴스 요약에 대한 기사 원문도 함께 조회하여 더 상세하고 풍부한 정보를 제공

### 4. 주가예측 & 실시간 알림
- 선택한 지표에 따른 맞춤형 주가 예측 정보를 제공
- 다양한 기술적 지표를 통한 주가 분석 제공
- 목표 가격을 지정해 해당 가격 도달시 사용자에게 실시간 알림을 제공

<br>

## 2. 팀원 구성 (FLEX의 FE팀원들)

<div>

| **최민규** | **강민재** | **김낙도** | 
| :------: |  :------: | :------: |
| [<img src="https://avatars.githubusercontent.com/u/99270060?v=4" height=150 width=150> <br/> @Minkyu0424](https://github.com/Minkyu0424) | [<img src="https://avatars.githubusercontent.com/u/144196895?v=4" height=150 width=150> <br/> @NAKDO](https://github.com/NAKDO) | [<img src="https://avatars.githubusercontent.com/u/91466601?v=4" height=150 width=150> <br/> @KMJ200](https://github.com/KMJ200) |


</div>

<br>

## 3. 개발 환경

<table>
    <thead>
        <tr>
            <th>분류</th>
            <th>기술 스택</th>
        </tr>
    </thead>
    <tbody>
        <tr>
             <td>
                  <p>Environment</p>
                 </td>
                         <td>
                 <img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=Github&logoColor=ffffff">
                 <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=ffffff">
                 <img src="https://img.shields.io/badge/Vscode-007ACC?style=for-the-badge&logo=Visual Studio Code&logoColor=ffffff">
            </td>
            </tr>
        <tr>
            <td>
                  <p>Development</p>
            </td>
            <td>
                  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" >
                  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white" /> 
                  <img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=ReactQuery&logoColor=white" />
                <img src="https://img.shields.io/badge/tradingview-131622?style=for-the-badge&logo=tradingview&logoColor=white" /> 
                <img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" /> 
            </td>
        </tr>
        <tr>
            <td>
                <p>Communication</p>
            </td>
            <td>
                <img src="https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion">
                <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=ffffff">
                <img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=ffffff">
                <img src="https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=Jira&logoColor=ffffff">
            </td>
        </tr>
    </tbody>

</table>

<br>

## 4.개발 기술

### Next.js
- SSR을 활용해, 유저의 페이지 초기 진입 시, 지연을 최소화 해 유저의 초기 경험을 개선
- Next에서 제공하는 성능 최적화 및 개발 생산성을 도와주는 컴포넌트인 Link, Image, fonts를 적극 활용

### eslint, prettier
- 정해진 규칙에 따라 자동적으로 코드 스타일을 정리해 코드의 일관성을 유지
- 코드 품질 관리는 eslint에, 코드 포맷팅은 prettier에 일임해 사용
- air-bnb 컨벤션을 사용하며, 예외 규칙은 팀원들과 협의

### Tanstackquery
- 각 목록관련 기능 UI의 페이지네이션 구현에서 사용
- invalidate, mutation, refetch등 기능을 통한 상호작용 발생 시 다른 컴포넌트에서도 해당 변경이 즉각 반영
- 다양한 상황(캐싱, 데이터 새로고침)에 적절한 요청이 편리하게 가능

### tailwind
- 사전 정의된 유틸리티 클래스들로 다양한 스타일을 빠르고 일관성있게 적용
- css파일을 따로 작성없이 코드내에 작성해 빠른 스타일링 및 디자인 시스템을 일관되게 유지
- 커스텀 속성을 통해 지정된 스타일링 내에서 팀원들이 중복된 스타일 코드없이 사용

### typescript
- 컴파일 시점에 코드 내 타입 오류 알려줌으로써 런타임 오류를 미리 방지 가능
- 타입 정의가 명확하기 때문에, 리팩토링 시 오류를 줄이고 코드를 체계적으로 변경 가능
- 타입 정의 덕분에 함수나 컴포넌트의 입력/출력을 명확하게 명시가능
- 팀원들이 코드를 더 쉽게 이해할 수 있고, 예상치 못한 사용을 방지 가능

<br>
  
## 5.브랜치 전략
- Git-flow 전략을 기반으로 main, develop 브랜치와 feature 보조 브랜치를 운용했습니다.
- main, develop, Feat 브랜치로 나누어 개발을 하였습니다.
-  새로운 기능을 분류하는 **feature** 브랜치
-  새로운 기능이 합쳐져 테스트와 QA가 이루어지는 **develop** 브랜치
-  검증된 코드들이 합쳐지는 **main** 브랜치로 분류
 
<br>


## 6. 프로젝트 구조

```
flex-frontend/
│── public/
│   ├── images/      # 정적 이미지 파일
│   ├── svgs/        # SVG 파일 저장 폴더
│
│── src/app/
│   ├── _types/      # TypeScript 인터페이스 및 타입 정의
│   ├── (route)/     # Next.js의 라우트 핸들링 파일
│   ├── api/         # API 요청 관련 함수
│   ├── components/  # 재사용 가능한 UI 컴포넌트 모음
│   │   ├── auth/        # 로그인, 회원가입 관련 컴포넌트
│   │   ├── blog/        # 블로그 관련 컴포넌트
│   │   ├── common/      # 여러 페이지에서 공통으로 사용되는 컴포넌트 (버튼, 모달, 헤더, 드롭다운, 아이콘)
│   │   ├── main/        # 메인 페이지 관련 컴포넌트
│   │   ├── mypage/      # 마이페이지 관련 컴포넌트
│   │   ├── news/        # 뉴스 관련 컴포넌트
│   │   ├── prediction/  # 주가 예측 관련 컴포넌트
│   │   ├── simulation/  # 모의투자 관련 컴포넌트
│   │   ├── userpage/    # 다른 사용자 페이지 관련 컴포넌트
│   │
│   ├── constants/   # 프로젝트에서 사용하는 상수 값
│   ├── data/        # 더미 데이터 저장 파일
│   ├── hooks/       # 커스텀 React Hook (무한 스크롤, 쿠키 핸들링, 모달 상태 관리)
│   ├── service/     # 공통 API 서비스 함수
│   ├── static/fonts/# 폰트 파일 저장 폴더
│   ├── store/       # 상태 관리 (zustand)
│   ├── styles/      # 전역 스타일, CSS 파일
│   ├── utils/       # 유틸리티 함수 (날짜 변환, 문자열 처리, 차트 데이터 요청)
|
```

<br>

## 7. 페이지별 기능

### [메인화면]
- 서비스 초기 접속화면
<table>
  <tr>
    <td align="center"><b>메인 화면</b></td>
  </tr>
  <tr>
    <td><img width="840" alt="image" src="https://github.com/user-attachments/assets/1f67c9ef-1f53-47fa-a5bf-a68200aa37d2" />
</td>
  </tr>
</table>

<br>

### [블로그]
- 블로그 조회 및 작성
<table>
  <tr>
    <td align="center"><b>블로그 메인화면</b></td>
  </tr>
  <tr>
    <td><img width="840" alt="image" src="https://github.com/user-attachments/assets/f159bdea-8980-4aee-9b45-72f87a608537" /></td>
  </tr>
  <tr>
    <td align="center"><b>글 작성 화면</b></td>
  </tr>
  <tr>
    <td><img width="840" alt="image" src="https://github.com/user-attachments/assets/ff65019a-50a1-421d-9d37-89ea8e5f0834" /></td>
  </tr>
</table>

<br>

### [모의투자]
- 종목 검색, 차트 조회, 종목 정보, 모의투자(매수/매도), 관심종목, 보유종목, 백테스팅, 거래내역 조회 가능, 재테크 분석
<table>
  <tr>
    <td align="center"><b>검색 전 화면</b></td>
  </tr>
  <tr>
    <td><img width="840" alt="image" src="https://github.com/user-attachments/assets/0e115cf3-ad5a-443f-89f7-cbaa055dbfc0"/></td>
  </tr>
   <tr>
    <td align="center"><b>검색 후 화면</b></td>
  </tr>
  <tr>
    <td><img width="840" alt="image" src="https://github.com/user-attachments/assets/18f8ea4b-1d32-4282-8b81-e27dfc1f10f0" /></td>
  </tr>
   <tr>
    <td align="center"><b>재테크 분석</b></td>
  </tr>
  <tr>
    <td><img width="840" alt="image" src="https://github.com/user-attachments/assets/c27034d7-043d-429d-a611-c65715558f08" /></td>
  </tr>
</table>

<br>


### [주가예측]
- 종목 검색, 차트 조회, 주가 예측 및 목표가 알림 설정
<table>
  <tr>
    <td align="center"><b>검색 전 화면</b></td>
  </tr>
  <tr>
    <td><img width="840" alt="image" src="https://github.com/user-attachments/assets/02536b71-f4c5-46ef-82e5-756ef549b8bf" /></td>
  </tr>
   <tr>
    <td align="center"><b>검색 후 화면</b></td>
  </tr>
  <tr>
    <td><img width="840" alt="image" src="https://github.com/user-attachments/assets/66e4b24e-d847-415f-8715-31ea44e4331a" />
</td>
  </tr>
</table>

<br>

### [AI 뉴스요약]
<table>
  <tr>
    <td align="center"><b>뉴스요약 화면</b></td>
  </tr>
  <tr>
    <td><img width="840" alt="image" src="https://github.com/user-attachments/assets/f278e39a-894a-4aea-bbbb-3edec409d148" /></td>
  </tr>
</table>

<br>



## 🚀 핵심 기능 및 FE 기술적 도전

### 1) Next.js의 api route를 활용한 mock api 방식 구현
- mock api를 통해 실제 api도입 시 요청 로직만 바꾸면 되는 간편함 미리 타입지정을 통한 이후 신속한 개발 가능
- 기존에는 생각 못했던 예외처리 혹은 로직관련 이슈를 미리 예방, 해결 가능

### 2) 이미지 최적화
- 기본 img 태그 대신 **Next의 Image 컴포넌트**의 사용
- **lazy lodaing** : 로딩 시 필요한 이미지만 가져와 초기로딩 속도를 개선시킴
- 이미지 사이즈 최적화 + 포맷기능 : 이미지 형식을** avif 또는 webp로 변환**해 파일크기를 감소시킴
- **fill 속성 활용 : fill width, height를 각 항목별 크기를 지정해 사이즈를 재계산하지 않도록 함**
- 로컬폰트, 웹폰트 직접사용해서 next/font를 사용
- SSR 환경에서 폰트를 자동 최적화 해 초기 로딩속도를 개선

### 3) 차트 렌더링 및 데이터 페치 최적화
- 기본적으로 분,일,주,월,,년 별로 다른 방식의 data fetching 방식을 사용했고
- 초기 : 기간 별  최소 차트를 보여주는데 필요한 데이터 + 여유를 위한 양의 데이터를 요청
    1. 분봉의 경우 1, 5, 15, 60분 모두 같은 데이터를 공유해 분봉끼리는 전환해도 추가 요청 및 지연없이 바로바로 데이터만 기간에 따라 변하도록 함
    2. 일주월년의 경우 차트 스크롤에 따른 추가 요청이 필요한 일,주 봉의 경우에 스크롤에 따라 추가 요청하도록 함

### 4) 타겟 유저를 고려한 UI/UX
- 초보자를 위한 툴팁, 도움말 제공
- 직관적인 색상을 통한 사용자로 하여금 UI 요소별 기능 예측가능하게 설계
- 야간 사용자를위한 다크모드 제공
- 서비스 이용중 문제 발생 시 상태메세지 제공
- 커스텀 에러 핸들링을 통한 사용자 경험 개선


## 트러블 슈팅 및 개발 기록
[보러가기](https://north-spade-8fa.notion.site/Flex-1b504df233a58072928ec0193369f02a)
