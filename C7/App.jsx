class DegreesInput extends React.Component {
    constructor(props){
        super(props)
    }

    handleChange(e){
        this.props.handleTemperatureChange(e.target.value)
    }

    render(){
        const {temperature} = this.props
        const unit = this.props.unit
        const calculatedTemperature = (unit === "celcius" ? temperature : temperature *10)
        return <div>
            Degrées en {unit === "celcius" ? "Celcius" : "Fahrenheit"}
            <input type="text" value={temperature} onChange={this.handleChange.bind(this)}/>
        </div>
    }
}

class Home extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            temperature: 0
        }
        this.handleTemperatureChange = this.handleTemperatureChange.bind(this)
    }
    
    handleTemperatureChange(temperature){
        this.setState({temperature})
    }

    render(){
        const {temperature} = this.state
        const celsius = temperature
        const fahrenheit = temperature*10

        return <div>
            <DegreesInput unit="celcius" temperature={celsius} handleTemperatureChange={this.handleTemperatureChange}></DegreesInput>
            <DegreesInput unit="fahrenheit" temperature={fahrenheit} handleTemperatureChange={this.handleTemperatureChange}></DegreesInput>
        </div>
    }
}

ReactDOM.render(<Home></Home>, document.querySelector('#app'));