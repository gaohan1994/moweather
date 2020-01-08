import data from './data';

class WeatherService {

  // https://www.juhe.cn/docs/api/id/39 聚合接口
  public weatherIndex = async () => {
    console.log('data: ', data);
    return data;
  }
}

export default new WeatherService();