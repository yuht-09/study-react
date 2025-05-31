"use client";

import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const [isClient, setIsClient] = useState(false);
  const [clientSupportsSpeechRecognition, setClientSupportsSpeechRecognition] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setClientSupportsSpeechRecognition(browserSupportsSpeechRecognition);
  }, [browserSupportsSpeechRecognition]);

  if (!isClient) {
    return null;
  }

  if (!clientSupportsSpeechRecognition) {
    return <div>Browser doesn&apos;t support speech recognition.</div>;
  }

  return (
    <div>
      <p>Microphone: {listening ? 'on' : 'off'}</p>
      <button onClick={() => SpeechRecognition.startListening({ continuous: true })}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};

// 直接Dictaphoneコンポーネントをエクスポート
export default Dictaphone;
