package com.nology.artImage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class ArtImagesController {
    @Autowired
    private ArtImagesService artImagesService;

    @ExceptionHandler
    public ResponseEntity<String> handleExceptions(ArtImageNotFoundException exception) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(exception.getMessage());
    }

    // CREATE

    @PostMapping("/artimage")
    public ResponseEntity<ArtImage> createArtImage(@RequestBody ArtImage artImage) {
        artImagesService.addArtImage(artImage);
        return ResponseEntity.status(HttpStatus.CREATED).body(artImage);
    }

    // READ

    @GetMapping("/greet")
    public ResponseEntity<String> greet() {
        return ResponseEntity.status(HttpStatus.OK).body("Hello world!");
    }

    @GetMapping("/artimages")
    public ResponseEntity<List<ArtImage>> getArtImages(@RequestParam(defaultValue = "100") int limit) {
        return ResponseEntity.status(HttpStatus.OK).body(artImagesService.getAllArtImages(limit));
    }

    @GetMapping("/artimages/ids")
    public ResponseEntity<List<Long>> getGreetingsIds() {
        return ResponseEntity.status(HttpStatus.OK).body(artImagesService.getArtImageIds());
    }

    @GetMapping("/artimage/random")
    public ResponseEntity<ArtImage> getRandomArtImage() {
        return ResponseEntity.status(HttpStatus.OK).body(artImagesService.getRandomArtImage());
    }

    @GetMapping("/artimage/{id}")
    public ResponseEntity<ArtImage> getArtImageById(@PathVariable long id) {
        return ResponseEntity.status(HttpStatus.OK).body(artImagesService.getArtImageById(id));
    }

    // UPDATE

    @PutMapping("/artimage/{id}")
    public ResponseEntity<ArtImage> updateGreeting(@RequestBody ArtImage newArtImage, @PathVariable long id) {
        newArtImage.setId(id);
        artImagesService.updateArtImage(newArtImage, id);
        return ResponseEntity.status(HttpStatus.OK).body(newArtImage);
    }

    // DELETE

    @DeleteMapping("/artimage/{id}")
    public ResponseEntity<Void> deleteGreetingById(@PathVariable long id) {
        artImagesService.deleteArtImageById(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}