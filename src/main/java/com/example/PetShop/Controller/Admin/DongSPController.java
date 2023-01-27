package com.example.PetShop.Controller.Admin;

import com.example.PetShop.Entities.DongSp;
import com.example.PetShop.Service.DongSPService;
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
@CrossOrigin
@RequestMapping("/admin/dong-sp")

public class DongSPController {

    @Autowired
    private DongSPService dongSPService;

    @PostMapping("/add")
    public DataObject addDongSP(@RequestBody DongSp dongSp){
        dongSp.setId(null);
        return new DataObject(dongSPService.saveDongSP(dongSp));
    }

    @GetMapping("/getAll")
    public DataObject getAllDongSp(){
        return new DataObject( dongSPService.getAllDongSp());
    }

    @PutMapping("/update")
    public DataObject updateDongSP(@RequestBody DongSp dongSp){
        return new DataObject(dongSPService.saveDongSP(dongSp));
    }
}
