package com.example.PetShop.Repository;

import com.example.PetShop.Entities.TinTuc;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TinTucRepo extends JpaRepository<TinTuc,Integer> {
}
