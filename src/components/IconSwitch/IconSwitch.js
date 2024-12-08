import './IconSwitch.css'

export function IconSwitch(props) {
    const {icon, onSwitch } = props;
    return (
        <div className="icon-container">
            <button className='material-icons' onClick={onSwitch}>{icon}</button>
        </div>
    )
}