/*
 * 좌석참고자료 PNG에서 취합한 IMAX 명당 추천 구역입니다.
 * 표기: "F7-18" = F열 7번부터 18번까지(실제 배치에 존재하는 좌석만 적용).
 * source: "png"은 좌석참고자료 이미지, "existing"은 기존 프로젝트 데이터입니다.
 */
window.RECOMMENDATION_ZONES = {
  yongsan: { source: "existing", name: "CGV 용산아이파크몰", jjindeokhu: ["F16-29", "G16-29"], immersion: ["H13-32", "I13-32"], best: ["J11-34", "K11-34", "L11-34"] },
  centum: { source: "existing", name: "CGV 센텀시티", jjindeokhu: ["E18-28"], immersion: ["F16-30", "G16-30"], best: ["H14-32", "I14-32"] },
  apgujeong: { source: "png", name: "CGV 압구정", jjindeokhu: ["A9-16"], immersion: ["B7-18"], best: ["C7-18", "D7-18"] },
  yeongdeungpo: { source: "png", name: "CGV 영등포", jjindeokhu: ["D10-18", "E10-18"], immersion: ["F7-21", "G7-21"], best: ["H5-23", "I5-23"], whyIMAX: ["I1-999"] },
  wangsimni: { source: "png", name: "CGV 왕십리", jjindeokhu: ["D13-20"], immersion: ["E10-22", "F10-22"], best: ["G8-25", "H8-25"] },
  cheonho: { source: "png", name: "CGV 천호", avoid: ["A1-999", "B1-999", "C1-999"], jjindeokhu: ["E11-25"], immersion: ["F9-27", "G9-27"], best: ["H7-29", "I7-29"] },
  gwanggyo: { source: "png", name: "CGV 광교", avoid: ["A1-999", "B1-999"], jjindeokhu: ["E9-19"], immersion: ["F7-21", "G7-21"], best: ["H5-23", "I5-23"] },
  dongtan: { source: "png", name: "CGV 동탄", jjindeokhu: ["D9-19"], immersion: ["E7-21", "F7-21"], best: ["G7-21", "H7-21"] },
  sopung: { source: "png", name: "CGV 소풍", jjindeokhu: ["D9-16"], immersion: ["E7-18", "F7-18"], best: ["G5-20", "H5-20"], whyIMAX: ["K1-999"] },
  wirye: { source: "png", name: "CGV 스타필드시티위례", avoid: ["A1-999", "B1-999"], jjindeokhu: ["C7-14"], immersion: ["D5-16", "E5-16"], best: ["F5-16", "G5-16"], whyIMAX: ["J1-999"] },
  uijeongbu: { source: "png", name: "CGV 의정부", jjindeokhu: ["D9-18"], immersion: ["E7-20", "F7-20"], best: ["G5-22", "H5-22"], whyIMAX: ["K1-999"] },
  ilsan: { source: "png", name: "CGV 일산", jjindeokhu: ["C13-20"], immersion: ["D10-23", "E10-23"], best: ["F8-25", "G8-25"] },
  pyeongtaek: { source: "png", name: "CGV 평택", jjindeokhu: ["D7-14"], immersion: ["E5-16", "F5-16"], best: ["G5-16", "H5-16"], whyIMAX: ["K1-999"] },
  incheon: { source: "png", name: "CGV 인천", jjindeokhu: ["D9-17"], immersion: ["E7-19", "F7-19"], best: ["G5-21", "H5-21"], whyIMAX: ["L1-999"] },
  chuncheon: { source: "png", name: "CGV 춘천", jjindeokhu: ["D9-18"], immersion: ["E7-20", "F7-20"], best: ["G5-22", "H5-22"], whyIMAX: ["K1-999"] },
  daejeon: { source: "png", name: "CGV 대전", jjindeokhu: ["E9-16"], immersion: ["F7-18", "G7-18"], best: ["H5-20", "I5-20"], whyIMAX: ["L1-999"] },
  daejeonTerminal: { source: "png", name: "CGV 대전터미널", jjindeokhu: ["D8-15"], immersion: ["E6-17", "F6-17"], best: ["G6-17", "H6-17"], whyIMAX: ["K1-999"] },
  cheon: { source: "png", name: "CGV 천안터미널", jjindeokhu: ["C9-16"], immersion: ["D7-18", "E7-18"], best: ["F7-18", "G7-18"] },
  cheonanPentaport: { source: "png", name: "CGV 천안펜타포트", jjindeokhu: ["C7-14"], immersion: ["D5-16", "E5-16"], best: ["F5-16", "G5-16"] },
  cheongju: { source: "png", name: "CGV 청주(서문)", jjindeokhu: ["D9-17"], immersion: ["E7-19", "F7-19"], best: ["H5-21", "I5-21"] },
  daegu: { source: "png", name: "CGV 대구", jjindeokhu: ["D9-17"], immersion: ["E6-20", "F6-20"], best: ["G6-20", "H6-20"] },
  seomyeon: { source: "png", name: "CGV 서면", jjindeokhu: ["E9-17"], immersion: ["F6-20", "G6-20"], best: ["H14-22", "I14-22"], whyIMAX: ["L1-999"] },
  ulsan: { source: "png", name: "CGV 울산삼산", avoid: ["A1-999", "B1-999", "C1-999"], jjindeokhu: ["E14-24"], immersion: ["F12-26", "G12-26"], best: ["H10-28", "I10-28"] },
  changwon: { source: "png", name: "CGV 창원더시티", jjindeokhu: ["D9-16"], immersion: ["E7-18", "F7-18"], best: ["G5-20", "H5-20"], whyIMAX: ["K1-999"] },
  suncheon: { source: "png", name: "CGV 순천신대", jjindeokhu: ["C10-18"], immersion: ["D7-21"], best: ["E7-21", "F7-21"] },
  jeonju: { source: "png", name: "CGV 전주효자", jjindeokhu: ["E12-22"], immersion: ["F10-24", "G10-24"], best: ["H8-26", "I8-26"] },
  pangyo: { source: "png", status: "closed", name: "CGV 판교 (폐점·참고용)", jjindeokhu: ["E10-18"], immersion: ["F7-21", "G7-21"], best: ["H5-23", "I5-23"] }
};
