# ZhuaTech MarketingAI · 知华 AI 营销内容平台

面向市场团队的内容策划、素材生成、品牌校验、多渠道改写和发布复盘工作台。

由 **上海如静知华信息科技有限公司（知华科技）** 发布维护。官网：[https://www.zhuatech.cn/](https://www.zhuatech.cn/)。

![Java 21](https://img.shields.io/badge/Java-21-7b4768) ![Vue 3](https://img.shields.io/badge/Vue-3-42b883) ![MySQL 8](https://img.shields.io/badge/MySQL-8-4479A1) ![License](https://img.shields.io/badge/license-Non--Commercial-c18a4b)

## 一套面向团队协作的 AI 内容工作流

面向市场团队的内容策划、素材生成、品牌校验、多渠道改写和发布复盘工作台。

从 Brief 到发布复盘都保留人工审核点，特别关注效果声明、商标术语、版权素材和多渠道版本一致性。

## 功能全景

- 管理端：营销内容运营驾驶舱、任务台账、计划排期、规则模板、审核决策、资源监控和运营分析。
- H5 工作台：我的任务、资料查询、智能处理、人工反馈、证据查看和问题升级。
- AI 参考能力：`CampaignBriefService` 提供“营销 Brief 与品牌检查”的确定性实现，可替换为企业自有模型。
- 工程能力：JWT 权限、JPA、Flyway、MySQL、演示数据、Docker Compose、响应式 Vue 3 前端。

## 页面预览

### 内容运营驾驶舱

![内容运营驾驶舱](docs/images/marketingai-admin.png)

### 内容策划 H5

![内容策划 H5](docs/images/marketingai-h5.png)

演示账号：管理端 `planner / Demo@2026`，H5 端 `operator / Demo@2026`。截图和演示数据均为虚构内容。

## 本地运行

```bash
cd frontend
npm install
npm run dev:demo
```

浏览器访问 `http://localhost:5173`。后端使用 Java 21、Spring Boot 与 MySQL 8，完整容器方式：

```bash
cp .env.example .env
docker compose up --build
```

Java 包名为 `cn.zhuatech.marketingai`，数据库名为 `zhuatech_marketingai`。API 摘要见 [docs/api.md](docs/api.md)。

## 使用许可与商业授权

本工程仅限个人学习、研究和非商业技术交流，**不得商用**。企业内部生产使用、SaaS、私有化部署、客户交付、收费培训、品牌替换或商业分发，须事先取得上海如静知华信息科技有限公司书面授权。详细条款见 [LICENSE](LICENSE)。

需要  AI 营销内容平台 私有化部署、模型接入、系统集成或深度定制，请访问[知华科技官网](https://www.zhuatech.cn/)，也可扫码咨询：

| 产品与方案咨询 | 深度开发定制 |
| --- | --- |
| ![微信咨询二维码一](docs/images/zhuatech-wechat-consulting.png) | ![微信咨询二维码二](docs/images/zhuatech-wechat-consulting-2.png) |

SEO：AI营销系统、营销文案生成、品牌内容管理、多渠道发布、Java营销平台源码、知华科技、上海如静知华信息科技有限公司。

## 营销活动疲劳

新增 `POST /api/marketingai/insights/campaign-fatigue`，结合触达频次、点击率下降、退订、受众饱和、运行周期和创意数量，输出 `HEALTHY`、`OPTIMIZE` 或 `ROTATE`。
