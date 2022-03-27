import dotenv from 'dotenv';
import BotController from './src/controllers/bot.controller';

dotenv.config();

const bot = new BotController();