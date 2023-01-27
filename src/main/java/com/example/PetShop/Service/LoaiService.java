package com.example.PetShop.Service;

import com.example.PetShop.Entities.DongSp;
import com.example.PetShop.Entities.Loai;

import java.util.List;

public interface LoaiService {
    public Loai saveLoai(Loai loai);
    public List<Loai> getAllLoai();
    public Loai findLoai(Integer id);
}
