/*
 * MDSPOTY 통합 상영관 데이터
 * - 명당: recommendation-data.js의 PNG 추천 구역
 * - 좌석 배치: CGV 예매 페이지에서 수집한 실제 좌석 좌표
 * - 상영관 정보: 화면 비율·화면 크기·추천도
 * seats는 원본 배열을 참조하므로 좌표 데이터가 중복 저장되지 않습니다.
 */
(function () {
  const halls = {
    yongsan: { name: "CGV 용산아이파크몰 IMAX", region: "서울", ratio: "1.43:1 · 1.90:1", screen: "31m × 22.4m", recommendation: { level: 5, label: "매우 높음" }, technology: "IMAX LASER" },
    apgujeong: { name: "CGV 압구정 IMAX", region: "서울", ratio: "1.90:1", screen: "15.5m × 8.5m", recommendation: { level: 3, label: "보통" }, technology: "IMAX LASER (XT)" },
    yeongdeungpo: { name: "CGV 영등포 IMAX", region: "서울", ratio: "1.90:1", screen: "약 18m × 9.7m", recommendation: { level: 4, label: "높음" }, technology: "IMAX LASER (CoLa)" },
    wangsimni: { name: "CGV 왕십리 IMAX", region: "서울", ratio: "1.90:1", screen: "22m × 13.3m", recommendation: { level: 5, label: "매우 높음" }, technology: "IMAX LASER (CoLa)" },
    cheonho: { name: "CGV 천호 IMAX", region: "서울", ratio: "1.90:1 상영", screen: "24.7m × 18.7m", recommendation: { level: 5, label: "매우 높음" }, technology: "IMAX LASER (CoLa)" },
    gwanggyo: { name: "CGV 광교 IMAX", region: "경기 · 인천", ratio: "1.90:1", screen: "20m × 12m", recommendation: { level: 5, label: "매우 높음" }, technology: "IMAX LASER (CoLa)" },
    dongtan: { name: "CGV 동탄 IMAX", region: "경기 · 인천", ratio: "1.90:1", screen: "19m × 11m", recommendation: { level: 4, label: "높음" }, technology: "IMAX LASER (XT)" },
    sopung: { name: "CGV 소풍 IMAX", region: "경기 · 인천", ratio: "1.90:1", screen: "16.1m × 9m", recommendation: { level: 3, label: "보통" }, technology: "디지털 IMAX" },
    wirye: { name: "CGV 스타필드시티위례 IMAX", region: "경기 · 인천", ratio: "1.90:1", screen: "14.8m × 8m", recommendation: { level: 3, label: "보통" }, technology: "IMAX LASER (XT)" },
    uijeongbu: { name: "CGV 의정부 IMAX", region: "경기 · 인천", ratio: "1.90:1", screen: "16.09m × 8.86m", recommendation: { level: 3, label: "보통" }, technology: "IMAX LASER (XT)" },
    ilsan: { name: "CGV 일산 IMAX", region: "경기 · 인천", ratio: "1.90:1", screen: "21m × 11.5m", recommendation: { level: 4, label: "높음" }, technology: "IMAX LASER (CoLa)" },
    pyeongtaek: { name: "CGV 평택 IMAX", region: "경기 · 인천", ratio: "1.90:1", screen: "14.2m × 7.8m", recommendation: { level: 3, label: "보통" }, technology: "IMAX LASER (XT)" },
    incheon: { name: "CGV 인천 IMAX", region: "경기 · 인천", ratio: "1.90:1", screen: "17.2m × 9.2m", recommendation: { level: 4, label: "높음" }, technology: "IMAX LASER (XT)" },
    chuncheon: { name: "CGV 춘천 IMAX", region: "강원 · 충청", ratio: "1.90:1", screen: "16.8m × 9.4m", recommendation: { level: 3, label: "보통" }, technology: "디지털 IMAX" },
    daejeon: { name: "CGV 대전 IMAX", region: "강원 · 충청", ratio: "1.90:1", screen: "16m × 8.5m", recommendation: { level: 3, label: "보통" }, technology: "디지털 IMAX" },
    daejeonTerminal: { name: "CGV 대전터미널 IMAX", region: "강원 · 충청", ratio: "1.90:1", screen: "13.5m × 7.5m", recommendation: { level: 3, label: "보통" }, technology: "IMAX LASER (XT)" },
    cheon: { name: "CGV 천안터미널 IMAX", region: "강원 · 충청", ratio: "1.90:1", screen: "15.7m × 8.2m", recommendation: { level: 4, label: "높음" }, technology: "IMAX LASER (XT)" },
    cheonanPentaport: { name: "CGV 천안펜타포트 IMAX", region: "강원 · 충청", ratio: "1.90:1", screen: "13.5m × 7.5m", recommendation: { level: 3, label: "보통" }, technology: "IMAX LASER (XT)" },
    cheongju: { name: "CGV 청주(서문) IMAX", region: "강원 · 충청", ratio: "1.90:1", screen: "18.4m × 9.9m", recommendation: { level: 3, label: "보통" }, technology: "디지털 2K IMAX" },
    daegu: { name: "CGV 대구 IMAX", region: "대구 · 부산 · 울산 · 경상", ratio: "1.90:1", screen: "17.5m × 8.9m", recommendation: { level: 3, label: "보통" }, technology: "IMAX LASER (CoLa)" },
    seomyeon: { name: "CGV 서면 IMAX", region: "대구 · 부산 · 울산 · 경상", ratio: "1.90:1", screen: "19m × 11.2m", recommendation: { level: 4, label: "높음" }, technology: "디지털 IMAX" },
    centum: { name: "CGV 센텀시티 IMAX", region: "대구 · 부산 · 울산 · 경상", ratio: "1.90:1", screen: "30.2m × 15.7m", recommendation: { level: 5, label: "매우 높음" }, technology: "IMAX LASER (CoLa)" },
    ulsan: { name: "CGV 울산삼산 IMAX", region: "대구 · 부산 · 울산 · 경상", ratio: "1.90:1", screen: "24.4m × 14.1m", recommendation: { level: 5, label: "매우 높음" }, technology: "IMAX LASER (CoLa)" },
    changwon: { name: "CGV 창원더시티 IMAX", region: "대구 · 부산 · 울산 · 경상", ratio: "1.90:1", screen: "15.6m × 8.8m", recommendation: { level: 4, label: "높음" }, technology: "IMAX LASER (XT)" },
    suncheon: { name: "CGV 순천신대 IMAX", region: "전라", ratio: "1.90:1", screen: "18.5m × 9.5m", recommendation: { level: 3, label: "보통" }, technology: "IMAX LASER (XT)" },
    jeonju: { name: "CGV 전주효자 IMAX", region: "전라", ratio: "1.90:1", screen: "24.4m × 14.1m", recommendation: { level: 5, label: "매우 높음" }, technology: "빌트인 IMAX" }
  };

  const customCanvas = { yongsan: { width: 1938, height: 684 }, centum: { width: 1862, height: 532 } };
  window.THEATER_DATABASE = Object.fromEntries(Object.entries(halls).map(([id, hall]) => {
    const official = window.OFFICIAL_SEAT_MAPS[id];
    const seats = official ? official.seats : SEATS[id];
    return [id, {
      id,
      ...hall,
      recommendations: window.RECOMMENDATION_ZONES[id],
      seatLayout: {
        source: official ? "CGV 공식 예매 페이지 좌석 좌표" : "기존 실제 좌석 배치 자료",
        width: official ? official.width : customCanvas[id].width,
        height: official ? official.height : customCanvas[id].height,
        doors: official ? official.doors : [],
        seatCount: seats.length,
        seats
      }
    }];
  }));
})();
