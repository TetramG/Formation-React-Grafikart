const PRODUCTS = [
    {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
    {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
    {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
    {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
    {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
    {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
  ];



class FilterableProductTable extends React.PureComponent {
    constructor(props){
        super(props)
        this.state = {
            filterText: "",
            inStockOnly: false
        }
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
        this.handleInStockChange = this.handleInStockChange.bind(this)

    }
    
    // shouldComponentUpdate(nextProps,nextState){
    //     return false;
    // }

    handleFilterTextChange(filterText){
        this.setState({filterText})
    }

    handleInStockChange(inStockOnly){
        this.setState({inStockOnly})
    }

    render(){
        const {products} = this.props
        return <React.Fragment>
            <SearchBar filterText={this.state.filterText}
                        inStockOnly={this.state.inStockOnly}
                        onFilterTextChang={this.handleFilterTextChange}
                        onStockChange={this.handleInStockChange}></SearchBar>
            <ProductTable 
                products={products}
                filterText={this.state.filterText}
                inStockOnly={this.state.inStockOnly}></ProductTable>   
        </React.Fragment>
    }
}

class SearchBar  extends React.Component {

    constructor(props){
        super(props)
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
        this.handleInStockChange = this.handleInStockChange.bind(this)

    }

    handleFilterTextChange(e){
        this.props.onFilterTextChang(e.target.value)
    }

    handleInStockChange(e){
        this.props.onStockChange(e.target.checked)
    }

    render(){
        const {filterText,inStockOnly} = this.props
        return <div className="mb-4">
           <div className="form-group mb-0">
               <input type="text" value={filterText} className="form-control" placeholder="Search.." onChange={this.handleFilterTextChange}/>
           </div>
           <div className="form-check">
               <input type="checkbox" checked={inStockOnly} className="form-check-input" id="stock" onChange={this.handleInStockChange}/>
               <label htmlFor="stock" className="form-check-label">Produits en stock uniquement</label>
           </div>
        </div>
    }
}

function ProductTable({products,inStockOnly,filterText}){

    const rows = []
    let lastCategory =null
    
    products.forEach(product => {
        if((inStockOnly && !product.stocked) ||(!product.name.startsWith(filterText))){
            return
        }
        if(product.category !== lastCategory){
            lastCategory = product.category
            rows.push(<ProductCategoryRow key={product.category} category={product.category}></ProductCategoryRow>)
        }
        
        rows.push(<ProductRow key={product.name} product={product}></ProductRow>)
    })

    return <table className="table">
        <thead>
            <tr>
                <th>Nom</th>
                <th>Prix</th>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>

}

function ProductCategoryRow({category}){
    return <tr >
        <th colSpan="2">{category}</th>
    </tr>
}

function ProductRow({product}){
    const name = product.stocked ? product.name : <span className="text-danger">{product.name}</span>
    return <tr>
        <td>{name}</td>
        <td>{product.price}</td>
    </tr>
}

class Home extends React.Component{
    
    constructor(props){
        super(props)
    }
    
    render(){
        return <div>
            <FilterableProductTable products={PRODUCTS}></FilterableProductTable>
        </div>
    }
}

ReactDOM.render(<FilterableProductTable products={PRODUCTS}></FilterableProductTable>, document.querySelector('#app'));

const PRODUCTS2 = [...PRODUCTS,{category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 8"}]

window.setTimeout(function () {
    ReactDOM.render(<FilterableProductTable products={PRODUCTS2}></FilterableProductTable>, document.querySelector('#app'));
},2000)


