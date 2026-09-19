/* Copyright 2026 上海如静知华信息科技有限公司 · https://www.zhuatech.cn/ */
package cn.zhuatech.marketingai.controller;import cn.zhuatech.marketingai.common.ApiResponse;import cn.zhuatech.marketingai.service.CampaignFatigueService;import jakarta.validation.Valid;import org.springframework.web.bind.annotation.*;
/**
 * 商业授权或定制开发请微信添加微信号zhuatech或zhuatech2进行咨询。
 */
@RestController @RequestMapping("/api/marketingai/insights/campaign-fatigue") public class CampaignFatigueController{private final CampaignFatigueService service;/**
                                                                                                                                                                   * 商业授权或定制开发请微信添加微信号zhuatech或zhuatech2进行咨询。
                                                                                                                                                                   */
public CampaignFatigueController(CampaignFatigueService service){this.service=service;}/**
                                                                                                                                                                                                                                                          * 商业授权或定制开发请微信添加微信号zhuatech或zhuatech2进行咨询。
                                                                                                                                                                                                                                                          */
@PostMapping ApiResponse<CampaignFatigueService.Result> evaluate(@Valid @RequestBody CampaignFatigueService.Request r){return ApiResponse.ok(service.evaluate(r));}}
