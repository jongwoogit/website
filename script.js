const pages = {
  home: `
    <section class="about-wrapper">
      <div class="text-section">
        <h1><strong>Jongwoo</strong> Yun</h1>
        <p> 안녕하세요. 강원대학교에서 경영학과 데이터 사이언스를 전공하고 있는 윤종우입니다.</p>
        <p>비즈니스 분석가가 되고 싶어 3학년 2학기 때부터 데이터 사이언스를 전공하기 시작하였고, 현재는 파이썬과 SQL을 중심으로 데이터 분석에 대해서 집중적으로 공부하고 있습니다.</p>
        <p>목표는 데이터 분석을 기반으로 서비스를 기획, 개발하여 더 나은 서비스를 만드는 것에 기여하는 비즈니스 분석가가 되는 것입니다.</p>
        <p>📧 <a href="mailto:example@example.com">whddn316@gmail.com</a></p>
      </div>
      <div class="image-section">
        <img src="사진.jpg" alt="프로필 사진" class="profile-circle" />
      </div>
    </section>
  `,
 about: `
  <section>
    <h1>About Me</h1>
    <p>저에 대해서 조금 더 자세히 소개해보겠습니다.</p>

    <h2>성격과 MBTI</h2>
    <p>저의 MBTI는 ISTP입니다.</p>
    <p>I: 대화에 적극적이고 주도하지는 않지만 I임에도 사람들과 대화하는 것을 좋아합니다.</p>
    <p>S: 저는 매우 현실적인 사람입니다. 졸업을 앞 둔 지금 가장 큰 현실인 취업과 진로에 대한 많은 고민과 걱정을 가지고 있습니다.</p>
    <p>T: 점점 이성적인 사람으로 변해가는 것 같습니다. 그렇지만 주변 사람들은 이성적이지 않고, 감성적으로 대하려고 노력하고 있습니다.</p>
    <p>P: 저는 즉흥적인 것을 좋아합니다. 평소에 여행을 자주 다니는데 거의 계획을 짜지않고, 자유로이 여행하는 것을 좋아합니다.</p>


    <h2>관심 분야</h2>
    <ul>
      <li>비즈니스 데이터 분석</li>
      <li>DX컨설팅</li>
      <li>SQL 기반의 전처리</li>
      <li>Python 기반의 머신러닝 알고리즘</li>
    </ul>

    <h2>취미 & 일상</h2>
    <p>일상 사진 찍기 | 런닝 및 헬스 | 누워있기</p>

    <h2>기술 스택</h2>
    <p>Python, SQL, R, Tableau</p>
  </section>
  `,
  plan: `
  <section>
    <h1>My Plan</h1>
    <p>저는 데이터 분석가로서 성장하기 위해 다음과 같은 계획을 세우고 있습니다.</p>

    <h2>최종 목표</h2>
    <p>데이터 기반으로 비즈니스 문제를 해결할 수 있는 분석 전문가가 되는 것 <br>
    혹은 데이터 분석을 기반으로 기업의 디지털 전환을 컨설팅하는 DX컨설턴트가 되는 것</p>

    <h2>단기 계획 (2025 하반기)</h2>
    <ul>
      <li>SQLD 자격증 취득</li>
      <li>Python + Pandas로 데이터 분석 실습</li>
      <li>공공데이터 활용 공모전 참여</li>
      <li>SK AI Dream Camp 수료</li>
      <li>LG AImers 프로그램 수료</li>
    </ul>

    <h2>장기 계획 (2026 졸업 이후)</h2>
    <ul>
      <li>BA인턴</li>
      <li>빅데이터 대학원 진학</li>
      <li>데이터 분석가 취업</li>
    </ul>

    <h2>학습 계획</h2>
    <ul>
      <li>Python 중급 문법 & 함수형 프로그래밍</li>
      <li>모델 구축을 위한 머신러닝 알고리즘 학습</li>
      <li>Tableau를 활용한 시각화 프로젝트</li>
      <li>통계 기반 데이터 해석 능력 강화</li>
    </ul>

    <h2>프로젝트</h2>
    <p>• <strong>서울시 교육 공공데이터 분석:</strong> 수요 예측을 통한 특수학급 설치 입지 분석</p>
    <p>• <strong>나만의 러닝 타임 트래커:</strong> 웹 기반 러닝 일지 자동 기록 및 시각화</p>
  </section>
`,
};

const content = document.getElementById("content");

function loadPage(page) {
  content.innerHTML = pages[page];
}

document.querySelectorAll("a[data-page]").forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const page = event.target.dataset.page;
    loadPage(page);
  });
});

// 기본 페이지 로드
loadPage("home");
