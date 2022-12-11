import { useState } from 'react'

function List({ contacts, setContacts }) {
    const [filterText, setFilterText] = useState('');

    const filtered = contacts.filter((item) => {
        return Object.keys(item).some((key) =>
            item[key]
                .toString()
                .toLowerCase()
                .includes(filterText.toLocaleLowerCase()));
    })

    const handleRemoveItem = name => {
        setContacts(contacts.filter(item => item.fullname !== name))
    }

    function myFunction() {

        var checkBox = document.getElementById("myCheck");

        var text = document.getElementById("text");

        if (checkBox.checked) {
            text.className = "text";
        } else {
            text.className= "";
        }
    }


    return (
        <div >

            <input id='input' value={filterText} placeholder='filter contacts' onChange={(e) => setFilterText(e.target.value)} />
            <ul>
                {
                    filtered.map((contact, i) => (
                        <ul key={i}>
                            <li className='list'>
                            <input type="checkbox" id="myCheck" onClick={myFunction} />
                            
                                <p className='' id="text" >{contact.fullname}</p>

                                <button onClick={() => handleRemoveItem(contact.fullname)}>x</button>

                            </li>


                        </ul>



                    ))
                }
            </ul>
            <p>Total contacts ({filtered.length})</p>
        </div>
    )
}

export default List