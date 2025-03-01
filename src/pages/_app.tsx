import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { UiProvider } from "@/components/ui/ui-provider";
import { Container } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UiProvider>
      <Container
        maxW={{
          md: "5xl",
        }}

      >
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Container>
    </UiProvider>
  );
}
