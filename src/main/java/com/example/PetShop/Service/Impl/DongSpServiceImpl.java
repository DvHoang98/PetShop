package com.example.PetShop.Service.Impl;

import com.example.PetShop.Entities.DongSp;
import com.example.PetShop.Repository.DongSPRepo;
import com.example.PetShop.Service.DongSPService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DongSpServiceImpl implements DongSPService {

    @Autowired
    private DongSPRepo dongSPRepo;

    @Override
    public DongSp saveDongSP(DongSp dongSp) {
        return dongSPRepo.save(dongSp);
    }

    @Override
    public List<DongSp> getAllDongSp() {
        return dongSPRepo.findAll();
    }

    @Override
    public DongSp findDongSp(Integer id) {
        return dongSPRepo.findById(id).get();
    }

}
