package com.example.PetShop.Entities;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "loai")
public class Loai {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "ma_loai")
    private String maLoai;

    @Column(name = "ten_loai")
    private String tenLoai;

    @OneToMany(mappedBy = "loai")
    private List<SanPham> lstSanPham;

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getMaLoai() {
        return this.maLoai;
    }

    public void setMaLoai(String maLoai) {
        this.maLoai = maLoai;
    }

    public String getTenLoai() {
        return this.tenLoai;
    }

    public void setTenLoai(String tenLoai) {
        this.tenLoai = tenLoai;
    }
}
