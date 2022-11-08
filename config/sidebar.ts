import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaDev,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  // {
  //   label: 'Twitter',
  //   href: 'https://twitter.com/@harris',
  //   icon: FaTwitter,
  // },
  // {
  //   label: 'Instagram',
  //   href: 'https://www.instagram.com/@harris',
  //   icon: FaInstagram,
  // },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/@harris',
    icon: FaLinkedin,
  },
  // {
  //   label: 'StackOverflow',
  //   href: 'https://stackoverflow.com/@harris',
  //   icon: FaStackOverflow,
  // },
  // {
  //   label: 'Youtube',
  //   href: 'https://www.youtube.com/@harris',
  //   icon: FaYoutube,
  // },
  {
    label: 'Github',
    href: 'https://github.com/ienjoyjs',
    icon: FaGithub,
  },
  // {
  //   label: 'Dev.to',
  //   href: 'https://dev.to/@harris',
  //   icon: FaDev,
  // },
]
