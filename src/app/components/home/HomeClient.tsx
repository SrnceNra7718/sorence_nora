"use client";

import { useEffect } from "react";
import HomeSections from "./HomeSections";
import { initHome } from "./home-interactions";

export default function HomeClient() {
  useEffect(() => {
    const cleanup = initHome();
    return () => cleanup();
  }, []);
  return <HomeSections />;
}
