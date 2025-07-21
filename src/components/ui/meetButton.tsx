"use client"
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { RainbowButton } from "../magicui/rainbowButton";

export default function MeetButton() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return <RainbowButton variant="outline" className="py-3 px-6" data-cal-namespace="15min"
    data-cal-link="aashish-dubey-xatbxr/15min"
    
    data-cal-config='{"layout":"month_view"}'
  >Book a meet</RainbowButton>;
};