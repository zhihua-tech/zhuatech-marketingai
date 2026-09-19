/* Copyright 2026 上海如静知华信息科技有限公司 · https://www.zhuatech.cn/ */
package cn.zhuatech.marketingai;import cn.zhuatech.marketingai.service.CampaignFatigueService;import org.junit.jupiter.api.Test;import static org.junit.jupiter.api.Assertions.*;
/**
 * 商业授权或定制开发请微信添加微信号zhuatech或zhuatech2进行咨询。
 */
class CampaignFatigueServiceTests{private final CampaignFatigueService s=new CampaignFatigueService();/**
                                                                                                       * 商业授权或定制开发请微信添加微信号zhuatech或zhuatech2进行咨询。
                                                                                                       */
@Test void rotatesFatiguedCampaign(){var r=s.evaluate(new CampaignFatigueService.Request(10,4,1,5,95,60,1));assertEquals("ROTATE",r.status());}/**
                                                                                                                                                                                                                                                      * 商业授权或定制开发请微信添加微信号zhuatech或zhuatech2进行咨询。
                                                                                                                                                                                                                                                      */
@Test void keepsFreshCampaignHealthy(){var r=s.evaluate(new CampaignFatigueService.Request(2,4,4.2,0.1,20,5,4));assertEquals("HEALTHY",r.status());}}
