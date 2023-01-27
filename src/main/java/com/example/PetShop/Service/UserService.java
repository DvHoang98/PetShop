package com.example.PetShop.Service;

import com.example.PetShop.DTO.LoginInfoDTO;
import com.example.PetShop.Entities.Users;

import java.util.List;

public interface UserService {

    public Users saveUser (Users user);
    public List<Users> getAllUser ();
    public Users findById (Integer id);
    public Users checkUser (LoginInfoDTO loginInfo);
    public boolean availableUsername (String username);
}
