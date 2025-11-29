import { useEffect, useState } from "react";

const imageCache = new Map<string, string>();
const pendingImages = new Map<string, Promise<string>>();

export function useImageCache(src: string): { cached: boolean; url: string } {
  const [cached, setCached] = useState(imageCache.has(src));
  const [url, setUrl] = useState(imageCache.get(src) || src);

  useEffect(() => {
    if (imageCache.has(src)) {
      setUrl(imageCache.get(src)!);
      setCached(true);
      return;
    }

    if (pendingImages.has(src)) {
      pendingImages.get(src)!.then((cachedUrl) => {
        setUrl(cachedUrl);
        setCached(true);
      });
      return;
    }

    const loadImage = async () => {
      try {
        const response = await fetch(src);
        const blob = await response.blob();
        const objectUrl = URL.createObjectURL(blob);
        imageCache.set(src, objectUrl);
        setUrl(objectUrl);
        setCached(true);
        return objectUrl;
      } catch (error) {
        console.error("Failed to cache image:", error);
        setUrl(src);
        setCached(false);
        return src;
      }
    };

    const promise = loadImage();
    pendingImages.set(src, promise);

    return () => {
      pendingImages.delete(src);
    };
  }, [src]);

  return { cached, url };
}
