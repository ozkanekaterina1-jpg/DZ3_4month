export function ProductCard({ product, onAdd }) {
    return (
        <div className="card">
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <button onClick={() => onAdd(product)}>Добавить в корзину</button>
        </div>
    )
}