## 来源

[JPetStore 6](https://petstore.octoperf.com/)  开源的模拟宠物销售网站

## 测试内容

1. 接口测试-http请求:使用http请求+响应断言对登录功能进行接口测试

    csv文件:

    ![csv](./imgs/屏幕截图(2012).png)

2. 接口测试-http请求2(已禁用):早期试验用请求,内容和1. 差不多

3. 压力测试-http请求(search):使用http请求+XPath断言,
并在线程组设置了并发数量3/持续30s/20s达到最大并发数量的测试条件,因为公用api可能没有进行适应高并发量的优化

    csv文件及说明:

    搜索时返回的结果是一个html页面,使用XPath断言判断html页面是否存在与response一列匹配的内容.如有,则说明没有出错

    ![csv2](./imgs/屏幕截图(2013).png)

