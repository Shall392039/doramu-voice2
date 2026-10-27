// ==========================================
// 1. A8.net 広告リスト
// ==========================================
const adList = [
  // 1個目
  `<a href="https://px.a8.net/svt/ejp?a8mat=4BEPPT+17GNXU+2D8M+NV1XD" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www25.a8.net/svt/bgt?aid=261026993073&wid=001&eno=01&mid=s00000011047004008000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=4BEPPT+17GNXU+2D8M+NV1XD" alt="">`,

  // 2個目
  `<a href="https://px.a8.net/svt/ejp?a8mat=4BEPPT+3K07UA+3EV2+ZRXQP" rel="nofollow"><img border="0" width="300" height="250" alt="" src="https://www21.a8.net/svt/bgt?aid=261026993215&wid=001&eno=01&mid=s00000015923006009000&mc=1"></a><img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=4BEPPT+3K07UA+3EV2+ZRXQP" alt="">`,

  // 3個目
  `<a href="https://px.a8.net/svt/ejp?a8mat=4BEPQ0+AVR8TU+2YEU+6DC69" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www23.a8.net/svt/bgt?aid=261027000658&wid=001&eno=01&mid=s00000013791001070000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www15.a8.net/0.gif?a8mat=4BEPQ0+AVR8TU+2YEU+6DC69" alt="">`,

  // 4個目
  `<a href="https://px.a8.net/svt/ejp?a8mat=4BEPQ0+AMTQR6+3L4C+601S1" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www22.a8.net/svt/bgt?aid=261027000643&wid=001&eno=01&mid=s00000016734001008000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4BEPQ0+AMTQR6+3L4C+601S1" alt="">`,

  // 5個目
  `<a href="https://px.a8.net/svt/ejp?a8mat=4BEPQ0+GGZRAQ+1N1U+6GJWX" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www26.a8.net/svt/bgt?aid=261027000996&wid=001&eno=01&mid=s00000007653001085000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=4BEPQ0+GGZRAQ+1N1U+6GJWX" alt="">`,

  // 6個目
  `<a href="https://px.a8.net/svt/ejp?a8mat=4BEPQ1+DOZOY+5PM8+5YZ75" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www28.a8.net/svt/bgt?aid=261027001023&wid=001&eno=01&mid=s00000026648001003000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www11.a8.net/0.gif?a8mat=4BEPQ1+DOZOY+5PM8+5YZ75" alt="">`,

  // 7個目
  `<a href="https://px.a8.net/svt/ejp?a8mat=4BEPQ1+FHAIA+4EKW+HXKQP" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www27.a8.net/svt/bgt?aid=261027001026&wid=001&eno=01&mid=s00000020552003012000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=4BEPQ1+FHAIA+4EKW+HXKQP" alt="">`,

  // 8個目
  `<a href="https://px.a8.net/svt/ejp?a8mat=4BEPQ1+KU6YA+2DS2+BZGEP" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www20.a8.net/svt/bgt?aid=261027001035&wid=001&eno=01&mid=s00000011117002013000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=4BEPQ1+KU6YA+2DS2+BZGEP" alt="">`,

  // 9個目
  `<a href="https://px.a8.net/svt/ejp?a8mat=4BEPQ1+SKTTE+2SJG+614CX" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www20.a8.net/svt/bgt?aid=261027001048&wid=001&eno=01&mid=s00000013030001013000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=4BEPQ1+SKTTE+2SJG+614CX" alt="">`,

  // 10個目
  `<a href="https://px.a8.net/svt/ejp?a8mat=4BEPQ1+S2+22KG+C2VV5" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www22.a8.net/svt/bgt?aid=261027001000&wid=001&eno=01&mid=s00000009664002029000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=4BEPQ1+S2+22KG+C2VV5" alt="">`,

  // 11個目
  `<a href="https://px.a8.net/svt/ejp?a8mat=4BEPQ1+ZQ12Q+46NM+NV1XD" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www20.a8.net/svt/bgt?aid=261027001060&wid=001&eno=01&mid=s00000019525004008000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www19.a8.net/0.gif?a8mat=4BEPQ1+ZQ12Q+46NM+NV1XD" alt="">`,

  // 12個目
  `<a href="https://px.a8.net/svt/ejp?a8mat=4BEPQ1+1AFTYQ+300M+BXYE9" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www29.a8.net/svt/bgt?aid=261027001078&wid=001&eno=01&mid=s00000013999002006000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=4BEPQ1+1AFTYQ+300M+BXYE9" alt="">`,

  // 13個目
  `<a href="https://px.a8.net/svt/ejp?a8mat=4BEPQ1+1BMP6A+1QM6+I8XOX" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www20.a8.net/svt/bgt?aid=261027001080&wid=001&eno=01&mid=s00000008115003065000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=4BEPQ1+1BMP6A+1QM6+I8XOX" alt="">`,

  // 14個目
  `<a href="https://px.a8.net/svt/ejp?a8mat=4BEPQ1+1OQ8HE+2CYM+67RK1" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www26.a8.net/svt/bgt?aid=261027001102&wid=001&eno=01&mid=s00000011011001044000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4BEPQ1+1OQ8HE+2CYM+67RK1" alt="">`,

  // 15個目
  `<a href="https://px.a8.net/svt/ejp?a8mat=4BEPQ1+1U34XE+2CG0+64RJ5" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www22.a8.net/svt/bgt?aid=261027001111&wid=001&eno=01&mid=s00000010944001030000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www16.a8.net/0.gif?a8mat=4BEPQ1+1U34XE+2CG0+64RJ5" alt="">`,

  // 16個目
  `<a href="https://px.a8.net/svt/ejp?a8mat=4BEPQ1+1YULRM+3PFM+6ARKX" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www27.a8.net/svt/bgt?aid=261027001119&wid=001&eno=01&mid=s00000017293001058000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www14.a8.net/0.gif?a8mat=4BEPQ1+1YULRM+3PFM+6ARKX" alt="">`,

  // 17個目
  `<a href="https://px.a8.net/svt/ejp?a8mat=4BEPQ1+23M2LU+5JEM+5ZEMP" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www25.a8.net/svt/bgt?aid=261027001127&wid=001&eno=01&mid=s00000025843001005000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www12.a8.net/0.gif?a8mat=4BEPQ1+23M2LU+5JEM+5ZEMP" alt="">`,

  // 18個目（最後の要素なのでカンマはなくてもOKですが、つけておいても問題ありません）
  `<a href="https://px.a8.net/svt/ejp?a8mat=4BEPQ1+2HWH4I+4X44+BYLJL" rel="nofollow">
<img border="0" width="300" height="250" alt="" src="https://www24.a8.net/svt/bgt?aid=261027001151&wid=001&eno=01&mid=s00000022954002009000&mc=1"></a>
<img border="0" width="1" height="1" src="https://www13.a8.net/0.gif?a8mat=4BEPQ1+2HWH4I+4X44+BYLJL" alt="">`
];

function getUniqueRandomAds(ads, count) {
  const validAds = ads.filter(ad => ad.trim() !== '');
  if (validAds.length === 0) return Array(count).fill('');

  const shuffled = [...validAds].sort(() => Math.random() - 0.5);

  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(shuffled[i % shuffled.length]);
  }
  return result;
}

window.addEventListener('DOMContentLoaded', () => {
  const top1 = document.getElementById('top-ad-1');
  const top2 = document.getElementById('top-ad-2');
  const bottom1 = document.getElementById('bottom-ad-1');
  const bottom2 = document.getElementById('bottom-ad-2');

  const selectedAds = getUniqueRandomAds(adList, 4);

  if (top1) top1.innerHTML = selectedAds[0];
  if (top2) top2.innerHTML = selectedAds[1];
  if (bottom1) bottom1.innerHTML = selectedAds[2];
  if (bottom2) bottom2.innerHTML = selectedAds[3];
});

// ==========================================
// 2. 音声読み上げ機能
// ==========================================
const synth = window.speechSynthesis;

function speakText() {
  if (synth.speaking) {
    synth.cancel();
  }

  const text = document.getElementById('textInput').value.trim();
  if (!text) {
    alert('読み上げるテキストを入力してください');
    return;
  }

  const utterThis = new SpeechSynthesisUtterance(text);
  
  const voices = synth.getVoices();
  const jaVoices = voices.filter(voice => voice.lang.includes('ja') || voice.lang.includes('JA'));
  
  let targetVoice = jaVoices.find(voice => voice.name.includes('Google'));
  if (!targetVoice && jaVoices.length > 0) {
    targetVoice = jaVoices[0];
  }
  
  if (targetVoice) {
    utterThis.voice = targetVoice;
  }

  utterThis.pitch = 1.2;

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    utterThis.rate = 1.0;
  } else {
    utterThis.rate = 1.15;
  }

  window.currentUtterance = utterThis;
  synth.speak(utterThis);
}

function stopSpeech() {
  if (synth.speaking) {
    synth.cancel();
  }
}

// ==========================================
// 3. ドラムロール効果音生成
// ==========================================
function playDrumRoll() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const ctx = new AudioContext();

  const bufferSize = ctx.sampleRate * 2.5;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  const noise = ctx.createBufferSource();
  noise.buffer = buffer;

  const filter = ctx.createBiquadFilter();
  filter.type = 'highpass';
  filter.frequency.value = 1000;

  const gainNode = ctx.createGain();
  const now = ctx.currentTime;
  
  const duration = 2.0;
  const hits = 35;
  for (let i = 0; i < hits; i++) {
    const time = now + (i / hits) * duration;
    const volume = 0.1 + (i / hits) * 0.4;
    gainNode.gain.setValueAtTime(volume, time);
    gainNode.gain.exponentialRampToValueAtTime(0.01, time + 0.04);
  }

  noise.connect(filter);
  filter.connect(gainNode);
  gainNode.connect(ctx.destination);

  noise.start(now);
  noise.stop(now + duration);

  setTimeout(() => {
    const cymbalNow = ctx.currentTime;
    const cymbalBuffer = ctx.createBuffer(1, ctx.sampleRate * 1.5, ctx.sampleRate);
    const cymbalData = cymbalBuffer.getChannelData(0);
    for (let i = 0; i < cymbalData.length; i++) {
      cymbalData[i] = Math.random() * 2 - 1;
    }
    const cymbal = ctx.createBufferSource();
    cymbal.buffer = cymbalBuffer;

    const cymbalFilter = ctx.createBiquadFilter();
    cymbalFilter.type = 'highpass';
    cymbalFilter.frequency.value = 3000;

    const cymbalGain = ctx.createGain();
    cymbalGain.gain.setValueAtTime(0.8, cymbalNow);
    cymbalGain.gain.exponentialRampToValueAtTime(0.001, cymbalNow + 1.2);

    cymbal.connect(cymbalFilter);
    cymbalFilter.connect(cymbalGain);
    cymbalGain.connect(ctx.destination);

    cymbal.start(cymbalNow);
  }, duration * 1000);
}

if (synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = () => { synth.getVoices(); };
}
synth.getVoices();