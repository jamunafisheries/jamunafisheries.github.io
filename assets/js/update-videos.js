// Helper script to update YouTube videos data
// Run this in your browser console to get video information

function getVideoInfo() {
    console.log('🎬 YouTube Video Data Helper');
    console.log('============================');
    console.log('');
    console.log('To get your video information:');
    console.log('1. Go to your YouTube channel: https://www.youtube.com/@JamunaFisheries');
    console.log('2. Click on each video');
    console.log('3. Copy the information below');
    console.log('');
    console.log('Video URL format: https://www.youtube.com/watch?v=VIDEO_ID');
    console.log('Thumbnail URL format: https://img.youtube.com/vi/VIDEO_ID/mqdefault.jpg');
    console.log('');
    console.log('Example video data structure:');
    console.log(`
{
    id: 'VIDEO_ID_FROM_URL',
    title: 'Your Video Title',
    description: 'Your video description (first 100 characters)',
    thumbnail: 'https://img.youtube.com/vi/VIDEO_ID/mqdefault.jpg',
    publishedAt: '2024-01-15T10:00:00Z',
    duration: '8:45',
    views: '1.2K'
}
    `);
}

// Function to generate video data from URL
function generateVideoData(videoUrl, title, description, publishedDate, duration, views) {
    const videoId = videoUrl.split('v=')[1];
    const thumbnail = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
    
    return {
        id: videoId,
        title: title,
        description: description.substring(0, 100) + (description.length > 100 ? '...' : ''),
        thumbnail: thumbnail,
        publishedAt: publishedDate,
        duration: duration,
        views: views
    };
}

// Example usage
function example() {
    console.log('📝 Example video data:');
    console.log(generateVideoData(
        'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        'How to Cook Perfect Salmon',
        'Learn the secrets to cooking restaurant-quality salmon at home with our expert tips and techniques.',
        '2024-01-15T10:00:00Z',
        '12:34',
        '2.5K'
    ));
}

// Function to format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toISOString();
}

// Initialize helper
getVideoInfo();
example();

console.log('');
console.log('🔧 Quick Commands:');
console.log('- getVideoInfo() - Show this help');
console.log('- generateVideoData(url, title, desc, date, duration, views) - Generate video data');
console.log('- formatDate("2024-01-15") - Format date for API');
console.log('');
console.log('📋 Next Steps:');
console.log('1. Copy your video information');
console.log('2. Update the getMockVideos() function in youtube-api.js');
console.log('3. Replace the mock data with your real videos');
console.log('4. Test your website!'); 