package com.example.PetShop.Repository;

import com.example.PetShop.Entities.DongSp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DongSPRepo extends JpaRepository<DongSp,Integer> {
}
