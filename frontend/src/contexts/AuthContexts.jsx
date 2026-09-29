import { useState,useEffect,createContext,useContext } from "react"

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setuser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        console.log("fetching data")

        const fetchUser = async () =>{
            try{

                const response = await fetch('http://localhost:3000/api/auth/me',{
                    credentials : "include"
                })
                const data = await response.json()


                console.log(response)

                if (!response.ok) {
                    throw new Error(data.message || "Something went wrong");
                }

                
                setuser(data)
            }catch(error){
                setuser(null)
            }finally{
                setLoading(false)
            }
        }

        fetchUser()
     
    }, [])
    

  return (
     <AuthContext.Provider
      value={{
        user,
        setuser,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = ()=> useContext(AuthContext)