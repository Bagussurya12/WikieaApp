import React from "react";
import Carousel from "react-native-reanimated-carousel";
import CardDiscoverItem from "./CardDiscoverItem.js";
export default function CarouselDiscover({ scrollCarouselRef, mapRef, markers, width, mapAnimation, region }) {
  return (
    <Carousel
      ref={scrollCarouselRef}
      loop={false}
      width={width - 30}
      height={250}
      data={markers}
      onProgressChange={(progress) => {
        mapAnimation.setValue(Math.abs(progress));
      }}
      style={{ top: 20 }}
      scrollAnimationDuration={3000}
      onSnapToItem={(index) => {
        const { coordinate } = markers[index];
        mapRef.current.animateToRegion({
          ...coordinate,
          latitudeDelta: region.latitudeDelta,
          longitudeDelta: region.longitudeDelta,
        });
      }}
      renderItem={({ item }) => <CardDiscoverItem item={item} />}
    />
  );
}
