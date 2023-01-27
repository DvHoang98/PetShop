package com.example.PetShop.Entities;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "san_pham")
public class SanPham {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "ma")
    private String ma;

    @Column(name = "ten")
    private String ten;

    @Column(name = "hinh_anh")
    private String hinhAnh;

    @Column(name = "mo_ta")
    private String moTa;

    @Column(name = "gia")
    private Double gia;

    @Column(name = "so_luong")
    private Integer soLuong;

    @Column(name = "trang_thai")
    private Integer trangThai;

    @ManyToOne
    @JoinColumn(name = "id_loai")
    private Loai loai;

    @ManyToOne
    @JoinColumn(name = "id_dong_sp")
    private DongSp dongSp;

//    @OneToMany(mappedBy = "sanPham")
//    private List<HoaDonChiTiet> lstHDCT;

    public Loai getLoai() {
        return loai;
    }

    public void setLoai(Loai loai) {
        this.loai = loai;
    }

    public DongSp getDongsp() {
        return dongSp;
    }

    public void setDongsp(DongSp dongsp) {
        this.dongSp = dongsp;
    }

    public String getHinhAnh() {
        return hinhAnh;
    }

    public void setHinhAnh(String hinhAnh) {
        this.hinhAnh = hinhAnh;
    }

    public String getMoTa() {
        return moTa;
    }

    public void setMoTa(String moTa) {
        this.moTa = moTa;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getMa() {
        return this.ma;
    }

    public void setMa(String ma) {
        this.ma = ma;
    }

    public String getTen() {
        return this.ten;
    }

    public void setTen(String ten) {
        this.ten = ten;
    }

    public Double getGia() {
        return this.gia;
    }

    public void setGia(Double gia) {
        this.gia = gia;
    }

    public Integer getSoLuong() {
        return this.soLuong;
    }

    public void setSoLuong(Integer soLuong) {
        this.soLuong = soLuong;
    }

    public Integer getTrangThai() {
        return this.trangThai;
    }

    public void setTrangThai(Integer trangThai) {
        this.trangThai = trangThai;
    }

    @Override
    public String toString() {
        return "SanPham{" +
                "id=" + id +
                ", ma='" + ma + '\'' +
                ", ten='" + ten + '\'' +
                ", hinhAnh='" + hinhAnh + '\'' +
                ", moTa='" + moTa + '\'' +
                ", gia=" + gia +
                ", soLuong=" + soLuong +
                ", trangThai=" + trangThai +
                ", loai=" + loai +
                ", dongSp=" + dongSp +
                '}';
    }
}
