class Home extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {nom: '',
                        prenom:"",
                        newsletter: false}
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(e){
        const elName = e.target.name
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
        this.setState({
            [elName]: value
        })
    }

    render(){
        return <div>
        <div>
            <label htmlFor="nom">Nom</label>
            <input type="text" id="nom" name="nom" value={this.state.nom} onChange={this.handleChange}/>
        </div>
        <div>
            <label htmlFor="prenom">Prénom</label>
            <input type="text" id="prenom" name="prenom" value={this.state.prenom} onChange={this.handleChange}/>
        </div>
        <div>
        <label htmlFor="newsletter">S'abonner à la newsletter</label>
            <input type="checkbox" id="newsletter" name="newsletter" checked={this.state.newsletter} onChange={this.handleChange}/>
        </div>
        {JSON.stringify(this.state)}
        </div>
    }
}

ReactDOM.render(<Home></Home>, document.querySelector('#app'));