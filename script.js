   // Para descargar en formato PDF

   function downloadPDF() {
    // Load print-optimized CSS
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'print-style.css';
    link.media = 'all';

    // Clone the body and apply the print stylesheet
    var body = document.body.cloneNode(true);
    body.appendChild(link);
    
    var opt = {
        margin:       [15, 15, 15, 15],
        filename:     'CV-Hector Daniel-Ayarachi Fuentes.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'mm', format: 'a2', orientation: 'portrait' }
    };

    html2pdf().from(body).set(opt).save();
}