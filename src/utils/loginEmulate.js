export default function loginEmulate(user){
    let userCredentials = {
        avatar:"https://th.bing.com/th/id/R.01c7b181419e15cc614b2297a0e0b959?rik=zGf2g7HyblIvTg&riu=http%3a%2f%2fwww.aceshowbiz.com%2fimages%2fstill%2favatar114.jpg&ehk=A2qdetFD%2bCnHXOA868yrfaHHPewee02Hh2kWzPtS81Y%3d&risl=&pid=ImgRaw&r=0",
        name:"fulano"
    }
    const {email, password} = user
    if(email === "fulano@gmail.com" && password === "123456"){
        return userCredentials 
    }else{
        return false
    }
}