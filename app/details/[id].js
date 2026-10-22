import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import menuItems from "../../data/menuItems";
import DetailsScreen from "../../screens/DetailsScreen";

export default function DetailsRoute() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const item = menuItems.find((menuItem) => menuItem.id === id);

  function goBack() {
    // A direct link may not have a previous screen in the app.
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/");
    }
  }

  return <DetailsScreen item={item} id={id} onBack={goBack} />;
}
