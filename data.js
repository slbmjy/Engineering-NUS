var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.00011782629999856908,
        "pitch": 0,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -0.7456077854539949,
          "pitch": -0.033235198581998304,
          "rotation": 6.283185307179586,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7583401700330406,
          "pitch": 0.05956112593300311,
          "title": "Welcome to FoE!",
          "text": "NUS is fun!"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.5049016593132478,
        "pitch": -0.15824817475090214,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": 0.10847436909848263,
          "pitch": -0.029072014695202597,
          "rotation": 0,
          "target": "2-engineering-auditorium-atrium"
        },
        {
          "yaw": -1.0410445997874298,
          "pitch": 0.01007173690065244,
          "rotation": 10.995574287564278,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.4191408233083056,
          "pitch": 0.09228668503263293,
          "title": "Engineering Auditorium",
          "text": "This is where Engineering students hang out."
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3687812585745385
      },
      "linkHotspots": [
        {
          "yaw": -3.1409415022271396,
          "pitch": 0.032351739629760345,
          "rotation": 0,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.07643805576451079,
          "pitch": 0.04695843717476933,
          "title": "Inside the Auditorium",
          "text": "What a conducive study space!"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
