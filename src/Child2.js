const Child2 = (props) => {
const {click, setClick} = props
    const HandleClickChange = () => {
 setClick("you have clicked me")
    }
return (
    <div>
        <div>{click}</div>
        <button onClick={HandleClickChange}>ClickMe</button>
    </div>
)
}
export default Child2;