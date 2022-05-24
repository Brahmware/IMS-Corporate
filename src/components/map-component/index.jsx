import React from 'react'
import { ResizeIcon } from '../../assets/icons';
import { useD3 } from '../../utils/useD3';
import CountriesGeologyData from '../../data/countries.geology.json'
import * as d3 from 'd3';

const MapComponent = (props) => {

    const draw = (svg) => {

        var width = 960,
            height = 500

        var projection = d3.geoMercator()
            .scale(150)
            .center([0, 45]);

        const path = d3.geoPath().projection(projection);

        function drawGlobe() {

            svg.selectAll(".countries")
                .data(CountriesGeologyData.features)
                .enter().append("path")
                .attr("class", "country")
                .attr("id", (d) => d.id)
                .attr("d", path)
                .on("click", clicked);
        }

        d3.select("#resize-icon").on('click', resizeMap)

        function resizeMap() {

            var projection = d3.geoMercator()
                .scale(150)
                .center([0, 45]);

            const path = d3.geoPath().projection(projection);
            svg.selectAll("path")
                .transition()
                .duration(600)
                .attr("d", path);
        }

        function clicked(event, data) {

            let bounds = path.bounds(data),
                dx = bounds[1][0] - bounds[0][0],
                dy = bounds[1][1] - bounds[0][1],
                x = (bounds[0][0] + bounds[1][0]) / 2,
                y = (bounds[0][1] + bounds[1][1]) / 2,
                scale = Math.max(1, Math.min(8, 0.9 / Math.max(dx / width, dy / height))),
                translate = [width / 2 - scale * x, height / 2 - scale * y];

            projection.translate(translate).scale();

            // Transition to the new projection

            svg.selectAll("path")
                .transition()
                .duration(600)
                .attr("d", path);


            // Add point showing new projection centre
        }
        /* function clicked(event, data) {
            let bounds = geoPathProjection.bounds(data),
                dx = bounds[1][0] - bounds[0][0],
                dy = bounds[1][1] - bounds[0][1],
                x = (bounds[0][0] + bounds[1][0]) / 2,
                y = (bounds[0][1] + bounds[1][1]) / 2,
                scale = Math.max(1, Math.min(8, 0.9 / Math.max(dx / width, dy / height))),
                translate = [width / 2 - scale * x, height / 2 - scale * y];
        } */




        drawGlobe();
    }

    const svgRef = useD3(draw, []);
    return (
        <div className='map-component'>
            <svg id='map' ref={svgRef} viewBox="0 0 960 500" preserveAspectRatio="xMidYMid meet" >
            </svg>
            <div className="resize-icon-holder">
                <div id="resize-icon">
                    <ResizeIcon />
                </div>
            </div>
        </div>
    )
}

export default MapComponent