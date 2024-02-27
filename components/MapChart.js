import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import Center from "./Center";
import styled from "styled-components";
import LocationIcon from "./icons/LocationIcon";
import BuildingIcon from "./icons/BuildingIcon";
import MouseIcon from "./icons/mouseIcon";
import TruckIcon from "./icons/TruckIcon";


const Container = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
  }
`;

const Adjust = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: right;
  @media screen and (max-width: 768px) {
    align-items: right;
    width: 55%;
    height: 55%;
  }
`;

const Wrapper = styled.div`
  width: 600px;
  height: 600px;
  border-style: none;
  margin-right: 400px;
  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const SideIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 100px;
    height: 100px;
  }
`;

const Icon = styled(LocationIcon)`
  width: 24px; /* Adjust the width as needed */
  height: 24px; /* Adjust the height as needed */
  margin-right: 3px;
  margin-top: -10px;
  vertical-align: middle;
  color: #7a3ce6;
`;

const Mouse = styled(MouseIcon)`
  width: 24px; /* Adjust the width as needed */
  height: 24px; /* Adjust the height as needed */
  margin-right: 3px;
  margin-top: -10px;
  vertical-align: middle;
  color: #7a3ce6;
`;

const Truck = styled(TruckIcon)`
  width: 24px; /* Adjust the width as needed */
  height: 24px; /* Adjust the height as needed */
  margin-right: 3px;
  margin-top: -10px;
  vertical-align: middle;
  color: #7a3ce6;
`;

const ColoredBuildingIcon = styled(BuildingIcon)`
  color: #2b2185; 
`;

const WhiteBox = styled.div`
  padding: 15px;
  background-color: #fff;
  border-radius: 15px;
  margin-left: 10px; /* Adjust the margin as needed */
  width: fit-content; /* Adjust the width to fit the content */
  @media screen and (max-width: 768px) {
    width: 200px; 
    margin-left: 10px; 
    font-size: .7rem;
    padding: 13px;
  }
`;

// Export MapChart as default function
export default function MapChart() {
  // GeoJSON data for Thailand
  const geoUrl =
    "https://raw.githubusercontent.com/apisit/thailand.json/master/thailand.json";

  // Marker data for Bangkok
  const markers = [
    {
      markerOffset: -15,
      name: "Samut Prakan",
      coordinates: [100.6386, 13.5897], // Bangkok coordinates
    },
  ];

  return (
    <Center>
      <Container>
        <Adjust>
          <Wrapper>
            <ComposableMap
              data-tip=""
              projection="geoMercator" // Use Mercator projection for world map
              projectionConfig={{
                rotate: [-101, -13, 5], // No rotation
                scale: 3000, // Adjust scale as needed
              }}
              style={{ width: "100%", height: "100%" }}
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#A6D4F7"
                      stroke="#AB72E3"
                    />
                  ))
                }
              </Geographies>
              {markers.map(({ name, coordinates, markerOffset }) => (
                <Marker key={name} coordinates={coordinates}>
                  <circle r={10} fill="#C22E37" stroke="#fff" strokeWidth={2} />
                  <text
                    textAnchor="middle"
                    y={markerOffset}
                    style={{ fontFamily: "system-ui", fill: "#000000" }}
                  >
                    {name}
                  </text>
                </Marker>
              ))}
            </ComposableMap>
          </Wrapper>
        </Adjust>
        <WhiteBox>
          <SideIcons>
            <ColoredBuildingIcon />
          </SideIcons>
          <p>
            {" "}
            <Icon /> We are located at Samut Prakan.
          </p>
          <p>
            {" "}
            <Mouse />Our platform is made to offer the most suitable options <br />
            for the particular tractor parts you require.
          </p>
          <p> <Truck />
            We are shipping high-quality tractor spare parts <br />
            all over Thailand.
          </p>
        </WhiteBox>
      </Container>
    </Center>
  );
}
