import { setRequestLocale } from 'next-intl/server';
import ContactUs from "@/components/contactUs"
import FeatureSection from "@/components/featureSection"
import Impacts from "@/components/impacts"
import ManWheelChair from "@/assets/images/man_wheelchair.png"
import HubCard from "@/components/countryHero"
import HandGrips from "@/assets/images/handgrips.png"

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <div style={{ backgroundImage: "url('/Line.svg')" }}>
      <HubCard description="Advancing Social Innovation and Assistive Technology Partnerships Across Europe. Welfare Plus Europe serves as the headquarters for international research, innovation, and partnerships in inclusive social welfare and independent living solutions." imageUrl={HandGrips} title="Europe's Hub for Inclusive Welfare Innovation" imageAlt='man with virtual reality glasses' locationLabel="U.S." key={'united states'} />
      <FeatureSection content="Welfare Plus facilitates assistive technology partnerships between Europe and Sub-Saharan Africa. Our focus is on independent living aids and assistive devices for children with special needs, persons with disabilities, older adults, and veterans. We also conduct social research, advocacy, and promote evidence-based social care innovations." title={'Finland'} image={ManWheelChair} alt="Man on wheel chair" />
      <Impacts text={'Our Impacts Across Europe'} content={'Europe serves as the innovation and coordination hub supporting global knowledge exchange and technology transfer. \n Collaboration with academic institutions, government agencies, and international manufacturers to develop scalable social care solutions.'} btnText={'Partner with us'} />
      <ContactUs />
    </div>
  )
}
