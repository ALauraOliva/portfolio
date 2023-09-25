import React, { useState } from "react"
import { IntlProvider } from "react-intl"
import messagesEnglish from "../lang/en-US.json"
import messagesSpanish from "../lang/es-ES.json"

const langContext = React.createContext()

const LangProvider = ({ children }) => {
  const [messages, setMessages] = useState(messagesEnglish)
  const [local, setLocal] = useState("en-US")

  const setLanguage = (language) => {
    switch (language) {
      case "en-US":
        setMessages(messagesEnglish)
        setLocal("en-US")
        break
      case "es-ES":
        setMessages(messagesSpanish)
        break
      default:
        setMessages(messagesEnglish)
        setLocal("en-US")
    }
  }

  return (
    <langContext.Provider value={{ setLanguage: setLanguage }}>
      <IntlProvider locale={local} messages={messages}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  )
}

export { LangProvider, langContext }
