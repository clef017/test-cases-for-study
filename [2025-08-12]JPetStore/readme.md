## 来源

[JPetStore 6](https://petstore.octoperf.com/)  开源的模拟宠物销售网站

## 开始

#### 接口测试

调试后模拟注册了一个账号并获取登录api的路径:/actions/Account.action

遇到的问题:登录失败和登录成功的响应都是成功后的页面,似乎没什么不同,接下来进一步调试,以制定合理的测试用例

调试结果:使用响应代码判断是否登录成功,登录成功会在post请求后跟一个get请求,但中间请求头的状态码是302(需要禁用重定向)

首次接口测试通过,测试的数据见login.csv

#### 压力测试(模拟)

以尽量不对服务器造成负载的前提进行一些模拟的压测

目标:学习接入prom进行监控并将结果打印到grafana上,并熟悉压测的流程与接口测试的不同之处

开始压测可能需要先用个cookie管理器,先调试一下

学习了XPath断言的使用 格式举例//div[\@id='xxx']  两个斜杠是必要的

csv设置无误后正式进行,调试线程组的设置,并用无GUI的方式执行测试

 jmeter -n -t [jmx file] -l [results file] -e -o [Path to web report folder]

jmeter -n -t "D:\STUDY\test cases for study\JPetStore\JPetStore Pressure testing.jmx" -l "D:\STUDY\test cases for study\JPetStore\result\pressure testing result.jtl" -e -o "D:\STUDY\test cases for study\JPetStore\report"

要点:report文件夹在执行命令时不存在,靠执行命令来创建

#### 压力测试结果接入grafana

成功后禁用结果查看树和聚合报告,尝试使用prom+grafana进行压测



