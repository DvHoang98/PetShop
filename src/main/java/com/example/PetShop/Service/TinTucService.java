package com.example.PetShop.Service;

import com.example.PetShop.DTO.TinTucDTO;
import com.example.PetShop.Entities.DongSp;
import com.example.PetShop.Entities.TinTuc;
import org.springframework.data.domain.Page;

import java.util.List;

public interface TinTucService {

    public TinTuc saveTinTuc(TinTuc dongSp);
    public Page<TinTuc> getAllTinTuc( int page, int size);
    public TinTuc findTinTuc(Integer id);
    public TinTuc DtoToEntity(TinTucDTO dto);
}
