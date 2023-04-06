import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import UserFinder from '../public/images/works/1.jpg'
import TodoList from '../public/images/works/2.png'
import EasyQuiz from '../public/images/works/3.jpg'
import DrumKit from '../public/images/works/4.jpg'
import HealthBand from '../public/images/works/6.jpg'
import NFCCard from '../public/images/works/7.jpg'
// import thumbStyly from '../public/images/works/styly_eyecatch.png'
// import thumbPichu2 from '../public/images/works/pichu2_eyecatch.png'
// import thumbFreeDBTagger from '../public/images/works/freedbtagger_eyecatch.png'
// import thumbAmembo from '../public/images/works/amembo_eyecatch.png'
import CustomizeAi from '../public/images/works/8.png'
import botbuddy from '../public/images/works/9.png'
import FoodFrenzy from '../public/images/works/10.png'
import youtube from '../public/images/works/11.png'
import weather from '../public/images/works/12.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Projects
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
          // id="inkdrop" 
          title="Github User Finder" thumbnail={UserFinder}>
          A platform where you can find GitHub Users and See their Statics. 
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
           // id="walknote"
            title="CustomizeAi"
            thumbnail={CustomizeAi} >
           Customize your cool Tshirts with Ai.
          </WorkGridItem>
        </Section>

        <Section delay={0.1}>
          <WorkGridItem
           // id="fourpainters"
            title="BotBuddy"
            thumbnail={botbuddy}
          >
           Ai chatBot Built which help to provide precise information about the task and chat with you.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem 
          //id="menkiki" 
          title="TodoList"
          thumbnail={TodoList} >
          TodoList where you can notedown the task need Completed
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem 
          //id="menkiki" 
          title="Update New Youtube UI"
          thumbnail={youtube} >
          Youtube clone witht the modern UI and UX.
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem 
          //id="menkiki" 
          title="FoodFrenzy"
          thumbnail={FoodFrenzy} >
          it is online food delivery platform. which connects the cooks,resturants to users.
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Group Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem 
          //id="margelo"
           thumbnail={HealthBand} title="Health Monitroing Band">
           Monitroing Heath of Old Age People and Alarm is something is wrong
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
           // id="modetokyo"
            thumbnail={NFCCard}
            title="NFC Based Payment System "
          >
            This is Nfc based Payment Gateway System for University. 
          </WorkGridItem>
        </Section>
        {/* <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section> */}
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
         Small Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkGridItem
          // id="pichu2" 
          thumbnail={weather} title="Wheather App">
           Show Weather for specific area of india.
          </WorkGridItem>
        </Section>
        <Section delay={0.5}>
          <WorkGridItem
           // id="freedbtagger"
        
            thumbnail={DrumKit} 
            title="Drum Kit">
           A musical app which has differnt music beats 
          </WorkGridItem>
        </Section>
        <Section delay={0.6}>
          <WorkGridItem 
          //id="amembo" 
          title="Easy Quiz"
            thumbnail={EasyQuiz}
          >
            A Platform where quizz can be taken easy with proper markeing system.
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
