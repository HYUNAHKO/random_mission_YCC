const missionsByCategory = {
  감성: [
    "내 플리 공유하고 핸드폰 모아서 사진 찍기📷",
    "최근 찍은 사진 하나 공개하고 설명하기",
    "내 인생 영화나 책 소개하기",
    "최근에 힐링한 순간 나누기",
    "하늘 사진 찍고 잡담방에 투표 받기(누가 더 잘 찍었는지!)"
  ],
  웃김: [
    "서로의 이름으로 삼행시 짓기",
    "가장 최근에 겪었던 웃긴 일 공유하기",
    "밸런스 게임(ex. 변수 이름 평생 a, b, c만 쓰기 vs 주석 평생 못 쓰기) 잡담방에 투표 올리기",
    "나의 귀여운(?) 흑역사 짧게 이야기하기",
     "특이한 취미 잡담방에 공유하고 가장 특이한 취미 투표하기"
  ],
  도전: [
    "한 발로 서서 10초 버티기 인증하기",
    "갑자기 단체로 박수 맞춰보기 (한 번에 성공!)",
    "1분 안에 주변 사물로 탑 쌓기",
    "랜덤 단어 3개로 즉석에서 짧은 이야기 만들기"
  ],
  힐링: [
    "서로 돌아가며 칭찬 한 가지씩 해주기(억지로라도 하기)",
    "서로를 가장 잘 나타내는 이모지 고르고 이유 공유하기",
    "최근에 행복했던 순간을 공유하기",
    "신촌 맛집 또는 디저트집 추천하기",
    "최근에 본 예쁜 풍경 사진 공유하기"
  ],
  랜덤: [
    "빨잠 앞에서 단체 사진📷",
    "자신만의 특별한 TMI 하나씩 말하기",
    "손글씨로 자기 이름 써서 잡담방에 인증하기",
    "서로에게 잘 어울리는 연예인 한 명 공유하기",
    "다같이 손가락 하트 사진 인증"
  ]
};


function pickMission() {
  const category = document.getElementById("category").value;
  let selectedMissions = [];

  if (category === "all") {
    // 모든 카테고리의 미션을 합치기
    for (let key in missionsByCategory) {
      selectedMissions = selectedMissions.concat(missionsByCategory[key]);
    }
  } else {
    selectedMissions = missionsByCategory[category];
  }

  const index = Math.floor(Math.random() * selectedMissions.length);
  const resultDiv = document.getElementById("result");
  resultDiv.innerText = `🎯 미션: ${selectedMissions[index]}`;
  resultDiv.style.display = "block";
} 
