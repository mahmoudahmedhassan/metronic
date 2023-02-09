import React , {useContext , createContext , useState} from 'react'
const TestContextApI = createContext<any>(null);
export const useTestContextResponse = () => useContext(TestContextApI) 
function TestContext({children}:any) {
    const [test, settest] = useState(false)
  return (
    <TestContextApI.Provider value={{test, settest}}>
      {children}
    </TestContextApI.Provider>
  )
}

export default TestContext