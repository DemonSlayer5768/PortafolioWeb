// functions.js
console.log("si entra a fuctions");

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

// Funcion para descargar el CV como PDF
export const handleDownloadCV = () => {
  console.log("presionado");

  const link = document.createElement("a");
  link.href = "/ruta/del/archivo/CV.pdf";
  link.download = "CV_Jonathan.pdf";
  link.click();
};

//Funcion para cambiar el bg dela nav-bar
export const changeScroll = () => {
  console.log("si baja");

  const navbar = document.querySelector("nav");
  const sections = document.querySelectorAll("section[id]");
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navbar?.classList.add("bg-gray-800");
      } else {
        navbar?.classList.remove("bg-gray-800");
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
};
