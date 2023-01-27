package com.example.PetShop.Controller;

import com.example.PetShop.DTO.LoginInfoDTO;
import com.example.PetShop.Entities.Users;
import com.example.PetShop.Service.UserService;
import com.example.PetShop.Utils.BCryptPasswordUtil;
import com.example.PetShop.Utils.DataObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.view.RedirectView;

import java.net.URI;

@RestController
@CrossOrigin
public class LoginController {

    @Autowired
    UserService userService;
    @Autowired
    BCryptPasswordUtil bCryptPasswordUtil;

    @PostMapping("/login")
    private DataObject login(@RequestBody LoginInfoDTO loginInfo){
        DataObject a = new DataObject(userService.checkUser(loginInfo ));
        System.out.println(a.getData().toString());
        return a;
    }

    @PostMapping("/register")
    private DataObject register(@RequestBody Users users){
        if(!userService.availableUsername(users.getUsername())) {
            return new DataObject(null);
        }
        users.setId(null);
        users.setChucVu(false);
        users.setPassword(bCryptPasswordUtil.convertPassword(users.getPassword()));
        return new DataObject(userService.saveUser(users));

    }


}

