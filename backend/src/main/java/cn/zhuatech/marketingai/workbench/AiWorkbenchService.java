/* Copyright 2026 上海如静知华信息科技有限公司 · https://www.zhuatech.cn/ */
package cn.zhuatech.marketingai.workbench;

import static cn.zhuatech.marketingai.workbench.WorkbenchInput.*;

import java.math.*;
import java.util.*;
import org.springframework.stereotype.Service;

/** 上海如静知华信息科技有限公司 · https://www.zhuatech.cn/ 商业授权或定制开发请微信添加微信号zhuatech或zhuatech2进行咨询。 */
@Service
public class AiWorkbenchService {
  /** 上海如静知华信息科技有限公司 · https://www.zhuatech.cn/ 商业授权或定制开发请微信添加微信号zhuatech或zhuatech2进行咨询。 */
  public Map<String, Object> execute(Map<String, Object> r) {
    validate(r);
    keys(r, "control", "variant");
    List<Map<String, Object>> out = new ArrayList<>();
    double[] rates = new double[2];
    int index = 0;
    Set<String> ids = new HashSet<>();
    for (String side : List.of("control", "variant")) {
      var g = object(r.get(side));
      keys(g, "id", "visitors", "conversions");
      String id = id(g, "id");
      unique(ids, id);
      int n = integer(g, "visitors", 1, 1000000000), c = integer(g, "conversions", 0, n);
      double p = c / (double) n;
      rates[index++] = p;
      var interval = wilson(n, c);
      out.add(
          Map.of(
              "id",
              id,
              "visitors",
              n,
              "conversions",
              c,
              "conversionPercent",
              round(p * 100),
              "wilsonLowerPercent",
              interval.get(0),
              "wilsonUpperPercent",
              interval.get(1)));
    }
    return Map.of(
        "groups",
        out,
        "absoluteLiftPoints",
        round((rates[1] - rates[0]) * 100),
        "relativeLiftDefined",
        rates[0] > 0,
        "relativeLiftPercent",
        rates[0] == 0 ? BigDecimal.ZERO : round((rates[1] / rates[0] - 1) * 100),
        "automaticRollout",
        false);
  }
}
