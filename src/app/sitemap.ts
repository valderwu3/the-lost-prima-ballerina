import { MetadataRoute } from 'next'

// sitemap.xml 会在以下情况下生成:
// 1. 在生产环境构建时(next build)自动生成
// 2. 在开发环境中访问 /sitemap.xml 路径时动态生成
// 3. 不会在每个请求时重新生成,除非使用动态函数如 fetch 或 dynamic
export default function sitemap(): MetadataRoute.Sitemap {
  // 替换成你的实际网站URL
  const baseUrl = 'https://thelostprimaballerina.org'
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 1,
    }
  ]
}