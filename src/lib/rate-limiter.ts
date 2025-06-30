import { RateLimiterMemory } from 'rate-limiter-flexible'

export const rateLimiter = new RateLimiterMemory({
  points: 5, // 1 requests
  duration: 60 * 5, // 5 minutes
})
