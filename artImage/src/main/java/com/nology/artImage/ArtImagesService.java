package com.nology.artImage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class ArtImagesService {
    @Autowired
    ArtImagesRepository artImagesRepository;

    // CREATE

    public void addArtImage(ArtImage artImage) {
        artImagesRepository.save(artImage);
    }

    // READ

    public ArtImage getArtImageById(long id) {
        Optional<ArtImage> greeting = artImagesRepository.findById(id);

        if (greeting.isEmpty()) {
            throw new ArtImageNotFoundException();
        }

        return greeting.get();
    }

    public ArtImage getRandomArtImage() {
        return artImagesRepository.getRandomArtImage();
    }

    public List<Long> getArtImageIds() {
        return artImagesRepository.getDistinctIds();
    }

    public void updateArtImage(ArtImage newArtImage, long id) {
        if (!artImagesRepository.existsById(id)) {
            throw new ArtImageNotFoundException();
        }

        newArtImage.setId(id);

        artImagesRepository.save(newArtImage);
    }

    public List<ArtImage> getAllArtImages(int limit) {
        return artImagesRepository
                .findAll()
                .stream()
                .limit(limit)
                .collect(Collectors.toList());
    }

    // DELETE
    @Transactional
    public void deleteArtImageById(long id) {
        if (!artImagesRepository.existsById(id)) {
            throw new ArtImageNotFoundException();
        }

        artImagesRepository.deleteArtImageById(id);
    }
}
