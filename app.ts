import dotenv from 'dotenv';
import Server from './models/server';

//Configurar Dotenv
dotenv.config();

const server = new Server();

server.listen();