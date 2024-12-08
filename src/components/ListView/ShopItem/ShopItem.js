import './shopitem.css'

export function ShopItem(data) {
    const { item } = data;
    return (
        <div className="item">
            <img className="img" src={item.img}/>
            <div className="name">{item.name}</div>
            <div className="color">{item.color}</div>
            <div className="price">${item.price}</div>
            <button className='add'>ADD TO CART</button>
        </div>
    )
}