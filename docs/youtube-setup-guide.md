# YouTube Integration Setup Guide

## 🎯 Getting Real YouTube Data

To display your actual YouTube videos on your website, you'll need to set up the YouTube Data API v3.

### Step 1: Get YouTube Data API Key

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/
   - Sign in with your Google account

2. **Create a New Project**
   - Click "Select a project" → "New Project"
   - Name it "Jamuna Fisheries Website"
   - Click "Create"

3. **Enable YouTube Data API v3**
   - Go to "APIs & Services" → "Library"
   - Search for "YouTube Data API v3"
   - Click on it and press "Enable"

4. **Create API Key**
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "API Key"
   - Copy your API key

### Step 2: Get Your Channel ID

1. **Find Your Channel ID**
   - Go to your YouTube channel: https://www.youtube.com/@JamunaFisheries
   - Right-click → "View Page Source"
   - Search for "channelId" or "externalId"
   - Copy the channel ID (starts with "UC")

### Step 3: Update the Code

1. **Update `youtube-api.js`**
   - Replace `YOUR_YOUTUBE_API_KEY` with your actual API key
   - Replace the channel ID with your real channel ID

2. **Uncomment the Real API Code**
   - In `youtube-api.js`, uncomment the fetch code in the `fetchVideos()` method
   - Comment out the `getMockVideos()` call

### Step 4: Test the Integration

1. **Open your website**
2. **Check the browser console** for any errors
3. **Verify videos are loading** correctly

## 🔧 Manual Video Data Entry

If you prefer not to use the API, you can manually add your video information:

### Update `youtube-api.js` - `getMockVideos()` Method

Replace the mock videos with your actual video data:

```javascript
getMockVideos() {
    return [
        {
            id: 'ACTUAL_VIDEO_ID', // Get from YouTube URL
            title: 'Your Actual Video Title',
            description: 'Your video description',
            thumbnail: 'https://img.youtube.com/vi/VIDEO_ID/mqdefault.jpg',
            publishedAt: '2024-01-15T10:00:00Z',
            duration: '8:45',
            views: '1.2K'
        },
        // Add more videos...
    ];
}
```

### How to Get Video Information

1. **Video ID**: From YouTube URL `https://www.youtube.com/watch?v=VIDEO_ID`
2. **Thumbnail**: Use `https://img.youtube.com/vi/VIDEO_ID/mqdefault.jpg`
3. **Title & Description**: Copy from your YouTube video
4. **Published Date**: Get from YouTube video page
5. **Duration**: Get from YouTube video page
6. **Views**: Get from YouTube video page

## 📱 Example Video Data Structure

Here's how your video data should look:

```javascript
{
    id: 'dQw4w9WgXcQ', // Example video ID
    title: 'How to Cook Perfect Salmon',
    description: 'Learn the secrets to cooking restaurant-quality salmon at home.',
    thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg',
    publishedAt: '2024-01-15T10:00:00Z',
    duration: '12:34',
    views: '2.5K'
}
```

## 🚀 Quick Setup (No API)

If you want to get started quickly without the API:

1. **Open your YouTube channel**
2. **Copy video information** for 6-12 videos
3. **Update the `getMockVideos()` method** in `youtube-api.js`
4. **Test your website**

## 🔒 Security Notes

- **Never share your API key** publicly
- **Set up API restrictions** in Google Cloud Console
- **Use environment variables** for production
- **Monitor API usage** to avoid quotas

## 📊 API Quotas

- **Free tier**: 10,000 requests per day
- **Cost**: $5 per 1,000 additional requests
- **Rate limit**: 1,000 requests per 100 seconds

## 🆘 Troubleshooting

### Common Issues:

1. **"API key not valid"**
   - Check your API key is correct
   - Ensure YouTube Data API v3 is enabled

2. **"Channel not found"**
   - Verify your channel ID is correct
   - Check channel is public

3. **"Quota exceeded"**
   - Check your daily quota usage
   - Consider upgrading your plan

4. **"CORS error"**
   - API calls work server-side only
   - Use a backend service or proxy

## 📞 Support

If you need help:
1. Check the browser console for errors
2. Verify your API key and channel ID
3. Test with a simple API call first
4. Consider using a backend service for API calls

---

**Need the API key setup?** Follow the step-by-step guide above, or use the manual video entry method for immediate results! 