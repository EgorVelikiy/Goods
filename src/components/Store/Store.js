import './store.css';
import data from '../data/data.json'
import { IconSwitch } from '../IconSwitch/IconSwitch.js'
import { ListView } from '../ListView/ListView.js'
import { CardsView } from '../CardsView/CardsView.js'
import { useState } from 'react';

export function Store() {
    const [icon, setIcon] = useState('view_list')

    const onSwitch = (e) => {
        switch (icon) {
            case 'view_list':
                return setIcon('view_module')
            case 'view_module':
                return setIcon('view_list')
        }
    }

    return (
        <div className="container">
            <IconSwitch 
                icon={icon} 
                onSwitch={onSwitch}
            />
            <div className="data-container">
                {icon === 'view_list' ? <ListView items={data} /> : <CardsView cards={data} /> }
            </div>
        </div>
    )
}