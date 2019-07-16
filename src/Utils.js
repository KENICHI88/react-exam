const Utils = {};
Utils.createSession = function(keyname, value){
  return sessionStorage.setItem(keyname, value);
};
Utils.readSession = function(keyname){
  return sessionStorage.getItem(keyname);
};
Utils.eraseSession = function(keyname){
  return sessionStorage.removeItem(keyname)
};
Utils.isExistHistory = function(value, list){
  let rs = false;
  if(!list.length){
    return rs;
  }
  for(let i = 0; i < list.length; i++){
    if(list[i].url === value){
      rs = true;
      return true;
    }
  }
  return rs;
}

export default Utils;