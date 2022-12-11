import { useState } from 'react'

const formValue=({ fullname: '', phoneNumber: '' })

function Form({ addContacts, contacts }) {

    const [form, setForm] = useState(formValue)

    const onChangeInput = (e) => {

        setForm({ ...form, [e.target.name]: e.target.value })

    }
    const onSubmit = (e) => {
        e.preventDefault()
        if (form.fullname === '' || form.phoneNumber === '') {
            return false;
        }

        addContacts([...contacts, form])
        setForm({ fullname: '', phoneNumber: '' })

    }
    return (
        <form onSubmit={onSubmit}>
            <div >
                <input id='input' name='fullname' placeholder='full name' value={form.fullname} onChange={onChangeInput} />
            </div>
            <div>
                <input id='input' name='phoneNumber' placeholder='phone Number' value={form.phoneNumber} onChange={onChangeInput} />
            </div>
            <div>
                <button  id='button'>Add</button>
            </div>
        </form>
    )
}

export default Form