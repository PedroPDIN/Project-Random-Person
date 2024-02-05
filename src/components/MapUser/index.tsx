import dynamic from "next/dynamic";

const MapUser = dynamic(() => import('./Map'), {
  ssr: false
})

export default MapUser;
