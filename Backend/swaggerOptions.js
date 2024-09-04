const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: 'Phoenix-E-Mart API',
        description: 'API documentation for Phoenix-E-Mart',
        version: '1.0.0',
      },
    },
    apis: ['./Routes/*.js'], // Path to the API routes
  };
  
module.exports = swaggerOptions;