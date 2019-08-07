import React from "react";
function Products(props){
    return(<div className="products"><input type="checkbox"></input>{props.product.name}</div>)
}
export default  Products