import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface BrandAsset {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  downloadUrl: string;
}

interface BrandingData {
  title: string;
  subtitle: string;
  description: string;
  assets: BrandAsset[];
}

const PersonalBranding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedAsset, setSelectedAsset] = useState<BrandAsset | null>(null);
  const [brandingData, setBrandingData] = useState<BrandingData | null>(null);
  const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const fetchBrandingData = async () => {
      try {
          setLoading(true);
        const response = await fetch('/content/branding.json');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setBrandingData(data);
      } catch (error) {
        console.error('Error fetching branding data:', error);
        setError(error instanceof Error ? error.message : 'Failed to load data');
      } finally {
          setLoading(false);
      }
    };

    fetchBrandingData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        {threshold: 0.1}
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
  }, [brandingData]);

  useEffect(() => {
    if (brandingData) {
      setIsVisible(true);
    }
  }, [brandingData]);

  const openPreview = (asset: BrandAsset) => {
    setSelectedAsset(asset);
  };

  const closePreview = () => {
    setSelectedAsset(null);
  };

    if (loading) {
        return (
            <section id="branding" className="py-20 px-6" ref={sectionRef}>
                <div className="max-w-5xl mx-auto">
                    <div className="text-center">
                        <div className="animate-pulse">
                            <div className="h-8 bg-gray-300 rounded w-48 mx-auto mb-4"></div>
                            <div className="h-4 bg-gray-300 rounded w-64 mx-auto"></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section id="branding" className="py-20 px-6" ref={sectionRef}>
                <div className="max-w-5xl mx-auto">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-500">Error</h2>
                        <p className="text-muted-foreground">{error}</p>
                    </div>
                </div>
            </section>
        );
    }

    if (!brandingData) {
        return null;
    }

    return (
      <section id="branding" className="py-20 px-6" ref={sectionRef}>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              {brandingData.title}
            </h2>
            <p className={`text-muted-foreground max-w-2xl mx-auto transition-opacity duration-700 delay-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              {brandingData.subtitle}
            </p>
          </div>

        {/* Brand Assets Grid - More compact layout */}
        <div
            className={`grid grid-cols-5 md:grid-cols-10 gap-4 mb-12 transition-opacity duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {brandingData.assets.map((asset) => (
              <div
                  key={asset.id}
                  className="group text-center cursor-pointer"
                  onClick={() => openPreview(asset)}
              >
              <div
                  className="w-12 h-12 mx-auto mb-2 flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
              >
                <img
                    src={asset.image}
                    alt={asset.name}
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
            {brandingData.description}
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
                      alt={selectedAsset.name}
                      className="max-w-full max-h-full object-contain p-4"
                  />
                </div>

                <div className="text-center">
                  <h3 className="text-lg font-medium mb-1">{selectedAsset.name}</h3>
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