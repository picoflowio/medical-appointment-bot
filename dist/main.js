"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter());
    app.useStaticAssets({
        root: (0, path_1.join)(__dirname, '..', 'public'),
        prefix: '/public/',
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Chat Flow API')
        .setDescription('API documentation for Chat Flow')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(8000, '0.0.0.0');
}
bootstrap();
//# sourceMappingURL=main.js.map