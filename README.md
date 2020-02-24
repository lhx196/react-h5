### 总结(后续会重写)

npx create-react-app my-app --template typescript

react-router-dom @type/react-router-dom下载相关typescript类型文件 --.d.ts

package添加prettier配置

```javascript
"prettier": {
	"printWidth": 120,
	"singleQuote": true,
	"trailingComma": "es5",
	"bracketSpacing": true,
	"jsxBracketSameLine": false,
	"parser": "babylon",
	"semi": true,
	"requirePragma": false
}
```

tsconfig添加默认路径
```javascript
	"baseUrl": "src"
```

config --放置公用文件

routers.tsx 路由配置，根据路由字典动态生成组件，最终导出到App.ts中

type --放置ts定义类型，如组件中需要用到路由、redux属性，必须先经过type定义

action --redux action 声明文件，后续可配置统一导出

reducer --reducer模块化，index统一导出

react-app-rewired  customize-cra 配置引入项目

--less-loader 必须引用customize-cra@next，官方还未解决最新版兼容问题

ts中需要在react-app-env.d.ts声明less类型说明
```javascript
declare module "*.module.less" {
    const classes: { [key: string]: string };
    export default classes;
}
```