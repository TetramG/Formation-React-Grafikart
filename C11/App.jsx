const Field =React.forwardRef(function (props, ref){
    return <div className="form-group">
        <input type="text" ref={ref} className="form-control"/>
    </div>
})

class Home extends React.Component{
    
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.input = React.createRef()
    }
    
    handleClick(e){
        console.log(this.input.current.value)
    }

    render(){
        console.log(this.input)
        return <div>
            <Field ref={this.input}></Field>
           <button onClick={this.handleClick} >Envoyer</button>
        </div>
    }
}

ReactDOM.render(<Home ></Home>, document.querySelector('#app'));
