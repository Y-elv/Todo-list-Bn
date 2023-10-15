
import swaggerJSDoc from "swagger-jsdoc"
import {welcomeRouteDocs} from "./welcome.doc.js"
import {taskRouteDocs} from "./task.doc.js"
import { registerRouteDocs } from "./registerApp.js"
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
        { name: 'Register app', description: 'Registering apps' },
        { name: 'Task', description: 'task Routes' }
       
        
      ],
      components: {
        securitySchemes: {
          token: {
            type: 'apiKey',
            scheme: 'bearer',
            bearerFormat: 'JWT',
            name:"token",
            in:"header"
           
          },
        },
      },
      paths: {...taskRouteDocs,...welcomeRouteDocs,...registerRouteDocs},
    },
    apis: ['..routes/**/*.js'],
  }

const swaggerSpec = swaggerJSDoc(options);



export default swaggerSpec;