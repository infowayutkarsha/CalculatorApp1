var add=(a,b)=>{
    return parseInt(a)+parseInt(b);
}
var sub=(a,b)=>{
    return parseInt(a)-parseInt(b);
}
var div=(a,b)=>{
    return parseInt(a)/parseInt(b);
}
var multi=(a,b)=>{
    return parseInt(a)*parseInt(b);
}
var percentage=(a,b)=>{
    return ((parseInt(a)/parseInt(b))*100)
}


module.exports={add,sub,div,multi,percentage};