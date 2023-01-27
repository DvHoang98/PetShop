package com.example.PetShop.Service.Impl;

import com.example.PetShop.DTO.SanPhamDTO;
import com.example.PetShop.Entities.SanPham;
import com.example.PetShop.Repository.DongSPRepo;
import com.example.PetShop.Repository.LoaiRepo;
import com.example.PetShop.Repository.SanPhamRepo;
import com.example.PetShop.Service.SanPhamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SanPhamServiceImpl implements SanPhamService {

    @Autowired
    SanPhamRepo sanPhamRepo;
    @Autowired
    DongSPRepo dongSPRepo;
    @Autowired
    LoaiRepo loaiRepo;


    @Override
    public SanPham saveSanPham(SanPham sanPham) {
        return sanPhamRepo.save(sanPham);
    }

    @Override
    public Page<SanPham> getByType(Integer type , Integer classP,String nameP,int pageNumber,int size) {
        Pageable page = PageRequest.of(pageNumber-1,size);
        return sanPhamRepo.findByType(type,classP,nameP, page);
    }

    @Override
    public List<SanPham> getAll() {
        return sanPhamRepo.findAll();
    }

    @Override
    public SanPham DtoToEntity(SanPhamDTO dto) {
        SanPham sp = new SanPham();
        sp.setId(dto.getId());
        sp.setMa(dto.getMa());
        sp.setTen(dto.getTen());
        sp.setGia(dto.getGia());
        sp.setSoLuong(dto.getSoLuong());
        sp.setHinhAnh(dto.getHinhAnh());
        sp.setTrangThai(dto.getTrangThai());
        sp.setMoTa(dto.getMoTa());
        sp.setDongsp(dongSPRepo.findById(dto.getIdDongSp()).get());
        sp.setLoai(loaiRepo.findById(dto.getIdLoai()).get());
        return sp;
    }

    @Override
    public List<SanPham> getByTypeToHomePage(Integer type, Integer classP) {
        return sanPhamRepo.findByTypeToHomePage(type,classP);
    }

    @Override
    public SanPham getById(Integer id) {
        return sanPhamRepo.findById(id).get();
    }

}
