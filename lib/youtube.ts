// lib/youtube.ts
// YouTube Data API integration

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  isLive?: boolean;
}

/**
 * Fetch latest videos from a YouTube channel
 * You'll need a YouTube Data API key from: https://console.cloud.google.com/
 * 
 * To use this:
 * 1. Get API key from Google Cloud Console
 * 2. Add to .env.local: YOUTUBE_API_KEY=your_key_here
 * 3. Add your channel ID: YOUTUBE_CHANNEL_ID=your_channel_id
 */
export async function getLatestVideos(maxResults = 6): Promise<YouTubeVideo[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey || !channelId) {
    console.warn("YouTube API credentials not configured");
    return [];
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&order=date&maxResults=${maxResults}&type=video`,
      { 
        next: { revalidate: 3600 }, // Cache for 1 hour
        headers: {
          'Accept': 'application/json',
        }
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error(`YouTube API error: ${response.status}`, errorData);
      return [];
    }

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      console.warn("No videos found for channel");
      return [];
    }

    return data.items.map((item: any) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.high?.url || item.snippet.thumbnails.medium?.url || item.snippet.thumbnails.default?.url,
      publishedAt: item.snippet.publishedAt,
      isLive: item.snippet.liveBroadcastContent === "live",
    }));
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return [];
  }
}

/**
 * Get latest livestream
 */
export async function getLatestLivestream(): Promise<YouTubeVideo | null> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID;

  if (!apiKey || !channelId) {
    return null;
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet&eventType=completed&type=video&order=date&maxResults=1`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.status}`);
    }

    const data = await response.json();

    if (data.items.length === 0) {
      return null;
    }

    const item = data.items[0];
    return {
      id: item.id.videoId,
      title: item.snippet.title,
      description: item.snippet.description,
      thumbnail: item.snippet.thumbnails.high.url,
      publishedAt: item.snippet.publishedAt,
      isLive: item.snippet.liveBroadcastContent === "live",
    };
  } catch (error) {
    console.error("Error fetching YouTube livestream:", error);
    return null;
  }
}
