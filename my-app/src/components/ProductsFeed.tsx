import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector }  from '../hooks/useTypedSelector';
import { fetchProducts } from '../store/feed-reducer';
import  Product from './Product'

const ProductsFeed: React.FC = () => {
    const {products, error, loading} = useTypedSelector(state => state.feed);
    //console.log(products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    if (loading) {
        return <h1>Loading ...</h1>
    }

    if (error !== null) {
        return <h1>{error}</h1>
    }

    return (
        <div className="row">
            {products.map(product => 
                <Product key={product.id} name={product.name} price={product.price} image={product.image} />
            )}
        </div>
    )
}

export default ProductsFeed;