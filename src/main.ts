import { NestFactory } from '@nestjs/core'; //创建一个实例
import { AppModule } from './app.module';

async function bootstrap() { //这里是es6+ 的语法  通过同步的方式去写异步的方法
  const app = await NestFactory.create(AppModule); //通过实例去创建一个AppModule 的模块 ->对应的文件 app.module.ts 
  await app.listen(3000); //端口位置
}
bootstrap(); //执行方法 将服务启动
