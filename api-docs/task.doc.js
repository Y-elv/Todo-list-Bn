
const createTask = {
    tags: ['Task'],
    description: "create a task",
    security:[
        {
            token: [],
          },
    ],
      


    requestBody: {
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        title: {
                            type: 'String',
                            
                        },
                        description: {
                            type:'String',
                           
                        },
                        dueDate: {
                            type:'String',
                            
                            
                        },
                        completed: {
                            type: "boolean",
                            
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