import { useState } from 'react'

function InputExample() {
    const [form, setForm] = useState({ name: '', surName: '' });
    const formInput = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }
    return (
        <div>
            name <br />
            <input name='name' type="text" value={form.name} onChange={formInput} /> <br /><br />
            surname <br />
            <input name='surName' type="text" value={form.surName} onChange={formInput} />

            <br />
            <br />
            {form.name} {form.surName}
        </div>
    )
}

export default InputExample;