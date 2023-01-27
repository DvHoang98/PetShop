package com.example.PetShop.DTO;

public class SanPhamDTO {
    private Integer id;
    private String ma;
    private String ten;
    private String hinhAnh;
    private String moTa;
    private Double gia;
    private Integer soLuong;
    private Integer trangThai;
    private Integer idLoai;
    private Integer idDongSp;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getMa() {
        return ma;
    }

    public void setMa(String ma) {
        this.ma = ma;
    }

    public String getTen() {
        return ten;
    }

    public void setTen(String ten) {
        this.ten = ten;
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

    public Double getGia() {
        return gia;
    }

    public void setGia(Double gia) {
        this.gia = gia;
    }

    public Integer getSoLuong() {
        return soLuong;
    }

    public void setSoLuong(Integer soLuong) {
        this.soLuong = soLuong;
    }

    public Integer getTrangThai() {
        return trangThai;
    }

    public void setTrangThai(Integer trangThai) {
        this.trangThai = trangThai;
    }

    public Integer getIdLoai() {
        return idLoai;
    }

    public void setIdLoai(Integer idLoai) {
        this.idLoai = idLoai;
    }



    public Integer getIdDongSp() {
        return idDongSp;
    }

    public void setIdDongSp(Integer idDongSp) {
        this.idDongSp = idDongSp;
    }



    @Override
    public String toString() {
        return "SanPhamDTO{" +
                "id=" + id +
                ", ma='" + ma + '\'' +
                ", ten='" + ten + '\'' +
                ", moTa='" + moTa + '\'' +
                ", gia=" + gia +
                ", soLuong=" + soLuong +
                ", trangThai=" + trangThai +
                ", idLoai=" + idLoai +
                ", idDongSp=" + idDongSp +
                '}';
    }
}
