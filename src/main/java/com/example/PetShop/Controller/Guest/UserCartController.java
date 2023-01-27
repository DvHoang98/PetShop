package com.example.PetShop.Controller.Guest;

import com.example.PetShop.DTO.HoaDonDTO;
import com.example.PetShop.Entities.HoaDon;
import com.example.PetShop.Entities.HoaDonChiTiet;
import com.example.PetShop.Entities.Users;
import com.example.PetShop.Service.HoaDonChiTietService;
import com.example.PetShop.Service.HoaDonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/cart")
public class UserCartController {

    @Autowired
    HoaDonChiTietService hoaDonChiTietService;

    @Autowired
    HoaDonService hoaDonService;

    @PostMapping("/buy")
    public HoaDon buyProducts (@RequestBody HoaDonDTO hoaDonDTO){
        DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
        Date date = new Date();
        Users loginUser = hoaDonDTO.getLoginUser();
        List<HoaDonChiTiet> lstHDCT = hoaDonDTO.getLstHDCT();
        HoaDon newHD =  new HoaDon();
        newHD.setNgayTao(date);
        newHD.setMa("HD"+dateFormat.format(date).replace("/","").replace(":","").replace(" ",""));
        newHD.setUser(loginUser);
        HoaDon createdHD = hoaDonService.saveHoaDon(newHD);
        for (HoaDonChiTiet hdct:
             lstHDCT) {
            hdct.setHoaDon(createdHD);
            hoaDonChiTietService.saveHDCT(hdct);
        }

        return null;
    }


}
