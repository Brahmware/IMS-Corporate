import React, { useEffect, useRef, useState } from 'react'
import { ResizeIcon } from '../../assets/icons';
import CountriesGeologyData from '../../data/countries.geology.json'
import { select, geoPath, geoMercator } from "d3";
import useResizeObserver from '../../utils/useResizableObserver';

const MapComponent = ({ continentsdata }) => {

    const [activeContinent, setAvtiveContinent] = useState(localStorage.getItem("continentcode"));
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
    }, [])

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

    window.onmousemove = function (e) {
        var x = e.clientX,
            y = e.clientY;
        tooltipRef.current.style.top = (y + 2) + 'px';
        tooltipRef.current.style.left = (x + 2 - svgRef.current.getBoundingClientRect().x) + 'px';
    };

    useEffect(() => {

        const svg = select(svgRef.current);

        const { width, height } = dimensions || wrapperRef.current.getBoundingClientRect();

        const drawMap = (isResize, selectedCountry, countriesInContinent) => {
            var projection = geoMercator().rotate([-11, 0]).fitSize([width, height], !isResize ? selectedCountry || countriesInContinent : countriesInContinent).precision(1000);
            const path = geoPath().projection(projection);


            /* Tooltip */
            let tooltip = select('#tooltip');

            /* Clicked on a country action */
            const clicked = (event, data) => {
                setSelectedCountry(data)

                if (selectedCountry !== data) {
                    localStorage.setItem('countrycode', data.id)
                    localStorage.setItem('countryname', data.properties.name)
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
                .attr("d", path)



            countriesInContinent.features && countriesInContinent.features.forEach((feature) => {
                try {
                    let countryActiveContinent = svg.select(`#${feature.id}`)
                    countryActiveContinent && 
                    countryActiveContinent.attr('class', 'country in-active-continent')
                    .on("mousemove", (event, d) => {
                        tooltip.style("display", "inline-block")
                        .html(`
                            <span>
                                ${d.properties.name}
                            </span>
                        `)
                    })
                    .on("mouseout", () => { tooltip.style("display", "none");});
                } catch (error) { }
            })

            if (selectedCountry) {
                let selectedPath = select(`#${selectedCountry.id}`)
                selectedPath.attr('class', 'country in-active-continent selected')
            }
        }

        /* Resize Button Action */
        const resizeMap = () => {
            drawMap(true, selectedCountry, countriesInContinent)
        }
        select("#resize-icon").on('click', resizeMap)

        /* rendering the map */
        drawMap(false, selectedCountry, countriesInContinent)

    }, [countriesInContinent, dimensions, selectedCountry])

    return (
        <div className='map-component' ref={wrapperRef}>
            <svg id='map' ref={svgRef}></svg>
            <div id="resize-icon">
                <ResizeIcon />
            </div>
            <div className="map-tooltip" id='tooltip' ref={tooltipRef}/>
        </div>
    )
}

export default MapComponent