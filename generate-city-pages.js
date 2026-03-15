const fs = require('fs');
const path = require('path');

// Read the index.html to extract nav and footer
const indexHtml = fs.readFileSync(path.join(__dirname, 'public/index.html'), 'utf8');

// Extract nav HTML
const navMatch = indexHtml.match(/<nav class="nav"[\s\S]*?<\/nav>\s*<div class="nav-overlay"><\/div>/);
const navHtml = navMatch ? navMatch[0] : '';

// Extract footer HTML
const footerMatch = indexHtml.match(/<footer class="footer">[\s\S]*?<\/footer>/);
const footerHtml = footerMatch ? footerMatch[0] : '';

// Hero images to rotate through (all full-res, sharp photos)
const heroImages = [
  'https://fencetastic.net/wp-content/uploads/2022/02/9a16c4_d417120a108543f7b487b06a1f683a9a_mv2_d_4032_3024_s_4_2.jpg',
  'https://fencetastic.net/wp-content/uploads/2022/02/9a16c4_edbf3c9611cd49d493bde5db82d60052_mv2_d_5312_2988_s_4_2.jpg',
  'https://fencetastic.net/wp-content/uploads/2022/02/WhatsApp-Image-2024-02-22-at-17.40.24-12.jpeg',
  'https://fencetastic.net/wp-content/uploads/2022/02/311706443_540054764791633_825176277833741672_n.jpg',
  'https://fencetastic.net/wp-content/uploads/2022/02/20191109_150727.jpg',
  'https://fencetastic.net/wp-content/uploads/2022/02/WhatsApp-Image-2024-02-22-at-17.41.02.jpeg',
  'https://fencetastic.net/wp-content/uploads/2022/02/Japanese-Cedar.jpg',
  'https://fencetastic.net/wp-content/uploads/2022/02/20200707_180056-scaled-e1705691386629.jpg',
];

// Gallery images by category
const galleryImages = {
  wood: [
    { src: 'https://fencetastic.net/wp-content/uploads/2022/02/9a16c4_d417120a108543f7b487b06a1f683a9a_mv2_d_4032_3024_s_4_2.jpg', caption: 'Board on Board w/ Double Trim' },
    { src: 'https://fencetastic.net/wp-content/uploads/2022/02/311706443_540054764791633_825176277833741672_n.jpg', caption: 'Board on Board w/ Topcap & Corbell' },
    { src: 'https://fencetastic.net/wp-content/uploads/2022/02/WhatsApp-Image-2024-02-22-at-16.22.37-4-e1709667886833.jpeg', caption: 'Horizontal Board on Board' },
    { src: 'https://fencetastic.net/wp-content/uploads/2022/02/20191109_150727.jpg', caption: 'Board on Board w/ Double Trim & Topcap' },
  ],
  metal: [
    { src: 'https://fencetastic.net/wp-content/uploads/2022/02/WhatsApp-Image-2024-03-05-at-12.57.22-4.jpeg', caption: 'Commercial Iron w/ Stone Columns' },
    { src: 'https://fencetastic.net/wp-content/uploads/2022/02/WhatsApp-Image-2024-03-05-at-14.12.53-3.jpeg', caption: 'Iron 3 Rail Fence' },
  ],
  gate: [
    { src: 'https://fencetastic.net/wp-content/uploads/2022/02/WhatsApp-Image-2024-02-22-at-17.51.38.jpeg', caption: 'Ornamental Double Iron Swing Gate' },
  ],
  outdoor: [
    { src: 'https://fencetastic.net/wp-content/uploads/2022/02/WhatsApp-Image-2024-02-22-at-17.40.24-8.jpeg', caption: 'Attached Pergola' },
    { src: 'https://fencetastic.net/wp-content/uploads/2022/02/WhatsApp-Image-2024-02-22-at-17.40.24-16.jpeg', caption: 'Custom Deck' },
  ],
};

// All city data
const cities = [
  // === MAJOR CITIES ===
  {
    slug: 'prosper',
    name: 'Prosper',
    state: 'TX',
    type: 'major',
    medianIncome: '$188K',
    description: 'One of the fastest-growing and most affluent communities in North Texas',
    heroIdx: 0,
    geo: { lat: '33.2362', lng: '-96.8011' },
    content: {
      intro: `Prosper, TX has emerged as one of the most desirable communities in North Texas, with a median household income of approximately $188K and a reputation for upscale living. As Prosper continues its rapid growth from a small town to a thriving city, homeowners here demand the highest quality in every aspect of their property — including their fencing and outdoor structures.`,
      detail: `Prosper ranks 6th among Texas cities with populations between 10,000 and 50,000 for household income, reflecting the premium quality of life residents expect. The town's master-planned communities, large lot sizes, and strict HOA requirements mean that fence installation in Prosper requires attention to detail that matches the surrounding homes.`,
      neighborhoods: ['Windsong Ranch', 'Star Trail', 'Whitley Place', 'Gentle Creek', 'Prosper Trail', 'La Cima', 'Light Farms', 'Lakes of Prosper'],
      features: [
        'Large lot properties often requiring 200+ linear feet of fencing',
        'Strict HOA guidelines requiring specific materials, colors, and heights',
        'Premium Western Red Cedar preferred by Prosper homeowners',
        'Custom gates and automatic operators for estate-style properties',
        'Pool fencing that meets Prosper building codes and safety requirements',
        'Horizontal board on board designs popular in newer Prosper communities'
      ],
      whyLocal: `Prosper's rapid growth means building codes are frequently updated. Our team stays current with Town of Prosper fence permit requirements, ensuring your installation meets all local ordinances. We understand that Prosper homeowners invest significantly in their properties, and your fence should reflect that same level of quality and craftsmanship.`
    }
  },
  {
    slug: 'frisco',
    name: 'Frisco',
    state: 'TX',
    type: 'major',
    medianIncome: '$146K',
    description: 'A booming city known for new construction, sports, and family living',
    heroIdx: 1,
    geo: { lat: '33.1507', lng: '-96.8236' },
    content: {
      intro: `Frisco, TX is one of the fastest-growing cities in America, with a massive residential building base and a median household income of approximately $146K. From the $5 billion mile along the Dallas North Tollway to family-friendly neighborhoods surrounding top-rated schools, Frisco homeowners expect quality that matches their community's reputation for excellence.`,
      detail: `With new construction happening at a rapid pace, Frisco properties need fencing that complements modern architectural styles while meeting the city's building standards. Whether you're in an established neighborhood or a brand-new development, the right fence adds privacy, security, and significant curb appeal to your Frisco home.`,
      neighborhoods: ['Starwood', 'Phillips Creek Ranch', 'Newman Village', 'Richwoods', 'Lawler Park', 'Hollyhock', 'Lexington Country', 'The Grove'],
      features: [
        'New construction fence installation coordinated with builders',
        'Modern horizontal cedar designs popular in Frisco developments',
        'Iron fencing for estates and corner lot properties',
        'Privacy fencing for homes near the Tollway and major roads',
        'Custom automatic gates for Phillips Creek Ranch and Starwood estates',
        'Pool and sport court fencing for Frisco\'s active families'
      ],
      whyLocal: `Frisco's City Development department has specific fence regulations including height restrictions, setback requirements, and approved materials. Our team navigates Frisco's permit process daily, and we know which HOAs require pre-approval before installation. With thousands of new homes being built each year in Frisco, we're the trusted fence partner for homeowners who won't settle for average.`
    }
  },
  {
    slug: 'mckinney',
    name: 'McKinney',
    state: 'TX',
    type: 'major',
    medianIncome: '$120K',
    description: 'A charming blend of historic downtown and modern development',
    heroIdx: 2,
    geo: { lat: '33.1972', lng: '-96.6397' },
    content: {
      intro: `McKinney, TX — our hometown and headquarters — combines historic Southern charm with modern Texas living. With a median household income of approximately $120K and a downtown square that was named the #1 Best Main Street in America, McKinney homeowners take pride in properties that reflect the city's character. As a McKinney-based company at 5237 China Berry Dr, we know this city inside and out.`,
      detail: `From the Victorian homes in the Historic District to the new master-planned communities stretching north toward Celina, McKinney's diverse housing stock demands versatile fencing solutions. We've installed thousands of fences across McKinney's neighborhoods, giving us unmatched knowledge of local soil conditions, HOA requirements, and the materials that perform best in our specific climate.`,
      neighborhoods: ['Adriatica', 'Stonebridge Ranch', 'Craig Ranch', 'Tucker Hill', 'Trinity Falls', 'Erwin Farms', 'Painted Tree', 'McKinney Historic District'],
      features: [
        'Period-appropriate fencing for McKinney Historic District homes',
        'Board on board cedar fencing — the most popular style in McKinney',
        'Farm and ranch fencing for east McKinney rural properties',
        'Custom iron gates for Stonebridge Ranch and Craig Ranch estates',
        'Same-day estimates available — we\'re right here in McKinney',
        'Fastest response times since McKinney is our home base'
      ],
      whyLocal: `Being headquartered in McKinney means we\'re not just your fence contractor — we\'re your neighbor. We attend McKinney city council meetings, stay informed about development plans, and have personal relationships with local inspectors. When you choose Fencetastic for your McKinney fence project, you\'re choosing a company that has a vested interest in making our shared community more beautiful.`
    }
  },
  {
    slug: 'allen',
    name: 'Allen',
    state: 'TX',
    type: 'major',
    medianIncome: '$129K',
    description: 'Known for its strong school district and family-oriented communities',
    heroIdx: 3,
    geo: { lat: '33.1032', lng: '-96.6706' },
    content: {
      intro: `Allen, TX is one of DFW's premier family communities, with a median household income of approximately $129K and a school district that consistently ranks among Texas's best. Allen homeowners invest in their properties because they plan to stay — and a quality fence from Fencetastic is an investment that pays dividends in privacy, security, and property value for years to come.`,
      detail: `Allen's residential landscape ranges from established neighborhoods built in the 1980s and 90s to brand-new developments pushing north toward Melissa. Many Allen homes are reaching the age where original fences need complete replacement, making this the perfect time to upgrade from builder-grade materials to premium Western Red Cedar or maintenance-free vinyl.`,
      neighborhoods: ['Twin Creeks', 'Montgomery Farm', 'Star Creek', 'The Villages at Allen', 'Ridgeview Estates', 'Waterford Parks', 'Heritage'],
      features: [
        'Fence replacement and upgrades for aging Allen neighborhoods',
        'Allen ISD area homes often require 8-foot privacy fencing',
        'Twin Creeks and Montgomery Farm HOA-compliant installations',
        'Custom cedar designs that increase Allen home resale value',
        'Storm damage fence repair with fast turnaround times',
        'Composite and vinyl options for Allen homeowners wanting zero maintenance'
      ],
      whyLocal: `Allen's city code requires a permit for any fence over 4 feet tall, and there are specific regulations about fence placement near sidewalks and drainage easements. We handle the entire Allen fence permit process so you don't have to. Our proximity to Allen — just minutes from our McKinney headquarters — means we can be on-site quickly for estimates, installations, and any warranty service you need.`
    }
  },
  {
    slug: 'richardson',
    name: 'Richardson',
    state: 'TX',
    type: 'major',
    medianIncome: '$95K',
    description: 'A tech hub city with established neighborhoods and growing development',
    heroIdx: 4,
    geo: { lat: '32.9483', lng: '-96.7299' },
    content: {
      intro: `Richardson, TX sits at the crossroads of Dallas's tech corridor and some of North Texas's most established neighborhoods. Home to the Telecom Corridor, UTD, and a mix of mid-century homes and modern developments, Richardson homeowners need fencing solutions that bridge the gap between classic charm and contemporary style.`,
      detail: `Richardson's housing stock is uniquely diverse. The Heights neighborhood and areas near UTD feature homes from the 1950s–70s with mature trees and smaller lots that require careful fence planning. Meanwhile, newer developments along 75 and Bush Turnpike bring modern architecture that pairs beautifully with horizontal cedar or sleek iron fencing.`,
      neighborhoods: ['Canyon Creek', 'Breckinridge Park', 'The Heights', 'Cottonwood Creek', 'Sherrill Park', 'Prairie Creek', 'Mimosa Lane'],
      features: [
        'Replacement fencing for Richardson\'s established 1960s–70s neighborhoods',
        'Commercial fencing for Telecom Corridor and CityLine businesses',
        'Space-efficient designs for Richardson\'s tighter lot sizes',
        'Tree-friendly installation that works around mature landscaping',
        'Iron and aluminum fencing for Richardson\'s corner lot properties',
        'HOA-compliant installations for Canyon Creek and newer communities'
      ],
      whyLocal: `Richardson has specific fence ordinances that differ from neighboring Dallas and Plano — including material restrictions in certain zoning districts and height limitations near intersections. We know these Richardson-specific rules and ensure your installation is fully compliant. Our team frequently works in Richardson and understands the unique challenges of installing fences around the city's mature trees and established landscapes.`
    }
  },
  {
    slug: 'the-colony',
    name: 'The Colony',
    state: 'TX',
    type: 'major',
    medianIncome: '$92K',
    description: 'A lakeside community on Lewisville Lake with resort-style living',
    heroIdx: 5,
    geo: { lat: '33.0890', lng: '-96.8861' },
    content: {
      intro: `The Colony, TX offers a unique lakeside lifestyle on the shores of Lewisville Lake, combining resort-style amenities with suburban family living. The Colony homeowners enjoy outdoor living year-round, making quality fencing, decks, and pergolas essential investments for properties in this growing community.`,
      detail: `From the Grandscape entertainment district to established neighborhoods and new developments, The Colony's real estate market is booming. Properties near Lewisville Lake face unique weather exposure, making material selection critical. Our team recommends weather-resistant options that stand up to the lake's humidity and wind while maintaining their beauty.`,
      neighborhoods: ['Austin Waters', 'Stewart Peninsula', 'Cascades at The Colony', 'The Tribute', 'Legends Crossing', 'Memorial Park'],
      features: [
        'Weather-resistant fencing for lakefront and near-lake properties',
        'Vinyl and composite materials that handle lake humidity without warping',
        'Privacy fencing for homes near Grandscape and major roads',
        'Custom pergolas and decks for The Colony\'s outdoor lifestyle',
        'Pool fencing meeting city safety codes for lake-area homes',
        'Wind-resistant post installation for exposed lakeside properties'
      ],
      whyLocal: `The Colony's proximity to Lewisville Lake creates specific fencing challenges — higher wind exposure, increased humidity, and soil conditions that differ from communities further inland. Our installation methods account for these factors, including deeper post settings and materials chosen specifically for lake-adjacent environments. We also navigate The Colony's fence permit process, which requires setback compliance and height verification.`
    }
  },
  {
    slug: 'addison',
    name: 'Addison',
    state: 'TX',
    type: 'major',
    medianIncome: '$80K',
    description: 'A vibrant town known for restaurants, nightlife, and walkable living',
    heroIdx: 6,
    geo: { lat: '32.9612', lng: '-96.8292' },
    content: {
      intro: `Addison, TX may be small in size — just 4.4 square miles — but it packs a punch with over 200 restaurants, a thriving entertainment scene, and a desirable North Dallas location. Addison's mix of single-family homes, townhomes, and commercial properties creates diverse fencing needs that Fencetastic is uniquely equipped to handle.`,
      detail: `Addison's compact footprint means properties are closer together, making privacy fencing a top priority for homeowners. The town's commercial districts also need professional-grade fencing that maintains aesthetic standards while providing security. Whether it's a residential board on board fence or a commercial iron installation, every project in Addison needs to maximize limited space.`,
      neighborhoods: ['Addison Circle', 'Les Lacs', 'Midway Meadows', 'Celestial Road area', 'Vitruvian Park area'],
      features: [
        'Space-maximizing fence designs for Addison\'s compact lots',
        'Privacy fencing critical due to closer property proximity',
        'Commercial fencing for Addison\'s restaurant and retail properties',
        'Iron and aluminum fencing for the Addison Circle mixed-use area',
        'Sound-dampening fence designs near Belt Line Road and the Tollway',
        'Town of Addison building code compliance — different from Dallas'
      ],
      whyLocal: `Addison operates as an independent town with its own building codes, separate from Dallas. Fence permits in Addison have specific requirements around material types, fence placement relative to property lines, and maximum heights. Our team is familiar with Addison's particular regulations and can guide you through the process efficiently, saving you time and ensuring compliance from day one.`
    }
  },
  // === SMALLER CITIES ===
  {
    slug: 'little-elm',
    name: 'Little Elm',
    state: 'TX',
    type: 'small',
    description: 'A fast-growing lakeside town on Lewisville Lake',
    heroIdx: 7,
    geo: { lat: '33.1626', lng: '-96.9375' },
    content: {
      intro: `Little Elm, TX is one of the fastest-growing communities in North Texas, situated on the shores of Lewisville Lake. As new neighborhoods continue to develop, Little Elm homeowners need quality fencing that matches the premium feel of their growing community.`,
      detail: `Little Elm's explosive growth means many homes are brand new and need first-time fence installation, while early developments are reaching the age where fence replacement makes sense. Lakeside properties require extra attention to weather-resistant materials.`,
      neighborhoods: ['Paloma Creek', 'Eldorado', 'Lakewood Village', 'Sunset Pointe', 'Union Park'],
      features: ['New construction fence coordination', 'Lake-proximity weather-resistant materials', 'HOA-compliant designs for master-planned communities', 'Privacy fencing for growing neighborhoods'],
      whyLocal: `Little Elm's building department requires permits for fences over 4 feet, and many HOAs have pre-approval processes. We handle it all.`
    }
  },
  {
    slug: 'fairview',
    name: 'Fairview',
    state: 'TX',
    type: 'small',
    description: 'An upscale, low-density community with large-lot estates',
    heroIdx: 0,
    geo: { lat: '33.1579', lng: '-96.6322' },
    content: {
      intro: `Fairview, TX is an exclusive, low-density community where large lots and estate-style homes define the landscape. Fairview's one-acre minimum lot sizes mean fencing projects here are larger in scale and require premium materials that match the area's high standards.`,
      detail: `With its rural-meets-luxury character, Fairview homeowners often choose Western Red Cedar board on board fencing for its natural beauty, complemented by custom iron gates and automatic operators for their estate entries.`,
      neighborhoods: ['Heritage Ranch', 'The Estates of Fairview', 'Fairview Farms'],
      features: ['Large-lot fencing often requiring 300+ linear feet', 'Estate-style custom gates and operators', 'Farm and ranch fencing for equestrian properties', 'Premium Western Red Cedar for Fairview\'s upscale homes'],
      whyLocal: `Fairview's town regulations emphasize preserving the rural character, and fence styles must complement this aesthetic. We understand Fairview's unique identity and build fences that fit.`
    }
  },
  {
    slug: 'parker',
    name: 'Parker',
    state: 'TX',
    type: 'small',
    medianIncome: '$216K',
    description: 'The highest median income city in the North Texas corridor',
    heroIdx: 1,
    geo: { lat: '33.0566', lng: '-96.6211' },
    content: {
      intro: `Parker, TX boasts the highest median household income in the North Texas corridor at approximately $216K, reflecting its status as one of the most exclusive residential communities in Collin County. Parker's large-lot estates and equestrian properties demand fencing solutions that are as exceptional as the homes they surround.`,
      detail: `Parker's spacious properties often feature a combination of fencing types — decorative iron or cedar along street-facing boundaries, with functional farm fencing for horse pastures and livestock areas on the property's interior. This blend of aesthetic and functional fencing is our specialty.`,
      neighborhoods: ['Southfork Ranch area', 'Parker Estates', 'Country Lane Estates'],
      features: ['Estate perimeter fencing for multi-acre properties', 'Equestrian and horse fencing with Centaur vinyl rails', 'Custom iron and cedar combination designs', 'Automatic driveway gates with keypad and remote access', 'Property line fencing for 2-5 acre lots', 'Premium materials befitting Parker\'s $216K median income homes'],
      whyLocal: `Parker's rural overlay zoning has specific fence regulations that differ significantly from surrounding cities. We know Parker's requirements and work directly with the city to ensure compliance.`
    }
  },
  {
    slug: 'lucas',
    name: 'Lucas',
    state: 'TX',
    type: 'small',
    medianIncome: '$178K',
    description: 'Large-lot estates with a highly residential, rural character',
    heroIdx: 2,
    geo: { lat: '33.0843', lng: '-96.5774' },
    content: {
      intro: `Lucas, TX is one of North Texas's most prestigious residential communities, with a median household income of approximately $178K and a landscape defined by large-lot estates on one acre or more. Lucas residents value their privacy, space, and the rural character that sets their city apart from surrounding suburbs.`,
      detail: `Fencing in Lucas serves dual purposes: creating beautiful boundaries that enhance estate-style properties, and providing functional containment for the equestrian and agricultural uses that Lucas's zoning encourages. Our team is experienced in both aesthetic and agricultural fencing.`,
      neighborhoods: ['Gentle Creek Estates', 'Southfork area', 'Brockdale Park area', 'Lucas Forest'],
      features: ['1-acre+ lot perimeter fencing', 'Equestrian fencing for horse properties', 'Estate entry gates with automatic operators', 'Board on board cedar with premium trim packages', 'Farm fencing for livestock areas', 'Custom designs matching Lucas\'s estate-style homes'],
      whyLocal: `Lucas maintains strict residential zoning that preserves its large-lot, rural character. Fence installations must comply with Lucas's specific setback and height regulations while complementing the estate atmosphere.`
    }
  },
  {
    slug: 'murphy',
    name: 'Murphy',
    state: 'TX',
    type: 'small',
    medianIncome: '$165K',
    description: 'A dense, family-oriented residential community with high property values',
    heroIdx: 3,
    geo: { lat: '33.0151', lng: '-96.6128' },
    content: {
      intro: `Murphy, TX is a tightly-knit, family-oriented community with a median household income of approximately $165K. Despite its compact size, Murphy consistently ranks among the best places to live in Texas thanks to its excellent schools, low crime, and strong sense of community. Murphy homeowners take pride in their properties, and quality fencing is a key part of that.`,
      detail: `Murphy's residential density means neighbors are close, making privacy fencing one of the most requested services in this city. The community's newer construction and well-maintained homes deserve fencing that matches their quality — not builder-grade materials that deteriorate within a few years.`,
      neighborhoods: ['Maxwell Creek', 'Mustang Park', 'Heritage Addition', 'Lake Forest', 'Murphy Heights'],
      features: ['Privacy fencing for Murphy\'s closer-lot residential homes', 'Board on board cedar preferred by Murphy homeowners', 'Pool fencing meeting City of Murphy safety codes', 'Fence replacement for homes reaching 10-15 year mark', 'HOA-compliant installations throughout Murphy', 'Quick turnaround — Murphy is minutes from our McKinney HQ'],
      whyLocal: `Murphy's city ordinances require fence permits and have specific requirements for materials and placement. Many Murphy subdivisions have active HOAs with additional standards. We know both the city regulations and individual HOA requirements throughout Murphy.`
    }
  },
  {
    slug: 'sachse',
    name: 'Sachse',
    state: 'TX',
    type: 'small',
    medianIncome: '$131K',
    description: 'An established residential community with strong roots',
    heroIdx: 4,
    geo: { lat: '32.9762', lng: '-96.5953' },
    content: {
      intro: `Sachse, TX is an established residential community with a median household income of approximately $131K and a small-town feel that residents cherish. Located between Garland and Wylie, Sachse offers affordable luxury living with neighborhoods that take pride in their appearance and property values.`,
      detail: `Many Sachse homes built in the early 2000s are now ready for fence upgrades. Replacing aging fence materials with premium Western Red Cedar or low-maintenance vinyl can dramatically improve both the look and value of your Sachse property.`,
      neighborhoods: ['Woodbridge', 'Sachse Meadows', 'Ranch Estates', 'Hudson Crossing', 'Wyndale Meadows'],
      features: ['Fence replacement for aging Sachse neighborhoods', 'Western Red Cedar upgrades from builder-grade pine', 'Vinyl fencing for zero-maintenance convenience', 'Custom gates and pergolas', 'Storm damage repair services', 'Sachse building code compliant installations'],
      whyLocal: `Sachse spans both Dallas and Collin counties, meaning fence regulations can vary depending on your exact location. We know which jurisdiction applies to your property and handle permits accordingly.`
    }
  },
  {
    slug: 'wylie',
    name: 'Wylie',
    state: 'TX',
    type: 'small',
    description: 'A rapidly growing city with a blend of rural charm and suburban convenience',
    heroIdx: 5,
    geo: { lat: '33.0151', lng: '-96.5389' },
    content: {
      intro: `Wylie, TX is experiencing tremendous growth as families discover its excellent schools, affordable homes, and small-town atmosphere. As one of the fastest-growing cities in Collin County, Wylie's new and established neighborhoods both need quality fencing from a contractor they can trust.`,
      detail: `Wylie's expansion means a mix of brand-new homes needing first-time fence installation and older properties due for upgrades. The city's proximity to Lake Lavon also creates opportunities for outdoor living projects including decks, pergolas, and specialty fencing.`,
      neighborhoods: ['Alhambra', 'Birmingham Farms', 'Creekside', 'Stone Lake', 'Woodbridge Estates'],
      features: ['New construction fence installation', 'Privacy fencing for growing neighborhoods', 'Farm and ranch fencing for rural Wylie properties', 'Lake Lavon area weather-resistant options', 'Wylie ISD area family home fencing', 'Custom designs for Wylie\'s diverse housing styles'],
      whyLocal: `Wylie's building department has specific fence permit requirements, and the city's rapid growth means codes are updated frequently. We stay current with Wylie's regulations.`
    }
  },
  {
    slug: 'rockwall',
    name: 'Rockwall',
    state: 'TX',
    type: 'small',
    description: 'A lakeside community on Lake Ray Hubbard known for upscale living',
    heroIdx: 6,
    geo: { lat: '32.9312', lng: '-96.4597' },
    content: {
      intro: `Rockwall, TX sits on the shores of Lake Ray Hubbard and is known for its upscale homes, excellent schools, and charming downtown harbor district. Rockwall homeowners invest in their outdoor spaces, making quality fencing, decks, and pergolas essential components of the lakeside lifestyle.`,
      detail: `Rockwall's proximity to the lake means properties face unique weather conditions including higher humidity and wind exposure. Material selection is critical — we recommend weather-resistant options that maintain their appearance in Rockwall's lakeside environment.`,
      neighborhoods: ['Heath', 'Chandlers Landing', 'The Shores', 'Stone Creek', 'Buffalo Creek', 'Dalton Ranch'],
      features: ['Lake-proximity weather-resistant fencing', 'Premium materials for Rockwall\'s upscale homes', 'Custom decks and pergolas for lakeside outdoor living', 'Iron fencing for estate and waterfront properties', 'Wind-resistant installation techniques', 'Rockwall County building code compliance'],
      whyLocal: `Rockwall County has its own building code requirements separate from Collin and Dallas counties. We navigate these regulations and handle all permitting for your project.`
    }
  },
  {
    slug: 'rowlett',
    name: 'Rowlett',
    state: 'TX',
    type: 'small',
    description: 'A growing lakeside city on Lake Ray Hubbard',
    heroIdx: 7,
    geo: { lat: '32.9029', lng: '-96.5639' },
    content: {
      intro: `Rowlett, TX offers lakeside living on Lake Ray Hubbard with a growing downtown and diverse neighborhoods. From waterfront estates to suburban family homes, Rowlett properties benefit from quality fencing that enhances outdoor living in this thriving community.`,
      detail: `Rowlett's Bayside development and revitalized downtown are bringing new energy to the city. Both new construction and established neighborhoods need fencing that stands up to the lake-area climate while looking great year after year.`,
      neighborhoods: ['Bayside', 'Dalrock Estates', 'Waterview', 'Princeton Park', 'Miller Heights'],
      features: ['Lakeside weather-resistant fencing', 'New construction coordination for Bayside development', 'Storm-resistant installation methods', 'Privacy fencing for established neighborhoods', 'Commercial fencing for Rowlett\'s growing business district'],
      whyLocal: `Rowlett's rebuilding after the 2015 tornado means many neighborhoods have updated building codes. We know which areas have special requirements and ensure full compliance.`
    }
  },
  {
    slug: 'lavon',
    name: 'Lavon',
    state: 'TX',
    type: 'small',
    description: 'A rural community near Lake Lavon experiencing rapid growth',
    heroIdx: 0,
    geo: { lat: '33.0268', lng: '-96.4342' },
    content: {
      intro: `Lavon, TX is a small but rapidly growing community near Lake Lavon in Collin County. As new developments bring more families to Lavon, the need for quality fencing is growing alongside the population.`,
      detail: `Lavon's blend of new construction and rural properties creates diverse fencing needs — from privacy fencing in new subdivisions to farm and ranch fencing for acreage properties.`,
      neighborhoods: ['Heartland', 'Magnolia Farms', 'Brockdale Estates'],
      features: ['New subdivision fence installation', 'Farm and ranch fencing for rural properties', 'Large-lot perimeter fencing', 'Weather-resistant materials for lake-area climate'],
      whyLocal: `Lavon's rural character and rapid growth mean building requirements are evolving. We stay current with local regulations.`
    }
  },
  {
    slug: 'nevada',
    name: 'Nevada',
    state: 'TX',
    type: 'small',
    description: 'A small rural community in eastern Collin County',
    heroIdx: 1,
    geo: { lat: '33.0432', lng: '-96.3750' },
    content: {
      intro: `Nevada, TX is a small rural community in eastern Collin County that maintains its agricultural heritage while welcoming new residential development. Nevada properties often require a mix of residential and agricultural fencing solutions.`,
      detail: `Whether you need a privacy fence around your home or farm fencing for livestock, Fencetastic brings the same quality craftsmanship to Nevada that we deliver throughout the DFW Metroplex.`,
      neighborhoods: ['Community ISD area', 'FM 6 corridor'],
      features: ['Farm and ranch fencing', 'Residential privacy fencing', 'Large-acreage perimeter fencing', 'Wood and wire combination fencing'],
      whyLocal: `Nevada's rural zoning allows for agricultural uses, and our farm fencing expertise is a perfect match for the community's needs.`
    }
  },
  {
    slug: 'copeville',
    name: 'Copeville',
    state: 'TX',
    type: 'small',
    description: 'A rural unincorporated community in Collin County',
    heroIdx: 2,
    geo: { lat: '33.0876', lng: '-96.3972' },
    content: {
      intro: `Copeville, TX is a rural community in eastern Collin County where open land, farms, and ranches define the landscape. Copeville property owners need fencing that serves both practical agricultural needs and residential privacy.`,
      detail: `From cattle fencing to residential board on board, we bring professional fence installation to the Copeville area with the same quality and warranty we provide across the entire DFW Metroplex.`,
      neighborhoods: ['Copeville Road corridor', 'FM 1778 area'],
      features: ['Cattle and livestock fencing', 'Property line fencing for large acreages', 'Residential privacy fencing', 'Custom entry gates for ranch properties'],
      whyLocal: `As a McKinney-based company, Copeville is right in our backyard. We understand the rural fencing needs of eastern Collin County.`
    }
  },
  {
    slug: 'princeton',
    name: 'Princeton',
    state: 'TX',
    type: 'small',
    description: 'One of the fastest-growing cities in Collin County',
    heroIdx: 3,
    geo: { lat: '33.1801', lng: '-96.4978' },
    content: {
      intro: `Princeton, TX is one of Collin County's fastest-growing cities, with new master-planned communities and affordable homes attracting families from across the Metroplex. As Princeton expands rapidly, quality fence installation is in high demand.`,
      detail: `Princeton's growth is bringing thousands of new homes that need first-time fence installation. We work with builders and homeowners throughout Princeton to deliver fencing that meets the quality standards of this up-and-coming community.`,
      neighborhoods: ['Whitewing Trails', 'South Brookside', 'Lakeview Estates'],
      features: ['New construction fence installation', 'Builder coordination for development projects', 'Privacy fencing for new neighborhoods', 'Budget-friendly treated pine and premium cedar options'],
      whyLocal: `Princeton is just east of our McKinney headquarters, making it one of our most convenient service areas. We're on-site quickly for estimates and installations.`
    }
  },
  {
    slug: 'farmersville',
    name: 'Farmersville',
    state: 'TX',
    type: 'small',
    description: 'A charming small town with agricultural heritage and growing residential areas',
    heroIdx: 4,
    geo: { lat: '33.1637', lng: '-96.3597' },
    content: {
      intro: `Farmersville, TX maintains its small-town agricultural charm while welcoming new residents and development. Located in eastern Collin County, Farmersville properties range from historic downtown homes to new subdivisions and working farms.`,
      detail: `Whether you need traditional picket fencing for a downtown Farmersville home or miles of farm fencing for your agricultural operation, our team delivers quality craftsmanship backed by a 10-year warranty.`,
      neighborhoods: ['Downtown Farmersville', 'Mustang Creek Estates', 'Heritage Park'],
      features: ['Farm and ranch fencing for agricultural properties', 'Residential fencing for new developments', 'Historic-appropriate fencing for downtown homes', 'Affordable pricing with premium materials'],
      whyLocal: `Farmersville's mix of agricultural and residential properties is a perfect fit for our diverse fencing expertise, from farm fencing to residential board on board.`
    }
  },
  {
    slug: 'new-hope',
    name: 'New Hope',
    state: 'TX',
    type: 'small',
    description: 'A rural residential community in Collin County',
    heroIdx: 5,
    geo: { lat: '33.1140', lng: '-96.5044' },
    content: {
      intro: `New Hope, TX is a quiet, rural community in Collin County where residents enjoy larger lots and a peaceful lifestyle. New Hope property owners value quality craftsmanship and materials that complement their rural-suburban properties.`,
      detail: `New Hope's larger lot sizes mean more fencing per property, making material quality even more important. We recommend Western Red Cedar for its durability and natural beauty — a perfect match for New Hope's landscape.`,
      neighborhoods: ['FM 546 corridor', 'New Hope Road area'],
      features: ['Large-lot perimeter fencing', 'Western Red Cedar board on board', 'Farm fencing for hobby farms', 'Custom entry gates', 'Competitive pricing for larger projects'],
      whyLocal: `Located near our McKinney headquarters, New Hope properties receive quick service and the personal attention of a local company.`
    }
  },
  {
    slug: 'lowry-crossing',
    name: 'Lowry Crossing',
    state: 'TX',
    type: 'small',
    description: 'A small rural community between McKinney and Princeton',
    heroIdx: 6,
    geo: { lat: '33.1558', lng: '-96.5489' },
    content: {
      intro: `Lowry Crossing, TX is a small community located between McKinney and Princeton, known for its rural character and close-knit community feel. As development slowly reaches Lowry Crossing, residents are investing in quality fencing for their properties.`,
      detail: `Lowry Crossing properties often feature larger lots that benefit from a combination of residential privacy fencing near the home and functional fencing on the property perimeter.`,
      neighborhoods: ['Lowry Crossing Road area', 'FM 1377 corridor'],
      features: ['Rural residential fencing', 'Farm and property line fencing', 'Cedar privacy fencing', 'Custom gate installations'],
      whyLocal: `Lowry Crossing is just minutes from our McKinney office. We provide the same quality and warranty to this community as we do throughout the DFW Metroplex.`
    }
  },
  {
    slug: 'st-paul',
    name: 'St. Paul',
    state: 'TX',
    type: 'small',
    description: 'A small Collin County town with a residential focus',
    heroIdx: 7,
    geo: { lat: '33.0420', lng: '-96.5500' },
    content: {
      intro: `St. Paul, TX is a small, primarily residential community in Collin County. St. Paul homeowners appreciate the quiet, rural-suburban lifestyle and invest in their properties with quality improvements including premium fencing.`,
      detail: `St. Paul's residential character means most fencing needs center around privacy, security, and property aesthetics. Our board on board cedar fencing is the most popular choice in St. Paul for its balance of beauty and durability.`,
      neighborhoods: ['St. Paul community'],
      features: ['Residential privacy fencing', 'Board on board cedar installations', 'Custom gates', 'Property line fencing'],
      whyLocal: `St. Paul is in our immediate service area near McKinney. We offer quick estimates and efficient installation for St. Paul homeowners.`
    }
  },
  {
    slug: 'fate',
    name: 'Fate',
    state: 'TX',
    type: 'small',
    description: 'A booming Rockwall County community with family-friendly neighborhoods',
    heroIdx: 0,
    geo: { lat: '32.9412', lng: '-96.3814' },
    content: {
      intro: `Fate, TX has experienced explosive growth in recent years, transforming from a small town to a thriving community in Rockwall County. New master-planned communities and top-rated schools are drawing families to Fate, creating strong demand for quality fence installation.`,
      detail: `Fate's new developments need fencing that matches the premium quality of these communities. We work with both builders and individual homeowners throughout Fate to deliver fencing that enhances property value and provides the privacy families need.`,
      neighborhoods: ['Woodcreek', 'Chamberlain Crossing', 'Williamsburg', 'The Oaks'],
      features: ['New construction fence installation', 'Master-planned community HOA compliance', 'Privacy fencing for family neighborhoods', 'Custom gates and pergolas', 'Affordable premium options for new homeowners'],
      whyLocal: `Fate's rapid growth means building codes are actively evolving. We stay current with Rockwall County requirements and Fate-specific ordinances.`
    }
  },
  // === WEALTHY CITIES ===
  {
    slug: 'southlake',
    name: 'Southlake',
    state: 'TX',
    type: 'wealthy',
    medianIncome: '$250K',
    description: 'One of the wealthiest cities in Texas with home values exceeding $1.24M',
    heroIdx: 1,
    geo: { lat: '32.9412', lng: '-97.1342' },
    content: {
      intro: `Southlake, TX is one of the most prestigious communities in all of Texas, with a median household income of approximately $250K and average home values exceeding $1.24 million. Southlake residents expect nothing less than perfection in every aspect of their property, and their fencing and outdoor structures are no exception.`,
      detail: `From the estates surrounding Southlake Town Square to the gated communities along Southlake Boulevard, every fence we install in Southlake is a reflection of the homeowner's commitment to quality. We use only premium materials, expert craftsmanship, and custom designs that complement the architectural excellence found throughout this community.`,
      neighborhoods: ['Southlake Town Square area', 'Shady Oaks', 'Bridle Wood', 'Southridge Lakes', 'Timarron', 'Estes Park'],
      features: ['Premium Western Red Cedar with custom trim packages', 'Estate-style iron fencing and ornamental gates', 'Automatic gate systems with keypads, cameras, and intercoms', 'Custom pergolas and outdoor living structures', 'Materials and designs that meet Southlake\'s exacting standards', 'Consultations that respect Southlake\'s architectural review requirements'],
      whyLocal: `Southlake's rigorous architectural review process and detailed zoning regulations require a fence contractor who understands the stakes. A fence that doesn't meet Southlake's standards can result in costly removal and reinstallation. Our team knows what passes inspection in Southlake and delivers it right the first time.`
    }
  },
  {
    slug: 'westlake',
    name: 'Westlake',
    state: 'TX',
    type: 'wealthy',
    medianIncome: '$527K',
    description: 'The highest average household income in North Texas',
    heroIdx: 2,
    geo: { lat: '32.9913', lng: '-97.1953' },
    content: {
      intro: `Westlake, TX holds the distinction of having the highest average household income in all of North Texas at approximately $527K. This ultra-exclusive community of estate homes, including the renowned Vaquero development, demands the absolute finest in fencing and outdoor craftsmanship.`,
      detail: `Every project in Westlake is a showcase of what's possible when there are no compromises on quality. From hand-selected Western Red Cedar with triple trim packages to ornamental iron gates with premium automation systems, we bring the level of craftsmanship that Westlake properties demand.`,
      neighborhoods: ['Vaquero', 'Stagecoach Hills', 'Glenwyck Farms', 'Terra Bella'],
      features: ['Ultra-premium materials for estate-grade properties', 'Custom-designed ornamental iron fencing and gates', 'Full automation with video intercoms and smart home integration', 'Multi-material designs combining cedar, iron, and stone', 'Pergolas and outdoor structures with premium finishes', 'White-glove project management from estimate to completion'],
      whyLocal: `Westlake's development standards are among the most stringent in Texas. The town's zoning ordinances and architectural review committees scrutinize every exterior improvement, including fencing. We've successfully completed projects in Westlake and understand the approval process required before any work begins.`
    }
  },
  {
    slug: 'colleyville',
    name: 'Colleyville',
    state: 'TX',
    type: 'wealthy',
    medianIncome: '$190K',
    description: 'An affluent community with average home values around $886K',
    heroIdx: 3,
    geo: { lat: '32.8810', lng: '-97.1550' },
    content: {
      intro: `Colleyville, TX is one of the most affluent communities in the DFW Metroplex, with average home values around $886K and a median household income of approximately $190K. Colleyville's tree-lined streets, estate-sized lots, and commitment to maintaining property values make quality fencing an essential investment for homeowners.`,
      detail: `Colleyville properties are characterized by mature landscaping, larger lots, and architectural styles ranging from traditional brick to modern farmhouse. The right fence design must work harmoniously with these elements while providing privacy and security.`,
      neighborhoods: ['Montclair Parc', 'Winding Creek', 'The Hamptons', 'Whittier Heights', 'Colleyville Downs'],
      features: ['Premium fencing for high-value Colleyville properties', 'Designs that work around mature trees and established landscaping', 'Custom iron and cedar combination installations', 'Automatic gate systems for estate properties', 'Pool fencing that meets city safety requirements', 'Materials selected for Colleyville\'s tree-shaded environments'],
      whyLocal: `Colleyville's tree preservation ordinance affects fence installation routes and post placement. We plan every project around existing trees and root systems, protecting your landscape investment while delivering a beautiful fence.`
    }
  },
  {
    slug: 'flower-mound',
    name: 'Flower Mound',
    state: 'TX',
    type: 'wealthy',
    description: 'Among the wealthiest ZIP codes in DFW with family-friendly neighborhoods',
    heroIdx: 4,
    geo: { lat: '33.0146', lng: '-97.0969' },
    content: {
      intro: `Flower Mound, TX contains some of the wealthiest ZIP codes in the DFW Metroplex, with upscale homes, top-rated schools, and a community that prioritizes quality of life. Flower Mound homeowners invest significantly in their properties, and quality outdoor structures are a key part of maintaining home values in this competitive market.`,
      detail: `From the established neighborhoods near Flower Mound Road to newer developments along FM 2499, Flower Mound offers a range of homes that all benefit from professional-grade fencing. The town's emphasis on aesthetic standards means your fence needs to look as good as it performs.`,
      neighborhoods: ['Wellington', 'Bridlewood', 'Lakeside DFW', 'Canyon Falls', 'Tour 18', 'Stone Hill Farms'],
      features: ['Premium fencing for one of DFW\'s wealthiest communities', 'Town of Flower Mound architectural compliance', 'Board on board cedar with custom trim packages', 'Iron fencing for corner lots and high-visibility properties', 'Outdoor living structures including pergolas and decks', 'HOA pre-approval coordination for Flower Mound subdivisions'],
      whyLocal: `Flower Mound's town regulations include specific fence standards that differ from surrounding cities. The town's environmental commitment also means fence installations must consider drainage, tree preservation, and lot grading. We account for all these factors in every Flower Mound project.`
    }
  },
  {
    slug: 'university-park',
    name: 'University Park',
    state: 'TX',
    type: 'wealthy',
    description: 'Home to SMU with average home values around $2.3M',
    heroIdx: 5,
    geo: { lat: '32.8507', lng: '-96.8005' },
    content: {
      intro: `University Park, TX is one of the most prestigious addresses in Dallas, with average home values around $2.3 million and a location surrounding Southern Methodist University. University Park homeowners maintain properties of exceptional quality, and their fencing must meet the same standard of excellence.`,
      detail: `University Park's classic architecture — ranging from Tudor and Colonial to Mediterranean and contemporary — requires fencing that complements each home's unique character. Cookie-cutter fencing simply doesn't work here. Every project needs a custom approach that respects the property's architectural heritage.`,
      neighborhoods: ['Snider Plaza area', 'SMU area', 'Caruth Hills', 'University Gardens'],
      features: ['Architecturally appropriate fencing for $2M+ homes', 'Iron and cedar designs that complement University Park\'s classic styles', 'Historic-sensitive installations for older properties', 'Custom gates that match the home\'s architectural period', 'Premium materials and craftsmanship befitting University Park', 'Discreet, efficient installation that minimizes neighborhood disruption'],
      whyLocal: `University Park has its own municipal government with building codes separate from Dallas. The city's architectural review process for exterior improvements is thorough, and non-compliant fences can result in citations and required removal. We ensure every University Park installation meets the city's exacting standards.`
    }
  },
  {
    slug: 'highland-park',
    name: 'Highland Park',
    state: 'TX',
    type: 'wealthy',
    description: 'One of the wealthiest and most historic ZIP codes in Texas',
    heroIdx: 6,
    geo: { lat: '32.8335', lng: '-96.7925' },
    content: {
      intro: `Highland Park, TX is one of the most iconic and wealthiest neighborhoods in all of Texas, with a history of elegance dating back over a century. Highland Park properties represent significant investments, and every exterior element — including fencing — must reflect the prestige and tradition of this legendary community.`,
      detail: `Highland Park's historic homes require fencing that respects the neighborhood's architectural heritage while providing modern security and privacy. From the grand estates along Beverly Drive to the charming homes near Highland Park Village, we create custom fencing solutions that honor each property's character.`,
      neighborhoods: ['Beverly Drive', 'Armstrong Parkway area', 'Highland Park Village vicinity', 'Lakeside Drive', 'Turtle Creek area'],
      features: ['Historically appropriate fencing for century-old estates', 'Custom iron fencing and ornamental gates', 'Cedar fencing with period-appropriate detailing', 'Gate automation with modern security features', 'Restoration and matching of existing historic fence elements', 'Consultation with Highland Park\'s building review process'],
      whyLocal: `Highland Park's municipal regulations are among the most detailed in Texas regarding exterior property modifications. The town carefully reviews fence plans for material, height, style, and placement compliance. Our experience with Highland Park's review process helps ensure smooth approval and a final product that meets every requirement.`
    }
  },
  {
    slug: 'celina',
    name: 'Celina',
    state: 'TX',
    type: 'wealthy',
    medianIncome: '$171K',
    description: 'Booming growth with projected 48K population by 2026',
    heroIdx: 7,
    geo: { lat: '33.3246', lng: '-96.7847' },
    content: {
      intro: `Celina, TX is one of the fastest-growing cities in Texas, with a median household income of approximately $171K and a population projected to reach 48,000 by 2026. Celina's transformation from a small town to a thriving community has brought an influx of premium homes and master-planned developments that demand quality fencing.`,
      detail: `Celina's new communities feature modern architecture and larger lots, creating the perfect canvas for premium fence installations. As the city grows, early homeowners are setting the standard for quality — and a Fencetastic fence helps establish that standard from day one.`,
      neighborhoods: ['Light Farms', 'Mustang Lakes', 'Carter Ranch', 'Cambridge Crossing', 'Legacy Hills'],
      features: ['New construction fence coordination for Celina\'s booming developments', 'Premium materials for Celina\'s high-value new homes', 'HOA-compliant installations for master-planned communities', 'Large-lot fencing for Celina\'s generous lot sizes', 'Custom designs popular in Celina: horizontal cedar, modern iron', 'Fast turnaround to meet builder and homeowner timelines'],
      whyLocal: `Celina's rapid growth means building codes are being updated regularly. Our team stays current with the City of Celina's latest fence ordinances and works directly with local inspectors to ensure compliance. As Celina's neighbor in McKinney, we're one of the closest professional fence contractors to serve this booming community.`
    }
  },
  {
    slug: 'melissa',
    name: 'Melissa',
    state: 'TX',
    type: 'small',
    medianIncome: '$138K',
    description: 'Fast-growing community north of McKinney',
    heroIdx: 0,
    geo: { lat: '33.2860', lng: '-96.5728' },
    content: {
      intro: `Melissa, TX is a fast-growing community just north of McKinney with a median household income of approximately $138K. New master-planned communities are attracting families who want quality homes and quality fencing to match.`,
      detail: `Melissa's growth trajectory mirrors what McKinney experienced years ago, and our experience building thousands of fences in McKinney gives us unique insight into what Melissa homeowners need. From first-time fence installation in new builds to custom designs for established properties, we deliver premium results.`,
      neighborhoods: ['Walsh Trails', 'Stillwater Ranch', 'Sunset Point', 'Melissa Town Center'],
      features: ['New construction fence installation', 'Builder coordination for Melissa developments', 'Premium cedar fencing for new homes', 'HOA-compliant designs', 'Quick service from our nearby McKinney headquarters'],
      whyLocal: `Melissa is one of our closest service areas, just minutes north of our McKinney office. We provide fast estimates and efficient installations for Melissa homeowners.`
    }
  },
];

// Template function
function generatePage(city) {
  const heroImg = heroImages[city.heroIdx % heroImages.length];
  const galleryImgs = [
    galleryImages.wood[city.heroIdx % galleryImages.wood.length],
    galleryImages.wood[(city.heroIdx + 1) % galleryImages.wood.length],
    galleryImages.metal[city.heroIdx % galleryImages.metal.length],
    galleryImages.outdoor[city.heroIdx % galleryImages.outdoor.length],
  ];

  const incomeStr = city.medianIncome ? ` with a median household income of ${city.medianIncome}` : '';
  const neighborhoodList = city.content.neighborhoods.map(n => `<li>${n}</li>`).join('\n                ');
  const featuresList = city.content.features.map(f => `<li>${f}</li>`).join('\n                ');

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="icon" type="image/png" href="https://fencetastic.net/wp-content/uploads/2023/01/cropped-F-icon.png">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fence Contractor ${city.name} ${city.state} | Fence Installation & Repair | Fencetastic</title>
  <meta name="description" content="Professional fence installation and repair in ${city.name}, ${city.state}. Wood, metal, vinyl fences, custom gates, decks, and pergolas. AFA certified, 10-year warranty. Call (972) 480-9888 for a free estimate.">
  <meta name="keywords" content="fence contractor ${city.name} TX, fence installation ${city.name}, fence company ${city.name} TX, wood fence ${city.name}, vinyl fence ${city.name}, metal fence ${city.name}, custom gates ${city.name}, deck builder ${city.name}, pergola ${city.name}">
  <meta property="og:title" content="Fence Contractor ${city.name} TX | Fencetastic">
  <meta property="og:description" content="Professional fence installation in ${city.name}, TX. AFA certified, 10-year warranty. Free estimates.">
  <meta property="og:type" content="website">
  <link rel="canonical" href="https://fencetastic.net/${city.slug}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/style.css">
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FenceContractor",
    "name": "Fencetastic - DFW Fence, Deck & Outdoor",
    "url": "https://fencetastic.net/${city.slug}",
    "telephone": "(972) 480-9888",
    "email": "estimates@fencetastic.net",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "5237 China Berry Dr",
      "addressLocality": "McKinney",
      "addressRegion": "TX",
      "postalCode": "75070"
    },
    "areaServed": {
      "@type": "City",
      "name": "${city.name}",
      "geo": { "@type": "GeoCoordinates", "latitude": "${city.geo.lat}", "longitude": "${city.geo.lng}" }
    },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "120" }
  }
  </script>
</head>
<body>

  ${navHtml}

  <!-- Hero -->
  <section class="hero hero--short">
    <div class="hero__bg">
      <img src="${heroImg}" alt="Professional fence installation in ${city.name} Texas by Fencetastic" loading="eager">
    </div>
    <div class="hero__overlay"></div>
    <div class="container">
      <div class="hero__content">
        <div class="page-header__breadcrumb">
          <a href="/">Home</a> / <a href="/service-areas">Service Areas</a> / ${city.name}
        </div>
        <h1 class="hero__title">Fence Installation & Outdoor Solutions in <span>${city.name}, ${city.state}</span></h1>
        <p class="hero__subtitle">${city.description}${incomeStr}. Trusted fencing, decks, and pergolas backed by a 10-year warranty.</p>
        <div class="btn-group">
          <a href="tel:9724809888" class="btn btn--primary btn--lg">Get a Free Quote in ${city.name}</a>
          <a href="/gallery" class="btn btn--outline btn--lg">See Our Work</a>
        </div>
      </div>
    </div>
  </section>

  <!-- About Serving This City -->
  <section class="section">
    <div class="container">
      <div class="split">
        <div class="split__image reveal-left">
          <img src="${galleryImgs[0].src}" alt="Fence installation project in ${city.name} TX" loading="lazy">
        </div>
        <div class="split__content reveal-right">
          <span class="section-label">Serving ${city.name}, ${city.state}</span>
          <h2 class="section-title">Your Trusted ${city.name} Fence Contractor</h2>
          <p>${city.content.intro}</p>
          <p>${city.content.detail}</p>
          <a href="tel:9724809888" class="btn btn--primary mt-2">Schedule a Free Estimate</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Neighborhoods -->
  <section class="section section--warm">
    <div class="container">
      <div class="split split--reverse">
        <div class="split__image reveal-right">
          <img src="${galleryImgs[1].src}" alt="Quality fence craftsmanship for ${city.name} neighborhoods" loading="lazy">
        </div>
        <div class="split__content reveal-left">
          <span class="section-label">${city.name} Neighborhoods We Serve</span>
          <h2 class="section-title">Fencing for Every ${city.name} Community</h2>
          <p>We've installed fences throughout ${city.name}'s neighborhoods and communities, including:</p>
          <ul class="styled-list">
            ${neighborhoodList}
          </ul>
          <p>Don't see your ${city.name} neighborhood listed? We serve all areas within the city and surrounding communities.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Why This City Needs Us -->
  <section class="section">
    <div class="container">
      <div class="section-header section-header--center reveal">
        <span class="section-label">Why ${city.name} Homeowners Choose Fencetastic</span>
        <h2 class="section-title">Built for ${city.name}, Backed by a 10-Year Warranty</h2>
      </div>
      <ul class="split__list" style="max-width: 800px; margin: 0 auto;">
        ${featuresList}
      </ul>
      <div class="text-center mt-3 reveal">
        <p style="max-width: 700px; margin: 0 auto var(--space-md);">${city.content.whyLocal}</p>
      </div>
    </div>
  </section>

  <!-- Services Grid -->
  <section class="section section--warm">
    <div class="container">
      <div class="section-header section-header--center reveal">
        <span class="section-label">Our ${city.name} Services</span>
        <h2 class="section-title">Complete Fencing & Outdoor Solutions in ${city.name}</h2>
      </div>
      <div class="services-grid">
        <div class="service-card reveal reveal-delay-1">
          <div class="service-card__image">
            <img src="https://fencetastic.net/wp-content/uploads/2022/02/9a16c4_d417120a108543f7b487b06a1f683a9a_mv2_d_4032_3024_s_4_2.jpg" alt="Wood fence installation ${city.name} TX" loading="lazy">
            <div class="service-card__image-overlay"></div>
          </div>
          <div class="service-card__body">
            <h3 class="service-card__title">Wood Fences</h3>
            <p class="service-card__text">Premium Western Red Cedar fences built to last in ${city.name}'s Texas climate. Board on board, horizontal, side by side, and more.</p>
            <a href="/wood-fences" class="service-card__link">Learn More <span>&rarr;</span></a>
          </div>
        </div>
        <div class="service-card reveal reveal-delay-2">
          <div class="service-card__image">
            <img src="https://fencetastic.net/wp-content/uploads/2022/02/WhatsApp-Image-2024-03-05-at-12.57.22-4.jpeg" alt="Metal fence installation ${city.name} TX" loading="lazy">
            <div class="service-card__image-overlay"></div>
          </div>
          <div class="service-card__body">
            <h3 class="service-card__title">Metal Fences</h3>
            <p class="service-card__text">Iron, aluminum, and steel fencing for ${city.name} properties. Elegant security that lasts for decades.</p>
            <a href="/metal-fences" class="service-card__link">Learn More <span>&rarr;</span></a>
          </div>
        </div>
        <div class="service-card reveal reveal-delay-3">
          <div class="service-card__image">
            <img src="https://fencetastic.net/wp-content/uploads/2022/02/WhatsApp-Image-2024-02-22-at-17.40.24-20.jpeg" alt="Vinyl fence installation ${city.name} TX" loading="lazy">
            <div class="service-card__image-overlay"></div>
          </div>
          <div class="service-card__body">
            <h3 class="service-card__title">Vinyl Fences</h3>
            <p class="service-card__text">Zero-maintenance vinyl fencing for ${city.name} homeowners who want lasting beauty without the upkeep.</p>
            <a href="/vinyl-fences" class="service-card__link">Learn More <span>&rarr;</span></a>
          </div>
        </div>
        <div class="service-card reveal reveal-delay-1">
          <div class="service-card__image">
            <img src="https://fencetastic.net/wp-content/uploads/2022/02/WhatsApp-Image-2024-02-22-at-17.51.38.jpeg" alt="Custom gate installation ${city.name} TX" loading="lazy">
            <div class="service-card__image-overlay"></div>
          </div>
          <div class="service-card__body">
            <h3 class="service-card__title">Custom Gates</h3>
            <p class="service-card__text">Automatic and manual gate installations for ${city.name} residential and commercial properties.</p>
            <a href="/custom-gates" class="service-card__link">Learn More <span>&rarr;</span></a>
          </div>
        </div>
        <div class="service-card reveal reveal-delay-2">
          <div class="service-card__image">
            <img src="https://fencetastic.net/wp-content/uploads/2022/02/WhatsApp-Image-2024-02-22-at-17.40.24-16.jpeg" alt="Deck construction ${city.name} TX" loading="lazy">
            <div class="service-card__image-overlay"></div>
          </div>
          <div class="service-card__body">
            <h3 class="service-card__title">Decks</h3>
            <p class="service-card__text">Custom-built decks for ${city.name} homes using Trex composite, cedar, and premium materials.</p>
            <a href="/decks" class="service-card__link">Learn More <span>&rarr;</span></a>
          </div>
        </div>
        <div class="service-card reveal reveal-delay-3">
          <div class="service-card__image">
            <img src="https://fencetastic.net/wp-content/uploads/2022/02/WhatsApp-Image-2024-02-22-at-17.40.24-8.jpeg" alt="Pergola installation ${city.name} TX" loading="lazy">
            <div class="service-card__image-overlay"></div>
          </div>
          <div class="service-card__body">
            <h3 class="service-card__title">Pergolas & Patios</h3>
            <p class="service-card__text">Shade structures and outdoor living spaces designed for ${city.name}'s year-round outdoor lifestyle.</p>
            <a href="/pergolas" class="service-card__link">Learn More <span>&rarr;</span></a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Gallery Preview -->
  <section class="section">
    <div class="container">
      <div class="section-header section-header--center reveal">
        <span class="section-label">Our Work in ${city.name}</span>
        <h2 class="section-title">Recent ${city.name} Area Projects</h2>
      </div>
      <div class="gallery-grid reveal" style="columns: 2;">
${galleryImgs.map(img => `        <div class="gallery-item">
          <img src="${img.src}" alt="${img.caption} - ${city.name} TX" loading="lazy">
          <div class="gallery-item__overlay">
            <span class="gallery-item__caption">${img.caption}</span>
          </div>
        </div>`).join('\n')}
      </div>
      <div class="text-center mt-3 reveal">
        <a href="/gallery" class="btn btn--outline-dark">View Full Gallery</a>
      </div>
    </div>
  </section>

  <!-- Testimonial -->
  <section class="section section--dark">
    <div class="container">
      <div class="testimonial-card reveal">
        <div class="testimonial-card__quote">&ldquo;</div>
        <div class="testimonial-card__stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
        <p class="testimonial-card__text">The quality was through the roof. Their workers stayed after the project, even working in the rain. The new fence is so strong and looks so good, I've had neighbors comment on how great it looks.</p>
        <div class="testimonial-card__author">&mdash; H. Arnold, ${city.name} Area Homeowner</div>
      </div>
    </div>
  </section>

  <!-- CTA Banner -->
  <section class="cta-banner">
    <div class="cta-banner__bg"></div>
    <div class="container">
      <div class="cta-banner__content reveal">
        <h2 class="cta-banner__title">Ready to Start Your ${city.name} Fence Project?</h2>
        <p class="cta-banner__text">Get a free, no-obligation estimate for your ${city.name} property. Our team is ready to bring your vision to life.</p>
        <div class="btn-group" style="justify-content: center;">
          <a href="tel:9724809888" class="btn btn--primary btn--lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
            Call (972) 480-9888
          </a>
          <a href="mailto:estimates@fencetastic.net" class="btn btn--outline btn--lg">Email for Estimate</a>
        </div>
      </div>
    </div>
  </section>

  ${footerHtml}

  <div class="lightbox">
    <button class="lightbox__close">&times;</button>
    <img src="" alt="">
    <div class="lightbox__caption"></div>
  </div>

  <button class="back-to-top" aria-label="Back to top">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 15l-6-6-6 6"/></svg>
  </button>

  <a href="tel:9724809888" class="mobile-call">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.362 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
    Call for Free Quote: (972) 480-9888
  </a>

  <script src="/js/main.js"></script>
</body>
</html>`;
}

// Generate all pages
let count = 0;
cities.forEach(city => {
  const html = generatePage(city);
  const filePath = path.join(__dirname, 'public', `${city.slug}.html`);
  fs.writeFileSync(filePath, html);
  count++;
  console.log(`Created: ${city.slug}.html (${city.name}, ${city.state})`);
});

console.log(`\nDone! Generated ${count} city pages.`);
