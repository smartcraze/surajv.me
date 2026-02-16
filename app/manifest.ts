import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'smartcraze (Suraj Vishwakarma) — Full Stack & GenAI Developer',
    short_name: 'smartcraze | SurajV',
    description: 'Portfolio of smartcraze (Suraj Vishwakarma) — Full Stack Developer exploring GenAI and DevOps at surajv.dev.',
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
