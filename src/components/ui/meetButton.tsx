"use client"
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function MeetButton() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return <button data-cal-namespace="15min"
    data-cal-link="aashish-dubey-xatbxr/15min"
    
    data-cal-config='{"layout":"month_view"}'
  >Book a meet</button>;
};