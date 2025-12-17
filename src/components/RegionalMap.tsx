import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";
import { Droplets, MapPin, Snowflake, Sun, Wind } from "lucide-react";
import { trackEvent } from "../lib/analytics";
import { GeoJSON, MapContainer, TileLayer, useMap } from "react-leaflet";
import * as L from "leaflet";
import { feature as topojsonFeature } from "topojson-client";
import statesTopo from "us-atlas/states-10m.json";

type RegionId = "northern" | "southern" | "atlantic" | "midwest";

interface Region {
  id: RegionId;
  name: string;
  icon: any;
  description: string;
  conditions: string[];
  comingSoon?: boolean;
}

const regions: Region[] = [
  {
    id: "northern",
    name: "Northern US",
    icon: Snowflake,
    description: "Arctic & Sub-Arctic Operations",
    conditions: ["Extreme cold (-40°F)", "Heavy snow", "Ice conditions", "Short daylight hours"],
    comingSoon: true
  },
  {
    id: "southern",
    name: "Southern US",
    icon: Sun,
    description: "High-Heat Desert Operations",
    conditions: ["Extreme heat (110°F+)", "Low humidity", "Intense UV", "Minimal shade"],
    comingSoon: true
  },
  {
    id: "atlantic",
    name: "Atlantic/Caribbean",
    icon: Droplets,
    description: "Humid Tropical Environments",
    conditions: ["High humidity (80%+)", "Heavy rainfall", "Salt exposure", "Tropical storms"],
    comingSoon: true
  },
  {
    id: "midwest",
    name: "Midwest/Plains",
    icon: Wind,
    description: "Variable Continental Climate",
    conditions: ["Extreme temperature swings", "High winds", "Tornadic activity", "Rapid weather changes"],
    comingSoon: true
  }
];

// Grouping is based on operational climate bands; it’s a deliberate simplification.
const REGION_BY_STATE_NAME: Record<string, RegionId> = {
  Alabama: "southern",
  Alaska: "northern",
  Arizona: "southern",
  Arkansas: "southern",
  California: "southern",
  Colorado: "midwest",
  Connecticut: "atlantic",
  Delaware: "atlantic",
  Florida: "atlantic",
  Georgia: "atlantic",
  Hawaii: "atlantic",
  Idaho: "northern",
  Illinois: "midwest",
  Indiana: "midwest",
  Iowa: "midwest",
  Kansas: "midwest",
  Kentucky: "southern",
  Louisiana: "southern",
  Maine: "northern",
  Maryland: "atlantic",
  Massachusetts: "atlantic",
  Michigan: "northern",
  Minnesota: "northern",
  Mississippi: "southern",
  Missouri: "midwest",
  Montana: "northern",
  Nebraska: "midwest",
  Nevada: "southern",
  "New Hampshire": "northern",
  "New Jersey": "atlantic",
  "New Mexico": "southern",
  "New York": "northern",
  "North Carolina": "atlantic",
  "North Dakota": "northern",
  Ohio: "midwest",
  Oklahoma: "southern",
  Oregon: "northern",
  Pennsylvania: "northern",
  "Rhode Island": "atlantic",
  "South Carolina": "atlantic",
  "South Dakota": "midwest",
  Tennessee: "southern",
  Texas: "southern",
  Utah: "midwest",
  Vermont: "northern",
  Virginia: "atlantic",
  Washington: "northern",
  "West Virginia": "midwest",
  Wisconsin: "northern",
  Wyoming: "midwest"
};

type StateFeature = GeoJSON.Feature<GeoJSON.Geometry, { name?: string; regionId?: RegionId }>;

// Contiguous US bounds (approx). Used to keep the UX focused on the US.
const CONUS_BOUNDS: [L.LatLngTuple, L.LatLngTuple] = [
  [24.396308, -124.848974], // south-west
  [49.384358, -66.885444] // north-east
];

function getStateName(feature: StateFeature): string | undefined {
  return (feature.properties?.name ?? (feature.properties as any)?.NAME) as string | undefined;
}

function FitToScope({
  allStates,
  selectedStates
}: {
  allStates: GeoJSON.FeatureCollection;
  selectedStates: GeoJSON.FeatureCollection;
}) {
  const map = useMap();

  useEffect(() => {
    const target = selectedStates.features.length > 0 ? selectedStates : allStates;
    let bounds: L.LatLngBounds;
    try {
      bounds = L.geoJSON(target as any).getBounds();
      if (!bounds.isValid()) {
        bounds = L.latLngBounds(CONUS_BOUNDS[0], CONUS_BOUNDS[1]);
      }
    } catch {
      bounds = L.latLngBounds(CONUS_BOUNDS[0], CONUS_BOUNDS[1]);
    }
    // Smaller padding + higher maxZoom makes the map feel more "zoomed in".
    map.fitBounds(bounds, {
      padding: [16, 16],
      maxZoom: selectedStates.features.length > 0 ? 7 : 5,
      animate: true
    });
  }, [allStates, selectedStates, map]);

  return null;
}

export function RegionalMap() {
  const [selectedRegion, setSelectedRegion] = useState<RegionId | null>(null);

  const allStates = useMemo(() => {
    const topo: any = statesTopo as any;
    const statesObject = topo.objects?.states;
    const fc = topojsonFeature(topo, statesObject) as any;

    // Attach regionId to each state feature.
    for (const f of fc.features as StateFeature[]) {
      const name = getStateName(f);
      const regionId = name ? REGION_BY_STATE_NAME[name] : undefined;
      (f.properties ??= {}).regionId = regionId;
    }

    // Keep the map focused on the contiguous US for now.
    // Alaska and Hawaii are the primary cause of “zooming all the way out”.
    fc.features = (fc.features as StateFeature[]).filter((f) => {
      const name = getStateName(f);
      return name !== "Alaska" && name !== "Hawaii";
    });

    return fc as GeoJSON.FeatureCollection;
  }, []);

  const usBounds = useMemo(() => L.latLngBounds(CONUS_BOUNDS[0], CONUS_BOUNDS[1]), []);

  const selectedStates = useMemo(() => {
    if (!selectedRegion) {
      return { type: "FeatureCollection", features: [] } as GeoJSON.FeatureCollection;
    }
    return {
      type: "FeatureCollection",
      features: (allStates.features as StateFeature[]).filter(
        (f) => f.properties?.regionId === selectedRegion
      )
    } as GeoJSON.FeatureCollection;
  }, [allStates, selectedRegion]);

  const handleRegionSelect = (regionId: string) => {
    setSelectedRegion(regionId as RegionId);
    trackEvent("select_region", { region: regionId });
  };

  const selectedData = regions.find(r => r.id === selectedRegion);

  return (
    <section className="py-20 bg-zinc-950" id="regional">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-1 w-12 bg-orange-600"></div>
            <MapPin className="w-6 h-6 text-orange-600" />
            <div className="h-1 w-12 bg-orange-600"></div>
          </div>
          <h2 className="text-zinc-100 mb-4">Regional Intelligence</h2>
          <p className="text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            Mission-critical gear assessments tailored to specific operational environments. Each region demands different equipment capabilities—we've field-tested the gear that performs when conditions are at their worst.
          </p>
        </motion.div>

        {/* OpenStreetMap Regional View */}
        <motion.div
          className="mb-12 bg-zinc-900/50 border border-zinc-800 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="p-6 border-b border-zinc-800">
            <p className="text-zinc-400 text-sm">
              Select a region on the map to view scope and operational conditions.
            </p>
          </div>

          <div className="relative et-leaflet-dark">
            <MapContainer
              className="w-full"
              style={{ height: 420, width: "100%" }}
              center={[39, -98]}
              zoom={5}
              zoomControl
              scrollWheelZoom={false}
              minZoom={4}
              maxBounds={usBounds as any}
              maxBoundsViscosity={0.8}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />

              <FitToScope allStates={allStates} selectedStates={selectedStates} />

              <GeoJSON
                data={allStates as any}
                style={(feature) => {
                  const stateRegion = (feature?.properties as any)?.regionId as RegionId | undefined;
                  const isSelected = !!stateRegion && selectedRegion === stateRegion;
                  return {
                    color: "var(--chart-3)",
                    weight: isSelected ? 3 : 2,
                    opacity: isSelected ? 0.95 : 0.25,
                    fillColor: "var(--chart-3)",
                    fillOpacity: isSelected ? 0.22 : 0.04
                  };
                }}
                eventHandlers={{
                  click: (event) => {
                    const regionId = (event?.layer as any)?.feature?.properties?.regionId as RegionId | undefined;
                    if (!regionId) return;
                    handleRegionSelect(regionId);
                  }
                }}
              />
            </MapContainer>
          </div>
        </motion.div>

        {/* Selected Region Details */}
        {selectedData && (
          <motion.div
            className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-orange-600 p-4 rounded-lg">
                <selectedData.icon className="w-8 h-8 text-zinc-950" />
              </div>
              <div>
                <h3 className="text-zinc-100 text-2xl uppercase tracking-wide mb-1">
                  {selectedData.name}
                </h3>
                <p className="text-zinc-400">{selectedData.description}</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="text-orange-600 uppercase tracking-wide text-sm mb-3">
                  Operational Conditions
                </h4>
                <ul className="space-y-2">
                  {selectedData.conditions.map((condition, i) => (
                    <li key={i} className="flex items-center gap-2 text-zinc-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-orange-600 rounded-full"></div>
                      {condition}
                    </li>
                  ))}
                </ul>
              </div>

              {selectedData.comingSoon && (
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-6">
                  <h4 className="text-orange-600 uppercase tracking-wide text-sm mb-3">
                    Regional Assessment In Progress
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                    Our team is currently conducting extensive field trials in {selectedData.name.toLowerCase()} conditions. Regional-specific gear assessments will be available soon.
                  </p>
                  <p className="text-zinc-500 text-xs uppercase tracking-wide">
                    Only Vetted Products Make The Cut
                  </p>
                </div>
              )}
            </div>

            <div className="border-t border-zinc-800 pt-6">
              <p className="text-zinc-500 text-sm text-center">
                <span className="text-orange-600">Currently Available:</span> Hunting Knives (All-Region Assessment) • 
                <span className="text-zinc-400 ml-2">Additional regional categories under field assessment</span>
              </p>
            </div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-zinc-400 mb-6">
            Region-specific assessments ensure you're equipped for the exact conditions you'll face.
          </p>
          <motion.button
            className="bg-orange-600 hover:bg-orange-700 text-zinc-950 px-8 py-3 uppercase tracking-wider transition-colors rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              trackEvent("click_view_categories");
              document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Current Assessments
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
