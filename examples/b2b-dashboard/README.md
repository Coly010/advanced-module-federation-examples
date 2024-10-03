# B2BDashboard

This example showcases changing which remotes are loaded based on who is logged in.

It showcases simplifying branching logic that would have been in place to handle loading different components based on user permissions.

It makes use of `registerRemotes` from `@module-federation/enhanced/runtime`.

Key places in the code to note:
- `b2b-dashboard-enhanced-metrics-card/src/app/app.tsx` <- Markup for the "enhanced" version
- `b2b-dashboard-metrics-card/src/app/app.tsx` <- Markup for the "basic" version
- `b2b-dashboard-shell/src/login/login.tsx` <- Handles the authentication and registering of the remotes dependent on who logged in
- `b2b-dashboard-shell/src/dashboard/dashboard.tsx` <- Shows how the dashboard just loads the remote and doesn't care where it's actually resolved from


To run:

`npx nx serve b2b-dashboard-shell`
