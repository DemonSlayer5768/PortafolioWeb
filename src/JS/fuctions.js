// functions.js

// Funcion para mandar correo
export const handleContact = () => {
  const email = "jjaimeloza5768@gmail.com";

  const subject = "Contacto desde la página web";
  const body = "Hola Jonathan, me gustaría ponerme en contacto contigo.";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
};

// Funcion para descargar el CV como PDF
export const handleDownloadCV = () => {
  // console.log("presionado");

  const link = document.createElement("a");
  link.href = "/files/cvJonathan.pdf";
  link.download = "JonathanCV.pdf";
  link.click();
};
