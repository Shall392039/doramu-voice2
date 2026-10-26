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

  // 声の高さは固定
  utterThis.pitch = 1.2;

  // スマホとPCで速度を個別に調整
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

// ドラムロール音生成関数
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