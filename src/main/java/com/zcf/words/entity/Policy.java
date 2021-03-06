package com.zcf.words.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Setter
@Getter
@Table(name = "policy")
public class Policy {

    @Id
    private Integer policy_id;//主键
    private String policy_content;//隐私政策内容
    private Date create_time;//创建日期
    private Date update_time;//修改日期
    private String mark;//备注
    private String del_flag;//删除标记 0正常 1已删除
}
