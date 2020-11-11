const { API } = require("../../backend");
const { emptyCart } = require("../../core/helper/Carthelper");


export const signup = (user) => {
    return fetch(`${API}user/`,{
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type":"application/json",
        },
        body: JSON.stringify(user),
        // body: user
        
    })
    .then((response)=> {
        return response.json();
    })
    .catch((err) => console.log(err))
}
export const signin = (user) => {
    const formData = new FormData();
    const {email,password} = user;
    formData.append('email',email)
    formData.append('password',password)

    for( var key of formData.keys()){
        console.log(key)
    }
    return fetch(`${API}user/login/`,{
        method:"POST",
        body: formData,
    })
    .then((response)=>{
        console.log("Success",response)
        return response.json()
    })
    .catch((err)=> console.log(err))
};
 
  
export const authenticate = (data , next) => {
    if (typeof window !== undefined){
        localStorage.setItem("jwt",JSON.stringify(data));
        next();
    }
}

export const isAuthenticated = () => {
    if(typeof window !== undefined){
        return false
    }
    if(localStorage.getItem("jwt")){
        return JSON.parse(localStorage.getItem("jwt"))
    }else{
        return false
    }
}

export const signout = (next) => {
    const userId = isAuthenticated() && isAuthenticated().user.id 
    if (typeof window !== undefined){
        localStorage.removeItem("jwt")
        emptyCart(()=>{});
        next();
        return fetch(`${API}user/logout/${userId}`,{
            method: "GET",

        })
        .then((response)=>{
            console.log("logout successfull");
            // next();
        })
        .catch((err)=>console.log(err))
    }
}
 
 
 
