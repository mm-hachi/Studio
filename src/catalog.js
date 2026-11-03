// Pure catalogue data (no browser APIs), so it can also be used by Node scripts.
export const CATS=['Sofas','Dining Sets','Bedroom','Tables','Chairs','Plasma Stands'];
const P=(id,name,cat,sub,tag,price,dims,mat,desc)=>({id,name,cat,sub,tag,price,dims,mat,desc,kind:id});
export const BASE=[
 P('sofa','Sandton Sofa','Sofas','Sofas','Three-seater · Made to order',18900,[220,95,85],'Hardwood frame, high-density foam','Settle into generous proportions and supportive cushioning. Explore available fabrics and dimensions in the interactive preview.'),
 P('chaise','Bryanston Chaise Sofa','Sofas','Chaise Lounge','Two-seater with chaise',24500,[270,175,85],'Hardwood frame, high-density foam','A chaise extension creates room to stretch out. Preview the silhouette, then choose a finish that suits your space.'),
 P('armchair','Fourways Armchair','Chairs','Arm Chairs','Accent armchair',8900,[85,88,90],'Hardwood frame, turned oak feet','A sculpted back and welcoming arms bring comfort to a reading corner or a considered living-room arrangement.'),
 P('bar','Parktown Bar Chair','Chairs','Bar Chairs','Upholstered bar chair',2900,[45,45,105],'Steel frame, upholstered seat','A cushioned seat, supportive back and integrated footrest make counter-height seating more comfortable.'),
 P('dchair','Melville Dining Chair','Chairs','Dining Chairs','Upholstered dining chair',2400,[48,52,92],'Hardwood legs, upholstered seat','Made for lingering meals, with an upholstered seat and a clean profile that works across dining settings.'),
 P('dtable','Rivonia Dining Table','Tables','Dining Room Tables','Six-seater dining table',14500,[200,100,76],'Solid hardwood','A generous six-seat surface brings everyday meals and special occasions together in one enduring centrepiece.'),
 P('coffee','Rosebank Coffee Table','Tables','Coffee Tables','Round coffee table',6400,[110,110,42],'Solid oak top, lower shelf','A rounded profile softens the room, while the lower shelf keeps books and daily essentials close at hand.'),
 P('console','Illovo Console','Tables','Consoles','Slim hallway console',7800,[160,40,82],'Hardwood with lower shelf','A slim footprint makes useful display and drop-zone space in an entryway or living area.'),
 P('dset','Morningside Dining Set','Dining Sets','Dining Sets','Table and four chairs',24900,[160,90,76],'Hardwood table, upholstered chairs','A coordinated table and four-chair setting brings material continuity and practical comfort to the dining room.'),
 P('ottoman','Melrose Ottoman','Bedroom','Ottomans','Upholstered ottoman',3900,[60,60,45],'Hardwood frame, upholstered','A flexible extra seat, footrest or end-of-bed companion, finished to complement your room.'),
 P('headboard','Houghton Headboard','Bedroom','Headboards','Upholstered headboard',6200,[200,12,120],'Hardwood frame, upholstered panel','An upholstered panel adds a composed focal point to the bed. Confirm dimensions to suit your mattress.'),
 P('bedside','Craighall Night Stand','Bedroom','Night Stands','Single-drawer night stand',3200,[55,40,50],'Solid hardwood','A compact bedside surface pairs useful drawer storage with a place for nighttime essentials.'),
 P('dresser','Hyde Park Dresser','Bedroom','Dressers','Three-drawer dresser',12900,[160,50,85],'Solid hardwood','Three spacious drawers bring order to everyday storage, with a streamlined profile for the bedroom.'),
 P('tv','Sunninghill Plasma Stand','Plasma Stands','Plasma Stands','Low media unit',7900,[180,42,60],'Solid hardwood','A low, open media unit keeps devices accessible and gives screens a clean, grounded setting.')
];
export const FEATURED=['sofa','armchair','coffee','ottoman'];
export const FABRICS=[['Oyster','#d4cabb'],['Sage','#8a967c'],['Charcoal','#3a3a3c'],['Terracotta','#b0654a'],['Navy','#26344d'],['Mustard','#b8923a'],['Blush','#d7b5ab'],['Forest','#33473a']];
export const FINISHES=[['Walnut','#5b3f26'],['Natural oak','#a8825a'],['Ebony','#1f1a17'],['Ash','#c2b59b']];
export const DEFAULT_FINISH_TYPES=[{id:'frame',name:'Frame',target:'frame'},{id:'fabric',name:'Fabric',target:'fabric',materialType:'Fabric'}];
export const FABRIC_DESC={Oyster:'A light, adaptable neutral that pairs easily with a broad range of wood tones and room palettes.',Sage:'A softened green that adds a natural note without taking over the room.',Charcoal:'A deep grey that gives upholstered forms a crisp, contemporary presence.',Terracotta:'A grounded clay tone for a confident touch of warmth.',Navy:'A saturated blue with a clean, tailored character.',Mustard:'A bright, golden accent for pieces that welcome a little contrast.',Blush:'A muted rose tone that brings softness to a considered palette.',Forest:'A dark green with depth and a composed, natural feel.'};
