package com.example.PetShop.Service.Impl;

import com.example.PetShop.Entities.HoaDonChiTiet;
import com.example.PetShop.Repository.HoaDonChiTietRepo;
import com.example.PetShop.Repository.HoaDonRepo;
import com.example.PetShop.Service.HoaDonChiTietService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HoaDonChiTietServiceImpl implements HoaDonChiTietService {

    @Autowired
    HoaDonChiTietRepo hoaDonChiTietRepo;
    @Override
    public HoaDonChiTiet saveHDCT(HoaDonChiTiet hd) {
        return hoaDonChiTietRepo.save(hd);
    }

    @Override
    public List<HoaDonChiTiet> getAllHDCT() {
        return hoaDonChiTietRepo.findAll();
    }
}
