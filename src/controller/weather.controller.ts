import Koa from 'koa';
import WeatherService from '../service/weather.service';

class Weather {

  public weatherIndex = async (ctx: Koa.Context, next: Koa.Next): Promise<void> => {
    try {
      const result = await WeatherService.weatherIndex();
      ctx.response.body = result; 
    } catch (error) {
      console.log('error ', error);
    }
  }
}

const WeatherController = new Weather();

module.exports = {
  'GET /': WeatherController.weatherIndex,
  'GET /weather': WeatherController.weatherIndex,
}