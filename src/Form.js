import { useState } from "react"

const Form = () => {
const [form, setForm] = useState({
    firstname:'',
    lastname: '',
    email:''
})
const {firstname, lastname, email} = form
    const handleChange = (e) => {
        setForm(e.target.value)
    }
const handleSubmit = () => {
    console.log(form)
}
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                value={firstname}
                placeholder="Enter your First Name"
                onChange={handleChange}/> <br />
                <input 
                type="text"
                value={lastname}
                placeholder="Last Name"
                onChange={handleChange}/> <br />
                <input 
                type="text" 
                value={email}
                placeholder="Email"
                onChange={handleChange}/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default Form;