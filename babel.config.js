/*
 * @Description:
 * @Author: JveGuo
 * @Date: 2021-03-15 09:11:57
 * @LastEditTime: 2021-03-15 10:40:18
 * @LastEditors: JveGuo
 */
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'], //表示哪个目录开始设置绝对路径
        alias: {
          //别名的配置
          // '@/utils': './src/utils',
          '@/pages': './src/pages',
          '@/navigator': './src/navigator',
          // '@/models': './src/models',
          // '@/config': './src/config',
          '@/components': './src/components',
          '@/assets': './src/assets',
        },
      },
    ],
  ],
};
