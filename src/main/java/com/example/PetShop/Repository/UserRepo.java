package com.example.PetShop.Repository;

import com.example.PetShop.DTO.LoginInfoDTO;
import com.example.PetShop.Entities.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<Users,Integer> {

    @Query(value = """
        SELECT u FROM Users  u 
        WHERE (:username = u.username)
""")
    Users loginUser (@Param("username")String username);

}
