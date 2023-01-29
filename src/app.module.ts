import { Module } from '@nestjs/common';
import { AppController } from './app.controller'; 
import { AppService } from './app.service';

@Module({ //装饰器 Module 装饰器
  imports: [],//用于导入对应的我们写的依赖模块
  controllers: [AppController], //控制器
  providers: [AppService], //服务
})
export class AppModule {} //这是一个类 真正起作用的是Module  整体就是一个模块 APP模块
