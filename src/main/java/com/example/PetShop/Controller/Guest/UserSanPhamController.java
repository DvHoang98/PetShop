package com.example.PetShop.Controller.Guest;

import com.example.PetShop.Entities.SanPham;
import com.example.PetShop.Service.SanPhamService;
import com.example.PetShop.Utils.DataObject;
import com.example.PetShop.ViewModel.SanPhamView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/san-pham")
@CrossOrigin
public class UserSanPhamController {

    @Autowired
    SanPhamService sanPhamService;

    @GetMapping("/get/type={typeP}/class={classP}")
    public DataObject getSanPhamByType (
            @PathVariable("typeP") String typeP,
            @PathVariable("classP") String classP
    ){
        return new DataObject (sanPhamService.getByTypeToHomePage(typeP=="" ? null : Integer.parseInt(typeP),  classP=="" ? null : Integer.parseInt(classP)));
    }
    @GetMapping("/getAll")
    public  DataObject getAllSanPham (){
        return new DataObject (sanPhamService.getAll());
    }


    @GetMapping("/get/type={typeP}/class={classP}/name={nameP}/page={page}/size={size}")
    public DataObject getPageSanPham (
            @PathVariable("typeP") String typeP,
            @PathVariable("classP") String classP,
            @PathVariable("nameP") String nameP,
            @PathVariable("page") int currentPage,
            @PathVariable("size") int sizePage
    ){
        Page<SanPham> page =  sanPhamService.getByType(typeP=="" ? null : Integer.parseInt(typeP),  classP=="" ? null : Integer.parseInt(classP),nameP,currentPage,sizePage);
        int totalPage = page.getTotalPages();
        List<SanPham> lst = page.getContent();
        return new DataObject (new SanPhamView(lst,totalPage));
    }

    @GetMapping("/detail/id={idP}")
    public DataObject getSanPhamById (
            @PathVariable("idP") Integer id
    ){
        return new DataObject (sanPhamService.getById(id));
    }

}
