// ==========================================
// 1. A8.net 広告リスト
// ==========================================
const adList = [
  // 1個目（ゲオのレンタル）
  `<a href="https://px.a8.net/svt/ejp?a8mat=4BEPPT+17GNXU+2D8M+NY1YA" rel="nofollow">映画、ドラマ、音楽などなど。お探しのタイトル、ここなら見つかるかも？「ゲオ宅配レンタル」</a><img border="0" width="1" height="1" src="https://www18.a8.net/0.gif?a8mat=4BEPPT+17GNXU+2D8M+NY1YA" alt="">`,

  // 2個目（バナー広告 ※改行をなくして1行にしています）
  `<a href="https://px.a8.net/svt/ejp?a8mat=4BEPPT+3K07UA+3EV2+ZRXQP" rel="nofollow"><img border="0" width="300" height="250" alt="" src="https://www21.a8.net/svt/bgt?aid=261026993215&wid=001&eno=01&mid=s00000015923006009000&mc=1"></a><img border="0" width="1" height="1" src="https://www17.a8.net/0.gif?a8mat=4BEPPT+3K07UA+3EV2+ZRXQP" alt="">`
];

// 配列からランダムに1つ選ぶ関数
function getRandomAd(ads) {
  const index = Math.floor(Math.random() * ads.length);
  return ads[index];
}

// ページ読み込み時に各枠へランダムな広告を挿入する
window.addEventListener('DOMContentLoaded', () => {
  if (adList.length === 0) return;

  const top1 = document.getElementById('top-ad-1');
  const top2 = document.getElementById('top-ad-2');
  const bottom1 = document.getElementById('bottom-ad-1');
  const bottom2 = document.getElementById('bottom-ad-2');

  if (top1) top1.innerHTML = getRandomAd(adList);
  if (top2) top2.innerHTML = getRandomAd(adList);
  if (bottom1) bottom1.innerHTML = getRandomAd(adList);
  if (bottom2) bottom2.innerHTML = getRandomAd(adList);
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