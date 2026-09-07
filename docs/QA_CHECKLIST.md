# ESCAPE QA Checklist

Before each deployment:

- [ ] `npm ci` completes without errors.
- [ ] `npm test` passes.
- [ ] `npm run typecheck` passes.
- [ ] `npm run build` passes.
- [ ] Desktop navigation works.
- [ ] Mobile navigation works without horizontal scrolling.
- [ ] Search, category, budget and duration filters work.
- [ ] Favorites and planned trips survive refresh.
- [ ] Compare works and enforces the three-destination limit.
- [ ] Destination details open and close with click and Escape.
- [ ] Weekend Match returns a recommendation.
- [ ] All eight destination images load from local WebP assets.
- [ ] GitHub Actions is green before submitting a hackathon attempt.
