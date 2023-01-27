package com.example.PetShop.ViewModel;

import com.example.PetShop.Entities.SanPham;

import java.util.List;

public class SanPhamView {

    private List<SanPham> list;

    private int totalPage;

    public List<SanPham> getList() {
        return list;
    }

    public void setList(List<SanPham> list) {
        this.list = list;
    }

    public int getTotalPage() {
        return totalPage;
    }

    public void setTotalPage(int totalPage) {
        this.totalPage = totalPage;
    }

    public SanPhamView(List<SanPham> list, int totalPage) {
        this.list = list;
        this.totalPage = totalPage;
    }
}
