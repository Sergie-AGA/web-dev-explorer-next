"use client";

import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  IconDeviceLaptop,
  IconDeviceTvOld,
  IconVideo,
  IconPhotoScan,
  IconDeviceGamepad2,
  IconDeviceMobile,
  IconPokeball,
  IconSwords,
  IconCode,
  IconPacman,
  IconMovie,
  TablerIconsProps,
} from "@tabler/icons-react";
import FloatingIcon from "./FloatingIcon";

type IconType = {
  id: string;
  icon: React.ComponentType<TablerIconsProps>;
  color: string;
  x: number;
  y: number;
  translateX: number;
  translateY: number;
  rotateX: number;
  rotateY: number;
  animateOut: boolean;
  transition: number;
  opacity: number;
};

interface IIconBackground {
  size: number;
}

const iconsList: React.ComponentType<TablerIconsProps>[] = [
  IconDeviceLaptop,
  IconDeviceTvOld,
  IconVideo,
  IconPhotoScan,
  IconDeviceGamepad2,
  IconDeviceMobile,
  IconPokeball,
  IconSwords,
  IconCode,
  IconPacman,
  IconMovie,
];

const colors = [
  "#134e4a",
  "#0c4a6e",
  "#713f12",
  "#7f1d1d",
  "#171717",
  "#581c87",
  "#881337",
  "#0f172a",
];

export default function IconBackgroundGeneration({ size }: IIconBackground) {
  const [icons, setIcons] = useState<IconType[]>([]);

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const addIcon = () => {
      if (icons.length <= 10) {
        const randomIcon =
          iconsList[Math.floor(Math.random() * iconsList.length)];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomX = Math.random() * screenWidth;
        const randomY = Math.random() * screenHeight;
        const randomTranslateX = Math.random() * 100 - 50;
        const randomTranslateY = Math.random() * -300;
        const id = uuidv4();
        const removalTimer = Math.floor(Math.random() * 8000) + 4000;
        const randomRotation = Math.random() * 720 - 360;
        const randomRotationRad = (randomRotation * Math.PI) / 180;
        const randomRotateX = Math.cos(randomRotationRad);
        const randomRotateY = Math.sin(randomRotationRad);

        const newIcon: IconType = {
          id,
          icon: randomIcon,
          color: randomColor,
          x: randomX,
          y: randomY,
          translateX: randomTranslateX,
          translateY: randomTranslateY,
          rotateX: randomRotateX,
          rotateY: randomRotateY,
          animateOut: false,
          transition: removalTimer + 500,
          opacity: 0,
        };

        setIcons((prevIcons) => [...prevIcons, newIcon]);

        setTimeout(() => {
          if (typeof window !== "undefined") {
            const targetIcon = document.getElementById(`icon-${id}`);
            if (targetIcon) {
              targetIcon.style.transform = `translate(${randomTranslateX}px, ${randomTranslateY}px) rotate(${randomRotation}deg)`;
              targetIcon.style.opacity = "1";
            }
          }
        }, 100);

        setTimeout(() => {
          setIcons((prevIcons) => {
            const newIcons = prevIcons.map((icon) =>
              icon.id === id ? { ...icon, animateOut: true } : icon
            );
            return newIcons;
          });
          setTimeout(() => {
            setIcons((prevIcons) => {
              const newIcons = prevIcons.filter((icon) => icon.id !== id);
              return newIcons;
            });
          }, 2000);
        }, removalTimer - 2000);
      }
    };

    const addIconInterval = setInterval(
      addIcon,
      Math.floor(Math.random() * 1500) + 1000
    );

    return () => {
      clearInterval(addIconInterval);
    };
  }, [icons]);

  function removeIcon(id: string) {
    if (typeof window !== "undefined") {
      const targetIcon = document.getElementById(`icon-${id}`);
      if (targetIcon) {
        targetIcon.style.transform = targetIcon.style.transform + ` scale(1.5)`;
        targetIcon.style.opacity = "0";
      }

      setTimeout(() => {
        const newIcons = icons.filter((icon) => icon.id !== id);
        setIcons(newIcons);
      }, 2000);
    }
  }

  return (
    <div>
      {icons.map((item) => (
        <div
          onClick={() => removeIcon(item.id)}
          id={`icon-${item.id}`}
          key={item.id}
          style={{
            position: "absolute",
            top: `${item.y}px`,
            left: `${item.x}px`,
            opacity: item.animateOut ? 0 : item.opacity,
            transition: `opacity 2s, transform ${item.transition}ms`,
          }}
        >
          <FloatingIcon color={item.color}>
            <item.icon size={size} />
          </FloatingIcon>
        </div>
      ))}
    </div>
  );
}
