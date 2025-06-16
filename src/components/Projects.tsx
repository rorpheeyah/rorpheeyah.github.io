import React, { useState, useEffect, useRef } from "react";
import { ExternalLink, X, Calendar, Code, Users, Grid3X3, List, Plus } from "lucide-react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('compact'); // 'detailed' or 'compact'
  const [showAllProjects, setShowAllProjects] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projectCategories = [
    {
      title: "Finance & Business Solutions",
      description: "Enterprise expense management, corporate card solutions, and comprehensive business workflow applications",
      projects: [
        {
          name: "비즈플레이4.0",
          description: "Mobile expense management app for non-evidence expense processing that automatically collects and processes receipts on mobile devices",
          remoteImage: "https://play-lh.googleusercontent.com/z0VXJXTdAPRYlg55DLcEdtrg7QPRrNRwliqxfJgDwPnxArYOE62AabnBgoJnxN7kcsTA=w480-h960-rw",
          image: "/placeholder.svg",
          link: "https://play.google.com/store/apps/details?id=com.bizcard.bizplay",
          technologies: ["Java", "XML", "Android SDK", "Receipt Processing", "Enterprise Architecture", "Mobile OCR"],
          category: "finance",
          featured: true
        },
        {
          name: "비즈플레이 On-Premise",
          description: "On-premise mobile app for Bizplay Enterprise products that processes automatically collected card receipts for corporate users",
          remoteImage: "https://play-lh.googleusercontent.com/Hmwj3tHIlvi2pnaIDq2b9hHJI-eILzBxTT0blzEJcGZenkbm_dqFfEXrB6vmMI5c0wI=w480-h960-rw",
          image: "/placeholder.svg",
          link: "https://play.google.com/store/apps/details?id=com.bizcard.bizplayPPPEnt",
          technologies: ["Java", "XML", "Android SDK", "On-Premise Architecture", "Enterprise Security", "Receipt OCR"],
          category: "finance",
          featured: false
        },
        {
          name: "현대카드",
          description: "Hyundai Card integrated expense management app with mobile receipt processing and business trip management capabilities",
          remoteImage: "https://play-lh.googleusercontent.com/kogRdROXWJOs5KVonuYnd6joLIfSKxe4YT0YV0hbu-IhVbmDITMFLCD7IBFN_7ZRX7I=w480-h960-rw",
          image: "/placeholder.svg",
          link: "https://play.google.com/store/apps/details?id=com.bizplay.hyundai",
          technologies: ["Java", "XML", "Financial APIs", "Card Integration", "Security Framework", "Receipt Processing"],
          category: "finance",
          featured: true
        },
        {
          name: "삼성카드",
          description: "Samsung Card Bizplay app for corporate and personal card expense management with automated receipt handling and business trip features",
          remoteImage: "https://play-lh.googleusercontent.com/fyU93E4-KsyANtPazr0fW-A9M0NgyMvN0Cnufr7zVBYOqF2_YTyVShyvXuKYHizkDXII=w480-h960-rw",
          image: "/placeholder.svg",
          link: "https://play.google.com/store/apps/details?id=com.bizplay.samsung",
          technologies: ["Java", "XML", "Samsung Card API", "Mobile Security", "Expense Tracking", "Business Travel Management"],
          category: "finance",
          featured: true
        },
        {
          name: "우리카드 비즈플레이",
          description: "Woori Card mobile app for non-certified expense processing service with automatic receipt collection and processing",
          remoteImage: "https://play-lh.googleusercontent.com/Jw3vn2TtcuJwRkItIn-K-BH6fbJeim39vU99DKbMaPIolHOIh4zaalhgE9IE9LvXvQ=w480-h960-rw",
          image: "/placeholder.svg",
          link: "https://play.google.com/store/apps/details?id=com.bizplay.woori",
          technologies: ["Java", "XML", "Woori Bank APIs", "Receipt Automation", "Corporate Card Management", "Financial Security"],
          category: "finance",
          featured: false
        },
        {
          name: "IBK 법인카드 – 한도조회를 원터치로",
          description: "IBK Industrial Bank corporate card management app with one-touch credit limit inquiry and real-time transaction tracking",
          remoteImage: "https://play-lh.googleusercontent.com/jAxy5lu2REvRX2mrJyL97lZ1zCtz2_Gz5GxV6dd6uSyumhTVD8gh7gi97L0q_HKVnw=w480-h960-rw",
          image: "/placeholder.svg",
          link: "https://play.google.com/store/apps/details?id=com.ibk.bizcard",
          technologies: ["Java", "XML", "IBK Banking APIs", "Real-time Data", "Corporate Finance"],
          category: "finance",
          featured: false
        },
        {
          name: "체크페이",
          description: "Daily financial service app providing asset management, financial comparison, remittance services, and support for Zero Pay and regional gift certificates",
          remoteImage: "https://play-lh.googleusercontent.com/vs7GREEkzWY7UqnFXC4fCxkduxCAkRQdUki8j8UIdnJhRG4p91ILqDWWUK_dk9f8X-o=w480-h960-rw",
          image: "/placeholder.svg",
          link: "https://play.google.com/store/apps/details?id=com.cp.checkpay",
          technologies: ["Java", "XML", "FinTech APIs", "Asset Management", "Payment Gateway", "Zero Pay Integration"],
          category: "finance",
          featured: false
        },
        {
          name: "BZPEXPENSE",
          description: "Enterprise expense tracking application designed for government and corporate expense management with security compliance",
          remoteImage: "https://play-lh.googleusercontent.com/OY32Ixq7W_IMq51yKGfFvwSCbKdsH3ZCoU8tgqpt22NqDx5wH0ydweSTY0y01hSOVQ=w480-h960-rw",
          image: "/placeholder.svg",
          link: "https://play.google.com/store/apps/details?id=com.nextbiz.bzpexpense.aos",
          technologies: ["Java", "XML", "Android SDK", "Government Compliance", "Enterprise Security", "Expense Analytics"],
          category: "finance",
          featured: false
        },
        {
          name: "bzpExpenseGov",
          description: "Government-specific expense tracking application with enhanced security and compliance features for public sector organizations",
          remoteImage: "https://example.com/images/bzpexpense.png",
          image: "/placeholder.svg",
          link: "#",
          technologies: ["Java", "XML", "Android SDK", "Government Standards", "Public Sector Compliance", "Enhanced Security"],
          category: "finance",
          featured: false
        },
        {
          name: "트리플러스",
          description: "HD Hyundai Department Store integrated business productivity suite with workflow management and expense tracking",
          remoteImage: "https://play-lh.googleusercontent.com/QAOwa6XXyR1lBc0pLuJdI8SLU6ryn1pNvLv0Eljxo5XFsG5JQJqNdMuqNU4TLmA-BQ=w480-h960-rw",
          image: "/placeholder.svg",
          link: "https://play.google.com/store/apps/details?id=com.nextbiz.hdexpense.aos",
          technologies: ["Java", "XML", "Enterprise Workflow", "Department Store Integration"],
          category: "finance",
          featured: false
        },
        {
          name: "KT 법인카드",
          description: "KT Corporation's corporate card management system with real-time transaction monitoring and expense reporting",
          remoteImage: "https://play-lh.googleusercontent.com/2wKstoTO9_rv8iQKf6t2ro0qY6m8UT-UxvJbCrFMi9tJw0Gz2IMszJylArnoEn-bqIc=w480-h960-rw",
          image: "/placeholder.svg",
          link: "https://play.google.com/store/apps/details?id=com.bizcard.ktbizplayL",
          technologies: ["Java", "XML", "KT APIs", "Telecom Integration", "Corporate Finance"],
          category: "finance",
          featured: false
        },
        {
          name: "비플 법인카드",
          description: "Biple corporate card management application with integrated business expense tracking and approval workflows",
          remoteImage: "https://play-lh.googleusercontent.com/WtAgVCI2WFYDcx_1VCxjrj6BZFXh8KGVURsLCJU9RWxzjksgHHt575IkFDaYxwh0-YsZ=s96-rw",
          image: "/placeholder.svg",
          link: "https://play.google.com/store/apps/details?id=com.my.bizcard",
          technologies: ["Java", "Corporate Card APIs", "Expense Management", "Workflow Engine"],
          category: "finance",
          featured: false
        },
        {
          name: "비플법인카드 On-Premise",
          description: "On-premise version of Biple corporate card management system for enterprise clients requiring local deployment",
          remoteImage: "https://play-lh.googleusercontent.com/RKr6Y6ES7s3cXwgtBnxg4hde4weijVnviVcm3Vtl_GNXtRnV81DmizyN7No3IjHMLQ=s96-rw",
          image: "/placeholder.svg",
          link: "https://play.google.com/store/apps/details?id=com.bizplay.ippp.bizcard.aos",
          technologies: ["Java", "On-Premise Architecture", "Enterprise Security", "Corporate Finance"],
          category: "finance",
          featured: false
        },
        {
          name: "NH소호비즈 모바일 경비관리 서비스",
          description: "Nonghyup Small Office/Home Office mobile expense management service for small business financial operations",
          remoteImage: "https://play-lh.googleusercontent.com/_u3Ua1NSsXW-cqCsTs-MUCRZxkKZZHZ3VQTXO_ZkBvTTIknaVTImSZufqRyjZ_Alai8=w480-h960-rw",
          image: "/placeholder.svg",
          link: "https://play.google.com/store/apps/details?id=com.nh.bizcard",
          technologies: ["Java", "Nonghyup Banking APIs", "Small Business Tools", "Mobile Banking"],
          category: "finance",
          featured: false
        },
        {
          name: "비플 개인카드",
          description: "Biple personal card management application for individual expense tracking and financial management",
          remoteImage: "https://play-lh.googleusercontent.com/V_1xqzgYennKjwcVD__fs5Cmmbljy_ooSpVxE51zyZ2XJ7U5UEKH0g1APnEcS5MOL9w-=w480-h960-rw",
          image: "/placeholder.svg",
          link: "https://play.google.com/store/apps/details?id=com.personal.card",
          technologies: ["Java", "Personal Finance APIs", "Card Management", "Expense Tracking"],
          category: "finance",
          featured: false
        },
        {
          name: "비즈캘린더",
          description: "Business calendar management system for corporate scheduling, meeting management, and workflow coordination",
          remoteImage: "https://play-lh.googleusercontent.com/aGvPBqqGHDoZPQcf_cAtZDty02S21tnqp5efnnCnD5Wj2SxtzDkQcGrM5LJB2eImXBM=w480-h960-rw",
          image: "/placeholder.svg",
          link: "https://play.google.com/store/apps/details?id=com.bizplay.schedule",
          technologies: ["Java", "Calendar APIs", "Business Scheduling", "Corporate Integration"],
          category: "finance",
          featured: false
        },
        {
          name: "결재함",
          description: "Corporate approval management platform for business decision workflows and document approval processes",
          remoteImage: "https://play-lh.googleusercontent.com/Airpx6ajaII6hfp_mwXcoLnY60vZ2Chjyc36dSbeBPC0FW71gAr4Sh7oQS9gDytsFg=w480-h960-rw",
          image: "/placeholder.svg",
          link: "https://play.google.com/store/apps/details?id=com.bizplay.approval",
          technologies: ["Kotlin", "Workflow Engine", "Approval Systems", "Corporate Integration", "Document Management"],
          category: "finance",
          featured: false
        },
        {
          name: "비플결재함 On-Premise",
          description: "On-premise approval management platform for enterprise clients requiring local deployment and enhanced security",
          remoteImage: "https://play-lh.googleusercontent.com/oNBGB-7-SZM5RAsty4rPOvMKcemUcvCcWSQ9izaC1I4ufBDAKH3sNDpXiOuUb987Hw0D=w480-h960-rw",
          image: "/placeholder.svg",
          link: "https://play.google.com/store/apps/details?id=com.bizplay.ippp.approval.aos",
          technologies: ["Kotlin", "On-Premise Architecture", "Workflow Engine", "Enterprise Security"],
          category: "finance",
          featured: false
        },
        {
          name: "KT 결재함",
          description: "KT Corporation's approval management platform for corporate decision workflows and internal process management",
          remoteImage: "https://play-lh.googleusercontent.com/BYs737SMl1ugdsYp8kqZYRo4ZQ9I11Mo8JlpisXrSSYQSeUazE5hm-vACsfom127SA0=w480-h960-rw",
          image: "/placeholder.svg",
          link: "https://play.google.com/store/apps/details?id=com.bizplay.ktApprovalMobileAppL",
          technologies: ["Kotlin", "KT Enterprise APIs", "Workflow Management", "Telecom Integration"],
          category: "finance",
          featured: false
        },
        {
          name: "비즈메모",
          description: "Business note-taking and messaging platform for corporate communication and information sharing",
          remoteImage: "https://play-lh.googleusercontent.com/hIFoYHFNXf_RqYpqgVoIPV2PFsJogunA5W6jvwPvUW7W-ff1y5qDB6TQA6eoL-wefw=w480-h960-rw",
          image: "/placeholder.svg",
          link: "https://play.google.com/store/apps/details?id=com.biz.memo",
          technologies: ["Android SDK", "Real-time Messaging", "Business Communication", "Note Management"],
          category: "finance",
          featured: false
        },
        {
          name: "그린메세지",
          description: "Green messaging platform for business communication with eco-friendly digital messaging solutions",
          remoteImage: "https://play-lh.googleusercontent.com/DPgileYqENJ6qU9XwzJiPSV75njqtOqItVPCFEjNrrcd3GS-6clgxfJ-fwgPZsOdqGc=w480-h960-rw",
          image: "/placeholder.svg",
          link: "https://play.google.com/store/apps/details?id=com.webcash.green.message",
          technologies: ["Android SDK", "Messaging APIs", "Environmental Tech", "Business Communication"],
          category: "finance",
          featured: false
        },
        {
          name: "뱅크노트 – 기업 통합계좌관리 서비스",
          description: "Corporate integrated account management service providing unified banking interface for streamlined financial operations",
          remoteImage: "https://play-lh.googleusercontent.com/8u_aqEBwKW2grg72NYSiWdQPs1S363BzgPWINB2HwCwWmClX1rPLpmUQd1Vs_EmzgZaO=w480-h960-rw",
          image: "/placeholder.svg",
          link: "https://play.google.com/store/apps/details?id=com.webcash.banknote",
          technologies: ["Java", "Multi-Banking APIs", "Account Aggregation", "Financial UI/UX", "Corporate Banking"],
          category: "finance",
          featured: false
        },
        {
          name: "비플 운행일지",
          description: "Biple vehicle operation log management system for corporate fleet management and mileage tracking",
          remoteImage: "https://play-lh.googleusercontent.com/a2rMDG5ljXFQJz8ySqceOLVSIBL1mfTyf5hhN5wKh3ymqInrPjDMbXjRM6gM6q9YvN8=w480-h960-rw",
          image: "/placeholder.svg",
          link: "https://play.google.com/store/apps/details?id=com.biple.driving.daily",
          technologies: ["Java", "GPS Tracking", "Fleet Management", "Mileage Calculation", "Corporate Logistics"],
          category: "finance",
          featured: false
        },
        {
          name: "비플운행일지 On-Premise",
          description: "On-premise vehicle operation log system for enterprises requiring local deployment and enhanced data security",
          remoteImage: "https://play-lh.googleusercontent.com/X_UzerYPaKoKtIrejymMZ7i5coGmAc0jkejY7IBMN6RKesT-nunjOPj_wsFlFWEdyw=w480-h960-rw",
          image: "/placeholder.svg",
          link: "https://play.google.com/store/apps/details?id=com.ippp.biple.driving.daily.aos",
          technologies: ["Java", "On-Premise Architecture", "GPS Integration", "Fleet Analytics", "Enterprise Security"],
          category: "finance",
          featured: false
        },
        {
          name: "강원상품권",
          description: "Gangwon Province regional gift certificate app supporting local commerce and Zero Pay integration",
          remoteImage: "https://play-lh.googleusercontent.com/kTAYUXfgxSh47Q6MujmrrDU9YLMwLhVAWqyK7fX3bchpk7d-QqEdB9nVzhNIQYlXxV34=w480-h960-rw",
          image: "/placeholder.svg",
          link: "https://play.google.com/store/apps/details?id=com.bizplay.bizzeropay.kangwon",
          technologies: ["Java", "Regional Payment APIs", "Gift Certificate System", "Zero Pay", "Local Commerce"],
          category: "finance",
          featured: false
        },
        {
          name: "경남지역상품권",
          description: "Gyeongnam Province regional gift certificate platform promoting local economic development and digital payments",
          remoteImage: "https://play-lh.googleusercontent.com/CpLFYjMXcOJRl1CSEa1LvnwxE2amivaTSIZUiKvCefnDnAt7KcTXz0CtIl5efoGnWQ=w480-h960-rw",
          image: "/placeholder.svg",
          link: "https://play.google.com/store/apps/details?id=com.bizplay.bizzeropay.gyeongnam",
          technologies: ["Java", "Regional Commerce APIs", "Digital Vouchers", "Local Government Integration"],
          category: "finance",
          featured: false
        },
        {
          name: "춘천사랑상품권",
          description: "Chuncheon City love gift certificate app supporting local businesses and community economic development",
          remoteImage: "https://play-lh.googleusercontent.com/92f3KqEGiIaIWFNBdKUD1p5gRP0MtZiTM3Xv-WGzYS8Sr5iyElBxDIt0C8NXMU-o66A=w480-h960-rw",
          image: "/placeholder.svg",
          link: "https://play.google.com/store/apps/details?id=com.bizplay.bizzeropay.chuncheon",
          technologies: ["Java", "Municipal APIs", "Local Business Support", "Community Commerce", "Digital Certificates"],
          category: "finance",
          featured: false
        },
        {
          name: "WABOOKS",
          description: "Comprehensive accounting application for business financial management with advanced analytics and reporting",
          remoteImage: "https://play-lh.googleusercontent.com/4R9ycGFxe_p4uItwWTSttlzfR0Ht4Z4WWd-TxZVtpue2od0N3Ogk6KM-Q5fgABXMgrJR=w480-h960-rw",
          image: "/placeholder.svg",
          link: "https://play.google.com/store/apps/details?id=com.wabooks.mobile",
          technologies: ["Android SDK", "Accounting Engine", "Financial Analytics", "Reporting Tools", "Tax Management"],
          category: "finance",
          featured: false
        },
        {
          name: "WeBill 365",
          description: "365-day billing management application with automated invoice processing and payment tracking capabilities",
          remoteImage: "https://play-lh.googleusercontent.com/x7psFHQMcdxg8DLNPJcE3bvAXH6xnzI5bvn4HBVO9NpzGevVsI_eNuezfQYyT7tn_50=w480-h960-rw",
          image: "/placeholder.svg",
          link: "https://play.google.com/store/apps/details?id=com.kosign.webill",
          technologies: ["Kotlin", "Billing Automation", "Invoice Management", "Payment Integration", "Financial Reporting"],
          category: "finance",
          featured: false
        },
        {
          name: "WeCafe",
          description: "Lifestyle and commerce app for WeGarden users with product checkout, balance transfer, order history, and user-specific features.",
          remoteImage: "https://play-lh.googleusercontent.com/X2obtpPpcIi2v0kzi3QHepLsikBF8JYdT4ZhJbqbYmDpOin4LHaOm3K9utx75BzmZmU=w480-h960-rw",
          image: "/placeholder.svg",
          link: "https://play.google.com/store/apps/details?id=com.kosign.wegarden",
          technologies: ["Kotlin", "Mobile Commerce", "User Role Management", "Push Notifications", "UI Theming"],
          category: "finance",
          featured: false
        }
      ]
    },
    {
      title: "Academic Research Projects",
      description: "Educational and productivity applications with research components",
      projects: [
        {
          name: "Lumhat",
          description: "Educational mobile platform for Khmer Academy optimizing content delivery through UX research and educational technology innovation",
          image: "/placeholder.svg",
          remoteImage: "https://image.winudf.com/v2/image1/b3JnLmtobWVyYWNhZGVteS5sdW1oYXRfaWNvbl8xNTUwOTI1OTk0XzA3OA/icon.webp?w=360&fakeurl=1&type=.webp",
          technologies: ["Java", "Educational APIs", "UX Research", "Content Delivery", "Learning Analytics"],
          link: "https://apkpure.net/lumhat/org.khmeracademy.lumhat",
          category: "research",
          featured: true
        },
        {
          name: "DayDo",
          description: "Research-based productivity and task management system implementing evidence-based methodologies for personal efficiency",
          image: "/placeholder.svg",
          remoteImage: "https://image.winudf.com/v2/image1/Y29tLmtzaHJkLmRheWRvX2ljb25fMTYyMjIxNjE5NF8wNjM/icon.webp?w=360&fakeurl=1&type=.webp",
          technologies: ["Java", "Task Management APIs", "RESTful Services", "Productivity Research", "Behavioral Analytics"],
          link: "https://apkpure.net/daydo/com.kshrd.daydo",
          category: "research",
          featured: true
        }
      ]
    }
  ];

  // Flatten all projects and add category info
  const allProjects = projectCategories.flatMap(category =>
    category.projects.map(project => ({
      ...project,
      categoryTitle: category.title
    }))
  );

  const featuredProjects = allProjects.filter(p => p.featured);
  const filteredProjects = activeFilter === 'all' ? allProjects : 
                         activeFilter === 'featured' ? featuredProjects :
                         allProjects.filter(p => p.category === activeFilter);
  
  const projectsLimit = 12;
  const [displayedProjects, setDisplayedProjects] = useState([]);

  useEffect(() => {
    setShowAllProjects(false);
  }, [activeFilter]);

  useEffect(() => {
    if (showAllProjects) {
      // Add "More Projects" placeholder as the last item when showing all projects
      const moreProjectsPlaceholder = {
        name: 'More Projects',
        description: 'Additional projects exist but are not included in this portfolio',
        image: '/placeholder.svg',
        remoteImage: null,
        category: 'placeholder',
        categoryTitle: 'But not included',
        technologies: [],
        link: '#',
        featured: false
      };
      setDisplayedProjects([...filteredProjects, moreProjectsPlaceholder]);
    } else {
      setDisplayedProjects(filteredProjects.slice(0, projectsLimit));
    }
  }, [showAllProjects, filteredProjects]);

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const filters = [
    { id: 'all', label: 'All Projects', count: allProjects.length },
    { id: 'featured', label: 'Featured', count: featuredProjects.length },
    { id: 'finance', label: 'Finance', count: allProjects.filter(p => p.category === 'finance').length },
    { id: 'research', label: 'Research', count: allProjects.filter(p => p.category === 'research').length }
  ];

  return (
    <section id="projects" className="py-20 px-6" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            Projects
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            A showcase of enterprise-grade mobile applications demonstrating expertise in Android development and modern architecture patterns.
          </p>

          {/* View Controls */}
          <div className={`flex flex-wrap justify-center items-center gap-4 mb-6 transition-all duration-1000 delay-300 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center space-x-2 bg-accent/50 rounded-full p-1">
              <button
                onClick={() => setViewMode('detailed')}
                className={`p-2 rounded-full transition-colors ${viewMode === 'detailed' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent'}`}
                aria-label="Detailed view"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('compact')}
                className={`p-2 rounded-full transition-colors ${viewMode === 'compact' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:bg-accent'}`}
                aria-label="Compact view"
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            {/* Filter Tabs */}
            <div className={`flex flex-wrap justify-center gap-2 transition-all duration-1000 delay-400 ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'}`}>
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                      : 'bg-accent/50 text-muted-foreground hover:bg-accent hover:text-foreground hover:scale-105'
                  }`}
                >
                  {filter.label}
                  <span className="ml-2 text-xs opacity-70">({filter.count})</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className={`grid gap-6 ${
          viewMode === 'detailed' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'
        }`}>
          {displayedProjects.map((project, index) => (
            <div
              key={`${project.name}-${index}`}
              className={`group cursor-pointer transition-all duration-500 ${
                viewMode === 'detailed' ? 'hover:scale-105' : 'hover:scale-110'
              } ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => project.name !== 'More Projects' && openProject(project)}
            >
              <div className={`relative rounded-2xl transition-all duration-300 ${
                project.name === 'More Projects' 
                  ? 'border-2 border-dashed border-border/30 bg-accent/5 hover:bg-accent/10' 
                  : 'bg-background border border-border/50 hover:border-primary/50'
              } ${
                viewMode === 'detailed' 
                  ? 'p-6 hover:shadow-xl h-full flex flex-col' 
                  : 'p-4 hover:shadow-md flex flex-col items-center'
              } ${
                project.name === 'More Projects' ? 'items-center justify-center' : ''
              }`}>
                {/* App Icon */}
                <div className={`relative ${
                  viewMode === 'detailed' ? 'mb-4 w-16 h-16' : 'w-12 h-12 mb-2'
                }`}>
                  <div className={`rounded-xl overflow-hidden ${
                    project.name === 'More Projects' ? 'bg-muted/20' : 'bg-accent/20'
                  } flex items-center justify-center transition-transform duration-300 ${
                    viewMode === 'detailed' ? 'group-hover:scale-110 w-full h-full' : 'w-full h-full'
                  }`}>
                    {project.name === 'More Projects' ? (
                      <Plus className={`text-muted-foreground/50 ${
                        viewMode === 'detailed' ? 'w-8 h-8' : 'w-6 h-6'
                      }`} />
                    ) : (
                      <img
                        src={project.remoteImage || project.image}
                        alt={project.name}
                        onError={(e) => { e.currentTarget.src = project.image || "/placeholder.svg"; }}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    )}
                  </div>
                  {/* Featured indicator removed */}
                </div>

                {viewMode === 'detailed' ? (
                  <>
                    <div className="flex-1 flex flex-col">
                      <h3 className={`text-lg font-semibold mb-2 text-center transition-colors duration-300 line-clamp-2 ${
                        project.name === 'More Projects' 
                          ? 'text-muted-foreground/70' 
                          : 'group-hover:text-primary'
                      }`}>
                        {project.name}
                      </h3>
                      
                      <p className={`text-sm text-center mb-4 line-clamp-3 flex-1 ${
                        project.name === 'More Projects' 
                          ? 'text-muted-foreground/60' 
                          : 'text-muted-foreground'
                      }`}>
                        {project.description}
                      </p>

                      {/* Category Badge */}
                      <div className="flex justify-center mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.name === 'More Projects' 
                            ? 'bg-muted/10 text-muted-foreground/50'
                            : project.category === 'finance' 
                              ? 'bg-blue-500/10 text-blue-500'
                              : 'bg-green-500/10 text-green-500'
                        }`}>
                          {project.categoryTitle}
                        </span>
                      </div>

                      {/* Tech Stack Preview */}
                      <div className="flex flex-wrap justify-center gap-1">
                        {project.name === 'More Projects' ? (
                          <span className="px-4 py-2 bg-muted/10 text-muted-foreground/50 rounded-lg text-xs font-medium">
                            End of Portfolio
                          </span>
                        ) : (
                          <>
                            {project.technologies.slice(0, 3).map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-2 py-1 bg-primary/5 text-primary rounded text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                            {project.technologies.length > 3 && (
                              <span className="px-2 py-1 bg-accent text-muted-foreground rounded text-xs">
                                +{project.technologies.length - 3}
                              </span>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="w-full text-center">
                    <h3 className={`text-sm font-medium transition-colors duration-300 line-clamp-2 ${
                      project.name === 'More Projects' 
                        ? 'text-muted-foreground/70' 
                        : 'group-hover:text-primary'
                    }`}>
                      {project.name}
                    </h3>
                    <div className="mt-1">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        project.name === 'More Projects' 
                          ? 'bg-muted/10 text-muted-foreground/50'
                          : project.category === 'finance' 
                            ? 'bg-blue-500/10 text-blue-500'
                            : 'bg-green-500/10 text-green-500'
                      }`}>
                        {project.name === 'More Projects' ? 'Not included' : project.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {/* Show More/Less Button */}
          {filteredProjects.length > projectsLimit && (
            <div className={`${
              viewMode === 'detailed' 
                ? 'col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4' 
                : 'col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-5 xl:col-span-6'
            }`}>
              {!showAllProjects ? (
                <button
                  onClick={() => setShowAllProjects(true)}
                  className="w-full py-4 bg-accent/10 hover:bg-accent/20 text-muted-foreground hover:text-foreground rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Plus className="w-5 h-5" />
                  Show All Projects ({filteredProjects.length - projectsLimit} more)
                </button>
              ) : (
                <button
                  onClick={() => setShowAllProjects(false)}
                  className="w-full py-4 text-muted-foreground hover:text-foreground font-medium transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Show Less
                </button>
              )}
            </div>
          )}

        </div>

        {/* Removed duplicate show more buttons - functionality moved to grid footer */}

        {/* Enhanced Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md flex justify-center items-center z-50 p-4"
            onClick={closeModal}
          >
            <div
              className="bg-background rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative border border-border/50 shadow-2xl animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 z-10 p-2 rounded-full bg-accent/50 hover:bg-accent text-muted-foreground hover:text-foreground transition-all duration-300"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="p-8 border-b border-border/50">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <img
                      src={selectedProject.remoteImage || selectedProject.image}
                      alt={selectedProject.name}
                      onError={(e) => { e.currentTarget.src = selectedProject.image || "/placeholder.svg"; }}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-3">
                      <h3 className="text-2xl font-bold text-foreground">
                        {selectedProject.name}
                      </h3>
                      {/* Featured indicator removed */}
                    </div>
                    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      selectedProject.category === 'finance' 
                        ? 'bg-blue-500/10 text-blue-500'
                        : 'bg-green-500/10 text-green-500'
                    }`}>
                      {selectedProject.categoryTitle}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                  {selectedProject.description}
                </p>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-4 flex items-center">
                    <Code className="w-5 h-5 mr-2 text-primary" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                {selectedProject.link && selectedProject.link !== "#" && (
                  <div className="flex justify-center">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>View on Play Store</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
