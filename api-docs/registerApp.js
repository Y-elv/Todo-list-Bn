
const registerApp = {
    tags: ['Register app'],
    description: "register app",
    
    requestBody: {
        content: {
            "multipart/form-data": {
                schema: {
                    type: "object",
                    properties: {
                        appId: {
                            type: 'String',
                            
                        },
                      appName: {
                            type:'String',
                           
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
        post:registerApp
    }
}