let counter = 0;

function render (){
    const items = [
        "Li 1",
        "Li 2",
        "Li 3"
    ];
    const liList = items.map((item, k) => <li key={k}>{item}</li>);
    const title = 
    <React.Fragment>
        <h1>
            Le temps qui passe: <span>{counter}</span>
        </h1>
        <ul>
            {liList}
        </ul>
    </React.Fragment>

    ReactDOM.render(title, document.querySelector('#app'));
}

render();

window.setInterval(() => {
    counter++
    render();
}, 1000)