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

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, []);

  const brandAssets = [
    {
      name: 'Circle',
      outlineImage: '/images/seals/ic_seal_circle.png',
      filledImage: '/images/seals/ic_seal_circle_filled.png',
      description: 'Traditional circular seal format'
    },
    {
      name: 'Square',
      outlineImage: '/images/seals/ic_seal_square.png',
      filledImage: '/images/seals/ic_seal_square_filled.png',
      description: 'Imperial square seal style'
    },
    {
      name: 'Rectangle',
      outlineImage: '/images/seals/ic_seal_rect.png',
      filledImage: '/images/seals/ic_seal_rect_filled.png',
      description: 'Rectangular seal variation'
    },
    {
      name: 'Favicon',
      outlineImage: '/images/icons/ic_favicon_rect_outline.svg',
      filledImage: '/images/icons/ic_favicon.svg',
      description: 'Digital adaptation for web'
    },
    {
      name: 'Horizontal',
      outlineImage: '/images/seals/ic_seal_horizontal.png',
      filledImage: '/images/seals/ic_seal_horizontal_filled.png',
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

  const openPreview = (asset: typeof allAssets[number]) => {
    setSelectedAsset(asset);
  };

  const closePreview = () => {
    setSelectedAsset(null);
  };

  return (
      <section id="branding" className="py-20 px-6" ref={sectionRef}>
        <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Personal Branding
          </h2>
          <p className={`text-muted-foreground max-w-2xl mx-auto transition-opacity duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Personal seal designs inspired by Chinese imperial traditions and Khmer Angkor script.
          </p>
        </div>

        {/* Brand Assets Grid - More compact layout */}
        <div
            className={`grid grid-cols-5 md:grid-cols-10 gap-4 mb-12 transition-opacity duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {allAssets.map((asset, index) => (
              <div
                  key={index}
                  className="group text-center cursor-pointer"
                  onClick={() => openPreview(asset)}
              >
                <div
                    className="w-12 h-12 mx-auto mb-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <img
                      src={asset.image}
                      alt={asset.displayName}
                      className="max-w-full max-h-full object-contain"
                  />
              </div>
                <p className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">{asset.name}</p>
            </div>
          ))}
        </div>

        {/* Brand Statement - Simplified */}
        <div
            className={`text-center max-w-2xl mx-auto transition-opacity duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-muted-foreground leading-relaxed">
            These personal seals combine Chinese imperial traditions with Khmer Angkor script elements,
            featuring my name "រភយ" in 13th-14th century Khmer script.
          </p>
        </div>

        {/* Preview Modal */}
        {selectedAsset && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            onClick={closePreview}
          >
            <div
                className="bg-card rounded-xl max-w-md w-full relative border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closePreview}
                className="absolute top-4 right-4 z-10 p-2 rounded-lg hover:bg-accent text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                <X className="w-4 h-4"/>
              </button>

              {/* Preview Content */}
              <div className="p-6">
                <div className="aspect-square flex items-center justify-center mb-4">
                  <img
                    src={selectedAsset.image}
                    alt={selectedAsset.displayName}
                    className="max-w-full max-h-full object-contain p-4"
                  />
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-medium mb-1">{selectedAsset.displayName}</h3>
                  <p className="text-sm text-muted-foreground">{selectedAsset.description}</p>
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