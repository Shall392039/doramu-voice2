const synth = window.speechSynthesis;
let selectedVoice = null;

function setVoice() {
  const voices = synth.getVoices();
  
  // 日本語音声のリストを取得
  const jaVoices = voices.filter(voice => voice.lang.includes('ja') || voice.lang.includes('JA'));
  
  // 1. "Google" が含まれる日本語音声を最優先で検索
  selectedVoice = jaVoices.find(voice => voice.name.includes('Google'));

  // 2. なければ、最初に見つかった日本語音声を割り当て
  if (!selectedVoice && jaVoices.length > 0) {
    selectedVoice = jaVoices[0];
  }

  // 3. 日本語音声が見つからない場合のフォールバック（全体から検索）
  if (!selectedVoice && voices.length > 0) {
    selectedVoice = voices[0];
  }
}

setVoice();
if (synth.onvoiceschanged !== undefined) {
  synth.onvoiceschanged = setVoice;
}

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
  
  // 自動選択した Google 日本語（または代替音声）をセット
  if (selectedVoice) {
    utterThis.voice = selectedVoice;
  }

  // 高さ（初期値: 1.2）とスピード（初期値: 1.15）を取得
  utterThis.pitch = parseFloat(document.getElementById('pitchRange').value);
  utterThis.rate = parseFloat(document.getElementById('rateRange').value);

  synth.speak(utterThis);
}

function stopSpeech() {
  if (synth.speaking) {
    synth.cancel();
  }
}