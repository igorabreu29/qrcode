import React from 'react';
import './style.css';

import HtmlQrCode from '../components/HtmlQrCode';

export default function App() {
  const [decodedResults, setDecodedResults] = React.useState([]);
  const [decodedTextContent, setDecodedTextContent] = React.useState('');

  const onNewScanResult = (decodedText, decodedResult) => {
    setDecodedResults(decodedResult);
    setDecodedTextContent(decodedText);
  };

  return (
    <div>
      <HtmlQrCode
        fps={10}
        qrbox={250}
        disableFlip={false}
        qrCodeSuccessCallback={onNewScanResult}
      />

      <div>
        <pre>{JSON.stringify(decodedResults, null, 2)}</pre>
        <span>{decodedTextContent}</span>
      </div>
    </div>
  );
}
