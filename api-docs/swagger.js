import swaggerUi from "swagger-ui-express"
import swaggerJSDoc from "swagger-jsdoc"


const options = {
    definition: {
      openapi: '3.0.0',
      info: {
        version: '1.0.0',
        title: 'Todo-list Api',
        description: 'Todo-list api configurations',
      },
      servers: [
        {
          url: 'http://localhost:8000',
          description: 'Development server',
        },
 
      ],
      tags: [
        
        { name: 'landing page', description: 'landing Routes' },
        { name: 'Task', description: 'task Routes' }
       
        
      ],
      components: {
        securitySchemes: {
          token: {
            type: 'apiKey',
            scheme: 'bearer',
           
          },
        },
      },
      paths: {...taskRouteDocs,...welcomeRouteDocs},
    },
    apis: ['../routes/**/*.js'],
  }

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app) =>{
    app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec));
}

export default swaggerDocs;