"use client"
import { Layout, Navigation, Footer, Hero, Services } from "@/components";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="page-wrapper">
          <Navigation />
          <Hero />
          <Services />
        </div>
      </Layout>
      <Footer />
    </>
  );
}