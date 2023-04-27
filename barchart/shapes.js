var dataArray = [5, 11, 18];

var svg = d3.select("body").append('svg').attr('width', '100%').attr('height', '100%');

var sel = svg.selectAll('rect').data(dataArray).enter().append('rect')
    .attr('height', function (d) {
        return d * 15;
    })
    .attr('width', '50')
    .attr('fill', 'pink')
    .attr('x', function (d, i) {
        return i * 60;
    })
    .attr('y', function (d) {
        return 300 - (d * 15);
    })







