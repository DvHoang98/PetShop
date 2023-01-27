package com.example.PetShop.ViewModel;

import com.example.PetShop.Entities.TinTuc;

import java.util.List;

public class TinTucView {

    private List<TinTuc> lst ;
    private Integer totalPage;

    public List<TinTuc> getLst() {
        return lst;
    }

    public TinTucView(List<TinTuc> lst, Integer totalPage) {
        this.lst = lst;
        this.totalPage = totalPage;
    }

    public void setLst(List<TinTuc> lst) {
        this.lst = lst;
    }

    public Integer getTotalPage() {
        return totalPage;
    }

    public void setTotalPage(Integer totalPage) {
        this.totalPage = totalPage;
    }
}
