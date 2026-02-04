import "./Product.css";
import { Price } from "./Price";

function Product({title, idx }) {
    let oldPrice = ["12,495", "11,988", "1,599", "599"];
    let newPrice = ["8,999", "9,199", "8,99", "278"];
    let Description = [["8.000 DPI","5 Programmable buttons"], ["intuitive surface","designed for iPad Pro"], ["designed for ipad Pro", "intuitive surface"], ["wireless0", "optical orientation"]];
    return(
        <div className = "Product">
            <h2>{title}</h2>
            <ul className = "List">
            <li>{Description[idx][0]}</li>
            <li>{Description[idx][1]}</li>
            </ul>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        </div>
    );
}
export default Product;
