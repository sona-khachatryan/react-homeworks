import NumberDisplay from "../NumberDisplays/NumberDisplays";

function Header() {
    return <div className='header'>
        <NumberDisplay value={0}/>
        <NumberDisplay value={23}/>
    </div>
}

export default Header;