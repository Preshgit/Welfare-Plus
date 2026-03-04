import Image, { StaticImageData } from "next/image";

interface GalleryImage {
  src: StaticImageData;
  alt: string;
  tall?: boolean;
}

interface ImageGalleryStripProps {
  images: GalleryImage[];
}

export default function ImageGalleryStrip({ images }: ImageGalleryStripProps) {
  return (
    <div className="flex items-center gap-[40px]">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative w-[320px] shrink-0 overflow-hidden rounded-sm"
          style={{ height: image.tall ? "380px" : "auto" }}
        >
          <Image
            src={image.src}
            alt={image.alt}
            {...(image.tall
              ? { fill: true }
              : { width: 320, height: image.src.height })}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
