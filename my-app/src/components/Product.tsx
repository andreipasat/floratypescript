import React from 'react'

interface IProduct {
    image: string,
    name: string,
    price: string
}

const Product = ({image, name, price}: IProduct): JSX.Element => {
    return (
        <div className="col s4">
            <div><img width="200px" src={image}></img></div>
            <div>{name}</div>
            <div>{price}</div>
        </div>
    )
}

export default Product;
