import useLocalStorage from "./useLocalStorage"
import './theme.css'

export default function ThemeSwitch(){
  const [value,setvalue]=useLocalStorage('theme','dark')
  function handleToggleTheme(){
    setvalue(value==='light'?'dark':'light')
  }
  return <div className="light-dark-theme" data-item={value}>
    <div>
      <p>hello world</p>
      <button onClick={handleToggleTheme}>change theme</button>
    </div>
  </div>
}