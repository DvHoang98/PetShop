package com.example.PetShop.Service.Impl;

import com.example.PetShop.DTO.LoginInfoDTO;
import com.example.PetShop.Entities.Users;
import com.example.PetShop.Repository.UserRepo;
import com.example.PetShop.Service.UserService;
import com.example.PetShop.Utils.BCryptPasswordUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.scrypt.SCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserRepo userRepo;

    @Autowired
    BCryptPasswordUtil bCryptPasswordUtil;

    @Override
    public Users saveUser(Users user) {

        return userRepo.save(user);
    }

    @Override
    public List<Users> getAllUser() {
        return userRepo.findAll();
    }

    @Override
    public Users findById(Integer id) {
        return userRepo.findById(id).get();
    }

    @Override
    public Users checkUser(LoginInfoDTO loginInfo) {
        Users foundUser = userRepo.loginUser(loginInfo.getUsername());
        if (foundUser != null && bCryptPasswordUtil.checkPassword(foundUser.getPassword(),loginInfo.getPassword())) {
            System.out.println("Looxi o day");
            return foundUser;
        }else return null;
    }

    @Override
    public boolean availableUsername(String username) {
        Users foundUser = userRepo.loginUser(username);
        if(foundUser==null)
        return true;
        else return false;
    }
}
