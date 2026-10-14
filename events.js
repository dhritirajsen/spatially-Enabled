// Try to maintain the json schema for easy maintanence.


const EventDetails = [
    {
        "event_name": "Building beyond land: An overview of coastal land reclamation in 16 global megacities",
        "year_Publish" : "2018",        
        "link": "https://www.sciencedirect.com/science/article/abs/pii/S0143622817305313",
    
        "event_description": ""
        
    
    },

    {
        "event_name": "Landuse Sustainability of Agricultural Zones",
        "year_Publish" : "2018",        
        "link": "https://link.springer.com/chapter/10.1007/978-981-10-5927-8_6",
    
        "event_description": ""
        
    
    },

    {
        "event_name": "Urban Land Use Land Cover Change",
        "year_Publish" : "2018",        
        "link": "https://link.springer.com/chapter/10.1007/978-981-10-5927-8_9",
    
        "event_description": ""
        
    
    },
    {
        "event_name": "Changing urban green spaces in Shanghai: trends, drivers and policy implications",
        "year_Publish" : "2019",        
        "link": "https://www.sciencedirect.com/science/article/abs/pii/S0264837719300651",
    
        "event_description": ""
    
    },
    {
        "event_name": "Mapping Trajectories of Coastal Land Reclamation in Nine Deltaic Megacities using Google Earth Engine",
        "year_Publish" : "2019",        
        "link": "https://www.mdpi.com/2072-4292/11/22/2621",
    
        "event_description": ""
    },
    {
        "event_name": "Gaining or losing ground? Tracking Asia's hunger for ‘new’ coastal land in the era of sea level rise",
        "year_Publish" : "2020",        
        "link": "https://www.sciencedirect.com/science/article/abs/pii/S0048969720328072",
    
        "event_description": ""
    },
    {
        "event_name": "An Analysis of Long-Term Rainfall Trends and Variability in the Uttarakhand Himalaya Using Google Earth Engine",
        "year_Publish" : "2020",        
        "link": "https://www.mdpi.com/2072-4292/12/4/709",
    
        "event_description": ""
    },
    {
        "event_name": "“Whenever they say eco, they plant trees”: China’s flagship eco-cities as a model and the shades of eco-urbanism",
        "year_Publish" : "2020",        
        "link": "https://papersearch.net/thesis/article.asp?key=3850405",
    
        "event_description": ""

    },
    {
        "event_name": "ARTIFICIAL INTELLIGENCE AND QUANTUM COMPUTING FOR A SMARTER WIRELESS NETWORK",
        "year_Publish" : "2020",        
        "link": "http://www.jcreview.com/fulltext/197-1594815186-adt-1.pdf",
    
        "event_description": ""

    },
    {
        "event_name": "Global offshore wind turbine dataset",
        "year_Publish" : "2021",        
        "link": "https://www.nature.com/articles/s41597-021-00982-z",
    
        "event_description": ""
    
    },
    {
        "event_name": "Sources of sediment in tidal flats off Zhejiang coast, southeast China",
        "year_Publish" : "2021",        
        "link": "https://link.springer.com/article/10.1007/s00343-020-0179-2",
    
        "event_description": ""
    },
    {
        "event_name": "Tracking changes in aquaculture ponds on the China coast using 30 years of Landsat images",
        "year_Publish" : "2021",        
        "link": "https://www.sciencedirect.com/science/article/pii/S0303243421000908",
    
        "event_description": ""
    },

	{
        "event_name": "Using Time-Series Remote Sensing Images in Monitoring the Spatial–Temporal Dynamics of LULC in the Msimbazi Basin, Tanzania",
        "year_Publish" : "2021",        
        "link": "https://www.mdpi.com/2073-445X/10/11/1139",
    
        "event_description": ""
    },

	{
        "event_name": "Tracking 21st century climate dynamics of the Third Pole: An analysis of topo-climate impacts on snow cover in the central Himalaya using Google Earth Engine",
        "year_Publish" : "2021",        
        "link": "https://www.sciencedirect.com/science/article/pii/S0303243421001975",
    
        "event_description": ""
    },
	{
        "event_name": "Accurate mapping of Chinese coastal aquaculture ponds using biophysical parameters based on Sentinel-2 time series images",
        "year_Publish" : "2022",        
        "link": "https://www.sciencedirect.com/science/article/pii/S0025326X22005835",
    
        "event_description": ""
    },
	{
        "event_name": "Mapping the rapid development of photovoltaic power stations in northwestern China using remote sensing",
        "year_Publish" : "2022",        
        "link": "https://www.sciencedirect.com/science/article/pii/S2352484722005935",
    
        "event_description": ""
    },
    {
        "event_name": "Mapping 21st century global coastal land reclamation",
        "year_Publish" : "2023",
        "link": "https://doi.org/10.1029/2022EF002927",

        "event_description": "Earth's Future"
    },

]

function escapeHtml(text) {
    return String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// Fills the year dropdown from the data above, newest year first.
function initEvents() {
    const years = [...new Set(EventDetails.map((e) => e.year_Publish).filter(Boolean))].sort().reverse();
    document.getElementById("eventSelect").innerHTML =
        `<option value="all" selected>All years</option>` +
        years.map((y) => `<option value="${y}">${y}</option>`).join("");
    viewEvent();
}

function viewEvent() {
    const eventSelect = document.getElementById("eventSelect").value;
    const matches = EventDetails
        .filter((val) => eventSelect === "all" || eventSelect === val.year_Publish)
        .sort((a, b) => b.year_Publish.localeCompare(a.year_Publish));

    if (matches.length === 0) {
        document.getElementById("eventContent").innerHTML = `<p>No publications found for <u>${escapeHtml(eventSelect)}</u></p>`;
        return;
    }
    document.getElementById("eventContent").innerHTML = matches.map((val) => `
        <div class="col-sm-4 eachEvent">
            <h1 class="event_month">${escapeHtml(val.year_Publish)}</h1>
            <a href="${escapeHtml(val.link)}"><h1 class="event_name">${escapeHtml(val.event_name)}</h1></a>
            <p class="event_description">${escapeHtml(val.event_description)}</p>
        </div>`).join("");
}
