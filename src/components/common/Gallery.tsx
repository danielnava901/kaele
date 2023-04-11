import React, { useState } from "react";

const Gallery = ({ photos }) => {
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const handlePhotoClick = (photo) => {
        setSelectedPhoto(photo);
    };

    const handleModalClose = () => {
        setSelectedPhoto(null);
    };

    return (
        <div className="gallery-container">
            <div className="gallery-grid">
                {photos.map((photo, index) => (
                    <div
                        key={index}
                        className="gallery-item"
                        onClick={() => handlePhotoClick(photo)}
                    >
                        <img src={photo.src} alt={photo.alt} />
                    </div>
                ))}
            </div>
            {selectedPhoto && (
                <div className="modal-container" onClick={handleModalClose}>
                    <div className="modal-content">
                        <img src={selectedPhoto.src} alt={selectedPhoto.alt} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
