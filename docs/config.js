var config = {
    style: 'mapbox://styles/vdinda/cm2tth2gd00d201pw1uocacmg',
    accessToken: 'pk.eyJ1IjoidmRpbmRhIiwiYSI6ImNsam4za28zdzE0bWYzanRneTE2MHg0NW4ifQ.X3gzXoTjFMvimqRvz9G_-Q',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: '',
    subtitle: '',
    byline: '',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: '2024',
            subtitle: 'Walnut Creek, CA, USA',
            image: '',
            description: "Hi! I'm a Transportation Engineer/Planner at Fehr & Peers. <br> I work out of our Walnut Creek office.",
            location: {
                center: [-122.06138, 37.89580],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: '2024',
            subtitle: 'SF Bay, CA, USA',
            image: '',
            description: 'I work on projects in and around San Francisco Bay Area.',
            location: {
                center: [-122.06138, 37.89580],
                zoom: 7.98,
                pitch: 0,
                bearing: 0,
            },
            markers: [ // Custom property for multiple markers
                {
                    coordinates: [-122.31364, 37.58647] // Marker coordinates
                },
                {
                    coordinates: [-122.4194, 37.7749] // Marker 2 coordinates
                },
            ],
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: '2023',
            subtitle: 'Boston, MA, USA',
            image: '',
            description: 'internship at Arcadis IBI Group in Boston',
            location: {
                center: [-71.05331, 42.36021],
                zoom: 14.29,
                pitch: 65,
                bearing: 28
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-identifier',
            alignment: 'left',
            hidden: false,
            title: '2022 - 2023',
            subtitle: 'Berkeley, CA, USA',
            image: './path/to/image/source.png',
            description: 'graduate school at UC Berkeley',
            location: {
                center: [-122.25842, 37.87465],
                zoom: 16.97,
                pitch: 64.15,
                bearing: 32.88
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: '2019 - 2022',
            subtitle: 'Jakarta, IDN',
            image: './path/to/image/source.png',
            description: 'BIM Engineer at Royal HaskoningDHV',
            location: {
                center: [106.83394, -6.18781],
                zoom: 10.09,
                pitch: 1.5,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-identifier',
            alignment: 'left',
            hidden: false,
            title: '2019 - 2022',
            subtitle: 'multiple cities, NL',
            image: '',
            description: "brief stint at Royal HaskoningDHV's Rotterdam, Amersfoort, The Hague offices",
            location: {
                center: [4.62275, 52.08822],
                zoom: 9.31,
                pitch: 56.71,
                bearing: -81.60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-identifier',
            alignment: 'left',
            hidden: false,
            title: '2015 - 2019',
            subtitle: 'Bandung, IDN',
            image: './path/to/image/source.png',
            description: 'college at Bandung Institute of Technology, BS in Civil Eng',
            location: {
                center: [107.61042, -6.89093],
                zoom: 16.81,
                pitch: 71.5,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eigth-identifier',
            alignment: 'left',
            hidden: false,
            title: '1997',
            subtitle: 'Jakarta, IDN',
            description: 'baby Vania',
            image: '/Users/vaniadinda/Documents/VDA_Portfolio_2024/storytelling/assets/baby-vania.JPG',
            location: {
                center: [106.85578, -6.19757],
                zoom: 17.77,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
