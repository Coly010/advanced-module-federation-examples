# Retry Offline Remotes, then use Fallback

This example shows how you can setup a retry strategy to attempt to resolve to issues where remotes are temporarily offline.
If all else fails, fall back to a known live remote

The key files to look at are:

- `react-retry-shell/src/bootstrap.tsx` <- Uses Module Federation Runtime helper to set up the RetryPlugin

To run the example: 
`npx nx serve retry-react-shell`

Some other things to note here are:
 - The host will try to load the offline remote
 - It will fail 10 times (you can notice logs in the browser dev tools) and then it will attempt to load the fallback remote (`retry-rreact-remote-broken`).
