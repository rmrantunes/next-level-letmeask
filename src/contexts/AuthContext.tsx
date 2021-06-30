import { useEffect } from "react";
import { useState, createContext } from "react";
import { firebase, auth } from "services/firebase";

export type User = {
  id: string;
  name: string;
  avatar: string;
};

export type AuthContextValue = {
  signInWithGoogle(): Promise<void>;
  user?: User;
};

export const AuthContext = createContext({} as AuthContextValue);

export const AuthContextProvider: React.FC = (props) => {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) return;

      const { displayName, photoURL, uid } = user;

      if (!displayName || !photoURL)
        throw new Error("Missing displayName & photoURL");

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL,
      });
    });

    return () => unsubscribe();
  }, []);

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const authResponse = await auth.signInWithPopup(provider);
    if (!authResponse.user) return;

    const { displayName, photoURL, uid } = authResponse.user;

    if (!displayName || !photoURL)
      throw new Error("Missing displayName & photoURL");

    setUser({
      id: uid,
      name: displayName,
      avatar: photoURL,
    });
  }

  return (
    <AuthContext.Provider
      value={{
        signInWithGoogle,
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
