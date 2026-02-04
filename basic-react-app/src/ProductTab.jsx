import Product from "./Product.jsx";

function ProductTab() {
    let styles = {
        display: "flex",
        flexwrap: "wrap"
    };
    
    return (
        <div style = {styles}>
        <Product title="LogicTech Mx Master" idx = {0}/>
        <Product title = "Apple Pencil" idx = {1}/>
        <Product title = "Zebronics" idx = {2}/>
        <Product title = "Petronics"idx = {3}/>
        </div>
    );
}
export default ProductTab;