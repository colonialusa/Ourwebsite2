import Navigation from "@/components/Navigation";

interface PlaceholderProps {
  pageName: string;
}

export default function Placeholder({ pageName }: PlaceholderProps) {
  return (
    <div className="min-h-screen bg-colonial-light-bg">
      <Navigation />

      {/* Content */}
      <div className="flex items-center justify-center min-h-screen pt-24">
        <div className="text-center max-w-2xl px-4">
          <div className="mb-6">
            <div className="w-24 h-24 bg-colonial-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">🚧</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-colonial-navy mb-4">
              {pageName} Page
            </h1>
            <p className="text-lg text-colonial-gray mb-8">
              This page is coming soon. Continue prompting to fill in this page content if you'd like.
            </p>
            <Link 
              to="/" 
              className="inline-flex px-8 py-4 rounded-[25px] bg-colonial-navy text-colonial-gold font-semibold text-base hover:bg-colonial-navy/90 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
