const missionsByCategory = {
  감성: [
    "오늘 하루를 한 문장으로 표현해보기",
    "나의 요즘 감정 색깔로 표현하기",
    "내가 좋아하는 계절과 그 이유 말하기"
  ],
  웃김: [
    "서로의 이름으로 삼행시 짓기",
    "전원 동시에 웃긴 포즈 하기",
    "말도 안 되는 자랑 하나 하기"
  ],
  도전: [
    "혼자서 10초 동안 무반응 영상 찍기",
    "초성으로만 자기소개 하기",
    "즉석에서 단체 박수 리듬 게임"
  ],
  힐링: [
    "서로 칭찬 릴레이 해보기",
    "편안한 자세로 1분 동안 멍 때리기",
    "요즘 나의 소확행 공유하기"
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
