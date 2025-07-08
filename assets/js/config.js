// Jamuna Fisheries Website Configuration
// Update these values to customize your website

const CONFIG = {
    // Business Information
    business: {
        name: "Jamuna Fisheries",
        tagline: "Premium fish spawn and fingerlings production, supporting sustainable aquaculture development",
        description: "Your trusted source for premium fish spawn and fingerlings. Quality fish seed production for aquaculture and fisheries development.",
        
        // Contact Information
        phone: "+919609673056",
        phone2: "+919434653910",
        email: "nandiashis01@gmail.com",
        address: "Vill - Mouchura, Post - Teliberia",
        city: "Onda, Bankura, West Bengal 722144",
        
        // Business Hours
        hours: {
            weekdays: "Mon-Sat: 8AM - 8PM",
            sunday: "Sunday: 9AM - 6PM"
        },
        
        // Social Media Links
        social: {
            youtube: "https://www.youtube.com/@JamunaFisheries",
            facebook: "#",
            instagram: "#",
            twitter: "#"
        }
    },
    
    // Products Configuration
    products: [
        {
            name: "Rohu Spawn",
            description: "High-quality Rohu (Labeo rohita) spawn for commercial fish farming",
            price: "📞 9609673056",
            image: "assets/images/fish/rohu-carp.webp"
        },
        {
            name: "Katla Spawn",
            description: "Premium Katla (Katla katla) spawn for polyculture systems",
            price: "📞 9609673056",
            image: "assets/images/fish/katla-carp.webp"
        },
        {
            name: "Common Carp Spawn",
            description: "Quality Common Carp (Cyprinus carpio) spawn for traditional farming",
            price: "📞 9609673056",
            image: "assets/images/fish/common-carp.webp"
        },
        {
            name: "Silver Carp Spawn",
            description: "Premium Silver Carp (Hypophthalmichthys molitrix) spawn for surface feeding",
            price: "📞 9609673056",
            image: "assets/images/fish/silver-carp.webp"
        },
        {
            name: "Grass Carp Spawn",
            description: "Quality Grass Carp (Ctenopharyngodon idella) spawn for weed control",
            price: "📞 9609673056",
            image: "assets/images/fish/grass-carp.webp"
        },
        {
            name: "Fingerlings",
            description: "Healthy fingerlings ready for stocking in ponds and tanks",
            price: "📞 9609673056",
            image: "assets/images/fish/rohu-carp.webp"
        }
    ],
    
    // YouTube Channel Information
    youtube: {
        channelUrl: "https://www.youtube.com/@JamunaFisheries",
        features: [
            "Spawn production techniques",
            "Fish breeding methods",
            "Aquaculture best practices",
            "Farm management tips"
        ]
    },
    
    // Website Settings
    settings: {
        // Animation speeds (in milliseconds)
        animationSpeed: 300,
        
        // Auto-hide notifications after (in milliseconds)
        notificationTimeout: 5000,
        
        // Enable/disable features
        enableParallax: true,
        enableAnimations: true,
        enableNotifications: true
    },
    
    // SEO Configuration
    seo: {
        title: "Jamuna Fisheries - Premium Fish Spawn & Fingerlings Supplier in Bankura, West Bengal",
        description: "Jamuna Fisheries - Leading fish spawn and fingerlings supplier in Bankura, West Bengal. Premium Rohu, Catla, Mrigal, Silver Carp spawn. Contact Mr. Ashis Nandi at 9609673056. All India delivery available.",
        keywords: "Jamuna Fisheries, fish spawn supplier, fingerlings supplier, Bankura, West Bengal, Rohu spawn, Catla spawn, Mrigal spawn, Silver Carp spawn, fish farming, aquaculture, Mr. Ashis Nandi, fish seed production",
        author: "Mr. Ashis Nandi - Jamuna Fisheries",
        ogImage: "https://jamunafisheries.github.io/assets/images/about-sign.jpeg"
    }
};

// Export configuration for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    // Make CONFIG available globally for browser use
    window.CONFIG = CONFIG;
} 