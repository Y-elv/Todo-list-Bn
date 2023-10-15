
const registerAppDocs = {
    tags: ['Register app'],
    description: "Registering apps",
    
    requestBody: {
        content: {
            "multipart/form-data": {
                schema: {
                    type: "object",
                    properties: {
                        appId: {
                            type: String,
                            required: true,
                        },
                        appName: {
                            type: String,
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