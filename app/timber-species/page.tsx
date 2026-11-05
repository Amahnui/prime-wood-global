"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  TreeEvergreen,
  WhatsappLogo,
  EnvelopeSimple,
  ArrowRight,
  MagnifyingGlass,
  CheckCircle,
  ShieldCheck,
  Boat,
  Sliders,
  CaretRight,
  Sparkle,
} from "@phosphor-icons/react";
import { company } from "@/lib/content";

interface SpeciesItem {
  id: string;
  name: string;
  scientificName: string;
  tradeNames: string;
  category: string;
  tagline: string;
  densityBadge: string;
  durabilityBadge: string;
  swatchBg: string;
  swatchGradient: string;
  realImage?: string;
  secondaryImage?: string;
  generalCharacteristics: string;
  appearance: string;
  density: string;
  durability: string;
  typicalApplications: string;
  sawnTimberConsiderations: string;
  logSupplyConsiderations: string;
  buyerConsiderations: string;
}

const speciesData: SpeciesItem[] = [
  {
    id: "azobe",
    name: "Azobé",
    scientificName: "Lophira alata",
    tradeNames: "Ekki · Bongossi · Red Ironwood",
    category: "Heavy Marine & Civil",
    tagline:
      "One of the heaviest and hardest commercial hardwoods in the world, widely used for marine and heavy civil structures.",
    densityBadge: "1,050 - 1,150 kg/m³",
    durabilityBadge: "Class 1 · Very Durable",
    swatchBg: "#3b1e16",
    swatchGradient: "from-[#4a241b] via-[#381a13] to-[#2b120c]",
    realImage: "/images/1453b-1.jpg",
    generalCharacteristics:
      "Azobé is a very dense, extremely hard West and Central African hardwood. It is valued where supreme mechanical strength, wear resistance, and long service life in severely exposed marine and hydraulic conditions are the priority, rather than appearance or ease of machining.",
    appearance:
      "Heartwood is dark red-brown to deep chocolate violet-brown, often speckled with conspicuous white or light yellow mineral deposits in the pores. Clearly distinct from the paler, narrow sapwood. The grain is heavily interlocked and the texture is coarse and fibrous.",
    density:
      "Air-dry density is commonly cited at roughly 1,000–1,100 kg/m³ (green density reaches 1,200–1,300 kg/m³), which means Azobé sinks in water. Expect heavy loads per cubic metre; container weight limits (typically 21–25 tonnes) are usually reached before container volume.",
    durability:
      "Generally classed as Natural Durability Class 1 (Very Durable), with extraordinary natural resistance to fungal decay and marine borers (teredo) in exposed coastal waters. Outstanding performance depends on proper application and strictly excluding sapwood.",
    typicalApplications:
      "Harbour lock gates, marine jetties, fender piles, sheet piling, heavy railway sleepers, coastal bridge trusses, heavy industrial flooring, crane outrigger mats, and other demanding civil engineering works.",
    sawnTimberConsiderations:
      "Its extreme density makes sawing slow and blunts tools rapidly; stellite-tipped saws and reduced feed rates are essential. Drying is slow and must be carefully controlled under covered shade to limit checking, end splits, and distortion. Heavy beam sections are a standard sawn specification.",
    logSupplyConsiderations:
      "Logs can be very large and heavy (60cm to 120cm+ diameter). Buyers should agree diameter classes, length specifications (4.0m to 11.5m), and confirm port loading methods because highway axle-load and container weight limits are reached before cubic capacity.",
    buyerConsiderations:
      "State the end use, required section sizes, and dimensional tolerances (typically ±2mm on heavy sections). For marine and civil structural work, confirm any grading criteria (e.g. D70 strength class EN 338) or phytosanitary requirements in your destination market before ordering.",
  },
  {
    id: "tali",
    name: "Tali",
    scientificName: "Erythrophleum ivorense / suaveolens",
    tradeNames: "Eloun · Missanda · Alui",
    category: "Structural & Decking",
    tagline:
      "A very hard, resilient African timber increasingly specified across Europe and Asia as a premier sustainable alternative to Azobé for outdoor decking, civil structures, and heavy construction.",
    densityBadge: "900 - 1,000 kg/m³",
    durabilityBadge: "Class 1 · Very Durable",
    swatchBg: "#8a5020",
    swatchGradient: "from-[#9c5c24] via-[#7d4416] to-[#633510]",
    realImage: "/images/bilinga 60x40.jpg",
    generalCharacteristics:
      "Tali is a heavy, hard-wearing timber prized for remarkable compressive and bending strength. It has become a premier choice for outdoor pedestrian decking, civil infrastructure, and hydraulic construction where both structural integrity and handsome weathered aesthetics are required.",
    appearance:
      "Freshly sawn heartwood displays warm yellow-orange to reddish-brown tones, darkening upon atmospheric exposure to a rich, luminous russet-brown. Sapwood is narrow (2–5cm), pale greyish-yellow, and clearly differentiated. Grain is irregular and heavily interlocked with a coarse texture.",
    density:
      "Air-dry density averages 900 to 1,000 kg/m³ at 12% moisture content (green density approximately 1,100 kg/m³). Dense enough to resist heavy foot and vehicular traffic without mechanical indentation. Container payloads average 20–22 m³ per 20ft box.",
    durability:
      "Class 1 (Very Durable). Excellent natural resistance to wood-rotting fungi, dry wood insects, and marine borers in temperate waters. Proven track record in humid outdoor environments with permanent ground or freshwater contact.",
    typicalApplications:
      "Heavy outdoor decking, coastal boardwalks, footbridges, railway sleepers, hydraulic revetments, industrial warehouse flooring, garden pergolas, sound barriers, and marine wharf construction.",
    sawnTimberConsiderations:
      "Requires carbide or stellite tooling due to hardness and trace silica content. Pre-drilling is required for all screws and bolts. Air seasoning should proceed under cover; dries slowly with a moderate tendency to surface checking if exposed to direct tropical sun.",
    logSupplyConsiderations:
      "Cylindrical, well-formed forest boles typically 65cm to 100cm+ in diameter. Straight trunks yield consistent volumes of long, clean structural planks and squared beams with minimal sapwood waste.",
    buyerConsiderations:
      "Specify whether heart-free (FOHC) or boxed-heart is acceptable. For decking contracts, specify pre-profiled grooving (anti-slip) or smooth four-sides-planed (S4S) requirements, along with target moisture condition (AD vs fresh-cut).",
  },
  {
    id: "sapelli",
    name: "Sapelli",
    scientificName: "Entandrophragma cylindricum",
    tradeNames: "Sapele · Sapelli Mahogany · Aboudikro",
    category: "Joinery & Cabinetry",
    tagline:
      "The premier West African mahogany substitute, celebrated globally for its warm cedar hue, striking ribbon-stripe grain, and exceptional stability for fine joinery.",
    densityBadge: "640 - 720 kg/m³",
    durabilityBadge: "Class 2 · Durable",
    swatchBg: "#632c19",
    swatchGradient: "from-[#78361f] via-[#5c2715] to-[#451b0d]",
    realImage: "/images/apelli 86x72.jpg",
    generalCharacteristics:
      "Sapelli is one of Africa's most prestigious commercial export timbers. It offers a classic luxury mahogany aesthetic with superior surface hardness, excellent stability once seasoned, and a distinct subtle cedar-like scent when freshly milled.",
    appearance:
      "Heartwood ranges from medium reddish-brown to rich dark reddish-brown with luminous coppery undertones. Quarter-sawn boards reveal a spectacular, uniform ribbon-stripe figure produced by alternating spiral grain. Lustrous surface that takes stains and high-gloss finishes beautifully.",
    density:
      "Air-dry density is 640 to 720 kg/m³ at 12% moisture content. Provides an optimal balance between solid structural mass and effortless mechanical machining for architectural millwork and premium furniture.",
    durability:
      "Class 2 (Durable). Heartwood offers solid resistance to fungal decay and moderate insect resistance. Ideal for exterior joinery when sealed, and virtually indestructible in interior architectural applications.",
    typicalApplications:
      "Architectural entry doors, window frames, luxury yacht cabinetry and decking, executive furniture, high-end wood flooring, decorative veneers, musical instruments (acoustic and electric guitars), and wall paneling.",
    sawnTimberConsiderations:
      "Saws and planes cleanly with conventional high-speed tooling. A reduced cutting angle (15°–20°) prevents grain tear-out on quarter-sawn ribbon faces. Dries relatively quickly; kiln-drying to 10–12% moisture content is widely requested and highly stable.",
    logSupplyConsiderations:
      "Large, straight cylindrical logs often 80cm to 140cm+ in diameter. High yield of wide, clear, defect-free boards with consistent color continuity across multi-container production runs.",
    buyerConsiderations:
      "Clearly specify grade (FAS / Prime export grade), sawing orientation (quarter-sawn for ribbon-stripe effect vs plain-sawn), moisture condition (Air-Dried vs Kiln-Dried 10–12%), and thickness tolerances (25mm, 32mm, 50mm, 75mm are standard).",
  },
  {
    id: "padouk",
    name: "Padouk",
    scientificName: "Pterocarpus soyauxii",
    tradeNames: "African Padauk · Coralwood · Barwood",
    category: "Decorative & Flooring",
    tagline:
      "A striking Central African hardwood famous for its brilliant coral-red coloration, rock-solid dimensional stability, and natural resistance to decay and insects.",
    densityBadge: "750 - 850 kg/m³",
    durabilityBadge: "Class 1 · Highly Durable",
    swatchBg: "#962818",
    swatchGradient: "from-[#ab301e] via-[#872012] to-[#66150a]",
    realImage: "/images/padouk 58x38.jpg",
    generalCharacteristics:
      "Padouk is celebrated internationally for its dramatic natural coral coloration, outstanding dimensional stability (scarcely moves once seasoned), and impressive mechanical strength. It is an elite material for both heavy outdoor installations and precision decorative crafts.",
    appearance:
      "Freshly cut heartwood is a vivid, breathtaking coral orange-red, gradually maturing under sunlight into a warm, sophisticated deep red-brown with dark streaks. Sapwood is narrow and pale beige-yellow. Texture is coarse with an open, straight to slightly interlocked grain.",
    density:
      "Air-dry density is 750 to 850 kg/m³ at 12% moisture content. Substantial and wear-resistant while maintaining pleasant working characteristics on high-end woodworking equipment. Container loads average 22–24 m³ per 20ft box.",
    durability:
      "Class 1 (Very Durable). High natural extractive content confers extreme resistance to termite attack, wood-boring insects, and fungi. Performs flawlessly in exterior exposed environments without chemical treatment.",
    typicalApplications:
      "Luxury exterior decking and cladding, high-traffic commercial flooring, bespoke furniture, woodturning, tool handles, xylophone bars and musical instrument bodies, marine trim, and decorative veneers.",
    sawnTimberConsiderations:
      "Saws cleanly with minimal blunting effect on cutters. Exceptional dimensional stability during air and kiln seasoning with virtually zero warping or surface checking. Machined surfaces polish to a rich natural luster; glues and fastens securely.",
    logSupplyConsiderations:
      "Straight, sound boles typically 60cm to 90cm diameter with minimal sapwood band. Available in fresh-cut round logs for specialty veneer slicing or dimensioned export lumber bundles.",
    buyerConsiderations:
      "Specify whether fresh coral-red or pre-seasoned stock is preferred. For luxury decking or flooring runs, state required width and thickness profiles. Padouk sawdust is bright red and fine; proper dust extraction during factory processing is recommended.",
  },
  {
    id: "ebony",
    name: "Ebony",
    scientificName: "Diospyros crassiflora",
    tradeNames: "African Ebony · Gaboon Ebony · Cameroon Ebony · Ébène Noire",
    category: "Decorative & Flooring",
    tagline:
      "The world's most coveted deep jet-black luxury hardwood, internationally celebrated for its ultra-dense grain, smooth satiny finish, and indispensable role in concert-grade lutherie, fingerboard blanks, and luxury artisanal turning.",
    densityBadge: "950 - 1,200 kg/m³",
    durabilityBadge: "Class 1 · Very Durable",
    swatchBg: "#111111",
    swatchGradient: "from-[#262626] via-[#141414] to-[#080808]",
    realImage: "/images/ebony_boards.jpg",
    secondaryImage: "/images/ebony_billets.jpg",
    generalCharacteristics:
      "Cameroon Ebony (Diospyros crassiflora) is recognized across international timber markets as the pinnacle of authentic African ebony. Possessing extraordinary density, an ultra-fine homogeneous cellular texture, and a lustrous jet-black coloration, it holds elite standing for master musical instrument fabrication (lutherie), acoustic components, luxury cutlery, and fine decorative turnery.",
    appearance:
      "Heartwood is deep jet-black to charcoal-black, occasionally displaying subtle dark brown-black mineral undertones or fine marbled streaks. Distinct from the pale creamy-white sapwood, which is cleanly excluded in export grades. The grain is predominantly straight to slightly irregular, yielding an exquisite satiny, semi-metallic natural sheen upon planing and fine sanding.",
    density:
      "Air-dry density ranges from 950 to 1,200 kg/m³ at 12% moisture content (green density exceeds 1,250–1,300 kg/m³), causing it to sink readily in water. It exhibits extraordinary compressive and bending strength with a Janka hardness exceeding 3,000 lbf, delivering unmatched surface durability and wear resistance against string friction and intense handling.",
    durability:
      "Class 1 (Very Durable). Extremely resistant to fungal rot, insect attack, and dry-wood borers. Its dense, non-porous structure makes it highly resilient against moisture absorption, oils, and perspiration when seasoned and buffed.",
    typicalApplications:
      "Stringed instrument fingerboards (guitar, violin, viola, cello, double bass), violin pegs, tailpieces, and chinrests, acoustic guitar bridges, piano sharps, woodwind bodies (clarinets, oboe bells), pool/snooker cues, luxury knife and cutlery handles, fine cabinetry inlays, luxury pen blanks, and bespoke turned art.",
    sawnTimberConsiderations:
      "Its extreme density demands sharp carbide-tipped or stellite tooling and moderate feed speeds. Saws cleanly with minimal tearout and polishes to a glass-smooth finish without heavy varnishes. End-grain surfaces must be promptly sealed with specialized paraffin wax (as standard on our export stock) to prevent drying checks and end splits during seasoning and transit.",
    logSupplyConsiderations:
      "Cameroon ebony trees produce modest trunk diameters (typically 25cm to 50cm+). Commercial supply is therefore concentrated on precision-cut billets, turning squares, fingerboard blanks, and select square flitches rather than massive sawn structural timbers. Every batch is graded, squared, and bundle-wrapped for export security.",
    buyerConsiderations:
      "Buyers should specify target dimensional specifications (e.g., standard guitar fingerboard blanks 500 × 70 × 9mm, violin fingerboard blanks, turning squares 40 × 40mm / 50 × 50mm, or custom billet sizes), color consistency preference (pure jet-black vs natural dark-streaked character), and target moisture content (air-dried seasoned stock with wax-sealed ends). Full Cameroonian legal timber verification and export documentation are supplied with each consignment.",
  },
  {
    id: "ayous",
    name: "Ayous",
    scientificName: "Triplochiton scleroxylon",
    tradeNames: "Obeche · Wawa · Samba",
    category: "Lightweight & Thermal",
    tagline:
      "A pale, lightweight, uniform African hardwood with exceptional workability, low thermal conductivity, and ideal characteristics for sauna interiors, mouldings, and thermal modification.",
    densityBadge: "380 - 450 kg/m³",
    durabilityBadge: "Class 5 · Untreated / Class 1-2 TMT",
    swatchBg: "#cfb585",
    swatchGradient: "from-[#ddc598] via-[#c7ab77] to-[#aa8e58]",
    realImage: "/images/1852a-1.jpg",
    generalCharacteristics:
      "Ayous is one of Central Africa's most versatile lightweight hardwoods. Its soft texture, low density, uniform grain, and freedom from resin or odor make it the global standard for sauna components, picture mouldings, and core veneers.",
    appearance:
      "Heartwood and sapwood are rarely distinct; uniform creamy white to pale straw-yellow that matures to light golden tan. Grain is interlocked, producing a faint ribbon figure on quartered surfaces with a medium, satiny texture.",
    density:
      "Air-dry density is 380 to 450 kg/m³ at 12% moisture content. Very lightweight and easy to handle; container shipments achieve high volumetric efficiency (~32–38 m³ per 40ft HC container within standard gross weight allowances).",
    durability:
      "Natural Durability Class 5 (Non-durable in untreated exterior conditions). Susceptible to insect and fungal attack in raw state. Extensively thermally modified (TMT / Thermo-Ayous) to achieve Class 1–2 durability for luxury architectural exterior cladding.",
    typicalApplications:
      "Sauna slats, benches, and wall paneling (remains cool to touch and splinter-free), picture frames, architectural mouldings, internal joinery, model making, core stock for blockboard, and Thermo-Ayous exterior facades.",
    sawnTimberConsiderations:
      "Extremely easy to saw, plane, mould, and nail without splitting. Dries rapidly with minimal degrade. Fresh logs must be converted and dried swiftly or anti-stain dip treated to prevent blue stain fungal discoloration during tropical transit.",
    logSupplyConsiderations:
      "Massive, straight cylindrical logs often 80cm to 160cm+ in diameter. Exceptional lumber recovery yield with large percentages of clear, knot-free boards in long export lengths (up to 5.5m+).",
    buyerConsiderations:
      "Specify moisture requirement (Kiln-Dried 8–10% for sawn mouldings or green with anti-fungal dip for prompt European thermal modification). State tolerance on pin knots and whether quarter-sawn for sauna manufacture is required.",
  },
  {
    id: "iroko",
    name: "Iroko",
    scientificName: "Milicia excelsa",
    tradeNames: "African Teak · Odum · Kambala",
    category: "Structural & Joinery",
    tagline:
      "Known as African Teak for its remarkable weather durability, dimensional stability, and natural oily grain that repels water in rigorous outdoor and marine environments.",
    densityBadge: "650 - 750 kg/m³",
    durabilityBadge: "Class 1-2 · Very Durable",
    swatchBg: "#7a4e1d",
    swatchGradient: "from-[#8c5a24] via-[#6e4215] to-[#54300a]",
    realImage: "/images/iroko.jpg",
    generalCharacteristics:
      "Iroko is an iconic African timber renowned for decades as the premier alternative to Asian Teak (Tectona grandis). It combines outstanding strength, superb outdoor weatherability, and dimensional stability with an attractive golden-brown timber aesthetic.",
    appearance:
      "Freshly sawn heartwood is distinct yellow to light golden olive, darkening rapidly upon exposure to a rich bronze-brown. Grain is interlocked, occasionally wavy, with a moderately coarse, open texture. Natural silica and calcium deposits occasionally appear in mature logs.",
    density:
      "Air-dry density is 650 to 750 kg/m³ at 12% moisture content. Substantial enough for heavy structural use yet easily worked into architectural elements and marine fittings. Container payloads average 23–26 m³.",
    durability:
      "Class 1–2 (Very Durable to Durable). High natural resin content provides exceptional resistance to rot, fungal decay, and termites without chemical treatment. Highly resistant to water immersion and coastal salt spray.",
    typicalApplications:
      "Exterior architectural cladding, outdoor tables and chairs, boat decking and marine fittings, exterior window sills, heavy entry doors, staircases, coastal boardwalks, and park infrastructure.",
    sawnTimberConsiderations:
      "Saws and machines well, though carbide tooling is recommended due to potential calcareous stone (stone flecks) and silica. Air-seasons and kiln-dries well with little distortion. Glues and finishes to an exceptional patina.",
    logSupplyConsiderations:
      "Large, well-formed forest boles typically 70cm to 120cm+ in diameter. Generates high yields of wide, long export-grade planks with minimal sapwood proportion.",
    buyerConsiderations:
      "Specify whether kiln-dried (KD 12–14%) or air-dried (AD) is required. For marine and exterior door fabrication, request 100% heartwood, free of sapwood and heart center (FOHC).",
  },
  {
    id: "bilinga",
    name: "Bilinga",
    scientificName: "Nauclea diderrichii",
    tradeNames: "Badi · Opepe · Kusia",
    category: "Heavy Marine & Civil",
    tagline:
      "A dense, exceptionally durable West African hardwood renowned for its vibrant golden-yellow hue and superior resistance to marine borers and fungal decay in harsh coastal environments.",
    densityBadge: "800 - 900 kg/m³",
    durabilityBadge: "Class 1 · Very Durable",
    swatchBg: "#b8943c",
    swatchGradient: "from-[#c9a54e] via-[#a68234] to-[#8a6c29]",
    realImage: "/images/bilinga 60x40.jpg",
    generalCharacteristics:
      "Bilinga is a premium African hardwood celebrated for its striking bright yellow heartwood, outstanding dimensional stability, and exceptional natural durability. It is increasingly specified for marine construction, heavy civil engineering, and luxury exterior applications where both performance and distinctive aesthetics are paramount.",
    appearance:
      "Freshly sawn heartwood displays a brilliant golden yellow to orange-yellow color that darkens gradually to a warm honey-gold patina upon UV exposure. Sapwood is pale cream-yellow, clearly demarcated. Grain is typically interlocked with a medium to coarse texture, producing an attractive ribbon figure when quarter-sawn.",
    density:
      "Air-dry density ranges from 800 to 900 kg/m³ at 12% moisture content (green density approaches 1,000 kg/m³). Heavy and robust, with excellent load-bearing capacity. Container shipments average 21–24 m³ per 20ft container due to weight density.",
    durability:
      "Class 1 (Very Durable). Outstanding natural resistance to wood-destroying fungi, termites, and marine borers including teredo. Proven long-term performance in direct ground contact, freshwater immersion, and tropical coastal marine environments without chemical treatment.",
    typicalApplications:
      "Marine piling, dock structures, jetty fender systems, heavy outdoor decking, coastal boardwalks, railway sleepers, hydraulic bridge timbers, exterior architectural cladding, heavy-duty industrial flooring, and specialty boat building.",
    sawnTimberConsiderations:
      "Moderately difficult to saw due to high density; carbide or stellite-tipped tooling is recommended to minimize blunting. Machines to a smooth finish with sharp cutters. Dries slowly under controlled conditions; requires careful air-seasoning under cover to prevent surface checking and end splits. Pre-drilling essential for all fasteners.",
    logSupplyConsiderations:
      "Large cylindrical logs typically 60cm to 100cm+ in diameter with straight, clean boles. High recovery yields of wide, long planks with consistent color and minimal sapwood. Logs are heavy; handling equipment and transport logistics must account for weight per cubic meter.",
    buyerConsiderations:
      "Specify moisture requirement (Air-Dried vs Kiln-Dried to 12–14%), acceptable defect levels (FAS export grade vs #1 Common), and sawing specification (quarter-sawn for marine piles, plain-sawn for decking). Confirm phytosanitary certification and CITES compliance for your destination market. For marine applications, request 100% heartwood specification (FOHC).",
  },
  {
    id: "afromosia",
    name: "Afromosia",
    scientificName: "Pericopsis elata",
    tradeNames: "African Teak · Assamela · Kokrodua",
    category: "Joinery & Cabinetry",
    tagline:
      "An elite CITES-listed African hardwood prized globally as a sustainable teak alternative, offering rich honey-brown tones, exceptional stability, and superior joinery performance for luxury applications.",
    densityBadge: "700 - 800 kg/m³",
    durabilityBadge: "Class 1 · Very Durable",
    swatchBg: "#965a2f",
    swatchGradient: "from-[#a86838] via-[#854f26] to-[#6d3f1c]",
    realImage: "/images/AFROMOSIA_log.jpg",
    generalCharacteristics:
      "Afromosia (CITES Appendix II) is among Africa's most prestigious commercial timbers, celebrated internationally as a premium sustainable alternative to Asian Teak. It delivers outstanding dimensional stability, superior machining characteristics, and a luxurious aesthetic for high-end architectural joinery, yacht interiors, and executive furniture.",
    appearance:
      "Heartwood is a luminous golden-brown to rich honey-brown with occasional darker brown streaks, darkening to a deep amber-bronze with age and sunlight exposure. Sapwood is narrow, pale yellowish-white, sharply demarcated. Grain is typically straight to slightly interlocked with a fine, uniform texture and natural luster.",
    density:
      "Air-dry density is 700 to 800 kg/m³ at 12% moisture content. Dense and solid yet highly workable with hand and machine tools. Provides an optimal balance of structural strength and precision machinability for fine joinery. Container loads average 22–25 m³.",
    durability:
      "Class 1 (Very Durable). High natural silica and extractive content provides exceptional resistance to fungal decay, termite attack, and marine borers. Performs flawlessly in exterior exposed environments and tropical climates without preservative treatment.",
    typicalApplications:
      "Luxury yacht decking and cabinetry, high-end exterior doors and window frames, premium parquet flooring, executive furniture, architectural millwork, boat building, garden furniture, laboratory benches, and decorative veneers for prestige interiors.",
    sawnTimberConsiderations:
      "Machines beautifully with conventional high-speed steel tooling, though carbide cutters extend tool life due to natural silica. Planes, molds, and turns to an exceptional smooth finish. Glues, screws, and finishes superbly. Dries slowly and evenly with minimal degrade; kiln-drying to 10–12% moisture content yields outstanding stability. Fine sawdust may cause mild skin irritation; dust extraction recommended.",
    logSupplyConsiderations:
      "Large, straight cylindrical logs typically 70cm to 100cm+ in diameter. High lumber recovery with minimal sapwood waste. All exports require valid CITES permits from Cameroon Management Authority; buyers must secure corresponding import permits. Lead times may extend 4–6 weeks for CITES documentation processing.",
    buyerConsiderations:
      "CRITICAL: Afromosia is CITES Appendix II regulated. Confirm CITES import permit requirements for your destination country BEFORE ordering. Specify kiln-dried (KD 10–12%) or air-dried (AD) condition, grade (FAS vs Select & Better), and sawing orientation (plain-sawn vs quarter-sawn). For yacht decking, request narrow sapwood band and pre-planed smooth four sides (S4S) with anti-slip grooves as needed.",
  },
  {
    id: "doussie",
    name: "Doussié",
    scientificName: "Afzelia spp.",
    tradeNames: "Afzelia · Doussie · Lingue",
    category: "Structural & Decking",
    tagline:
      "A premium African hardwood famous for its rich reddish-brown color, rock-solid dimensional stability, and outstanding durability, making it the gold standard for luxury exterior decking worldwide.",
    densityBadge: "800 - 920 kg/m³",
    durabilityBadge: "Class 1 · Very Durable",
    swatchBg: "#6b3419",
    swatchGradient: "from-[#7e3e1f] via-[#5f2b14] to-[#4a1f0d]",
    realImage: "/images/doussie.jpg",
    generalCharacteristics:
      "Doussié is Africa's premier commercial decking timber, renowned globally for its striking aesthetic appeal, exceptional dimensional stability once seasoned, and proven long-term durability in exposed outdoor installations. It is the first-choice material for high-end residential and commercial exterior decking projects across Europe, Asia, and the Middle East.",
    appearance:
      "Heartwood is a warm reddish-brown to deep mahogany-red with subtle golden highlights, darkening to a rich, deep chocolate-brown patina with UV exposure. Sapwood is narrow, pale yellow-cream, clearly distinguished. Grain is interlocked, producing a subtle ribbon stripe on quarter-sawn surfaces. Texture is medium to coarse with natural luster.",
    density:
      "Air-dry density is 800 to 920 kg/m³ at 12% moisture content. Very heavy and dense with excellent wear resistance and impact strength. Container payloads average 20–23 m³ per 20ft container. Weight limits are typically reached before volumetric capacity.",
    durability:
      "Class 1 (Very Durable). Superior natural resistance to wood-rotting fungi, termites, dry-wood borers, and moderate marine borer resistance. Exceptional performance in direct ground contact and permanent outdoor exposure without chemical treatment. Proven service life exceeding 25+ years in tropical and temperate climates.",
    typicalApplications:
      "Premium residential and commercial exterior decking, coastal boardwalks, swimming pool surrounds, luxury yacht decking, exterior cladding, heavy-duty industrial flooring, railway sleepers, bridge decking, garden furniture, and architectural millwork.",
    sawnTimberConsiderations:
      "Moderately difficult to saw and machine due to high density and interlocked grain. Carbide or stellite tooling essential to minimize blunting. Pre-drilling required for all screws and nails. Dries slowly; careful air-seasoning under shade is recommended to minimize surface checking and end splits. Kiln-drying to 12–14% moisture content yields excellent stability. Takes oils and finishes exceptionally well.",
    logSupplyConsiderations:
      "Large, straight cylindrical logs typically 70cm to 110cm+ in diameter with minimal sapwood. High recovery yields of wide, long, clear boards with consistent color. Logs are heavy; ensure adequate loading and handling equipment capacity at discharge ports.",
    buyerConsiderations:
      "Specify moisture condition (Kiln-Dried 12–14% for interior use; Air-Dried or Fresh-Cut acceptable for exterior decking if client will air-season on site). For premium decking projects, request smooth four-sides planed (S4S) or specify anti-slip groove profiling. Confirm acceptable defect levels (FAS export grade vs Select & Better). State whether 100% heartwood (FOHC) or boxed-heart permissible.",
  },
  {
    id: "wenge",
    name: "Wengé",
    scientificName: "Millettia laurentii",
    tradeNames: "Wenge · Panga Panga · Awong",
    category: "Decorative & Flooring",
    tagline:
      "One of the darkest and most striking African hardwoods, famous for its dramatic nearly-black color with fine light streaks, exceptional hardness, and supreme wear resistance for high-traffic flooring and luxury furniture.",
    densityBadge: "850 - 920 kg/m³",
    durabilityBadge: "Class 1 · Very Durable",
    swatchBg: "#1a1410",
    swatchGradient: "from-[#2b1f16] via-[#1a1410] to-[#0d0906]",
    realImage: "/images/wenge.jpg",
    generalCharacteristics:
      "Wengé is one of the most visually distinctive commercial African hardwoods, celebrated internationally for its deep chocolate-brown to nearly black heartwood dramatically contrasted by fine golden-tan parenchyma lines. Its exceptional density, hardness (Janka ~1,930 lbf), and wear resistance make it a premier choice for high-end architectural flooring and statement furniture pieces.",
    appearance:
      "Heartwood ranges from medium chocolate-brown to very dark brown, almost black, with striking fine, closely-spaced yellowish-tan to golden parenchyma lines creating a distinctive linear pattern. Sapwood is narrow, pale yellowish-white, sharply demarcated. Grain is straight to slightly interlocked with a coarse, open texture.",
    density:
      "Air-dry density is 850 to 920 kg/m³ at 12% moisture content. Very heavy and extremely hard with outstanding resistance to impact, wear, and mechanical indentation. Container payloads typically 20–22 m³ per 20ft container due to weight constraints.",
    durability:
      "Class 1 (Very Durable). Excellent natural resistance to fungal decay, termites, and dry-wood borers. Performs exceptionally well in interior applications and moderate exterior exposure when properly sealed. Not recommended for permanent ground contact or marine applications.",
    typicalApplications:
      "High-traffic commercial and residential flooring, luxury furniture, cabinetry, decorative veneers, turned objects, musical instruments (fingerboards, bridges), knife and tool handles, architectural accents, and contrasting inlays.",
    sawnTimberConsiderations:
      "Moderately difficult to work due to high density and coarse texture. Carbide tooling recommended to minimize blunting. Can cause splinters when handling; coarse grain may tear out during planing if cutters are not razor-sharp. Pre-drilling required for nails and screws. Glues, stains, and finishes satisfactorily with proper surface preparation. Dust may cause skin and respiratory irritation; use proper extraction.",
    logSupplyConsiderations:
      "Straight cylindrical logs typically 60cm to 90cm diameter with minimal sapwood. Good lumber recovery with consistent dark color. Supply can be limited compared to high-volume commercial species; confirm availability and lead times before large orders.",
    buyerConsiderations:
      "Specify kiln-dried (KD 8–10%) for flooring and interior millwork to ensure dimensional stability. For flooring, request defect-free FAS grade with uniform color. State acceptable sapwood content (typically excluded for premium applications). Wengé dust is a known irritant; ensure factory processing facilities have adequate dust extraction systems.",
  },
  {
    id: "okan",
    name: "Okan",
    scientificName: "Cylicodiscus gabunensis",
    tradeNames: "Denya · Bongossi Yellow · African Greenheart",
    category: "Heavy Marine & Civil",
    tagline:
      "An exceptionally dense and durable West African hardwood renowned for its bright golden-yellow color and outstanding resistance to marine borers, fungal decay, and extreme environmental conditions in heavy hydraulic and coastal construction.",
    densityBadge: "850 - 950 kg/m³",
    durabilityBadge: "Class 1 · Very Durable",
    swatchBg: "#c49b3c",
    swatchGradient: "from-[#d4ab4e] via-[#b88a34] to-[#9c7128]",
    realImage: "/images/okan.jpg",
    generalCharacteristics:
      "Okan is a premium heavy construction timber prized for its exceptional natural durability and mechanical strength (comparable to D40 strength class EN 338). Often called African Greenheart due to performance similarities to true Greenheart, Okan excels in the most demanding marine, hydraulic, and civil engineering applications where long service life under extreme exposure is paramount.",
    appearance:
      "Freshly sawn heartwood displays a bright golden-yellow to orange-yellow color, darkening gradually with atmospheric exposure to a rich golden-brown. Sapwood is narrow, pale cream-yellow, clearly differentiated. Grain is interlocked, often irregular, with a coarse texture and moderate natural luster.",
    density:
      "Air-dry density is 850 to 950 kg/m³ at 12% moisture content (green density 1,000 to 1,200 kg/m³). Extremely heavy and dense with superior load-bearing capacity. Container weight limits typically reached before volumetric capacity; expect 19–22 m³ per 20ft container.",
    durability:
      "Class 1 (Very Durable). Outstanding natural resistance to wood-rotting fungi, termites, dry-wood borers, and marine borers including teredo in tropical coastal waters. Exceptional performance in permanent ground contact, freshwater immersion, and seawater exposure without chemical treatment. Proven service life exceeding 30+ years in marine structures.",
    typicalApplications:
      "Marine piling, dock structures, jetty fender systems, coastal lock gates, heavy bridge construction, railway sleepers, hydraulic engineering, heavy-duty decking, crane outrigger mats, coastal boardwalks, and industrial marine fittings.",
    sawnTimberConsiderations:
      "Very difficult to saw and machine due to extreme density and irregular interlocked grain. Requires carbide or stellite-tipped tooling; expect rapid blunting. Reduced feed rates and sharp cutters essential. Pre-drilling mandatory for all fasteners. Dries slowly; controlled air-seasoning under cover essential to prevent severe surface checking and end splitting. Glues satisfactorily with epoxy-based adhesives.",
    logSupplyConsiderations:
      "Large, straight cylindrical logs typically 60cm to 100cm+ diameter. Heavy logs require specialized loading equipment and handling procedures. High recovery yields of long, clean structural timbers. Confirm port loading capacity and container weight restrictions before ordering.",
    buyerConsiderations:
      "Specify moisture condition (Air-Dried acceptable for marine/civil work; Kiln-Dried 12–14% for precision architectural applications). For marine piling and structural work, state required section dimensions, length specifications (typically 4m to 12m), and confirm grading criteria (e.g., D40 strength class EN 338). Verify phytosanitary certification requirements for destination market.",
  },
  {
    id: "moabi",
    name: "Moabi",
    scientificName: "Baillonella toxisperma",
    tradeNames: "Njabi · Djave · Muamba",
    category: "Heavy Marine & Civil",
    tagline:
      "A majestic, extremely dense Central African hardwood celebrated for its rich chocolate-red color, exceptional durability, and supreme resistance to marine borers, making it a premier choice for heavy structural engineering and luxury yacht construction.",
    densityBadge: "850 - 1,000 kg/m³",
    durabilityBadge: "Class 1 · Very Durable",
    swatchBg: "#5c2d1a",
    swatchGradient: "from-[#6e3620] via-[#522614] to-[#3d1a0d]",
    realImage: "/images/moabi.jpg",
    generalCharacteristics:
      "Moabi is one of Central Africa's most prestigious heavy construction timbers, sourced from massive forest giants that can live for centuries. It combines exceptional density (Janka hardness ~2,270 lbf), outstanding dimensional stability, and proven long-term durability in the harshest marine and civil engineering environments. Increasingly specified for luxury yacht decking and high-end structural projects.",
    appearance:
      "Heartwood is a rich, warm reddish-brown to deep chocolate-brown with subtle pinkish undertones, darkening to a lustrous deep mahogany patina with age and UV exposure. Sapwood is narrow, pale pinkish-yellow, clearly demarcated. Grain is typically interlocked, occasionally wavy, with a medium to coarse texture and high natural luster.",
    density:
      "Air-dry density is 850 to 1,000 kg/m³ at 12% moisture content (green density approaches 1,100 kg/m³). Very heavy and extremely hard with superior compressive and bending strength. Container shipments average 19–22 m³ per 20ft container due to weight limitations.",
    durability:
      "Class 1 (Very Durable). Exceptional natural resistance to wood-destroying fungi, termites, and marine borers. Rarely attacked by marine teredo in tropical coastal waters. Outstanding performance in permanent ground contact, freshwater and saltwater immersion, and severe outdoor exposure without preservative treatment.",
    typicalApplications:
      "Luxury yacht decking and marine trim, heavy marine piling, dock structures, coastal bridge construction, hydraulic lock gates, railway sleepers, heavy-duty industrial flooring, exterior cladding, luxury furniture, architectural millwork, and decorative veneers.",
    sawnTimberConsiderations:
      "Moderately difficult to saw and machine due to high density and interlocked grain. Carbide tooling recommended for extended tool life. High silica content (similar to Teak) can rapidly dull conventional high-speed steel cutters. Machines to a beautiful smooth finish with sharp cutters. Pre-drilling required for screws and nails. Dries slowly; controlled kiln-drying or careful air-seasoning under cover essential. Excellent dimensional stability once seasoned. Glues, finishes, and oils superbly.",
    logSupplyConsiderations:
      "Very large cylindrical logs often 80cm to 150cm+ diameter sourced from mature old-growth trees. Exceptional lumber recovery with wide, clear, defect-free boards. Logs are extremely heavy; specialized port handling equipment required. Supply is more limited than high-volume species; confirm availability and lead times.",
    buyerConsiderations:
      "Specify moisture requirement (Kiln-Dried 10–12% for yacht decking and precision millwork; Air-Dried acceptable for heavy construction). For yacht decking, request FAS export grade, smooth four-sides planed (S4S), with optional anti-slip grooving. State acceptable sapwood content (typically excluded for premium marine applications). Confirm phytosanitary certification and CITES compliance for your destination market.",
  },
  {
    id: "bubinga",
    name: "Bubinga",
    scientificName: "Guibourtia spp.",
    tradeNames: "African Rosewood · Kevazingo · Essingang",
    category: "Joinery & Cabinetry",
    tagline:
      "An elite African hardwood prized globally for its spectacular reddish-purple heartwood with dramatic darker veining, exceptional density, and stunning figured grain perfect for high-end furniture, decorative veneers, and musical instruments.",
    densityBadge: "850 - 950 kg/m³",
    durabilityBadge: "Class 1-2 · Very Durable",
    swatchBg: "#6e2c2c",
    swatchGradient: "from-[#7d3535] via-[#5f2424] to-[#481717]",
    realImage: "/images/bubinga.jpg",
    generalCharacteristics:
      "Bubinga is among Africa's most prestigious decorative hardwoods, celebrated internationally for its breathtaking reddish-brown to deep purple-red heartwood dramatically enhanced by dark purple to nearly black streaks. When rotary-cut or quarter-sawn, it reveals spectacular ribbon-stripe, mottled, or waterfall figure patterns. Its combination of visual drama, exceptional hardness (Janka ~2,410 lbf), and superior stability makes it the ultimate choice for statement furniture and architectural showcases.",
    appearance:
      "Heartwood ranges from medium pink-brown to rich reddish-purple with conspicuous darker purple to nearly black veining and streaks. Color deepens and enriches with age and light exposure. Quarter-sawn surfaces reveal spectacular ribbon-stripe or waterfall figure. Grain is interlocked, occasionally wavy, with a medium texture and high natural luster that polishes to a glass-like finish.",
    density:
      "Air-dry density is 850 to 950 kg/m³ at 12% moisture content. Very heavy and extremely hard with excellent dimensional stability once properly seasoned. Container payloads average 20–23 m³ per 20ft container due to weight density.",
    durability:
      "Class 1–2 (Very Durable to Durable). Good natural resistance to fungal decay and termites. Some resistance to marine borers but vulnerable to common furniture beetle in sapwood. Heartwood is moderately resistant to preservative treatment. Performs exceptionally in interior applications and satisfactorily in protected exterior use.",
    typicalApplications:
      "High-end furniture and cabinetry, luxury decorative veneers, architectural paneling, turned objects, musical instruments (guitars, drums, xylophone bars), knife and gun handles, luxury yacht interiors, executive desks, and contrasting inlays.",
    sawnTimberConsiderations:
      "Moderately difficult to work with hand and machine tools due to high density and interlocked grain. Carbide tooling recommended for extended tool life. Figured wood prone to tearout during planing; reduced cutting angle (15°–20°) and razor-sharp cutters essential. Pre-drilling required for nails and screws. Turns, glues, and finishes beautifully. Takes a spectacular high-gloss polish. Dust may cause mild skin irritation; use proper extraction.",
    logSupplyConsiderations:
      "Large cylindrical logs typically 60cm to 120cm+ diameter with minimal sapwood. Figured logs command premium prices. High recovery yields of wide, long boards with spectacular color and figure continuity. Supply of premium figured material can be limited; confirm availability for large figured veneer projects.",
    buyerConsiderations:
      "Specify grade (FAS export grade for premium furniture; figured or plain-sawn for specific aesthetic requirements). State moisture requirement (Kiln-Dried 8–10% for interior furniture and millwork essential for dimensional stability). For decorative veneer projects, request rotary-cut or quarter-sawn specification and provide color/figure samples for matching. Confirm acceptable sapwood content (typically excluded for premium applications).",
  },
  {
    id: "movingui",
    name: "Movingui",
    scientificName: "Distemonanthus benthamianus",
    tradeNames: "Ayan · Nigerian Satinwood · Distemonanthus",
    category: "Joinery & Cabinetry",
    tagline:
      "A bright golden-yellow African hardwood celebrated for its uniform color, excellent dimensional stability, moderate hardness, and natural durability, making it an ideal versatile timber for joinery, flooring, and marine applications.",
    densityBadge: "700 - 750 kg/m³",
    durabilityBadge: "Class 2 · Durable",
    swatchBg: "#d4a846",
    swatchGradient: "from-[#ddb658] via-[#c89838] to-[#ad7f2a]",
    realImage: "/images/movingui.jpg",
    generalCharacteristics:
      "Movingui is a versatile West and Central African hardwood valued for its bright, uniform golden-yellow color, moderate density (Janka ~1,280 lbf), and outstanding dimensional stability. Often specified as a cost-effective alternative to Iroko, it offers excellent natural durability combined with superior workability and aesthetic appeal for a wide range of architectural and marine applications.",
    appearance:
      "Heartwood is a uniform bright golden-yellow to light yellow-brown, darkening slightly to a warm honey-yellow with atmospheric exposure. Sapwood is narrow, pale cream-yellow, not always clearly distinguished. Grain is typically interlocked, producing a subtle ribbon figure on quarter-sawn surfaces. Texture is medium to coarse with moderate natural luster.",
    density:
      "Air-dry density is 700 to 750 kg/m³ at 12% moisture content. Medium-weight with good mechanical strength and excellent dimensional stability. Container payloads average 24–27 m³ per 20ft container. Optimal balance between structural strength and ease of handling.",
    durability:
      "Class 2 (Durable). Good natural resistance to fungal decay, termites, and dry-wood borers. Performs well in exterior joinery when properly sealed and in marine applications in temperate waters. Not recommended for permanent ground contact or tropical marine immersion.",
    typicalApplications:
      "Exterior joinery, window frames, door frames, interior and exterior flooring, boat building (planking and decking), cabinetry, furniture, staircases, turned objects, decorative veneers, and architectural millwork. Increasingly popular for thermal modification (TMT Movingui) for enhanced exterior cladding durability.",
    sawnTimberConsiderations:
      "Generally easy to work with hand and machine tools despite moderate density. Saws and planes cleanly with conventional high-speed tooling. Contains up to 1.3% silica content by weight; carbide tooling recommended for extended production runs. Glues, screws, nails, stains, and finishes satisfactorily. Kiln-dries well with minimal degrade. Excellent dimensional stability once seasoned.",
    logSupplyConsiderations:
      "Large, straight cylindrical logs typically 70cm to 110cm+ diameter with minimal sapwood. High lumber recovery yields with consistent color and minimal defects. Readily available in commercial volumes from multiple Central African sources.",
    buyerConsiderations:
      "Specify moisture requirement (Kiln-Dried 10–12% for interior joinery and flooring; Air-Dried acceptable for exterior applications with on-site seasoning). State grade (FAS export grade vs Select & Better) and acceptable defect levels. For marine or exterior applications, confirm whether thermally modified (TMT) specification is required for enhanced durability. For flooring projects, specify tongue-and-groove profiling or smooth four-sides planed (S4S).",
  },
  {
    id: "sipo",
    name: "Sipo",
    scientificName: "Entandrophragma utile",
    tradeNames: "Utile · Sipo Mahogany · Assié",
    category: "Joinery & Cabinetry",
    tagline:
      "A premium African mahogany species renowned for its uniform rich red-brown color, superior density and stability compared to Genuine Mahogany, and excellent natural durability for exterior joinery and luxury furniture.",
    densityBadge: "640 - 680 kg/m³",
    durabilityBadge: "Class 2 · Durable",
    swatchBg: "#6b2f1a",
    swatchGradient: "from-[#7d3820] via-[#5f2716] to-[#47190e]",
    realImage: "/images/hero-sawn-B4KWhbGX.webp",
    generalCharacteristics:
      "Sipo is one of Africa's premier mahogany-type timbers, increasingly specified as a superior alternative to Genuine Mahogany (Swietenia macrophylla). It offers a uniform reddish-brown color without the color variation common in other African mahoganies, higher density (Janka ~1,240 lbf), excellent dimensional stability, and superior natural durability. Sipo is the professional's choice for high-end exterior joinery, yacht construction, and executive furniture.",
    appearance:
      "Heartwood is a uniform medium to deep reddish-brown with warm coppery undertones, darkening slightly with age to a rich mahogany patina. Sapwood is narrow, pale pinkish-brown, clearly demarcated. Grain is typically straight to slightly interlocked, producing a more subtle figure than Sapelli. Texture is medium with a natural satin luster that polishes beautifully.",
    density:
      "Air-dry density is 640 to 680 kg/m³ at 12% moisture content. Medium-weight with excellent strength-to-weight ratio and superior dimensional stability. Container payloads average 24–27 m³ per 20ft container. Denser and more stable than Genuine Mahogany.",
    durability:
      "Class 2 (Durable to Moderately Durable). Good natural resistance to fungal decay and moderate insect resistance. Performs very well in exterior joinery when properly sealed and finished. Suitable for protected exterior applications but not recommended for permanent ground contact or marine immersion.",
    typicalApplications:
      "Exterior doors, window frames, luxury yacht cabinetry and trim, boat building, high-end furniture, architectural millwork, staircases, interior and exterior flooring, decorative veneers, musical instruments (acoustic guitars), and executive office furniture.",
    sawnTimberConsiderations:
      "Generally easy to work with hand and machine tools. Saws, planes, and molds cleanly with conventional high-speed steel tooling. Straight grain works easily; interlocked grain may cause slight tearout if cutters are not sharp. Pre-drilling recommended for hardwood screws near edges. Glues, stains, and finishes exceptionally well. Kiln-dries relatively easily with minimal degrade; excellent dimensional stability once seasoned.",
    logSupplyConsiderations:
      "Very large cylindrical logs often 80cm to 140cm+ diameter with minimal sapwood. Exceptional lumber recovery with wide, long, clear boards and excellent color uniformity. Readily available in commercial volumes from Cameroon, Congo Basin, and West African sources.",
    buyerConsiderations:
      "Specify moisture requirement (Kiln-Dried 10–12% for interior millwork and furniture; 12–14% for exterior joinery). State grade (FAS export grade for premium applications vs Select & Better for general joinery). For yacht building and marine trim, request 100% heartwood specification (FOHC) and confirm acceptable defect levels. For flooring, specify smooth four-sides planed (S4S) or tongue-and-groove profiling.",
  },
  {
    id: "frake",
    name: "Fraké",
    scientificName: "Terminalia superba",
    tradeNames: "Limba · Afara · Korina",
    category: "Lightweight & Thermal",
    tagline:
      "A pale, lightweight African hardwood celebrated for its uniform cream-to-golden color, excellent workability, and outstanding stability, making it ideal for interior joinery, mouldings, and as a popular choice for thermally modified exterior cladding.",
    densityBadge: "520 - 560 kg/m³",
    durabilityBadge: "Class 4-5 · Low / Class 1-2 TMT",
    swatchBg: "#d4c5a0",
    swatchGradient: "from-[#dfd0b0] via-[#c9ba90] to-[#b0a074]",
    realImage: "/images/logs.jpg",
    generalCharacteristics:
      "Fraké (also widely known as Limba) is one of Central Africa's most versatile lightweight hardwoods. Its pale, uniform color, low density, excellent dimensional stability, and superior workability make it the material of choice for interior architectural mouldings, door frames, and core stock. When thermally modified (TMT Fraké/Korina), it transforms into a durable, dimensionally stable exterior cladding material with enhanced Class 1–2 durability.",
    appearance:
      "Heartwood ranges from pale cream-white to light golden-yellow, with occasional greyish streaks. Sapwood is not clearly distinguished. Color is generally uniform with a subtle natural luster. Grain is interlocked, producing a subtle stripe figure on quarter-sawn surfaces. Texture is medium and even.",
    density:
      "Air-dry density is 520 to 560 kg/m³ at 12% moisture content. Lightweight yet structurally stable with moderate mechanical strength. Container shipments achieve excellent volumetric efficiency (~30–35 m³ per 40ft HC container within standard gross weight allowances).",
    durability:
      "Natural Durability Class 4–5 (Low durability; not durable in untreated exterior conditions). Susceptible to insect attack (beetles, termites) and fungal decay in raw state. Extensively thermally modified (TMT Fraké/Korina) to achieve Class 1–2 durability for luxury exterior cladding and facades with exceptional dimensional stability and rich golden-brown color.",
    typicalApplications:
      "Interior mouldings, architraves, door frames, window frames, lightweight furniture, cabinetry core stock, blockboard and plywood core veneers, musical instruments (acoustic guitar bodies), turned objects, and TMT Fraké for premium exterior cladding and architectural facades.",
    sawnTimberConsiderations:
      "Extremely easy to saw, plane, mold, shape, and finish with hand and machine tools. Minimal blunting effect on cutters. Glues, screws, and nails without splitting. Kiln-dries rapidly with minimal degrade. Fresh logs must be converted and dried swiftly or treated with anti-stain dip to prevent blue stain fungal discoloration during tropical storage and transit.",
    logSupplyConsiderations:
      "Very large, straight cylindrical logs often 80cm to 150cm+ diameter. Exceptional lumber recovery with high percentages of clear, wide, long boards. Minimal sapwood waste due to uniform color throughout. Readily available in commercial volumes from multiple Central African sources.",
    buyerConsiderations:
      "Specify moisture requirement (Kiln-Dried 8–10% for interior mouldings and millwork essential for dimensional stability; green or air-dried acceptable for prompt European thermal modification). For TMT applications, confirm thermal modification specification (Class 1 or Class 2 target durability). State grade (FAS for clear mouldings vs #1 Common for paint-grade applications). Confirm anti-stain treatment if ordering green or air-dried lumber for stock holding.",
  },
  {
    id: "kosipo",
    name: "Kosipo",
    scientificName: "Entandrophragma candollei",
    tradeNames: "Omu · Heavy Sapele · Kossipo",
    category: "Joinery & Cabinetry",
    tagline:
      "A premium African mahogany species distinguished by its deep reddish-brown color with purplish glints, superior density compared to Sapelli, and excellent stability, making it ideal for high-end furniture, joinery, and decorative veneers.",
    densityBadge: "650 - 750 kg/m³",
    durabilityBadge: "Class 2 · Durable",
    swatchBg: "#5a2621",
    swatchGradient: "from-[#6b2f29] via-[#4d1f1a] to-[#3a140f]",
    realImage: "/images/sawn_log.jpg",
    generalCharacteristics:
      "Kosipo is a distinguished member of the Entandrophragma mahogany family, often referred to as 'Heavy Sapele' due to its higher density and darker color. It offers a rich, deep reddish-brown heartwood with distinctive purplish undertones and occasional dark resin deposits. Kosipo combines excellent dimensional stability, superior mechanical strength, and a stunning ribbon-stripe figure on quarter-sawn surfaces, making it a premium choice for luxury furniture and architectural millwork.",
    appearance:
      "Heartwood is a deep reddish-brown to rich mahogany-red with conspicuous purplish glints and occasional black resin deposits in pores. Darker and richer than Sapelli. Sapwood is narrow, pale pinkish-yellow, clearly demarcated. Quarter-sawn surfaces reveal a spectacular, uniform ribbon-stripe figure. Grain is interlocked with medium to fine texture and high natural luster.",
    density:
      "Air-dry density is 650 to 750 kg/m³ at 12% moisture content. Medium-heavy weight with excellent mechanical strength and superior dimensional stability. Denser than Sapelli (640–720 kg/m³). Container payloads average 23–26 m³ per 20ft container.",
    durability:
      "Class 2 (Durable). Good natural resistance to fungal decay and moderate insect resistance. Higher density provides enhanced structural performance compared to lighter African mahoganies. Performs excellently in interior applications and protected exterior joinery when properly sealed.",
    typicalApplications:
      "High-end furniture and cabinetry, architectural millwork, luxury interior doors, decorative veneers, staircases, luxury yacht interiors, executive office furniture, musical instruments (guitar backs and sides), and paneling.",
    sawnTimberConsiderations:
      "Moderately easy to work with hand and machine tools despite higher density. Interlocked grain requires sharp cutters and reduced cutting angle (15°–20°) on quarter-sawn ribbon-stripe surfaces to prevent tearout. Saws, planes, and molds cleanly with carbide tooling. Pre-drilling recommended for hardwood screws near edges. Glues, stains, and finishes beautifully. Kiln-dries well with careful scheduling; excellent dimensional stability once seasoned.",
    logSupplyConsiderations:
      "Large cylindrical logs typically 70cm to 120cm+ diameter with minimal sapwood. Good lumber recovery with consistent deep color and spectacular ribbon figure on quarter-sawn material. Available from Cameroon and Congo Basin concessions; supply is more limited than high-volume Sapelli.",
    buyerConsiderations:
      "Specify moisture requirement (Kiln-Dried 10–12% for interior furniture and millwork essential for stability). State sawing orientation (quarter-sawn for premium ribbon-stripe figure vs plain-sawn). Confirm grade (FAS export grade for premium applications). For decorative veneer projects, request quarter-sawn specification and provide figure samples for matching. State acceptable resin deposit levels (natural characteristic but may be excluded for ultra-premium applications).",
  },
  {
    id: "zingana",
    name: "Zingana",
    scientificName: "Microberlinia brazzavillensis",
    tradeNames: "Zebrawood · Zebrano · Allen Ele",
    category: "Decorative & Flooring",
    tagline:
      "Africa's most visually dramatic hardwood, famous for its spectacular golden-brown background with bold dark brown to nearly black zebra-like stripes, exceptional hardness, and stunning figure for high-end decorative veneers and statement furniture.",
    densityBadge: "750 - 850 kg/m³",
    durabilityBadge: "Class 2-3 · Durable",
    swatchBg: "#8f6f3a",
    swatchGradient: "from-[#a07f48] via-[#7d5f2e] to-[#5f4620]",
    realImage: "/images/zingana.jpg",
    generalCharacteristics:
      "Zingana (Zebrawood/Zebrano) is one of the most visually striking commercial hardwoods in the world, instantly recognizable by its bold alternating light and dark stripes resembling zebra patterns. This Central African specialty timber combines exceptional visual drama with high density (Janka ~1,570 lbf), excellent dimensional stability, and good natural durability. It is the ultimate choice for statement furniture, decorative veneers, and luxury architectural accents where visual impact is paramount.",
    appearance:
      "Heartwood displays a distinctive pale golden-yellow to light tan background dramatically striped with narrow, closely-spaced dark brown to nearly black irregular bands creating the iconic zebra-like pattern. Sapwood is narrow, pale cream, clearly demarcated. Grain is interlocked and wavy with a coarse texture. Natural luster is moderate to high.",
    density:
      "Air-dry density is 750 to 850 kg/m³ at 12% moisture content. Heavy and very hard with excellent wear resistance and dimensional stability. Container payloads average 22–25 m³ per 20ft container due to weight density.",
    durability:
      "Class 2–3 (Durable to Moderately Durable). Good resistance to fungal decay and termites. Heartwood is resistant to preservative treatment. Vulnerable to common furniture beetle in sapwood. Performs excellently in interior applications and satisfactorily in protected exterior use when properly sealed.",
    typicalApplications:
      "High-end decorative veneers, luxury furniture and cabinetry, architectural accent panels, turned objects, musical instruments (guitar backs, sides, and bodies), inlays and marquetry, knife and tool handles, luxury yacht interiors, executive desks, and statement pieces.",
    sawnTimberConsiderations:
      "Moderately difficult to work due to high density and interlocked, wavy grain. Carbide tooling essential for extended tool life. Irregular grain is highly prone to severe tearout during planing and milling; requires razor-sharp cutters, very light passes, and reduced cutting angle (12°–15°). Quarter-sawn material machines more cleanly than plain-sawn. Pre-drilling required for all fasteners. Glues satisfactorily. Takes finishes well but requires careful sanding to avoid cross-grain scratches that highlight stripe pattern unevenly.",
    logSupplyConsiderations:
      "Moderately large logs typically 50cm to 80cm diameter. Best zebra striping occurs in mature trees; younger trees have less pronounced figure. Recovery yields of wide boards can be limited due to log diameter constraints. Supply is more limited than high-volume commercial species; premium figured logs command significant premiums.",
    buyerConsiderations:
      "Specify grade (FAS export grade for premium decorative veneers; bold, uniform stripe pattern essential). State moisture requirement (Kiln-Dried 8–10% for interior furniture and millwork essential). For veneer projects, request rotary-cut or quarter-sawn specification and provide stripe pattern samples for matching. Confirm acceptable sapwood content (typically excluded for premium decorative applications). Due to limited supply and high demand, confirm availability and lead times before large orders.",
  },
];

export default function TimberSpeciesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "Heavy Marine & Civil",
    "Structural & Decking",
    "Joinery & Cabinetry",
    "Decorative & Flooring",
    "Lightweight & Thermal",
  ];

  const filteredSpecies = useMemo(() => {
    return speciesData.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" ||
        item.category.toLowerCase().includes(selectedCategory.toLowerCase());

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        query === "" ||
        item.name.toLowerCase().includes(query) ||
        item.scientificName.toLowerCase().includes(query) ||
        item.tradeNames.toLowerCase().includes(query) ||
        item.typicalApplications.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const scrollToSpecies = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const getWhatsAppPrefillUrl = (speciesName: string) => {
    const text = `Hello Prime Wood Global, I am inquiring about export availability for ${speciesName} (logs / sawn timber). Please provide current yard stock and proforma pricing.`;
    return `https://wa.me/237674429893?text=${encodeURIComponent(text)}`;
  };

  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#1a1815]">
      {/* ======================================================== */}
      {/* 1. SIMPLIFIED HERO SECTION                               */}
      {/* ======================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0a2818] via-[#031d0d] to-[#06180e] text-white pt-20 pb-12 sm:pt-24 sm:pb-16 border-b border-[#0f381c]">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/species-CBYnPWlL.webp"
            alt="Premium African hardwood timber species"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#021509]/95 via-[#021509]/80 to-[#021509]/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300/80 mb-6">
            <Link href="/" className="hover:text-[#d5920c] transition-colors">
              Home
            </Link>
            <CaretRight className="h-3 w-3 text-slate-400" />
            <span className="text-[#d5920c]">Timber Species Guide</span>
          </div>

          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#d5920c]/30 bg-[#031f0e]/60 px-4 py-2 shadow-sm backdrop-blur-md mb-6">
              <TreeEvergreen className="h-5 w-5 text-[#d5920c]" weight="fill" />
              <span className="text-sm font-bold tracking-wide text-slate-100">
                Cameroon Congo Basin Species · Douala & Kribi Export Ports
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight mb-5">
              African Hardwood{" "}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#ffe082] via-[#f5b324] to-[#d5920c]">
                Timber Species Catalog
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-3xl">
              Technical specifications, density data, durability ratings, and commercial buyer guidelines for premium African hardwoods from certified Cameroon concessions.
            </p>

            {/* Quick Stats Grid */}
            <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 p-4">
                <div className="text-xs font-bold text-[#d5920c] uppercase mb-1">Species Range</div>
                <div className="text-2xl font-black text-white">{speciesData.length}+</div>
                <div className="text-xs text-slate-300 mt-0.5">Premium varieties</div>
              </div>
              <div className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 p-4">
                <div className="text-xs font-bold text-[#d5920c] uppercase mb-1">Density Range</div>
                <div className="text-2xl font-black text-white">380-1150</div>
                <div className="text-xs text-slate-300 mt-0.5">kg/m³ air-dry</div>
              </div>
              <div className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 p-4">
                <div className="text-xs font-bold text-[#d5920c] uppercase mb-1">Export Ports</div>
                <div className="text-2xl font-black text-white">2</div>
                <div className="text-xs text-slate-300 mt-0.5">Douala & Kribi</div>
              </div>
              <div className="rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 p-4">
                <div className="text-xs font-bold text-[#d5920c] uppercase mb-1">Supply Format</div>
                <div className="text-2xl font-black text-white">Logs</div>
                <div className="text-xs text-slate-300 mt-0.5">& sawn timber</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. FILTER & SEARCH CONTROL BAR                          */}
      {/* ======================================================== */}
      <section className="sticky top-16 xl:top-28 z-40 bg-[#faf7f2]/95 backdrop-blur-md border-b border-[#e5dfd4] py-3.5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              <Sliders className="h-4 w-4 text-[#8a5020] shrink-0 mr-1 hidden sm:block" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#032f0e] text-white shadow-xs"
                      : "bg-[#eee8dc] text-[#4d4840] hover:bg-[#e4ddcf]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72 shrink-0">
              <MagnifyingGlass className="h-4 w-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search species, name, or application..."
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-white rounded-lg border border-[#ded7c9] focus:border-[#d5920c] focus:ring-1 focus:ring-[#d5920c] outline-none text-[#1a1815]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. SPECIES SPECIFICATION CARDS                          */}
      {/* ======================================================== */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {filteredSpecies.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#e5dfd4] p-8">
              <TreeEvergreen className="h-12 w-12 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-800">No timber species matched your search</h3>
              <p className="text-sm text-slate-500 mt-1">Try resetting the filter or searching for &quot;Azobé&quot;, &quot;decking&quot;, &quot;marine&quot;, or &quot;Sapelli&quot;.</p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 px-4 py-2 bg-[#032f0e] text-white text-xs font-bold rounded-lg cursor-pointer"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="space-y-16 lg:space-y-24">
              {filteredSpecies.map((species) => (
                <article
                  key={species.id}
                  id={species.id}
                  className="scroll-mt-36 lg:scroll-mt-44 rounded-2xl sm:rounded-3xl bg-white border border-[#e5dfd4] p-6 sm:p-8 lg:p-10 shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* LEFT COLUMN: SWATCH + SPECIES HEADER + CORE DETAILS (4 cols) */}
                    <div className="lg:col-span-4 space-y-5">
                      {/* Wood Color Swatch / Real Image with Pill Badge */}
                      <div className="relative aspect-[16/11] sm:aspect-[4/3] w-full rounded-xl overflow-hidden border border-[#d6cec0] shadow-inner group bg-slate-900">
                        {species.realImage ? (
                          <>
                            <Image
                              src={species.realImage}
                              alt={species.name}
                              fill
                              className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-black/25 pointer-events-none" />
                          </>
                        ) : (
                          <>
                            <div
                              className={`absolute inset-0 bg-gradient-to-br ${species.swatchGradient}`}
                            />
                            {/* Wood Grain Lines Effect */}
                            <div
                              className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay"
                              style={{
                                backgroundImage:
                                  "repeating-linear-gradient(90deg, rgba(255,255,255,0.08) 0px, rgba(255,255,255,0.08) 2px, transparent 2px, transparent 10px)",
                              }}
                            />
                          </>
                        )}

                        {/* Top Badge: Density */}
                        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-white text-[11px] font-bold border border-white/20">
                          {species.densityBadge}
                        </div>

                        {/* Bottom Tag: Durability */}
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-[11px] font-semibold bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/15">
                          <span>{species.durabilityBadge}</span>
                          <span className="text-[#f5b324] font-bold uppercase text-[10px]">Cameroon Origin</span>
                        </div>
                      </div>

                      {/* Secondary Yard Stock / Billets Photo if available */}
                      {species.secondaryImage && (
                        <div className="rounded-xl border border-[#d6cec0] bg-[#f8f6f0] p-3 space-y-2">
                          <div className="flex items-center justify-between text-[11px] font-bold text-slate-700">
                            <span>Export Yard Stock Photo</span>
                            <span className="text-[#032f0e] bg-[#eaf4ed] px-2 py-0.5 rounded text-[10px] uppercase font-semibold">
                              Wax-Sealed Billets
                            </span>
                          </div>
                          <div className="relative aspect-[16/11] w-full rounded-lg overflow-hidden border border-slate-200">
                            <Image
                              src={species.secondaryImage}
                              alt={`${species.name} stacked export billets on pallet`}
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <p className="text-[11px] text-slate-500 italic leading-snug">
                            Palletized turning squares & billets prepared with wax-sealed end-grain at our Cameroon export facility.
                          </p>
                        </div>
                      )}

                      {/* Species Title & Names */}
                      <div>
                        <div className="inline-block rounded-md bg-[#eaf4ed] text-[#032f0e] border border-[#0a461b]/20 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider mb-2">
                          {species.category}
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-serif font-black text-[#1a1815] tracking-tight">
                          {species.name}
                        </h2>
                        <p className="text-xs sm:text-sm text-[#736858] italic mt-1 font-serif">
                          {species.scientificName} · {species.tradeNames}
                        </p>
                      </div>

                      {/* Tagline / Key Takeaway */}
                      <p className="text-sm text-[#3b362f] leading-relaxed font-normal border-l-2 border-[#d5920c] pl-3">
                        {species.tagline}
                      </p>

                      {/* Direct Procurement CTAs */}
                      <div className="pt-2 space-y-2.5">
                        <a
                          href={`#contact?species=${species.name}`}
                          className="flex w-full items-center justify-between rounded-xl bg-[#d5920c] hover:bg-[#b87b08] px-4 py-2.5 text-xs font-bold text-[#06180e] shadow-xs transition-all active:scale-[0.99]"
                        >
                          <span>Request {species.name} Proforma Quote</span>
                          <ArrowRight className="h-4 w-4" weight="bold" />
                        </a>

                        <a
                          href={getWhatsAppPrefillUrl(species.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex w-full items-center justify-between rounded-xl bg-[#25D366] hover:bg-[#20ba59] px-4 py-2.5 text-xs font-bold text-white shadow-xs transition-all active:scale-[0.99]"
                        >
                          <span className="flex items-center gap-2">
                            <WhatsappLogo className="h-4 w-4" weight="fill" />
                            Inquire via WhatsApp Desk
                          </span>
                          <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded font-bold uppercase">
                            Instant
                          </span>
                        </a>
                      </div>
                    </div>

                    {/* RIGHT COLUMN: THE 8-CELL EDITORIAL SPECIFICATION GRID (8 cols) */}
                    <div className="lg:col-span-8">
                      <div className="rounded-xl border border-[#ded7c9] overflow-hidden bg-white shadow-xs">
                        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#ded7c9]">
                          {/* COLUMN 1 OF THE SPEC GRID */}
                          <div className="divide-y divide-[#ded7c9]">
                            {/* 1. General characteristics */}
                            <div className="p-5 sm:p-6 space-y-2 hover:bg-[#fcfbf9] transition-colors">
                              <h3 className="text-base font-serif font-bold text-[#1a1815]">
                                General characteristics
                              </h3>
                              <p className="text-xs sm:text-sm text-[#4d4840] leading-relaxed">
                                {species.generalCharacteristics}
                              </p>
                            </div>

                            {/* 3. Density */}
                            <div className="p-5 sm:p-6 space-y-2 hover:bg-[#fcfbf9] transition-colors">
                              <h3 className="text-base font-serif font-bold text-[#1a1815]">
                                Density & Weight Planning
                              </h3>
                              <p className="text-xs sm:text-sm text-[#4d4840] leading-relaxed">
                                {species.density}
                              </p>
                            </div>

                            {/* 5. Typical applications */}
                            <div className="p-5 sm:p-6 space-y-2 hover:bg-[#fcfbf9] transition-colors">
                              <h3 className="text-base font-serif font-bold text-[#1a1815]">
                                Typical applications
                              </h3>
                              <p className="text-xs sm:text-sm text-[#4d4840] leading-relaxed">
                                {species.typicalApplications}
                              </p>
                            </div>

                            {/* 7. Log supply considerations */}
                            <div className="p-5 sm:p-6 space-y-2 hover:bg-[#fcfbf9] transition-colors">
                              <h3 className="text-base font-serif font-bold text-[#1a1815]">
                                Log supply considerations
                              </h3>
                              <p className="text-xs sm:text-sm text-[#4d4840] leading-relaxed">
                                {species.logSupplyConsiderations}
                              </p>
                            </div>
                          </div>

                          {/* COLUMN 2 OF THE SPEC GRID */}
                          <div className="divide-y divide-[#ded7c9]">
                            {/* 2. Appearance */}
                            <div className="p-5 sm:p-6 space-y-2 hover:bg-[#fcfbf9] transition-colors">
                              <h3 className="text-base font-serif font-bold text-[#1a1815]">
                                Appearance & Grain
                              </h3>
                              <p className="text-xs sm:text-sm text-[#4d4840] leading-relaxed">
                                {species.appearance}
                              </p>
                            </div>

                            {/* 4. Durability */}
                            <div className="p-5 sm:p-6 space-y-2 hover:bg-[#fcfbf9] transition-colors">
                              <h3 className="text-base font-serif font-bold text-[#1a1815]">
                                Durability & Resistance
                              </h3>
                              <p className="text-xs sm:text-sm text-[#4d4840] leading-relaxed">
                                {species.durability}
                              </p>
                            </div>

                            {/* 6. Sawn timber considerations */}
                            <div className="p-5 sm:p-6 space-y-2 hover:bg-[#fcfbf9] transition-colors">
                              <h3 className="text-base font-serif font-bold text-[#1a1815]">
                                Sawn timber considerations
                              </h3>
                              <p className="text-xs sm:text-sm text-[#4d4840] leading-relaxed">
                                {species.sawnTimberConsiderations}
                              </p>
                            </div>

                            {/* 8. Buyer considerations */}
                            <div className="p-5 sm:p-6 space-y-2 hover:bg-[#fcfbf9] transition-colors">
                              <h3 className="text-base font-serif font-bold text-[#1a1815]">
                                Buyer considerations
                              </h3>
                              <p className="text-xs sm:text-sm text-[#4d4840] leading-relaxed">
                                {species.buyerConsiderations}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. BOTTOM HIGH-CONVERTING PROCUREMENT CTA                */}
      {/* ======================================================== */}
      <section className="bg-[#03200a] text-white py-16 sm:py-20 border-t border-[#0f381c]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#d5920c]/40 bg-[#062413] px-3.5 py-1 text-xs font-bold text-[#f5b324] uppercase tracking-wider">
                Direct Cameroon Export Desk
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Looking for Specific Dimensions or Custom Hardwood Inquiries?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                Our export managers in Douala and Kribi verify physical yard stock, cutting schedules, and shipping vessel allocations. Tell us your target species, dimensions, and discharge port for a formal proforma quote within 24 hours.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-1">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-[#d5920c]" weight="fill" />
                  100% Legal Cameroon Sourcing
                </span>
                <span className="flex items-center gap-1.5">
                  <Boat className="h-4 w-4 text-[#d5920c]" weight="fill" />
                  Douala & Kribi Deep-Water Ports
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle className="h-4 w-4 text-[#d5920c]" weight="fill" />
                  Phytosanitary & SGS Tally Sets
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#d5920c] hover:bg-[#e5a118] px-6 py-3.5 text-sm font-bold text-[#06180e] shadow-lg shadow-[#d5920c]/25 transition-all text-center"
              >
                <EnvelopeSimple className="h-5 w-5" weight="bold" />
                <span>Request an Export Quote</span>
              </Link>

              <a
                href={company.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all text-center"
              >
                <WhatsappLogo className="h-5 w-5" weight="fill" />
                <span>WhatsApp Export Desk (+237)</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
