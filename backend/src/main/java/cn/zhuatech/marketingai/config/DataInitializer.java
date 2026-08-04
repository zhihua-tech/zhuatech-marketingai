/* Copyright 2026 上海如静知华信息科技有限公司 */
package cn.zhuatech.marketingai.config;
import cn.zhuatech.marketingai.model.*; import cn.zhuatech.marketingai.repository.*; import org.springframework.boot.CommandLineRunner; import org.springframework.context.annotation.*; import org.springframework.security.crypto.password.PasswordEncoder; import java.time.LocalDate; import java.util.List;
@Configuration public class DataInitializer {
 @Bean CommandLineRunner seed(OperatingUnitRepository units,WorkRecordRepository orders,ResourceRegisterRepository resources,ReviewRecordRepository reviews,UserRepository users,PasswordEncoder encoder){return args->{if(units.count()>0)return;
 var u1=units.save(new OperatingUnit("MKT-GROWTH","增长内容组","品牌市场中心",180));var u2=units.save(new OperatingUnit("MKT-PRODUCT","产品营销组","产品中心",120));var u3=units.save(new OperatingUnit("MKT-BRAND","品牌内容组","品牌市场中心",96));
 var t1=orders.save(new WorkRecord("MKT-260804-018","AI-WHITEPAPER","企业 AI 落地白皮书推广",u1,24,16,1,LocalDate.now().plusDays(1),WorkRecord.Status.RUNNING,"官网+公众号"));
 var t2=orders.save(new WorkRecord("MKT-260804-021","CRM-OSS-LAUNCH","CRM 开源版发布传播",u2,18,8,0,LocalDate.now().plusDays(2),WorkRecord.Status.RUNNING,"社区+社媒"));
 var t3=orders.save(new WorkRecord("MKT-260804-026","CASE-VIDEO","客户案例视频脚本",u1,12,0,0,LocalDate.now().plusDays(3),WorkRecord.Status.RELEASED,"视频号"));
 var t4=orders.save(new WorkRecord("MKT-260803-015","TECH-MONTHLY","七月技术月报",u3,20,20,1,LocalDate.now(),WorkRecord.Status.COMPLETED,"官网+邮件"));
 resources.saveAll(List.of(new ResourceRegister("BRAND-KB-01","品牌语料库",u1,ResourceRegister.Status.RUNNING,97),new ResourceRegister("COPY-GEN-02","渠道内容生成器",u2,ResourceRegister.Status.IDLE,87),new ResourceRegister("ASSET-LIB-03","营销素材库",u3,ResourceRegister.Status.RUNNING,91),new ResourceRegister("CLAIM-CHECK-04","效果声明检查器",u1,ResourceRegister.Status.ALARM,71)));
 reviews.saveAll(List.of(new ReviewRecord("RV-260804-032",t1,"人工复核",6,0,ReviewRecord.Result.PASSED,"唐沐"),new ReviewRecord("RV-260804-011",t2,"质量检查",3,0,ReviewRecord.Result.PASSED,"夏语"),new ReviewRecord("RV-260803-018",t4,"结果抽查",5,1,ReviewRecord.Result.FAILED,"唐沐"),new ReviewRecord("RV-260804-003",t3,"上线确认",4,0,ReviewRecord.Result.PENDING,"夏语")));
 String demo=encoder.encode("Demo@2026");users.saveAll(List.of(new UserAccount("operator",demo,"夏语",UserAccount.Role.DOMAIN_USER,"MKT-GROWTH"),new UserAccount("planner",demo,"唐沐",UserAccount.Role.DOMAIN_OPERATOR,null),new UserAccount("quality",demo,"顾清",UserAccount.Role.QUALITY,null),new UserAccount("admin",encoder.encode("ZhuaTech@2026"),"系统管理员",UserAccount.Role.ADMIN,null)));};}
}