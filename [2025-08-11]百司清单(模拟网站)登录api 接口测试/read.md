## 来源:

[百司清单(开源模拟网站)](https://ticket.pescms.com/)

## 开始之前:

对首页右上角的登录接口进行接口测试,接口:login

以下为可能的参数:

| 参数 | 描述 |
|:---|:---|
|back_url| 未知,可以留空|
|email| 邮箱,可能有格式要求 |
|password| 全部为123456|
|verify| 验证码,可以不填|

本次练习的目的是找出程序bug并定位bug

因为控制台里什么也不报,也没有返回code,可能不太好出结果

## 开始写测试用例

使用Login作为接口报404

接口是m=Login,Login是参数而m是接口吗?

接下来使用m和a作为参数

仍然报404 无法得知请求网址为:
https://ticket.pescms.com/?m=Login&a=index
的情况下接口是什么

查看标头的cookie发现:

PESTKSESSION=fu7ehd49h42eqbcftsmuj4lm0d; Hm_lvt_f0690aac15345cc1534fd2979a477c1e=1754884102,1754920440; HMACCOUNT=C72A61CD9E3E51F9; Hm_lvt_01aec0a5d8b8eae60b94596bfacd0ed9=1754920528; HMACCOUNT=C72A61CD9E3E51F9; Hm_lpvt_f0690aac15345cc1534fd2979a477c1e=1754922645; Hm_lpvt_01aec0a5d8b8eae60b94596bfacd0ed9=1754922672

分析不出结果

查看载荷栏发现登录实际用到的参数在token里面

token=9fbf60cbb02a70820bfae6546e3b5c56_4910275709574&back_url=&email=&password=123456&verify=

本网页是一个PHP框架的网页,不太熟这个,我比较熟RESTful的

需要**正则表达式提取器**和**http cookie管理器**

综上,因为缺乏说明文档和一些技术不足的问题,测试无法进行下去

但并非没有收获:**需要学习一些php框架的内容,并补全一些没用过的jmeter功能的知识**