import React from "react"
import './RequestsSection.css'
import Request from "./Request"
import info from "./Info"
import images from "./Images"
import friends from "./Profile/friends"

function RequestsSection(){


    return(
        <div className="requests-section">
            <Request
                Username={friends.friend2[0]}
                UserPfp={friends.friend2[1]}
                Date='51m'
                Mtl1={images.ayanami1}
                Mtl2={images.cat}
                MtlCount='2'
            />

            <Request
                Username={friends.friend7[0]}
                UserPfp={friends.friend7[1]}
                Date='1d'
                Mtl1={images.ayanami3}
                Mtl2={images.goku2}
                MtlCount='32'
            />

            <Request
                Username={friends.friend8[0]}
                UserPfp={friends.friend8[1]}
                Date='2d'
                Mtl1={images.artisan1}
                Mtl2={images.floppus}
                MtlCount='27'
            />
            
            <Request
                Username={friends.friend9[0]}
                UserPfp={friends.friend9[1]}
                Date='1y'
                Mtl1={images.floppa1}
                Mtl2={images.cat}
                MtlCount='5'
            />

            <Request
                Username={friends.friend10[0]}
                UserPfp={friends.friend10[1]}
                Date='4d'
                Mtl1={images.messi1}
                Mtl2={images.floppus}
                MtlCount='102'
            />

            <Request
                Username={friends.friend11[0]}
                UserPfp={friends.friend11[1]}
                Date='3d'
                Mtl1={images.ronaldo1}
                Mtl2={images.genos1}
                MtlCount='42'
            />

            <Request
                Username={friends.friend12[0]}
                UserPfp={friends.friend12[1]}
                Date='5m'
                Mtl1={images.cgarou1}
                Mtl2={images.eren1}
                MtlCount='21'
            />

        </div>
    )
}

export default RequestsSection