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
        this.state={counter: props.initValue,timer: null}
    }

    componentDidMount(){
        this.setState({timer: window.setInterval(() => {
            this.setState((state, props) => ({counter: this.state.counter + props.step}))
        }, 1000)})
    }

    componentWillUnmount(){
        window.clearInterval(this.timer)
    }

    toggle(){
        if(this.state.timer){
            window.clearInterval(this.state.timer)
            this.setState({timer: null})
        }
        else{
            this.setState({timer: window.setInterval(() => {
                this.setState((state, props) => ({counter: this.state.counter + props.step}))
            }, 1000)})
        }
    }

    render(){
        return <div>
            {this.state.counter}
            <button onClick={this.toggle.bind(this)}>{this.state.timer ? "Pause" : "Play"}</button>
            </div>
    }
}

class ManualCounter extends React.Component{

    constructor(props){
        super(props)
        this.state={counter:0}
    }

    increment(e){
        e.preventDefault()
        this.setState((state,props) => ({counter: ++this.state.counter}))
    }

    render(){
        return <div>
            Valeur: {this.state.counter}
            <button onClick={this.increment.bind(this)}>+1</button>
        </div>
    }
}


function Home () {
    return <div>
        <Welcome name="Victor">Enfant</Welcome>
        <Clock/>
        <Incrementer initValue={10} step={1}></Incrementer>
        <ManualCounter></ManualCounter>
    </div>
}

ReactDOM.render(<Home></Home>, document.querySelector('#app'));