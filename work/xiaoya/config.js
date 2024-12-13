let topTitleDiv = "<h4>GSAPP-CDP | Explore, Explain, Propose </h4>";

let titleDiv =
  "<h1>Different LIFESPAN INDEX in different areas</h1>";

let bylineDiv = "<p>By Xiaoya Wang</p><p>Instructor: Laura Kurgan &nbsp;&nbsp;&nbsp;Snoweria Zhang</p>";

let descriptionDiv =
  '<p>Hypothesis: Regional variations in life expectancy are significantly influenced by socioeconomic factors such as income inequality, housing stability, and access to healthcare, with these factors interacting differently across different areas at different levels.</p>' +
  '<p>LifeSpan Index focuses on the development of a index about Life Expectancy, one metric rarely explored compared to other indices. Life expectancy is typically derived from local demographic data using established formulas. The project aims to investigate how various factors influence life expectancy across different regions, leading to distinct regional variations in the index. By analyzing these differences, the project seeks to uncover correlations between life expectancy and socioeconomic factors, providing a comprehensive understanding of the disparities and drivers shaping life expectancy across diverse areas.</p>' +
  "<p>In this project, a spatial correlation algorithm is used to assess spatial similarities at states and census tracts level, identifying areas with comparable life expectancy values. These areas are then analyzed in depth to explore the correlations between various factors and life expectancy. Other two algorithms called Multiple Linear Regression and Pearson Correlation Analysis are utilized to filter the factors and calculate the extent of influence on life expectancy and correlation bewtween factors and life expectancy.</p>" +
  "<p>&nbsp;</p>"+
  '<p style="text-align:center">Scroll to continue<br>▼</p>';

let footerDiv =
  '<p>Source: <a href="https://data2.nhgis.org/main">https://data2.nhgis.org/main</a> &nbsp;Datasets on socioeconomic factors by census tracts</p><p> &nbsp;<a href="https://www.cdc.gov/nchs/data-visualization/life-expectancy/index.html">https://www.cdc.gov/nchs/data-visualization/life-expectancy/index.html</a> &nbsp;Life expectancy by states and census tracts</p><p> &nbsp;<a href="https://pysal.org/esda/notebooks/spatialautocorrelation.html">https://pysal.org/esda/notebooks/spatialautocorrelation.html</a> &nbsp;Spatial Autocorrelation algorithm</p><p> &nbsp;<a href="https://earth.google.com/web/@36.17077544,-86.79908236,145.43650836a,21183.13467164d,30y,63.75262585h,0.35335767t,-0r/data=CgRCAggBOgMKATBCAggASg0I____________ARAA">Google Earth</a></p><p>Precedent: <a href="https://www.oecdbetterlifeindex.org/#/11111111111">https://www.oecdbetterlifeindex.org/#/11111111111</a> &nbsp;OECD Better Life Index</p>' +
  '<p><a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a> | <a href="https://brown.columbia.edu">The Brown Institute for Media Innovation</a></p>';

let divChapter2 =
  "<h3>Life expectancy by states in U.S.</h3>" +
  "<p>Life expectancy varies significantly across different states in the U.S. Some states have higher averages, reflecting healthier living conditions, while others experience lower life expectancies. These differences highlight the wide gap in life expectancy across the country.</p>";

let divChapter4 =
  "<h3 style='max-width:600px; margin-left:auto; margin-right:auto'>Clusters of states with high values and states with low values in U.S.</h3>" +
  '<p class="imageCredit" ><a href="https://pysal.org/esda/notebooks/spatialautocorrelation.html">Spatial Autocorrelation</a></p>'+
  '<div style="max-width:1200px; margin-left:auto; margin-right:auto"><img src="image/cluster.png"></div>' +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>Spatial autocorrelation algorithm is utilized to calculate the spatial similarity in life expectancy at states level. It identifies areas that share the same borders or same vertices as neighbors, and then compares the life expectancy of a region with that of its neighbors. It divides the spatial aggregation types into four types —— High-High Clustering (Hotspot), Low-High Clustering (Doughnut Pattern), Low-Low Clustering (Coldspot), and High-Low Clustering (Isolated High Value).</p>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>Through calculation, I find that there is a phenomenon of regional aggregation. We could get one cluster of states with high life expectancy and one cluster of states with low life expectancy. It is evident that the life expectancy varies largely in different areas across one state.</p>" +
  "<p style='max-width:600px; margin-left:auto; margin-right:auto'>Next step is to analyze one state that belongs to these clusters separately.</p>" 

let divChapter5 =
  "<h3>Life expectancy in Tennessee state by census tracts</h3>" +
  "<p>Tennessee state is a part of a broader low-value cluster shared with neighboring states. Tennessee is centrally located within the low-life-expectancy cluster in the southeastern United States. Its position may make it representative of broader regional patterns. Besides, by analyzing Tennessee's situation, the research findings can be extended to other cold spot regions, providing broader policy recommendations or improvement strategies.</p>"+
  "<p>One algorithm called multiple linear regression is used to selected all the factors that are correlated to life expectancy in this area. Multiple Linear Regression (MLR) is a statistical method used to model the relationship between one dependent variable (also called the response variable) and two or more independent variables.</p>"+
  '<div style="max-width:900px; margin-left:auto; margin-right:auto"><img src="image/Whole Tennessee.png"></div>'+
  '<div style="max-width:900px; margin-left:auto; margin-right:auto"><img src="image/chart1.png"></div>'+
  "<p>If R-squared = 0.66, it means that the model explains 66% of the variance in the dependent variable Life Expectancy. In other words, the independent variables in the model (such as income, insurance coverage, etc.) collectively account for most of the variation in Life Expectancy.</p>"+
  "<p>Then one algorithm called Pearson Correlation is introduced to calculate the value of correlation. It calculates the correlation coefficient and significance level. We can say that the relationship is statistically significan when significance level < 0.05. The factor with the highest impact on life expectancy (measured by the change in life expectancy for each percentage increase) is the proportion of female-headed households. Across the state of Tennessee, the factor most strongly correlated with life expectancy is the proportion of lower-value homes, followed by per capita income.</p>"+
  '<div style="max-width:900px; margin-left:auto; margin-right:auto"><img src="image/chart2.png"></div>';

let divChapter6 =
  "<h3>Spatial similarity in life expectancy across census tracts</h3>" +
  '<p class="imageCredit"><a href="https://pysal.org/esda/notebooks/spatialautocorrelation.html">Spatial Autocorrelation</a></p>' +
  "<p>Next the spatial autocorrelation algorithm is used again to analyze the Tennessee state but at census tracts level. It can be seen that the regional aggregation within the state is obvious, and there are multiple clusters of census tracts with high life expectancy and low life expectancy.</p>";

let divChapter7 =
  '<h3><span style="display: inline-block; width: 12px; height: 12px; background-color: #2b70b1; margin-left: 5px; opacity: 0.8"></span> Clusters of census tracts with higher life expectancy around Nashville</h3>' +
  '<div style="width:250px; margin-left:2%; margin-right:auto"><img src="image/cluster1.png"></div>'+
  "<p>This cluster is located around the Nashville city, which is the capital of the U.S. state of Tennessee. Nashville is the most populous city in the U.S. state of Tennessee. This city is the center of the Nashville metropolitan area, and is one of the fastest growing in the nation.</p>"+
  '<div style="width:350px; margin-left:-6%; margin-right:auto"><img src="image/chart_cluster1_2.png"></div>'+
  "<p>Except for the common factors that related to life expectancy such as poverty and education, the extent of influence of the factor driving alone to work is very high, which is not reflected in the LifeSpan Index of the whole Tennessee state. Besides, the factor about new building and house with high value also affect the level of life expectancy greatly.</p>";

  let divChapter11 =`
  <h3>
  <span style="display: inline-block; width: 12px; height: 12px; background-color: #2b70b1; margin-left: 5px; opacity: 0.8"></span>
  Clusters of census tracts with higher life expectancy around Nashville</h3>
  <div class="image-row">
    <a href="https://earth.google.com/web/@36.10686069,-86.81875426,187.17061759a,3999.52580384d,30.00000002y,0h,0t,0r/data=CgRCAggBMikKJwolCiExRzNLazRNaWNmOUJESm5wTTVIandCY29ybi1HX09TcDAgAToDCgEwQgIIAEoICN6Wyr0GEAE" target="_blank">
      <img src="image/map/image1.png" alt="Chapter Image 1">
    </a>
    <a href="https://earth.google.com/web/@36.12914423,-86.81147748,179.68694007a,1985.66443178d,30.00000002y,0h,0t,0r/data=CgRCAggBMikKJwolCiExRzNLazRNaWNmOUJESm5wTTVIandCY29ybi1HX09TcDAgAToDCgEwQgIIAEoICN6Wyr0GEAE" target="_blank">
      <img src="image/map/image2.png" alt="Chapter Image 2">
    </a>
    <a href="https://earth.google.com/web/@36.10420634,-86.86658264,154.55321878a,2554.95429604d,30.00000002y,-0h,0t,0r/data=CgRCAggBMikKJwolCiExRzNLazRNaWNmOUJESm5wTTVIandCY29ybi1HX09TcDAgAToDCgEwQgIIAEoICN6Wyr0GEAE" target="_blank">
      <img src="image/map/image3.png" alt="Chapter Image 3">
    </a>
    <a href="https://earth.google.com/web/@35.92486797,-86.86837769,204.26900094a,2522.2217777d,30.00000002y,0h,0t,0r/data=CgRCAggBMikKJwolCiExRzNLazRNaWNmOUJESm5wTTVIandCY29ybi1HX09TcDAgAToDCgEwQgIIAEoICN6Wyr0GEAE" target="_blank">
      <img src="image/map/image4.png" alt="Chapter Image 4">
    </a>
    <a href="https://earth.google.com/web/@36.22002488,-86.59268236,163.59640043a,2696.77431811d,30.00000002y,4.06995563h,0.63232505t,0r/data=CkYaQBI6CiUweDg4NjQ0MDFlY2JlZGY2YTc6MHhhZmIwM2E5OWI2YzA0ZWVlKhEzNi4yMjAwLCAtODYuNTk3MBgCIAFCAggBMikKJwolCiExRzNLazRNaWNmOUJESm5wTTVIandCY29ybi1HX09TcDAgAToDCgEwQgIIAEoICN6Wyr0GEAE" target="_blank">
      <img src="image/map/image5.png" alt="Chapter Image 5">
    </a>
    <a href="https://earth.google.com/web/@35.93929259,-86.40146333,172.17282103a,2265.34852326d,30.00000002y,4.06995328h,0.63228224t,-0r/data=CkYaQBI6CiUweDg4NjQ0MDFlY2JlZGY2YTc6MHhhZmIwM2E5OWI2YzA0ZWVlKhEzNi4yMjAwLCAtODYuNTk3MBgBIAFCAggBMikKJwolCiExRzNLazRNaWNmOUJESm5wTTVIandCY29ybi1HX09TcDAgAToDCgEwQgIIAEoICN6Wyr0GEAE" target="_blank">
      <img src="image/map/image6.png" alt="Chapter Image 6">
    </a>
  </div>
  <p class="imageCredit">Source: <em>Google Earth</em></p>
  <p>Most of the areas in this group are neighborhoods and communities. The images show many low-density residential areas, which are typically associated with a high proportion of single-occupancy vehicle commuting. The potential lack of public transportation may force residents to rely on private vehicles, leading to more sedentary behavior and higher carbon emissions, indirectly affecting health. The road network is dominated by local and residential streets, likely lacking convenient bike lanes or pedestrian infrastructure, further reinforcing car dependency. The region appears to be predominantly residential, with limited commercial or industrial presence. This may require residents to commute long distances to workplaces, aligning with the high proportion of single-occupancy vehicle commuting.</p>
  <p>The satellite images reveal a predominance of detached or semi-detached houses, often accompanied by large green spaces. This setup is typically correlated with higher property values. Besides, high-value residential areas often reflect higher economic levels. High-value housing areas often attract economically affluent residents. These families typically have higher education levels and health awareness, promoting healthier lifestyles.</p>
  `;

let divChapter8 =
  '<h3><span style="display: inline-block; width: 12px; height: 12px; background-color: #d33122; margin-left: 5px; opacity: 0.8"></span> Clusters of census tracts with lower life expectancy around Nashville</h3>' +
  '<div style="width:250px; margin-left:2%; margin-right:auto"><img src="image/cluster2.png"></div>'+
  '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  "<p>What is interesting is that this area is located in the center of Nashville city but it is an aggregation of coldspot census tracts, while the areas around the center have higher life expectancies. Besides, from this bar chart we can see that the factor per capita income has a negative correlation to life expectancy, which is abnormal. Also the life expectancy of this cluster is highly correlated to the condition of housing.</p>"+
  '<div style="width:350px; margin-left:-6%; margin-right:auto"><img src="image/chart_cluster2_2.png"></div>';

  let divChapter12 =`
  <h3>
  <span style="display: inline-block; width: 12px; height: 12px; background-color: #d33122; margin-left: 5px; opacity: 0.8"></span>
  Clusters of census tracts with lower life expectancy around Nashville
  </h3>
  <div class="image-row">
    <a href="https://earth.google.com/web/@36.17489446,-86.79014243,138.37635786a,2378.29203783d,30y,0.80509636h,1.02101438t,0r/data=CgRCAggBMikKJwolCiExRzNLazRNaWNmOUJESm5wTTVIandCY29ybi1HX09TcDAgAToDCgEwQgIIAEoICMfY6p8EEAE" target="_blank">
      <img src="image/map/image7.png" alt="Chapter Image 7">
    </a>
    <a href="https://earth.google.com/web/@36.16763003,-86.8099776,158.65143387a,1949.16193784d,30y,0.80509551h,1.13660923t,0r/data=CgRCAggBMikKJwolCiExRzNLazRNaWNmOUJESm5wTTVIandCY29ybi1HX09TcDAgAToDCgEwQgIIAEoICMfY6p8EEAE" target="_blank">
      <img src="image/map/image8.png" alt="Chapter Image 8">
    </a>
    <a href="https://earth.google.com/web/@36.19514722,-86.80308042,120.40949459a,4055.05896106d,30y,0.80509938h,1.13698478t,0r/data=CgRCAggBMikKJwolCiExRzNLazRNaWNmOUJESm5wTTVIandCY29ybi1HX09TcDAgAToDCgEwQgIIAEoICMfY6p8EEAE" target="_blank">
      <img src="image/map/image9.png" alt="Chapter Image 9">
    </a>
    <a href="https://earth.google.com/web/@36.21958738,-86.79263803,160.43018086a,7363.95571789d,30y,0.80510544h,1.13757485t,0r/data=CgRCAggBMikKJwolCiExRzNLazRNaWNmOUJESm5wTTVIandCY29ybi1HX09TcDAgAToDCgEwQgIIAEoICMfY6p8EEAE" target="_blank">
      <img src="image/map/image10.png" alt="Chapter Image 10">
    </a>
    <a href="https://earth.google.com/web/@36.1427275,-86.75008058,137.07914413a,2561.34111532d,35y,12.22715012h,0.1944661t,0r/data=CgRCAggBMikKJwolCiExRzNLazRNaWNmOUJESm5wTTVIandCY29ybi1HX09TcDAgAToDCgEwQgIIAEoICMfY6p8EEAE" target="_blank">
      <img src="image/map/image11.png" alt="Chapter Image 11">
    </a>
  </div>
  <p class="imageCredit">Source: <em>Google Earth</em></p>
  <p>The satellite images reveal a densely built environment with commercial, industrial, and residential zone, and urban centers often have a mix of high-income and low-income populations. A relatively high per capita income in the statistics might mask significant inequality. Besides, In central urban areas, a high cost of living might accompany higher incomes.</p>
  <p>Despite a higher overall per capita income, urban areas can have neighborhoods of concentrated poverty.</p>
`;

let divChapter9 =
  "<h3>Clusters of census tracts with higher life expectancy around Memphis</h3>" +
  '<img src="covidSubwayMap/images/Chapter_4_Image.jpg">' +
  '<p class="imageCredit"><a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">The New York Times</a></p>' +
  "<p>The South Bronx, perennially marred in social injustice, has also been hard hit during the current COVID-19 outbreak. The area's three main neighborhoods, Mott Haven, Melrose and Port Morris are mostly home to low-income families that have been forced to continue going to work, risking their health and that of their loved ones. Similarly to Jackson Heights in Queens, the areas subway stations have seen a smaller decrease in use than the rest of the city. Median household income in this area oscillates between $15,000 and $30,000.</p>";

var config = {
  style: "mapbox://styles/centrifuge1/cm40vq03e00lo01s08evo2ijb",
  accessToken: "pk.eyJ1IjoiY2VudHJpZnVnZTEiLCJhIjoiY20wdnZuNXJwMDZ2ejJxb2xyZXN1ZWprYSJ9.-ydDpcvn4PY8L_TNR474Sg",
  showMarkers: false,
  markerColor: "#3FB1CE",
  theme: "light",
  use3dTerrain: false,
  topTitle: topTitleDiv,
  title: titleDiv,
  subtitle: "",
  byline: bylineDiv,
  description: descriptionDiv,
  footer: footerDiv,
  chapters: [
    {
      id: "State_life",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter2,
      location: {
        center: [-110, 48],
        zoom: 3,
        zoomSmall: 9,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "State_life",
          opacity: 1,
          duration: 300,
      },
      () => {
        document.getElementById("lifeExpectancyStateLegend").style.display = "block";
        document.getElementById("coldspotLegend").style.display = "none";
        document.getElementById("hotCountyLegend").style.display = "none";
        document.getElementById("stateOutlineLegend").style.display = "none";
        document.getElementById("Tennessee").style.display = "none";
      }
      ],
      onChapterExit: [
        {
          layer: "State_life",
          opacity: 0,
          duration: 300,
        },
        () => {
          document.getElementById("lifeExpectancyStateLegend").style.display = "none";
        }
      ],
    },
    {
      id: "county",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter4,
      location: {
        center: [-95, 41],
        zoom: 4.2,
        zoomSmall: 14,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "hotspot selected1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "hot_county",
          opacity: 0.8,
          duration: 300,
        },
        {
          layer: "county_outline",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "cold_county",
          opacity: 0.8,
          duration: 300,
        },
        {
          layer: "State_life_outline2",
          opacity: 1,
          duration: 300,
        },
        () => {
          document.getElementById("lifeExpectancyStateLegend").style.display = "none";
          document.getElementById("coldspotLegend").style.display = "block";
          document.getElementById("hotCountyLegend").style.display = "block";
          document.getElementById("stateOutlineLegend").style.display = "block";
          document.getElementById("Tennessee").style.display = "none";
          document.getElementById("Census tracts clusters").style.display = "none";
        }
      ],
      onChapterExit: [
        {
          layer: "hot_county",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "cold_county",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "State_life_outline2",
          opacity: 0,
          duration: 300,
        },
        () => {
          document.getElementById("coldspotLegend").style.display = "none";
          document.getElementById("hotCountyLegend").style.display = "none";
          document.getElementById("stateOutlineLegend").style.display = "none";
        }
      ],
    },


    {
      id: "Tennessee",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter5,
      location: {
        center: [-86, 36],
        zoom: 7,
        zoomSmall: 14,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "county_outline",
          opacity: 0.8,
          duration: 300,
        },
        {
          layer: "tennessee",
          opacity: 0.8,
          duration: 300,
        },
        () => {
          document.getElementById("lifeExpectancyStateLegend").style.display = "none";
          document.getElementById("coldspotLegend").style.display = "none";
          document.getElementById("hotCountyLegend").style.display = "none";
          document.getElementById("stateOutlineLegend").style.display = "none";
          document.getElementById("Tennessee").style.display = "block";
          document.getElementById("Census tracts clusters").style.display = "none";
        }
      ],
      onChapterExit: [
        {
          layer: "tennessee",
          opacity: 0,
          duration: 300,
        },
        () => {
          document.getElementById("Tennessee").style.display = "none";
        }
      ],
    },
    {
      id: "cluster high low",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter6,
      location: {
        center: [-86, 36],
        zoom: 7,
        zoomSmall: 14,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "hot_census",
          opacity: 0.8,
          duration: 300,
        },
        {
          layer: "cold_census",
          opacity: 0.8,
          duration: 300,
        },
        {
          layer: "census tracts line",
          opacity: 0.7,
          duration: 300,
        },
        {
          layer: "census tracts outline",
          opacity: 0.7,
          duration: 300,
        },
        () => {
          document.getElementById("lifeExpectancyStateLegend").style.display = "none";
          document.getElementById("coldspotLegend").style.display = "none";
          document.getElementById("hotCountyLegend").style.display = "none";
          document.getElementById("stateOutlineLegend").style.display = "none";
          document.getElementById("Tennessee").style.display = "none";
          document.getElementById("Census tracts clusters").style.display = "block";
        }
      ],
      onChapterExit: [
        {
          layer: "hot_census",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "cold_census",
          opacity: 0,
          duration: 300,
        },
      ],
    },
    {
      id: "cluster high1",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter7,
      location: {
        center: [-86.9, 36],
        zoom: 9,
        zoomSmall: 14,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "hotspot selected1",
          opacity: 0.7,
          duration: 300,
        },
        {
          layer: "coldspot selected1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "census tracts line",
          opacity: 0.7,
          duration: 300,
        },
        {
          layer: "county_outline",
          opacity: 0.7,
          duration: 300,
        },
        {
          layer: "census tracts outline",
          opacity: 0.7,
          duration: 300,
        },
        () => {
          document.getElementById("lifeExpectancyStateLegend").style.display = "none";
          document.getElementById("coldspotLegend").style.display = "none";
          document.getElementById("hotCountyLegend").style.display = "none";
          document.getElementById("stateOutlineLegend").style.display = "none";
          document.getElementById("Tennessee").style.display = "none";
          document.getElementById("Census tracts clusters").style.display = "block";
        }
      ],
      onChapterExit: [
      ],
    },
    {
      id: "Paragraph1",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter11,
      location: {
        center: [-86.9, 36],
        zoom: 9,
        zoomSmall: 14,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "coldspot selected1",
          opacity: 0,
          duration: 300,
        },
        {
          layer: "hotspot selected1",
          opacity: 0.7,
          duration: 300,
        },
        {
          layer: "census tracts line",
          opacity: 0.7,
          duration: 300,
        },
        {
          layer: "county_outline",
          opacity: 0.7,
          duration: 300,
        },
        {
          layer: "census tracts outline",
          opacity: 0.7,
          duration: 300,
        },
        () => {
          document.getElementById("lifeExpectancyStateLegend").style.display = "none";
          document.getElementById("coldspotLegend").style.display = "none";
          document.getElementById("hotCountyLegend").style.display = "none";
          document.getElementById("stateOutlineLegend").style.display = "none";
          document.getElementById("Tennessee").style.display = "none";
          document.getElementById("Census tracts clusters").style.display = "block";
        }
      ],
      onChapterExit: [
        
      ],
    },
    {
      id: "cluster low1",
      alignment: "left",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter8,
      location: {
        center: [-86.83, 36.2],
        zoom: 11,
        zoomSmall: 14,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "coldspot selected1",
          opacity: 0.7,
          duration: 300,
        },
        {
          layer: "county_outline",
          opacity: 0.7,
          duration: 300,
        },
        {
          layer: "census tracts outline",
          opacity: 0.7,
          duration: 300,
        },
        {
          layer: "census tracts line",
          opacity: 0.7,
          duration: 300,
        },
        () => {
          document.getElementById("lifeExpectancyStateLegend").style.display = "none";
          document.getElementById("coldspotLegend").style.display = "none";
          document.getElementById("hotCountyLegend").style.display = "none";
          document.getElementById("stateOutlineLegend").style.display = "none";
          document.getElementById("Tennessee").style.display = "none";
          document.getElementById("Census tracts clusters").style.display = "block";
        }
      ],
      onChapterExit: [
      ],
    },
    {
      id: "Paragraph2",
      alignment: "full",
      hidden: false,
      title: "",
      image: "",
      description: "",
      chapterDiv: divChapter12,
      location: {
        center: [-86.83, 36.2],
        zoom: 11,
        zoomSmall: 14,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "coldspot selected1",
          opacity: 0.7,
          duration: 300,
        },
        {
          layer: "county_outline",
          opacity: 0.7,
          duration: 300,
        },
        {
          layer: "census tracts outline",
          opacity: 0.7,
          duration: 300,
        },
        {
          layer: "census tracts line",
          opacity: 0.7,
          duration: 300,
        },
        {
          layer: "hotspot selected1",
          opacity: 0.7,
          duration: 300,
        },
        () => {
          document.getElementById("lifeExpectancyStateLegend").style.display = "none";
          document.getElementById("coldspotLegend").style.display = "none";
          document.getElementById("hotCountyLegend").style.display = "none";
          document.getElementById("stateOutlineLegend").style.display = "none";
          document.getElementById("Tennessee").style.display = "none";
          document.getElementById("Census tracts clusters").style.display = "block";
        }
      ],
      onChapterExit: [
      ],
    },
  ],
};