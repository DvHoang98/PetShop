package com.example.PetShop.Controller.Guest;

import com.example.PetShop.Entities.TinTuc;
import com.example.PetShop.Service.TinTucService;
import com.example.PetShop.Utils.DataObject;
import com.example.PetShop.ViewModel.TinTucView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/tin-tuc")
@CrossOrigin
public class UserTinTucController {

    @Autowired
    TinTucService tinTucService;

    @GetMapping("/getAll/page={page}/size={size}")
    public DataObject getAllTinTuc (
            @PathVariable("page") int currentPage,
            @PathVariable("size") int sizePage
    ){
        Page<TinTuc> page = tinTucService.getAllTinTuc(currentPage,sizePage);
        int totalPage = page.getTotalPages();
        List<TinTuc> lst = page.getContent();
        System.out.println(lst.size());
        return new DataObject(new TinTucView(lst,totalPage)) ;
    }

    @GetMapping("/getDetail/id={id}")
    public DataObject getDetail (
            @PathVariable ("id") Integer id
    ){
        return new DataObject(tinTucService.findTinTuc(id));
    }
}
