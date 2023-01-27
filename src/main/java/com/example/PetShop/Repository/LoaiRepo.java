package com.example.PetShop.Repository;

import com.example.PetShop.Entities.Loai;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoaiRepo extends JpaRepository<Loai,Integer> {
}
