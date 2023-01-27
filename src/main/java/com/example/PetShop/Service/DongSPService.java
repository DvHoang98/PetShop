package com.example.PetShop.Service;

import com.example.PetShop.Entities.DongSp;

import java.util.List;

public interface DongSPService {

    public DongSp saveDongSP(DongSp dongSp);
    public List<DongSp> getAllDongSp();
    public DongSp findDongSp(Integer id);

}
