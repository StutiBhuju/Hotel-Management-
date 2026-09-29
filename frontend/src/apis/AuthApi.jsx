
const baseURL =  "http://localhost:3000"


const Login = async (userData)=>{

    const response = await fetch(`${baseURL}/api/auth/login`,{
        method: "POST",
        credentials : "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(userData)
    })

    const data = await response.json()
    
   return data

}


const Register = async (userData)=>{


  try{

      const response = await fetch(`${baseURL}/api/auth/register`,{
          method: "POST",
          credentials : "include",
          headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        
        const data = await response.json()
        
        return data
    }catch(error){
        console.log(error)
        return error
    }

}


const Logout= async ()=>{

    const response = await fetch(`${baseURL}/api/auth/logout`,{
        method: "POST",
        credentials : "include",
    headers: {
      "Content-Type": "application/json"
    },
    })

    const data = await response.json()
    
   return data

}


export {Login,Register,Logout}