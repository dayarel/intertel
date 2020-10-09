import Layout from "../components/layout/Layout";
import Hero from "../components/layout/Hero";
import Main from "../components/layout/Main";
import Blob from "../components/layout/Blob";
import Section from "../components/layout/Section";
import SectionHeader from "../components/ui/SectionHeader";
import Button from "../components/ui/Button";
import Services from "../components/layout/Services";
import Numbers from "../components/layout/Numbers";
import Brands from "../components/layout/Brands";
import Reviews from "../components/layout/Reviews";
import NewsletterSignUp from "../components/ui/NewsletterSignUp";
export default function Home() {
  return (
    <Layout>
      <Hero>
        <h1 className="hero">Welcome to the home of Intertel Distribution</h1>
      </Hero>
      <Main>
        <Blob
          text="We strive not be a success but rather be of ‘value’"
          left="30"
          top="50"
          position={[0, 10, 0]}
          first="true"
        />
        <Section>
          <SectionHeader title="We are Intertel" svg="screens">
            <p>
              INTERTEL was established in 2013 to supply the market with genuine
              accessories and electronics. INTERTEL procures high-quality mobile
              device accessories through partnerships with the worlds leading
              accessory brands, manufacturers and distributors. Currently we
              supply to independent wholesalers, specialized cellular and
              electronics retailers & e-tailers.
            </p>
            <p>
              INTERTEL now serves hundreds of customers from Europe and beyond,
              delivering a range of accessories from the leading brands. We have
              more than 1,000 SKUA’s at any given time enabling us to fulfil a
              variety of consumer demands. Unlike some companies we have no MOQ.
              It is our mission to build a relationship with companies of any
              size, small or big.
            </p>
            <Button link="about-us" content="Find out more" />
          </SectionHeader>
        </Section>
        <Section>
          <SectionHeader title="Our Services">
            <p>
              We are a solution provider of mobile phone accessories in the UK,
              Europe and beyond. We can provide a service which you can trust
              with a full support system. We are committed to our customers and
              with over 10 years in retail, corporate and online, we are ideally
              placed to help our partners grow their respective businesses.
            </p>
            <p>
              Our portfolio is based on current market trends and on customer
              demand. With our experience of the market, we are able to offer
              custom solutions aswell as hand-picked accessories from
              established brands.
            </p>
          </SectionHeader>
          <Services />
          <Button link="" content="Lets work together" center="true" />
        </Section>
        <Numbers />
        <Section>
          <SectionHeader title="Brands we work with">
            <p>
              We work with multiple recognised brands ensuring we give the best
              product of quality and experience.
            </p>
          </SectionHeader>
          <Brands count="8" />
          <Button
            link="our-brands"
            content="See the other brands"
            center="true"
          />
        </Section>
        <Section>
          <Reviews />
        </Section>
        <Blob
          text="Sign up to our newsletter to keep up to date with the latest"
          left="70"
          top="70"
          full="true"
          position={[0, 10, 0]}
        >
          <NewsletterSignUp />
        </Blob>
        <Blob
          text="If you are a vendor and would like to get in touch with us about your brand, we would be interested in hearing from you."
          full="true"
          top="65"
          left="35"
          position={[10, 0, 0]}
        >
          <Button link="" content="Enquire now" center="true" />
        </Blob>
      </Main>
    </Layout>
  );
}
