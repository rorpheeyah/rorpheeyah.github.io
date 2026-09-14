// The content JSON refers to icons by the component names used by the previous
// react-icons / lucide-react setup. This maps those names onto Iconify ids so
// the data files did not need rewriting. Unknown names fall back to a dot.
const ICONS: Record<string, string> = {
  // lucide-react
  Award: 'lucide:award',
  BookOpen: 'lucide:book-open',
  Briefcase: 'lucide:briefcase',
  Calendar: 'lucide:calendar',
  ChevronUp: 'lucide:chevron-up',
  Code: 'lucide:code',
  Download: 'lucide:download',
  ExternalLink: 'lucide:external-link',
  FileText: 'lucide:file-text',
  FolderOpen: 'lucide:folder-open',
  Globe: 'lucide:globe',
  GraduationCap: 'lucide:graduation-cap',
  Home: 'lucide:home',
  Lightbulb: 'lucide:lightbulb',
  Mail: 'lucide:mail',
  MapPin: 'lucide:map-pin',
  Menu: 'lucide:menu',
  Moon: 'lucide:moon',
  Palette: 'lucide:palette',
  Phone: 'lucide:phone',
  Sun: 'lucide:sun',
  Trophy: 'lucide:trophy',
  User: 'lucide:user',
  Users: 'lucide:users',
  X: 'lucide:x',
  Zap: 'lucide:zap',

  // react-icons (fa / hi) used in the previous hero and about sections
  FaEnvelope: 'lucide:mail',
  FaGithub: 'simple-icons:github',
  FaLinkedin: 'simple-icons:linkedin',
  HiOutlineAcademicCap: 'lucide:graduation-cap',
  HiOutlineBriefcase: 'lucide:briefcase',
  HiOutlineLocationMarker: 'lucide:map-pin',
  HiOutlineUserGroup: 'lucide:users',

  // lowercase keys used by contact.json
  email: 'lucide:mail',
  facebook: 'simple-icons:facebook',
  github: 'simple-icons:github',
  instagram: 'simple-icons:instagram',
  linkedin: 'simple-icons:linkedin',
  location: 'lucide:map-pin',
  telegram: 'simple-icons:telegram',
  twitter: 'simple-icons:x',
};

export const FALLBACK_ICON = 'lucide:dot';

export function iconFor(name: string | undefined): string {
  if (!name) return FALLBACK_ICON;
  return ICONS[name] ?? FALLBACK_ICON;
}
