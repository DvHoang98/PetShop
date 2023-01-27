package com.example.PetShop.Entities;

import jakarta.persistence.*;

@Entity
@Table(name = "hoa_don_chi_tiet")
public class HoaDonChiTiet {
    @Id
    @Column(name = "id_hoa_don_chi_tiet")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idHoaDonChiTiet;

    @Column(name = "so_luong")
    private Integer soLuong;

    @Column(name = "don_gia")
    private Double donGia;

    @ManyToOne
    @JoinColumn(name = "id_san_pham")
    private SanPham sanPham;

    @ManyToOne
    @JoinColumn(name = "id_hoa_don")
    private HoaDon hoaDon;

    public Integer getIdHoaDonChiTiet() {
        return this.idHoaDonChiTiet;
    }

    public void setIdHoaDonChiTiet(Integer idHoaDonChiTiet) {
        this.idHoaDonChiTiet = idHoaDonChiTiet;
    }

    public Integer getSoLuong() {
        return this.soLuong;
    }

    public void setSoLuong(Integer soLuong) {
        this.soLuong = soLuong;
    }

    public Double getDonGia() {
        return this.donGia;
    }

    public void setDonGia(Double donGia) {
        this.donGia = donGia;
    }

    public SanPham getSanPham() {
        return sanPham;
    }

    public void setSanPham(SanPham sanPham) {
        this.sanPham = sanPham;
    }

    public HoaDon getHoaDon() {
        return hoaDon;
    }

    public void setHoaDon(HoaDon hoaDon) {
        this.hoaDon = hoaDon;
    }


}
