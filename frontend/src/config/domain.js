/* Copyright 2026 上海如静知华信息科技有限公司 · https://www.zhuatech.cn/ */
export const domain={
 code:'MARKETINGAI',systemName:'知华 AI 营销内容平台',englishName:'MARKETING CONTENT STUDIO',theme:{primary:'#7b4768',dark:'#392738',accent:'#c18a4b',},
 workspace:'品牌市场中心 / 内容运营部',fieldWorkspace:'增长内容组',period:'2026-08-04 · 实时运营',liveText:'运营数据于 10:36 更新',fieldContextLabel:'当前工作周期',fieldContext:'八月第一周',fieldUser:'夏语',fieldRole:'内容策划',adminUser:'唐沐',adminRole:'营销运营负责人',
 adminTitle:'营销内容运营驾驶舱',adminBreadcrumb:'内容智能运营 / 全局态势',adminSubtitle:'统一观察内容产能、品牌一致性、渠道排期、审核风险和转化反馈。',exportAction:'导出运营报告',createAction:'新建内容任务',
 chartTitle:'内容处理完成趋势',chartSubtitle:'本月实际完成率 / 运营目标',chartLabels:['01日','05日','09日','13日','17日','21日','25日','29日','31日'],loadTitle:'内容领域负荷',loadSubtitle:'开放任务占团队处理能力',recordsTitle:'重点内容任务',recordsSubtitle:'按优先级、期限与待修改排序',issueTitle:'需要关注的运营事项',issueSubtitle:'需要跨团队确认或升级处理',
 recordName:'内容任务',itemName:'营销活动',unitName:'业务品牌',batchName:'渠道组合',planName:'内容件',doneName:'已交付',exceptionName:'待修改',unitLabel:'项',
 listBreadcrumb:'内容工作台 / 内容任务',listSubtitle:'面向市场团队的内容策划、素材生成、品牌校验、多渠道改写和发布复盘工作台。',listSummary:[['本月内容','68'],['本周处理','24'],['待修改','9'],['高优先级','3',true]],tabs:['全部','待处理','进行中','待确认','已归档'],
 fieldBreadcrumb:'内容运营 / 内容策划工作台',fieldTitle:'内容策划工作台',fieldSubtitle:'本周内容 28 条 · 待审核 7 条 · 今日发布 5 条',fieldSecondary:'查看工作日历',reportAction:'提交处理反馈',fieldNoticeTitle:'智能服务运行正常',fieldNotice:'任务数据完整率 93.8%',
 steps:[
 '创建 Brief',
 '生成初稿',
 '品牌校验',
 '人工审核',
 '发布复盘'
],documentAction:'查看操作手册',printAction:'导出工作档案',resourceCardTitle:'智能资源状态',resourceValueLabel:'当前处理量',resourceHealthLabel:'服务健康度',quickSubtitle:'常用工作入口',quickActions:[
 [
  '智能创作',
  '/shopfloor/report',
  'Brief、标题、正文与渠道改写'
 ],
 [
  '内容日历',
  '/shopfloor/material',
  '活动、渠道与发布时间'
 ],
 [
  '品牌资产',
  '/shopfloor/resources',
  '语料、模板、素材与授权'
 ],
 [
  '合规升级',
  '/shopfloor/andon',
  '事实、版权与敏感表达'
 ]
],
 reportDefaults:[6,1],reportTitle:'内容任务处理反馈',reportSubtitle:'记录已交付、待修改和处理建议。',reportSuccess:'内容审核反馈已提交',reportPlaceholder:'填写处理结论、引用依据、后续要求与负责人',reportFootnote:'提交后自动进入负责人复核队列',ruleTitle:'智能处理质量门禁',ruleSubtitle:'MARKETINGAI-POLICY · V1.0',rules:[['人工复核','关键结果必须'],['引用与依据','必须保留'],['权限检查','执行前完成'],['运行评估','每月',true]],fieldTotals:[['68','本月内容'],['3','高优先级'],['9','待修改'],['93.8%','数据完整率']],
 adminMenus:[['/admin','home','运营控制中心'],['/admin/work-orders','order','内容任务'],['/admin/samples','box','营销活动台账'],['/admin/schedule','calendar','计划与排期'],['/admin/methods','process','规则与模板'],['/admin/reviews','quality','审核与决策'],['/admin/resources','machine','智能资源'],['/admin/report','chart','运营分析']],
 fieldMenus:[['/shopfloor','home','内容策划工作台'],['/shopfloor/report','report','处理反馈'],['/shopfloor/tasks','order','我的任务'],['/shopfloor/material','box','营销活动台账'],['/shopfloor/resources','machine','智能资源'],['/shopfloor/andon','risk','问题升级',3]],
 moduleTitles:{tasks:['我的待办任务','查看优先级、期限与处理状态'],material:['营销活动台账','查询完整资料、历史版本与责任人'],resources:['智能资源中心','管理知识、模型、连接器和处理服务'],andon:['问题升级','提交重大风险、争议或阻塞事项'],samples:['营销活动台账','统一管理业务对象、资料与上下游依赖'],schedule:['计划与排期','协调负责人、参与方和交付窗口'],methods:['规则与模板','维护处理口径、质量标准和模板'],reviews:['审核与决策','记录确认、驳回和复核要求'],report:['运营分析','分析质量、效率、异常和处理周期']},
 tagline:'内容生产更高效，品牌表达更一致',storyTitle:'内容生产更高效，<br/>品牌表达更一致',storyText:'面向市场团队的内容策划、素材生成、品牌校验、多渠道改写和发布复盘工作台。',pattern:[2,4,7,9,12,15,18,21,24,27,29,31],loginStats:[['60','本月内容'],['93.8%','数据完整率'],['3','高优先级']],loginTitle:'营销内容运营驾驶舱',adminDemo:'管理 / 运营 / 分析',fieldDemo:'任务 / 处理 / 反馈'
}
export const records=[
 {no:'MKT-260804-018',name:'企业 AI 落地白皮书推广',code:'AI-WHITEPAPER',unit:'增长内容组',group:'品牌市场中心',plan:24,done:16,exception:3,due:'08-05',batch:'官网+公众号',status:'制作中',progress:67,priority:'加急'},
 {no:'MKT-260804-021',name:'CRM 开源版发布传播',code:'CRM-OSS-LAUNCH',unit:'产品营销组',group:'产品中心',plan:18,done:8,exception:2,due:'08-06',batch:'社区+社媒',status:'待审核',progress:44,priority:'关注'},
 {no:'MKT-260804-026',name:'客户案例视频脚本',code:'CASE-VIDEO',unit:'品牌内容组',group:'品牌市场中心',plan:12,done:0,exception:0,due:'08-07',batch:'视频号',status:'待开始',progress:12,priority:'加急'},
 {no:'MKT-260803-015',name:'七月技术月报',code:'TECH-MONTHLY',unit:'增长内容组',group:'品牌市场中心',plan:20,done:20,exception:1,due:'08-03',batch:'官网+邮件',status:'已发布',progress:100,priority:'正常'},
 {no:'MKT-260804-031',name:'行业解决方案落地页',code:'INDUSTRY-LANDING',unit:'产品营销组',group:'商业中心',plan:16,done:11,exception:2,due:'08-08',batch:'搜索+官网',status:'优化中',progress:76,priority:'关注'}
]
export const resources=[{code:'BRAND-01',name:'品牌语料与禁用词库',unit:'品牌管理组',status:'运行中',health:97,value:'846',valueUnit:'条',note:'品牌口径已更新至 V3.2'},{code:'COPY-02',name:'多渠道内容生成器',unit:'AI 能力中心',status:'复核中',health:87,value:'42',valueUnit:'稿',note:'6 条内容等待人工审核'},{code:'ASSET-03',name:'营销素材资产库',unit:'内容运营部',status:'预警',health:78,value:'1,286',valueUnit:'项',note:'12 个素材授权即将到期'}]
export const reviews=[{no:'APR-260804-032',title:'AI 白皮书推广文案审核',type:'品牌审核',detail:'6 渠道 · 唐沐',result:'待确认'},{no:'APR-260804-011',title:'CRM 发布内容事实核验',type:'产品审核',detail:'18 项声明 · 夏语',result:'通过'},{no:'APR-260803-018',title:'客户案例肖像授权检查',type:'合规审核',detail:'缺口 2 项',result:'异常'}]
export const adminMetrics=[['本月内容','68','较上月新增 6','blue'],['本周处理','24','平均周期 2.6 天','green'],['待修改','9','其中 3 项临近期','orange'],['高优先级','3','需要负责人决策','red']]
export const fieldMetrics=[['我的任务','6','3 项高优先级','blue'],['今日已处理','18','质量检查已完成','green'],['待修改','9','3 项临近期限','orange'],['数据完整率','93.8%','较上周提升 2.4%','slate']]
export const chartActual=[18,26,37,45,56,63,72,81,87],chartTarget=[20,30,40,50,60,70,80,90,96]
export const loads=[
 [
  '产品发布与增长',
  88,
  '开放任务 14 个'
 ],
 [
  '品牌与行业内容',
  76,
  '开放任务 9 个'
 ],
 [
  '客户案例与活动',
  69,
  '开放任务 7 个'
 ],
 [
  '社媒与私域运营',
  58,
  '开放任务 11 个'
 ]
]
export const issues=[
 [
  '事实',
  '白皮书推广文案含未验证效果数据',
  '涉及 3 个渠道 · 需产品确认',
  '待审议'
 ],
 [
  '品牌',
  'CRM 发布稿两处术语不符合品牌口径',
  '已生成替换建议',
  '修改中'
 ],
 [
  '版权',
  '客户案例视频缺少一份肖像授权',
  '发布计划 08-07',
  '待补充'
 ]
].map(x=>({type:x[0],title:x[1],detail:x[2],status:x[3]}))
