package com.example.PetShop.Utils;

import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.scrypt.SCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class BCryptPasswordUtil {

    public String convertPassword(String password) {
        SCryptPasswordEncoder encoder = SCryptPasswordEncoder.defaultsForSpringSecurity_v5_8();
        String result = encoder.encode(password);
        return result;
    }

    public boolean checkPassword(String password , String loginPassword){
        System.out.println(password);
        System.out.println(loginPassword);
        SCryptPasswordEncoder encoder = SCryptPasswordEncoder.defaultsForSpringSecurity_v5_8();
        System.out.println("loi o day 2");
        return encoder.matches(loginPassword,password);
    }
}
