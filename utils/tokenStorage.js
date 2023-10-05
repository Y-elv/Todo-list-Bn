let tokenStore ={}

function storeToken (appId,token){
tokenStore[appId]=token
}

function getToken(appId){
return tokenStore[appId]
}
export {storeToken,getToken}