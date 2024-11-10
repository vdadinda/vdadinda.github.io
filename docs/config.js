var config = {
    style: 'mapbox://styles/vdinda/cm2tth2gd00d201pw1uocacmg',
    accessToken: 'pk.eyJ1IjoidmRpbmRhIiwiYSI6ImNsam4za28zdzE0bWYzanRneTE2MHg0NW4ifQ.X3gzXoTjFMvimqRvz9G_-Q',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    auto: false,
    title: 'Vania Dwi Adinda',
    subtitle: '',
    byline: '',
    footer: 'Thanks for scrolling! :-) <br>Check out my <a href="../assets/Vania-Dwi-Adinda_Resume_2024.pdf" target="_blank">Resume</a> and <a href="https://www.linkedin.com/in/vaniadwiadinda/" target="_blank">LinkedIn</a> for more details!',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: '2024',
            subtitle: 'Walnut Creek, CA, USA',
            image: '',
            description: "Hi! I'm a Transportation Engineer/Planner at Fehr & Peers. I sit at our Walnut Creek office.",
            location: {
                center: [-122.06703, 37.90435],
                zoom: 11.85,
                pitch: 0,
                bearing: 0
            },
            // mapAnimation: 'flyTo',
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
            subtitle: 'Northern CA, USA',
            image: '',
            description: 'Most of my project at Fehr & Peers are located in the Bay Area and Central counties.',
            location: {
                center: [-122.59499, 37.85468],
                zoom: 8,
                pitch: 0,
                bearing: 0,
            },
            markers: [ // Custom property for multiple markers
                {
                    coordinates: [-121.02233, 37.63413], // Modesto
                },
                {
                    coordinates: [-120.94733, 37.73260] // Riverbank
                },
                {
                    coordinates: [-124.13408, 41.06594] // Trinidad
                },
                {
                    coordinates: [-122.32512, 37.56265] // San Mateo
                },
                {
                    coordinates: [-122.41286, 37.65390] // South SF
                },
                {
                    coordinates: [-122.11920, 37.88404] // Lafayette
                },
                {
                    coordinates: [-122.10605, 37.88265] // Lafayette 2
                },
                {
                    coordinates: [-122.39146, 37.93096] // Richmond
                },
                {
                    coordinates: [-122.45289, 37.93615] // RSR
                },
                {
                    coordinates: [-122.03235, 37.97976] // Concord
                },
                {
                    coordinates: [-121.71075, 37.99609] // Oakley
                },
                {
                    coordinates: [-121.75079, 38.01259] // Bridgehead
                },
                {
                    coordinates: [-122.04402, 38.25206] // Fairfield
                },
                {
                    coordinates: [-122.71054, 38.43973] // Santa Rosa
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
            alignment: 'right',
            hidden: false,
            title: '2022 - 2023',
            subtitle: 'Berkeley, CA, USA',
            image: '',
            description: "I graduated from UC Berkeley in December 2023 (go bears!). I hold a master's degree in Systems Engineering with a Graduate Certificate in Applied Data Science.",
            location: {
                center: [-122.25839, 37.87458],
                zoom: 17.52,
                pitch: 67.5,
                bearing: 0
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
            title: '2023',
            subtitle: 'Boston, MA, USA',
            image: '',
            description: 'In the summer of 2023, I interned at Arcadis IBI Group in Boston, where I worked on a variety of Intelligent Transportation Systems (ITS) projects in Massachusetts and Connecticut.',
            location: {
                center: [-71.05709, 42.35637],
                zoom: 16,
                pitch: 67.50,
                bearing: 0
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
            image: '',
            description: 'Prior to grad school, I worked as a BIM Engineer at Royal HaskoningDHV for three years.',
            location: {
                center: [106.83394, -6.18781],
                zoom: 10.09,
                pitch: 1.5,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-identifier',
            alignment: 'left',
            hidden: false,
            title: '2019 - 2022',
            subtitle: 'multiple locations, IDN',
            image: '',
            description: 'Based out of our Jakarta office, I worked on various planning, design, and engineering projects for port and logistics infrastructures in Indonesia.',
            location: {
                center: [109.80533, -0.55231],
                zoom: 3.5,
                pitch: 0,
                bearing: 0,
            },
            markers: [ // Custom property for multiple markers
                {
                    coordinates: [110.42340, -6.93163] // Semarang
                },
                {
                    coordinates: [112.65747, -7.14571] // Gresik
                },
                {
                    coordinates: [112.75331, -7.21617] // Surabaya
                },
                {
                    coordinates: [117.39499, -8.41940] // Sumbawa
                },
                {
                    coordinates: [120.33129, -3.39344] // Belopa
                },
                {
                    coordinates: [104.23442, 1.01348] // Bintan
                },
                {
                    coordinates: [104.82630, -3.08868]// Palembang
                },
                {
                    coordinates: [106.07295, -5.99750] // Cilegon
                },
                {
                    coordinates: [109.02486, -7.72182] // Cilacap
                },
                {
                    coordinates: [128.15111, -3.68257] // Ambon
                },
            ],
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-identifier',
            alignment: 'right',
            hidden: false,
            title: '2019 - 2022',
            subtitle: 'multiple cities, NL',
            image: '',
            description: "My experience also includes a brief stint at Royal HaskoningDHV's Rotterdam, The Hague, and Amersfoort offices, where I contributed to the development of various in-house design and engineering tools.",
            location: {
                center: [4.55975, 51.95366],
                zoom: 16.8,
                pitch: 66.08,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eight-identifier',
            alignment: 'left',
            hidden: false,
            title: '2015 - 2019',
            subtitle: 'Bandung, IDN',
            image: '',
            description: "I earned my bachelor's degree in Civil Engineering from Bandung Institute of Technology.",
            location: {
                center: [107.60930, -6.89220],
                zoom: 17,
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
            id: 'ninth-identifier',
            alignment: 'left',
            hidden: false,
            title: '1997 - 2015',
            subtitle: 'IDN',
            description: 'Born and raised in Jakarta of <a href="https://en.wikipedia.org/wiki/Torajan_people" target="_blank">Torajan ethnicity</a>, I spent a lot of time traveling between two places: one a large metropolitan city with over 10 million people, and the other rural villages at the heart of Sulawesi Island—a formative period that shaped my passion for transportation and desire to improve accessibility, mobility, and connectivity.',
            // image: '/Users/vaniadinda/Documents/VDA_Portfolio_2024/storytelling/assets/baby-vania.JPG',
            location: {
                center: [111.26941, -4.62629],
                zoom: 4.5,
                pitch: 40,
                bearing: 0
            },
            markers: [ // Custom property for multiple markers
                {
                    coordinates: [106.83531, -6.15042] // Jakarta
                },
                {
                    coordinates: [119.90420, -2.94761] // Toraja
                },
            ],
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
