"use client";

import { View } from "natmfat/components/View";
import { cn } from "natmfat/lib/cn";
import { ComponentProps } from "react";
import MarqueeRoot from "react-fast-marquee";
import { AppPill } from "./AppPill";
import { apps } from "./apps";

export function AppMarquee({
  className,
  app: appSelected,
  setApp,
  ...props
}: Partial<ComponentProps<typeof MarqueeRoot>> & {
  app: number;
  setApp: (appIdx: number) => void;
}) {
  return (
    <View
      className={cn(
        "relative h-8 w-full max-w-full flex-row justify-center overflow-hidden",
        className,
      )}
    >
      <MarqueeGradient position="left" />
      <MarqueeRoot
        speed={20}
        pauseOnHover
        autoFill
        className="w-full"
        {...props}
      >
        {apps.map((app, i) => (
          <AppPill
            key={app.name}
            {...app}
            setApp={() => setApp(i)}
            active={i === appSelected}
          />
        ))}
      </MarqueeRoot>
      <MarqueeGradient position="right" />
    </View>
  );
}

function MarqueeGradient({ position }: { position: "left" | "right" }) {
  return (
    <View
      className={cn(
        "from-background-root pointer-events-none absolute top-0 z-10 h-full w-20 to-transparent",
        position === "left" && "left-0 bg-gradient-to-r",
        position === "right" && "right-0 bg-gradient-to-l",
      )}
    />
  );
}
