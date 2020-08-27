单元测试
- chai.js  
    - 命令：nmp -i -D chai
    - 
    
- mock
    - 命令：npm -i -D chai-spies
    - chai spies监听函数
    
- 自动化测试：自动打开浏览器并运行测试脚本，并输出测试信息关闭浏览器
    - 工具
        - karma 测试运行器
        - mocha 写测试用例
        - sinon mock库，辅助测试
    - 命令：npm run test
- 持续集成 travis ci 阮一峰
    - 创建.yml文件，官网注册账号，对应github仓库
    - nodejs多版本测试
    
- 发布npm包