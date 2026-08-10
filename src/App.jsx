import React from 'react'
import Header from './components/header/Header'
import Main from './components/layout/Main'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <div>
      <LanguageProvider>
        <Header />
      </LanguageProvider>
      <Main />
    </div>
  )
}

export default App