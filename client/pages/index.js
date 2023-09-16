import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";


import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Joint Airmen Mess 305 Special Mobility Group Nigerian Airforce Calabar</title>
        <meta
          name="description"
          content="Joint Airmen Mess 305 Special Mobility Group Nigerian Airforce Calabar"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="MESS Benefits"
        title=" Why should you belong to the Joint Airmen Mess">
        Gain access to a welcoming space to relax, socialize,
        and forge lasting bonds outside professional duties.
        The mess provides opportunities for networking, shared experiences, and memorable events,
        enhancing both personal and professional connections within the Nigerian Air Force community.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle
        pretitle="Watch a video"
        title="Have a taste of our relaxations">
        Immerse yourself in a tranquil virtual environment as soothing visuals and serene audio guide
        you through moments of peaceful contemplation. Unwind, recharge, and find solace amidst the
        dynamic camaraderie of the Nigerian Air Force community, right from the comfort of your screen.
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our members said">
        Discover the heartwarming stories and experiences of our members in the Testimonials Session.
        Hear firsthand accounts of camaraderie, growth, and shared memories within the Joint Airmen Mess
        at the 305 Special Mobility Group, Nigerian Air Force. These testimonials offer a glimpse into
        the profound connections and lasting friendships forged within our vibrant community.
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Welcome to the FAQ (Frequently Asked Questions) section, your go-to resource for answers to
        common queries about the Joint Airmen Mess at the 305 Special Mobility Group, Nigerian Air Force.
        Here, you'll find valuable insights and information that address a wide range of topics,
        ensuring you have all the details you need to navigate your membership, events, facilities,
        and more. Explore our comprehensive FAQ to enhance your understanding of the mess and make the
        most of your experience within our close-knit community.
      </SectionTitle>
      
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;