import {UserContext} from "../contexts/user.context";
import {useContext, useRef} from "react";
import {registerRemotes} from '@module-federation/enhanced/runtime';

export const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const {user, setUser} = useContext(UserContext);

  const doLogin = (event: any) => {
    event.preventDefault();
    if(emailRef.current && passwordRef.current && setUser) {
      if(emailRef.current.value === 'test@test.com') {
        setUser({
          name: "Unprivileged User",
          permissions: new Set()
        })
        registerRemotes([{
          name: 'b2b_dashboard_metrics_card',
          entry: "http://localhost:4201/mf-manifest.json",
        }], {force: true})
      } else if (emailRef.current.value === "enhanced@test.com") {
        setUser({
          name: "Privileged User",
          permissions: new Set(["enhanced"])
        })
        registerRemotes([{
          name: 'b2b_dashboard_metrics_card',
          entry: "http://localhost:4202/mf-manifest.json",
        }], {force: true})
      }
    }
  }

  return (
     <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'center'}}>
       <form onSubmit={doLogin}>
       <input type="email" placeholder="Email" ref={emailRef} />
       <input type="password" placeholder="Password" ref={passwordRef} />
       <button type="submit">Login</button>
       </form>
     </div>
  )
}
