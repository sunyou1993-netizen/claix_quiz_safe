import confetti from 'canvas-confetti';

/**
 * 서울신답초등학교 학교폭력 예방 O/X 퀴즈 키오스크 (1080x1920 Signage)
 * Main JavaScript Module - Interactive Implementation
 */

function triggerCelebrationConfetti() {
  try {
    // Left cannon
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 85,
      origin: { x: 0.05, y: 0.7 },
      zIndex: 9999,
      colors: ['#2563EB', '#10B981', '#F59E0B', '#EC4899', '#8B5CF6', '#3B82F6', '#EF4444']
    });

    // Right cannon
    confetti({
      particleCount: 80,
      angle: 120,
      spread: 85,
      origin: { x: 0.95, y: 0.7 },
      zIndex: 9999,
      colors: ['#2563EB', '#10B981', '#F59E0B', '#EC4899', '#8B5CF6', '#3B82F6', '#EF4444']
    });

    // Second wave after 200ms
    setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 65,
        spread: 70,
        origin: { x: 0.1, y: 0.65 },
        zIndex: 9999,
        colors: ['#38BDF8', '#F43F5E', '#FACC15', '#A855F7']
      });
      confetti({
        particleCount: 60,
        angle: 115,
        spread: 70,
        origin: { x: 0.9, y: 0.65 },
        zIndex: 9999,
        colors: ['#38BDF8', '#F43F5E', '#FACC15', '#A855F7']
      });
    }, 200);
  } catch (e) {
    console.error("Confetti error:", e);
  }
}

// ==========================================
// 1. DATA: 어린이 안전 O/X 퀴즈 데이터 (100문제)
// ==========================================
const QUIZ_DATA = {
  schoolName: "",
  title: "어린이 안전 O/X 퀴즈",
  questions: [
    { id: 1, question: "횡단보도를 건널 때는 '멈춘다, 살핀다, 건넌다' 3원칙을 지켜야 한다.", answer: "O", explanation: "맞아요! 횡단보도 앞에 멈춰 서서 좌우를 살피고 차가 완전히 멈춘 것을 확인한 후 안전하게 건너야 합니다." },
    { id: 2, question: "초록 불이 켜지자마자 차가 멈추지 않아도 바로 뛰어 건너가야 한다.", answer: "X", explanation: "틀려요! 초록 불이 켜져도 멈추지 않는 차가 있을 수 있으므로 좌우를 살피고 천천히 걸어서 건너야 합니다." },
    { id: 3, question: "비 오는 날에는 운전자의 눈에 잘 띄도록 밝은 색 옷을 입고 투명 우산을 쓰는 것이 안전하다.", answer: "O", explanation: "맞아요! 비 오는 날 어두운 옷을 입으면 운전자가 보기 어렵기 때문에 밝은 색 옷과 시야가 확보되는 투명 우산이 안전합니다." },
    { id: 4, question: "자전거나 킥보드를 탈 때 헬멧(안전모)과 보호대를 착용하지 않아도 괜찮다.", answer: "X", explanation: "틀려요! 머리와 관절을 보호하기 위해 자전거나 인라인, 킥보드를 탈 때는 반드시 헬멧과 보호대를 착용해야 합니다." },
    { id: 5, question: "어린이 보호구역(스쿨존)에서 자동차의 제한 속도는 보통 시속 30km 이하이다.", answer: "O", explanation: "맞아요! 스쿨존에서는 어린이를 보호하기 위해 차량 속도를 시속 30km 이하로 제한하여 안전을 지키고 있습니다." },
    { id: 6, question: "버스에서 내릴 때 스마트폰을 보면서 급하게 뛰어내려도 안전하다.", answer: "X", explanation: "틀려요! 버스에서 내릴 때는 오토바이나 자전거가 지나갈 수 있으므로 주변을 살피며 천천히 내려야 합니다." },
    { id: 7, question: "자동차를 탈 때는 앞 좌석뿐만 아니라 뒷좌석에서도 반드시 안전벨트를 착용해야 한다.", answer: "O", explanation: "맞아요! 전 좌석 안전벨트 착용은 사고 시 충격을 줄이고 생명을 지켜주는 가장 중요한 기본 수칙입니다." },
    { id: 8, question: "대형 트럭이나 버스 바로 앞이나 뒤, 옆쪽은 운전자가 쉽게 다 볼 수 있는 안전한 곳이다.", answer: "X", explanation: "틀려요! 큰 차에는 운전자가 볼 수 없는 '사각지대'가 넓게 존재하므로 대형 차량 주변에 가까이 가지 않아야 합니다." },
    { id: 9, question: "골목길이나 주차장에서는 갑자기 튀어나오는 차가 있을 수 있으므로 뛰지 않고 걸어야 한다.", answer: "O", explanation: "맞아요! 주차장이나 골목길은 시야가 좁아 차가 갑자기 나타날 수 있으므로 항상 주위를 살피며 천천히 걸어야 합니다." },
    { id: 10, question: "횡단보도에 서 있을 때 차도와 가까운 보도블록 맨 끝 가장자리에 바짝 붙어 기다리는 것이 좋다.", answer: "X", explanation: "틀려요! 차가 돌면서 보도 안쪽을 침범할 수 있으므로 보도블록에서 두세 걸음 뒤로 물러서서 기다려야 합니다." },
    { id: 11, question: "밤에 길을 걸을 때는 반사경이 달린 가방이나 밝은 옷을 입는 것이 사고 예방에 도움이 된다.", answer: "O", explanation: "맞아요! 야간에는 운전자가 보행자를 쉽게 발견할 수 있도록 밝은 옷이나 반사 띠가 있는 물건을 착용해야 합니다." },
    { id: 12, question: "자전거를 타고 횡단보도를 건널 때는 빠르게 타고 건너가는 것이 안전하다.", answer: "X", explanation: "틀려요! 횡단보도를 건널 때는 자전거에서 내려서 천천히 끌고 걸어가야 보행자와의 충돌 사고를 막을 수 있습니다." },
    { id: 13, question: "학교 복도나 계단에서는 항상 오른쪽으로 천천히 걷는 '우측통행'을 해야 한다.", answer: "O", explanation: "맞아요! 마주 오는 친구들과 부딪히지 않도록 복도와 계단에서는 우측으로 조용히 걷는 습관을 지켜야 합니다." },
    { id: 14, question: "쉬는 시간에 교실 창문 난간에 걸터앉거나 몸을 밖으로 내밀어 장난쳐도 된다.", answer: "X", explanation: "틀려요! 창문 난간에 기대거나 밖으로 몸을 내밀면 중심을 잃고 추락하는 대형 사고가 날 수 있어 절대 금지입니다." },
    { id: 15, question: "체육 수업이나 운동을 하기 전에는 반드시 준비운동(스트레칭)을 해야 부상을 예방할 수 있다.", answer: "O", explanation: "맞아요! 준비운동은 관절과 근육을 풀어주어 운동 중 생길 수 있는 염좌나 골절 등 부상을 막아줍니다." },
    { id: 16, question: "미술 시간에 가위나 칼을 친구에게 건넬 때는 날카로운 날 쪽을 친구 쪽으로 향하게 전달한다.", answer: "X", explanation: "틀려요! 가위나 칼을 건넬 때는 다치지 않도록 손잡이 부분을 상대방 쪽으로 향하게 잡고 건네야 합니다." },
    { id: 17, question: "과학실에서 실험할 때는 화학물질로부터 눈을 지키기 위해 안전 보안경을 착용해야 한다.", answer: "O", explanation: "맞아요! 화학 약품이 튀거나 유리 기구가 깨질 위험에 대비해 반드시 보안경과 실험복을 착용해야 합니다." },
    { id: 18, question: "과학실에 있는 알 수 없는 화학 액체는 어떤 냄새인지 코를 가까이 대고 깊게 들이마셔 확인한다.", answer: "X", explanation: "틀려요! 유독 기체가 있을 수 있으므로 손으로 바람을 살살 일으켜(부채질) 조심스럽게 냄새를 맡아야 합니다." },
    { id: 19, question: "청소 시간에 대걸레나 빗자루를 들고 칼싸움 장난을 치면 친구의 눈이나 얼굴을 다치게 할 수 있다.", answer: "O", explanation: "맞아요! 청소 도구는 본래 용도로만 안전하게 사용하고 친구를 향해 휘두르는 장난을 절대 치지 않아야 합니다." },
    { id: 20, question: "친구가 앉으려고 할 때 의자를 뒤로 슬쩍 빼는 장난은 재미있고 안전한 놀이이다.", answer: "X", explanation: "틀려요! 의자 빼기 장난은 친구가 엉덩방아를 찧어 꼬리뼈나 척추, 뇌를 크게 다칠 수 있는 매우 위험한 행위입니다." },
    { id: 21, question: "계단을 오르내릴 때는 주머니에 손을 넣지 않고 안전 손잡이(난간)를 잡고 이동하는 것이 좋다.", answer: "O", explanation: "맞아요! 주머니에 손을 넣고 걷다 넘어지면 얼굴이나 머리를 크게 다칠 수 있으므로 손을 빼고 손잡이를 잡아야 합니다." },
    { id: 22, question: "교실 바닥에 물이나 우유가 쏟아져 있어도 미끄럽지 않으니 그냥 지나쳐도 된다.", answer: "X", explanation: "틀려요! 바닥에 물기가 있으면 친구들이 밟고 미끄러져 크게 다칠 수 있으므로 발견 즉시 걸레로 닦아야 합니다." },
    { id: 23, question: "급식실에서는 뜨거운 국물을 들고 이동하므로 절대 뛰지 않고 천천히 걸어야 한다.", answer: "O", explanation: "맞아요! 급식실에서 뛰다 부딪히면 뜨거운 국물에 화상을 입거나 넘어져 다칠 위험이 높습니다." },
    { id: 24, question: "문을 닫을 때 문틈 사이에 손가락이 끼이지 않도록 살피지 않고 강하게 쾅 닫아도 된다.", answer: "X", explanation: "틀려요! 문틈에 손가락이 끼이면 뼈가 부러지거나 큰 상처를 입을 수 있으므로 항상 손잡이를 잡고 조심스럽게 닫아야 합니다." },
    { id: 25, question: "젖은 손으로 전기 플러그나 콘센트를 만지면 감전 사고가 일어날 수 있다.", answer: "O", explanation: "맞아요! 물은 전기가 아주 잘 통하므로 손에 물기가 있을 때는 절대로 전자제품이나 콘센트를 만지면 안 됩니다." },
    { id: 26, question: "하나의 콘센트(멀티탭)에 문어발처럼 수많은 고용량 전자제품 플러그를 한꺼번에 꽂아 쓰는 것이 좋다.", answer: "X", explanation: "틀려요! 멀티탭에 과도하게 많은 전자기기를 연결하면 과열되어 화재가 발생할 위험이 큽니다." },
    { id: 27, question: "전선 코드를 뽑을 때는 줄을 세게 잡아당기지 말고 플러그 머리 부분을 잡고 뽑아야 한다.", answer: "O", explanation: "맞아요! 전선 줄을 당기면 내부 구리선이 끊어지거나 합선이 일어나 감전 및 화재 위험이 있습니다." },
    { id: 28, question: "가스레인지 주변에 부탄가스통이나 키친타월, 비닐봉지 같은 불이 잘 붙는 물건을 두어도 안전하다.", answer: "X", explanation: "틀려요! 열기에 의해 부탄가스가 폭발하거나 종이류에 불이 옮겨붙을 수 있으므로 가스 주변은 항상 비워두어야 합니다." },
    { id: 29, question: "가스 냄새가 날 때는 환풍기나 전등 스위치를 켜지 말고 창문을 열어 환기해야 한다.", answer: "O", explanation: "맞아요! 전등 스위치를 켤 때 발생하는 미세한 전기 스파크로 인해 누출된 가스가 폭발할 수 있습니다." },
    { id: 30, question: "화상을 입었을 때는 얼음을 상처에 직접 세게 문지르거나 된장을 바르는 것이 올바른 응급처치이다.", answer: "X", explanation: "틀려요! 얼음이나 된장은 피부 손상과 2차 감염을 유발하므로 깨끗한 흐르는 찬물에 15~20분간 열을 식혀야 합니다." },
    { id: 31, question: "욕실 바닥은 물기와 비누 거품 때문에 미끄러우므로 미끄럼 방지 매트를 깔고 뛰지 않아야 한다.", answer: "O", explanation: "맞아요! 욕실은 단단한 타일과 변기가 있어 넘어지면 큰 부상으로 이어지므로 욕실 슬리퍼를 신고 조심해야 합니다." },
    { id: 32, question: "모양과 색깔이 알록달록한 약은 맛있는 사탕처럼 보여도 어른의 허락 없이 혼자 마음대로 먹어도 된다.", answer: "X", explanation: "틀려요! 약을 함부로 먹으면 심각한 중독이나 부작용이 생길 수 있으므로 반드시 부모님이나 의사, 약사의 지도를 받아야 합니다." },
    { id: 33, question: "엘리베이터에 갇혔을 때는 문을 억지로 열려고 하지 말고 비상벨(호출 버튼)을 눌러 구조를 요청해야 한다.", answer: "O", explanation: "맞아요! 억지로 문을 열면 추락 위험이 있으므로 침착하게 비상벨을 누르고 구조대가 올 때까지 안전하게 기다려야 합니다." },
    { id: 34, question: "엘리베이터 안에서 친구들과 높이 뛰거나 문을 발로 차는 장난을 쳐도 멈추지 않는다.", answer: "X", explanation: "틀려요! 엘리베이터 안에서 뛰거나 충격을 주면 안전장치가 작동해 엘리베이터가 갑자기 멈출 수 있습니다." },
    { id: 35, question: "세탁 세제나 락스 같은 가정용 화학세제는 음료수 병에 옮겨 담지 않고 원래 용기에 보관해야 한다.", answer: "O", explanation: "맞아요! 음료수 병에 담아두면 물이나 주스로 착각하고 마시는 치명적인 중독 사고가 일어날 수 있습니다." },
    { id: 36, question: "어두운 밤길을 걸을 때는 이어폰으로 음악을 크게 듣고 스마트폰 게임을 하며 걷는 것이 좋다.", answer: "X", explanation: "틀려요! 이어폰을 끼고 화면을 보면 주변 자동차 경적이나 위험 신호를 듣지 못해 사고 위험이 매우 높아집니다." },
    { id: 37, question: "화재가 발생했을 때는 '불이야!'라고 크게 외쳐 주변에 알리고 비상벨을 누른 뒤 신속히 대피해야 한다.", answer: "O", explanation: "맞아요! 화재를 발견하면 즉시 큰 소리로 이웃에게 알리고 대피한 후 119에 신고해야 합니다." },
    { id: 38, question: "불이 났을 때 연기를 피해 높은 층으로 가기 위해 엘리베이터를 타고 탈출하는 것이 안전하다.", answer: "X", explanation: "틀려요! 화재 시 엘리베이터는 정전으로 멈추거나 연기가 통로로 밀려와 매우 위험하므로 반드시 비상계단으로 대피해야 합니다." },
    { id: 39, question: "화재 대피 시 유독가스를 마시지 않기 위해 젖은 수건으로 코와 입을 막고 자세를 낮춰 이동해야 한다.", answer: "O", explanation: "맞아요! 뜨거운 연기와 유독가스는 위로 올라가므로 바닥 쪽의 깨끗한 공기를 마시며 낮은 자세로 피해야 합니다." },
    { id: 40, question: "대피 중 닫힌 방문을 열 때는 손잡이가 뜨거운지 확인하지 않고 바로 활짝 열어야 한다.", answer: "X", explanation: "틀려요! 손잡이가 뜨거우면 문 반대편에 불길이 있다는 뜻이므로 손등으로 온도를 먼저 살피고 다른 대피로를 찾아야 합니다." },
    { id: 41, question: "옷에 불이 붙었을 때는 뛰지 말고 '멈춘다, 엎드린다, 구른다'를 실천해 불을 꺼야 한다.", answer: "O", explanation: "맞아요! 뛰면 바람 때문에 불이 더 커지므로 바닥에 엎드려 얼굴을 감싸고 데굴데굴 굴러서 산소를 차단해야 합니다." },
    { id: 42, question: "소화기를 사용할 때 안전핀을 뽑기 전에 손잡이를 꽉 쥐고 있어야 핀이 쉽게 뽑힌다.", answer: "X", explanation: "틀려요! 손잡이를 쥐고 있으면 안전핀이 고정되어 뽑히지 않으므로 몸통을 잡고 안전핀을 먼저 뽑아야 합니다." },
    { id: 43, question: "소화기 노즐을 잡을 때는 바람을 등지고 서서 빗자루로 쓸 듯이 골고루 뿌려야 한다.", answer: "O", explanation: "맞아요! 바람을 안고 서면 소화 약제가 본인 얼굴로 날아오므로 바람을 등지고 불의 아래쪽을 향해 방사해야 합니다." },
    { id: 44, question: "119에 신고할 때는 장난전화를 걸어 거짓말을 해도 소방관 아저씨들이 웃고 넘어가 주신다.", answer: "X", explanation: "틀려요! 119 장난전화는 진짜 위급한 환자의 생명을 위협하는 범죄 행위이며 법적인 처벌을 받습니다." },
    { id: 45, question: "119에 신고할 때는 사고 위치, 다친 사람 수, 상황을 침착하고 정확하게 설명해야 한다.", answer: "O", explanation: "맞아요! 정확한 주소나 주변 큰 건물 이름을 알려주어야 구급차와 소방차가 신속하게 도착할 수 있습니다." },
    { id: 46, question: "지진이 발생해 땅이 심하게 흔들릴 때는 즉시 건물 밖으로 서둘러 뛰어나가야 한다.", answer: "X", explanation: "틀려요! 흔들리는 동안에는 떨어지는 낙하물에 다칠 수 있으므로 튼튼한 탁자 아래로 들어가 머리를 먼저 보호해야 합니다." },
    { id: 47, question: "지진으로 흔들림이 멈춘 후에는 가스 밸브를 잠그고 전기 차단기를 내린 후 계단으로 대피해야 한다.", answer: "O", explanation: "맞아요! 지진 후 발생할 수 있는 가스 누출 화재와 누전 사고를 막기 위해 밸브와 스위치를 신속히 차단해야 합니다." },
    { id: 48, question: "지진 대피 시에는 가방이나 방석으로 머리를 보호할 필요 없이 맨몸으로 이동하면 된다.", answer: "X", explanation: "틀려요! 깨진 유리창이나 간판, 외벽 타일이 떨어질 수 있으므로 가방이나 헬멧 등으로 머리를 단단히 감싸야 합니다." },
    { id: 49, question: "태풍이나 집중호우가 내릴 때는 하천 주변 산책로나 지하차도에 절대로 들어가지 않아야 한다.", answer: "O", explanation: "맞아요! 폭우 시 하천과 지하공간은 순식간에 물이 불어나 휩쓸릴 수 있으므로 절대 접근하면 안 됩니다." },
    { id: 50, question: "번개가 칠 때는 키가 큰 나무 아래나 금속 울타리 옆에 바짝 서서 비를 피하는 것이 안전하다.", answer: "X", explanation: "틀려요! 벼락은 뾰족하고 높은 곳에 떨어지기 쉬우므로 큰 나무나 금속체에서 멀리 떨어져 건물 안으로 피해야 합니다." },
    { id: 51, question: "물놀이를 하기 전에는 손과 발부터 물을 묻히고 반드시 충분한 준비운동을 해야 한다.", answer: "O", explanation: "맞아요! 찬물에 갑자기 들어가면 심장마비나 근육 경련이 일어날 수 있으므로 심장에서 먼 곳부터 물을 적셔야 합니다." },
    { id: 52, question: "수영을 잘하는 사람은 바다나 계곡 깊은 물에서도 구명조끼를 입을 필요가 없다.", answer: "X", explanation: "틀려요! 아무리 수영을 잘해도 급류나 쥐(경련)가 나면 위험하므로 수상 레저나 물놀이 시 구명조끼는 필수입니다." },
    { id: 53, question: "물놀이 중 입술이 파래지거나 몸이 덜덜 떨리면 즉시 물 밖으로 나와 몸을 덮히고 휴식해야 한다.", answer: "O", explanation: "맞아요! 체온이 떨어지는 저체온증의 신호이므로 즉시 마른 수건으로 몸을 닦고 따뜻한 곳에서 쉬어야 합니다." },
    { id: 54, question: "계곡물은 바닥이 잘 보이지 않고 수심이 갑자기 깊어질 수 있지만 다이빙을 마음껏 해도 된다.", answer: "X", explanation: "틀려요! 계곡 바닥의 바위에 머리를 부딪치거나 급류에 휩쓸릴 수 있으므로 다이빙은 절대 금지입니다." },
    { id: 55, question: "물에 빠진 사람을 발견했을 때는 직접 뛰어들지 말고 '사람 살려!' 외치며 튜브나 긴 막대를 던져준다.", answer: "O", explanation: "맞아요! 스스로 구하러 들어가면 함께 위험해질 수 있으므로 주변 어른과 119에 알리고 뜰 수 있는 물건을 던져야 합니다." },
    { id: 56, question: "놀이터 미끄럼틀을 탈 때는 거꾸로 기어 올라가거나 서서 미끄러져 내려와도 안전하다.", answer: "X", explanation: "틀려요! 미끄럼틀을 역주행하거나 서서 타면 위에서 내려오는 친구와 충돌하거나 추락해 크게 다칩니다." },
    { id: 57, question: "그네를 탈 때는 줄을 양손으로 꼭 잡고 타고, 그네 주변 반경 안으로는 지나가지 않아야 한다.", answer: "O", explanation: "맞아요! 움직이는 그네에 부딪히면 뼈가 부러지는 등 큰 사고가 날 수 있으므로 안전거리를 유지해야 합니다." },
    { id: 58, question: "시소를 탈 때 상대방 친구가 공중에 떠 있는 상태에서 예고 없이 갑자기 내려도 된다.", answer: "X", explanation: "틀려요! 갑자기 내리면 반대편 친구가 바닥으로 강하게 떨어져 척추나 관절을 심하게 다칠 수 있습니다." },
    { id: 59, question: "여름철 폭염 주의보가 발령되었을 때는 한낮 야외활동을 피하고 물을 자주 마셔야 한다.", answer: "O", explanation: "맞아요! 뜨거운 햇볕 아래 오래 있으면 일사병이나 열사병에 걸릴 수 있으므로 그늘에서 쉬고 수분을 보충해야 합니다." },
    { id: 60, question: "겨울철 눈길이나 빙판길을 걸을 때는 주머니에 양손을 푹 찌르고 뛰어가도 괜찮다.", answer: "X", explanation: "틀려요! 빙판길에서 주머니에 손을 넣으면 넘어질 때 대처하지 못해 뇌진탕이나 골절을 입을 수 있으므로 장갑을 끼고 손을 빼야 합니다." },
    { id: 61, question: "길에서 낯선 사람이 '엄마가 데려오래'라며 차에 타라고 할 때는 절대 타지 않고 큰 소리로 도움을 청해야 한다.", answer: "O", explanation: "맞아요! 모르는 사람이나 차는 절대 따라가지 말고 즉시 안전한 상가나 부모님, 경찰(112)에 알려야 합니다." },
    { id: 62, question: "낯선 사람이 주는 맛있는 사탕이나 장난감은 공짜니까 의심 없이 받아먹고 따라가도 된다.", answer: "X", explanation: "틀려요! 유괴나 범죄 위험이 있으므로 모르는 사람이 주는 물건이나 음식은 정중히 거절하고 그 자리를 피해야 합니다." },
    { id: 63, question: "길을 잃었을 때는 당황하지 않고 제자리에 멈춰 서서 부모님을 기다리거나 '아동안전지킴이집'에 도움을 요청한다.", answer: "O", explanation: "맞아요! '멈추기, 생각하기, 도와주세요' 3단계를 기억하고 경찰서나 노란색 아동안전지킴이집 마크가 있는 가게로 가야 합니다." },
    { id: 64, question: "자신의 이름, 집 주소, 부모님 전화번호는 외울 필요 없이 스마트폰에만 저장해 두면 된다.", answer: "X", explanation: "틀려요! 휴대폰을 잃어버리거나 배터리가 방전될 상황에 대비해 부모님 연락처와 집 주소는 꼭 머릿속에 외워두어야 합니다." },
    { id: 65, question: "심폐소생술(CPR)을 할 때는 환자의 가슴 중앙(가슴뼈 아래쪽)을 손꿈치로 분당 100~120회 강하고 빠르게 압박한다.", answer: "O", explanation: "맞아요! 정확한 위치에 성인 기준 5cm 깊이로 강하고 규칙적으로 압박해야 뇌로 혈액을 보낼 수 있습니다." },
    { id: 66, question: "음식이 목에 걸려 숨을 쉬지 못할 때는 그냥 등을 세게 두드리며 물을 억지로 마시게 해야 한다.", answer: "X", explanation: "틀려요! 물을 마시면 기도가 더 막힐 수 있으므로 말을 못하고 켁켁거리면 하임리히법(복부 밀쳐올리기)을 실시해야 합니다." },
    { id: 67, question: "코피가 날 때는 고개를 뒤로 젖히지 말고 고개를 약간 숙인 뒤 양 콧볼을 10분 정도 지그시 눌러준다.", answer: "O", explanation: "맞아요! 고개를 뒤로 젖히면 피가 기도로 넘어가 구토나 호흡 곤란을 일으킬 수 있으므로 고개를 숙여야 합니다." },
    { id: 68, question: "뼈가 부러진 것으로 의심될 때는 다친 부위를 이리저리 꺾어보며 뼈를 맞춰야 한다.", answer: "X", explanation: "틀려요! 골절 부위를 억지로 움직이면 신경과 혈관이 손상되므로 부목 등으로 고정한 뒤 병원으로 가야 합니다." },
    { id: 69, question: "칼이나 유리에 깊게 베여 피가 멈추지 않을 때는 깨끗한 거즈로 상처 부위를 직접 강하게 압박해야 한다.", answer: "O", explanation: "맞아요! 직접 압박 지혈법이 가장 효과적이며, 상처 부위를 심장보다 높게 올려주면 피가 멎는 데 도움이 됩니다." },
    { id: 70, question: "벌에 쏘였을 때는 손톱이나 핀셋으로 침을 꽉 쥐어 짜내면 독이 잘 빠진다.", answer: "X", explanation: "틀려요! 핀셋으로 쥐면 독낭이 터져 독이 더 몸속으로 들어가므로 신용카드 같은 플라스틱 모서리로 살살 밀어서 침을 빼야 합니다." },
    { id: 71, question: "횡단보도를 건널 때는 운전자와 눈을 맞추며(아이 콘택트) 손을 들고 건너면 더 안전하다.", answer: "O", explanation: "맞아요! 운전자가 보행자를 똑똑히 보고 멈추었는지 확인하면서 건너는 것이 사고를 확실히 예방합니다." },
    { id: 72, question: "스마트폰을 보면서 걸어가는 '스몸비(스마트폰+좀비)' 행동은 시야가 넓어져 안전하다.", answer: "X", explanation: "틀려요! 스마트폰에 집중하면 시야각이 10~20도로 좁아지고 소리를 듣지 못해 교통사고 위험이 80% 이상 증가합니다." },
    { id: 73, question: "학교 정문이나 통학로 주변의 노란색 발자국(옐로카펫)은 어린이가 안전하게 신호를 기다리도록 돕는 공간이다.", answer: "O", explanation: "맞아요! 옐로카펫 안에서 기다리면 운전자의 눈에 어린이가 잘 띄어 교통사고를 크게 줄여줍니다." },
    { id: 74, question: "비가 올 때 어두운 검은색 우산을 쓰고 얼굴을 푹 파묻고 걸어가면 안전하다.", answer: "X", explanation: "틀려요! 시야가 가려지고 운전자에게도 보이지 않으므로 투명 우산이나 밝은 노란색 우산을 바르게 쓰고 걸어야 합니다." },
    { id: 75, question: "횡단보도 신호등의 초록 불이 깜빡일 때는 이미 건너고 있다면 서둘러 건너고, 아직 출발 전이면 다음 신호를 기다려야 한다.", answer: "O", explanation: "맞아요! 깜빡일 때 출발하면 중간에 빨간 불로 바뀌어 도로 한가운데 고립될 수 있으므로 무리하게 건너지 않습니다." },
    { id: 76, question: "친구들과 횡단보도를 건널 때 손잡고 달리거나 장난치며 건너는 것이 좋다.", answer: "X", explanation: "틀려요! 뛰어가다 넘어지면 출발하는 차량과 충돌할 수 있으므로 질서 있게 좌우를 보며 걸어야 합니다." },
    { id: 77, question: "차량 안에서 창밖으로 머리나 손을 내미는 행위는 지나가는 다른 차나 기둥에 부딪힐 수 있어 매우 위험하다.", answer: "O", explanation: "맞아요! 창밖으로 신체 부위를 내밀면 반대편 차나 가로수와 충돌해 치명적인 부상을 입을 수 있습니다." },
    { id: 78, question: "인라인스케이트나 킥보드를 차도에서 자동차와 함께 나란히 타도 도로교통법상 안전하다.", answer: "X", explanation: "틀려요! 차도는 자동차 전용 도로이므로 인라인이나 어린이 킥보드는 안전한 공원이나 보도에서 보호장구를 착용하고 타야 합니다." },
    { id: 79, question: "도로변에 주차된 차량 사이에서 갑자기 도로로 뛰어나오는 행동은 운전자가 반응할 수 없어 치명적이다.", answer: "O", explanation: "맞아요! 주차된 차로 인해 운전자의 시야가 가려지므로 차 사이에서 절대 갑자기 뛰어나오면 안 됩니다." },
    { id: 80, question: "자전거를 탈 때 밤에는 라이트(전조등)나 후미등을 켤 필요가 없다.", answer: "X", explanation: "틀려요! 야간에 라이트가 없으면 다른 보행자나 차량이 자전거를 보지 못해 큰 충돌 사고가 발생합니다." },
    { id: 81, question: "교실에서 가위를 들고 이동할 때는 가위 날을 오므려 손바닥 안쪽으로 감싸 쥐고 걸어야 한다.", answer: "O", explanation: "맞아요! 가위 날을 앞쪽으로 뻗고 걷다 넘어지면 본인이나 앞 친구가 찔려 큰 부상을 입을 수 있습니다." },
    { id: 82, question: "연필이나 볼펜을 입에 물고 장난치거나 뛰어가도 다칠 염려가 전혀 없다.", answer: "X", explanation: "틀려요! 뾰족한 필기구를 물고 있다 넘어지면 목구멍이나 입안을 심각하게 찔릴 수 있어 절대 삼가야 합니다." },
    { id: 83, question: "과학실에서 알코올램프를 끌 때는 입으로 불어서 끄지 말고 반드시 뚜껑을 옆에서 덮어서 꺼야 한다.", answer: "O", explanation: "맞아요! 입으로 불면 불꽃이 번지거나 알코올 증기에 불이 붙을 수 있으므로 뚜껑으로 공기를 차단해 꺼야 합니다." },
    { id: 84, question: "복도에서 친구와 술래잡기를 하거나 슬라이딩을 하며 미끄러지는 것은 안전한 놀이이다.", answer: "X", explanation: "틀려요! 교실 문이 갑자기 열리거나 코너에서 나오는 친구와 부딪혀 머리를 다칠 수 있습니다." },
    { id: 85, question: "체육관에서 뜀틀이나 매트 운동을 할 때는 매트가 밀리지 않도록 고정하고 선생님 지도를 받아야 한다.", answer: "O", explanation: "맞아요! 안전 매트가 어긋나 있으면 착지 시 발목을 삐거나 바닥에 부딪힐 수 있습니다." },
    { id: 86, question: "전기 콘센트 구멍에 젓가락이나 쇠핀을 찔러 넣어보는 것은 재미있는 과학 호기심 놀이이다.", answer: "X", explanation: "틀려요! 금속 물체는 전기가 즉시 통하여 강력한 감전과 심장마비를 일으키는 치명적인 행동입니다." },
    { id: 87, question: "다리미나 헤어드라이어 같은 전열기는 사용 후 반드시 코드를 뽑고 열이 식을 때까지 손을 대지 않는다.", answer: "O", explanation: "맞아요! 켜둔 채 방치하면 화재 위험이 있고 만지면 깊은 화상을 입을 수 있습니다." },
    { id: 88, question: "집에 혼자 있을 때 택배 기사나 낯선 사람이 문을 열어달라고 하면 즉시 활짝 열어준다.", answer: "X", explanation: "틀려요! 모르는 방문객에게는 '부모님이 지금 바쁘시니 문 앞에 두고 가세요'라고 말하고 절대 열어주지 않아야 합니다." },
    { id: 89, question: "소화기는 눈에 잘 띄고 통행에 방해되지 않는 출입구 근처나 주방, 거실에 비치해 두어야 한다.", answer: "O", explanation: "맞아요! 화재 발생 시 허둥대지 않고 즉시 집어서 사용할 수 있는 곳에 보관해야 합니다." },
    { id: 90, question: "방에 연기가 차오를 때 서서 뛰어가면 연기를 덜 마신다.", answer: "X", explanation: "틀려요! 연기는 공기보다 가벼워 천장부터 차오르므로 바닥에서 30~50cm 높이로 바짝 엎드려 기어가야 합니다." },
    { id: 91, question: "건물 화재 대피 시 방화문(철문)은 화재와 유독가스의 확산을 막기 위해 평소에 닫혀 있어야 한다.", answer: "O", explanation: "맞아요! 방화문이 열려 있으면 계단 전체가 연기로 가득 차 대피로가 막히게 됩니다." },
    { id: 92, question: "소화기 압력 게이지의 바늘이 빨간색(부족) 구역을 가리키고 있어도 정상 작동한다.", answer: "X", explanation: "틀려요! 바늘이 가운데 녹색 구역에 있어야 정상 압력이며, 빨간색에 있으면 약제가 뿜어져 나오지 않습니다." },
    { id: 93, question: "미세먼지가 매우 나쁜 날에는 야외 체육활동을 자제하고 보건용 마스크(KF80, KF94 등)를 올바르게 착용한다.", answer: "O", explanation: "맞아요! 미세먼지는 호흡기 질환을 유발하므로 마스크를 코와 턱에 밀착해 착용해야 합니다." },
    { id: 94, question: "물놀이를 할 때 튜브를 탔다면 깊은 바다나 파도가 거센 곳까지 멀리 나가도 안전하다.", answer: "X", explanation: "틀려요! 튜브가 뒤집히거나 조류에 밀려 먼 바다로 떠내려갈 수 있으므로 안전 구역 안에서만 물놀이를 해야 합니다." },
    { id: 95, question: "횡단보도를 건널 때는 왼쪽에서 오는 차를 먼저 보고, 중간을 지나면 오른쪽에서 오는 차를 살핀다.", answer: "O", explanation: "맞아요! 차량 통행 방향에 따라 횡단보도 진입 시 좌측, 후반부엔 우측을 살피는 것이 올바른 보행법입니다." },
    { id: 96, question: "엘리베이터 문이 닫히려고 할 때 몸이나 발을 문틈에 집어넣어 문을 열어도 안전하다.", answer: "X", explanation: "틀려요! 감지 센서가 작동하지 않으면 문에 끼이거나 기계 고장을 일으켜 갇힐 수 있으므로 열림 버튼을 눌러야 합니다." },
    { id: 97, question: "눈이나 비가 올 때 건물 입구에 깔린 미끄럼 방지 매트를 밟고 신발 밑창의 물기를 털고 들어가야 한다.", answer: "O", explanation: "맞아요! 로비 바닥에 물기가 묻으면 바닥이 미끄러워져 뒤따라오는 사람이 넘어질 수 있습니다." },
    { id: 98, question: "놀이터에서 놀 때 후드티셔츠의 긴 끈이나 목걸이를 길게 늘어뜨리고 노는 것이 안전하다.", answer: "X", explanation: "틀려요! 미끄럼틀이나 정글짐 틈에 끈이 걸리면 목이 졸리는 질식 사고가 일어날 수 있어 주의해야 합니다." },
    { id: 99, question: "우리 동네 비상 대피소(지하철역, 지하주차장 등)의 위치를 미리 알아두면 재난 발생 시 신속히 대피할 수 있다.", answer: "O", explanation: "맞아요! 국민재난안전포털이나 스마트폰 앱(안전디딤돌)을 통해 주변 대피소를 미리 확인해 두는 것이 좋습니다." },
    { id: 100, question: "안전 수칙은 알고 있는 것보다 매일 생활 속에서 스스로 실천하는 것이 가장 중요하다.", answer: "O", explanation: "맞아요! 작은 안전 습관 하나하나가 나와 친구, 가족의 소중한 생명을 지켜줍니다! 🚦✨" },
    { id: 101, question: "지하철을 탈 때는 스크린도어와 전동차 사이에 발이 빠지지 않도록 발밑을 주의하며 타야 한다.", answer: "O", explanation: "맞아요! 승강장과 지하철 사이에는 틈이 있어 발이 빠질 수 있으므로 항상 발밑을 살피며 조심해서 타야 합니다." },
    { id: 102, question: "횡단보도를 건널 때 초록 불 시간이 얼마 남지 않았더라도 서둘러 뛰어 들어가는 것이 좋다.", answer: "X", explanation: "틀려요! 시간이 부족할 때 무리하게 건너면 도로 한가운데서 빨간 불로 바뀌어 위험하므로 다음 신호를 기다려야 합니다." },
    { id: 103, question: "버스가 달리는 중에는 자리에 얌전히 앉아있거나 손잡이를 두 손으로 꼭 잡아야 한다.", answer: "O", explanation: "맞아요! 버스가 갑자기 급정거할 때 손잡이를 잡지 않으면 앞으로 튕겨 나가 크게 다칠 수 있습니다." },
    { id: 104, question: "차를 탈 때 안전벨트 클립이 '딸깍' 소리가 나지 않아도 대충 걸쳐만 두면 된다.", answer: "X", explanation: "틀려요! 클립이 완전히 걸려 '딸깍' 소리가 나야 사고 시 몸을 꽉 잡아주어 안전합니다." },
    { id: 105, question: "통학버스나 승합차에서 내릴 때는 옷이나 가방끈이 문에 끼이지 않았는지 확인 후 출발해야 한다.", answer: "O", explanation: "맞아요! 가방끈이 낀 채 차가 출발하면 끌려가는 사고가 날 수 있어 꼭 확인해야 합니다." },
    { id: 106, question: "골목길에서 공놀이나 이어달리기를 하면서 자동차 소리에 신경 쓰지 않고 놀아도 된다.", answer: "X", explanation: "틀려요! 골목길은 시야가 좁아 차가 갑자기 튀어나올 수 있으므로 공놀이는 운동장이나 공원에서 해야 합니다." },
    { id: 107, question: "비가 올 때 장화를 신더라도 물웅덩이 깊이를 알 수 없거나 맨홀 뚜껑이 열려 있을 수 있어 피해서 걸어야 한다.", answer: "O", explanation: "맞아요! 폭우 시 수압으로 맨홀 뚜껑이 튀어나오거나 구멍이 숨겨져 있을 수 있어 피해야 합니다." },
    { id: 108, question: "스마트워치나 휴대폰 알림이 오면 자전거를 타면서 한 손으로 화면을 보며 답장해도 된다.", answer: "X", explanation: "틀려요! 한 손 운전과 전방 주시 태만은 돌발 상황에 반응하지 못해 전복이나 충돌 사고로 이어집니다." },
    { id: 109, question: "학교 운동장에서 축구를 할 때는 안경을 쓴 친구의 얼굴을 향해 강하게 공을 차지 않도록 조심한다.", answer: "O", explanation: "맞아요! 공에 맞아 안경이 깨지면 눈에 심각한 상처를 입힐 수 있으므로 주의해야 합니다." },
    { id: 110, question: "교실 뒤편 사물함 위에 올라가서 점프하며 뛰어내리는 놀이는 안전한 다리 근력 운동이다.", answer: "X", explanation: "틀려요! 높은 곳에서 뛰어내리다 발목이 꺾이거나 뇌진탕을 입을 수 있어 사물함에 올라가면 안 됩니다." },
    { id: 111, question: "미술 시간에 조각칼을 사용할 때는 칼이 나아가는 방향 앞에 반대쪽 손을 두지 않아야 한다.", answer: "O", explanation: "맞아요! 칼날 앞쪽에 손이 있으면 미끄러져 손을 깊게 벨 수 있으므로 칼날 뒤쪽에 손을 두어야 합니다." },
    { id: 112, question: "과학실에서 시험관을 가열할 때는 시험관 입구를 자기나 친구의 얼굴 쪽으로 향하게 한다.", answer: "X", explanation: "틀려요! 액체가 갑자기 끓어 넘쳐 튈 수 있으므로 입구는 사람이 없는 쪽을 향해야 합니다." },
    { id: 113, question: "급식 시간에 생선 가시나 뼈가 목에 걸렸을 때는 맨밥을 억지로 한 숟가락 크게 삼키지 말고 보건실이나 병원에 가야 한다.", answer: "O", explanation: "맞아요! 밥을 삼키면 가시가 식도를 더 깊이 찔러 상처가 커질 수 있으므로 의사의 진료를 받아야 합니다." },
    { id: 114, question: "비가 와서 젖은 복도나 계단을 슬리퍼를 신고 뛰어다니면 운동신경이 좋아진다.", answer: "X", explanation: "틀려요! 물기 있는 바닥에서 슬리퍼를 신으면 쉽게 미끄러져 뇌진탕이나 뼈 골절 사고가 발생합니다." },
    { id: 115, question: "양치질을 할 때 칫솔을 입에 문 채로 복도를 걸어 다니거나 장난을 치면 안 된다.", answer: "O", explanation: "맞아요! 칫솔을 문 채 넘어지면 칫솔대가 목구멍이나 입천장을 찔러 치명적인 부상을 입습니다." },
    { id: 116, question: "휴대폰을 충전기에 꽂아 둔 채 침대 위 이불 속에 푹 덮어두고 잠을 자도 안전하다.", answer: "X", explanation: "틀려요! 충전 중 발생하는 열이 빠져나가지 못해 과열로 배터리가 폭발하거나 화재가 발생할 수 있습니다." },
    { id: 117, question: "전자레인지에 알루미늄 호일이나 금속 식기, 껍질째 있는 달걀을 넣고 돌리면 불꽃이 튀거나 폭발한다.", answer: "O", explanation: "맞아요! 금속은 마이크로파를 반사해 스파크를 일으키고 계란은 내부 압력으로 폭발하므로 넣으면 안 됩니다." },
    { id: 118, question: "드라이기를 사용할 때 물이 가득 찬 세면대나 욕조 바로 옆에 두고 전기를 꽂아도 된다.", answer: "X", explanation: "틀려요! 드라이기가 물에 빠지면 즉시 강력한 감전 사고가 일어나 생명을 잃을 수 있습니다." },
    { id: 119, question: "베란다나 창문 근처에 의자나 상자 같은 발받침대를 놓아두면 어린이가 딛고 올라가 추락할 수 있어 치워야 한다.", answer: "O", explanation: "맞아요! 창가 주변 디딤돌은 어린이 추락 사고의 주요 원인이므로 물건을 두지 않아야 합니다." },
    { id: 120, question: "모기약이나 에어로졸 스프레이는 가스레인지 불꽃 옆에서 뿌려도 불이 붙지 않는다.", answer: "X", explanation: "틀려요! 스프레이 안에는 가연성 가스가 들어있어 불꽃에 닿으면 거대한 화염과 폭발이 일어납니다." },
    { id: 121, question: "싱크대나 가스 밸브는 사용 후 '잠금(중간밸브 가로방향)' 상태로 돌려놓는 습관을 들여야 한다.", answer: "O", explanation: "맞아요! 가스 중간 밸브를 항상 잠가두어야 미세한 가스 누출과 폭발 화재를 막을 수 있습니다." },
    { id: 122, question: "건물에서 화재 경보기가 울릴 때 '진짜 불이 아니겠지' 생각하고 가만히 앉아있어도 된다.", answer: "X", explanation: "틀려요! 오작동일지라도 항상 실제 화재로 생각하고 즉시 소지품을 챙기지 말고 대피해야 합니다." },
    { id: 123, question: "고층 건물에서 화재가 났을 때 아래층으로 대피하기 어렵다면 옥상으로 올라가 구조를 기다려야 한다.", answer: "O", explanation: "맞아요! 아래로 가는 계단이 불길과 연기로 막혔다면 옥상 출입문으로 대피해 바람을 맞으며 구조를 요청합니다." },
    { id: 124, question: "소화기를 쓸 때는 불의 윗부분(연기 나는 곳)을 향해 뿜어야 불이 잘 꺼진다.", answer: "X", explanation: "틀려요! 불꽃의 뿌리 부분(타고 있는 물건 아래쪽)을 향해 빗자루로 쓸 듯이 골고루 분사해야 합니다." },
    { id: 125, question: "119 구급차가 사이렌을 울리며 달려올 때는 도로 위의 차와 보행자가 길을 터주어 '모세의 기적'을 만들어야 한다.", answer: "O", explanation: "맞아요! 응급 환자의 골든타임을 지키기 위해 긴급 자동차에게 양보하는 것은 생명을 살리는 배려입니다." },
    { id: 126, question: "지진이 났을 때 집 안에서 가장 안전한 곳은 무거운 유리 장식장이나 책장 바로 옆이다.", answer: "X", explanation: "틀려요! 책장이나 장식장이 넘어지면서 깔릴 수 있으므로 가구가 없는 탁자 밑이나 넓은 공간이 안전합니다." },
    { id: 127, question: "태풍이 올 때는 유리창이 깨지지 않도록 창틀과 유리 사이에 틈이 없도록 테이프나 신문지로 단단히 고정한다.", answer: "O", explanation: "맞아요! 강풍에 창문이 흔들리지 않도록 창틀을 테이프로 고정하면 유리 파손을 크게 줄입니다." },
    { id: 128, question: "바닷가에서 너울성 파도가 칠 때 방파제 테트라포드(삼발이 콘크리트) 위에 올라가 기념사진을 찍어도 안전하다.", answer: "X", explanation: "틀려요! 테트라포드 틈으로 추락하면 스스로 빠져나오기 어렵고 파도에 휩쓸려 매우 위험합니다." },
    { id: 129, question: "물놀이 중 쥐(근육 경련)가 났을 때는 당황하지 않고 몸을 둥글게 웅크려 물에 뜬 뒤 엄지발가락을 몸 쪽으로 당긴다.", answer: "O", explanation: "맞아요! 발가락을 발등 쪽으로 젖혀 종아리 근육을 늘려주면 경련이 풀리고 안전하게 물 밖으로 나올 수 있습니다." },
    { id: 130, question: "캠핑장에서 텐트 문을 꽉 닫고 안에서 숯불이나 난로를 피우고 자도 일산화탄소 중독 위험이 없다.", answer: "X", explanation: "틀려요! 밀폐된 텐트 안에서 숯이나 난로를 켜면 치명적인 일산화탄소 중독으로 사망할 수 있어 절대 금지입니다." },
    { id: 131, question: "야외 숲길을 걸을 때는 독사나 벌을 피하기 위해 긴 바지와 긴소매 옷을 입고 풀숲을 헤치지 않는다.", answer: "O", explanation: "맞아요! 피부 노출을 줄이고 모자를 착용하면 벌레 물림과 뱀 물림, 풀독을 예방할 수 있습니다." },
    { id: 132, question: "산에서 길을 잃었을 때는 이리저리 산속을 헤매며 깊은 계곡 아래로 내려가는 것이 구조되기 쉽다.", answer: "X", explanation: "틀려요! 계곡은 시야가 좁고 위험하므로 등산로 능선 쪽이나 헬기 소리가 들리는 곳에서 체온을 유지하며 기다려야 합니다." },
    { id: 133, question: "놀이터 시소를 탈 때는 갑자기 서서 타거나 두 발로 발판 위에서 춤추지 않고 얌전히 앉아서 탄다.", answer: "O", explanation: "맞아요! 시소에서 일어서면 균형을 잃고 머리부터 떨어져 큰 부상을 입을 수 있습니다." },
    { id: 134, question: "집 주소나 가족의 주민등록번호, 비밀번호는 인터넷 게임 채팅창에 친구들에게 다 알려주어도 된다.", answer: "X", explanation: "틀려요! 개인정보가 유출되면 범죄에 악용되거나 큰 피해를 입을 수 있으므로 절대 공유하면 안 됩니다." },
    { id: 135, question: "스마트폰으로 모르는 사람이 보낸 의심스러운 문자 링크(URL)는 함부로 누르지 말고 삭제해야 한다.", answer: "O", explanation: "맞아요! 스미싱(문자 사기) 링크를 누르면 악성코드가 설치되어 개인정보와 돈이 털릴 수 있습니다." },
    { id: 136, question: "공공장소(키즈카페, 백화점 등)에서 부모님과 떨어졌을 때는 울면서 밖으로 멀리 뛰어나가 부모님을 찾아야 한다.", answer: "X", explanation: "틀려요! 멀리 가면 찾기 더 어려워지므로 안내 데스크나 직원에게 가서 '부모님을 잃어버렸어요'라고 도움을 청해야 합니다." },
    { id: 137, question: "자동심장충격기(AED)는 안내 음성이 나오는 대로 패드를 부착하고 버튼을 누르면 누구나 쉽게 사용할 수 있다.", answer: "O", explanation: "맞아요! AED는 기계가 환자 상태를 자동으로 분석하고 친절하게 한국어 음성으로 안내해 주므로 두려워하지 않고 사용할 수 있습니다." },
    { id: 138, question: "생선 가시가 손가락에 깊게 박혔을 때 녹슨 바늘로 상처를 마구 찔러서 파내도 덧나지 않는다.", answer: "X", explanation: "틀려요! 소독되지 않은 바늘은 파상풍 등 2차 세균 감염을 일으키므로 소독 후 핀셋을 쓰거나 병원을 찾아야 합니다." },
    { id: 139, question: "눈에 모래나 먼지가 들어갔을 때는 손으로 비비지 말고 깨끗한 식염수나 흐르는 물로 씻어내야 한다.", answer: "O", explanation: "맞아요! 눈을 비비면 각막에 상처가 생겨 시력이 손상될 수 있으므로 물로 살살 흘려보내야 합니다." },
    { id: 140, question: "개나 고양이 등 귀여운 동물이 길에 보이면 주인의 허락 없이 다가가서 갑자기 껴안거나 꼬리를 잡아당겨도 안전하다.", answer: "X", explanation: "틀려요! 놀란 동물이 방어하려고 물거나 할퀼 수 있으므로 반드시 주인에게 먼저 묻고 조심스럽게 다가가야 합니다." },
    { id: 141, question: "겨울철 빙판길을 걸을 때는 보폭을 평소보다 좁게 하고 펭귄처럼 무게중심을 살짝 앞으로 두고 걷는 것이 좋다.", answer: "O", explanation: "맞아요! 종종걸음으로 발바닥 전체를 지면에 디디며 걸으면 빙판길에서 넘어질 확률이 크게 줄어듭니다." },
    { id: 142, question: "여름철 차 안에 어린이나 반려동물을 창문만 살짝 열어두고 혼자 남겨두어도 차 안 온도가 올라가지 않는다.", answer: "X", explanation: "틀려요! 여름철 밀폐된 차 내부는 10분 만에 50도 이상으로 치솟아 열사병으로 질식할 수 있어 절대 남겨두면 안 됩니다." },
    { id: 143, question: "학교 폭력(언어 폭력, 따돌림, 신체 폭력 등)을 당하거나 목격했을 때는 주저하지 말고 선생님, 부모님, 117에 도움을 요청한다.", answer: "O", explanation: "맞아요! 학교 폭력은 혼자 참지 말고 경찰청 학교폭력 신고센터 117이나 믿을 수 있는 어른에게 알려야 합니다." },
    { id: 144, question: "횡단보도 신호등이 없는 골목길 교차로에서는 차가 멈추어 줄 것이라 믿고 그냥 휙 지나가도 된다.", answer: "X", explanation: "틀려요! 신호등이 없는 곳에서는 차가 언제든지 나타날 수 있으므로 좌우를 두 번 확인하고 건너야 합니다." },
    { id: 145, question: "엘리베이터를 타기 전에는 안에서 내리는 사람이 모두 내린 뒤에 차례대로 타야 부딪히지 않는다.", answer: "O", explanation: "맞아요! '내리는 사람 먼저' 에티켓을 지켜야 충돌이나 넘어짐 사고 없이 안전하게 이용할 수 있습니다." },
    { id: 146, question: "책상 모서리나 교실 출입문 손잡이에 모서리 보호대를 씌워두면 위험하니 다 떼어내야 한다.", answer: "X", explanation: "틀려요! 푹신한 모서리 보호대는 부딪혔을 때 타박상이나 찢어지는 상처를 막아주는 고마운 안전장치입니다." },
    { id: 147, question: "야간에 자전거를 탈 때는 앞쪽에는 흰색 전조등, 뒤쪽에는 빨간색 후미등을 켜서 내 위치를 알려야 한다.", answer: "O", explanation: "맞아요! 전조등과 후미등은 어두운 밤길에서 보행자와 차량에게 자전거의 존재를 알려 충돌을 막아줍니다." },
    { id: 148, question: "안전 교육이나 소방 대피 훈련 시간은 재미없는 시간이니 대충 장난치며 참여해도 된다.", answer: "X", explanation: "틀려요! 평소 훈련을 진지하게 해두어야 실제 위급 상황이 닥쳤을 때 침착하게 생명을 지킬 수 있습니다." },
    { id: 149, question: "미세먼지나 황사가 심한 날 귀가 후에는 손과 발을 깨끗이 씻고 양치질을 하여 먼지를 씻어낸다.", answer: "O", explanation: "맞아요! 몸에 묻은 유해 중금속과 미세먼지를 깨끗이 씻어내야 호흡기 질환과 피부 트러블을 예방합니다." },
    { id: 150, question: "나의 안전도 중요하고, 친구의 안전을 배려하며 서로 지켜주는 마음이 안전한 학교를 만든다.", answer: "O", explanation: "맞아요! 서로를 배려하는 따뜻한 안전 의식이 모두가 행복하고 안전한 학교와 사회를 만듭니다! 🚦❤️" }
  ]
};

// ==========================================
// 2. AUDIO SYNTHESIZER (Web Audio API)
// ==========================================
class SoundFX {
  constructor() {
    this.ctx = null;
    this.muted = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playClick() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(520, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.05);
    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }

  playOptionSelect() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(659.25, this.ctx.currentTime); // E5
    gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);
  }

  playCorrect() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = freq;
      const startTime = this.ctx.currentTime + idx * 0.08;
      gain.gain.setValueAtTime(0.25, startTime);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(startTime);
      osc.stop(startTime + 0.3);
    });
  }

  playWrong() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, this.ctx.currentTime);
    osc.frequency.setValueAtTime(180, this.ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.25);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.25);
  }

  playMelodyTune(onComplete) {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const melody = [
      { f: 392.00, d: 0.35 }, { f: 440.00, d: 0.35 }, { f: 523.25, d: 0.6 }, { f: 523.25, d: 0.35 },
      { f: 587.33, d: 0.35 }, { f: 659.25, d: 0.6 }, { f: 587.33, d: 0.35 }, { f: 523.25, d: 0.7 }
    ];

    let now = this.ctx.currentTime;
    melody.forEach(note => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.value = note.f;
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + note.d);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + note.d);
      now += note.d + 0.05;
    });

    if (onComplete) {
      setTimeout(onComplete, (now - this.ctx.currentTime) * 1000);
    }
  }

  playApplause() {
    if (this.muted) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;

    // 1. Multi-clap noise bursts to simulate enthusiastic audience applause
    const sampleRate = this.ctx.sampleRate;
    const clapLen = Math.floor(sampleRate * 0.05); // 50ms per clap pulse
    const clapBuffer = this.ctx.createBuffer(1, clapLen, sampleRate);
    const data = clapBuffer.getChannelData(0);
    for (let i = 0; i < clapLen; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (clapLen * 0.25));
    }

    // Schedule ~70 randomized clapping pulses over 2.5 seconds
    for (let i = 0; i < 70; i++) {
      const time = now + Math.random() * 2.2;
      const src = this.ctx.createBufferSource();
      src.buffer = clapBuffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.value = 700 + Math.random() * 1600;
      filter.Q.value = 1.0 + Math.random() * 1.5;

      const gain = this.ctx.createGain();
      const vol = 0.12 + Math.random() * 0.22;
      gain.gain.setValueAtTime(vol, time);
      gain.gain.exponentialRampToValueAtTime(0.001, time + 0.05);

      src.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      src.start(time);
    }

    // 2. Triumphant Fanfare Arpeggio
    const fanfareNotes = [
      { f: 523.25, t: 0, d: 0.2 },    // C5
      { f: 659.25, t: 0.15, d: 0.2 }, // E5
      { f: 783.99, t: 0.3, d: 0.2 },  // G5
      { f: 1046.50, t: 0.45, d: 0.7 } // C6
    ];

    fanfareNotes.forEach(note => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(note.f, now + note.t);

      gain.gain.setValueAtTime(0.3, now + note.t);
      gain.gain.exponentialRampToValueAtTime(0.001, now + note.t + note.d);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + note.t);
      osc.stop(now + note.t + note.d);
    });
  }
}

const sfx = new SoundFX();

// ==========================================
// 3. GAME STATE & RANDOM SELECTION
// ==========================================
function getRandomQuestions(allQuestions, count = 10) {
  const oList = allQuestions.filter(q => q.answer === 'O');
  const xList = allQuestions.filter(q => q.answer === 'X');

  const shuffle = (arr) => {
    const list = [...arr];
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    return list;
  };

  const shuffledO = shuffle(oList);
  const shuffledX = shuffle(xList);

  const half = Math.floor(count / 2);
  const selected = [
    ...shuffledO.slice(0, half),
    ...shuffledX.slice(0, count - half)
  ];

  let finalQuestions = shuffle(selected);

  // Prevent more than 2 consecutive same answers for better variety
  for (let attempts = 0; attempts < 15; attempts++) {
    let has3InARow = false;
    for (let i = 0; i < finalQuestions.length - 2; i++) {
      if (finalQuestions[i].answer === finalQuestions[i+1].answer && 
          finalQuestions[i+1].answer === finalQuestions[i+2].answer) {
        has3InARow = true;
        break;
      }
    }
    if (!has3InARow) break;
    finalQuestions = shuffle(selected);
  }

  return finalQuestions;
}

const state = {
  questions: [], // 1회 세션당 추출된 10문제
  currentIndex: 0,
  score: 0,
  correctCount: 0,
  timeRemaining: 300, // 5분
  timerInterval: null,
  userAnswers: {}, // Map questionIndex -> chosen answer 'O' | 'X'
  isAnswered: {}, // Map questionIndex -> boolean
  isCompleted: false
};

// ==========================================
// 4. AUTO-SCALING KIOSK ENGINE
// ==========================================
function setupAutoScaling() {
  const stage = document.getElementById('app-stage');
  if (!stage) return;

  function updateScale() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const scaleX = windowWidth / 1080;
    const scaleY = windowHeight / 1920;
    const scale = Math.min(scaleX, scaleY);

    stage.style.transform = `scale(${scale})`;
  }

  window.addEventListener('resize', updateScale);
  updateScale();
}

// ==========================================
// 5. VIEW RENDER ENGINE
// ==========================================

function initGameSession() {
  state.questions = getRandomQuestions(QUIZ_DATA.questions, 10);
  state.currentIndex = 0;
  state.score = 0;
  state.correctCount = 0;
  state.timeRemaining = 300; // 5분
  state.userAnswers = {};
  state.isAnswered = {};
  state.isCompleted = false;

  startTimer();
  renderMainGameUI();
}

function startTimer() {
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerInterval = setInterval(() => {
    state.timeRemaining--;
    updateTimerDisplay();

    if (state.timeRemaining <= 0) {
      clearInterval(state.timerInterval);
      sfx.playWrong();
      showResultModal();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const timerBadge = document.getElementById('timer-pill-badge');
  if (timerBadge) {
    const mins = Math.floor(state.timeRemaining / 60);
    const secs = state.timeRemaining % 60;
    const timeStr = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    
    timerBadge.innerHTML = `⏱ 남은 시간 ${timeStr}`;
    
    if (state.timeRemaining <= 30) {
      timerBadge.classList.add('warning');
    } else {
      timerBadge.classList.remove('warning');
    }
  }
}

function renderMainGameUI() {
  const qData = state.questions[state.currentIndex];
  const totalQ = state.questions.length;
  const main = document.getElementById('view-container');
  const footer = document.getElementById('app-footer');

  const selectedChoice = state.userAnswers[state.currentIndex] || null;
  const answered = state.isAnswered[state.currentIndex] || false;
  const isCorrect = answered && selectedChoice === qData.answer;

  const imgOSrc = selectedChoice === 'O' ? '/image_o_2.png' : '/image_o-1.png';
  const imgXSrc = selectedChoice === 'X' ? '/image_x_2.png' : '/image_x-1.png';

  // Chalkboard Question Content
  const chalkboardContentHtml = `
    <!-- Question Number Badge -->
    <div class="chalk-header-badge-row">
      <span class="chalk-badge-qnum">문제 ${state.currentIndex + 1} / ${totalQ}</span>
    </div>

    <!-- Question Text Card -->
    <div class="chalk-question-box">
      <p class="chalk-question-text">
        "${qData.question}"
      </p>
    </div>

    <!-- Answer Feedback & Detailed Educational Explanation Banner -->
    ${answered ? `
      <div class="chalk-explanation-box ${isCorrect ? 'exp-correct' : 'exp-wrong'}">
        <div class="exp-header">
          <span class="exp-icon">${isCorrect ? '🎉' : '💡'}</span>
          <span class="exp-status-text">${isCorrect ? '정답입니다!' : '아쉽네요! (정답: ' + qData.answer + ')'}</span>
        </div>
        <p class="exp-body-text">
          ${qData.explanation}
        </p>
      </div>
    ` : ''}
  `;

  main.innerHTML = `
    <!-- Title Banner Area -->
    <div class="title-banner-wrapper">
      <div class="title-center-block">
        <img src="/image2432.png" alt="안전상식 OX 퀴즈" class="title-text-img" referrerPolicy="no-referrer" />
        <div id="timer-pill-badge" class="timer-pill-badge">
          ⏱ 남은 시간 05:00
        </div>
      </div>
    </div>

    <!-- Main Green Chalkboard -->
    <div class="chalkboard-container">
      ${chalkboardContentHtml}

      <!-- Chalkboard Bottom Ledge Tray -->
      <div class="chalkboard-tray">
        <div class="tray-eraser"></div>
        <div class="tray-chalks-row">
          <div class="chalk-stick chalk-white"></div>
          <div class="chalk-stick chalk-yellow"></div>
          <div class="chalk-stick chalk-pink"></div>
          <div class="chalk-stick chalk-blue"></div>
        </div>
      </div>
    </div>

    <!-- Bottom O / X Choice Selection Box Tray (칠판 아래 O / X 선택칸) -->
    <div class="ox-selection-tray">
      <div class="ox-buttons-grid">
        <button id="btn-choice-o" class="ox-btn ox-btn-o ${selectedChoice === 'O' ? 'selected' : ''} ${answered && qData.answer === 'O' ? 'is-answer' : ''}">
          <img src="${imgOSrc}" alt="O" class="ox-img" referrerPolicy="no-referrer">
        </button>

        <button id="btn-choice-x" class="ox-btn ox-btn-x ${selectedChoice === 'X' ? 'selected' : ''} ${answered && qData.answer === 'X' ? 'is-answer' : ''}">
          <img src="${imgXSrc}" alt="X" class="ox-img" referrerPolicy="no-referrer">
        </button>
      </div>

      <!-- Control Buttons Row directly under OX Tray -->
      <div class="keypad-actions-row">
        <button id="btn-next-q" class="ctrl-btn ctrl-btn-pri" ${!answered ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : ''}>
          <span>${state.currentIndex < totalQ - 1 ? '다음 문제' : '결과 보기'}</span>
        </button>
      </div>
    </div>
  `;

  updateTimerDisplay();
  footer.innerHTML = '';
  attachEventHandlers();
}

function handleAnswerSelection(choice) {
  const qData = state.questions[state.currentIndex];
  state.userAnswers[state.currentIndex] = choice;
  state.isAnswered[state.currentIndex] = true;

  const isCorrect = choice === qData.answer;

  if (isCorrect) {
    sfx.playCorrect();
    triggerCelebrationConfetti();
    state.correctCount++;
    state.score += 10;
    showToast("정답입니다! 🎉👏", false);
  } else {
    sfx.playWrong();
    showToast("아쉬워요! 💡", true);
  }

  renderMainGameUI();
}

function attachEventHandlers() {
  const totalQ = state.questions.length;

  // O Button Click
  const btnO = document.getElementById('btn-choice-o');
  if (btnO) {
    btnO.addEventListener('click', () => {
      sfx.playOptionSelect();
      handleAnswerSelection('O');
    });
  }

  // X Button Click
  const btnX = document.getElementById('btn-choice-x');
  if (btnX) {
    btnX.addEventListener('click', () => {
      sfx.playOptionSelect();
      handleAnswerSelection('X');
    });
  }

  // Prev Button
  const btnPrev = document.getElementById('btn-prev-q');
  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      if (state.currentIndex > 0) {
        sfx.playClick();
        state.currentIndex--;
        renderMainGameUI();
      }
    });
  }

  // Next Question or Result Button
  const btnNext = document.getElementById('btn-next-q');
  if (btnNext) {
    btnNext.addEventListener('click', () => {
      if (btnNext.disabled || btnNext.dataset.submitting === 'true' || document.querySelector('.result-overlay')) return;

      sfx.playClick();
      if (state.currentIndex < totalQ - 1) {
        state.currentIndex++;
        renderMainGameUI();
      } else {
        btnNext.disabled = true;
        btnNext.dataset.submitting = 'true';
        btnNext.style.opacity = '0.5';
        btnNext.style.cursor = 'not-allowed';

        if (state.timerInterval) clearInterval(state.timerInterval);
        showResultModal();
      }
    });
  }

  // Reset Selection Button
  const btnReset = document.getElementById('btn-reset-q');
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      sfx.playClick();
      delete state.userAnswers[state.currentIndex];
      delete state.isAnswered[state.currentIndex];
      renderMainGameUI();
    });
  }
}

function showToast(message, isWrong = false) {
  const stage = document.getElementById('app-stage');
  if (!stage) return;

  const existingToast = document.querySelector('.game-toast-popup');
  if (existingToast) existingToast.remove();

  const toast = document.createElement('div');
  toast.className = `game-toast-popup ${isWrong ? 'wrong-toast' : 'success-toast'}`;
  toast.innerHTML = `
    <div class="toast-icon">${isWrong ? '💡' : '💯'}</div>
    <div class="toast-text">${message}</div>
  `;

  stage.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => {
      if (toast.parentNode) toast.remove();
    }, 400);
  }, 700);
}

function showResultModal() {
  const stage = document.getElementById('app-stage');
  if (!stage) return;

  if (document.querySelector('.result-overlay')) return;

  const totalQ = state.questions.length || 10;
  const finalScore = Math.round((state.correctCount / totalQ) * 100);

  if (finalScore === 100) {
    sfx.playApplause();
  } else {
    sfx.playMelodyTune();
  }

  let medalIcon = '🏆';
  let evalText = '안전 지킴이 어린이 박사!';
  if (finalScore === 100) {
    medalIcon = '🥇';
    evalText = '안전 수칙 완벽 Master!';
  } else if (finalScore >= 70) {
    medalIcon = '🥈';
    evalText = '멋진 안전 지킴이!';
  } else {
    medalIcon = '🥉';
    evalText = '더 안전한 생활을 위해 재도전해보세요!';
  }

  const modalHtml = `
    <div class="result-overlay">
      <div class="result-dialog">
        <div class="result-trophy">${medalIcon}</div>
        <h2 class="result-title-text">${evalText}</h2>
        
        <div class="result-score-big">${finalScore} 점</div>
        <div class="result-correct-detail">총 ${totalQ} 문제 중 <b>${state.correctCount}</b> 문제 정답!</div>

        <div style="font-size: 30px; color: #1e3a8a; font-weight: 700; line-height: 1.45; background: #eff6ff; border: 2px solid #bfdbfe; padding: 24px; border-radius: 20px; width: 100%; text-align: center;">
          언제 어디서나 안전 수칙을 지켜요!<br>
          나와 친구들의 안전을 지키는 멋진 어린이! 🚦✨
        </div>

        <div style="display: flex; gap: 20px; width: 100%; margin-top: 20px;">
          <button id="btn-modal-retry" class="ctrl-btn ctrl-btn-pri" style="height: 100px;">
            <span>다시 풀어보기</span>
          </button>
        </div>
      </div>
    </div>
  `;

  stage.insertAdjacentHTML('beforeend', modalHtml);
  triggerCelebrationConfetti();

  const retryBtn = document.getElementById('btn-modal-retry');
  if (retryBtn) {
    retryBtn.addEventListener('click', () => {
      sfx.playClick();
      const overlay = document.querySelector('.result-overlay');
      if (overlay) overlay.remove();
      initGameSession();
    });
  }
}

// ==========================================
// 6. INITIALIZATION & GLOBAL LISTENERS
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  setupAutoScaling();

  // Top-Left Global Circular Back Button
  const btnGlobalBack = document.getElementById('btn-global-back');
  if (btnGlobalBack) {
    btnGlobalBack.addEventListener('click', () => {
      sfx.playClick();
      window.location.href = 'https://claix-quiz-list6-bp67.vercel.app/';
    });
  }

  // Header Back Button
  const btnBack = document.getElementById('btn-back');
  if (btnBack) {
    btnBack.addEventListener('click', () => {
      sfx.playClick();
      initGameSession();
    });
  }

  // Header Home / Close Button
  const btnClose = document.getElementById('btn-close');
  if (btnClose) {
    btnClose.addEventListener('click', () => {
      sfx.playClick();
      initGameSession();
    });
  }

  // Start initial game session immediately
  initGameSession();
});
