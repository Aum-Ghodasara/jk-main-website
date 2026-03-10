import Image from "next/image";
import { motion } from "framer-motion";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Head from "next/head";


export default function Certificate() {
  // Dictionary of certificates
  const certificates = [
    {
      src: "/certificates/c1.png",
      alt: "Certificate 1",
    },
    {
      src: "/certificates/c2.png",
      alt: "Certificate 2",
    },
    {
      src: "/certificates/c3.png",
      alt: "Certificate 3",
    },
     {
      src: "/certificates/c4.png",
      alt: "Certificate 4",
    },
    {
      src: "/certificates/c5.png",
      alt: "Certificate 5",
    },
    {
      src: "/certificates/c6.png",
      alt: "Certificate 6", 
    },
  ];

  return (

    <div className="min-h-screen bg-[#DEEDEF]">
      <Head>
        <title>Certificates | JK Power System</title>
        <meta
          name="description"
          content="Explore the certifications and credentials of JK Power System that validate our expertise, quality standards, and commitment to excellence."
        />
      </Head>

      <Header />
      {/* Add padding-top to account for fixed header */}
      <div className="pt-24 p-10">
        <h1 className="text-[#2E414B] bg-[#C0DBE1] py-2 rounded-2xl lg:w-1/5 w-3/4 text-center lg:text-3xl text-xl font-semibold mb-10 mx-auto">
          Certificates
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={index}
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 * index }}
            >
              <Image
                src={certificate.src}
                alt={certificate.alt}
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
