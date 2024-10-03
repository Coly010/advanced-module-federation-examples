import {createContext, Dispatch, SetStateAction} from "react";

export interface User {
  name: string;
  permissions: Set<string>;
}

interface UserContextOptions {
  user: User | null;
  setUser?: Dispatch<SetStateAction<User | null>>
}

export const UserContext = createContext<UserContextOptions>({user: null});
