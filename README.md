# DAILY NEWS (뉴스앱)

## Contributor

@pauljeonn (전바울)

## Tech Stack

- Frontend: Next.js
- Deployment: Vercel

## API

- API URL: https://newsapi.org/v2/top-headlines?country=kr&apiKey={API_KEY}
- API Documentation: https://newsapi.org/docs, https://newsapi.org/s/south-korea-news-api

## 소개

- News API라는 사이트에서 무료로 매일 업데이트되는 최신 뉴스 API로 구현한 데일리 뉴스 웹사이트 입니다.
- 다양한 언론사의 최신 한국 뉴스를 분야별로 제공하도록 구현하였고 해외 기사도 영문으로 제공합니다.
- Next.js의 장점들을 경험해볼 수 있는 프로젝트 였습니다.
- SSR 기능인 getServerSideProps 함수를 사용하여 서버에서 데이터를 불러와 미리 렌더링하는 것이 인상 깊었습니다.
- 또한 동적 라우팅(Dynamic Routing)을 통해 동적으로 페이지 경로를 처리하는 방식이 일일히 수동으로 설정하는 것보다 효율적이라고 생각하였습니다. 물론 페이지 수가 많지 않으면 정적 라우팅이 더 좋을수도있다고 생각합니다.
- 주로 사용하는 Sass나 styled-components를 사용하지 않고 Next.js에서 디폴트로 제공하는 CSS를 모듈 기능을 사용해 모든 컴포넌트 스타일링을 진행해보았습니다. 구조가 겹치는 컴포넌트에서 동일한 CSS 모듈을 import해서 사용해보니 편리하였습니다.
