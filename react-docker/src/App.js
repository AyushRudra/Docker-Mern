import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const { data } = await axios.get('http://localhost:5500/api/products');
                setProducts(data);
            } catch (err) {
                console.log(err);
            }
        }
        fetchProducts();
    }, []);

    return (
        <div className="App">
            <h1>My Products</h1>
            <div className="card-container">
                {products.map((product) => {
                    return (
                        <div key={product._id} className="card">

                            <p>{product.name}</p>
                            <p>{product.price}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
