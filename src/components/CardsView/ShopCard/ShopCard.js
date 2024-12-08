import './shopcard.css'

export function ShopCard(data) {
    const { item } = data;
    return (
        <div className="item-card">
            <div className="name">{item.name}</div>
            <div className="color-card">{item.color}</div>
            <div className='img-container'>
                <img className="img-card" src={item.img}/>
            </div>
            <div className="card-tools">
                <div className="price">${item.price}</div>
                <button className='add'>ADD TO CART</button>
            </div>
        </div>
    )
}