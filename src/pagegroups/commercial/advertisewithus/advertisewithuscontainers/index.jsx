import React from 'react'
import AdvertiseWithUsContainerOne from '../../../../containers/advertise-with-us/container-1'
import AdvertiseWithUsContainerTwo from '../../../../containers/advertise-with-us/container-2'
import AdvertiseWithUsContainerThree from '../../../../containers/advertise-with-us/container-3'
import AdvertiseWithUsContainerFour from '../../../../containers/advertise-with-us/container-4'
import AdvertiseWithUsContainerFive from '../../../../containers/advertise-with-us/container-5'

const AdvertiseWithUs = ({ data,url }) => {
    const dataContainer1 = data && data.find(data => data.id === 'container_1').elements;
    const dataContainer2 = data && data.find(data => data.id === 'container_2').elements;
    const dataContainer3 = data && data.find(data => data.id === 'container_3').elements;
    const dataContainer4 = data && data.find(data => data.id === 'container_4').elements;
    const dataContainer5 = data && data.find(data => data.id === 'container_5').elements;
    return (
        <div className="advertise-with-us-page">
            <AdvertiseWithUsContainerOne data={dataContainer1} />
            <AdvertiseWithUsContainerTwo data={dataContainer2} />
            <AdvertiseWithUsContainerThree data={dataContainer3} url={url}/>
            <AdvertiseWithUsContainerFour data={dataContainer4} url={ url} />
            <AdvertiseWithUsContainerFive data={dataContainer5} />
        </div>
    )
}

export default AdvertiseWithUs