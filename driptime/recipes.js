const recipes = [
  {
    "id": "standardV60",
    "name": "V60 기본 3-Pour",
    "brewer": "Hario V60",
    "grindNote": "중간보다 살짝 고운 분쇄",
    "coffeeGrams": 20,
    "waterGrams": 300,
    "waterTemperature": 93,
    "targetSeconds": 180,
    "steps": [
      {
        "name": "블루밍",
        "startSeconds": 0,
        "endSeconds": 30,
        "startWaterGrams": 0,
        "endWaterGrams": 40,
        "manualAdvance": false
      },
      {
        "name": "1차 붓기",
        "startSeconds": 30,
        "endSeconds": 60,
        "startWaterGrams": 40,
        "endWaterGrams": 150,
        "manualAdvance": false
      },
      {
        "name": "2차 붓기",
        "startSeconds": 60,
        "endSeconds": 90,
        "startWaterGrams": 150,
        "endWaterGrams": 300,
        "manualAdvance": false
      },
      {
        "name": "드립 완료 대기",
        "startSeconds": 90,
        "endSeconds": 180,
        "startWaterGrams": 300,
        "endWaterGrams": 300,
        "manualAdvance": false
      }
    ]
  },
  {
    "id": "hoffmannV60",
    "name": "James Hoffmann V60",
    "brewer": "Hario V60",
    "grindNote": "중간보다 고운 분쇄",
    "coffeeGrams": 30,
    "waterGrams": 500,
    "waterTemperature": 96,
    "targetSeconds": 210,
    "steps": [
      {
        "name": "블루밍",
        "startSeconds": 0,
        "endSeconds": 45,
        "startWaterGrams": 0,
        "endWaterGrams": 60,
        "manualAdvance": false
      },
      {
        "name": "메인 1차",
        "startSeconds": 45,
        "endSeconds": 75,
        "startWaterGrams": 60,
        "endWaterGrams": 300,
        "manualAdvance": false
      },
      {
        "name": "메인 2차",
        "startSeconds": 75,
        "endSeconds": 105,
        "startWaterGrams": 300,
        "endWaterGrams": 500,
        "manualAdvance": false
      },
      {
        "name": "스월 후 대기",
        "startSeconds": 105,
        "endSeconds": 210,
        "startWaterGrams": 500,
        "endWaterGrams": 500,
        "manualAdvance": false
      }
    ]
  },
  {
    "id": "kasuya46",
    "name": "Tetsu Kasuya 4:6",
    "brewer": "Hario V60",
    "grindNote": "중간보다 굵은 분쇄",
    "coffeeGrams": 20,
    "waterGrams": 300,
    "waterTemperature": 92,
    "targetSeconds": 210,
    "steps": [
      {
        "name": "1차",
        "startSeconds": 0,
        "endSeconds": 45,
        "startWaterGrams": 0,
        "endWaterGrams": 60,
        "manualAdvance": false
      },
      {
        "name": "2차",
        "startSeconds": 45,
        "endSeconds": 90,
        "startWaterGrams": 60,
        "endWaterGrams": 120,
        "manualAdvance": false
      },
      {
        "name": "3차",
        "startSeconds": 90,
        "endSeconds": 130,
        "startWaterGrams": 120,
        "endWaterGrams": 180,
        "manualAdvance": false
      },
      {
        "name": "4차",
        "startSeconds": 130,
        "endSeconds": 170,
        "startWaterGrams": 180,
        "endWaterGrams": 240,
        "manualAdvance": false
      },
      {
        "name": "5차",
        "startSeconds": 170,
        "endSeconds": 210,
        "startWaterGrams": 240,
        "endWaterGrams": 300,
        "manualAdvance": false
      }
    ]
  },
  {
    "id": "kasuya46Bright",
    "name": "Tetsu Kasuya 4:6 산미형",
    "brewer": "Hario V60",
    "grindNote": "프렌치프레스 수준의 굵은 분쇄 · 전반부를 70g/50g으로 나눠 산미 강조",
    "coffeeGrams": 20,
    "waterGrams": 300,
    "waterTemperature": 92,
    "targetSeconds": 210,
    "steps": [
      {
        "name": "맛 조절 1차",
        "startSeconds": 0,
        "endSeconds": 45,
        "startWaterGrams": 0,
        "endWaterGrams": 70,
        "manualAdvance": false
      },
      {
        "name": "맛 조절 2차",
        "startSeconds": 45,
        "endSeconds": 90,
        "startWaterGrams": 70,
        "endWaterGrams": 120,
        "manualAdvance": false
      },
      {
        "name": "농도 조절 1차",
        "startSeconds": 90,
        "endSeconds": 130,
        "startWaterGrams": 120,
        "endWaterGrams": 180,
        "manualAdvance": false
      },
      {
        "name": "농도 조절 2차",
        "startSeconds": 130,
        "endSeconds": 170,
        "startWaterGrams": 180,
        "endWaterGrams": 240,
        "manualAdvance": false
      },
      {
        "name": "농도 조절 3차",
        "startSeconds": 170,
        "endSeconds": 210,
        "startWaterGrams": 240,
        "endWaterGrams": 300,
        "manualAdvance": false
      }
    ]
  },
  {
    "id": "kasuya46Sweet",
    "name": "Tetsu Kasuya 4:6 단맛형",
    "brewer": "Hario V60",
    "grindNote": "프렌치프레스 수준의 굵은 분쇄 · 전반부를 50g/70g으로 나눠 단맛과 바디 강조",
    "coffeeGrams": 20,
    "waterGrams": 300,
    "waterTemperature": 92,
    "targetSeconds": 210,
    "steps": [
      {
        "name": "맛 조절 1차",
        "startSeconds": 0,
        "endSeconds": 45,
        "startWaterGrams": 0,
        "endWaterGrams": 50,
        "manualAdvance": false
      },
      {
        "name": "맛 조절 2차",
        "startSeconds": 45,
        "endSeconds": 90,
        "startWaterGrams": 50,
        "endWaterGrams": 120,
        "manualAdvance": false
      },
      {
        "name": "농도 조절 1차",
        "startSeconds": 90,
        "endSeconds": 130,
        "startWaterGrams": 120,
        "endWaterGrams": 180,
        "manualAdvance": false
      },
      {
        "name": "농도 조절 2차",
        "startSeconds": 130,
        "endSeconds": 170,
        "startWaterGrams": 180,
        "endWaterGrams": 240,
        "manualAdvance": false
      },
      {
        "name": "농도 조절 3차",
        "startSeconds": 170,
        "endSeconds": 210,
        "startWaterGrams": 240,
        "endWaterGrams": 300,
        "manualAdvance": false
      }
    ]
  },
  {
    "id": "coffeeCollectiveWave",
    "name": "Coffee Collective 원푸어",
    "brewer": "Kalita Wave",
    "grindNote": "중간 분쇄 · 필터 린싱 후 32g 뜸, 나선형으로 한 번에 이어 붓기",
    "coffeeGrams": 16,
    "waterGrams": 250,
    "waterTemperature": 94,
    "targetSeconds": 105,
    "steps": [
      {
        "name": "사전적심",
        "startSeconds": 0,
        "endSeconds": 30,
        "startWaterGrams": 0,
        "endWaterGrams": 32,
        "manualAdvance": false
      },
      {
        "name": "나선형 원푸어",
        "startSeconds": 30,
        "endSeconds": 105,
        "startWaterGrams": 32,
        "endWaterGrams": 250,
        "manualAdvance": false
      }
    ]
  },
  {
    "id": "waterboy484",
    "name": "정인성 484",
    "brewer": "범용 · 포켓형 권장",
    "grindNote": "고온수 권장 · 추출수 160g의 Drawdown이 끝나면 물 140g을 Bypass",
    "coffeeGrams": 20,
    "waterGrams": 300,
    "waterTemperature": 96,
    "targetSeconds": 146,
    "steps": [
      {
        "name": "사전적심 40g",
        "startSeconds": 0,
        "endSeconds": 10,
        "startWaterGrams": 0,
        "endWaterGrams": 40,
        "manualAdvance": false
      },
      {
        "name": "뜸들이기",
        "startSeconds": 10,
        "endSeconds": 60,
        "startWaterGrams": 40,
        "endWaterGrams": 40,
        "manualAdvance": false
      },
      {
        "name": "2차 +80g",
        "startSeconds": 60,
        "endSeconds": 75,
        "startWaterGrams": 40,
        "endWaterGrams": 120,
        "manualAdvance": false
      },
      {
        "name": "다음 푸어 대기",
        "startSeconds": 75,
        "endSeconds": 120,
        "startWaterGrams": 120,
        "endWaterGrams": 120,
        "manualAdvance": false
      },
      {
        "name": "3차 +40g",
        "startSeconds": 120,
        "endSeconds": 130,
        "startWaterGrams": 120,
        "endWaterGrams": 160,
        "manualAdvance": false
      },
      {
        "name": "Drawdown 확인",
        "startSeconds": 130,
        "endSeconds": 131,
        "startWaterGrams": 160,
        "endWaterGrams": 160,
        "manualAdvance": true
      },
      {
        "name": "Bypass +140g",
        "startSeconds": 131,
        "endSeconds": 146,
        "startWaterGrams": 160,
        "endWaterGrams": 300,
        "manualAdvance": false
      }
    ]
  },
  {
    "id": "waterboy4666",
    "name": "정인성 4666",
    "brewer": "범용 · 포켓형 권장",
    "grindNote": "고온수 권장 · 추출수 220g의 Drawdown이 끝나면 물 80g을 Bypass",
    "coffeeGrams": 20,
    "waterGrams": 300,
    "waterTemperature": 96,
    "targetSeconds": 116,
    "steps": [
      {
        "name": "사전적심 40g",
        "startSeconds": 0,
        "endSeconds": 10,
        "startWaterGrams": 0,
        "endWaterGrams": 40,
        "manualAdvance": false
      },
      {
        "name": "뜸들이기",
        "startSeconds": 10,
        "endSeconds": 30,
        "startWaterGrams": 40,
        "endWaterGrams": 40,
        "manualAdvance": false
      },
      {
        "name": "2차 +60g",
        "startSeconds": 30,
        "endSeconds": 40,
        "startWaterGrams": 40,
        "endWaterGrams": 100,
        "manualAdvance": false
      },
      {
        "name": "다음 푸어 대기",
        "startSeconds": 40,
        "endSeconds": 60,
        "startWaterGrams": 100,
        "endWaterGrams": 100,
        "manualAdvance": false
      },
      {
        "name": "3차 +60g",
        "startSeconds": 60,
        "endSeconds": 70,
        "startWaterGrams": 100,
        "endWaterGrams": 160,
        "manualAdvance": false
      },
      {
        "name": "다음 푸어 대기",
        "startSeconds": 70,
        "endSeconds": 90,
        "startWaterGrams": 160,
        "endWaterGrams": 160,
        "manualAdvance": false
      },
      {
        "name": "4차 +60g",
        "startSeconds": 90,
        "endSeconds": 100,
        "startWaterGrams": 160,
        "endWaterGrams": 220,
        "manualAdvance": false
      },
      {
        "name": "Drawdown 확인",
        "startSeconds": 100,
        "endSeconds": 101,
        "startWaterGrams": 220,
        "endWaterGrams": 220,
        "manualAdvance": true
      },
      {
        "name": "Bypass +80g",
        "startSeconds": 101,
        "endSeconds": 116,
        "startWaterGrams": 220,
        "endWaterGrams": 300,
        "manualAdvance": false
      }
    ]
  }
];
const english = {
  "언어": "Language",
  "타이머": "Timer",
  "레시피": "Recipes",
  "레시피 추가": "Add Recipe",
  "레시피 수정": "Edit Recipe",
  "추가": "Add",
  "기록": "Log",
  "추출 기록": "Brew Logs",
  "데이터 저장소": "Storage",
  "다시 불러오기": "Reload",
  "확인": "OK",
  "오늘의 레시피": "Today's Recipe",
  "완료": "Complete",
  "준비": "Ready",
  "이전 단계": "Previous Step",
  "다음 단계": "Next Step",
  "첫 단계입니다": "First Step",
  "마지막 단계입니다": "Last Step",
  "물 붓기 없음": "No Pour",
  "직접 확인": "Manual",
  "Drawdown 완료 · 다음 단계": "Drawdown Complete · Next Step",
  "일시정지": "Pause",
  "시작": "Start",
  "초기화": "Reset",
  "레시피 상세": "Recipe Details",
  "기본 레시피": "Built-in Recipes",
  "나만의 레시피": "My Recipes",
  "저장된 레시피가 없습니다": "No Saved Recipes",
  "자주 쓰는 원두와 드리퍼 기준으로 레시피를 만들어두세요.": "",
  "수정": "Edit",
  "아직 기록이 없습니다": "No Brew Logs",
  "추출 후 맛 평가와 메모를 남기면 여기에 쌓입니다.": "",
  "기본": "Basics",
  "레시피 이름": "Recipe Name",
  "드리퍼": "Dripper",
  "분쇄도 메모": "Grind Notes",
  "3-Pour 기준": "3-Pour",
  "저장하지 못했습니다": "Unable to Save",
  "취소": "Cancel",
  "저장": "Save",
  "추출": "Brew",
  "원두 이름": "Coffee Name",
  "평가": "Rating",
  "메모": "Notes",
  "총점": "Overall",
  "산미": "Acidity",
  "단맛": "Sweetness",
  "쓴맛": "Bitterness",
  "바디": "Body",
  "원두 %dg": "Coffee %dg",
  "물 %dg": "Total Water %dg",
  "물 온도 %d°C": "Water Temperature %d°C",
  "블루밍 %dg": "Bloom %dg",
  "1차 목표 %dg": "First Pour Target %dg",
  "총 시간 %@": "Total Time %@",
  "실제 시간 %@": "Actual Time %@",
  "현재 물 양 %dg": "Current Pour %dg",
  "%@ 이후 · 직접 확인": "After %@ · Manual",
  "누적 목표 %d / %dg": "Total Target %d / %dg",
  "전체 %@ · Drawdown 직접 확인 포함 · %@": "Total %@ · Manual Drawdown · %@",
  "전체 %@ / %@ · %@": "Total %@ / %@ · %@",
  "직접 확인 · 누적 %dg": "Manual · Total %dg",
  "%@ · 누적 %dg": "%@ · Total %dg",
  "%@ · %dg 원두 · %dg 물 · %@": "%@ · %dg Coffee · %dg Water · %@",
  "Drawdown 직접 확인": "Manual Drawdown",
  "V60 기본 3-Pour": "V60 Basic 3-Pour",
  "Tetsu Kasuya 4:6 산미형": "Tetsu Kasuya 4:6 Bright",
  "Tetsu Kasuya 4:6 단맛형": "Tetsu Kasuya 4:6 Sweet",
  "Coffee Collective 원푸어": "Coffee Collective Single Pour",
  "정인성 484": "Waterboy 484",
  "정인성 4666": "Waterboy 4666",
  "범용 · 포켓형 권장": "Universal · Pocket Brewer Recommended",
  "블루밍": "Bloom",
  "1차 붓기": "First Pour",
  "2차 붓기": "Second Pour",
  "드립 완료 대기": "Drawdown",
  "메인 1차": "Main Pour 1",
  "메인 2차": "Main Pour 2",
  "스월 후 대기": "Swirl & Drawdown",
  "1차": "Pour 1",
  "2차": "Pour 2",
  "3차": "Pour 3",
  "4차": "Pour 4",
  "5차": "Pour 5",
  "맛 조절 1차": "Flavor Pour 1",
  "맛 조절 2차": "Flavor Pour 2",
  "농도 조절 1차": "Strength Pour 1",
  "농도 조절 2차": "Strength Pour 2",
  "농도 조절 3차": "Strength Pour 3",
  "사전적심": "Pre-infusion",
  "나선형 원푸어": "Spiral Single Pour",
  "사전적심 40g": "Pre-infusion 40g",
  "뜸들이기": "Bloom Rest",
  "2차 +80g": "Pour 2 +80g",
  "3차 +40g": "Pour 3 +40g",
  "2차 +60g": "Pour 2 +60g",
  "3차 +60g": "Pour 3 +60g",
  "4차 +60g": "Pour 4 +60g",
  "다음 푸어 대기": "Wait for Next Pour",
  "Drawdown 확인": "Check Drawdown",
  "중간보다 살짝 고운 분쇄": "Medium-fine Grind",
  "중간보다 고운 분쇄": "Fine-medium Grind",
  "중간보다 굵은 분쇄": "Medium-coarse Grind",
  "프렌치프레스 수준의 굵은 분쇄 · 전반부를 70g/50g으로 나눠 산미 강조": "French Press Grind · First Two Pours: 70g / 50g for Acidity",
  "프렌치프레스 수준의 굵은 분쇄 · 전반부를 50g/70g으로 나눠 단맛과 바디 강조": "French Press Grind · First Two Pours: 50g / 70g for Sweetness & Body",
  "중간 분쇄 · 필터 린싱 후 32g 뜸, 나선형으로 한 번에 이어 붓기": "Medium Grind · Rinse Filter, Bloom with 32g, then One Continuous Spiral Pour",
  "고온수 권장 · 추출수 160g의 Drawdown이 끝나면 물 140g을 Bypass": "Hot Water · After 160g Drawdown, Bypass with 140g Water",
  "고온수 권장 · 추출수 220g의 Drawdown이 끝나면 물 80g을 Bypass": "Hot Water · After 220g Drawdown, Bypass with 80g Water",
  "저장된 데이터를 읽지 못했습니다. 원본 보호를 위해 해당 목록의 변경을 중단했습니다. 다시 불러오기를 시도해 주세요.": "Saved data could not be read. Changes are blocked to protect the original data. Try reloading.",
  "레시피의 물 양과 단계 시간을 확인해 주세요. 단계별 물 양은 순서대로 증가하고 마지막 목표와 일치해야 합니다.": "Check the recipe's water and timing. Step targets must increase in order and match the final target."
};
if (typeof module !== "undefined") module.exports = recipes;
