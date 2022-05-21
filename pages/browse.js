import axios from "axios";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  doc,
} from "firebase/firestore";
import { getToken } from "next-auth/jwt";
import { getCsrfToken, getSession, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../firebase.config";

const Browse = () => {
  // This screen supposed to be Private
  const { data: session, loading } = useSession();
  const router = useRouter();
  const [data, setData] = useState([]);
  // const [userToken, setUserToken] = useState();
  // console.log("🚀 ~ file: browse.js ~ line 21 ~ Browse ~ userToken", userToken);

  // async function getCosOmToken() {
  //   const csrfToken = await getCsrfToken();
  //   setUserToken(csrfToken);
  // }

  // getCosOmToken();
  // useEffect(() => {
  //   const fetchData = async () =>
  //     await axios
  //       .get(`https://api.spotify.com/v1/tracks`, {
  //         headers: { Authorization: `Bearer ${userToken}` },
  //       })
  //       .then((res) => setData(res.data));
  //   fetchData();
  // }, []);
  // console.log("data", data);

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
  const { req, res } = context;
  const session = await getSession(context);

  // if using `NEXTAUTH_SECRET` env variable, we detect it, and you won't actually need to `secret`
  // const token = await getToken({ req })
  const secret =
    "asjfd8u23qifheg78ry23d3786823ry87gf732t89ydui32t8698ryd9749368ydhu9r8g78598y9ry6019fy38";
  const token = await getToken({ req, secret });
  console.log("JSON Web Token", token);

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
