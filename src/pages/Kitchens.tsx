import React from 'react';
import { ArrowRight, CheckCircle, Phone } from 'lucide-react';
import { useScrollTo } from '../hooks/useScrollTo';
import { usePageMeta } from '../hooks/usePageMeta';
import ImageSlider from '../components/ImageSlider';
import kitchenHero from '../assets/kitchens/kitchen-hero.jpg';

// Import all kitchen slider images
// Slider 1
import kitchenModernWhiteCabinets from '../assets/kitchens/Slider 1/kitchen-modern-white-cabinets.jpg';
import kitchenModernWhiteCabinetsAvif from '../assets/kitchens/Slider 1/kitchen-modern-white-cabinets.avif';
import kitchenIslandDesign from '../assets/kitchens/Slider 1/kitchen-island-design.jpg';
import kitchenIslandDesignAvif from '../assets/kitchens/Slider 1/kitchen-island-design.avif';
import kitchenOpenPlan from '../assets/kitchens/Slider 1/kitchen-open-plan.jpg';
import kitchenOpenPlanAvif from '../assets/kitchens/Slider 1/kitchen-open-plan.avif';
import kitchenQuartzCountertop from '../assets/kitchens/Slider 1/kitchen-quartz-countertop.jpg';
import kitchenQuartzCountertopAvif from '../assets/kitchens/Slider 1/kitchen-quartz-countertop.avif';
import kitchenCustomCabinets from '../assets/kitchens/Slider 1/kitchen-custom-cabinets.jpg';
import kitchenCustomCabinetsAvif from '../assets/kitchens/Slider 1/kitchen-custom-cabinets.avif';
import kitchenStorageSolutions from '../assets/kitchens/Slider 1/kitchen-storage-solutions.jpg';
import kitchenStorageSolutionsAvif from '../assets/kitchens/Slider 1/kitchen-storage-solutions.avif';
import kitchenLightingDesign from '../assets/kitchens/Slider 1/kitchen-lighting-design.jpg';
import kitchenLightingDesignAvif from '../assets/kitchens/Slider 1/kitchen-lighting-design.avif';
import kitchenApplianceIntegration from '../assets/kitchens/Slider 1/kitchen-appliance-integration.jpg';
import kitchenApplianceIntegrationAvif from '../assets/kitchens/Slider 1/kitchen-appliance-integration.avif';

// Slider 2
import kitchenGraniteCountertop from '../assets/kitchens/Slider 2/kitchen-granite-countertop.jpg';
import kitchenGraniteCountertopAvif from '../assets/kitchens/Slider 2/kitchen-granite-countertop.avif';
import kitchenWoodenCabinets from '../assets/kitchens/Slider 2/kitchen-wooden-cabinets.jpg';
import kitchenWoodenCabinetsAvif from '../assets/kitchens/Slider 2/kitchen-wooden-cabinets.avif';
import kitchenPantryStorage from '../assets/kitchens/Slider 2/kitchen-pantry-storage.jpg';
import kitchenPantryStorageAvif from '../assets/kitchens/Slider 2/kitchen-pantry-storage.avif';
import kitchenBreakfastNook from '../assets/kitchens/Slider 2/kitchen-breakfast-nook.jpg';
import kitchenBreakfastNookAvif from '../assets/kitchens/Slider 2/kitchen-breakfast-nook.avif';
import kitchenLuxuryDesign from '../assets/kitchens/Slider 2/kitchen-luxury-design.jpg';
import kitchenLuxuryDesignAvif from '../assets/kitchens/Slider 2/kitchen-luxury-design.avif';
import kitchenModernAppliances from '../assets/kitchens/Slider 2/kitchen-modern-appliances.jpg';
import kitchenModernAppliancesAvif from '../assets/kitchens/Slider 2/kitchen-modern-appliances.avif';
import kitchenBacklighting from '../assets/kitchens/Slider 2/kitchen-backlighting.jpg';
import kitchenBacklightingAvif from '../assets/kitchens/Slider 2/kitchen-backlighting.avif';
import kitchenCustomIsland from '../assets/kitchens/Slider 2/kitchen-custom-island.jpg';
import kitchenCustomIslandAvif from '../assets/kitchens/Slider 2/kitchen-custom-island.avif';
import kitchenStorageCabinets from '../assets/kitchens/Slider 2/kitchen-storage-cabinets.jpg';
import kitchenStorageCabinetsAvif from '../assets/kitchens/Slider 2/kitchen-storage-cabinets.avif';

// Slider 3
import kitchenMarbleCountertop from '../assets/kitchens/Slider 3/kitchen-marble-countertop.jpg';
import kitchenMarbleCountertopAvif from '../assets/kitchens/Slider 3/kitchen-marble-countertop.avif';
import kitchenCustomBacksplash from '../assets/kitchens/Slider 3/kitchen-custom-backsplash.jpg';
import kitchenCustomBacksplashAvif from '../assets/kitchens/Slider 3/kitchen-custom-backsplash.avif';
import kitchenStainlessSteel from '../assets/kitchens/Slider 3/kitchen-stainless-steel.jpg';
import kitchenStainlessSteelAvif from '../assets/kitchens/Slider 3/kitchen-stainless-steel.avif';
import kitchenWineStorage from '../assets/kitchens/Slider 3/kitchen-wine-storage.jpg';
import kitchenWineStorageAvif from '../assets/kitchens/Slider 3/kitchen-wine-storage.avif';
import kitchenPullOutDrawers from '../assets/kitchens/Slider 3/kitchen-pull-out-drawers.jpg';
import kitchenPullOutDrawersAvif from '../assets/kitchens/Slider 3/kitchen-pull-out-drawers.avif';
import kitchenCornerStorage from '../assets/kitchens/Slider 3/kitchen-corner-storage.jpg';
import kitchenCornerStorageAvif from '../assets/kitchens/Slider 3/kitchen-corner-storage.avif';
import kitchenLazySusan from '../assets/kitchens/Slider 3/kitchen-lazy-susan.jpg';
import kitchenLazySusanAvif from '../assets/kitchens/Slider 3/kitchen-lazy-susan.avif';
import kitchenSpiceRack from '../assets/kitchens/Slider 3/kitchen-spice-rack.jpg';
import kitchenSpiceRackAvif from '../assets/kitchens/Slider 3/kitchen-spice-rack.avif';
import kitchenUtensilDrawer from '../assets/kitchens/Slider 3/kitchen-utensil-drawer.jpg';
import kitchenUtensilDrawerAvif from '../assets/kitchens/Slider 3/kitchen-utensil-drawer.avif';

// Slider 4
import kitchenQuartziteCountertop from '../assets/kitchens/Slider 4/kitchen-quartzite-countertop.jpg';
import kitchenQuartziteCountertopAvif from '../assets/kitchens/Slider 4/kitchen-quartzite-countertop.avif';
import kitchenShakerStyle from '../assets/kitchens/Slider 4/kitchen-shaker-style.jpg';
import kitchenShakerStyleAvif from '../assets/kitchens/Slider 4/kitchen-shaker-style.avif';
import kitchenFloatingShelves from '../assets/kitchens/Slider 4/kitchen-floating-shelves.jpg';
import kitchenFloatingShelvesAvif from '../assets/kitchens/Slider 4/kitchen-floating-shelves.avif';
import kitchenPantryDoor from '../assets/kitchens/Slider 4/kitchen-pantry-door.jpg';
import kitchenPantryDoorAvif from '../assets/kitchens/Slider 4/kitchen-pantry-door.avif';
import kitchenGlassFronts from '../assets/kitchens/Slider 4/kitchen-glass-fronts.jpg';
import kitchenGlassFrontsAvif from '../assets/kitchens/Slider 4/kitchen-glass-fronts.avif';
import kitchenCrownMolding from '../assets/kitchens/Slider 4/kitchen-crown-molding.jpg';
import kitchenCrownMoldingAvif from '../assets/kitchens/Slider 4/kitchen-crown-molding.avif';
import kitchenUnderCabinetLighting from '../assets/kitchens/Slider 4/kitchen-under-cabinet-lighting.jpg';
import kitchenUnderCabinetLightingAvif from '../assets/kitchens/Slider 4/kitchen-under-cabinet-lighting.avif';
import kitchenPotFiller from '../assets/kitchens/Slider 4/kitchen-pot-filler.jpg';
import kitchenPotFillerAvif from '../assets/kitchens/Slider 4/kitchen-pot-filler.avif';
import kitchenCustomRangeHood from '../assets/kitchens/Slider 4/kitchen-custom-range-hood.jpg';
import kitchenCustomRangeHoodAvif from '../assets/kitchens/Slider 4/kitchen-custom-range-hood.avif';

// Slider 5
import kitchenButterflyLeaf from '../assets/kitchens/Slider 5/kitchen-butterfly-leaf.jpg';
import kitchenButterflyLeafAvif from '../assets/kitchens/Slider 5/kitchen-butterfly-leaf.avif';
import kitchenBenchSeating from '../assets/kitchens/Slider 5/kitchen-bench-seating.jpg';
import kitchenBenchSeatingAvif from '../assets/kitchens/Slider 5/kitchen-bench-seating.avif';
import kitchenCustomBooth from '../assets/kitchens/Slider 5/kitchen-custom-booth.jpg';
import kitchenCustomBoothAvif from '../assets/kitchens/Slider 5/kitchen-custom-booth.avif';
import kitchenWindowSeat from '../assets/kitchens/Slider 5/kitchen-window-seat.jpg';
import kitchenWindowSeatAvif from '../assets/kitchens/Slider 5/kitchen-window-seat.avif';
import kitchenBanquette from '../assets/kitchens/Slider 5/kitchen-banquette.jpg';
import kitchenBanquetteAvif from '../assets/kitchens/Slider 5/kitchen-banquette.avif';
import kitchenDiningArea from '../assets/kitchens/Slider 5/kitchen-dining-area.jpg';
import kitchenDiningAreaAvif from '../assets/kitchens/Slider 5/kitchen-dining-area.avif';
import kitchenBreakfastBar from '../assets/kitchens/Slider 5/kitchen-breakfast-bar.jpg';
import kitchenBreakfastBarAvif from '../assets/kitchens/Slider 5/kitchen-breakfast-bar.avif';
import kitchenPeninsula from '../assets/kitchens/Slider 5/kitchen-peninsula.jpg';
import kitchenPeninsulaAvif from '../assets/kitchens/Slider 5/kitchen-peninsula.avif';
import kitchenCustomTable from '../assets/kitchens/Slider 5/kitchen-custom-table.jpg';
import kitchenCustomTableAvif from '../assets/kitchens/Slider 5/kitchen-custom-table.avif';

const Kitchens = () => {
  const { handleScrollClick } = useScrollTo();

  // Page-specific meta tags
  usePageMeta({
    title: "Kitchen Renovations Cape Town - Custom Kitchen Design & Installation | KD Interiors",
    description: "Transform your kitchen with expert renovation services in Cape Town. Custom cabinetry, countertops, and complete kitchen makeovers. Get your free quote today!",
    keywords: "kitchen renovation Cape Town, kitchen design, custom cabinets, kitchen installation, Cape Town kitchen contractor, kitchen remodeling",
    ogTitle: "Kitchen Renovations Cape Town - Custom Design & Installation",
    ogDescription: "Expert kitchen renovations in Cape Town. Custom cabinetry, countertops, and complete kitchen makeovers. Free consultation available.",
    ogImage: "/src/assets/kitchens/kitchen-hero.jpg",
    canonical: "https://kdinteriors.co.za/kitchens"
  });

  const services = [
    "Complete Kitchen Renovations",
    "Custom Cabinet Design & Installation",
    "Countertop Installation (Quartz, Granite, Marble)",
    "Kitchen Island Design",
    "Appliance Integration",
    "Lighting Design & Installation",
    "Plumbing & Electrical Work",
    "Backsplash Installation",
    "Storage Solutions",
    "Project Management"
  ];

  // Kitchen sliders data
  const kitchenSliders = [
    {
      id: "modern-kitchens",
      images: [
        { avif: kitchenModernWhiteCabinetsAvif, jpg: kitchenModernWhiteCabinets, alt: "Modern white kitchen cabinets with clean lines" },
        { avif: kitchenIslandDesignAvif, jpg: kitchenIslandDesign, alt: "Kitchen island with seating and storage" },
        { avif: kitchenOpenPlanAvif, jpg: kitchenOpenPlan, alt: "Open plan kitchen design" },
        { avif: kitchenQuartzCountertopAvif, jpg: kitchenQuartzCountertop, alt: "Quartz countertop installation" },
        { avif: kitchenCustomCabinetsAvif, jpg: kitchenCustomCabinets, alt: "Custom kitchen cabinets" },
        { avif: kitchenStorageSolutionsAvif, jpg: kitchenStorageSolutions, alt: "Kitchen storage solutions" },
        { avif: kitchenLightingDesignAvif, jpg: kitchenLightingDesign, alt: "Kitchen lighting design" },
        { avif: kitchenApplianceIntegrationAvif, jpg: kitchenApplianceIntegration, alt: "Appliance integration in kitchen" },
        { avif: kitchenIslandDesignAvif, jpg: kitchenIslandDesign, alt: "Kitchen island design showcase" }
      ]
    },
    {
      id: "luxury-kitchens",
      images: [
        { avif: kitchenGraniteCountertopAvif, jpg: kitchenGraniteCountertop, alt: "Luxury granite countertop kitchen" },
        { avif: kitchenWoodenCabinetsAvif, jpg: kitchenWoodenCabinets, alt: "Wooden kitchen cabinets" },
        { avif: kitchenPantryStorageAvif, jpg: kitchenPantryStorage, alt: "Kitchen pantry storage design" },
        { avif: kitchenBreakfastNookAvif, jpg: kitchenBreakfastNook, alt: "Kitchen breakfast nook" },
        { avif: kitchenLuxuryDesignAvif, jpg: kitchenLuxuryDesign, alt: "Luxury kitchen design" },
        { avif: kitchenModernAppliancesAvif, jpg: kitchenModernAppliances, alt: "Modern kitchen appliances" },
        { avif: kitchenBacklightingAvif, jpg: kitchenBacklighting, alt: "Kitchen backlighting design" },
        { avif: kitchenCustomIslandAvif, jpg: kitchenCustomIsland, alt: "Custom kitchen island" },
        { avif: kitchenStorageCabinetsAvif, jpg: kitchenStorageCabinets, alt: "Kitchen storage cabinets" }
      ]
    },
    {
      id: "storage-solutions",
      images: [
        { avif: kitchenMarbleCountertopAvif, jpg: kitchenMarbleCountertop, alt: "Marble countertop kitchen" },
        { avif: kitchenCustomBacksplashAvif, jpg: kitchenCustomBacksplash, alt: "Custom kitchen backsplash" },
        { avif: kitchenStainlessSteelAvif, jpg: kitchenStainlessSteel, alt: "Stainless steel kitchen appliances" },
        { avif: kitchenWineStorageAvif, jpg: kitchenWineStorage, alt: "Wine storage in kitchen" },
        { avif: kitchenPullOutDrawersAvif, jpg: kitchenPullOutDrawers, alt: "Pull-out kitchen drawers" },
        { avif: kitchenCornerStorageAvif, jpg: kitchenCornerStorage, alt: "Kitchen corner storage solutions" },
        { avif: kitchenLazySusanAvif, jpg: kitchenLazySusan, alt: "Lazy Susan kitchen storage" },
        { avif: kitchenSpiceRackAvif, jpg: kitchenSpiceRack, alt: "Kitchen spice rack design" },
        { avif: kitchenUtensilDrawerAvif, jpg: kitchenUtensilDrawer, alt: "Kitchen utensil drawer organization" }
      ]
    },
    {
      id: "design-details",
      images: [
        { avif: kitchenQuartziteCountertopAvif, jpg: kitchenQuartziteCountertop, alt: "Quartzite countertop kitchen" },
        { avif: kitchenShakerStyleAvif, jpg: kitchenShakerStyle, alt: "Shaker style kitchen cabinets" },
        { avif: kitchenFloatingShelvesAvif, jpg: kitchenFloatingShelves, alt: "Floating shelves in kitchen" },
        { avif: kitchenPantryDoorAvif, jpg: kitchenPantryDoor, alt: "Kitchen pantry door design" },
        { avif: kitchenGlassFrontsAvif, jpg: kitchenGlassFronts, alt: "Glass front kitchen cabinets" },
        { avif: kitchenCrownMoldingAvif, jpg: kitchenCrownMolding, alt: "Crown molding in kitchen" },
        { avif: kitchenUnderCabinetLightingAvif, jpg: kitchenUnderCabinetLighting, alt: "Under cabinet lighting" },
        { avif: kitchenPotFillerAvif, jpg: kitchenPotFiller, alt: "Kitchen pot filler installation" },
        { avif: kitchenCustomRangeHoodAvif, jpg: kitchenCustomRangeHood, alt: "Custom range hood design" }
      ]
    },
    {
      id: "seating-areas",
      images: [
        { avif: kitchenButterflyLeafAvif, jpg: kitchenButterflyLeaf, alt: "Butterfly leaf kitchen table" },
        { avif: kitchenBenchSeatingAvif, jpg: kitchenBenchSeating, alt: "Bench seating in kitchen" },
        { avif: kitchenCustomBoothAvif, jpg: kitchenCustomBooth, alt: "Custom kitchen booth seating" },
        { avif: kitchenWindowSeatAvif, jpg: kitchenWindowSeat, alt: "Kitchen window seat design" },
        { avif: kitchenBanquetteAvif, jpg: kitchenBanquette, alt: "Kitchen banquette seating" },
        { avif: kitchenDiningAreaAvif, jpg: kitchenDiningArea, alt: "Kitchen dining area" },
        { avif: kitchenBreakfastBarAvif, jpg: kitchenBreakfastBar, alt: "Kitchen breakfast bar" },
        { avif: kitchenPeninsulaAvif, jpg: kitchenPeninsula, alt: "Kitchen peninsula design" },
        { avif: kitchenCustomTableAvif, jpg: kitchenCustomTable, alt: "Custom kitchen table" }
      ]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-forest-900 to-forest-700 text-white">
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Kitchen Renovations
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-forest-100">
            Discover the heart of your home with our bespoke kitchen designs, crafted for style and functionality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={(e) => handleScrollClick(e, 'contact-section')}
              className="bg-gradient-to-r from-forest-700 to-forest-600 text-white px-8 py-4 rounded-lg hover:from-forest-800 hover:to-forest-900 transition-colors font-semibold text-lg inline-flex items-center justify-center space-x-2"
            >
              <span>Get a Free Quote</span>
              <ArrowRight size={20} />
            </button>
            <a 
              href="tel:+27799352223"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-forest-900 transition-colors font-semibold text-lg inline-flex items-center justify-center space-x-2"
            >
              <Phone size={20} className="text-white" />
              <span>Call: +27 79 935 2223</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Complete Kitchen Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                From complete kitchen makeovers to custom cabinetry and countertops, we provide a full range of services to bring your vision to life.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle size={20} className="text-forest-600 flex-shrink-0" />
                    <span className="text-forest-900">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <picture>
                <img
                  src={kitchenHero}
                  alt="Kitchen Design Process"
                  className="rounded-2xl shadow-2xl"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section with Sliders */}
      <ImageSlider 
        sliders={kitchenSliders}
        title="Our Kitchen Portfolio"
        description="Explore our collection of stunning kitchen transformations across Cape Town."
      />

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-white rounded-2xl p-12 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready for Your Dream Kitchen?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create a kitchen that perfectly suits your lifestyle and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={(e) => handleScrollClick(e, 'contact-section')}
                className="bg-gradient-to-r from-forest-700 to-forest-600 text-white px-8 py-4 rounded-lg hover:from-forest-800 hover:to-forest-900 transition-colors font-semibold text-lg inline-flex items-center justify-center space-x-2"
              >
                <span>Get Free Consultation</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kitchens;