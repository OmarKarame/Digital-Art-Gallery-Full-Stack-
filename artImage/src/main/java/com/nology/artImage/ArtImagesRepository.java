package com.nology.artImage;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface ArtImagesRepository extends JpaRepository<ArtImage, Long> {
    @Query(value="SELECT DISTINCT id FROM art_image", nativeQuery = true)
    List<Long> getDistinctIds();

    @Query(value="SELECT * FROM art_image ORDER BY RAND() LIMIT 1", nativeQuery = true)
    ArtImage getRandomArtImage();

    void deleteArtImageById(long id);
}
