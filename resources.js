/*Keep the key as mentioned below while adding resources
        "resourceImageLink": "",
        "resourceTitle": "",
        "resourceDescription": "",
        "resourceLink": "",
        "resourceFooter": ""
   Optional: "resourceFallbackImage" is shown if the main image cannot load.
   To use a real photo for a card, upload it to image/resource/ and put its path in "resourceImageLink".
*/

const resourceDetails = [
    {
        "resourceImageLink": "./image/resource/CFC_1.jpg",
        "resourceTitle": "Code for Climate",
        "resourceDescription": "According to latest study, the intensity of change in our local climate has changed tremendously. How to act with data science? This session focused on the available tools of advanced geospatial technology enabling everyone to understand and communicate climate change by applying geo data science and Earth Observation techniques",
        "resourceLink": "https://github.com/dhritirajsen/code_for_climate",
        "resourceFooter": "CFC_1"
    },
    {
        "resourceImageLink": "./image/resource/CFC_2.jpg",
        "resourceTitle": "Code For Climate 2.0",
        "resourceDescription": "This session of code for climate focused on the basics on satellite image interpreation and calculation of vegetation indices using Python",
        "resourceLink": "https://www.smartshanghai.com/event/67450",
        "resourceFooter": "CFC_2"
    },
    {
        "resourceImageLink": "./image/resource/climate.jpg",
        "resourceTitle": "Shanghai Climate Action Conference 2021",
        "resourceDescription": "Green Initiatives hosted the Climate Action Conference Shanghai with support from PwC China, The United States Consulate General, The British Consulate General, Australian Consulate-General, The Norwegian Consulate General and Consulate-General of the Kingdom of the Netherlands. I was fortunate enough to moderate the panel discussion on Solutions Towards Carbon Emissions",
        "resourceLink": "https://greeninitiatives.cn/event/forum-pwc-sep2021/",
        "resourceFooter": "climate"
    },
    {
        "resourceImageLink": "./image/resource/movie.jpg",
        "resourceTitle": "The Year Earth Changed : Green Initiatives August Film Screening",
        "resourceDescription": "I was invited as a guest speaker to connect with common people at Green Initiatives' 133rd film screening, “The Year Earth Changed” a special feature to reflect on nature’s resiliency and some of the lessons learned from global lockdowns.",
        "resourceLink": "https://learn.seedsofchange.tech/sessions/60ffabfcaa14b4001a8acad5",
        "resourceFooter": "movie"
    },
    {
        "resourceImageLink": "./image/resource/cv/delhi-gee-workshop.png",
        "resourceTitle": "IGU-YECG Introduction to Google Earth Engine Training Workshop",
        "resourceDescription": "A hands-on training workshop on Google Earth Engine for Earth Observation, held at the Delhi School of Economics, New Delhi, with the IGU Young Early Career Geographers.",
        "resourceLink": "https://igu.younggeographers.org/event/igu-yecg-introduction-google-earth-engine-gee-training-workshop/",
        "resourceFooter": "delhi"
    },
    {
        "resourceImageLink": "https://img.youtube.com/vi/xqyUrPyT0QQ/hqdefault.jpg",
        "resourceFallbackImage": "./image/resource/cv/cloud-webinar.png",
        "resourceTitle": "Webinar: cloud computing for remote sensing",
        "resourceDescription": "An online webinar on the basics of cloud computing for remote sensing applications using Google Earth Engine.",
        "resourceLink": "https://www.youtube.com/watch?v=xqyUrPyT0QQ",
        "resourceFooter": "webinar"
    },
    {
        "resourceImageLink": "https://img.youtube.com/vi/25mg9xKnT1s/hqdefault.jpg",
        "resourceFallbackImage": "./image/resource/cv/stand-stories.png",
        "resourceTitle": "Interview with Stand Stories",
        "resourceDescription": "I was invited for a video interview by the founder of Stand Stories.",
        "resourceLink": "https://www.youtube.com/watch?v=25mg9xKnT1s",
        "resourceFooter": "standstories"
    },
    {
        "resourceImageLink": "./image/resource/cv/fiu-lecture.png",
        "resourceTitle": "Guest lecture: Cities from the sea",
        "resourceDescription": "An introduction to coastal land reclamation, delivered as a virtual guest lecture to the Department of Global and Sociocultural Studies, Steven J. Green School of International and Public Affairs, Florida International University, USA.",
        "resourceLink": "",
        "resourceFooter": "fiu"
    },
    {
        "resourceImageLink": "./image/resource/cv/gauhati-lecture.png",
        "resourceTitle": "Guest lecture: Code for Climate at Gauhati University",
        "resourceDescription": "A virtual guest lecture on getting started with planetary-scale analysis with Google Earth Engine, for the Department of Geography, Gauhati University, India.",
        "resourceLink": "https://github.com/dhritirajsen/code_for_climate",
        "resourceFooter": "gauhati"
    },
    {
        "resourceImageLink": "./image/resource/cv/wolverhampton-lecture.png",
        "resourceTitle": "Guest lecture: Geography Theory and Practice",
        "resourceDescription": "A virtual guest lecture for the BSc (Hons) Geography, Urban Environments and Climate Change course, School of Architecture and Built Environment, University of Wolverhampton, UK.",
        "resourceLink": "",
        "resourceFooter": "wolverhampton"
    },
    {
        "resourceImageLink": "./image/resource/cv/nasa-shanghai.png",
        "resourceTitle": "NASA Earth Observatory: The Expansion of Shanghai",
        "resourceDescription": "A NASA Earth Observatory feature on the expansion of Shanghai.",
        "resourceLink": "https://earthobservatory.nasa.gov/images/145968/the-expansion-of-shanghai",
        "resourceFooter": "nasa-shanghai"
    },
    {
        "resourceImageLink": "./image/resource/cv/nasa-jakarta.png",
        "resourceTitle": "NASA Earth Observatory: As Jakarta grows, so do the water issues",
        "resourceDescription": "A NASA Earth Observatory feature on Jakarta's growth and its water issues.",
        "resourceLink": "https://earthobservatory.nasa.gov/images/148303/as-jakarta-grows-so-do-the-water-issues",
        "resourceFooter": "nasa-jakarta"
    },
    {
        "resourceImageLink": "./image/resource/cv/shanghai-garbage-sorting.png",
        "resourceTitle": "Shanghai garbage sorting initiative",
        "resourceDescription": "News coverage of the Shanghai garbage sorting initiative.",
        "resourceLink": "https://www.shine.cn/news/metro/1906066162/",
        "resourceFooter": "garbage"
    },
    {
        "resourceImageLink": "./image/resource/cv/uct-gee-workshop.png",
        "resourceTitle": "Workshop: Getting started with Google Earth Engine",
        "resourceDescription": "A workshop delivered during my research traineeship at the Department of Environmental and Geographical Sciences, University of Cape Town, South Africa, in 2018.",
        "resourceLink": "",
        "resourceFooter": "uct"
    }
]

function Resources() {
    //document.getElementById("lastUpdated").innerHTML="Updated On 2021/05/01";
    document.getElementById("mapResources").innerHTML =
        resourceDetails.map((eachResource) => {
            const fallback = eachResource.resourceFallbackImage
                ? `onerror="this.onerror=null;this.src='${eachResource.resourceFallbackImage}'"` : "";
            const card = `
                     <div class="blog-id">
                       <div class="blog-id-content">
                        <img style="padding:0px" src="${eachResource.resourceImageLink}" width="100%" height="auto" alt="${eachResource.resourceTitle}" loading="lazy" ${fallback}>
                        <h3 style="font-family: Georgia, 'Times New Roman', Times, serif;color:black">${eachResource.resourceTitle}</h3>
                        <p style="font-family: 'Times New Roman', Times, serif;">${eachResource.resourceDescription}</p>
                        </div>
                    </div>`;
            // Cards without a link are shown as plain cards (no clickable area).
            return `<div class="col-sm-4">${eachResource.resourceLink ? `<a href="${eachResource.resourceLink}">${card}</a>` : card}</div>`;
        }).join("");
}
