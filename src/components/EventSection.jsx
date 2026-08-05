'use client';

import React, { useState, useEffect } from "react";
import { RowsPhotoAlbum } from 'react-photo-album';
import 'react-photo-album/rows.css';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

function EventSection({ name, images }) {
    const [index, setIndex] = useState(-1);
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        let cancelled = false;
        Promise.all(
            images.map((src) =>
                new Promise((resolve) => {
                    const img = new window.Image();
                    img.onload = () => resolve({ src, width: img.naturalWidth, height: img.naturalHeight });
                    img.onerror = () => resolve({ src, width: 1600, height: 1200 }); // fallback
                    img.src = src;
                })
            )
        ).then((results) => {
            if (!cancelled) setPhotos(results);
        });
        return () => { cancelled = true; };
    }, [images]);

    return(
        <div className="event-section">
            <h2 className="event-title">{name}</h2>
            <RowsPhotoAlbum
              photos={photos}
              targetRowHeight={250}
              onClick={({ index }) => setIndex(index)}
            />
            <Lightbox
              slides={photos}
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
              plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
            <style>{`
                .event-section {
                    margin-bottom: 32px;
                }

                .event-title {
                    color: var(--tertiary-color, #fff);
                    text-align: center;
                    background-color: var(--secondary-color, #9ed203);
                    border-radius: var(--bs-border-radius, 6px);
                    padding: 8px 16px;
                    margin: 16px 0;
                    font-size: 24px;
                    font-weight: bold;
                }

                .react-photo-album--photo {
                    border-radius: 10px;
                    overflow: hidden;
                    cursor: pointer;
                    transition: all 0.3s ease;
                }

                .react-photo-album--photo img {
                    border-radius: 10px;
                }

                .react-photo-album--photo:hover {
                    filter: drop-shadow(0px 0px 20px var(--secondary-color));
                    transform: scale(1.02);
                }
            `}</style>
        </div>
    );
}

export default EventSection;
