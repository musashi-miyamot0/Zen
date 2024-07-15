
const saveToken = (response) =>{
    localStorage.setItem('access', response.data.access)
}
export default  saveToken