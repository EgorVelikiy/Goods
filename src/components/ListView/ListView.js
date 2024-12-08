import './listView.css'
import { ShopItem } from './ShopItem/ShopItem.js'

export function ListView({ items }) {
    let ind = 0
    return (
        <div className="list-container">
            {items.map(item => (
                <ShopItem 
                    item={item}
                    key={ind++}
                />
            ))}
        </div>
    )
}