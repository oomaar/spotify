import axios from "axios";
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
import { db } from "../firebase.config";

const Browse = () => {
  // This screen supposed to be Private
  const { data: session, loading } = useSession();
  const router = useRouter();
  const [data, setData] = useState({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(`https://api.spotify.com/v1/tracks`);
  //     // { { headers: {"Authorization" : `Bearer ${token}`} } })
  //   };
  // }, []);

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
