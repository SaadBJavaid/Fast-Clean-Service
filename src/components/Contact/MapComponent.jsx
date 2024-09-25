"use client";
import React from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {Box} from "@mui/material";
import "leaflet/dist/leaflet.css";
import "../../lib/leaflet-config"; // Add this line (adjust the path as needed)
import("react-leaflet");

// Dynamically import the MapContainer to avoid SSR issues
// const MapWithNoSSR = dynamic(() =>.then((mod) => mod.MapContainer), {
//   ssr: false,
// });

const MapComponent = () => {
  const position = [52.212992, 5.27937];

  return (
      <Box sx={{ width: "100%", height: "100%" }}>
        <MapContainer center={position} zoom={16} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>Nederland</Popup>
          </Marker>
        </MapContainer>
      </Box>
  );
};

export default MapComponent;
