import { useState } from 'react'
import './App.css'
import { ProductCard } from "./components/ProductCard"
import { Cart } from "./components/Cart"

const products = [
    { id: 1, title: "Ноутбук", image: "https://img.mvideo.ru/product-medias/photos/4266479/5482dc5b-152a-48cc-85fa-3d8e66c95cce.jpg?width=600&fmt=webp" },
    { id: 2, title: "Наушники", image: "https://img.mvideo.ru/product-medias/photos/404153360/29eccc03-27c0-4237-965d-2620407f3f9e.jpg?width=600&fmt=webp" },
    { id: 3, title: "Часы", image: "https://img.mvideo.ru/product-medias/photos/403003788/db508701-c19b-4361-a4cb-d772c239ea53.jpg?width=600&fmt=webp" },
    { id: 4, title: "Клавиатура", image: "https://img.mvideo.ru/product-medias/photos/402512327/546d451b-0ff3-4bfc-9697-b422c56e5c84.jpg?width=600&fmt=webp" },
]

function App() {
    const [cart, setCart] = useState([])

    function handleAdd(product) {
        setCart([...cart, product])
    }
    return (
        <div className="page">
            <h1>Магазин</h1>
            <div className="products">{products.map((product) => (
                <ProductCard key={product.id} product={product} onAdd={handleAdd} />
                ))}
            </div><Cart items={cart} /></div>
    )
}

export default App