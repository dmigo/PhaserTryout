function Variable(){}
Variable.prototype.isValid = function (str){
    if(str==undefined)
        return false;
    return true; //todo implement !/^([a-zA-Z_$]|[\\w$])/.test(str);
};
Variable.prototype.parse = function (str) {
    return {
        type:"variable",
        name:str
    };
};