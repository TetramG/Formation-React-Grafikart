function WelcomeFunc ({name, children}) {
    return <div>
        <h1>Bonjour {name}</h1>
        <p>
            {children}
        </p>
    </div>
}

class Welcome extends React.Component {

    render(){
        return <div>
        <h1>Bonjour {this.props.name}</h1>
        <p>
            {this.props.children}
        </p>
        </div>
    }
}

class Clock extends React.Component{

    constructor(props){
        super(props)
        this.state = {date: new Date()}
        this.timer = null;
    }

    componentDidMount(){
        this.timer = window.setInterval(() => {
            this.tick()
        }, 1000)
    }

    componentWillUnmount(){
        window.clearInterval(this.timer)
    }

    tick() {
        this.setState({date: new Date()})
    }

    render(){
        return <div>
            Il est {this.state.date.toLocaleTimeString()}
        </div>
    }
}

class Incrementer extends React.Component{
    
    static defaultProps = {
        step:10
    }

    constructor(props){
        super(props)
        this.timer = null
        this.state={counter: props.initValue}
    }

    componentDidMount(){
        this.timer = window.setInterval(() => {
            this.setState((state, props) => ({counter: this.state.counter + props.step}))
        }, 1000)
    }

    componentWillUnmount(){
        window.clearInterval(this.timer)
    }

    render(){
        return <p>{this.state.counter}</p>
    }
}



function Home () {
    return <div>
        <Welcome name="Victor">Enfant</Welcome>
        <Clock/>
        <Incrementer initValue={10} step={1}></Incrementer>
    </div>
}

ReactDOM.render(<Home></Home>, document.querySelector('#app'));