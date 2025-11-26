  const swaggerJsdoc = require("swagger-jsdoc");

  const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "API Plataforma Educativa",
        version: "1.0.0",
        description: "Documentación Swagger"
      },
      servers: [
        { url: "http://localhost:3000" }
      ],
      components: { 
        securitySchemes: { // Define cómo se usa el JWT
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          }
        },
        schemas: {
          Curso: {
            type: "object",
            properties: {
              id: { type: "integer", description: "ID único del curso", example: 1 },
              nombre: { type: "string", description: "Nombre del curso", example: "Matemáticas I" },
              codigo: { type: "string", description: "Código de identificación", example: "ABC123" }
            },
            required: ["nombre", "codigo"]
          },
          LoginRequest: {
            type: "object",
            properties: {
              email: { type: "string", example: "demo@demo.com" },
              password: { type: "string", example: "1234" }
            },
            required: ["email", "password"]
          },
          NotaRequest: { 
            type: "object",
            properties: {
              valor: { type: "number", format: "float", example: 95.5, description: "Valor de la calificación" },
              descripcion: { type: "string", example: "Tarea 1" }
            },
            required: ["valor"]
          },
          GaleriaRequest: {
            type: "object",
            properties: {
              url: { type: "string", format: "url", example: "http://ejemplo.com/foto1.jpg", description: "URL de la imagen" },
              caption: { type: "string", example: "Clase de campo" }
            },
            required: ["url"]
          },
          MensajeGenerico: {
            type: "object",
            properties: {
              msg: { type: "string", example: "Curso eliminado" }
            }
          }
        }
      }
    },
    apis: ["./src/routes/*.js"]
  };

  module.exports = swaggerJsdoc(options);