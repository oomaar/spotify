import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  doc,
} from "firebase/firestore";
import { getSession, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase.config";

const Browse = () => {
  // This screen supposed to be Private
  const { data: session, loading } = useSession();
  const router = useRouter();
  const [data, setData] = useState({});
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
          refreshToken: user.refreshToken,
        })
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(`https://api.spotify.com/v1/tracks`,
  //       { headers: { Authorization: `Bearer ${user.uid}` } }
  //     ).then(res => setData(res.data))
  //   };
  //   fetchData();
  // }, []);

  // console.log("🚀 ~ file: browse.js ~ line 21 ~ Browse ~ data", data)

  useEffect(() => {
    if (!session && !loading) {
      router.push("/");
    }
  }, [session]);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div>
      <h1>browse screen</h1>

      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
};

export default Browse;

export async function getServerSideProps(context) {
  const { res } = context;
  const session = await getSession(context);

  if (!session) {
    res.statusCode = 302;
    res.setHeader("Location", "/login");

    return {
      props: {
        session,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
