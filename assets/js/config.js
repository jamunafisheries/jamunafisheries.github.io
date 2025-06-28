// Jamuna Fisheries Website Configuration
// Update these values to customize your website

const CONFIG = {
    // Business Information
    business: {
        name: "Jamuna Fisheries",
        tagline: "Premium fish spawn and fingerlings production, supporting sustainable aquaculture development",
        description: "Your trusted source for premium fish spawn and fingerlings. Quality fish seed production for aquaculture and fisheries development.",
        
        // Contact Information
        phone: "+1 (555) 123-4567",
        email: "info@jamunafisheries.com",
        address: "123 Fisherman's Wharf",
        city: "Coastal City, CC 12345",
        
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
            price: "Contact for Pricing",
            image: "https://images.unsplash.com/photo-1544943915-3f18c920d3ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        {
            name: "Catla Spawn",
            description: "Premium Catla (Catla catla) spawn for polyculture systems",
            price: "Contact for Pricing",
            image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        {
            name: "Mrigal Spawn",
            description: "Quality Mrigal (Cirrhinus mrigala) spawn for traditional farming",
            price: "Contact for Pricing",
            image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
        },
        {
            name: "Fingerlings",
            description: "Healthy fingerlings ready for stocking in ponds and tanks",
            price: "Contact for Pricing",
            image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
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
        title: "Jamuna Fisheries - Premium Fish Spawn Production",
        description: "Jamuna Fisheries - Your trusted source for premium fish spawn and fingerlings. Quality fish seed production for aquaculture and fisheries development.",
        keywords: "fish spawn, fingerlings, aquaculture, fish breeding, hatchery, fish seed, Rohu, Catla, Mrigal, fish farming",
        author: "Jamuna Fisheries",
        ogImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    }
};

// Export configuration for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    // Make CONFIG available globally for browser use
    window.CONFIG = CONFIG;
} 