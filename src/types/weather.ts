
export declare namespace Weather {

  /**
   * @todo [当前实况天气]
   *
   * @author Ghan
   * @interface WeatherSK
   */
  interface WeatherSK {
    temp: string; /*当前温度*/
    wind_direction: string; /*当前风向*/
    wind_strength: string; /*当前风力*/
    humidity: string; /*当前湿度*/
    time: string; /*更新时间*/
  }

  /**
   * @too [今日状况]
   *
   * @author Ghan
   * @interface WeatherToday
   */
  interface WeatherToday {
    city: string; 
    date_y: string;
    week: string;
    temperature: string; /*今日温度*/
    weather: string; /*今日天气*/
    weather_id: { /*天气唯一标识*/
      fa: string; /*天气标识00：晴*/
      fb: string; /*天气标识53：霾 如果fa不等于fb，说明是组合天气*/
    };
    wind: string;
    dressing_index: string; /*穿衣指数*/
    dressing_advice: string; /*穿衣建议*/
    uv_index: string; /*紫外线强度*/
    comfort_index: string; /*舒适度指数*/
    wash_index: string; /*洗车指数*/
    travel_index: string; /*旅游指数*/
    exercise_index: string; /*晨练指数*/
    drying_index: string; /*干燥指数*/
  }

  interface WeatherIndex {
    sk: WeatherSK;
    today: WeatherToday;
  }
}