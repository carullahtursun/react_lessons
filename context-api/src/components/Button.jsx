

import {useTheme} from '../context/ThemeContext'
function Button() {

    const { theme, setTheme } = useTheme()
    console.log(theme);
    return (
        <div>

            Active Theme : {theme}

            <br />
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}> Change</button>
        </div>
    )
}

export default Button