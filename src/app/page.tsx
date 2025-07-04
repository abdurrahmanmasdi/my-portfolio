"use client"
import { Layout, Navigation, Footer, Hero, Services, Testimonials } from "@/components";

export default function Home() {
  return (
    <>
      <Layout>
        <div className="page-wrapper">
          <Navigation />
          <Hero />
          <Services />
          <Testimonials />
        </div>
      </Layout>
      <Footer />
    </>
  );
}