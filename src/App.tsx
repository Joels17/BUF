import Title from './components/Title';
import { LandingDiscount } from './components/landing/discount/LandingDiscount';
import { LandingProductFeature } from './components/landing/LandingProductFeature';
import { LandingProductFeaturesGrid } from './components/landing/LandingProductFeaturesGrid';
import { LandingPrimaryImageCtaSection } from './components/landing/cta/LandingPrimaryCta';
import jakeImage from './assets/jake.jpeg';

export default function Component() {
  return (
    <>
    <Title/>
    <LandingPrimaryImageCtaSection
  title="Welcome to BUF"
  description="I’m Jake Semeniuk, and I’ve been a coach/personal trainer for 4 years!"
  imageSrc={jakeImage}
  imageAlt="Jake"
  imagePosition="center"
  textPosition="center"
  withBackground
  variant="secondary"
>
  <LandingDiscount
    className="w-full flex justify-center"
    discountValueText="$1 off"
    discountDescriptionText="for founder pricing"
  />

</LandingPrimaryImageCtaSection>
    <LandingProductFeaturesGrid
  title="Get the job done in no time"
  description="You'll save days of work and the only question you'll have is 'What do I do with all this free time?'"
>
  <LandingProductFeature
    title="The wait is over"
    description="Give your project the home it deserves. Your users will love you for it."
    imageSrc="/static/images/shipixen/product/14.webp"
    imageAlt="Sample image"
  />

  <LandingProductFeature
    title="Add your branding"
    description="No configuration needed. We take care of everything for you, just press a button."
    imageSrc="/static/images/shipixen/product/4.webp"
    imageAlt="Sample image"
  />

  <LandingProductFeature
    title="39+ themes"
    description="Choose from more than 30+ themes or create your own. Upload your logo, set the size and we take care of the rest."
    imageSrc="/static/images/shipixen/product/2.webp"
    imageAlt="Sample image"
  />
</LandingProductFeaturesGrid>
    </>
  );
}
