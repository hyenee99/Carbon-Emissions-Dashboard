## 🌍Emission Tracker
당신의 회사 탄소 배출량을 확인하고, 다른 기업들과 간편하게 비교해보세요.

<br />

### 🪄 실행 방법

#### pnpm 설치 (없는 경우)
```
npm install -g pnpm
```
#### 의존성 설치
```
pnpm install 
```
#### 개발 서버 실행
```
pnpm run dev
```

### ✅ 기능 소개

#### 메인 페이지 (Main)
<img width="1916" height="932" alt="메인 화면" src="https://github.com/user-attachments/assets/9eee2191-48e5-434f-8170-8d9adbe4b6d6" />

- 메인 페이지에서 입력한 ID로 회사가 저장되어, 이를 기준으로 다른 회사와 탄소 배출량 및 탄소세를 비교할 수 있습니다.
- 현재는 임시 데이터로 c1~c6 까지의 회사만 등록되어 있어, 이외의 ID를 입력하면 오류 메시지가 표시됩니다.
<br />

#### 대시보드 (Dashboard)
<img width="1917" height="897" alt="대시보드" src="https://github.com/user-attachments/assets/4cbb4b90-8ba1-4ea5-825f-e68f0eab9baa" />

- 기업의 주요 탄소 배출 데이터와 비용 정보를 그래프와 표로 한 눈에 확인할 수 있는 페이지입니다.
- 그래프의 점을 클릭하면 해당 월 게시글을 옆에서 확인 가능합니다.
<br />

#### 기업 탄소 배출량 조회 페이지 (Emissions Overview)
<img width="1917" height="896" alt="오버뷰" src="https://github.com/user-attachments/assets/b6bef256-c8ea-4879-b1d1-e3e75121bed8" />

- 여러 회사의 탄소 배출량을 한 눈에 살펴보고, 관심 있는 기업의 세부 정보를 확인할 수 있는 페이지입니다.
- 회사명을 검색하거나 목록에서 클릭하면 해당 회사의 대시보드로 이동해 상세 정보를 확인할 수 있습니다.
<br />

#### 기업 탄소 배출 순위 조회 및 비교 페이지 (Reports)
<img width="1916" height="900" alt="리포트" src="https://github.com/user-attachments/assets/30021c4b-7b8b-46fb-9789-aa15bdd3e886" />

- 각 기업의 탄소 배출량 순위, 그리고 우리 회사와 타사 성과를 비교해 볼 수 있는 페이지입니다.
- 랭크에서 클릭한 회사를 기준으로 우리 회사와 탄소 배출량 및 탄소세를 비교합니다. 우리 회사가 더 많은 탄소를 배출했을 경우 수치를 빨간색으로, 그렇지 않을 경우 초록색으로 표시합니다.
<br />

### 🔨 보완 필요점
- 반응형 레이아웃 적용
- Emissions Overview 페이지에서 국가별, 기업별 선택 조회 기능 추가 및 사전 순, 배출량 순 정렬 기능 개선
- 대시보드 그래프에서 연도별 데이터 조회 및 비교 기능 추가
<br />

### 🛠️ 기술 스택
![Next.js](https://img.shields.io/badge/Nextjs-000000?style=for-the-badge&logo=next&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white) ![Zustand](https://img.shields.io/badge/Zustand-ff7e00?style=for-the-badge&logo=zustand&logoColor=white)

