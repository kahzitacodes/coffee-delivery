import { ReactNode, createContext, useState } from 'react'

interface CartContextProviderProps {
  children: ReactNode
}

interface NumericStepperContextTypes {
  count: number,
  setCount: (prev: any) => void,
}

const NumericStepperContext = createContext({} as NumericStepperContextTypes)

function NumericStepperProvider({ children }: CartContextProviderProps) {
  const [count, setCount] = useState(1)

  return (
    <NumericStepperContext.Provider value={{ count, setCount }}>
      {children}
    </NumericStepperContext.Provider>
  )
}

export { NumericStepperContext, NumericStepperProvider }