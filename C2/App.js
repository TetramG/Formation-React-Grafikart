let counter = 0;

function render (){
    const title = React.createElement('h3', {}, 
        "Hello from React",
        React.createElement('span',{}, counter)
    );

    ReactDOM.render(title, document.querySelector('#app'));
}

render();

window.setInterval(() => {
    counter++
    render();
}, 1000)