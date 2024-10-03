import React, {useContext} from "react"
import {loadRemote} from '@module-federation/enhanced/runtime';
import {UserContext} from "../contexts/user.context";

const MetricsCard = React.lazy(() => loadRemote('b2b_dashboard_metrics_card/MetricsCard') as any);

export const Dashboard = () => {
  const {user} = useContext(UserContext);
  return (
    <React.Suspense fallback={<div>Loading failed</div>}>
      <h1>Welcome {user?.name}</h1>
      <MetricsCard />
    </React.Suspense>
  )
}
