import { Plugin, App } from "vue";
import SvgIcon from "./SvgIcon.vue";

const componentPlugin: Plugin = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  install: function (vue: App, options: any) {
    if (
      options &&
      options.imports &&
      Array.isArray(options.imports) &&
      options.imports.length > 0
    ) {
      // 按需引入图标
      const { imports } = options;
      imports.forEach((name: string | number) => {
        require(`./svg/${name}.svg`);
      });
    } else {
      // 全量引入图标
      const ctx = require.context("./svg", false, /\.svg$/);
      ctx.keys().forEach((path) => {
        const temp = path.match(/\.\/([A-Za-z0-9\-_]+)\.svg$/);
        if (!temp) return;
        const name = temp[1];
        require(`./svg/${name}.svg`);
      });
    }
    vue.component(SvgIcon.name, SvgIcon);
  },
};
export default componentPlugin;
