# Wall of Shame Photos

## How to add offender screenshots:

1. Upload your screenshot somewhere (Imgur, Discord CDN, etc.)
2. Open `src/pages/WallOfShame.tsx`
3. Add your image URL to the `offenders` array at the top of the file:

```typescript
{ id: 4, imageUrl: "https://your-image-url-here.png", date: "2026-04-09" }
```

That's it! The count at the top updates automatically.

## Quick paste format:
```
{ id: X, imageUrl: "PASTE_URL_HERE", date: "YYYY-MM-DD" },
```

