import { Button } from "components"
import { useTranslation } from "react-i18next"

const Languages = () => {
   const { t, i18n } = useTranslation()
   const changeLanguage = (lang: string) => {
      i18n.changeLanguage(lang)
   }

   return <Button onClickBtn={() => changeLanguage('en')}>
      En
   </Button>
}

export default Languages