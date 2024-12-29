"use client";

import { useState } from "react";
import { images } from "@/data";
import Image from "next/image";
import { Dialog, DialogContent } from "@/components/dialog";
import { Card, CardContent } from "@/components/card";
import { Nav } from "@/components/nav";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="bg-black text-white">
      <Nav />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Image Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent
                className="p-0"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </CardContent>
            </Card>
          ))}
        </div>
        <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent className="max-w-3xl">
            {selectedImage && (
              <Image
                src={selectedImage}
                alt="Selected image"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
