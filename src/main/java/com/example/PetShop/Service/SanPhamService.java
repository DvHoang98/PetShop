package com.example.PetShop.Service;

import com.example.PetShop.DTO.SanPhamDTO;
import com.example.PetShop.Entities.SanPham;
import org.springframework.data.domain.Page;

import java.util.List;

public interface SanPhamService {

    public SanPham saveSanPham(SanPham sanPham);
    public Page<SanPham> getByType (Integer type,Integer classP,String nameP,int pageNumber,int size);
    public  List<SanPham> getAll ();
    public SanPham DtoToEntity (SanPhamDTO spDTO);

    public List<SanPham> getByTypeToHomePage (Integer type,Integer classP);

    public  SanPham getById ( Integer id);
}
