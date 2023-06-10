// ──────────────────────────────────────────────────
//   :::::: Loader
// ──────────────────────────────────────────────────

setTimeout(function () {
    $(".loading").fadeOut("slow");
}, 5000);

// ──────────────────────────────────────────────────

const seccionesPagina = new fullpage("#fullpage", {
  // ──────────────────────────────────────────────────
  //   :::::: Opciones Basicas
  // ──────────────────────────────────────────────────
  autoScrolling: true, // Se activa el scroll.
  fitToSection: false, // Acomoda el scroll automaticamente para que la seccion se muestre en pantalla.
  fitToSectionDelay: 300, // Delay antes de acomodar la seccion automaticamente.
  easing: "easeInOutCubic", // Funcion de tiempo de la animacion.
  scrollingSpeed: 700, // Velocidad del scroll. Valores: en milisegundos.
  css3: true, // Si usara CSS3 o javascript.
  easingcss3: "ease-out", // Curva de velocidad del efecto.
  // ──────────────────────────────────────────────────
  //   :::::: Barra de navegación
  // ──────────────────────────────────────────────────
  navigation: true, // Muesta la barra de navegación.
  menu: "#menu", // Menu de navegación.
  anchors: ["inicio", "proyectos", "sobreMi", "contacto"], // Anclas, las usamos para identificar cada seccion y poder acceder a ellas con el menu.
  navigationTooltips: ["Inicio", "Proyectos", "Sobre Mi", "Contacto"], // Tooltips que mostrara por cada boton.
  showActiveTooltip: false, // Mostrar tooltip activa.
  // ──────────────────────────────────────────────────
  //   :::::: Secciones
  // ──────────────────────────────────────────────────
  sectionsColor: ["#000", "#c2c2c2", "#000", "#000713"], // Color de fondo de cada seccion.
  verticalCentered: true, // Si alineara de forma vertical los contenidos de cada seccion.
  // ──────────────────────────────────────────────────
  //   :::::: Slides
  // ──────────────────────────────────────────────────
  controlArrows: true, // Flechas del slide
  slidesNavigation: false, // Indicadores del slide
   // ──────────────────────────────────────────────────
  //   :::::: Carga animaciones
  // ──────────────────────────────────────────────────
  afterLoad: function (origin, destination) {
    if (destination.anchor == "proyectos") {
      document.querySelector("#slidePrincipal h4").style.opacity = 1;
    }
    if (destination.anchor == "contacto") {
      document.querySelector(".footer h2").style.opacity = 1;
    }
  },
});

// ──────────────────────────────────────────────────
