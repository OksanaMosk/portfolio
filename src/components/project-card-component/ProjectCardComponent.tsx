"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectCardComponent.module.css";

interface ProjectProps {
  title: string;
  liveUrl?: string;
  githubUrl?: string;
  description: string;
  tags: string[];
  image?: string;
  video?: string;
}

export const ProjectCardComponent = ({ title, description, liveUrl, githubUrl, tags, image, video }: ProjectProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <>
      <article className={styles.card}>
        <div className={styles.imageWrapper} onClick={() => video && setIsModalOpen(true)} style={{ cursor: video ? 'pointer' : 'default' }}>
          {video ? (
              <div className={styles.videoContainer}>
                  <video
                      ref={videoRef}
                      src={video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className={styles.videoElement}
                  />
                  <button
                      onClick={toggleMute}
                      className={styles.muteButton}
                      title={isMuted ? "Unmute" : "Mute"}
                  >
                      {isMuted ? (
                          <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                               stroke="currentColor" className={styles.icon}>
                              <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"/>
                          </svg>
                      ) : (
                          <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                               stroke="currentColor" className={styles.icon}>
                              <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"/>
                          </svg>
                      )}
                  </button>
              </div>
          ) : (
              <div className={styles.imagePlaceholder}>
                  {image ? (
                      <Image src={image} alt={title} fill className="object-cover" unoptimized/>
                  ) : (
                      title
                  )}
              </div>
          )}
        </div>

          <div className={styles.cardContent}>
              <h3 className={styles.projectTitle}>{title}</h3>
              <div className={styles.links}>
                  {liveUrl && (
                      <Link href={liveUrl} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                          Live Site
                      </Link>
                  )}
                  {githubUrl && (
                      <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className={styles.linkButton}>
                          GitHub
                      </Link>
                  )}
              </div>
              <p className={styles.projectDescription}>{description}</p>
              <div className={styles.tagList}>
                  {tags.map((tag) => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
              </div>
          </div>
      </article>

        {isModalOpen && (
            <div className={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
                <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                    <button className={styles.closeButton} onClick={() => setIsModalOpen(false)}>
                        <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
                             className={styles.icon}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                        </svg>
                    </button>
                    <video
                        src={video}
                        autoPlay
                        controls
                        className={styles.modalVideo}
                    />
                </div>
            </div>
        )}
    </>
  );
};
