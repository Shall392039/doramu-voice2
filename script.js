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

  // 声の高さは固定（1.2）
  utterThis.pitch = 1.2;

  // スマホとPCで速度を個別に調整してPCのスピード感に合わせる
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    utterThis.rate = 1.0; // スマホ側の速度（早すぎる場合は 0.9 などに下げられます）
  } else {
    utterThis.rate = 1.15; // PC側の速度
  }

  window.currentUtterance = utterThis;
  synth.speak(utterThis);
}

function stopSpeech() {
  if (synth.speaking) {
    synth.cancel();
  }
}

if (synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = () => { synth.getVoices(); };
}
synth.getVoices();