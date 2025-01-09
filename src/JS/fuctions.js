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
  link.href = "../src/files/JONATHAN-CV.pdf";
  link.download = "CV_Jonathan.pdf";
  link.click();
};

// //Funcion para cambiar el bg dela nav-bar
// export const changeScroll = () => {
//   const navbar = document.querySelector("nav");
//   const sections = document.querySelectorAll("section[id]");
//   const options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 0.7,
//   };

//   const observer = new IntersectionObserver((entries) => {
//     let isHomeVisible = false;

//     entries.forEach((entry) => {
//       const sectionId = entry.target.getAttribute("id");

//       // Verifica si la sección "home" está visible
//       if (entry.isIntersecting && sectionId === "#home") {
//         isHomeVisible = true;
//       }
//     });

//     // Agrega o elimina la clase bg-gray-800 dependiendo de si "home" es visible
//     if (isHomeVisible) {
//       navbar?.classList.remove("bg-gray-800");
//     } else {
//       navbar?.classList.add("bg-gray-800");
//     }
//   }, options);

//   sections.forEach((section) => {
//     observer.observe(section);
//   });
// };
