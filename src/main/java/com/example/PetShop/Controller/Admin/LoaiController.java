package com.example.PetShop.Controller.Admin;

import com.example.PetShop.Entities.Loai;
import com.example.PetShop.Service.LoaiService;
import com.example.PetShop.Utils.DataObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/admin/loai")
@CrossOrigin
public class LoaiController {

    @Autowired
    LoaiService loaiService;

    @GetMapping("/getAll")
    public DataObject getAllLoai(){
        return new DataObject( loaiService.getAllLoai());
    }

    @PostMapping("/add")
    public DataObject addLoai (@RequestBody Loai loai){
        loai.setId(null);
        return new DataObject (loaiService.saveLoai(loai));
    }

    @PutMapping("/update")
    public DataObject updateLoai(@RequestBody Loai loai){
        return new DataObject (loaiService.saveLoai(loai));
    }
}
