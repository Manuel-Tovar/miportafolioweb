const studies = document.getElementById("studies");

class Study {

    constructor (title, description, photo,  link) {

    this.photo = photo
    this.title = title
    this.description = description
    this.link = link
    }
}

let arraysStudy = [] 

/* all the information of the studies is inserted */

let certificadoMeta = new Study ("Certificado por Meta", "He recibido este certificado de Introduccion al Front-End Develoment por parte de la empresa META, gracias a la institucion Coursera, realizando 4 semanas de estudio.", "./images/meta_front-end.jpg", "https://drive.google.com/file/d/1fModQkKT1lvgxIxhoqjPxFQCJcHL8fYb/view?usp=sharing");

let certificadoJavaScript = new Study ("Certificado por Sololearn", "He recibido este certificado de JavaScript gracias a la institucion Sololearn, realizando 6 semanas de estudio.", "./images/java-script.jpg", "https://drive.google.com/file/d/1Ira8EZcUl6wsMnPFLE_l8JkonrVFlI2t/view?usp=sharing")

let certificadoReact = new Study ("Certificado por Sololearn", "He recibido este certificado de React + Redux gracias a la institucion Sololearn, realizando 2 semanas de estudio.", "./images/react-redux.jpg", "https://drive.google.com/file/d/1Mg07KB0c20-anJDYgp11013sKPwhGyfQ/view?usp=sharing")

let certificadoSoporteTecnico = new Study ("Certificado por Google", "He recibido este certificado de Fundamentos de Soporte Tecnico por parte de la empresa Google, gracias a la institucion Coursera, realizando 4 semanas de estudio.", "/images/technical-support.jpg", "https://drive.google.com/file/d/11VOdFEsfYQ2LpAAaFgc5HoaSnA-smURr/view?usp=sharing");

let certificadoMichiganSql = new Study ("Certificado por Michigan", "He recibido este certificado de Lenguaje de Consulta Estructurado por parte de la Univercidad de Michigan, gracias a la institucion Coursera, realizando 6 semanas de estudio.", "/images/sql-michigan.jpg", "https://drive.google.com/file/d/1_KLbr_C1ZnLtjzIpOCu2tu4PCc4c1XvQ/view?usp=sharing");

let certificadoScrum = new Study ("Certificado por CertiProf", "He recibido este certificado de Scrum gracias a la institucion CertiProf, realizando 2 horas de estudio.", "./images/scrum-foundation.jpg", "https://drive.google.com/file/d/1ZrhrWskLyowZqd5le66unYTDW_Qg2gT9/view?usp=sharing");


/* all information is inserted into the array */

arraysStudy.push(certificadoMeta,certificadoJavaScript, certificadoReact, certificadoSoporteTecnico, certificadoMichiganSql, certificadoScrum)


/* function to print all the information in the array */

arraysStudy.forEach((prints) => {

    toPrint = `
    
    <div class="card">
    <a href="https://drive.google.com/file/d/1fModQkKT1lvgxIxhoqjPxFQCJcHL8fYb/view?usp=sharing" target="_blank" ><div class="card-image"><img src=${prints.photo} alt="card" width="100%" height="100%" >
    </div></a>
        <div class="card-description">
            <p class="text-title"> ${prints.title}</p>
            <p class="text-body"> ${prints.description} </p>
        </div>
    </div>

    `
 studies.innerHTML += toPrint

});

