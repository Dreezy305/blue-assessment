import ImageContext from "@/contexts/imageContext";
import "@/styles/globals.css";
import "@/styles/left.css";
import "@/styles/right.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ImageContext>
      <Component {...pageProps} />
    </ImageContext>
  );
}
