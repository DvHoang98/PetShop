package com.example.PetShop.Service;

import com.example.PetShop.Entities.HoaDon;

import java.util.List;

public interface HoaDonService {
    public HoaDon saveHoaDon (HoaDon hd);
    public List<HoaDon> getAllHoaDon ();
}
