package com.example.PetShop.Repository;

import com.example.PetShop.Entities.SanPham;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SanPhamRepo extends JpaRepository<SanPham,Integer> {

    @Query(value = """
            SELECT sp FROM SanPham sp
            INNER JOIN DongSp dsp ON sp.dongSp.id = dsp.id
                INNER JOIN Loai l ON sp.loai.id = l.id
            WHERE (:typeP is null or :typeP = sp.loai.id)
            AND (:classP is  null or :classP = sp.dongSp.id)
            AND (:nameP is null or sp.ten like %:nameP%)
            AND (sp.trangThai = 1)
            """)
    Page<SanPham> findByType (@Param("typeP")Integer typeP , @Param("classP")Integer classP , @Param("nameP")String nameP, Pageable page);


    @Query(value = """
            SELECT sp FROM SanPham sp
            INNER JOIN DongSp dsp ON sp.dongSp.id = dsp.id
                INNER JOIN Loai l ON sp.loai.id = l.id
            WHERE (:typeP is null or :typeP = sp.loai.id)
            AND (:classP is  null or :classP = sp.dongSp.id)
            AND (sp.trangThai = 1)
            """)
    List<SanPham> findByTypeToHomePage (@Param("typeP")Integer typeP , @Param("classP")Integer classP );
}
