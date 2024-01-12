'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { LatLngExpression, icon } from 'leaflet'
import { memo } from 'react'

function Map() {
  const position: LatLngExpression = [23.78, 90.38]

  return (
    <MapContainer
      className="h-full"
      center={position}
      zoom={10}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        icon={icon({
          iconUrl: 'https://www.svgrepo.com/show/127575/location-sign.svg',
          className: 'h-6 w-6',
        })}
        position={position}
      >
        <Popup className="font-bold">
          Kawsar Ahmed | Software Engineer | Frontend.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default memo(Map)
