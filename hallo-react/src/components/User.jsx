import PropType from 'prop-types'
function User({ isLoggedIn, name, surName, age, friends,adress }) {

    return (
        <div>
            <h1>
                {isLoggedIn ? ` Name :${name}  SurName: ${surName} yas: ${age}` : "giriş yapılmadı"}
                {`adres: ${adress.title} ${adress.zip}`}
            </h1>

            {
                friends.map((friend) => (
                    <div key={friend.id}>
                       {friend.id}- {friend.name}
                    </div>
                ))
            }
        </div>
    )
}

User.prototype={
    name:PropType.string.isRequired,
    surName:PropType.string,
    age: PropType.oneOfType([PropType.number,PropType.string]).isRequired,
    friends: PropType.array,
    isFinite:PropType.bool,
    adress:PropType.shape({
        title:PropType.string,
        zip:PropType.number,
    })
}

export default User;