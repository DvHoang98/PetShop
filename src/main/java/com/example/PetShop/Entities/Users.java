package com.example.PetShop.Entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Entity
@Table(name = "users")
public class Users
//        implements UserDetails
{
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "username")
    private String username;

    @Column(name = "ten")
    private String ten;

    @Column(name = "mail")
    private String mail;

    @Column(name = "pass")
    private String password;

    @Column(name = "sdt")
    private String sdt;

    @Column(name ="chuc_vu")
    private boolean chucVu;

    @OneToMany(mappedBy = "user")
    @JsonManagedReference
    private List<HoaDon> lstHoaDon;

    @OneToMany(mappedBy = "user")
    private List<TinTuc> lstTinTuc;

    public boolean isChucVu() {
        return chucVu;
    }

    public void setChucVu(boolean chucVu) {
        this.chucVu = chucVu;
    }

    public Integer getId() {
        return this.id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

//    @Override
//    public Collection<? extends GrantedAuthority> getAuthorities() {
//        return null;
//    }
//
//    @Override
//    public String getPassword() {
//        return this.password;
//    }
//
    public String getUsername() {
        return this.username;
    }

//
//    @Override
//    public boolean isAccountNonExpired() {
//        return false;
//    }
//
//    @Override
//    public boolean isAccountNonLocked() {
//        return false;
//    }
//
//    @Override
//    public boolean isCredentialsNonExpired() {
//        return false;
//    }
//
//    @Override
//    public boolean isEnabled() {
//        return false;
//    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getTen() {
        return this.ten;
    }

    public void setTen(String ten) {
        this.ten = ten;
    }

    public String getMail() {
        return this.mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String pass) {
        this.password = pass;
    }

    public String getSdt() {
        return this.sdt;
    }

    public void setSdt(String sdt) {
        this.sdt = sdt;
    }

    public List<HoaDon> getLstHoaDon() {
        return lstHoaDon;
    }

    public void setLstHoaDon(List<HoaDon> lstHoaDon) {
        this.lstHoaDon = lstHoaDon;
    }

    @Override
    public String toString() {
        return "Users{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", ten='" + ten + '\'' +
                ", mail='" + mail + '\'' +
                ", password='" + password + '\'' +
                ", sdt='" + sdt + '\'' +
                ", chucVu=" + chucVu +
                ", lstHoaDon=" + lstHoaDon +
                ", lstTinTuc=" + lstTinTuc +
                '}';
    }
}
