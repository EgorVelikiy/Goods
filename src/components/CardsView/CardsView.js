import './cardsView.css'
import { ShopCard } from './ShopCard/ShopCard.js'

export function CardsView({ cards }) {
    let ind = 0
    return (
        <div className="cards-container">
            {cards.map(item => (
                <ShopCard 
                    item={item}
                    key={ind++}
                />
            ))}
        </div>
    )
}