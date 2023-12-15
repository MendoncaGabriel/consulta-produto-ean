document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('barcode-video');
    const resultDiv = document.getElementById('barcode-result');

    Quagga.init({
        inputStream: {
            name: 'Live',
            type: 'LiveStream',
            target: video,
            constraints: {
                width: 640,
                height: 480,
                facingMode: 'environment',
            },
        },
        decoder: {
            readers: ['ean_reader'],
        },
    }, function (err) {
        if (err) {
            console.error(err);
            return;
        }
        Quagga.start();
    });

    Quagga.onDetected(function (data) {
        const code = data.codeResult.code;
        resultDiv.textContent = 'Código de Barras: ' + code;
        resultDiv.style.display = 'block';
        // Aqui você pode adicionar lógica adicional com o código de barras detectado
    });
});
