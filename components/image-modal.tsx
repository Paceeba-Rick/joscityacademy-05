"use client"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageModalProps {
  src: string
  alt: string
  isOpen: boolean
  onClose: () => void
}

export function ImageModal({ src, alt, isOpen, onClose }: ImageModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 text-white hover:bg-white/20 z-10 bg-black/50"
          onClick={onClose}
        >
          <X className="h-8 w-8" />
        </Button>
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          className="w-full h-auto max-h-full object-contain cursor-pointer"
          onClick={onClose}
        />
      </div>
    </div>
  )
}
