const speakWord = (text) => {
    if (!text) {
        return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";
    window.speechSynthesis.speak(utterance);
}

export default speakWord;