// functions.js
console.log("si llego aqui");
export const handleContact = () => {
  console.log("presionado");
  const email = "jjaimeloza5768@gmail.com";

  const subject = "Contacto desde la página web";
  const body = "Hola Jonathan, me gustaría ponerme en contacto contigo.";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
};

// Función para descargar el CV como PDF
export const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href = "/ruta/del/archivo/CV.pdf";
  link.download = "CV_Jonathan.pdf";
  link.click();
};
