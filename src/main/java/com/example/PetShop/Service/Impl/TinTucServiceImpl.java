package com.example.PetShop.Service.Impl;

import com.example.PetShop.DTO.TinTucDTO;
import com.example.PetShop.Entities.TinTuc;
import com.example.PetShop.Repository.TinTucRepo;
import com.example.PetShop.Service.TinTucService;
import com.example.PetShop.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class TinTucServiceImpl implements TinTucService {

    @Autowired
    TinTucRepo tinTucRepo;
    @Autowired
    UserService userService;

    @Override
    public TinTuc saveTinTuc(TinTuc tinTuc) {
        return tinTucRepo.save(tinTuc);
    }

    @Override
    public Page<TinTuc> getAllTinTuc(int page, int size) {
        Pageable infoPage = PageRequest.of(page-1,size, Sort.by("id"));
        return  tinTucRepo.findAll(infoPage);
    }

    @Override
    public TinTuc findTinTuc(Integer id) {
        return tinTucRepo.findById(id).get();
    }

    @Override
    public TinTuc DtoToEntity(TinTucDTO dto) {
        TinTuc tt = new TinTuc();
        tt.setId(dto.getId());
        tt.setHinhAnh(dto.getHinhAnh());
        tt.setNoiDung(dto.getNoiDung());
        tt.setTieuDe(dto.getTieuDe());
        tt.setUser(userService.findById(dto.getIdNhanVien()));
        return tt;
    }
}
