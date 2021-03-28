var container = document.getElementById("app");
// var App = document.createElement("h1");
// App.innerHTML = `Título inserido por javaScripto :0`;
// container.appendChild(App)

//nome elemento -> PascalCase
//funções em javascript -> camelCase
//Componentes só podem retornar um elemento
//Aninhar em React.Fragment

function Contador(props) {

    // let numero = 0;
    const [numero, setNumero] = React.useState(0);

    function somar() {
        setNumero(numero + 1)
        console.log("Somei e ficou " + (numero + 1))
    }

    function subtrair() {
        setNumero(numero - 1)
        console.log("Subtraí e ficou " + (numero - 1))
    }

    return (
        <React.Fragment>
            <h1>{props.titulo}</h1>
            <h2>{numero}</h2>
            <button onClick={somar}>+</button>
            <button onClick={subtrair}>-</button>
        </React.Fragment>
    );
}

function App() {
    return (
        <React.Fragment>
            <h1>Aposte no time que vai ganhar</h1>
            <Contador titulo="Lakers" />
            <Contador titulo="Celtics" />
            <Contador titulo="Heat" />
        </React.Fragment>
    );
}



ReactDOM.render(React.createElement(App, null, null), container)