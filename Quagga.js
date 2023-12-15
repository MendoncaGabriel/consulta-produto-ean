const Quagga = require('quagga');

Quagga.init({
  inputStream: {
    name: 'Live',
    type: 'LiveStream',
    target: document.querySelector('#barcode-scanner'),
  },
  decoder: {
    readers: ['ean_reader']
  }
});

Quagga.onDetected(result => {
  console.log('Código de barras detectado:', result.codeResult.code);
});

Quagga.start();
