package com.example.PetShop.Service;

import com.example.PetShop.Entities.HoaDonChiTiet;

import java.util.List;

public interface HoaDonChiTietService {

    public HoaDonChiTiet saveHDCT (HoaDonChiTiet hd);
    public List<HoaDonChiTiet> getAllHDCT ();
}
