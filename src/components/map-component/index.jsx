import React from 'react'
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

        const geoPathProjection = d3.geoPath().projection(projection);

        function drawGlobe() {

            svg.selectAll(".countries")
                .data(CountriesGeologyData.features)
                .enter().append("path")
                .attr("class", "country")
                .attr("d", geoPathProjection)
                .attr("id", (d) => d.id)
                .on("click", clicked);
        }

        function clicked(event, data) {
            let bounds = geoPathProjection.bounds(data),
                dx = bounds[1][0] - bounds[0][0],
                dy = bounds[1][1] - bounds[0][1],
                x = (bounds[0][0] + bounds[1][0]) / 2,
                y = (bounds[0][1] + bounds[1][1]) / 2,
                scale = Math.max(1, Math.min(8, 0.9 / Math.max(dx / width, dy / height))),
                translate = [width / 2 - scale * x, height / 2 - scale * y];

            /* if (active.node() === this) return reset();
            active.classed("active", false);
            active = select(this).classed("active", true);
          
            var bounds = geoPathProjection.bounds(d),
                dx = bounds[1][0] - bounds[0][0],
                dy = bounds[1][1] - bounds[0][1],
                x = (bounds[0][0] + bounds[1][0]) / 2,
                y = (bounds[0][1] + bounds[1][1]) / 2,
                scale = Math.max(1, Math.min(8, 0.9 / Math.max(dx / width, dy / height))),
                translate = [width / 2 - scale * x, height / 2 - scale * y];
          
            svg.transition()
                .duration(750)
                // .call(zoom.translate(translate).scale(scale).event); // not in d3 v4
                .call( zoom.transform, zoomIdentity.translate(translate[0],translate[1]).scale(scale) ); // updated for d3 v4 */
        }




        return drawGlobe();
    }

    const svgRef = useD3(draw, []);
    return (
        <div className='map-component'>
            <svg id='map' ref={svgRef} viewBox="0 0 960 500" preserveAspectRatio="xMidYMid meet" />
        </div>
    )
}

export default MapComponent