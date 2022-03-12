import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import './QRReader.css';

const QRReader = () => {
  const [data, setData] = useState('No result');
 
  return (
    <>
      <QrReader
        className='qr-reader'
        constraints={{ facingMode: 'environment' }}
        onResult={(result: any, error: any) => {
          if (!!result) {
            setData(result?.text);
          }

          if (!!error) {
            console.info(error);
          }
        }}
      />
      <div className="data">{data}</div>
    </>
  );
};

export default QRReader;