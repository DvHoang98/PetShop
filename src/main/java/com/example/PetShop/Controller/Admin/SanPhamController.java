package com.example.PetShop.Controller.Admin;

import com.example.PetShop.DTO.SanPhamDTO;
import com.example.PetShop.Entities.SanPham;
import com.example.PetShop.Service.SanPhamService;
import com.example.PetShop.Utils.DataObject;
import com.example.PetShop.Utils.FileUploadUtil;
import jakarta.servlet.ServletContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;


import java.io.File;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/admin")
@CrossOrigin()
public class SanPhamController {

    @Autowired
    ServletContext app;

    @Autowired
    SanPhamService sanPhamService;

    @PostMapping("/san-pham/upload")
    public DataObject uploadAnh (
            @RequestPart (value="img") MultipartFile hinhAnh
    ){
        String fileName = StringUtils.cleanPath(hinhAnh.getOriginalFilename());
        try {
            FileUploadUtil.saveFile(fileName,hinhAnh);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        return  new DataObject(hinhAnh.getOriginalFilename());
    }

    @PostMapping("/san-pham/add")
    public SanPham addSanPham (
            @RequestBody SanPhamDTO spDTO
    ){
        return sanPhamService.saveSanPham(sanPhamService.DtoToEntity(spDTO));
    }

}
