import ContactUs from "@/components/contactUs"
import HubCard from "@/components/countryHero"
import Impacts from "@/components/impacts"
import AssistiveChair from "@/assets/images/assistive_chair.png"

import VirtualReality from "@/assets/images/virtual_reality.png"
import FeatureSection from "@/components/featureSection"
const Page = () => {
  return (
    <div>
      <HubCard description="Advancing Social Innovation and Assistive Technology Partnerships Across Europe. Welfare Plus Europe serves as the headquarters for international research, innovation, and partnerships in inclusive social welfare and independent living solutions." imageUrl={VirtualReality} title="Europe's Hub for Inclusive Welfare Innovation" imageAlt='man with virtual reality glasses' locationLabel="U.S." key={'united states'} />
      <FeatureSection content="Welfare Plus (in Finland) is exploring partnerships and coordinating agents in selected United States
locations, including Texas, North Carolina, Virginia Beach, and New York, to strengthen international
collaborations in assistive technology, therapy tools, social research, and social development programs." title={'United States'} image={AssistiveChair} alt="Man on wheel chair" />
      <Impacts text={'Our Impacts Across U.S.'} content={'Europe serves as the innovation and coordination hub supporting global knowledge exchange and technology transfer. \n Collaboration with academic institutions, government agencies, and international manufacturers to develop scalable social care solutions.'} btnText={'Partner with us'} />
      <ContactUs />
    </div>
  )
}

export default Page
