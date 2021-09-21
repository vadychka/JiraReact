import { Button } from "components"
import i18next from "i18next"
import './Languages.scss'

const Languages = () => {
   const changeLanguage = (lang: string) => {
      i18next.changeLanguage(lang)
   }

   return <div className='header__languages'>
      <Button onClickBtn={() => changeLanguage('en')}>
         En
      </Button>
      <Button onClickBtn={() => changeLanguage('ru')}>
         Ru
      </Button>
   </div>
}

export default Languages