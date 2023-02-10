package com.nology.artImage;

public class ArtImageNotFoundException extends RuntimeException {
    public ArtImageNotFoundException() {
        super("ArtImage has not been found");
    }
}
