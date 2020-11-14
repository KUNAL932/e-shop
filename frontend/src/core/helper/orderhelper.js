const { API } = require("../../backend");

const CreateOrder = (userId,token,orderDate) => {
    formData = FormData();
    for (const name in orderDate){
        formData.append(name,orderDate[name])
    }

    return fetch(`${API}order/add/${userId}/${token}/`,{
        method:"POST",
        body:formData,
    })
    .then(response =>{ return response.json()})
    .catch(err => console.log(err))
}
 
export default CreateOrder;