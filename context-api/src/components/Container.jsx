
import Profile from './Profile';
import Button from './Button';
import Header from './Header';
import {useTheme} from '../context/ThemeContext'
function Container() {

    const { theme } = useTheme()
    return (
        <div className={`App ${theme}`}>
            <Header />
            <hr />
            <Button />
            <hr />
            <br />
            <Profile/>
        </div>
    )
}

export default Container