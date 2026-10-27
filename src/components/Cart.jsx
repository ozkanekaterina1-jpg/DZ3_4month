export function Cart({ items }) {
    return (
        <div className="cart">
            <h2>Корзина</h2>
            {items.length === 0 && <p>Корзина пуста</p>}
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}