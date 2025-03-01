import { CNLink } from '@/components/chakra-next'
import Metahead from '@/components/metahead'
import { navItems } from '@/lib/config/nav-confg'
import { Heading, Separator, Stack, Text } from '@chakra-ui/react'

export default function BlogPage() {
  return (
    <>
      <Metahead
        title="Blog | College Portfolio"
        description="This is a portfolio website built using Next.js and Chakra UI by ChakraFramer Team for college students to showcase their resume, projects, and contact information."
        keywords={['Portfolio', 'Resume', 'ChakraFramer']}
        url={navItems.blog}
      />
      <Stack gap={8}>
        <Heading as="h1" fontSize="3xl" mb={4} color={"peachpuff"}>
        Thought's ↯
        </Heading>
        <h1>Nothing To Show......</h1>
        {blogData.map((i) => (
          <Blog key={i.title} {...i} />
        ))}
      </Stack>
    </>
  )
}

type Blog = {
  title: string
  description: string
  href: string
  date: string
  readTime: string
}

const Blog = ({ title, description, href, date, readTime }: Blog) => {
  return (
    <CNLink href={href} _hover={{ textDecoration: 'none' }} role="group">
      <Stack gap={4}>
        <Text textStyle={'cardHeading'} color={'white'}>
          {title}
        </Text>
        <Separator opacity={0.2} />
        <Text>{description}</Text>
        <Text fontSize={'sm'}>
          {date} | {readTime}
        </Text>
      </Stack>
    </CNLink>
  )
}

const blogData: Blog[] = [
  // {
  //   href: '#',
  //   title: 'xyz',
  //   description:
  //     'xyz',
  //   date: "xyz",
  //   readTime: 'xyz',
  // },

]