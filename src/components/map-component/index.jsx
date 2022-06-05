import React, { useEffect, useRef, useState } from 'react';
import { ResizeIcon } from '../../assets/icons';
import CountriesGeologyData from '../../data/countries.geology.json';
import { select, selectAll, geoPath, geoMercator } from "d3";
import useResizeObserver from '../../utils/useResizableObserver';
import { color } from 'd3';

const MapComponent = ({ continentsdata, officelocations }) => {

    const [activeContinent, setAvtiveContinent] = useState(localStorage.getItem("continentcode"));
    const [officesInContinent, setOfficesInContinent] = useState(officelocations.find(location => location.id === activeContinent));
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {

        const checkUserData = () => {
            let userContinent = localStorage.getItem("continentcode")
            setAvtiveContinent(userContinent)
        }

        window.addEventListener('continent-changed', checkUserData)

        return () => {
            window.removeEventListener('continent-changed', checkUserData)
        }
    }, [activeContinent])

    useEffect(() => {
        setOfficesInContinent(officelocations.find(location => location.id === activeContinent))
    }, [activeContinent, officelocations])




    const [countriesInContinent, setCountriesInContinent] = useState(CountriesGeologyData);

    useEffect(() => {

        let countriesInContinentFeatures = []
        let countriesInContinent = continentsdata.find(continent => continent.iso === activeContinent)
        let countriesInContinentCodes = countriesInContinent && countriesInContinent['countries']
        countriesInContinentCodes && countriesInContinentCodes.forEach(countryCode => {
            let countryFeature = CountriesGeologyData.features.find(feature => feature.id === countryCode)
            countryFeature && countriesInContinentFeatures.push(countryFeature)
        });
        setCountriesInContinent({
            type: 'FeatureCollection',
            features: countriesInContinentFeatures
        })
        setSelectedCountry(null)

    }, [activeContinent, continentsdata])




    /* D3 code begins here */

    const wrapperRef = useRef();
    const svgRef = useRef();
    const tooltipRef = useRef();

    const dimensions = useResizeObserver(wrapperRef);

    window.onmousemove = function (event) {
        try {
            var x = event.clientX - svgRef.current.getBoundingClientRect().x,
                y = event.clientY - svgRef.current.getBoundingClientRect().y;
            tooltipRef.current.style.top = (y + 20) + 'px';
            tooltipRef.current.style.left = (x + 20) + 'px';
        } catch (error) {}
    };

    useEffect(() => {

        const svg = select(svgRef.current);

        const { width, height } = dimensions || wrapperRef.current.getBoundingClientRect();

        const drawMap = (isResize, selectedCountry, countriesInContinent) => {
            var projection = geoMercator().rotate([-11, 0])
                .fitSize([width, height], !isResize ? selectedCountry || countriesInContinent : countriesInContinent)
                .precision(1000);

            const path = geoPath().projection(projection);


            /* Tooltip */
            let tooltip = select('#tooltip');

            /* Clicked on a country action */
            const clicked = (event, data) => {
                setSelectedCountry(data)
                if (selectedCountry !== data) {
                    let  selectedContinentsdata = null

                    continentsdata.forEach((continent, index) => {
                        if(continent.countries.includes(data.id)) {
                            selectedContinentsdata = continentsdata[index]
                        }
                    })
                    localStorage.setItem('countrycode', data.id)
                    localStorage.setItem('countryname', data.properties.name)
                    localStorage.setItem('continentcode', selectedContinentsdata.iso)
                    localStorage.setItem('continentname', selectedContinentsdata.name)
                    window.dispatchEvent(new Event("country-changed"));
                }
            }

            svg.selectAll(".country")
                .data(CountriesGeologyData.features)
                .join("path")
                .on("click", clicked)
                .attr("class", "country")
                .attr("id", (d) => d.id)
                .transition()
                .duration(600)
                .attr("d", path)

            /* Countries in active continent */
            countriesInContinent.features && countriesInContinent.features.forEach((feature) => {
                try {
                    let countryActiveContinent = svg.select(`#${feature.id}`)

                    countryActiveContinent &&
                        countryActiveContinent
                            .attr('class', 'country in-active-continent')
                            .on("mousemove", (event, d) => {
                                tooltip.style("display", "inline-block")
                                    .html(`
                                        <span>
                                            ${d.properties.name}
                                        </span>
                                    `)
                            })
                            .on("mouseout", () => { tooltip.style("display", "none"); });


                } catch (error) { }

            })

            selectAll(".country-markers-group").remove()

            officesInContinent && officesInContinent['countries'].forEach((country) => {
                let officeCountry = select(`#${country.id}`)

                officeCountry.attr('class', 'country in-active-continent has-office')
                    .attr('fill', color(country.colorcode));


                svg.append('g')
                    .attr('class', "country-markers-group")
                    .attr('id', country.id)
                    .selectAll('g')
                    .data(country.cities)
                    .enter()
                    .append('g')
                    .attr('class', 'office-marker')
                    .attr('id', (d) => d.officeid)
                    .on("mousemove", (event, d) => {
                        tooltip.style("display", "inline-block")
                            .html(`
                                <div class="office-name-address">
                                    <span class="office-name">${d.name}</span>
                                    <span class="office-address">${d.location.address}</span>
                                </div>
                            `)
                    })
                    .on("mouseout", () => { tooltip.style("display", "none"); })
                    .append("image")
                    .attr('width', 12)
                    .attr('height', 12)
                    .attr("xlink:href", '/images/business/careers/icons/office-location.svg')
                    .attr("transform", (d) => {
                        let latlong = d.location.latlong
                        let p = projection([latlong.longitude, latlong.latitude]);

                        return `translate(${p[0] - 6}, ${p[1] - 6})`;
                    })
                    .on("mousemove", function (event, d) {
                        select(this).transition()
                            .duration(600)
                            .attr('width', 15)
                            .attr('height', 15)
                            .attr("transform", (d) => {
                                let latlong = d.location.latlong
                                let p = projection([latlong.longitude, latlong.latitude]);
        
                                return `translate(${p[0] - 7.5}, ${p[1] - 7.5})`;
                            })
                    })
                    .on("mouseout", function (event, d) {
                        select(this).transition()
                            .duration(600)
                            .attr('width', 12)
                            .attr('height', 12)
                            .attr("transform", (d) => {
                                let latlong = d.location.latlong
                                let p = projection([latlong.longitude, latlong.latitude]);
        
                                return `translate(${p[0] - 6}, ${p[1] - 6})`;
                            })
                    });
            })

            /* Displaying The Country which is selected */
            if (selectedCountry) {
                let selectedPath = select(`#${selectedCountry.id}`)
                selectedPath.attr('class', 'country in-active-continent selected')
            }
        }

        /* Resize Button Action */
        const resizeMap = () => {
            drawMap(true, selectedCountry, countriesInContinent)
            window.dispatchEvent(new Event("continent-changed"))
        }
        select("#resize-icon").on('click', resizeMap)

        /* rendering the map */
        drawMap(false, selectedCountry, countriesInContinent)

    }, [continentsdata, countriesInContinent, dimensions, officesInContinent, selectedCountry])

    return (
        <div className='map-component' ref={wrapperRef}>
            <svg id='map' ref={svgRef}></svg>
            <div id="resize-icon">
                <ResizeIcon />
            </div>
            <div className="map-tooltip" id='tooltip' ref={tooltipRef} />
        </div>
    )
}

export default MapComponent