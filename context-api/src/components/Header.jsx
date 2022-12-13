

import {useTheme} from '../context/ThemeContext'

function Header() {
    const { theme,  } = useTheme()
    return (
        <div>Header Theme :{theme}</div>
    )
}

export default Header