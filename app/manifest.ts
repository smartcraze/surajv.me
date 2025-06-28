import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Suraj Vishwakarma — Full Stack & GenAI Developer',
    short_name: 'SurajV | smartcraze',
    description: 'Portfolio of Suraj Vishwakarma — Full Stack Developer exploring GenAI and DevOps.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0f172a',
    icons: [
      {
        src: '/suraj.jpg',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/suraj.jpg',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
