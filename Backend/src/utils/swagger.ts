import { Application } from "express";
import path from "path";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options: swaggerJsdoc.Options = {
  swaggerDefinition: {
    openapi: "3.0.0",

    info: {
      title: "Venn Hood Finder API Documentation",
      version: "1.0.0",
      description: "API documentation for Venn Hood Finder",
    },
  },
  apis: [path.resolve(__dirname, "../routes/*.route.ts")],
};

const specs = swaggerJsdoc(options);

export const bindSwagger = (app: Application) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};
