package com.example.PetShop.Utils;

import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

public class FileUploadUtil {

    public static void saveFile(String fileName, MultipartFile multipartFile) throws IOException {
        Path upLoadDirectory = Paths.get("src/main/resources/templates/TsunyamiShop/public/img");

        try(InputStream inputStream= multipartFile.getInputStream()){
            Path filePath = upLoadDirectory.resolve(fileName);
            Files.copy(inputStream,filePath, StandardCopyOption.REPLACE_EXISTING);
        }catch(IOException e){
            throw  new IOException("Error upload File " +fileName);
        }
    }
}
