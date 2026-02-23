"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image, { StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";

// Componente gerado por IA

interface BeforeAfterSliderProps {
  beforeImage: StaticImageData;
  afterImage: StaticImageData;
  beforeLabel?: string;
  afterLabel?: string;
}

const imagesSizes =
  "(max-width: 640px) calc(100vw - 1rem), (max-width: 1024px) 544px, (max-width: 1280px) 456px,(max-width: 1536px) 544px, 544px";

export const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
}: BeforeAfterSliderProps) => {
  const t = useTranslations("Sections.Results");
  // Estado para controlar a posição do slider (0 a 100%)
  // Começamos em 50% para mostrar metade de cada imagem
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Função para lidar com o movimento do mouse ou toque
  const handleMove = useCallback(
    (event: MouseEvent | TouchEvent) => {
      if (!isDragging || !containerRef.current) return;

      // Pegamos as dimensões do container
      const rect = containerRef.current.getBoundingClientRect();

      // Determinamos a posição X do evento (mouse ou toque)
      const clientX =
        "touches" in event ? event.touches[0].clientX : event.clientX;

      // Calculamos a posição relativa dentro do container (0 a 1)
      // Math.max(0, ...) e Math.min(1, ...) garantem que não ultrapasse os limites
      const position = Math.max(
        0,
        Math.min(1, (clientX - rect.left) / rect.width),
      );

      // Convertemos para porcentagem e atualizamos o estado
      setSliderPosition(position * 100);
    },
    [isDragging],
  );

  // Adicionamos listeners globais para garantir que o arraste continue
  // mesmo se o mouse sair de cima do componente
  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener("mousemove", handleMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleMove);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMove]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-68/93 max-h-[744px] overflow-hidden rounded-3xl select-none cursor-ew-resize group"
      onMouseDown={() => setIsDragging(true)}
      onTouchStart={() => setIsDragging(true)}
    >
      {/* Imagem de "Depois" (Fundo) */}
      {/* Esta imagem ocupa todo o espaço e fica por baixo */}
      <Image
        src={afterImage}
        alt={t("afterAltImage")}
        placeholder="blur"
        fill
        className="object-cover object-center"
        sizes={imagesSizes}
      />

      {/* Label "After" */}
      <div className="absolute bottom-4 right-4 bg-white/50 dark:bg-black/50 backdrop-blur-md text-black dark:text-white px-3 py-1 rounded-full text-sm font-medium z-10">
        {afterLabel}
      </div>

      {/* Imagem de "Antes" (Sobreposta) */}
      {/* O segredo está aqui: usamos clipPath para recortar esta imagem */}
      {/* `inset(0 ${100 - sliderPosition}% 0 0)` significa: */}
      {/* Recorte 0 do topo, (100 - X)% da direita, 0 de baixo, 0 da esquerda */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <Image
          src={beforeImage}
          alt={t("beforeAltImage")}
          placeholder="blur"
          fill
          className="object-cover object-center"
          sizes={imagesSizes}
        />

        {/* Label "Before" - só aparece se a imagem Before estiver visível */}
        <div className="absolute bottom-4 left-4 bg-white/50 dark:bg-black/50 backdrop-blur-md text-black dark:text-white px-3 py-1 rounded-full text-sm font-medium">
          {beforeLabel}
        </div>
      </div>

      {/* Linha divisória e botão do slider */}
      <div
        className="absolute inset-y-0 w-1 bg-white cursor-ew-resize z-20"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Botão circular central */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white/50 dark:bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-lg transition-transform hover:scale-110">
          <div className="flex items-center gap-0.5 text-black dark:text-white">
            <ChevronLeft className="w-4 h-4" />
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
