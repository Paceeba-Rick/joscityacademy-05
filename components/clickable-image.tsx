"use client"

import type React from "react"

import { useState } from "react"
import { ImageModal } from "./image-modal"

interface ClickableImageProps {
  src: string
  alt: string
  className?: string
  children?: React.ReactNode
}

export function ClickableImage({ src, alt, className, children }: ClickableImageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div
        className={`cursor-pointer transition-transform hover:scale-105 ${className}`}
        onClick={() => setIsModalOpen(true)}
      >
        {children || <img src={src || "/placeholder.svg"} alt={alt} className="w-full h-full object-cover" />}
      </div>
      <ImageModal
        src={src || "/placeholder.svg"}
        alt={alt}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}
