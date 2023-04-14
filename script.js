// 
//     "apiEndpoint": "https://api.astronomyapi.com",
//     "appId": "27e1b370-1191-4049-898d-c2e0763bcc6b",
//     "appSecret": "f0d5cc795d53b74e178dd253d99c9c34f80a378e0cfe9409ea5a79891ac25a2c114726d64781b1f714aae37c6ce5c4da731dc17ab9e6dcebe4e804f29bd14224d1a131302435e58d0f1dfad737e3ef8188ac3b96d34bb7ff5f62b3b471da3cc34e6daadce354a221b639a4b2a2f75978"
//   }

// fetch(`${Config.apiEndpoint}/api/v2/studio/star-chart`,)

//             `${Config.apiEndpoint}/api/v2/studio/star-chart`,
//             {
//               style: this.style,
//               observer: {
//                 latitude: this.latitude,
//                 longitude: this.longitude,
//                 date: moment(this.date).format("YYYY-MM-DD"),
//               },
//               view: {
//                 type: this.type,
//                 parameters,
//               },
//             },
//             {
//               headers: {
//                 "X-Requested-With": "XMLHttpRequest",
//                 Authorization: `Basic ${btoa(
//                   `${Config.appId}:${Config.appSecret}`
//                 )}`,
//               },
//             }
//           )
//           .then((response) => {
//             this.imageUrl = response.data.data.imageUrl;
//             this.loading = false;
//           });

//  Code from Steven
const astroApiSecret = '6f14831c8a735ba5d7c78419de6f4bd9a270586412858868719ccdb6c3ddf7f6f70d3f443c9b23b35acecacdadd9f74cefc634489ee774930c3150d63b1116b8ffd176c694ec0c8c9288fb86cd4c9fa84c3a7cf78d1f501292fe3eb8113b32dc19816d4f77e35c4977b00a527d9bc829'
const astroApiId = '1ef02872-a5fd-4790-bebe-b572308c9bb6'
const hash = btoa(`${astroApiId}:${astroApiSecret}`);

var latLong = 'longitude=-84.39733&latitude=33.775867'
var elevation = 'elevation=50'
var fromDate = 'from_date=2022-01-12'
var toDate = 'to_date=2022-01-13'
var time = 'time=20:00:00'


//  const getAstro1 = async() =>{
//   const response = await fetch('https://salty-mountain-68764.herokuapp.com/https://api.astronomyapi.com/api/v2/bodies/')
//   {
//      headers: new Headers(
//        {
//          "X-Requested-With": "XMLHttpRequest",
//          Authorization: `Basic ${hash}`
//      }

// ​
//    if(response.status===200){
//          const data = await response.json()
//          console.log(data)
//  }
//  }
// ​
//  getAstro1()

const appId = "27e1b370-1191-4049-898d-c2e0763bcc6b"
const appSecret = "f0d5cc795d53b74e178dd253d99c9c34f80a378e0cfe9409ea5a79891ac25a2c114726d64781b1f714aae37c6ce5c4da731dc17ab9e6dcebe4e804f29bd14224d1a131302435e58d0f1dfad737e3ef8188ac3b96d34bb7ff5f62b3b471da3cc34e6daadce354a221b639a4b2a2f75978"

var requestUrl = new URL("https://api.astronomyapi.com/api/v2/bodies/positions")
// I used the values from your variables here as strings.

var params = {
    longitude: "-84.39733",
    latitude: "33.775867",
    elevation: "50",
    from_date: "2022-01-12",
    to_date: "2022-01-13",
    time: "20:00:00",
  }
 Object.keys(params).forEach(key => requestUrl.searchParams.append(key, params[key]))

function getAstro() {
    fetch( 'https://salty-mountain-68764.herokuapp.com/' + requestUrl ,
{       
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                Authorization: `Basic ${btoa(
                    `${appId}:${appSecret}`
                )}`,
            }
        })
        .then(function (response) {
            console.log("outer response", response);
            if (response.ok) {
                console.log("response",response);
            }
            return response.json()
        })
        .then(function (data) {
            console.log("data",data);
            // console.log('body position');
            // console.log(data.body.position);


        });

}

getAstro()