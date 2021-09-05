
const getTitleOfSite = (address) =>{
    let currentPage = '';
    let newAddress=''
    let newPath = '';
    if(address.indexOf('.')!==address.lastIndexOf('.'))
    {
         newAddress = address.substring(address.indexOf('.')+1,address.lastIndexOf('.'));
          newPath = address.substring(address.lastIndexOf('.')+1,address.length);
    }
    else{
         newAddress = address.substring(0,address.lastIndexOf('.'));
        newPath = address.substring(address.lastIndexOf('.')+1,address.length);

    }
    if(newPath.length>3)
    {
        currentPage= newPath.substring(newPath.indexOf('/')+1,address.length)
    }
    return currentPage===''?newAddress:`${newAddress}-${currentPage}`;
}
module.exports = getTitleOfSite;