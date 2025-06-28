// YouTube API Integration for Jamuna Fisheries
// This file handles fetching videos from your YouTube channel

class YouTubeAPI {
    constructor() {
        // YouTube Data API v3 key - you'll need to get your own API key
        this.apiKey = 'YOUR_YOUTUBE_API_KEY'; // Replace with your actual API key
        this.channelId = 'UC'; // This will be extracted from your channel URL
        this.maxResults = 12; // Number of videos to display
        this.videos = [];
    }

    // Initialize the YouTube integration
    async init() {
        try {
            // First, get the channel ID from the channel URL
            await this.getChannelId();
            
            // Then fetch the videos
            await this.fetchVideos();
            
            // Display the videos
            this.displayVideos();
            
        } catch (error) {
            console.error('Error initializing YouTube API:', error);
            this.showFallbackContent();
        }
    }

    // Extract channel ID from channel URL
    async getChannelId() {
        try {
            // For now, we'll use a placeholder approach
            // In a real implementation, you'd need to use the YouTube API to get channel info
            this.channelId = 'UC'; // This would be the actual channel ID
        } catch (error) {
            console.error('Error getting channel ID:', error);
        }
    }

    // Fetch videos from the channel
    async fetchVideos() {
        try {
            // Since we can't directly scrape YouTube without API, we'll create a mock data structure
            // In production, you would use the YouTube Data API v3
            this.videos = this.getMockVideos();
            
            // If you have a real API key, uncomment this:
            /*
            const response = await fetch(
                `https://www.googleapis.com/youtube/v3/search?` +
                `key=${this.apiKey}&` +
                `channelId=${this.channelId}&` +
                `part=snippet,id&` +
                `order=date&` +
                `maxResults=${this.maxResults}&` +
                `type=video`
            );
            
            const data = await response.json();
            this.videos = data.items.map(item => ({
                id: item.id.videoId,
                title: item.snippet.title,
                description: item.snippet.description,
                thumbnail: item.snippet.thumbnails.medium.url,
                publishedAt: item.snippet.publishedAt,
                duration: 'N/A' // Would need additional API call for duration
            }));
            */
            
        } catch (error) {
            console.error('Error fetching videos:', error);
            this.videos = this.getMockVideos();
        }
    }

    // Mock videos data (replace with your actual video information)
    getMockVideos() {
        return [
            {
                id: 'video1',
                title: 'Fish Spawn Production Techniques',
                description: 'Learn the essential techniques for successful fish spawn production in commercial hatcheries.',
                thumbnail: 'https://images.unsplash.com/photo-1544943915-3f18c920d3ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                publishedAt: '2024-01-15T10:00:00Z',
                duration: '15:30',
                views: '2.1K'
            },
            {
                id: 'video2',
                title: 'Rohu Breeding and Spawn Collection',
                description: 'Complete guide to Rohu fish breeding, spawning, and spawn collection methods.',
                thumbnail: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                publishedAt: '2024-01-10T14:30:00Z',
                duration: '18:45',
                views: '1.8K'
            },
            {
                id: 'video3',
                title: 'Hatchery Management Best Practices',
                description: 'Essential hatchery management practices for optimal spawn production and fingerling quality.',
                thumbnail: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                publishedAt: '2024-01-05T16:15:00Z',
                duration: '22:10',
                views: '3.2K'
            },
            {
                id: 'video4',
                title: 'Water Quality Management in Hatcheries',
                description: 'Understanding water quality parameters crucial for successful fish spawn production.',
                thumbnail: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                publishedAt: '2023-12-28T11:45:00Z',
                duration: '12:30',
                views: '1.5K'
            },
            {
                id: 'video5',
                title: 'Fingerling Rearing Techniques',
                description: 'Professional techniques for rearing healthy fingerlings from spawn to stocking size.',
                thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                publishedAt: '2023-12-20T09:20:00Z',
                duration: '25:15',
                views: '2.8K'
            },
            {
                id: 'video6',
                title: 'Disease Prevention in Fish Hatcheries',
                description: 'Comprehensive guide to preventing diseases in fish hatcheries and spawn production units.',
                thumbnail: 'https://images.unsplash.com/photo-1544943915-3f18c920d3ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                publishedAt: '2023-12-15T13:10:00Z',
                duration: '19:45',
                views: '2.3K'
            }
        ];
    }

    // Display videos in the website
    displayVideos() {
        const youtubeSection = document.querySelector('#youtube');
        if (!youtubeSection) return;

        // Create videos grid
        const videosGrid = document.createElement('div');
        videosGrid.className = 'videos-grid';
        videosGrid.innerHTML = `
            <div class="section-header">
                <h2>Latest Videos</h2>
                <p>Watch our latest cooking tutorials, fishing adventures, and product showcases</p>
            </div>
            <div class="videos-container">
                ${this.videos.map(video => this.createVideoCard(video)).join('')}
            </div>
            <div class="youtube-cta">
                <a href="https://www.youtube.com/@JamunaFisheries" target="_blank" class="btn btn-primary">
                    <i class="fab fa-youtube"></i>
                    View All Videos on YouTube
                </a>
            </div>
        `;

        // Replace the existing YouTube content
        const existingContent = youtubeSection.querySelector('.youtube-content');
        if (existingContent) {
            existingContent.remove();
        }
        youtubeSection.appendChild(videosGrid);
    }

    // Create individual video card
    createVideoCard(video) {
        const publishedDate = new Date(video.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });

        return `
            <div class="video-card" data-video-id="${video.id}">
                <div class="video-thumbnail">
                    <img src="${video.thumbnail}" alt="${video.title}">
                    <div class="video-overlay">
                        <i class="fas fa-play"></i>
                        <span class="video-duration">${video.duration}</span>
                    </div>
                </div>
                <div class="video-info">
                    <h3 class="video-title">${video.title}</h3>
                    <p class="video-description">${video.description}</p>
                    <div class="video-meta">
                        <span class="video-date">${publishedDate}</span>
                        <span class="video-views">${video.views} views</span>
                    </div>
                </div>
            </div>
        `;
    }

    // Show fallback content if API fails
    showFallbackContent() {
        const youtubeSection = document.querySelector('#youtube');
        if (!youtubeSection) return;

        youtubeSection.innerHTML = `
            <div class="container">
                <div class="section-header">
                    <h2>Our YouTube Channel</h2>
                    <p>Watch our latest videos and cooking tips</p>
                </div>
                <div class="fallback-content">
                    <div class="fallback-info">
                        <h3>Jamuna Fisheries on YouTube</h3>
                        <p>Subscribe to our channel for:</p>
                        <ul>
                            <li><i class="fas fa-check"></i> Cooking tutorials and recipes</li>
                            <li><i class="fas fa-check"></i> Behind-the-scenes fishing</li>
                            <li><i class="fas fa-check"></i> Product showcases</li>
                            <li><i class="fas fa-check"></i> Sustainability tips</li>
                        </ul>
                        <a href="https://www.youtube.com/@JamunaFisheries" target="_blank" class="btn btn-primary">
                            <i class="fab fa-youtube"></i>
                            Subscribe to Our Channel
                        </a>
                    </div>
                    <div class="fallback-embed">
                        <iframe 
                            width="560" 
                            height="315" 
                            src="https://www.youtube.com/embed/?list=UU" 
                            title="Jamuna Fisheries YouTube Channel" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
        `;
    }

    // Handle video card clicks
    handleVideoClick(videoId) {
        // Open video in new tab or modal
        if (videoId.startsWith('video')) {
            // For mock videos, redirect to channel
            window.open('https://www.youtube.com/@JamunaFisheries', '_blank');
        } else {
            // For real videos, open specific video
            window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
        }
    }
}

// Initialize YouTube API when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const youtubeAPI = new YouTubeAPI();
    youtubeAPI.init();

    // Add click handlers for video cards
    document.addEventListener('click', (e) => {
        const videoCard = e.target.closest('.video-card');
        if (videoCard) {
            const videoId = videoCard.dataset.videoId;
            youtubeAPI.handleVideoClick(videoId);
        }
    });
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = YouTubeAPI;
} 