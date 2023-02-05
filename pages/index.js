import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoLinkedin, IoHeart } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.png'
import thumbInkdrop from '../public/images/works/inkdrop_eyecatch.png'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        Hello, I&apos;m an Full Stack Developer!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
          Aarsh Patel
          </Heading>
          <p>Digital Craftsman ( Developer / Security / Cloud )</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/aarsh.jpg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
         Aarsh is a Cloud Engineer and a full-stack developer based in India with a
          passion for building digital stuff. He likes to solving real-life problems with code. 
          When not online, he loves Reads and Create Content for Social Media. Currently, He is Pursing B.Tech in Computer 
          Science. He publishes content Realted Self growth, College Reviews,Productivity,Coding, Career Opportunities, Podcasts on his YouTube
          channel called &quot;
          <Link
            as={NextLink}
            href="https://www.youtube.com/ExcellenceExploring"
            passHref
            target="_blank"
          >
           Excellence Exploring
          </Link>
          &quot; has around than 10k subscribers.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            My portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2001</BioYear>
          &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Born in  Gujarat India.
        </BioSection>
        <BioSection>
          <BioYear>2020</BioYear>
          &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Completed the Higher Secondary School Certificate. 
        </BioSection>
          <BioSection>
          <BioYear>2020-24</BioYear>
        &nbsp;&nbsp;&nbsp; Pursuing B.Tech in Computer Science  Specialization in Networking and Security from VIT-AP
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Reading Books , Music,{' '}
       {/*  <Link href="https://illust.odoruinu.net/" target="_blank">
            Drawing
</Link>*/}
           Gardening,{' '} Photography
         {/* <Link href="https://500px.com/p/craftzdog" target="_blank">
            Photography
          </Link>*/}
          , Development, Content Creation
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Aarsh30" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoGithub />}
              >
                @Aarsh30
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.instagram.com/excellence_exploring/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram/>}
              >
                @ExcellenceExploring
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/aarshpatel30/" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoLinkedin />}
              >
                @Aarsh Patel
              </Button>
            </Link>
          </ListItem>
       {/*   <ListItem>
            <Link href="" target="_blank">
              <Button
                variant="ghost"
                colorScheme="teal"
                leftIcon={<IoLogoInstagram />}
              >
                @craftzdog
              </Button>
            </Link>
        </ListItem> */}
        </List>

        <SimpleGrid columns={[1, 1]} gap={6}>
          <GridItem
            href="https://www.youtube.com/ExcellenceExploring"
            title="Excelllence Exploring"
            thumbnail={thumbYouTube}
          >
            My YouTube channel (&gt;10k subs)
          </GridItem>
        {/*  <GridItem
            href="https://www.inkdrop.app/"
            title="Inkdrop"
            thumbnail={thumbInkdrop}
          >
            A Markdown note-taking app
      </GridItem>*/}
        </SimpleGrid>

        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/posts"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
          >
            Popular posts
          </Button>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
