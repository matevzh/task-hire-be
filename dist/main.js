"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const logger = new common_2.Logger('Bootstrap');
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: false,
        whitelist: true
    }));
    app.enableCors();
    app.use((req, res, next) => {
        logger.log(`Request: ${req.method} ${req.url}`);
        res.on('finish', () => {
            logger.log(`Response: ${res.statusCode}`);
        });
        next();
    });
    await app.listen(process.env.PORT ?? 3000);
    logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map