package com.example.PetShop.Controller.Admin;

import com.example.PetShop.DTO.TinTucDTO;
import com.example.PetShop.Entities.TinTuc;
import com.example.PetShop.Service.TinTucService;
import com.example.PetShop.Utils.DataObject;
import com.example.PetShop.Utils.FileUploadUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class TinTucController {
    @Autowired
    TinTucService tinTucService;

    @PostMapping("/tin-tuc/add")
    public TinTuc addTinTuc (
            @RequestBody TinTucDTO dto
            )
    {
        return tinTucService.saveTinTuc(tinTucService.DtoToEntity(dto));
    }

    @PostMapping("/tin-tuc/upload")
    public DataObject uploadAnh (
            @RequestPart(value="img") MultipartFile hinhAnh
    ){
        String fileName = StringUtils.cleanPath(hinhAnh.getOriginalFilename());
        try {
            FileUploadUtil.saveFile(fileName,hinhAnh);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return  new DataObject(hinhAnh.getOriginalFilename());
    }
}
