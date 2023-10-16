
const registerAppDocs = {
    tags: ['Register app'],
    description: "Registering apps",
    
    requestBody: {
        content: {
            "multiple/form-data": {
                schema: {
                    type: "object",
                    properties: {
                        appId: {
                            type: "String",
                            required: true,
                        },
                        appName: {
                            type: "String",
                            required: true,
                        },
                    
                    }
                }
            }
        }
    },
    responses: {
        200: {
            description: "OK",
            content: {
                "application/json": {
                    type: "object",
                    example: {
                        status: "success",
                        data: []
                    }
                }
            }
        }
    }
}


export const registerRouteDocs = {

    "/api/v1/task/register": {
        post:registerAppDocs
    }
}

// export default  {

//     '/api/v1/task/register':{
//         post:{
//             tags: ['Register app'],
//             description :'Registering apps',
//             requestBody:{
//                 content:{
//                     'application/json':{
//                         schema:{
//                             type:'object'
                          
//                         },
//                         example:{
//                             appId:'app123',
//                             appName:'AUCA-SYSTEM'
//                         }
//                     }
//                 },
//                 required:true
//             }
                
            
//         },
//         responses:{
//             200:{
//                 description:'ok'
//             }

//         }
        
//     }
// }