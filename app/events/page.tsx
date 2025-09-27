"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { devEvents } from "@/lib/events";
import {
  ExternalLink,
  ArrowRight,
  Trophy,
  Users,
  Code,
  Zap,
  Calendar,
  MapPin,
  Award,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Breadcrumbs from "@/components/routes-header-breadcrumb";
import { useState } from "react";

export default function EventsPage() {
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    eventImages: string[];
    currentIndex: number;
  } | null>(null);

  const openModal = (
    imageSrc: string,
    alt: string,
    eventImages: string[],
    index: number
  ) => {
    setSelectedImage({
      src: imageSrc,
      alt: alt,
      eventImages: eventImages,
      currentIndex: index,
    });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage) {
      const nextIndex =
        (selectedImage.currentIndex + 1) % selectedImage.eventImages.length;
      setSelectedImage({
        ...selectedImage,
        src: selectedImage.eventImages[nextIndex],
        currentIndex: nextIndex,
      });
    }
  };

  const prevImage = () => {
    if (selectedImage) {
      const prevIndex =
        selectedImage.currentIndex === 0
          ? selectedImage.eventImages.length - 1
          : selectedImage.currentIndex - 1;
      setSelectedImage({
        ...selectedImage,
        src: selectedImage.eventImages[prevIndex],
        currentIndex: prevIndex,
      });
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <Breadcrumbs />

      {/* Hero Section */}
      <div className="text-center mb-16 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            My Journey
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            Important Milestones & Achievements
          </p>
        </motion.div>

        <motion.p
          className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          These are the moments that shaped my journey as a developer. From
          hackathons to competitions, each experience taught me something
          valuable and pushed me to grow.
        </motion.p>

        {/* Stats Cards */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className=" border border-border/50 rounded-lg p-4 text-center">
            <Trophy className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
            <div className="text-2xl font-bold">2</div>
            <div className="text-xs text-muted-foreground">Events</div>
          </div>
          <div className=" border border-border/50 rounded-lg p-4 text-center">
            <Award className="w-6 h-6 text-blue-500 mx-auto mb-2" />
            <div className="text-2xl font-bold">1</div>
            <div className="text-xs text-muted-foreground">Finalist</div>
          </div>
          <div className=" border border-border/50 rounded-lg p-4 text-center">
            <Users className="w-6 h-6 text-green-500 mx-auto mb-2" />
            <div className="text-2xl font-bold">6</div>
            <div className="text-xs text-muted-foreground">Team Members</div>
          </div>
          <div className=" border border-border/50 rounded-lg p-4 text-center">
            <Code className="w-6 h-6 text-purple-500 mx-auto mb-2" />
            <div className="text-2xl font-bold">AI</div>
            <div className="text-xs text-muted-foreground">Focus</div>
          </div>
        </motion.div>
      </div>

      {/* Events Grid */}
      <div className="grid gap-8 max-w-5xl mx-auto">
        {devEvents.map((event, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            className=" border border-border/50 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden"
          >
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Achievement Badge */}
            {event.name.includes("Finalist") && (
              <div className="absolute top-6 right-6 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                Finalist
              </div>
            )}

            <div className="relative z-10">
              {/* Header Section */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3 text-muted-foreground text-sm">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                    {event.name}
                  </h2>
                </div>
              </div>

              {/* Content Section */}
              <div className="space-y-6">
                {/* Description */}
                <div>
                  <div className="text-muted-foreground leading-relaxed space-y-3">
                    {event.description
                      .split("\n")
                      .filter((p) => p.trim())
                      .map((paragraph, i) => (
                        <p key={i} className="text-sm md:text-base">
                          {paragraph.trim()}
                        </p>
                      ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {event.name.includes("AI") && (
                      <span className="bg-purple-500/10 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full text-xs font-medium">
                        AI/ML
                      </span>
                    )}
                    {event.name.includes("Hackathon") && (
                      <span className="bg-blue-500/10 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-xs font-medium">
                        Hackathon
                      </span>
                    )}
                    {event.description.includes("fullstack") && (
                      <span className="bg-green-500/10 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                        Full Stack
                      </span>
                    )}
                    {event.description.includes("team") && (
                      <span className="bg-orange-500/10 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full text-xs font-medium">
                        Team Work
                      </span>
                    )}
                  </div>
                </div>

                {/* Images Section - Now at bottom */}
                {event.images.length > 0 && (
                  <div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                      {event.images.slice(0, 5).map((img, i) => (
                        <motion.div
                          key={i}
                          className="aspect-square relative rounded-lg overflow-hidden border border-border/30 cursor-pointer group"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.2 }}
                          onClick={() =>
                            openModal(
                              img,
                              `${event.name} photo ${i + 1}`,
                              event.images,
                              i
                            )
                          }
                        >
                          <Image
                            src={img}
                            alt={`${event.name} photo ${i + 1}`}
                            fill
                            className="object-cover transition-all duration-300 group-hover:brightness-110"
                          />
                          {/* Overlay indicator */}
                          <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-2">
                              <ExternalLink className="w-4 h-4 text-white" />
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {event.images.length > 5 && (
                      <button
                        onClick={() =>
                          openModal(
                            event.images[5],
                            `${event.name} photo 6`,
                            event.images,
                            5
                          )
                        }
                        className="text-xs text-muted-foreground hover:text-primary text-center mt-3 transition-colors cursor-pointer block w-full"
                      >
                        +{event.images.length - 5} more photos (click to view
                        all)
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          {/* Modal Content */}
          <motion.div
            className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            {selectedImage.eventImages.length > 1 && (
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {/* Next Button */}
            {selectedImage.eventImages.length > 1 && (
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            {/* Image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
              {selectedImage.currentIndex + 1} /{" "}
              {selectedImage.eventImages.length}
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
