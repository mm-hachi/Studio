// Pure catalogue data (no browser APIs), so it can also be used by Node scripts.
export const CATS=['Sofas','Dining Sets','Bedroom','Tables','Chairs','Plasma Stands'];
const P=(id,name,cat,sub,tag,price,dims,mat,desc)=>({id,name,cat,sub,tag,price,dims,mat,desc,kind:id});
export const BASE=[
 P('sofa','Sandton Sofa','Sofas','Sofas','Three-seater · Made to order',18900,[220,95,85],'Hardwood frame, high-density foam','Deep seats, soft shoulders and a frame built to last. Choose your fabric and size and we build it to fit your space.'),
 P('chaise','Bryanston Chaise Sofa','Sofas','Chaise Lounge','Two-seater with chaise',24500,[270,175,85],'Hardwood frame, high-density foam','A generous chaise end for long afternoons. Made to order in your choice of fabric.'),
 P('armchair','Fourways Armchair','Chairs','Arm Chairs','Accent armchair',8900,[85,88,90],'Hardwood frame, turned oak feet','A generous accent chair with a supportive back and wide arms. Comfortable enough to live in.'),
 P('bar','Parktown Bar Chair','Chairs','Bar Chairs','Upholstered bar chair',2900,[45,45,105],'Steel frame, upholstered seat','A supportive bar chair with a footrest ring and padded back, suited to kitchen islands and home bars.'),
 P('dchair','Melville Dining Chair','Chairs','Dining Chairs','Upholstered dining chair',2400,[48,52,92],'Hardwood legs, upholstered seat','A comfortable, hard-wearing dining chair that pairs with any table in the range.'),
 P('dtable','Rivonia Dining Table','Tables','Dining Room Tables','Six-seater dining table',14500,[200,100,76],'Solid hardwood','A solid table for long dinners, sized for six and finished to suit your room.'),
 P('coffee','Rosebank Coffee Table','Tables','Coffee Tables','Round coffee table',6400,[110,110,42],'Solid oak top, lower shelf','A solid round table with a lower shelf for books and bowls.'),
 P('console','Illovo Console','Tables','Consoles','Slim hallway console',7800,[160,40,82],'Hardwood with lower shelf','A slim console for entrances and living areas, with a shelf for baskets and books.'),
 P('dset','Morningside Dining Set','Dining Sets','Dining Sets','Table and four chairs',24900,[160,90,76],'Hardwood table, upholstered chairs','A complete dining set: a solid table with four upholstered chairs, ready for the table.'),
 P('ottoman','Melrose Ottoman','Bedroom','Ottomans','Upholstered ottoman',3900,[60,60,45],'Hardwood frame, upholstered','Footstool, bench or bed-end. A quietly versatile piece in any fabric.'),
 P('headboard','Houghton Headboard','Bedroom','Headboards','Upholstered headboard',6200,[200,12,120],'Hardwood frame, upholstered panel','A tall upholstered headboard that anchors the bed. Sized to your mattress.'),
 P('bedside','Craighall Night Stand','Bedroom','Night Stands','Single-drawer night stand',3200,[55,40,50],'Solid hardwood','A compact night stand with a deep drawer and brass handle.'),
 P('dresser','Hyde Park Dresser','Bedroom','Dressers','Three-drawer dresser',12900,[160,50,85],'Solid hardwood','Generous storage with soft-closing drawers and brass hardware.'),
 P('tv','Sunninghill Plasma Stand','Plasma Stands','Plasma Stands','Low media unit',7900,[180,42,60],'Solid hardwood','A low media unit with open shelves, sized for modern screens.')
];
export const FEATURED=['sofa','armchair','coffee','ottoman'];
export const FABRICS=[['Oyster','#d4cabb'],['Sage','#8a967c'],['Charcoal','#3a3a3c'],['Terracotta','#b0654a'],['Navy','#26344d'],['Mustard','#b8923a'],['Blush','#d7b5ab'],['Forest','#33473a']];
export const FINISHES=[['Walnut','#5b3f26'],['Natural oak','#a8825a'],['Ebony','#1f1a17'],['Ash','#c2b59b']];
export const FABRIC_DESC={Oyster:'A soft, warm neutral with a hint of grey. Easy to live with, and pairs well with natural wood and brass.',Sage:'A muted green with a calm, earthy feel. Brings colour without overwhelming a room.',Charcoal:'A deep, versatile grey that anchors lighter interiors.',Terracotta:'A warm, clay-inspired red-orange that adds instant character.',Navy:'A rich, dark blue with a classic, tailored look.',Mustard:'A warm golden yellow for confident accent pieces.',Blush:'A gentle, dusty pink that softens a space.',Forest:'A deep green with a refined, traditional feel.'};
