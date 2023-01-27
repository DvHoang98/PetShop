package com.example.PetShop.Entities;

import jakarta.persistence.*;

import java.util.List;


@Entity
@Table(name = "dong_sp")
public class DongSp {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "ma_dong")
    private String maDong;

    @Column(name = "ten_dong" +
            "")
    private String tenDong;

    @OneToMany(mappedBy = "dongSp")
    private List<SanPham> lstSanPham;

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getMaDong() {
        return this.maDong;
    }

    public void setMaDong(String maDong) {
        this.maDong = maDong;
    }

    public String getTenDong() {
        return this.tenDong;
    }

    public void setTenDong(String tenDong) {
        this.tenDong = tenDong;
    }
}
