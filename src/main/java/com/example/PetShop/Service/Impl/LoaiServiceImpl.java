package com.example.PetShop.Service.Impl;

import com.example.PetShop.Entities.Loai;
import com.example.PetShop.Repository.LoaiRepo;
import com.example.PetShop.Service.LoaiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class LoaiServiceImpl implements LoaiService {

    @Autowired
    LoaiRepo loaiRepo;

    @Override
    public Loai saveLoai(Loai loai) {
        return loaiRepo.save(loai);
    }

    @Override
    public List<Loai> getAllLoai() {
        return loaiRepo.findAll();
    }

    @Override
    public Loai findLoai(Integer id) {
        return loaiRepo.findById(id).get();
    }
}
