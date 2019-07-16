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

export default Utils;