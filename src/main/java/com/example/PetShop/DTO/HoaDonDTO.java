package com.example.PetShop.DTO;

import com.example.PetShop.Entities.HoaDonChiTiet;
import com.example.PetShop.Entities.Users;

import java.util.Date;
import java.util.List;

public class HoaDonDTO {
    private Users loginUser;
    private List<HoaDonChiTiet> lstHDCT;

    @Override
    public String toString() {
        return "HoaDonDTO{" +
                "loginUser=" + loginUser.toString() +
                ", lstHDCT=" + lstHDCT +
                '}';
    }

    public Users getLoginUser() {
        return loginUser;
    }

    public void setLoginUser(Users loginUser) {
        this.loginUser = loginUser;
    }

    public List<HoaDonChiTiet> getLstHDCT() {
        return lstHDCT;
    }

    public void setLstHDCT(List<HoaDonChiTiet> lstHDCT) {
        this.lstHDCT = lstHDCT;
    }

}
