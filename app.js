const dbPool = require('./db');
const express =require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

const allCapsules = [
    {
      "capsule_serial": "C101",
      "capsule_id": "dragon1",
      "status": "retired",
      "original_launch": "2010-12-08T15:43:00.000Z",
      "original_launch_unix": 1291822980,
      "missions": [
        {
          "name": "COTS 1",
          "flight": 7
        }
      ],
      "landings": 0,
      "type": "Dragon 1.0",
      "details": "Reentered after three weeks in orbit",
      "reuse_count": 0
    },
    {
      "capsule_serial": "C102",
      "capsule_id": "dragon1",
      "status": "retired",
      "original_launch": "2012-05-02T07:44:00.000Z",
      "original_launch_unix": 1335944640,
      "missions": [
        {
          "name": "COTS 2",
          "flight": 8
        }
      ],
      "landings": 1,
      "type": "Dragon 1.0",
      "details": "First Dragon spacecraft",
      "reuse_count": 0
    },
    {
      "capsule_serial": "C103",
      "capsule_id": "dragon1",
      "status": "unknown",
      "original_launch": "2012-10-08T00:35:00.000Z",
      "original_launch_unix": 1349656500,
      "missions": [
        {
          "name": "CRS-1",
          "flight": 9
        }
      ],
      "landings": 1,
      "type": "Dragon 1.0",
      "details": "First of twenty missions flown under the CRS1 contract",
      "reuse_count": 0
    },
    {
      "capsule_serial": "C104",
      "capsule_id": "dragon1",
      "status": "unknown",
      "original_launch": "2013-03-01T19:10:00.000Z",
      "original_launch_unix": 1362165000,
      "missions": [
        {
          "name": "CRS-2",
          "flight": 10
        }
      ],
      "landings": 1,
      "type": "Dragon 1.0",
      "details": null,
      "reuse_count": 0
    },
    {
      "capsule_serial": "C105",
      "capsule_id": "dragon1",
      "status": "unknown",
      "original_launch": "2014-04-18T19:25:00.000Z",
      "original_launch_unix": 1397849100,
      "missions": [
        {
          "name": "CRS-3",
          "flight": 14
        }
      ],
      "landings": 1,
      "type": "Dragon 1.1",
      "details": "First Dragon v1.1 capsule",
      "reuse_count": 0
    },
    {
      "capsule_serial": "C106",
      "capsule_id": "dragon1",
      "status": "active",
      "original_launch": "2014-09-21T05:52:00.000Z",
      "original_launch_unix": 1411278720,
      "missions": [
        {
          "name": "CRS-4",
          "flight": 18
        },
        {
          "name": "CRS-11",
          "flight": 41
        }
      ],
      "landings": 2,
      "type": "Dragon 1.1",
      "details": "First Dragon capsule to be reused",
      "reuse_count": 1
    },
    {
      "capsule_serial": "C107",
      "capsule_id": "dragon1",
      "status": "unknown",
      "original_launch": "2015-01-10T09:47:00.000Z",
      "original_launch_unix": 1420883220,
      "missions": [
        {
          "name": "CRS-5",
          "flight": 19
        }
      ],
      "landings": 1,
      "type": "Dragon 1.1",
      "details": null,
      "reuse_count": 0
    },
    {
      "capsule_serial": "C108",
      "capsule_id": "dragon1",
      "status": "active",
      "original_launch": "2015-04-14T20:10:00.000Z",
      "original_launch_unix": 1429042200,
      "missions": [
        {
          "name": "CRS-6",
          "flight": 22
        },
        {
          "name": "CRS-13",
          "flight": 51
        }
      ],
      "landings": 2,
      "type": "Dragon 1.1",
      "details": "Second Dragon capsule to be reused",
      "reuse_count": 1
    },
    {
      "capsule_serial": "C109",
      "capsule_id": "dragon1",
      "status": "destroyed",
      "original_launch": "2015-06-28T14:21:00.000Z",
      "original_launch_unix": 1435501260,
      "missions": [
        {
          "name": "CRS-7",
          "flight": 24
        }
      ],
      "landings": 0,
      "type": "Dragon 1.1",
      "details": "Destroyed on impact after F9 launch failure",
      "reuse_count": 0
    },
    {
      "capsule_serial": "C110",
      "capsule_id": "dragon1",
      "status": "active",
      "original_launch": "2016-04-08T20:43:00.000Z",
      "original_launch_unix": 1460148180,
      "missions": [
        {
          "name": "CRS-8",
          "flight": 28
        },
        {
          "name": "CRS-14",
          "flight": 59
        }
      ],
      "landings": 2,
      "type": "Dragon 1.1",
      "details": null,
      "reuse_count": 1
    },
    {
      "capsule_serial": "C111",
      "capsule_id": "dragon1",
      "status": "active",
      "original_launch": "2016-07-18T04:45:00.000Z",
      "original_launch_unix": 1468817100,
      "missions": [
        {
          "name": "CRS-9",
          "flight": 32
        },
        {
          "name": "CRS-15",
          "flight": 64
        }
      ],
      "landings": 2,
      "type": "Dragon 1.1",
      "details": null,
      "reuse_count": 1
    },
    {
      "capsule_serial": "C112",
      "capsule_id": "dragon1",
      "status": "active",
      "original_launch": "2017-02-19T14:39:00.000Z",
      "original_launch_unix": 1487515140,
      "missions": [
        {
          "name": "CRS-10",
          "flight": 36
        },
        {
          "name": "CRS-16",
          "flight": 72
        }
      ],
      "landings": 2,
      "type": "Dragon 1.1",
      "details": null,
      "reuse_count": 1
    },
    {
      "capsule_serial": "C113",
      "capsule_id": "dragon1",
      "status": "active",
      "original_launch": "2017-08-14T16:31:00.000Z",
      "original_launch_unix": 1502728260,
      "missions": [
        {
          "name": "CRS-12",
          "flight": 45
        }
      ],
      "landings": 1,
      "type": "Dragon 1.1",
      "details": "The last newly manufactured Dragon 1",
      "reuse_count": 0
    },
    {
      "capsule_serial": "C201",
      "capsule_id": "dragon2",
      "status": "active",
      "original_launch": null,
      "original_launch_unix": null,
      "missions": [],
      "landings": 0,
      "type": "Dragon 2.0",
      "details": "Pressure vessel used for Dragon 2 structural testing. Rumored to be repurposed for first Red Dragon Mission",
      "reuse_count": 0
    },
    {
      "capsule_serial": "C202",
      "capsule_id": "dragon2",
      "status": "active",
      "original_launch": null,
      "original_launch_unix": null,
      "missions": [],
      "landings": 0,
      "type": "Dragon 2.0",
      "details": "Capsule used to qualify Dragon 2's environmental control and life support systems.",
      "reuse_count": 0
    },
    {
      "capsule_serial": "C203",
      "capsule_id": "dragon2",
      "status": "active",
      "original_launch": null,
      "original_launch_unix": null,
      "missions": [],
      "landings": 0,
      "type": "Dragon 2.0",
      "details": "Rumored to be used for Inflight Abort Test after DM-1",
      "reuse_count": 0
    },
    {
      "capsule_serial": "C204",
      "capsule_id": "dragon2",
      "status": "active",
      "original_launch": null,
      "original_launch_unix": null,
      "missions": [],
      "landings": 0,
      "type": "Dragon 2.0",
      "details": "Currently in construction for use in DM-2",
      "reuse_count": 0
    },
    {
      "capsule_serial": "C205",
      "capsule_id": "dragon2",
      "status": "active",
      "original_launch": null,
      "original_launch_unix": null,
      "missions": [],
      "landings": 0,
      "type": "Dragon 2.0",
      "details": "In construction for use in first mission in contract under the CCtCap contract",
      "reuse_count": 0
    }
  ]
  
const landingDetails = [
    {
      "id": "LZ-1",
      "full_name": "Landing Zone 1",
      "status": "active",
      "location": {
        "name": "Cape Canaveral",
        "region": "Florida",
        "latitude": 28.485833,
        "longitude": -80.544444
      },
      "landing_type": "RTLS",
      "attempted_landings": 10,
      "successful_landings": 10,
      "wikipedia": "https://en.wikipedia.org/wiki/Landing_Zones_1_and_2",
      "details": "SpaceX's first east coast landing pad is Landing Zone 1, where the historic first Falcon 9 landing occurred in December 2015. LC-13 was originally used as a launch pad for early Atlas missiles and rockets from Lockheed Martin. LC-1 was later expanded to include Landing Zone 2 for side booster RTLS Falcon Heavy missions, and it was first used in February 2018 for that purpose."
    },
    {
      "id": "LZ-2",
      "full_name": "Landing Zone 2",
      "status": "active",
      "location": {
        "name": "Cape Canaveral",
        "region": "Florida",
        "latitude": 28.485833,
        "longitude": -80.544444
      },
      "landing_type": "RTLS",
      "attempted_landings": 1,
      "successful_landings": 1,
      "wikipedia": "https://en.wikipedia.org/wiki/Landing_Zones_1_and_2",
      "details": "SpaceX's first east coast landing pad is Landing Zone 1, where the historic first Falcon 9 landing occurred in December 2015. LC-13 was originally used as a launch pad for early Atlas missiles and rockets from Lockheed Martin. LC-1 was later expanded to include Landing Zone 2 for side booster RTLS Falcon Heavy missions, and it was first used in February 2018 for that purpose."
    },
    {
      "id": "LZ-4",
      "full_name": "Landing Zone 4",
      "status": "active",
      "location": {
        "name": "Vandenberg Air Force Base",
        "region": "California",
        "latitude": 34.632989,
        "longitude": -120.615167
      },
      "landing_type": "RTLS",
      "attempted_landings": 1,
      "successful_landings": 1,
      "wikipedia": "https://en.wikipedia.org/wiki/Vandenberg_AFB_Space_Launch_Complex_4#LZ-4_landing_history",
      "details": "SpaceX's west coast landing pad. The pad is adjacent to SLC-4E, SpaceX's west coast launch site. The pad was under construction for about a year starting in 2016. After concerns with seal mating season, this pad was first used for the SAOCOM 1A mission in October 2018. Officially referred to as LZ-4 in FCC filings."
    },
    {
      "id": "OCISLY",
      "full_name": "Of Course I Still Love You",
      "status": "active",
      "location": {
        "name": "Port Canaveral",
        "region": "Florida",
        "latitude": 28.4104,
        "longitude": 80.6188
      },
      "landing_type": "ASDS",
      "successful_landings": 13,
      "attempted_landings": 16,
      "wikipedia": "https://en.wikipedia.org/wiki/Autonomous_spaceport_drone_ship",
      "details": "The second ASDS barge, Of Course I Still Love You (OCISLY), had been under construction in a Louisiana shipyard since early 2015 using a different hull—Marmac 304—in order to service launches on the east coast. It was built as a replacement for the first Just Read the Instructions and entered operational service for Falcon 9 Flight 19 in late June 2015. As of June 2015, its home port was Jacksonville, Florida, but after December 2015, it was transferred 160 miles (260 km) further south, at Port Canaveral. While the dimensions of the ship are nearly identical to the first ASDS, several enhancements were made including a steel blast wall erected between the aft containers and the landing deck. The ship was in place for a first-stage landing test on the CRS-7 mission, which failed on launch on 28 June 2015. On 8 April 2016 the first stage, which launched the Dragon CRS-8 spacecraft, successfully landed for the first time ever on OCISLY, which is also the first ever drone ship landing. In February 2018, the Falcon Heavy Test Flight's central core exploded upon impact next to OCISLY that damaged two of the four thrusters on the drone ship. Two thrusters were removed from the Marmac 303 barge in order to repair OCISLY."
    },
    {
      "id": "JRTI",
      "full_name": "Just Read The Instructions",
      "status": "active",
      "location": {
        "name": "Port of Los Angeles",
        "region": "California",
        "latitude": 33.7291858,
        "longitude": -118.262015
      },
      "landing_type": "ASDS",
      "successful_landings": 5,
      "attempted_landings": 6,
      "wikipedia": "https://en.wikipedia.org/wiki/Autonomous_spaceport_drone_ship",
      "details": "The third ASDS barge, using the Marmac 303 hull, was built during 2015 in a Louisiana shipyard, and the barge transited the Panama Canal in June 2015 carrying its wing extensions as cargo on the deck because the ASDS, when complete, would be too wide to pass through the canal. The home port for the Marmac 303 is the Port of Los Angeles, at the AltaSea marine research and business campus in San Pedro's outer harbor. The landing platform and tender vessels began docking there in July 2015 in advance of the main construction of AltaSea which is scheduled for 2017. SpaceX announced that the Marmac 303 would be the second ASDS to be named Just Read the Instructions (JRtI) in January 2016, shortly before its first use as a landing platform for Falcon 9 Flight 21. On 17 January 2016, JRtI was put to first use in an attempt to recover a Falcon 9 first-stage booster from the Jason-3 mission from Vandenberg. The booster successfully landed on the deck; however, a lockout collet failed to engage on one of the legs causing the rocket to tip over, exploding on impact with the deck.[23] On January 14, 2017, SpaceX launched Falcon 9 Flight 29 from Vandenberg and landed the first stage on the JRtI that was located about 370 km (230 mi) downrange in the Pacific Ocean, making it the first successful landing in the Pacific."
    },
    {
      "id": "JRTI-1",
      "full_name": "Just Read The Instructions V1",
      "status": "retired",
      "location": {
        "name": "Port Canaveral",
        "region": "Florida",
        "latitude": 28.4104,
        "longitude": 80.6188
      },
      "landing_type": "ASDS",
      "successful_landings": 0,
      "attempted_landings": 2,
      "wikipedia": "https://en.wikipedia.org/wiki/Autonomous_spaceport_drone_ship",
      "details": "The ASDS landing location for the first landing test was in the Atlantic approximately 200 miles (320 km) northeast of the launch location at Cape Canaveral, and 165 miles (266 km) southeast of Charleston, South Carolina. SpaceX's Just Read the Instructions, based on the Marmac 300 deck barge, in position for a landing test on Falcon 9 Flight 17 in April 2015. On 23 January 2015, during repairs to the ship following the unsuccessful first test, Musk announced that the ship was to be named Just Read the Instructions, with a sister ship planned for west coast launches to be named Of Course I Still Love You. On 29 January, SpaceX released a manipulated photo of the ship with the name illustrating how it would look once painted. Both ships are named after two General Contact Units, spaceships commanded by autonomous artificial intelligences, that appear in The Player of Games, a Culture novel by Iain M. Banks. The first Just Read the Instructions was retired in May 2015 after approximately six months of service in the Atlantic, and its duties were assumed by Of Course I Still Love You. The former ASDS was modified by removing the wing extensions that had extended the barge surface and the equipment (thrusters, cameras and communications gear) that had been added to refit it as an ASDS; these items were saved for future reuse."
    },
    {
      "id": "ASOG",
      "full_name": "A Shortfall of Gravitas",
      "status": "under construction",
      "location": {
        "name": "Port Canaveral",
        "region": "Florida",
        "latitude": 28.4104,
        "longitude": 80.6188
      },
      "landing_type": "ASDS",
      "successful_landings": 0,
      "attempted_landings": 0,
      "wikipedia": "https://en.wikipedia.org/wiki/Autonomous_spaceport_drone_ship",
      "details": "The fourth ASDS barge was announced to be under construction in February 2018 and it will become the second active east coast-based ASDS. It will be homeported at Port Canaveral. This future simultaneously usable ASDS, along with OCISLY, is called A Shortfall of Gravitas (ASoG) and like the rest of the fleet, its naming is based on names used in the Culture series. The droneship is expected to be operational in mid-2019."
    }
  ]
app.get('/getAllCapsules', async (req, res) => {
    const rows = await dbPool.query('SELECT * FROM spaceData');
    res.status(200);
    res.send(allCapsules);
});

app.get('/launchpads/:id', (req, res) => {
    const id = req.params.id
    const lunchpadDetail = Object.values(landingDetails).filter(detail => detail.id === id);
    res.status(200);
    res.send({ data: lunchpadDetail});
});

app.listen('4000');
console.log(`Listening on port: 4000, wait for the development server to be up...`);