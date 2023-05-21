import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
// import { grpcClientOptions } from './grpc-client.options';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'hero',
        protoPath: join(__dirname, './hero/hero.proto'),
      },
    },
  );
  await app.listen();

  // const app = await NestFactory.create(AppModule);

  // app.connectMicroservice<MicroserviceOptions>(grpcClientOptions);

  // // await app.startAllMicroservices();

  // await app.listen(3000);
}
bootstrap();
