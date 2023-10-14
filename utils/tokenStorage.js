

function storeToken (appId,token){
localStorage.setItem("jwtToken",token)
localStorage.setItem("appId",appId)
}

function retrieveToken(appId){
return tokenStore[appId]
}
export {storeToken,retrieveToken}