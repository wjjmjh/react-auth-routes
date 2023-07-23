import { WhoAmIRequest } from "@/api";
import React, { useEffect, useState } from "react";

export default function WhoAmI() {
  const [whoAmI, setWhoAmI] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const whoAmI = await WhoAmIRequest();
      if (whoAmI !== "" && whoAmI) {
        setWhoAmI(whoAmI);
      } else {
        window.location.href = "/login";
      }
    };

    fetchData().then(() => {});
  }, []);

  return <div>{JSON.stringify(whoAmI)}</div>;
}
