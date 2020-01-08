import fs from 'fs';
import Router from 'koa-router';

const router = new Router();

const controllerPath = 'controller';

class Controllers {

  public addMapping = async (router: Router, mapping: any) => {
    for (let url in mapping) {
      if ((url as string).startsWith('GET ')) {
        const path = url.substring(4);
        router.get(path, mapping[url]);
        console.log(`register URL mapping: GET ${path}`);
      } else if (url.startsWith('POST ')) {
        const path = url.substring(5);
        router.post(path, mapping[url]);
        console.log(`register URL mapping: POST ${path}`);
      } else {
        console.log(`invaild URL: ${url}`);
      }
    }
  }

  public addControllers = (router: Router, dir: string) => {
    /**
     * @param {tsControlleriles}
     * @todo [扫描所有controller文件]
     * @todo [筛选出所有.controller.ts文件]
     */
    const files = fs.readdirSync(__dirname + `/${dir}`);
    console.log('files: ', files);
    const tsControlleriles: string[] = (files as string[]).filter((f: string) => f.endsWith(`.${dir}.ts`));

    for (let file of tsControlleriles) {
      console.log(`process ${dir} ${file}...`);
      const mapping = require(__dirname + `/${dir}/` + file);
      this.addMapping(router, mapping);
    }
  }

  public init = (dir: string = controllerPath) => {
    this.addControllers(router, dir);
    return router.routes();
  }
}

export default new Controllers();