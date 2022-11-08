import { Link } from '@chakra-ui/react'

export type Company = 'Deloitte' | 'SCG' | 'Blotocol'

export type CompanyDetail = {
  name: string
  longName: string
  subDetail?: string
  url: string
  position: string
  duration: string
  logo: {
    light: string
    dark?: string
  }
  roles?: JSX.Element[]
}

export const Experiences: {
  [key in Company]: CompanyDetail
} = {
  Deloitte: {
    name: 'MIRATECH',
    longName: 'Miratech Ziegelbrücke',
    subDetail: 'Software company in Glarus Nord',
    url: 'https://miratechgroup.com/',
    position: 'Full stack Engineer',
    duration: 'Jul 2020 - Jun 2022',
    logo: {
      light: '/worked_at_logos/MIRATECH/MIRATECH_light.jpg',
      dark: '/worked_at_logos/MIRATECH/MIRATECH_dark.jfif',
    },
    roles: [
      // <>
      //   Started early September and undergoing training for .NET Sitecore 10,
      //   Sitecore SXA and different topologies it provides.{' '}
      // </>,
      // <>
      //   Worked as a Sitecore Backend on new{' '}
      //   <Link
      //     aria-label="Deloitte Digital AU"
      //     href="https://www.deloittedigital.com.au/"
      //     target="_blank"
      //     rel="noreferrer"
      //   >
      //     Deloitte Digital AU Site.
      //   </Link>
      // </>,
      // <>
      //   Took{' '}
      //   <Link
      //     aria-label="Sitecore 10 .NET Developer Certification"
      //     href="/certification/Lawingco-Sitecore 10 NET Developer Cert.pdf"
      //     target="_blank"
      //     rel="noreferrer"
      //   >
      //     Sitecore 10 .NET Developer Certification.
      //   </Link>
      // </>,
      <>
        Architected, developed and deployed intuitive front-end interfaces with well-organized code and scalable solutions using TypeScript, React, React Native and GraphQL.
      </>,
      <>
        Developed flexible back-end architecture, allowing web applications to expand with Express.js, PostgreSQL.
      </>,
      <>
        Implemented SEO in React applications and intuitive interface to achieve prominent rankings with Next.js
      </>,
      <>
        Implemented unit and E2E testing in React projects using Jest and Cypress.
      </>,
    ],
  },
  SCG: {
    name: 'HERZUM',
    longName: 'Herzum Switzerland',
    subDetail: 'Consultant in Lugano',
    url: 'https://herzum.ch/',
    position: 'Frontend Engineer',
    duration: 'Oct 2018 - May 2020',
    logo: {
      light: '/worked_at_logos/HERZUM/HERZUM_light.png',
      dark: '/worked_at_logos/HERZUM/HERZUM_dark.jfif',
    },
    roles: [
      // <>
      //   Revamping the legacy Partner Portal into a new{' '}
      //   <Link
      //     aria-label="Westfield Marketing Hub"
      //     href="https://partner.scentregroup.com/"
      //     target="_blank"
      //     rel="noreferrer"
      //   >
      //     Westfield Marketing Hub
      //   </Link>{' '}
      //   using NextJS and Typescript. Restructuring the old express app into a
      //   newer architectural design approach.
      // </>,
      // <>
      //   Created multiple Contentful and Bynder extensions to improve BX process
      //   better.
      // </>,
      // <>
      //   Worked on maintaining{' '}
      //   <Link
      //     variant="primaryLink"
      //     href="https://www.westfield.com.au/"
      //     target="_blank"
      //     rel="noreferrer"
      //   >
      //     Westfield
      //   </Link>{' '}
      //   main site and Graphql apis written in NodeJS.
      // </>,
      // <>
      //   Migrating of existing marketing email related tools and batch jobs from
      //   Responsys into new platform called Braze.
      // </>,
      // <>
      //   Hired at early 2020, first major task was helping with selecting a new
      //   marketing vendor that can scale and also enable us to have
      //   personalisation as well, selecting{' '}
      //   <Link
      //     aria-label="Braze"
      //     href="https://www.braze.com/"
      //     target="_blank"
      //     rel="noreferrer"
      //   >
      //     Braze
      //   </Link>{' '}
      //   as a result.
      // </>,
      <>
        Designed, developed and deployed full-stack web applications to achieve business objectives and needs of various clients with React, Django Rest Framework, MySQL, PostgreSQL.
      </>,
      <>
        Contributed to building healthcare websites for a digital marketing agency by improving functionality and efficiency by 25% with React, React Native, GraphQL and Apollo.
      </>,
      <>
        Worked on building customer-facing web applications and MVPs using Vue.js, Django and PostgreSQL
      </>,
      <>
        Maintained backend code built with PHP/Laravel, MySQL and collaborated with product team to implement new features for future products.
      </>,
      <>
        Conducted unit testing to ensure responsiveness and efficiency of the project using Jest, Cypress, Mocha, and Chai
      </>,
    ],
  },
  Blotocol: {
    name: 'COMATCH',
    longName: 'Comatch',
    subDetail: 'The Consulting Marketplace',
    url: 'https://www.comatch.com/',
    position: 'Frontend Engineer',
    duration: 'Jul 2020 - Aug 2018',
    logo: {
      light: '/worked_at_logos/COMATCH/COMATCH_light.jpg',
      dark: '/worked_at_logos/COMATCH/COMATCH_dark.png',
    },
    roles: [
      <>
        Improved cash flow through the development of modern, responsive customer experiences using React, Material UI and Ant Design Library.
      </>,
      <>
        Collaborated with designers and translate UI designs into well organized and structured HTML/CSS compatible with modern browsers, and use open-source tools & frameworks to improve the structure and maintainability of the front-end code where possible.
      </>,
      <>
        Contributed to the in-house UI library to create reusable React components that saved over 20 hours of development time every week.
      </>,
      <>
        Expanded features, refined code, and improved performance with React, producing smoother operations and enhancing user engagement.
      </>,
    ],
  },
}

export const ExperiencesList = [
  Experiences.Deloitte,
  Experiences.SCG,
  Experiences.Blotocol,
]
