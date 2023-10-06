
const createTask = {
    tags: ['Task'],
    description: "create a task",
    security: [{ apiKey: [] }],
    requestBody: {
        content: {
            "multipart/form-data": {
                schema: {
                    type: "object",
                    properties: {
                        title: {
                            type: "String",
                            
                        },
                        description: {
                            type:"String",
                           
                        },
                        dueDate: {
                            type:"Date" ,
                            
                        },
                        completed: {
                            type: "Boolean",
                            
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


export const taskRouteDocs = {

    "/api/v1/task/create": {
        post: createTask
    }
}