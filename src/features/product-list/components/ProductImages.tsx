"use client";
import React, { useState } from "react";

import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

interface IImageProps {
  photos: IPhotoData[];
}

interface IPhotoData {
  src: string;
  width: number;
  height: number;
}

export default function ProductImages({ photos }: IImageProps) {
  const [index, setIndex] = useState(-1);
  return (
    <>
      <PhotoAlbum
        layout="masonry"
        photos={photos}
        onClick={({ index }) => setIndex(index)}
        renderPhoto={({ photo, wrapperStyle, renderDefaultPhoto }) => (
          <div className="rounded overflow-hidden" style={{ ...wrapperStyle }}>
            {renderDefaultPhoto({ wrapped: true })}
          </div>
        )}
      />
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  );
}
