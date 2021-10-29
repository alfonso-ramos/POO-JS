// Objetos literales
const poncho = {
    name : "Poncho",
    age: 18,
    cursosAprobados:[
        "Curso definitivo de HTML y CSS",
        "Curos practico de HTML y CSS"
    ],
    aprobarCurso(nuevoCurso) {
        this.cursosAprobados.push(nuevoCurso);
    }
};

// Prototipos
function Student(name, age, cursosAprobados)
{
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}

Student.prototype.aprobarCurso = function (nuevoCurso) {
    this.cursosAprobados.push(nuevoCurso)
}

// Instacias de prototipos
const poncho = new Student(
    "José Alfonso",
    18,
    [
        "Curso Profesional de Git y Github"
    ]
)

// Prototipos con las sintaxis de clases
class Estudiante {
    constructor({
        name, age, cursosAprobados = [], email,
    }) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
    }
}

const alfredo = new Estudiante({
    name: "Alfredo",
    age :28,
    cursosAprobados:[
        "Analisis de negocios para ciencia de datos",
        "Principios de visualización de datos para BI"
    ]

});