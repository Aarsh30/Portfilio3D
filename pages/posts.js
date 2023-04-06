import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import c from '../public/images/contents/1.png'
import cplus from '../public/images/contents/2.png'
import Java from '../public/images/contents/java.png'
import Python from '../public/images/contents/python.png'
import html from '../public/images/contents/4.png'
import css from '../public/images/contents/3.png'
import react from '../public/images/contents/5.png'
import javascript from '../public/images/contents/6.png'
import nodejs1 from '../public/images/contents/7.png'
import expressjs from '../public/images/contents/8.png'
import mongo from '../public/images/contents/9.png'
import php from '../public/images/contents/10.png'
import azure from '../public/images/contents/11.png'
import gcp from '../public/images/contents/13.png'
import git from '../public/images/contents/12.png'
import kali from '../public/images/contents/15.png'
import linux from '../public/images/contents/14.png'
import mysql from '../public/images/contents/16.png'
import azcert from '../public/images/contents/17.png'
import udecert from '../public/images/contents/18.png'


const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h2" fontSize={30} mb={5}>
       Skills
      </Heading>
      <Heading as="h3" fontSize={20} mb={4}>
      Programming Skills
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 4, 4]} gap={6}>
          <GridItem
            title="C"
            thumbnail={c}
          />
          <GridItem
            title="C++"
            thumbnail={cplus}
          //  href="https://www.youtube.com/watch?v=-qBavwqc_mY"
          />
            <GridItem
            title="Java"
            thumbnail={Java}
         
          />
          <GridItem
            title="Python"
            thumbnail={Python}
         
          />
        </SimpleGrid>
      </Section>

      <Heading as="h3" fontSize={20} mb={4}>
    Front End Technologies
        </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 4, 4]} gap={6}>
          <GridItem
            title="Html"
            thumbnail={html}
           />
          <GridItem
            title="CSS"
            thumbnail={css}
          //  href="https://www.youtube.com/watch?v=-qBavwqc_mY"
          />
          <GridItem
             title="JavaScript"
             thumbnail={javascript}
          />
          <GridItem
            title="React"
            thumbnail={react}
          />
        </SimpleGrid>
      </Section>

      <Heading as="h3" fontSize={20} mb={4}>
    Back End Technologies
        </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 5, 5]} gap={5}>
          <GridItem
            title="NodeJS"
            thumbnail={nodejs1}
           />
          <GridItem
            title="ExpressJS"
            thumbnail={expressjs}
             //  href="https://www.youtube.com/watch?v=-qBavwqc_mY"
          />
          <GridItem
             title="MongoDB"
             thumbnail={mongo}
          />
          <GridItem
            title="PHP"
            thumbnail={php}
          />
           <GridItem
            title="MYSQL"
            thumbnail={mysql}
          />
        </SimpleGrid>
      </Section>

      <Heading as="h3" fontSize={20} mb={4}>
    Tools
        </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 5, 5]} gap={6}>
          <GridItem
            title="Git"
            thumbnail={git}
           />
           <GridItem
            title="GCP"
            thumbnail={gcp}
          />
          <GridItem
            title="Linux"
            thumbnail={linux}
             //  href="https://www.youtube.com/watch?v=-qBavwqc_mY"
          />
          <GridItem
             title="Azure"
             thumbnail={azure}
          />
          <GridItem
             title="Kali"
             thumbnail={kali}
          />
          
          
        </SimpleGrid>
      </Section>

      <Heading as="h2" fontSize={30}  color="" mb={4}>
    Certifications
            </Heading>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 1, 1]} gap={6}>
          <GridItem
            title="Microsoft Azure Fundamentals"
            thumbnail={azcert}
            href="https://drive.google.com/file/d/1awKHhDJpza29hGBqiTgL-2avHbIhPURd/view"
          />
          <GridItem
            title=" Udemy Complete Web Developer Bootcamp"
            thumbnail={udecert}
            href="https://drive.google.com/file/d/1PT7ETSHylKU9lt2_cC6q-Y538B4yS-2J/view"
          />
        </SimpleGrid>
      </Section>

    
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
