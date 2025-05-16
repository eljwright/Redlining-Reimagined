var config = {
  style: "mapbox://styles/eljwright/cm917hn4x007901sd5zhb8hbk",
  accessToken: "pk.eyJ1IjoiZWxqd3JpZ2h0IiwiYSI6ImNtNDduZnlweTA3dm4ybXNjY3R5anAyOGsifQ.gS6yn_JP5mcEIyF9wbgspw",
  showMarkers: false,
  markerColor: "#3FB1CE",
  //projection: 'equirectangular',
  //Read more about available projections here
  //https://docs.mapbox.com/mapbox-gl-js/example/projections/
  inset: true,
  insetOptions: {
    markerColor: "orange",
  },
  insetPosition: "bottom-right",
  theme: "dark",
  use3dTerrain: false, //set true for enabling 3D maps.
  auto: false,
// -----> Changes made by LAURA Bellow: <-----
//   1. Put the listed bellow as part of the html and not part of the template, as originally
  // title: 'Redlining Reimagined',
  // subtitle: 'An exploration of the discriminatory housing practice of redlining and its devastating modern legacies in Seattle, Washington',
  // byline: 'By: Elijah Wright',
  // footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
//   2. Chapter Six a had two images stored in the same directory as this file. I've placed them in images folder and rewritten this into the chapter  
  chapters: [
    {
      id: "chapter-one",
      alignment: "left",
      hidden: false,
      title: "Introduction",
      image: "",
      description:
        "The history of segregation in Seattle, Washington is one with deep roots and multiple different stories. The city was founded on exclusionary bases, with legislation that expelled the native Duwamish people from residing within city limits. These segregationist roots persisted throughout the decades, with many explicit anti-Asian and anti-Black policies being enacted in the 19th and 20th centuries. This interactive mapping website will evaluate the way one specific practice known as redlining significantly contributed to socio-spatial inequality within Seattle, Washington. We will also consider the ways in which it still impacts communities to this day.",
      location: {
        center: [-122.37414, 47.61064],
        zoom: 11.06,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: 'redlining-markers',
          opacity: 0,
        },
        {
          layer: "Racial_Georef",
          opacity: 0,
        },
        {
          layer: "Redlining_Line",
          opacity: 0,
        },
        {
          layer: "Socioecon-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-middle",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-lowest",
          opacity: 0,
        },
        {
          layer: "Socioecon-lowest",
          opacity: 0,
        },
        {
          layer: "RSE-highest",
          opacity: 0,
        },
        {
          layer: "RSE-second-highest",
          opacity: 0,
        },
        {
          layer: "RSE-middle",
          opacity: 0,
        },
        {
          layer: "RSE-second-lowest",
          opacity: 0,
        },
        {
          layer: "RSE-lowest",
          opacity: 0,
        },
        {
          layer: "Redlining_Georef",
          opacity: 1,
        },
        {
          layer: "Racial_Georef",
          opacity: 0,
        },
        {
          layer: "Redlining-Busi",
          opacity: 0,
        },
        {
          layer: "Redlining-Indus",
          opacity: 0,
        },
        {
          layer: "Redlining-D-grade",
          opacity: 0,
        },
        {
          layer: "Redlining-C-grade",
          opacity: 0,
        },
        {
          layer: "Redlining-B-grade",
          opacity: 0,
        },
        {
          layer: "Redlining-A-grade",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "chapter-two",
      alignment: "center",
      hidden: false,
      title: "Federal Context",
      image: "",
      description:
        "To understand the practice of and impacts of redlining, we must first understand the historical context. In the aftermath of the Great Depression, president Franklin Delano Roosevelt started implementing what he called New Deal programs. These programs aimed to create social safety nets and promote economic recovery after the depression. As part of the New Deal, FDR established the Homeowners Loan Corporation (HOLC) and the Federal Housing Administration (FHA) in an attempt to expand homeownership and make it more accessible for Americans. These programs helped make homeownership a central part of the “American Dream,” but they were implemented in discriminatory ways that excluded many people of color (POC) and low-income communities from accessing those benefits and building wealth through homeownership.",
      location: {
        center: [-122.37414, 47.61064],
        zoom: 11.06,
        pitch: 0,
        bearing: 0,
      },
      // flyTo additional controls-
      // These options control the flight curve, making it move
      // slowly and zoom out almost completely before starting
      // to pan.
      // speed: 2, // make the flying slow
      // curve: 1, // change the speed at which it zooms out
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "Socioecon-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-middle",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-lowest",
          opacity: 0,
        },
        {
          layer: "Socioecon-lowest",
          opacity: 0,
        },
        {
          layer: "Racial_georef",
          opacity: 0,
        },
        {
          layer: "RSE-highest",
          opacity: 0,
        },
        {
          layer: "RSE-second-highest",
          opacity: 0,
        },
        {
          layer: "RSE-middle",
          opacity: 0,
        },
        {
          layer: "RSE-second-lowest",
          opacity: 0,
        },
        {
          layer: "RSE-lowest",
          opacity: 0,
        },
        {
          layer: "Redlining_Georef",
          opacity: 1,
        },
        {
          layer: "Racial_Georef",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "chapter-three",
      alignment: "left",
      hidden: false,
      title: "Redlining Map Overview",
      image: "",
      description:
        'One way housing discrimination occurred in Seattle was through the Homeowners Loan Corporation (HOLC). The HOLC, saying they were worried about taking on risky loans, made color-coded maps to assess the riskiness of granting home loans in different neighborhoods. These maps were created for every major American city, including Seattle in 1936. The maps included four different residential grades that neighborhoods would be ranked into. <br><br>These grades were as follows:<br><img src="/images/HOLC_Legend.jpg"><br><br>After these maps were created, they were adopted by the FHA as well as private banks to inform their decisions on who to lend to. This meant that families and individuals in the Red and Yellow graded neighborhoods would be systematically denied home loans, which is where the term redlining comes from.',
      location: {
        center: [-122.45885, 47.59481],
        zoom: 10.7,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "Socioecon-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-middle",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-lowest",
          opacity: 0,
        },
        {
          layer: "Socioecon-lowest",
          opacity: 0,
        },
        {
          layer: "Racial_georef",
          opacity: 0,
        },
        {
          layer: "RSE-highest",
          opacity: 0,
        },
        {
          layer: "RSE-second-highest",
          opacity: 0,
        },
        {
          layer: "RSE-middle",
          opacity: 0,
        },
        {
          layer: "RSE-second-lowest",
          opacity: 0,
        },
        {
          layer: "RSE-lowest",
          opacity: 0,
        },
        {
          layer: "Redlining_Georef",
          opacity: 1,
        },
        {
          layer: "Racial_Georef",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "chapter-four",
      alignment: "left",
      hidden: false,
      title: "Racial component of HOLC grades",
      image: "",
      description:
        "Although the HOLC maps were supposed to be about economic stability and who would be able to pay off their loans in the future, racial demographics were undeniably a major factor in what grade a neighborhood would receive. White neighborhoods were typically classified as “Best”, but if even one Black family lived there, the neighborhood would be determined to be “Definitely Declining” or “Hazardous”. <br><br>The claim that people of color would devalue the homes in the area is one that was completely unproven and was used as an unwarranted justification for racist policies. <br><br>The racial factor in HOLC grades becomes especially clear when you look at the area descriptions that informed them. The following sections will examine three different neighborhoods in Seattle, highlighting the stark differences in how white and non-white areas were described.",
      location: {
        center: [-122.45885, 47.59481],
        zoom: 10.7,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "Socioecon-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-middle",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-lowest",
          opacity: 0,
        },
        {
          layer: "Socioecon-lowest",
          opacity: 0,
        },
        {
          layer: "Racial_georef",
          opacity: 0,
        },
        {
          layer: "RSE-highest",
          opacity: 0,
        },
        {
          layer: "RSE-second-highest",
          opacity: 0,
        },
        {
          layer: "RSE-middle",
          opacity: 0,
        },
        {
          layer: "RSE-second-lowest",
          opacity: 0,
        },
        {
          layer: "RSE-lowest",
          opacity: 0,
        },
        {
          layer: "Redlining_Georef",
          opacity: 1,
        },
        {
          layer: "Racial_Georef",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "chapter-four-a",
      alignment: "right",
      hidden: false,
      title: "Area Description Example: Zone A3",
      image: "",
      description:
        'Non-white neighborhoods, such as this one in modern-day Laurelhurst, often had long and detailed descriptions of the quality of the houses and other factors affecting the neighborhood. <br> <br> <b>A3 area description:</b> “This area is one of the most popular residential districts in Seattle. The residents are of the professional class, having an annual income of $4000 to $10,000 per year. There is very choice view property in this area. The homes, generally, are less than two years old-- in the $6500 to $15,000 price class; and well maintained. During 1935 there were some new residential structures placed under construction in this area. The property is protected by building and racial restrictions.”<br><br>The racial restrictions the area description refers to what are known as restrictive covenants, another discriminatory housing practice that was common practice in Seattle. These restrictive covenants were conditions on the sale of a property that included clauses prohibiting the sale, rent or lease of the property to specified racial/religious groups. Alongside redlining, racial covenants played a major role in the segregation of Seattle and have major impacts today. To learn more about racial covenants, and to read some of them, see the <a href="https://depts.washington.edu/covenants/" target="_blank">University of Washington’s Racial Restrictive Covenants Project.</a><br><br><img src="/images/laurelhurst_houses.jpg"><br>Laurelhurst, 1925',
      location: {
        center: [-122.27079, 47.65791],
        zoom: 13.5,
        pitch: 15,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "Socioecon-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-middle",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-lowest",
          opacity: 0,
        },
        {
          layer: "Socioecon-lowest",
          opacity: 0,
        },
        {
          layer: "Racial_georef",
          opacity: 0,
        },
        {
          layer: "RSE-highest",
          opacity: 0,
        },
        {
          layer: "RSE-second-highest",
          opacity: 0,
        },
        {
          layer: "RSE-middle",
          opacity: 0,
        },
        {
          layer: "RSE-second-lowest",
          opacity: 0,
        },
        {
          layer: "RSE-lowest",
          opacity: 0,
        },
        {
          layer: "Redlining_Georef",
          opacity: 1,
        },
        {
          layer: "Racial_Georef",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "chapter-four-b",
      alignment: "right",
      hidden: false,
      title: "Area Description Example: Zone D4",
      image: "",
      description:
        "Neighborhoods with non-white residents, such as the Central District which was majority Black, often had area descriptions that only described the race of the residents and nothing else. <br><br> <b>D4 area description:</b> “This is a negro area of Seattle”. <br><br>This area description is notably much shorter than those in white neighborhoods (such as A3). They didn’t describe the quality of the houses at all and decided that because it was a Black neighborhood, that was a good enough reason to grade it as “hazardous”. This demonstrates the significant disparity between how redlining grades were determined between white and non-white neighborhoods and how heavily racialized they were.",
      location: {
        center: [-122.29845, 47.61994],
        zoom: 13.25,
        pitch: 15,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "Socioecon-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-middle",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-lowest",
          opacity: 0,
        },
        {
          layer: "Socioecon-lowest",
          opacity: 0,
        },
        {
          layer: "Racial_georef",
          opacity: 0,
        },
        {
          layer: "RSE-highest",
          opacity: 0,
        },
        {
          layer: "RSE-second-highest",
          opacity: 0,
        },
        {
          layer: "RSE-middle",
          opacity: 0,
        },
        {
          layer: "RSE-second-lowest",
          opacity: 0,
        },
        {
          layer: "RSE-lowest",
          opacity: 0,
        },
        {
          layer: "Redlining_Georef",
          opacity: 1,
        },
        {
          layer: "Racial_Georef",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "chapter-four-c",
      alignment: "right",
      hidden: false,
      title: "Area Description Example: Zone D5",
      image: "",
      description:
        'Some “hazardous” areas, like D5 (just next to D4), did include a little more explanation for their redlining grade.<br><br><b>D5 area description:</b><br>“This district is composed of various mixed nationalities. Homes are occupied by tenants in a vast majority. Homes generally old and obsolete in need of extensive repairs.”<br><br>But this is still much less detailed than the descriptions used for white neighborhoods. Additionally, when you look at historical photos of the homes in this area, it’s clear that race likely played a bigger role than the condition of the houses. In fact, many of the homes in D5 don’t look much different from those in the A3 “best” neighborhood.<br><br><img src="/images/CD_houses2.jpg"><br>20th Avenue and Spruce Street, 1925<br><br><img src="/images/CD_houses.jpg"><br>23rd Avenue and Atlantic Street',
      location: {
        center: [-122.29692, 47.59588],
        zoom: 13,
        pitch: 15,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "Racial_Georef",
          opacity: 0,
        },
        {
          layer: "Redlining_Georef",
          opacity: 1,
        },
        {
          layer: "Socioecon-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-middle",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-lowest",
          opacity: 0,
        },
        {
          layer: "Socioecon-lowest",
          opacity: 0,
        },
        {
          layer: "Racial_georef",
          opacity: 0,
        },
        {
          layer: "RSE-highest",
          opacity: 0,
        },
        {
          layer: "RSE-second-highest",
          opacity: 0,
        },
        {
          layer: "RSE-middle",
          opacity: 0,
        },
        {
          layer: "RSE-second-lowest",
          opacity: 0,
        },
        {
          layer: "RSE-lowest",
          opacity: 0,
        }
      ],
      onChapterExit: [],
    },
    {
      id: "chapter-four-d",
      alignment: "left",
      hidden: false,
      title: "HOLC Racial Map",
      description:
        "Another example that showcases the clear racist nature of the redlining map was that in addition to the loan security map, the HOLC also created a racial map that showed the areas certain ethnicities were the most present in. In addition to showing where certain racial groups lived, the HOLC racial map also included arrows that showed the “direction of infiltration” of those groups. This is likely a direct reference to the FHA’s Underwriting Manual which warned housing developers, without sufficient evidence, that property values would be threatened by the “infiltration of inharmonious racial groups”. This map was submitted on the same day and by the same HOLC field agent as the mortgage security redlining map, and is a clear demonstration that the HOLC was always considering racial factors in their maps.",
      image: "",
      location: {
        center: [-122.42645, 47.5804],
        zoom: 11.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "Redlining_Georef",
          opacity: 0,
        },
        {
          layer: "Racial_Georef",
          opacity: 1,
        }
      ],
      onChapterExit: [],
    },
    {
      id: "chapter-five",
      alignment: "left",
      hidden: false,
      title: "Impact of Redlining",
      description:
        "As previously mentioned, redlining severely impacted the individuals and families who were in the C and D graded areas. These categories meant that people in those areas deemed as “definitely declining” or “hazardous” could not get mortgage loans or if they did manage to secure a loan, got highly unfavorable conditions. This prevented them from building generational wealth in the form of home equity, which has had major impacts that are still impacting these communities today.",
      image: "",
      location: {
        center: [-122.45885, 47.59481],
        zoom: 10.7,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: 'redlining-markers',
          opacity: 0,
        },
        {
          layer: "Redlining_Georef",
          opacity: 1,
        },
        {
          layer: "Racial_Georef",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "chapter-six",
      alignment: "center",
      hidden: false,
      title: "Community Resistance",
      description:
        "Before going into detail on the enduring legacy of redlining, let’s look at the history of legislation and community resistance to redlining. Community resistance to housing discrimination in Seattle was led by a combination of national African American civil rights organizations, such as the NAACP and the Urban League, and local grassroot groups like the Central Area Youth Club and Central Seattle Community Council Federation. <br><br>Community resistance to redlining and other forms of housing discrimination (such as restrictive covenants) largely erupted in the 1960s, and specifically the summer of 1963, as the national civil rights movement gained momentum.",
      image: "",
      location: {
        center: [-122.32437, 47.60309],
        zoom: 12.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: 'redlining-markers',
          opacity: 1,
        },
        {
          layer: "Socioecon-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-middle",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-lowest",
          opacity: 0,
        },
        {
          layer: "Socioecon-lowest",
          opacity: 0,
        },
        {
          layer: "Racial_georef",
          opacity: 0,
        },
        {
          layer: "RSE-highest",
          opacity: 0,
        },
        {
          layer: "RSE-second-highest",
          opacity: 0,
        },
        {
          layer: "RSE-middle",
          opacity: 0,
        },
        {
          layer: "RSE-second-lowest",
          opacity: 0,
        },
        {
          layer: "RSE-lowest",
          opacity: 0,
        },
        {
          layer: "Redlining_Georef",
          opacity: 1,
        },
        {
          layer: "Racial_Georef",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "chapter-six-a",
      alignment: "left",
      hidden: false,
        title: "Community Resistance: Sit-Ins",
    //   (LAURA) image directory corrected bellow
      description:
        'One form of community resistance that groups took in Seattle were organized sit-ins. The first occurred on <b>July 1st, 1963</b> in the mayor’s office, where 35 members of the Central District Youth Club stayed for 24 hours. Before the sit-in there was a protest outside the building of approximately 300 individuals in support of open housing policy. At this protest they passed around a handbill that stated: <br><blockquote cite=""https://historylink.org/File/3161"">As citizens of Seattle and members of the Central District Youth Club, we feel humiliated by the slow process of the City of Seattle to adopt open housing. We are past the stage of patience, we also are past the stage of committees and subcommittees. We want open housing today.</blockquote>The second protest of the civil rights movement in Seattle was later that same month, on <b>July 20th, 1963.</b> This demonstration in the city council chambers was in protest of the composition of Mayor Clinton’s proposed 12-member human rights commission, which only included two African American nominees. Their sit-in lasted four days and ended in 22 arrests after protesters refused the police order to leave the premises.<br><br><img src="/images/Sit-in_1.jpg" class= "small_image" alt="image of the July 1st, 1963 sit-in in Seattle"><img src="images/Sit-in_2.jpg" class= "small_image" alt="image of the July 20th, 1963 sit-in in Seattle">',
      image: "",
      location: {
        center: [-122.33882, 47.60446],
        zoom: 15.2,
        pitch: 10,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "Socioecon-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-middle",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-lowest",
          opacity: 0,
        },
        {
          layer: "Socioecon-lowest",
          opacity: 0,
        },
        {
          layer: "Racial_georef",
          opacity: 0,
        },
        {
          layer: "RSE-highest",
          opacity: 0,
        },
        {
          layer: "RSE-second-highest",
          opacity: 0,
        },
        {
          layer: "RSE-middle",
          opacity: 0,
        },
        {
          layer: "RSE-second-lowest",
          opacity: 0,
        },
        {
          layer: "RSE-lowest",
          opacity: 0,
        },
        {
          layer: "Redlining_Georef",
          opacity: 1,
        },
        {
          layer: "Racial_Georef",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "chapter-six-b",
      alignment: "left",
      hidden: false,
      title: "Community Resistance: Open Housing Hearing",
      description:
        'After a long summer of civil rights demonstrations, many of which were about housing discrimination, there was a public open housing hearing on <b>October 25, 1963</b>. At this 7hr hearing, individuals made arguments either for or against open housing legislation. One of these individuals was <b>Rev. John Hurst Adams</b>, chairman of the Central Area Committee on Civil Rights. Adams gave a powerful speech on the unconstitutionality and immorality of housing discrimination:<br><br><audio controls><source src="adams_32kbps.mp3" type="audio/mpeg">Your browser does not support the audio element.</audio><br><br>Although community resistance led to the consideration of open housing legislation, unfortunately this specific ordinance would be defeated by a public vote the following year in March 1964. <br><br><img src="/images/John_Hurst_Adams_2.jpeg" alt= "Image of Rev. John H. Adams"><br>Image of Rev. John H. Adams',
      image: "",
      location: {
        center: [-122.33882, 47.60446],
        zoom: 15.2,
        pitch: 10,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "Socioecon-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-middle",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-lowest",
          opacity: 0,
        },
        {
          layer: "Socioecon-lowest",
          opacity: 0,
        },
        {
          layer: "Racial_georef",
          opacity: 0,
        },
        {
          layer: "RSE-highest",
          opacity: 0,
        },
        {
          layer: "RSE-second-highest",
          opacity: 0,
        },
        {
          layer: "RSE-middle",
          opacity: 0,
        },
        {
          layer: "RSE-second-lowest",
          opacity: 0,
        },
        {
          layer: "RSE-lowest",
          opacity: 0,
        },
        {
          layer: "Redlining_Georef",
          opacity: 1,
        },
        {
          layer: "Racial_Georef",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "chapter-six-c",
      alignment: "left",
      hidden: false,
      title: "Community Resistance: Liberty Bank",
      description:
        'Liberty Bank, at 24th and Union, presents another example of community resistance to housing inequality. The Black-owned bank opened in May of 1968 as a community response to practices of redlining and disinvestment in the Central Seattle area. Liberty Bank offered loans to those individuals that traditional banks would refuse to loan to, representing a clear example of community resistance to redlining, and systemic racism more broadly. Although the bank closed in 1988, today the site has been transformed as an apartment building that provides affordable housing in the hopes of combatting Black displacement in the Central District.<br><br><img src="/images/Liberty_Bank.jpg" class="small_image" alt="image of the outside of Liberty Bank in Seattle"><img src="/images/Liberty_Bank_2.jpg" class="small_image" alt="image of the ribbon cutting of Liberty Bank in Seattle">',
      image: "",
      location: {
        center: [-122.30844, 47.61388],
        zoom: 15.1,
        pitch: 10,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "Socioecon-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-middle",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-lowest",
          opacity: 0,
        },
        {
          layer: "Socioecon-lowest",
          opacity: 0,
        },
        {
          layer: "Racial_georef",
          opacity: 0,
        },
        {
          layer: "RSE-highest",
          opacity: 0,
        },
        {
          layer: "RSE-second-highest",
          opacity: 0,
        },
        {
          layer: "RSE-middle",
          opacity: 0,
        },
        {
          layer: "RSE-second-lowest",
          opacity: 0,
        },
        {
          layer: "RSE-lowest",
          opacity: 0,
        },
        {
          layer: "Redlining_Georef",
          opacity: 1,
        },
        {
          layer: "Racial_Georef",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "chapter-six-d",
      alignment: "left",
      hidden: false,
      title: "Community Resistance: Redlining Demonstration",
      description:
        'In <b>August 1975</b>, just one month after the Central Seattle Community Council Federation published their Redlining and Disinvestment in Central Seattle report, the federation took to the streets to protest the continued impacts of redlining on their community. They visualized these impacts by painting a thick red line down Fourteenth Avenue, which helped people understand that redlining maps were never just imaginary but they had real, material, impacts on their neighborhoods.<br><br><img src="/images/Protesters_see_red.jpg" alt="Image of protesters in the Central District, painting a giant red line down the street">',
      image: "",
      location: {
        center: [-122.32330, 47.60177],
        zoom: 15.1,
        pitch: 10,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "Socioecon-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-middle",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-lowest",
          opacity: 0,
        },
        {
          layer: "Socioecon-lowest",
          opacity: 0,
        },
        {
          layer: "Racial_georef",
          opacity: 0,
        },
        {
          layer: "RSE-highest",
          opacity: 0,
        },
        {
          layer: "RSE-second-highest",
          opacity: 0,
        },
        {
          layer: "RSE-middle",
          opacity: 0,
        },
        {
          layer: "RSE-second-lowest",
          opacity: 0,
        },
        {
          layer: "RSE-lowest",
          opacity: 0,
        },
        {
          layer: "Redlining_Georef",
          opacity: 1,
        },
        {
          layer: "Racial_Georef",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "chapter-seven",
      alignment: "center",
      hidden: false,
      title: "Legislation and Modern Impacts",
      description:
        'Although redlining was finally outlawed at the federal level and local levels in 1968 with the Fair Housing Act and Fair Housing Ordinance (Ordinance 96619) respectively, elements of the practice persisted for several years. In 1975 the Central Seattle Community Council Federation published a report titled Redlining and Disinvestment in Central Seattle that outlined how even after this legislation, residents of the Central District, a redlined zone, still faced major barriers to receiving home loans. After this report was published, several local government initiatives were undertaken as an attempt to reverse the effects of redlining, these include Seattle’s Reinvestment Task Force (established 1975) and the Lenders Review Board (est 1976). <br>Despite efforts from the city government, redlining still has a mjaor impact on Seattle today. Its legacy can be seen across many areas of inequality, including income, health, education and employment, among many others. In the following sections, we’ll look more closely at how these impacts show up in different parts of the city.<br><br><img src="/images/Lenders_Review_Board.jpg" class= "small_image" alt="Newspaper ad about the lenders review board">',
      image: "",
      location: {
        center: [-122.32437, 47.60309],
        zoom: 12.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: 'redlining-markers',
          opacity: 0,
        },
        {
          layer: "Redlining_Georef",
          opacity: 1,
        },
        {
          layer: "Redlining_Line",
          opacity: 0,
        },
        {
          layer: "Socioecon-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-middle",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-lowest",
          opacity: 0,
        },
        {
          layer: "Socioecon-lowest",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "chapter-eight",
      alignment: "left",
      hidden: false,
      title: "Modern Wealth Inequality",
      description:
        "One of the most prominent effects of redlining is that it prevented people in redlined neighborhoods from being able to own homes and build generational wealth. This led to enormous wealth gaps that still persist today between those who lived in C and D graded neighborhoods and those who lived in A and B graded neighborhoods. A recent study by ECONorthwest found that without racially discriminatory housing practices (including redlining but also practices such as racial housing covenants and private discrimination) King County’s BIPOC households would hold between $12 and $34 billion in additional wealth today. Additionally they found that each individual Black household in King County would hold between $105,000 to $306,000 in additional wealth today if it weren’t for this racial discrimination in housing.  <br><br> These wealth disparities impact more than just finances, they also have a significant influence on things such as access to education or healthcare.",
      image: "",
      location: {
        center: [-122.45885, 47.59481],
        zoom: 10.7,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "Redlining_Georef",
          opacity: 1,
        },
        {
          layer: "Redlining_Line",
          opacity: 0,
        },
        {
          layer: "Socioecon-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-middle",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-lowest",
          opacity: 0,
        },
        {
          layer: "Socioecon-lowest",
          opacity: 0,
        },
        {
          layer: "Racial_georef",
          opacity: 0,
        },
        {
          layer: "RSE-highest",
          opacity: 0,
        },
        {
          layer: "RSE-second-highest",
          opacity: 0,
        },
        {
          layer: "RSE-middle",
          opacity: 0,
        },
        {
          layer: "RSE-second-lowest",
          opacity: 0,
        },
        {
          layer: "RSE-lowest",
          opacity: 0,
        },
        {
          layer: "Redlining-Busi",
          opacity: 0,
        },
        {
          layer: "Redlining-Indus",
          opacity: 0,
        },
        {
          layer: "Redlining-D-grade",
          opacity: 0,
        },
        {
          layer: "Redlining-C-grade",
          opacity: 0,
        },
        {
          layer: "Redlining-B-grade",
          opacity: 0,
        },
        {
          layer: "Redlining-A-grade",
          opacity: 0,
        },
        {
          layer: "Racial_Georef",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "Socioecon-highest",
          opacity: 0.9,
        },
        {
          layer: "Socioecon-second-highest",
          opacity: 0.9,
        },
        {
          layer: "Socioecon-middle",
          opacity: 0.9,
        },
        {
          layer: "Socioecon-second-lowest",
          opacity: 0.9,
        },
        {
          layer: "Socioecon-lowest",
          opacity: 0.9,
        },
        {
          layer: "Redlining_Georef",
          opacity: 0,
        },
        {
          layer: "Racial_Georef",
          opacity: 0,
        },
      ],
    },
    {
      id: "chapter-eight-a",
      alignment: "right",
      hidden: false,
      title: "RSE Socioeconomic Map",
      description:
        "To better understand how redlining continues to shape Seattle today, we will now look at the Racial and Social Equity (RSE) Index, specifically focusing on the socioeconomic subindex. This map was created by the Seattle city government in 2017 to evaluate which areas of the city need to be prioritized for them to successfully fulfil their equitable development goals. The map shows the census tracts that the city deemed to be the most economically disadvantaged, classifications determined by a combination of income and educational attainment data. <br><br> <b>Map Legend: </b><br>Red: Highest Equity Priority/ Most Disadvantaged<br>Yellow: Second Highest Equity Priority<br>Purple: Middle<br>Blue: Second Lowest Equity Priority<br>Green: Lowest Equity Priority",
      image: "",
      location: {
        center: [-122.27824, 47.61162],
        zoom: 10.4,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      // On ch enter have RSE socioeconomic map appear
      onChapterEnter: [
        {
          layer: "Socioecon-highest",
          opacity: 0.9,
        },
        {
          layer: "Socioecon-second-highest",
          opacity: 0.9,
        },
        {
          layer: "Socioecon-middle",
          opacity: 0.9,
        },
        {
          layer: "Socioecon-second-lowest",
          opacity: 0.9,
        },
        {
          layer: "Socioecon-lowest",
          opacity: 0.9,
        },
        {
          layer: "Redlining_Line",
          opacity: 0,
        },
        {
          layer: "Redlining-Busi",
          opacity: 0,
        },
        {
          layer: "Redlining-Indus",
          opacity: 0,
        },
        {
          layer: "Redlining-D-grade",
          opacity: 0,
        },
        {
          layer: "Redlining-C-grade",
          opacity: 0,
        },
        {
          layer: "Redlining-B-grade",
          opacity: 0,
        },
        {
          layer: "Redlining-A-grade",
          opacity: 0,
        },
        {
          layer: "Redlining_Georef",
          opacity: 0,
        },
        {
          layer: "Racial_Georef",
          opacity: 0,
        },
        {
          layer: "RSE-highest",
          opacity: 0,
        },
        {
          layer: "RSE-second-highest",
          opacity: 0,
        },
        {
          layer: "RSE-middle",
          opacity: 0,
        },
        {
          layer: "RSE-second-lowest",
          opacity: 0,
        },
        {
          layer: "RSE-lowest",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "chapter-eight-b",
      alignment: "right",
      hidden: false,
      title: "RSE Socioeconomic Map: Highest Equity Priority Areas",
      description:
        "We will now exclusively focus on the areas the city has identified as the most socioeconomically disadvantaged, the areas labeled as “highest equity priority”. These are the parts of Seattle where income and education disparities are most severe.",
      image: "",
      location: {
        center: [-122.2749, 47.597],
        zoom: 10.7,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      // Have RSE Socioecon layers (except most disadvantaged) leave. Have layer at full opacity
      onChapterEnter: [
        {
          layer: "Redlining_Georef",
          opacity: 0,
        },
        {
          layer: "Redlining_Line",
          opacity: 0,
        },
        {
          layer: "Socioecon-highest",
          opacity: 1,
        },
        {
          layer: "Socioecon-second-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-middle",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-lowest",
          opacity: 0,
        },
        {
          layer: "Socioecon-lowest",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "chapter-eight-c",
      alignment: "right",
      hidden: false,
      title: "Socioeconomic Inequality & Redlining",
      description:
        "Here we begin to compare the distribution of modern socioeconomic inequality with the 1936 redlining map so we can explore how closely modern inequalities follow historic redlining boundaries.<br><br>As this map shows, nearly all of the “highest equity priority” areas are concentrated in the southern part of the city, with the main exception being the area around the University of Washington. ",
      image: "",
      location: {
        center: [-122.2749, 47.597],
        zoom: 10.7,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      // Bring back redlining layer
      onChapterEnter: [
        {
          layer: "Redlining_Line",
          opacity: 1,
        },
        {
          layer: "Socioecon-highest",
          opacity: 1,
        },
        {
          layer: "Redlining_Georef",
          opacity: 1,
        },
        {
          layer: "Socioecon-second-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-middle",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-lowest",
          opacity: 0,
        },
        {
          layer: "Socioecon-lowest",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "chapter-eight-d",
      alignment: "right",
      hidden: false,
      title: "Socioeconomic Inequality & Redlining",
      description:
        "Now, with the RSE layer transparent, we can see that today’s most socioeconomically disadvantaged neighborhoods were almost all graded as “definitely declining” or “hazardous” on the 1936 HOLC redlining map. This includes parts of the Central District (D5), Rainier Valley (C13 & C14), and Delridge (D8 & C15). The correlation is no coincidence. Families in redlined areas were systematically denied the opportunity to build and pass down wealth through homeownership, a key factor in long term economic opportunity.<br><br>We’ll now move on to exploring other factors, namely disinvestment and gentrification, that have also continued to reinforce the inequalities of redlining.",
      image: "",
      location: {
        center: [-122.2749, 47.597],
        zoom: 10.7,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      // Lower opacity of RSE layer
      onChapterEnter: [
        {
          layer: "Redlining_Georef",
          opacity: 1,
        },
        {
          layer: "Redlining_Line",
          opacity: 1,
        },
        {
          layer: "Socioecon-highest",
          opacity: 0.7,
        },
        {
          layer: "Socioecon-second-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-middle",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-lowest",
          opacity: 0,
        },
        {
          layer: "Socioecon-lowest",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "Redlining_Line",
          opacity: 0,
        },
      ],
    },
    {
      id: "chapter-nine",
      alignment: "left",
      hidden: false,
      title: "Disinvestment & Neighborhood Deterioration",
      description:
        'On top of the severe wealth disparity faced by residents of redlined neighborhoods, redlining also caused disinvestment which has continued to impact communities for decades. The 1975 report Redlining and Disinvestment in Central Seattle defines displacement as “a general policy followed by banks of taking in savings deposits from residents of a redlined area but refusing to return that money, in the form of home, business, and consumer loans, to the community that provided the money”.<br><br>This practice goes against how banks are intended to function. Normally, money individuals deposit into banks will later be reinvested back into the same community it came from, by supporting home ownership, local businesses, and public infrastructure like schools. But in redlined areas, banks refused to give loans to the people living there. Instead, the money local residents deposited into banks would be sent to support the development of wealthy suburbs outside the city.<br><br>This turned redlining into a self-fulfilling prophecy. By denying access to loans and reinvestment, banks caused redlined neighborhoods to deteriorate, justifying their original “hazardous” designations and blaming residents for the conditions the banks themselves caused. This lack of investment is more than just an economic issue. It has contributed to crumbling infrastructure, underfunded schools, and limited job opportunities. These consequences continue to affect formerly redlined communities today and play a major role in the continued inequality within Seattle.<br><br><img src="/images/Redlining_and_Disinvestment.jpg" alt="image of the cover of the Redlining and Disinvestment in Central Seattle Report">',
      image: "",
      location: {
        center: [-122.45885, 47.59481],
        zoom: 10.7,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      // RSE SOCIOECONOMIC MAP LEAVES - back to georeferenced redlining map
      onChapterEnter: [
        {
          layer: "Redlining_Line",
          opacity: 0,
        },
        {
          layer: "Socioecon-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-middle",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-lowest",
          opacity: 0,
        },
        {
          layer: "Socioecon-lowest",
          opacity: 0,
        },
        {
          layer: "Racial_georef",
          opacity: 0,
        },
        {
          layer: "RSE-highest",
          opacity: 0,
        },
        {
          layer: "RSE-second-highest",
          opacity: 0,
        },
        {
          layer: "RSE-middle",
          opacity: 0,
        },
        {
          layer: "RSE-second-lowest",
          opacity: 0,
        },
        {
          layer: "RSE-lowest",
          opacity: 0,
        },
        {
          layer: "Redlining-Busi",
          opacity: 0,
        },
        {
          layer: "Redlining-Indus",
          opacity: 0,
        },
        {
          layer: "Redlining-D-grade",
          opacity: 0,
        },
        {
          layer: "Redlining-C-grade",
          opacity: 0,
        },
        {
          layer: "Redlining-B-grade",
          opacity: 0,
        },
        {
          layer: "Redlining-A-grade",
          opacity: 0,
        },
        {
          layer: "Redlining_Georef",
          opacity: 1,
        },
        {
          layer: "Racial_Georef",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "Socioecon-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-middle",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-lowest",
          opacity: 0,
        },
        {
          layer: "Socioecon-lowest",
          opacity: 0,
        },
        {
          layer: "Racial_georef",
          opacity: 0,
        },
        {
          layer: "RSE-highest",
          opacity: 0,
        },
        {
          layer: "RSE-second-highest",
          opacity: 0,
        },
        {
          layer: "RSE-middle",
          opacity: 0,
        },
        {
          layer: "RSE-second-lowest",
          opacity: 0,
        },
        {
          layer: "RSE-lowest",
          opacity: 0,
        },
        {
          layer: "Redlining_Georef",
          opacity: 1,
        },
        {
          layer: "Racial_Georef",
          opacity: 0,
        },
      ],
    },
    {
      id: "chapter-nine-a",
      alignment: "right",
      hidden: false,
      title: "Disinvestment: Central District",
      description:
        'Within the Central District, the Redlining and Disinvestment report detailed how almost none of the money residents were depositing into banks was being reinvested into their community. Specifically, for every $1 that residents deposited into local banks, only 25¢ would be returned to the area, and none of that money would be seen in the redlined areas of the Central District. Meanwhile, in the suburbs, for every $1 deposited, $2 would be reinvested back into their community. <br><br>This funneling of money out of Central Seattle has drained the area of resources for decades. It stunted economic growth, deepened existing inequalities, and left the area especially vulnerable to later challenges like gentrification.<br><br><img src="/images/Redlining_Song.jpg" alt="Redlining Anthem">',
      //Make image clickable so people can zoom into it
      image: "",
      location: {
        center: [-122.30282, 47.60642],
        zoom: 13,
        pitch: 15,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "Socioecon-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-highest",
          opacity: 0,
        },
        {
          layer: "Socioecon-middle",
          opacity: 0,
        },
        {
          layer: "Socioecon-second-lowest",
          opacity: 0,
        },
        {
          layer: "Socioecon-lowest",
          opacity: 0,
        },
        {
          layer: "Racial_georef",
          opacity: 0,
        },
        {
          layer: "RSE-highest",
          opacity: 0,
        },
        {
          layer: "RSE-second-highest",
          opacity: 0,
        },
        {
          layer: "RSE-middle",
          opacity: 0,
        },
        {
          layer: "RSE-second-lowest",
          opacity: 0,
        },
        {
          layer: "RSE-lowest",
          opacity: 0,
        },
        {
          layer: "Redlining_Georef",
          opacity: 1,
        },
        {
          layer: "Racial_Georef",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "chapter-ten",
      alignment: "left",
      hidden: false,
      title: "Gentrification & Displacement",
      description:
        'Redlining and the disinvestment it caused left certain communities, particularly those that were redlined, more vulnerable to gentrification. <b>Gentrification is the process in which lower-income urban neighborhoods undergo demographic shifts due to increased investment in the area and wealthier individuals moving in.</b> Gentrification often leads to displacement of long-term residents, as increased investment drives up rent prices, making it unaffordable for them to stay. Gentrification disproportionately affects formerly redlined neighborhoods due to their history of disinvestment, often forcing people out of the only neighborhoods they were historically allowed to live in.<br> <br> While this issue affects many American cities, the tech economy of Seattle makes these trends even more apparent. In 2019, Seattle was named the <a href="https://www.seattletimes.com/seattle-news/data/seattle-ranks-near-top-for-gentrification-but-that-might-not-be-as-bad-as-you-think-study-finds/3rd" target="_blank"> third most gentrifying US city.</a> Gentrification and displacement illustrate that housing inequality is not only the result of poor government policy but that corporations also bear a significant portion of the responsibility. In Seattle, these corporations play a key role in the gentrification of formerly redlined zones, as they bring an influx of out-of-towners who often desire to live in the city center. In addition to the population growth they cause, Seattle corporations have been described as <a href="https://systemicjustice.org/article/redlining-and-disinvestment-a-case-study-on-racial-segregation-and-gentrification-throughout-seattles-central-district/" target="_blank">“[capturing] the city’s political and economic landscape”</a>, leveraging their power to block affordable housing initiatives.',
      image: "",
      location: {
        center: [-122.45885, 47.597],
        zoom: 10.7,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "chapter-ten-a",
      alignment: "right",
      hidden: false,
      title: "Gentrification: Rainier Valley",
      description:
        "One area of Seattle that has significantly been affected by gentrification is the Rainier Valley in the South end of the city. The Rainier Valley was graded as “Definitely Declined” on the 1936 HOLC map, with area descriptions (C13 & C14) labeling it a “very spotted residential district composed of people of various nationalities”. Similarly to the Central District, redlining caused a severe lack of investment in Rainier Valley which has continued to affect its neighborhoods for decades.<br><br>The Rainier Valley also faces another issue which stems from the city expanding its light rail service to the area in the name of “Transit Oriented Development”. This has played into the gentrification of the valley, as the new stations have brought increased development that has significantly changed the character of the neighborhood. In particular, areas around the light rail stations have seen dramatic increases in rent and land values.",
      image: "",
      location: {
        center: [-122.23709, 47.53632],
        zoom: 12,
        pitch: 15,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [],
      onChapterExit: [],
    },
    {
      id: "chapter-ten-b",
      alignment: "right",
      hidden: false,
      title: "Gentrification: Rainier Beach",
      description:
        'The long-term effects of redlining are especially visible in Rainier Beach, one of Seattle’s most racially diverse neighborhoods, where 82% of residents identify as people of color. Like other redlined neighborhoods of Seattle, Rainier Beach has experienced decades of disinvestment. Today, residents have started calling it “gentrification ground zero” due to rising housing prices and the displacement of longtime residents.<br><br><b><a href="https://www.realchangenews.org/news/2018/12/05/displacement-tax-update-gentrification-ground-zero-rainier-beach" target="_blank">One resident discusses:</a></b><blockquote cite=""https://www.realchangenews.org/news/2018/12/05/displacement-tax-update-gentrification-ground-zero-rainier-beach"">“And here we are, living history as it repeats itself in the Rainier Valley. As White people move in, property values increase and, by extension, my taxes increase. The city of Seattle was clearly complicit in allowing property taxes to become a tool of racial oppression.”</blockquote><br>This quote highlights how gentrification in Rainier Beach is history repeating itself, building on the patterns of inequality that redlining created. It also shows how gentrification doesn’t just affect renters, as it can cause property taxes that homeowners pay to increase.<br><br>Finally, even for renters that can afford to stay in the area as it gentrifies, rising housing prices often make it impossible for them to ever buy their own home. In Rainier Beach, average home values have increased by almost $170,000 in the past five years. This perpetuates the same trends that redlining caused in the first place, keeping homeownership firmly out of reach for many Seattlites.<br><br><img src="/images/LawnSign_2.jpg">',
      image: "/images/LawnSign_1.jpg",
      location: {
        center: [-122.25406, 47.51643],
        zoom: 13.25,
        pitch: 15,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "Redlining_Georef",
          opacity: 1,
        },
        {
          layer: "RSE-highest",
          opacity: 0,
        },
        {
          layer: "RSE-second-highest",
          opacity: 0,
        },
        {
          layer: "RSE-middle",
          opacity: 0,
        },
        {
          layer: "RSE-second-lowest",
          opacity: 0,
        },
        {
          layer: "RSE-lowest",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "chapter-eleven",
      alignment: "left",
      hidden: false,
      title: "RSE Composite Map",
      description:
        "While studying redlining it is essential to understand its long lasting legacy and how American cities are still spatially segregated based on the HOLC map boundaries today. To explore this trend we will now look at the Racial and Social Equity Composite Index. This is part of the same RSE mapping project as the Socioeconomic Index we looked at earlier, however this one combines multiple subindices with demographic data on race, immigrant and English language learner status, socioeconomic status, and health. This combined index provides a relatively comprehensive overview of which areas of the city are the most disadvantaged and can help us evaluate the way modern inequality is spatially distributed in Seattle. ",
      image: "",
      location: {
        center: [-122.45885, 47.597],
        zoom: 10.7,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      // On ch enter have RSE comp map appear
      onChapterEnter: [
        {
          layer: "Redlining_Georef",
          opacity: 0,
        },
        {
          layer: "Redlining_Line",
          opacity: 0,
        },
        {
          layer: "Racial_Georef",
          opacity: 0,
        },
        {
          layer: "RSE-highest",
          opacity: 0.9,
        },
        {
          layer: "RSE-second-highest",
          opacity: 0.9,
        },
        {
          layer: "RSE-middle",
          opacity: 0.9,
        },
        {
          layer: "RSE-second-lowest",
          opacity: 0.9,
        },
        {
          layer: "RSE-lowest",
          opacity: 0.9,
        },
      ],
    },
    {
      id: "chapter-eleven-a",
      alignment: "right",
      hidden: false,
      title: "RSE Composite Map",
      description:
        "The RSE map is divided into the most recent census tracts (2020) and each tract is given a composite score based on the three subindices (the Race, English Language Learners, and Origins index, Socioeconomic disadvantage index, and health disadvantage index). These scores were then ranked to form five groups that showcase the city’s priority levels of each neighborhood, with classifications ranging from Highest Equity Priority, meaning they face the most challenges today, to Lowest Equity Priority. <br><br> <b>Map Legend: </b><br>Red: Highest Equity Priority/ Most Disadvantaged<br>Yellow: Second Highest Equity Priority<br>Purple: Middle<br>Blue: Second Lowest Equity Priority<br>Green: Lowest Equity Priority",
      image: "",
      location: {
        center: [-122.27824, 47.61162],
        zoom: 10.4,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      onChapterEnter: [
        {
          layer: "Redlining_Line",
          opacity: 0,
        },
        {
          layer: "Redlining_Georef",
          opacity: 0,
        },
        {
          layer: "Racial_Georef",
          opacity: 0,
        },
        {
          layer: "RSE-highest",
          opacity: 0.9,
        },
        {
          layer: "RSE-second-highest",
          opacity: 0.9,
        },
        {
          layer: "RSE-middle",
          opacity: 0.9,
        },
        {
          layer: "RSE-second-lowest",
          opacity: 0.9,
        },
        {
          layer: "RSE-lowest",
          opacity: 0.9,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "chapter-eleven-b",
      alignment: "right",
      hidden: false,
      title: "RSE Composite Map: Highest Equity Priority Areas",
      description:
        "Now that we’ve removed the other layers, you can clearly see which areas of Seattle are described as being the highest equity priorities today. This designation means the area faces significant inequality challenges that the city is trying to combat through equitable development initiatives.<br><br>If this map looks similar, that is because most of the neighborhoods were also highest equity priorities in the socioeconomic index map we looked at earlier. This makes sense because this composite index includes that same data, plus additional factors like race, immigration status, and health inequalities.<br><br>The fact that these same areas show up across multiple inequality maps reinforces just how impactful the effects of redlining were on those communities.",
      image: "",
      location: {
        center: [-122.2749, 47.597],
        zoom: 10.7,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      // Have RSE Comp layers (except most disadvantaged) leave. Have layer at full opacity
      onChapterEnter: [
        {
          layer: "Redlining_Georef",
          opacity: 0,
        },
        {
          layer: "Redlining_Line",
          opacity: 0,
        },
        {
          layer: "RSE-highest",
          opacity: 1,
        },
        {
          layer: "RSE-second-highest",
          opacity: 0,
        },
        {
          layer: "RSE-middle",
          opacity: 0,
        },
        {
          layer: "RSE-second-lowest",
          opacity: 0,
        },
        {
          layer: "RSE-lowest",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "chapter-eleven-c",
      alignment: "right",
      hidden: false,
      title: "RSE Composite Map & Redlining",
      description:
        "As we bring back the 1936 redlining map behind the RSE data, the connection becomes hard to ignore.<br><br>As with the socioeconomic index, many of the areas that the HOLC graded as “definitely declining” and “hazardous” nearly a century ago are the same places that show up as highest equity priorities today.",
      image: "",
      location: {
        center: [-122.2749, 47.597],
        zoom: 10.7,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      // Bring back redlining layer
      onChapterEnter: [
        {
          layer: "Redlining_Georef",
          opacity: 1,
        },
        {
          layer: "Redlining_Line",
          opacity: 1,
        },
        {
          layer: "RSE-highest",
          opacity: 1,
        },
        {
          layer: "RSE-second-highest",
          opacity: 0,
        },
        {
          layer: "RSE-middle",
          opacity: 0,
        },
        {
          layer: "RSE-second-lowest",
          opacity: 0,
        },
        {
          layer: "RSE-lowest",
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: "chapter-eleven-d",
      alignment: "right",
      hidden: false,
      title: "RSE Composite Map & Redlining",
      description:
        "As we lower the opacity of the equity priority areas, the spatial alignment between today’s most disadvantaged neighborhoods and the areas redlined in the past becomes even more clear.<br><br>This comparison shows just how deeply the legacy of redlining is embedded in the city of Seattle. Despite being over 50 years removed from legislation that prohibited redlining and other forms of housing discrimination, communities are still feeling the effects.",
      image: "",
      location: {
        center: [-122.2749, 47.597],
        zoom: 10.7,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      // Lower opacity of RSE layer
      onChapterEnter: [
        {
          layer: "Redlining_Georef",
          opacity: 1,
        },
        {
          layer: "Redlining_Line",
          opacity: 1,
        },
        {
          layer: "RSE-highest",
          opacity: 0.7,
        },
        {
          layer: "RSE-second-highest",
          opacity: 0,
        },
        {
          layer: "RSE-middle",
          opacity: 0,
        },
        {
          layer: "RSE-second-lowest",
          opacity: 0,
        },
        {
          layer: "RSE-lowest",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "Redlining_Line",
          opacity: 0,
        },
        {
          layer: "RSE-highest",
          opacity: 0,
        },
      ],
    },
    {
      id: "chapter-twelve", 
      class: "bookmark",
      alignment: "left",
      hidden: false,
      title: "Conclusion & Comparison Map Introduction",
      description:
        "The maps, stories, and data we’ve explored tell a clear story:<br><b>Redlining isn’t just a case of historic discrimination but its legacy continues to shape inequality in Seattle today.</b><br><br>Understanding the connections between historic discriminatory practices and modern day inequality gives us a better understanding of how deeply systemic and persistent these issues are. It also gives us the power to challenge them and push for better solutions going forward.<br><br>Now you have the opportunity to continue exploring the legacy of redlining on your own terms. <b>Use the comparison map below </b>to compare the original HOLC zones (left) to the RSE Composite Index (right), to explore connections of redlining to modern day inequality. Use the map to look at your own neighborhood or explore areas you care about, and consider what this history means for the future of our city.",
      image: "",
      location: {
        center: [-122.45885, 47.59481],
        zoom: 10.7,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "flyTo",
      rotateAnimation: false,
      callback: "",
      // RSE COMP MAP LEAVES - back to georeferenced redlining map
      onChapterEnter: [
        {
          layer: "Redlining_Line",
          opacity: 0,
        },
        {
          layer: "Racial_georef",
          opacity: 0,
        },
        {
          layer: "RSE-highest",
          opacity: 0,
        },
        {
          layer: "RSE-second-highest",
          opacity: 0,
        },
        {
          layer: "RSE-middle",
          opacity: 0,
        },
        {
          layer: "RSE-second-lowest",
          opacity: 0,
        },
        {
          layer: "RSE-lowest",
          opacity: 0,
        },
        {
          layer: "Redlining_Georef",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "Redlining_Georef",
          opacity: 1,
        },
      ],
    },
  ],
};
