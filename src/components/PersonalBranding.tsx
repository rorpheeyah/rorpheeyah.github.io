import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

const PersonalBranding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState(null);
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

  const brandAssets = [
    {
      name: 'Circle',
      outlineImage: '/ic_seal_circle.png',
      filledImage: '/ic_seal_circle_filled.png',
      description: 'Traditional circular seal format'
    },
    {
      name: 'Square',
      outlineImage: '/ic_seal_square.png',
      filledImage: '/ic_seal_square_filled.png',
      description: 'Imperial square seal style'
    },
    {
      name: 'Rectangle',
      outlineImage: '/ic_seal_rect.png',
      filledImage: '/ic_seal_rect_filled.png',
      description: 'Rectangular seal variation'
    },
    {
      name: 'Favicon',
      outlineImage: '/ic_favicon_rect_outline.svg',
      filledImage: '/ic_favicon.svg',
      description: 'Digital adaptation for web'
    },
    {
      name: 'Horizontal',
      outlineImage: '/ic_seal_horizontal.png',
      filledImage: '/ic_seal_horizontal_filled.png',
      description: 'Extended horizontal format'
    }
  ];

  const allAssets = brandAssets.flatMap(asset => [
    {
      ...asset,
      image: asset.outlineImage,
      displayName: `${asset.name} - Outline`,
      variant: 'outline'
    },
    {
      ...asset,
      image: asset.filledImage,
      displayName: `${asset.name} - Filled`,
      variant: 'filled'
    }
  ]);

  const openPreview = (asset) => {
    setSelectedAsset(asset);
  };

  const closePreview = () => {
    setSelectedAsset(null);
  };

  return (
    <section id="branding" className="py-24 px-6" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Personal Branding
          </h2>
          <p className={`text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Personal seal designs inspired by the Heirloom Seal of the Realm and Qin dynasty artistry, incorporating
            Khmer Angkor era script elements. The seals feature my name (Rorpheeyah) rendered in 13th-14th century
            Khmer script (Angkor empire period) as "រភយ" (full "រ៉ភីយ៉ះ") - a unique fusion of two great civilizations.
          </p>
        </div>

        {/* Brand Assets Grid */}
        <div className="border border-border rounded-2xl p-4 md:p-8 bg-card mb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
            {allAssets.map((asset, index) => (
              <div
                key={index}
                className={`group text-center transition-all duration-500 cursor-pointer ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => openPreview(asset)}
              >
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-xl bg-accent/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <img 
                    src={asset.image} 
                    alt={asset.displayName}
                    className="max-w-full max-h-full object-contain p-2"
                  />
                </div>
                <h3 className="text-sm font-medium text-foreground mb-1">{asset.displayName}</h3>
                <p className="text-xs text-muted-foreground">{asset.description}</p>
                <div className={`text-xs px-2 py-1 rounded-full mt-2 inline-block ${
                  asset.variant === 'filled'
                    ? 'bg-primary/10 text-primary'
                    : 'bg-accent/50 text-muted-foreground'
                }`}>
                  {asset.variant === 'filled' ? 'Filled' : 'Outline'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Design Tools & Philosophy */}
        <div className={`mb-16 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-12">
            <h3 className="text-xl font-medium text-foreground mb-2">Design Approach</h3>
            <p className="text-muted-foreground">Tools and principles that guide my design process</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Design Tools */}
            <div className="border border-border/50 rounded-xl p-6 bg-card/50">
              <h4 className="text-lg font-medium text-foreground mb-4">Tools</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-3 p-2 rounded-lg bg-accent/20">
                  <div className="w-1.5 h-1.5 bg-foreground/60 rounded-full flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">Illustrator</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-accent/20">
                  <div className="w-1.5 h-1.5 bg-foreground/60 rounded-full flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">Photoshop</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-accent/20">
                  <div className="w-1.5 h-1.5 bg-foreground/60 rounded-full flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">Photopea</span>
                </div>
                <div className="flex items-center gap-3 p-2 rounded-lg bg-accent/20">
                  <div className="w-1.5 h-1.5 bg-foreground/60 rounded-full flex-shrink-0"></div>
                  <span className="text-sm text-muted-foreground">Figma</span>
                </div>
              </div>
            </div>

            {/* Historical Inspiration */}
            <div className="border border-border/50 rounded-xl p-6 bg-card/50">
              <h4 className="text-lg font-medium text-foreground mb-4">Historical Inspiration</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-2 rounded-lg bg-accent/20">
                  <div className="w-1.5 h-1.5 bg-foreground/60 rounded-full flex-shrink-0 mt-2"></div>
                  <div>
                    <span className="text-sm font-medium text-foreground">Qin Dynasty Legacy</span>
                    <p className="text-xs text-muted-foreground mt-1">Drawing from China's first imperial unification era</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded-lg bg-accent/20">
                  <div className="w-1.5 h-1.5 bg-foreground/60 rounded-full flex-shrink-0 mt-2"></div>
                  <div>
                    <span className="text-sm font-medium text-foreground">Khmer Angkor Script</span>
                    <p className="text-xs text-muted-foreground mt-1">13th-14th century Khmer script rendering my name
                      (Rorpheeyah) as "រភយ" (full "រ៉ភីយ៉ះ")</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded-lg bg-accent/20">
                  <div className="w-1.5 h-1.5 bg-foreground/60 rounded-full flex-shrink-0 mt-2"></div>
                  <div>
                    <span className="text-sm font-medium text-foreground">Cultural Synthesis</span>
                    <p className="text-xs text-muted-foreground mt-1">Bridging two magnificent civilizations through design</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Design Philosophy */}
            <div className="border border-border/50 rounded-xl p-6 bg-card/50">
              <h4 className="text-lg font-medium text-foreground mb-4">Design Philosophy</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-2 rounded-lg bg-accent/20">
                  <div className="w-1.5 h-1.5 bg-foreground/60 rounded-full flex-shrink-0 mt-2"></div>
                  <div>
                    <span className="text-sm font-medium text-foreground">Historical Reverence</span>
                    <p className="text-xs text-muted-foreground mt-1">Honoring the artistic legacy of ancient empires</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded-lg bg-accent/20">
                  <div className="w-1.5 h-1.5 bg-foreground/60 rounded-full flex-shrink-0 mt-2"></div>
                  <div>
                    <span className="text-sm font-medium text-foreground">Personal Craftsmanship</span>
                    <p className="text-xs text-muted-foreground mt-1">Each design reflects individual artistic interpretation</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-2 rounded-lg bg-accent/20">
                  <div className="w-1.5 h-1.5 bg-foreground/60 rounded-full flex-shrink-0 mt-2"></div>
                  <div>
                    <span className="text-sm font-medium text-foreground">Modern Implementation</span>
                    <p className="text-xs text-muted-foreground mt-1">Bridging ancient artistry with contemporary design</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Statement */}
        <div
            className={`text-center max-w-4xl mx-auto transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative">
            <div
                className="text-6xl text-muted-foreground/20 font-serif absolute -top-4 left-1/2 transform -translate-x-1/2">"
            </div>
            <blockquote
                className="text-foreground/90 text-lg md:text-xl leading-relaxed font-medium tracking-wide pt-8 pb-6">
              Inspired by the legendary Heirloom Seal of the Realm and the unifying power of the Qin dynasty, these
              personal seals fuse Chinese imperial tradition with Khmer Angkor script elements. The seals feature
              my name (Rorpheeyah), beautifully rendered in 13th-14th century Khmer script as "រភយ" (full
              "រ៉ភីយ៉ះ"). This passion
              project
              represents my deep appreciation for both civilizations and showcases the beautiful intersection of
              historical study, cultural appreciation, and artistic expression.
            </blockquote>
            <div
                className="text-6xl text-muted-foreground/20 font-serif absolute -bottom-4 right-1/2 transform translate-x-1/2 rotate-180">"
            </div>
          </div>
        </div>

        {/* Preview Modal */}
        {selectedAsset && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            onClick={closePreview}
          >
            <div
              className="bg-card rounded-xl max-w-lg w-full relative border border-border animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closePreview}
                className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-accent hover:bg-accent/80 text-muted-foreground hover:text-foreground transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Preview Content */}
              <div className="p-8">
                <div className="aspect-square bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                  <img
                    src={selectedAsset.image}
                    alt={selectedAsset.displayName}
                    className="max-w-full max-h-full object-contain p-8"
                  />
                </div>
                
                <div className="text-center">
                  <h3 className="text-xl font-medium text-foreground mb-2">{selectedAsset.displayName}</h3>
                  <p className="text-muted-foreground">{selectedAsset.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PersonalBranding;