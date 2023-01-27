package com.example.PetShop.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "hoa_don")
public class HoaDon {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "ma")
    private String ma;

    @ManyToOne
    @JoinColumn(name = "id_user")
    @JsonBackReference
    private Users user;

    @Column(name = "ngay_tao")
    private Date ngayTao;

//    @OneToMany(mappedBy = "hoaDon")
//    private List<HoaDonChiTiet> lstHDCT;

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

    public Date getNgayTao() {
        return ngayTao;
    }

    public void setNgayTao(Date ngayTao) {
        this.ngayTao = ngayTao;
    }

    public Users getUser() {
        return user;
    }

    public void setUser(Users user) {
        this.user = user;
    }

//    public List<HoaDonChiTiet> getLstHDCT() {
//        return lstHDCT;
//    }
//
//    public void setLstHDCT(List<HoaDonChiTiet> lstHDCT) {
//        this.lstHDCT = lstHDCT;
//    }

}
