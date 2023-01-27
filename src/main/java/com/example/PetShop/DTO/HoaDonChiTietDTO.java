package com.example.PetShop.DTO;

public class HoaDonChiTietDTO {
    private Integer idHoaDonChiTiet;
    private Integer idHoaDon;
    private Integer idSanPham;
    private Integer soLuong;
    private Double donGia;

    public Integer getIdHoaDonChiTiet() {
        return this.idHoaDonChiTiet;
    }

    public void setIdHoaDonChiTiet(Integer idHoaDonChiTiet) {
        this.idHoaDonChiTiet = idHoaDonChiTiet;
    }

    public Integer getIdHoaDon() {
        return this.idHoaDon;
    }

    public void setIdHoaDon(Integer idHoaDon) {
        this.idHoaDon = idHoaDon;
    }

    public Integer getIdSanPham() {
        return this.idSanPham;
    }

    public void setIdSanPham(Integer idSanPham) {
        this.idSanPham = idSanPham;
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
}
