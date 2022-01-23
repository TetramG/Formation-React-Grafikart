
function Button({type, children}){
    const className = "btn btn-"+type
    return <button className={className}>{children}</button>
}

function PrimaryButton ({children}){
    return <Button type="primary">{children}</Button>
}

function SeconndaryButton ({children}){
    return <Button type="secondary">{children}</Button>
}

function Column2 ({left,right}){
    return <div className="row">
        <div className="col-md-6">{left}</div>
        <div className="col-md-6">{right}</div>
    </div>
}


class Home extends React.Component{
    
    constructor(props){
        super(props)
    }
    
    render(){
        return <div>
            <Column2 left={<PrimaryButton>Valider</PrimaryButton>} right={<SeconndaryButton>Anuler</SeconndaryButton>}></Column2>

        </div>
    }
}

ReactDOM.render(<Home></Home>, document.querySelector('#app'));