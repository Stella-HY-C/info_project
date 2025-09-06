const Career = () => {
  return (
    <section id="career">
      <h2>커리어</h2>
      <div className="career-item">
        <img src="companyA.jpg" alt="회사 A 이미지" />
        <h3>회사 A (2022 ~ 현재)</h3>
        <p>프론트엔드 개발자로서 메인 서비스 UI 개발 및 성능 최적화 담당.</p>
      </div>
      <div className="career-item">
        <img src="companyB.jpg" alt="회사 B 이미지" />
        <h3>회사 B (2020 ~ 2022)</h3>
        <p>사내 관리 시스템 리뉴얼, 반응형 웹 구축 경험.</p>
      </div>
    </section>
  );
};

export default Career;
