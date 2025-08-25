# 웹 개발자 포트폴리오

TypeScript와 React를 사용한 현대적인 웹 개발자 포트폴리오 사이트입니다.

## 🚀 기술 스택

- **Frontend**: React, Next.js, TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel, Netlify (선택사항)

## ✨ 주요 특징

- 📱 완전 반응형 디자인
- 🎨 모던하고 깔끔한 UI/UX
- ⚡ 빠른 성능과 최적화
- 🌟 부드러운 애니메이션 효과
- 🔍 SEO 최적화
- 📧 연락처 폼 기능

## 📦 설치 및 실행

### 1. 저장소 클론

```bash
git clone https://github.com/your-username/resume-website.git
cd resume-website
```

### 2. 의존성 설치

```bash
npm install
# 또는
yarn install
```

### 3. 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 4. 빌드 및 배포

```bash
npm run build
npm run start
# 또는
yarn build
yarn start
```

## 🛠️ 커스터마이징

### 1. 개인 정보 수정

각 컴포넌트에서 개인 정보를 수정하세요:

- `components/Hero.tsx`: 메인 소개 문구
- `components/About.tsx`: 자기소개 내용
- `components/Skills.tsx`: 기술 스택 정보
- `components/Experience.tsx`: 경력 사항
- `components/Projects.tsx`: 프로젝트 정보
- `components/Education.tsx`: 학력 및 자격증
- `components/Contact.tsx`: 연락처 정보

### 2. 색상 테마 변경

`tailwind.config.js`에서 primary 색상을 변경할 수 있습니다:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // 원하는 색상으로 변경
        500: '#your-color',
        600: '#your-darker-color',
        // ...
      }
    }
  }
}
```

### 3. 폰트 변경

`app/globals.css`에서 Google Fonts를 변경하거나 추가할 수 있습니다.

## 📂 프로젝트 구조

```
resume-website/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Education.tsx
│   └── Contact.tsx
├── public/
│   └── (이미지 파일들)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎯 섹션별 기능

### 1. Navigation (네비게이션)
- 스크롤에 따른 배경 변화
- 모바일 반응형 햄버거 메뉴
- 부드러운 스크롤 이동

### 2. Hero (메인 섹션)
- 타이핑 애니메이션 효과
- 소셜 미디어 링크
- 이력서 다운로드 버튼

### 3. About (소개)
- 개인 소개 및 전문 분야
- 시각적 요소와 애니메이션

### 4. Skills (기술 스택)
- 진행률 바 애니메이션
- 카테고리별 기술 분류
- 기술 키워드 태그

### 5. Experience (경력)
- 타임라인 형태의 경력 표시
- 회사별 상세 업무 내용
- 사용 기술 스택 표시

### 6. Projects (프로젝트)
- 프로젝트 카드 레이아웃
- 라이브 데모 및 GitHub 링크
- 기술 스택 및 주요 기능 표시

### 7. Education (학력)
- 학력, 자격증, 교육 과정 표시
- 아이콘별 분류 시스템
- 학습 목표 섹션

### 8. Contact (연락처)
- 연락처 폼 (실제 기능 구현 필요)
- 소셜 미디어 링크
- 연락처 정보 표시

## 🚀 배포

### Vercel 배포

1. [Vercel](https://vercel.com)에 계정 생성
2. GitHub 저장소 연결
3. 자동 배포 설정

### Netlify 배포

1. [Netlify](https://netlify.com)에 계정 생성
2. GitHub 저장소 연결
3. 빌드 명령어: `npm run build`
4. 출력 디렉토리: `out`

## 📝 할 일 목록

- [ ] 연락처 폼 백엔드 연동
- [ ] 다크 모드 지원
- [ ] 다국어 지원
- [ ] 프로젝트 이미지 추가
- [ ] 성능 최적화
- [ ] 접근성 개선

## 🤝 기여

1. 이 저장소를 Fork하세요
2. 새로운 기능 브랜치를 생성하세요 (`git checkout -b feature/new-feature`)
3. 변경사항을 커밋하세요 (`git commit -am 'Add new feature'`)
4. 브랜치에 Push하세요 (`git push origin feature/new-feature`)
5. Pull Request를 생성하세요

## 📄 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 📞 문의

- 이메일: your-email@example.com
- 포트폴리오: https://your-portfolio.com
- GitHub: https://github.com/your-username

---

⭐ 이 프로젝트가 도움이 되었다면 별표를 눌러주세요! 