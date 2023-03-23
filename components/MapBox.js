import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect } from "react";

const MapBoxl = () => {
	return (
		<MapContainer
			className="markercluster-map h-[500px] mt-12 mx-auto max-w-full"
			center={[5.597224491965333, -0.24316318575682494]}
			zoom={15}
			maxZoom={18}
		>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			/>
			<Marker position={[5.597224491965333, -0.24316318575682494]}>
				<Popup>Anna&apos;s Daisy School</Popup>
			</Marker>
		</MapContainer>
	);
};

export default MapBoxl;
