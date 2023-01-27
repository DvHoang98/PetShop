package com.example.PetShop.Service.Impl;

import com.example.PetShop.Entities.HoaDon;
import com.example.PetShop.Repository.HoaDonRepo;
import com.example.PetShop.Service.HoaDonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HoaDonServiceImpl implements HoaDonService {

    @Autowired
    HoaDonRepo hoaDonRepo;

    @Override
    public HoaDon saveHoaDon(HoaDon hd) {
        return hoaDonRepo.save(hd);
    }

    @Override
    public List<HoaDon> getAllHoaDon() {
        return hoaDonRepo.findAll();
    }
}
