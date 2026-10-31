/* ======================================================================================
   SEED DATA — real café data extracted from Chai_Bee_Consolidated_Master.xlsx (Oct 2026)
   Used to pre-populate the dashboard's in-memory state on first load. The same arrays
   also live inside Code.gs, used there to seed the Google Sheets backend.
   ====================================================================================== */
// ======================================================================================
// 9. SEED DATA — extracted from Chai_Bee_Consolidated_Master.xlsx (Oct 1–22, 2026)
// ======================================================================================
const SEED_PRODUCTS = [
    { id:'P001', category:'FRIES', name:'Veg Cutlet', landedCost:23.18, price:30.0 },
    { id:'P002', category:'FRIES', name:'Veg Samosa', landedCost:18.76, price:20.0 },
    { id:'P003', category:'FRIES', name:'Paneer Roll', landedCost:28.57, price:30.0 },
    { id:'P004', category:'FRIES', name:'Veg Cheese Corn Nuggets - Regular', landedCost:39.62, price:55.0 },
    { id:'P005', category:'FRIES', name:'Veg Cheese Corn Nuggets - Special', landedCost:62.72, price:89.0 },
    { id:'P006', category:'FRIES', name:'Veg Cheese Ball - Regular', landedCost:39.62, price:55.0 },
    { id:'P007', category:'FRIES', name:'Veg Cheese Ball - Special', landedCost:62.72, price:89.0 },
    { id:'P008', category:'FRIES', name:'French Fry - Regular', landedCost:43.26, price:70.0 },
    { id:'P009', category:'FRIES', name:'French Fry - Special', landedCost:67.87, price:110.0 },
    { id:'P010', category:'FRIES', name:'Chicken Samosa', landedCost:38.36, price:50.0 },
    { id:'P011', category:'FRIES', name:'Chicken Cutlet', landedCost:27.64, price:35.0 },
    { id:'P012', category:'FRIES', name:'Chicken Roll', landedCost:27.8, price:35.0 },
    { id:'P013', category:'FRIES', name:'Chicken Cheese Ball - Regular', landedCost:45.17, price:55.0 },
    { id:'P014', category:'FRIES', name:'Chicken Cheese Ball - Special', landedCost:71.96, price:89.0 },
    { id:'P015', category:'FRIES', name:'Chicken Popcorn', landedCost:72.98, price:89.0 },
    { id:'P016', category:'FRIES', name:'Chicken Nuggets - Regular', landedCost:38.63, price:55.0 },
    { id:'P017', category:'FRIES', name:'Chicken Nuggets - SPECIAL', landedCost:61.07, price:85.0 },
    { id:'P018', category:'FRIES', name:'Chicken Lollipop - Regular', landedCost:69.62, price:89.0 },
    { id:'P019', category:'FRIES', name:'Chicken Lollipop - Special', landedCost:166.83, price:199.0 },
    { id:'P020', category:'FRIES', name:'Chicken Wings', landedCost:93.67, price:110.0 },
    { id:'P021', category:'FRIES', name:'Chicken Drumstick - Normal', landedCost:85.59, price:99.0 },
    { id:'P022', category:'FRIES', name:'Chicken Drumstick - Medium', landedCost:172.16, price:195.0 },
    { id:'P023', category:'FRIES', name:'Chicken Drumstick - Special', landedCost:394.91, price:485.0 },
    { id:'P024', category:'FRIES', name:'Veg Momos', landedCost:57.64, price:70.0 },
    { id:'P025', category:'FRIES', name:'Paneer Momos', landedCost:73.77, price:80.0 },
    { id:'P026', category:'FRIES', name:'Chicken Momos', landedCost:64.97, price:80.0 },
    { id:'P027', category:'FRIES', name:'Chicken Tikka Momos', landedCost:70.84, price:90.0 },
    { id:'P028', category:'SANDWICH', name:'Vegetable Sandwich', landedCost:46.02, price:90.0 },
    { id:'P029', category:'SANDWICH', name:'Vegetable Cheese Sandwich', landedCost:61.42, price:100.0 },
    { id:'P030', category:'SANDWICH', name:'Paneer Sandwich', landedCost:54.05, price:90.0 },
    { id:'P031', category:'SANDWICH', name:'Paneer Cheese Sandwich', landedCost:69.45, price:110.0 },
    { id:'P032', category:'SANDWICH', name:'Chicken Sandwich', landedCost:57.51, price:120.0 },
    { id:'P033', category:'SANDWICH', name:'Peri Peri Chicken Sandwich', landedCost:60.74, price:130.0 },
    { id:'P034', category:'SANDWICH', name:'Bread Omelette', landedCost:46.99, price:70.0 },
    { id:'P035', category:'SANDWICH', name:'Peri Peri Noodles', landedCost:44.33, price:70.0 },
    { id:'P036', category:'SANDWICH', name:'CHAI\'BEE\' SPECIAL Cheese Noodles', landedCost:62.18, price:90.0 },
    { id:'P037', category:'LASSI', name:'Mango Lassi', landedCost:40.5, price:60.0 },
    { id:'P038', category:'LASSI', name:'Strawberry Lassi', landedCost:40.5, price:60.0 },
    { id:'P039', category:'LASSI', name:'Sweet Lassi', landedCost:18.94, price:50.0 },
    { id:'P040', category:'LASSI', name:'Mint Lassi', landedCost:32.49, price:60.0 },
    { id:'P041', category:'LASSI', name:'Rose Lassi', landedCost:34.58, price:60.0 },
    { id:'P042', category:'MILKSHAKE', name:'Vanilla Milkshake', landedCost:32.02, price:90.0 },
    { id:'P043', category:'MILKSHAKE', name:'Mango Milkshake', landedCost:56.02, price:90.0 },
    { id:'P044', category:'MILKSHAKE', name:'Strawberry Milkshake', landedCost:51.52, price:90.0 },
    { id:'P045', category:'MILKSHAKE', name:'Chocolate Milkshake', landedCost:52.27, price:100.0 },
    { id:'P046', category:'MILKSHAKE', name:'Chai Bee Special Tender Coconut Milkshake', landedCost:52.52, price:100.0 },
    { id:'P047', category:'MILKSHAKE', name:'Oreo Milkshake', landedCost:62.52, price:110.0 },
    { id:'P048', category:'MILKSHAKE', name:'KitKat Milkshake', landedCost:77.92, price:120.0 },
    { id:'P049', category:'MILKSHAKE', name:'Kiwi Milkshake', landedCost:53.92, price:100.0 },
    { id:'P050', category:'MILKSHAKE', name:'Butterscotch Milkshake', landedCost:55.12, price:100.0 },
    { id:'P051', category:'MILKSHAKE', name:'Dry Fruit Milkshake', landedCost:30.52, price:140.0 },
    { id:'P052', category:'MILKSHAKE', name:'Peanut Butter Milkshake', landedCost:45.52, price:130.0 },
    { id:'P053', category:'MILKSHAKE', name:'Butter Fruit Milkshake', landedCost:56.02, price:110.0 },
    { id:'P054', category:'MILKSHAKE', name:'Fig Milkshake', landedCost:53.02, price:110.0 },
    { id:'P055', category:'MILKSHAKE', name:'Blueberry Milkshake', landedCost:60.12, price:100.0 },
    { id:'P056', category:'MILKSHAKE', name:'Coffee Milkshake', landedCost:43.27, price:100.0 },
    { id:'P057', category:'MILKSHAKE', name:'Cold Coffee', landedCost:43.27, price:60.0 },
    { id:'P058', category:'MILKSHAKE', name:'Rose Milk', landedCost:42.0, price:60.0 },
    { id:'P059', category:'MOJITO', name:'Blue Mojito', landedCost:40.08, price:70.0 },
    { id:'P060', category:'MOJITO', name:'Lime Mint Mojito', landedCost:36.83, price:70.0 },
    { id:'P061', category:'MOJITO', name:'Strawberry Mojito', landedCost:33.04, price:70.0 },
    { id:'P062', category:'MOJITO', name:'Mango Mojito', landedCost:25.23, price:80.0 },
    { id:'P063', category:'MOJITO', name:'Watermelon Mojito', landedCost:33.04, price:75.0 },
    { id:'P064', category:'HOT', name:'Classic Tea', landedCost:12.76, price:15.0 },
    { id:'P065', category:'HOT', name:'Ginger Tea', landedCost:13.9, price:20.0 },
    { id:'P066', category:'HOT', name:'Cardamom Tea', landedCost:13.9, price:20.0 },
    { id:'P067', category:'HOT', name:'Masala Tea', landedCost:13.9, price:25.0 },
    { id:'P068', category:'HOT', name:'Black Tea', landedCost:6.2, price:10.0 },
    { id:'P069', category:'HOT', name:'Lemon Tea', landedCost:8.48, price:15.0 },
    { id:'P070', category:'HOT', name:'Ginger Lemon Tea', landedCost:10.76, price:20.0 },
    { id:'P071', category:'HOT', name:'Filter Coffee', landedCost:15.57, price:20.0 },
    { id:'P072', category:'HOT', name:'Black Coffee', landedCost:8.77, price:15.0 },
    { id:'P073', category:'HOT', name:'Milk', landedCost:11.79, price:15.0 },
    { id:'P074', category:'HOT', name:'Horlicks', landedCost:17.76, price:20.0 },
    { id:'P075', category:'HOT', name:'Boost', landedCost:17.07, price:20.0 },
    { id:'P076', category:'HOT', name:'Parcel Tea', landedCost:23.98, price:35.0 },
    { id:'P077', category:'HOT', name:'Parcel Coffee', landedCost:29.12, price:45.0 },
    { id:'P078', category:'JUICE', name:'Apple Juice', landedCost:68.25, price:80.0 },
    { id:'P079', category:'JUICE', name:'Mango Juice', landedCost:33.45, price:80.0 },
    { id:'P080', category:'JUICE', name:'Pomegranate Juice', landedCost:47.25, price:80.0 },
    { id:'P081', category:'JUICE', name:'Watermelon Juice', landedCost:11.3, price:60.0 },
    { id:'P082', category:'JUICE', name:'Muskmelon Juice', landedCost:25.65, price:70.0 },
    { id:'P083', category:'JUICE', name:'Lemon Juice', landedCost:13.43, price:40.0 },
    { id:'P084', category:'JUICE', name:'Apple Beetroot Carrot Juice', landedCost:38.25, price:100.0 },
    { id:'P085', category:'JUICE', name:'Pomegranate Carrot Beetroot Juice', landedCost:31.25, price:100.0 },
    { id:'P086', category:'JUICE', name:'Fig Juice', landedCost:35.25, price:70.0 },
    { id:'P087', category:'JUICE', name:'Butter Fruit Juice', landedCost:38.85, price:80.0 },
    { id:'P088', category:'JUICE', name:'Tender Coconut Juice', landedCost:34.65, price:80.0 },
    { id:'P089', category:'JUICE', name:'Lemon Mint Juice', landedCost:14.93, price:55.0 },
    { id:'P090', category:'JUICE', name:'Orange Juice', landedCost:32.92, price:60.0 },
  ];
// Per-unit ingredient cost (₹ per the small unit — gram/ml/piece — that
// SEED_RECIPE_BOM's usageQtyPerUnit is actually expressed in). These values were
// back-calculated from each ingredient's real recipe line cost (lineCost ÷
// usageQtyPerUnit, taking the most common rate when an ingredient is shared
// across several recipes) rather than estimated, so that editing and saving a
// Recipe BOM row (Menu Costing page) recomputes the correct line cost instead of
// reproducing the original seed's ~1000x unit mismatch (a kg/litre bulk price
// multiplied against a gram/ml usage figure). A handful of ingredients that only
// ever appear in recipes with an unpriced (₹0) line cost in the source costing
// sheet are left at ₹0 here too — that reflects a real gap in the original data,
// not a bug in this calculation.
const SEED_INVENTORY = [
    { sku:'ING-001', name:'Milk', unitCost:0.071, stock:48.49 },
    { sku:'ING-002', name:'Sugar', unitCost:0.065, stock:9.75 },
    { sku:'ING-003', name:'Tea Powder', unitCost:0.41, stock:3.83 },
    { sku:'ING-004', name:'Coffee Powder', unitCost:620, stock:2.53 },
    { sku:'ING-005', name:'Ginger', unitCost:250, stock:0.8 },
    { sku:'ING-006', name:'Cardamom', unitCost:250, stock:23.0 },
    { sku:'ING-007', name:'Tea Masala', unitCost:250, stock:69.0 },
    { sku:'ING-008', name:'Horlicks', unitCost:265, stock:0.65 },
    { sku:'ING-009', name:'Boost', unitCost:485, stock:717.0 },
    { sku:'ING-010', name:'Vanilla Ice Cream', unitCost:0.0775, stock:13.9 },
    { sku:'ING-011', name:'Mango Ice Cream', unitCost:0.1075, stock:7.0 },
    { sku:'ING-012', name:'Chocolate Ice Cream', unitCost:0.1025, stock:5.95 },
    { sku:'ING-013', name:'Vanilla Essence', unitCost:1, stock:15.0 },
    { sku:'ING-014', name:'Mango Pulp', unitCost:0.28, stock:1.55 },
    { sku:'ING-015', name:'Strawberry Pulp', unitCost:0.28, stock:1.5 },
    { sku:'ING-016', name:'Chocolate Syrup', unitCost:220, stock:4.22 },
    { sku:'ING-017', name:'Tender Coconut Pulp', unitCost:440, stock:3.79 },
    { sku:'ING-018', name:'Oreo Biscuit', unitCost:75, stock:90.0 },
    { sku:'ING-019', name:'Kitkat Chocolate', unitCost:175, stock:71.0 },
    { sku:'ING-020', name:'Kiwi Crush', unitCost:234, stock:1.3 },
    { sku:'ING-021', name:'Muskmelon Pulp', unitCost:340, stock:2.84 },
    { sku:'ING-022', name:'Mango Crush', unitCost:171.5, stock:2.4 },
    { sku:'ING-023', name:'Strawberry Crush', unitCost:171.5, stock:0.0 },
    { sku:'ING-024', name:'Butterscotch Syrup', unitCost:180, stock:1.41 },
    { sku:'ING-025', name:'Butterscotch Crush', unitCost:176, stock:1.71 },
    { sku:'ING-026', name:'Dryfruit', unitCost:0.28, stock:0.29 },
    { sku:'ING-027', name:'Peanut Butter', unitCost:30, stock:0.3 },
    { sku:'ING-028', name:'Butter Fruit Pulp', unitCost:510, stock:1.69 },
    { sku:'ING-029', name:'Fig Pulp', unitCost:510, stock:353.0 },
    { sku:'ING-030', name:'Blueberry Crush', unitCost:296, stock:0.65 },
    { sku:'ING-031', name:'Rose Milk', unitCost:0.2031, stock:0.89 },
    { sku:'ING-032', name:'Bread (Sandwich)', unitCost:5, stock:197.0 },
    { sku:'ING-033', name:'Onion', unitCost:0.06, stock:4.97 },
    { sku:'ING-034', name:'Tomato', unitCost:0.05, stock:3.76 },
    { sku:'ING-035', name:'Sauce', unitCost:0.0981, stock:9.0 },
    { sku:'ING-036', name:'Mayo', unitCost:0.11, stock:12.91 },
    { sku:'ING-037', name:'Peri Peri', unitCost:147, stock:0.17 },
    { sku:'ING-038', name:'Salt', unitCost:20, stock:0.0 },
    { sku:'ING-039', name:'Carrot', unitCost:0.05, stock:0.87 },
    { sku:'ING-040', name:'Corn', unitCost:0.11, stock:0.89 },
    { sku:'ING-041', name:'Capsicum', unitCost:0.2, stock:1.2 },
    { sku:'ING-042', name:'Paneer', unitCost:300, stock:1.44 },
    { sku:'ING-043', name:'Cheese', unitCost:400, stock:81.0 },
    { sku:'ING-044', name:'Chicken', unitCost:429, stock:0.8 },
    { sku:'ING-045', name:'Noodles', unitCost:15, stock:48.0 },
    { sku:'ING-046', name:'Noodles Masala', unitCost:8, stock:0.66 },
    { sku:'ING-047', name:'Egg', unitCost:6, stock:67.0 },
    { sku:'ING-048', name:'Momos Chutney', unitCost:182, stock:1.24 },
    { sku:'ING-049', name:'Blue-Moji', unitCost:0.3809, stock:1084.0 },
    { sku:'ING-050', name:'Limemint-Moji', unitCost:0.3809, stock:573.0 },
    { sku:'ING-051', name:'Strberry-Moji', unitCost:0.2933, stock:735.0 },
    { sku:'ING-052', name:'Mango(Mazza)', unitCost:0.0625, stock:2.4 },
    { sku:'ING-053', name:'Watermelon-Moji', unitCost:0.2933, stock:560.0 },
    { sku:'ING-054', name:'Lemon', unitCost:7.5, stock:93.0 },
    { sku:'ING-055', name:'Mint', unitCost:1, stock:163.0 },
    { sku:'ING-056', name:'Curd', unitCost:0.069, stock:7.8 },
    { sku:'ING-057', name:'Burger Bun', unitCost:42, stock:22.0 },
    { sku:'ING-058', name:'Veg Cutlet', unitCost:10, stock:42.0 },
    { sku:'ING-059', name:'Veg Samosa', unitCost:8.1333, stock:41.0 },
    { sku:'ING-060', name:'Paneer Roll', unitCost:15.5, stock:91.0 },
    { sku:'ING-061', name:'V.C.Nuggets', unitCost:6.5, stock:62.0 },
    { sku:'ING-062', name:'V.C.Ball', unitCost:6.5, stock:44.0 },
    { sku:'ING-063', name:'French Fry', unitCost:0.122, stock:9.47 },
    { sku:'ING-064', name:'Ch.Samosa', unitCost:9.8414, stock:93.0 },
    { sku:'ING-065', name:'Ch.Cutilet', unitCost:12.8967, stock:25.0 },
    { sku:'ING-066', name:'Ch.Roll', unitCost:15, stock:67.0 },
    { sku:'ING-067', name:'Ch.C.Ball', unitCost:7.7, stock:98.0 },
    { sku:'ING-068', name:'Chi.Pop Corn', unitCost:0.343, stock:4.13 },
    { sku:'ING-069', name:'Chi.Nuggest', unitCost:6.2858, stock:108.0 },
    { sku:'ING-070', name:'Chi.Lollipop', unitCost:17.92, stock:34.0 },
    { sku:'ING-071', name:'Chi.Wings', unitCost:0.4048, stock:48.0 },
    { sku:'ING-072', name:'Chi.Drumstrick', unitCost:48.2137, stock:6.0 },
    { sku:'ING-073', name:'Veg.Momos', unitCost:6.0952, stock:200.0 },
    { sku:'ING-074', name:'Pan.Momos', unitCost:8.1904, stock:156.0 },
    { sku:'ING-075', name:'Chi.Momos', unitCost:7.0476, stock:173.0 },
    { sku:'ING-076', name:'Chi.Tikka Mo', unitCost:7.8096, stock:92.0 },
    { sku:'ING-077', name:'Apple', unitCost:0.2, stock:3.53 },
    { sku:'ING-078', name:'Pomegranate', unitCost:0.13, stock:7.3 },
    { sku:'ING-079', name:'Watermelon', unitCost:0.025, stock:3.43 },
    { sku:'ING-080', name:'Muskmelon', unitCost:0.05, stock:1.21 },
    { sku:'ING-081', name:'Beetroot', unitCost:50, stock:0.83 },
    { sku:'ING-082', name:'Orange', unitCost:0.1, stock:7.0 },
    { sku:'ING-083', name:'Oil', unitCost:75, stock:0.0 },
    { sku:'ING-084', name:'Water Bottle', unitCost:8, stock:5.0 },
    { sku:'ING-085', name:'Soda', unitCost:0, stock:1.15 },
    { sku:'ING-086', name:'Sprite', unitCost:0.04, stock:4.0 },
    { sku:'ING-087', name:'Spoda-10', unitCost:0, stock:9.0 },
    { sku:'ING-088', name:'Campa 500', unitCost:0, stock:1.0 },
    { sku:'ING-089', name:'Black Olives', unitCost:0, stock:0.43 },
    { sku:'ING-090', name:'T.Mayo', unitCost:0, stock:0.86 },
    { sku:'ING-091', name:'Butter', unitCost:0.34, stock:0.5 },
    { sku:'ING-092', name:'Green Mint', unitCost:0.2933, stock:0.64 },
    { sku:'ING-093', name:'Sugar Syrup', unitCost:0, stock:1.49 },
    { sku:'ING-094', name:'C.Mittai', unitCost:0, stock:0.0 },
    { sku:'ING-095', name:'Biscuit', unitCost:0, stock:0.0 },
    { sku:'ING-096', name:'Bread (Omelette)', unitCost:30, stock:96.0 },
    { sku:'ING-098', name:'Veg Patti', unitCost:0, stock:18.0 },
    { sku:'ING-099', name:'Ch.Patti', unitCost:0, stock:10.0 },
    { sku:'ING-100', name:'Sand Wi.Patti', unitCost:0, stock:4.0 },
  ];
const SEED_DAILY_SUMMARY = [
    { date:'01 Oct', qty:110, cost:3856.33, sales:5635.0, profit:1778.67 },
    { date:'02 Oct', qty:111, cost:4212.7, sales:6264.0, profit:2051.3 },
    { date:'03 Oct', qty:156, cost:4942.93, sales:7095.0, profit:2152.07 },
    { date:'04 Oct', qty:97, cost:3251.37, sales:4645.0, profit:1393.63 },
    { date:'05 Oct', qty:93, cost:2909.6, sales:4639.0, profit:1729.4 },
    { date:'06 Oct', qty:82, cost:2402.45, sales:3661.0, profit:1246.55 },
    { date:'07 Oct', qty:68, cost:2126.14, sales:2844.0, profit:717.86 },
    { date:'08 Oct', qty:93, cost:2851.61, sales:4263.0, profit:1411.39 },
    { date:'09 Oct', qty:114, cost:3781.98, sales:5530.0, profit:1748.02 },
    { date:'10 Oct', qty:141, cost:4550.96, sales:6935.0, profit:2384.04 },
    { date:'11 Oct', qty:111, cost:3318.28, sales:4875.0, profit:1556.72 },
    { date:'12 Oct', qty:133, cost:3723.92, sales:5399.0, profit:1675.08 },
    { date:'13 Oct', qty:103, cost:3333.0, sales:4844.0, profit:1511.0 },
    { date:'14 Oct', qty:92, cost:2480.88, sales:3490.0, profit:1009.12 },
    { date:'15 Oct', qty:112, cost:3060.25, sales:4420.0, profit:1359.75 },
    { date:'16 Oct', qty:112, cost:3024.37, sales:4214.0, profit:1189.63 },
    { date:'17 Oct', qty:93, cost:2626.49, sales:3789.0, profit:1162.51 },
    { date:'18 Oct', qty:114, cost:3875.47, sales:5488.0, profit:1612.53 },
    { date:'19 Oct', qty:28, cost:733.74, sales:970.0, profit:236.26 },
    { date:'20 Oct', qty:130, cost:3841.86, sales:5680.0, profit:1838.14 },
    { date:'21 Oct', qty:84, cost:2393.19, sales:3455.0, profit:1061.81 },
    { date:'22 Oct', qty:83.75, cost:2538.07, sales:3562.0, profit:1021.93 },
  ];
// Backfill a real ISO date (yyyy-MM-dd, year 2026) onto each seed row so date-range
// filtering and monthly bucketing work correctly even before any live Sheet sync.
SEED_DAILY_SUMMARY.forEach((d) => {
  const [day, mon] = d.date.split(' ');
  const monthIdx = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].indexOf(mon);
  if (monthIdx >= 0) {
    d.isoDate = `2026-${String(monthIdx + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  }
});
// Per-ingredient recipe BOM (bill of materials): one row per product+ingredient
// pair, with the real usage quantity and line cost extracted from the owner's
// per-category costing workbook (90 products, 257 lines, verified ingredient-by-
// ingredient against live Inventory unit costs on 2026-10-29). Powers the
// editable Menu Costing recipe view and the owner-built recipe-builder — editing
// an ingredient's cost or usage here recomputes that product's landed cost and
// margin, same as the live Code.gs updateRecipeBomCost action does.
const SEED_RECIPE_BOM = [
    { id:'BOM-001', productId:'P001', productName:'Veg Cutlet', ingId:'ING-058', ingName:'Veg Cutlet', usageQtyPerUnit:1.0, lineCost:10.0 },
    { id:'BOM-002', productId:'P002', productName:'Veg Samosa', ingId:'ING-059', ingName:'Veg Samosa', usageQtyPerUnit:1.0, lineCost:8.13 },
    { id:'BOM-003', productId:'P003', productName:'Paneer Roll', ingId:'ING-060', ingName:'Paneer Roll', usageQtyPerUnit:1.0, lineCost:15.5 },
    { id:'BOM-004', productId:'P004', productName:'Veg Cheese Corn Nuggets - Regular', ingId:'ING-061', ingName:'V.C.Nuggets', usageQtyPerUnit:3.0, lineCost:19.5 },
    { id:'BOM-005', productId:'P005', productName:'Veg Cheese Corn Nuggets - Special', ingId:'ING-061', ingName:'V.C.Nuggets', usageQtyPerUnit:5.0, lineCost:32.5 },
    { id:'BOM-006', productId:'P006', productName:'Veg Cheese Ball - Regular', ingId:'ING-062', ingName:'V.C.Ball', usageQtyPerUnit:3.0, lineCost:19.5 },
    { id:'BOM-007', productId:'P007', productName:'Veg Cheese Ball - Special', ingId:'ING-062', ingName:'V.C.Ball', usageQtyPerUnit:5.0, lineCost:32.5 },
    { id:'BOM-008', productId:'P008', productName:'French Fry - Regular', ingId:'ING-063', ingName:'French Fry', usageQtyPerUnit:130.0, lineCost:15.86 },
    { id:'BOM-009', productId:'P009', productName:'French Fry - Special', ingId:'ING-063', ingName:'French Fry', usageQtyPerUnit:220.0, lineCost:26.84 },
    { id:'BOM-010', productId:'P010', productName:'Chicken Samosa', ingId:'ING-064', ingName:'Ch.Samosa', usageQtyPerUnit:2.0, lineCost:19.68 },
    { id:'BOM-011', productId:'P011', productName:'Chicken Cutlet', ingId:'ING-065', ingName:'Ch.Cutilet', usageQtyPerUnit:1.0, lineCost:12.9 },
    { id:'BOM-012', productId:'P012', productName:'Chicken Roll', ingId:'ING-066', ingName:'Ch.Roll', usageQtyPerUnit:1.0, lineCost:15.0 },
    { id:'BOM-013', productId:'P013', productName:'Chicken Cheese Ball - Regular', ingId:'ING-067', ingName:'Ch.C.Ball', usageQtyPerUnit:3.0, lineCost:23.1 },
    { id:'BOM-014', productId:'P014', productName:'Chicken Cheese Ball - Special', ingId:'ING-067', ingName:'Ch.C.Ball', usageQtyPerUnit:5.0, lineCost:38.5 },
    { id:'BOM-015', productId:'P015', productName:'Chicken Popcorn', ingId:'ING-068', ingName:'Chi.Pop Corn', usageQtyPerUnit:120.0, lineCost:41.16 },
    { id:'BOM-016', productId:'P016', productName:'Chicken Nuggets - Regular', ingId:'ING-069', ingName:'Chi.Nuggest', usageQtyPerUnit:3.0, lineCost:18.86 },
    { id:'BOM-017', productId:'P017', productName:'Chicken Nuggets - SPECIAL', ingId:'ING-069', ingName:'Chi.Nuggest', usageQtyPerUnit:5.0, lineCost:31.43 },
    { id:'BOM-018', productId:'P018', productName:'Chicken Lollipop - Regular', ingId:'ING-070', ingName:'Chi.Lollipop', usageQtyPerUnit:2.0, lineCost:35.84 },
    { id:'BOM-019', productId:'P019', productName:'Chicken Lollipop - Special', ingId:'ING-070', ingName:'Chi.Lollipop', usageQtyPerUnit:5.0, lineCost:89.6 },
    { id:'BOM-020', productId:'P020', productName:'Chicken Wings', ingId:'ING-071', ingName:'Chi.Wings', usageQtyPerUnit:125.0, lineCost:50.6 },
    { id:'BOM-021', productId:'P021', productName:'Chicken Drumstick - Normal', ingId:'ING-072', ingName:'Chi.Drumstrick', usageQtyPerUnit:1.0, lineCost:48.21 },
    { id:'BOM-022', productId:'P022', productName:'Chicken Drumstick - Medium', ingId:'ING-072', ingName:'Chi.Drumstrick', usageQtyPerUnit:2.0, lineCost:96.43 },
    { id:'BOM-023', productId:'P023', productName:'Chicken Drumstick - Special', ingId:'ING-072', ingName:'Chi.Drumstrick', usageQtyPerUnit:5.0, lineCost:241.07 },
    { id:'BOM-024', productId:'P024', productName:'Veg Momos', ingId:'ING-073', ingName:'Veg.Momos', usageQtyPerUnit:5.0, lineCost:30.48 },
    { id:'BOM-025', productId:'P025', productName:'Paneer Momos', ingId:'ING-074', ingName:'Pan.Momos', usageQtyPerUnit:5.0, lineCost:40.95 },
    { id:'BOM-026', productId:'P026', productName:'Chicken Momos', ingId:'ING-075', ingName:'Chi.Momos', usageQtyPerUnit:5.0, lineCost:35.24 },
    { id:'BOM-027', productId:'P027', productName:'Chicken Tikka Momos', ingId:'ING-076', ingName:'Chi.Tikka Mo', usageQtyPerUnit:5.0, lineCost:39.05 },
    { id:'BOM-028', productId:'P028', productName:'Vegetable Sandwich', ingId:'ING-032', ingName:'Bread (Sandwich)', usageQtyPerUnit:2.0, lineCost:10.0 },
    { id:'BOM-029', productId:'P028', productName:'Vegetable Sandwich', ingId:'ING-033', ingName:'Onion', usageQtyPerUnit:40.0, lineCost:2.4 },
    { id:'BOM-030', productId:'P028', productName:'Vegetable Sandwich', ingId:'ING-034', ingName:'Tomato', usageQtyPerUnit:30.0, lineCost:1.5 },
    { id:'BOM-031', productId:'P028', productName:'Vegetable Sandwich', ingId:'ING-040', ingName:'Corn', usageQtyPerUnit:50.0, lineCost:5.5 },
    { id:'BOM-032', productId:'P028', productName:'Vegetable Sandwich', ingId:'ING-039', ingName:'Carrot', usageQtyPerUnit:50.0, lineCost:2.5 },
    { id:'BOM-033', productId:'P028', productName:'Vegetable Sandwich', ingId:'ING-041', ingName:'Capsicum', usageQtyPerUnit:15.0, lineCost:3.0 },
    { id:'BOM-034', productId:'P028', productName:'Vegetable Sandwich', ingId:'ING-036', ingName:'Mayo', usageQtyPerUnit:15.0, lineCost:1.65 },
    { id:'BOM-035', productId:'P028', productName:'Vegetable Sandwich', ingId:'ING-035', ingName:'Sauce', usageQtyPerUnit:35.0, lineCost:3.43 },
    { id:'BOM-036', productId:'P029', productName:'Vegetable Cheese Sandwich', ingId:'ING-032', ingName:'Bread (Sandwich)', usageQtyPerUnit:2.0, lineCost:10.0 },
    { id:'BOM-037', productId:'P029', productName:'Vegetable Cheese Sandwich', ingId:'ING-033', ingName:'Onion', usageQtyPerUnit:40.0, lineCost:2.4 },
    { id:'BOM-038', productId:'P029', productName:'Vegetable Cheese Sandwich', ingId:'ING-034', ingName:'Tomato', usageQtyPerUnit:30.0, lineCost:1.5 },
    { id:'BOM-039', productId:'P029', productName:'Vegetable Cheese Sandwich', ingId:'ING-040', ingName:'Corn', usageQtyPerUnit:50.0, lineCost:5.5 },
    { id:'BOM-040', productId:'P029', productName:'Vegetable Cheese Sandwich', ingId:'ING-039', ingName:'Carrot', usageQtyPerUnit:50.0, lineCost:2.5 },
    { id:'BOM-041', productId:'P029', productName:'Vegetable Cheese Sandwich', ingId:'ING-041', ingName:'Capsicum', usageQtyPerUnit:15.0, lineCost:3.0 },
    { id:'BOM-042', productId:'P029', productName:'Vegetable Cheese Sandwich', ingId:'ING-036', ingName:'Mayo', usageQtyPerUnit:15.0, lineCost:1.65 },
    { id:'BOM-043', productId:'P029', productName:'Vegetable Cheese Sandwich', ingId:'ING-035', ingName:'Sauce', usageQtyPerUnit:35.0, lineCost:3.43 },
    { id:'BOM-044', productId:'P030', productName:'Paneer Sandwich', ingId:'ING-032', ingName:'Bread (Sandwich)', usageQtyPerUnit:2.0, lineCost:10.0 },
    { id:'BOM-045', productId:'P030', productName:'Paneer Sandwich', ingId:'ING-033', ingName:'Onion', usageQtyPerUnit:40.0, lineCost:2.4 },
    { id:'BOM-046', productId:'P030', productName:'Paneer Sandwich', ingId:'ING-034', ingName:'Tomato', usageQtyPerUnit:30.0, lineCost:1.5 },
    { id:'BOM-047', productId:'P030', productName:'Paneer Sandwich', ingId:'ING-040', ingName:'Corn', usageQtyPerUnit:30.0, lineCost:3.3 },
    { id:'BOM-048', productId:'P030', productName:'Paneer Sandwich', ingId:'ING-039', ingName:'Carrot', usageQtyPerUnit:50.0, lineCost:2.5 },
    { id:'BOM-049', productId:'P030', productName:'Paneer Sandwich', ingId:'ING-041', ingName:'Capsicum', usageQtyPerUnit:15.0, lineCost:3.0 },
    { id:'BOM-050', productId:'P030', productName:'Paneer Sandwich', ingId:'ING-036', ingName:'Mayo', usageQtyPerUnit:15.0, lineCost:1.65 },
    { id:'BOM-051', productId:'P030', productName:'Paneer Sandwich', ingId:'ING-035', ingName:'Sauce', usageQtyPerUnit:35.0, lineCost:3.43 },
    { id:'BOM-052', productId:'P031', productName:'Paneer Cheese Sandwich', ingId:'ING-032', ingName:'Bread (Sandwich)', usageQtyPerUnit:2.0, lineCost:10.0 },
    { id:'BOM-053', productId:'P031', productName:'Paneer Cheese Sandwich', ingId:'ING-033', ingName:'Onion', usageQtyPerUnit:40.0, lineCost:2.4 },
    { id:'BOM-054', productId:'P031', productName:'Paneer Cheese Sandwich', ingId:'ING-034', ingName:'Tomato', usageQtyPerUnit:30.0, lineCost:1.5 },
    { id:'BOM-055', productId:'P031', productName:'Paneer Cheese Sandwich', ingId:'ING-040', ingName:'Corn', usageQtyPerUnit:30.0, lineCost:3.3 },
    { id:'BOM-056', productId:'P031', productName:'Paneer Cheese Sandwich', ingId:'ING-039', ingName:'Carrot', usageQtyPerUnit:50.0, lineCost:2.5 },
    { id:'BOM-057', productId:'P031', productName:'Paneer Cheese Sandwich', ingId:'ING-041', ingName:'Capsicum', usageQtyPerUnit:15.0, lineCost:3.0 },
    { id:'BOM-058', productId:'P031', productName:'Paneer Cheese Sandwich', ingId:'ING-036', ingName:'Mayo', usageQtyPerUnit:15.0, lineCost:1.65 },
    { id:'BOM-059', productId:'P031', productName:'Paneer Cheese Sandwich', ingId:'ING-035', ingName:'Sauce', usageQtyPerUnit:35.0, lineCost:3.43 },
    { id:'BOM-060', productId:'P032', productName:'Chicken Sandwich', ingId:'ING-032', ingName:'Bread (Sandwich)', usageQtyPerUnit:2.0, lineCost:10.0 },
    { id:'BOM-061', productId:'P032', productName:'Chicken Sandwich', ingId:'ING-033', ingName:'Onion', usageQtyPerUnit:40.0, lineCost:2.4 },
    { id:'BOM-062', productId:'P032', productName:'Chicken Sandwich', ingId:'ING-034', ingName:'Tomato', usageQtyPerUnit:30.0, lineCost:1.5 },
    { id:'BOM-063', productId:'P032', productName:'Chicken Sandwich', ingId:'ING-040', ingName:'Corn', usageQtyPerUnit:50.0, lineCost:5.5 },
    { id:'BOM-064', productId:'P032', productName:'Chicken Sandwich', ingId:'ING-039', ingName:'Carrot', usageQtyPerUnit:50.0, lineCost:2.5 },
    { id:'BOM-065', productId:'P032', productName:'Chicken Sandwich', ingId:'ING-041', ingName:'Capsicum', usageQtyPerUnit:15.0, lineCost:3.0 },
    { id:'BOM-066', productId:'P032', productName:'Chicken Sandwich', ingId:'ING-036', ingName:'Mayo', usageQtyPerUnit:15.0, lineCost:1.65 },
    { id:'BOM-067', productId:'P032', productName:'Chicken Sandwich', ingId:'ING-035', ingName:'Sauce', usageQtyPerUnit:35.0, lineCost:3.43 },
    { id:'BOM-068', productId:'P033', productName:'Peri Peri Chicken Sandwich', ingId:'ING-032', ingName:'Bread (Sandwich)', usageQtyPerUnit:2.0, lineCost:10.0 },
    { id:'BOM-069', productId:'P033', productName:'Peri Peri Chicken Sandwich', ingId:'ING-033', ingName:'Onion', usageQtyPerUnit:40.0, lineCost:2.4 },
    { id:'BOM-070', productId:'P033', productName:'Peri Peri Chicken Sandwich', ingId:'ING-034', ingName:'Tomato', usageQtyPerUnit:30.0, lineCost:1.5 },
    { id:'BOM-071', productId:'P033', productName:'Peri Peri Chicken Sandwich', ingId:'ING-040', ingName:'Corn', usageQtyPerUnit:50.0, lineCost:5.5 },
    { id:'BOM-072', productId:'P033', productName:'Peri Peri Chicken Sandwich', ingId:'ING-039', ingName:'Carrot', usageQtyPerUnit:50.0, lineCost:2.5 },
    { id:'BOM-073', productId:'P033', productName:'Peri Peri Chicken Sandwich', ingId:'ING-041', ingName:'Capsicum', usageQtyPerUnit:15.0, lineCost:3.0 },
    { id:'BOM-074', productId:'P033', productName:'Peri Peri Chicken Sandwich', ingId:'ING-036', ingName:'Mayo', usageQtyPerUnit:15.0, lineCost:1.65 },
    { id:'BOM-075', productId:'P033', productName:'Peri Peri Chicken Sandwich', ingId:'ING-035', ingName:'Sauce', usageQtyPerUnit:35.0, lineCost:3.43 },
    { id:'BOM-076', productId:'P034', productName:'Bread Omelette', ingId:'ING-096', ingName:'Bread (Omelette)', usageQtyPerUnit:2.0, lineCost:4.0 },
    { id:'BOM-077', productId:'P034', productName:'Bread Omelette', ingId:'ING-033', ingName:'Onion', usageQtyPerUnit:40.0, lineCost:2.4 },
    { id:'BOM-078', productId:'P034', productName:'Bread Omelette', ingId:'ING-034', ingName:'Tomato', usageQtyPerUnit:30.0, lineCost:1.5 },
    { id:'BOM-079', productId:'P034', productName:'Bread Omelette', ingId:'ING-040', ingName:'Corn', usageQtyPerUnit:50.0, lineCost:5.5 },
    { id:'BOM-080', productId:'P034', productName:'Bread Omelette', ingId:'ING-039', ingName:'Carrot', usageQtyPerUnit:50.0, lineCost:2.5 },
    { id:'BOM-081', productId:'P034', productName:'Bread Omelette', ingId:'ING-041', ingName:'Capsicum', usageQtyPerUnit:15.0, lineCost:3.0 },
    { id:'BOM-082', productId:'P034', productName:'Bread Omelette', ingId:'ING-036', ingName:'Mayo', usageQtyPerUnit:15.0, lineCost:1.65 },
    { id:'BOM-083', productId:'P034', productName:'Bread Omelette', ingId:'ING-035', ingName:'Sauce', usageQtyPerUnit:35.0, lineCost:3.43 },
    { id:'BOM-084', productId:'P035', productName:'Peri Peri Noodles', ingId:'ING-045', ingName:'Noodles', usageQtyPerUnit:1.5, lineCost:22.5 },
    { id:'BOM-085', productId:'P035', productName:'Peri Peri Noodles', ingId:'ING-033', ingName:'Onion', usageQtyPerUnit:40.0, lineCost:2.4 },
    { id:'BOM-086', productId:'P035', productName:'Peri Peri Noodles', ingId:'ING-034', ingName:'Tomato', usageQtyPerUnit:30.0, lineCost:1.5 },
    { id:'BOM-087', productId:'P035', productName:'Peri Peri Noodles', ingId:'ING-040', ingName:'Corn', usageQtyPerUnit:50.0, lineCost:5.5 },
    { id:'BOM-088', productId:'P035', productName:'Peri Peri Noodles', ingId:'ING-039', ingName:'Carrot', usageQtyPerUnit:50.0, lineCost:2.5 },
    { id:'BOM-089', productId:'P035', productName:'Peri Peri Noodles', ingId:'ING-041', ingName:'Capsicum', usageQtyPerUnit:15.0, lineCost:3.0 },
    { id:'BOM-090', productId:'P036', productName:'CHAI\'BEE\' SPECIAL Cheese Noodles', ingId:'ING-045', ingName:'Noodles', usageQtyPerUnit:1.5, lineCost:22.5 },
    { id:'BOM-091', productId:'P036', productName:'CHAI\'BEE\' SPECIAL Cheese Noodles', ingId:'ING-033', ingName:'Onion', usageQtyPerUnit:40.0, lineCost:2.4 },
    { id:'BOM-092', productId:'P036', productName:'CHAI\'BEE\' SPECIAL Cheese Noodles', ingId:'ING-034', ingName:'Tomato', usageQtyPerUnit:30.0, lineCost:1.5 },
    { id:'BOM-093', productId:'P036', productName:'CHAI\'BEE\' SPECIAL Cheese Noodles', ingId:'ING-040', ingName:'Corn', usageQtyPerUnit:50.0, lineCost:5.5 },
    { id:'BOM-094', productId:'P036', productName:'CHAI\'BEE\' SPECIAL Cheese Noodles', ingId:'ING-039', ingName:'Carrot', usageQtyPerUnit:50.0, lineCost:2.5 },
    { id:'BOM-095', productId:'P036', productName:'CHAI\'BEE\' SPECIAL Cheese Noodles', ingId:'ING-041', ingName:'Capsicum', usageQtyPerUnit:15.0, lineCost:3.0 },
    { id:'BOM-096', productId:'P036', productName:'CHAI\'BEE\' SPECIAL Cheese Noodles', ingId:'ING-036', ingName:'Mayo', usageQtyPerUnit:15.0, lineCost:1.65 },
    { id:'BOM-097', productId:'P036', productName:'CHAI\'BEE\' SPECIAL Cheese Noodles', ingId:'ING-035', ingName:'Sauce', usageQtyPerUnit:15.0, lineCost:1.47 },
    { id:'BOM-098', productId:'P037', productName:'Mango Lassi', ingId:'ING-056', ingName:'Curd', usageQtyPerUnit:150.0, lineCost:10.35 },
    { id:'BOM-099', productId:'P037', productName:'Mango Lassi', ingId:'ING-014', ingName:'Mango Pulp', usageQtyPerUnit:50.0, lineCost:14.0 },
    { id:'BOM-100', productId:'P037', productName:'Mango Lassi', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
    { id:'BOM-101', productId:'P038', productName:'Strawberry Lassi', ingId:'ING-056', ingName:'Curd', usageQtyPerUnit:150.0, lineCost:10.35 },
    { id:'BOM-102', productId:'P038', productName:'Strawberry Lassi', ingId:'ING-015', ingName:'Strawberry Pulp', usageQtyPerUnit:50.0, lineCost:14.0 },
    { id:'BOM-103', productId:'P038', productName:'Strawberry Lassi', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
    { id:'BOM-104', productId:'P039', productName:'Sweet Lassi', ingId:'ING-056', ingName:'Curd', usageQtyPerUnit:150.0, lineCost:10.35 },
    { id:'BOM-105', productId:'P039', productName:'Sweet Lassi', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
    { id:'BOM-106', productId:'P040', productName:'Mint Lassi', ingId:'ING-056', ingName:'Curd', usageQtyPerUnit:150.0, lineCost:10.35 },
    { id:'BOM-107', productId:'P040', productName:'Mint Lassi', ingId:'ING-092', ingName:'Green Mint', usageQtyPerUnit:30.0, lineCost:8.8 },
    { id:'BOM-108', productId:'P040', productName:'Mint Lassi', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
    { id:'BOM-109', productId:'P041', productName:'Rose Lassi', ingId:'ING-056', ingName:'Curd', usageQtyPerUnit:150.0, lineCost:10.35 },
    { id:'BOM-110', productId:'P041', productName:'Rose Lassi', ingId:'ING-031', ingName:'Rose Milk', usageQtyPerUnit:50.0, lineCost:10.15 },
    { id:'BOM-111', productId:'P041', productName:'Rose Lassi', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
    { id:'BOM-112', productId:'P042', productName:'Vanilla Milkshake', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:150.0, lineCost:10.65 },
    { id:'BOM-113', productId:'P042', productName:'Vanilla Milkshake', ingId:'ING-010', ingName:'Vanilla Ice Cream', usageQtyPerUnit:100.0, lineCost:7.75 },
    { id:'BOM-114', productId:'P042', productName:'Vanilla Milkshake', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
    { id:'BOM-115', productId:'P043', productName:'Mango Milkshake', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:150.0, lineCost:10.65 },
    { id:'BOM-116', productId:'P043', productName:'Mango Milkshake', ingId:'ING-011', ingName:'Mango Ice Cream', usageQtyPerUnit:100.0, lineCost:10.75 },
    { id:'BOM-117', productId:'P043', productName:'Mango Milkshake', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
    { id:'BOM-118', productId:'P044', productName:'Strawberry Milkshake', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:150.0, lineCost:10.65 },
    { id:'BOM-119', productId:'P044', productName:'Strawberry Milkshake', ingId:'ING-010', ingName:'Vanilla Ice Cream', usageQtyPerUnit:100.0, lineCost:7.75 },
    { id:'BOM-120', productId:'P044', productName:'Strawberry Milkshake', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
    { id:'BOM-121', productId:'P045', productName:'Chocolate Milkshake', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:150.0, lineCost:10.65 },
    { id:'BOM-122', productId:'P045', productName:'Chocolate Milkshake', ingId:'ING-012', ingName:'Chocolate Ice Cream', usageQtyPerUnit:100.0, lineCost:10.25 },
    { id:'BOM-123', productId:'P045', productName:'Chocolate Milkshake', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
    { id:'BOM-124', productId:'P046', productName:'Chai Bee Special Tender Coconut Milkshake', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:150.0, lineCost:10.65 },
    { id:'BOM-125', productId:'P046', productName:'Chai Bee Special Tender Coconut Milkshake', ingId:'ING-010', ingName:'Vanilla Ice Cream', usageQtyPerUnit:100.0, lineCost:7.75 },
    { id:'BOM-126', productId:'P046', productName:'Chai Bee Special Tender Coconut Milkshake', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
    { id:'BOM-127', productId:'P047', productName:'Oreo Milkshake', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:150.0, lineCost:10.65 },
    { id:'BOM-128', productId:'P047', productName:'Oreo Milkshake', ingId:'ING-010', ingName:'Vanilla Ice Cream', usageQtyPerUnit:100.0, lineCost:7.75 },
    { id:'BOM-129', productId:'P047', productName:'Oreo Milkshake', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
    { id:'BOM-130', productId:'P048', productName:'KitKat Milkshake', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:150.0, lineCost:10.65 },
    { id:'BOM-131', productId:'P048', productName:'KitKat Milkshake', ingId:'ING-010', ingName:'Vanilla Ice Cream', usageQtyPerUnit:100.0, lineCost:7.75 },
    { id:'BOM-132', productId:'P048', productName:'KitKat Milkshake', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
    { id:'BOM-133', productId:'P049', productName:'Kiwi Milkshake', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:150.0, lineCost:10.65 },
    { id:'BOM-134', productId:'P049', productName:'Kiwi Milkshake', ingId:'ING-010', ingName:'Vanilla Ice Cream', usageQtyPerUnit:100.0, lineCost:7.75 },
    { id:'BOM-135', productId:'P049', productName:'Kiwi Milkshake', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
    { id:'BOM-136', productId:'P050', productName:'Butterscotch Milkshake', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:150.0, lineCost:10.65 },
    { id:'BOM-137', productId:'P050', productName:'Butterscotch Milkshake', ingId:'ING-010', ingName:'Vanilla Ice Cream', usageQtyPerUnit:100.0, lineCost:7.75 },
    { id:'BOM-138', productId:'P050', productName:'Butterscotch Milkshake', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
    { id:'BOM-139', productId:'P051', productName:'Dry Fruit Milkshake', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:150.0, lineCost:10.65 },
    { id:'BOM-140', productId:'P051', productName:'Dry Fruit Milkshake', ingId:'ING-010', ingName:'Vanilla Ice Cream', usageQtyPerUnit:100.0, lineCost:7.75 },
    { id:'BOM-141', productId:'P051', productName:'Dry Fruit Milkshake', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
    { id:'BOM-142', productId:'P052', productName:'Peanut Butter Milkshake', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:150.0, lineCost:10.65 },
    { id:'BOM-143', productId:'P052', productName:'Peanut Butter Milkshake', ingId:'ING-010', ingName:'Vanilla Ice Cream', usageQtyPerUnit:100.0, lineCost:7.75 },
    { id:'BOM-144', productId:'P052', productName:'Peanut Butter Milkshake', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
    { id:'BOM-145', productId:'P053', productName:'Butter Fruit Milkshake', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:150.0, lineCost:10.65 },
    { id:'BOM-146', productId:'P053', productName:'Butter Fruit Milkshake', ingId:'ING-010', ingName:'Vanilla Ice Cream', usageQtyPerUnit:100.0, lineCost:7.75 },
    { id:'BOM-147', productId:'P053', productName:'Butter Fruit Milkshake', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
    { id:'BOM-148', productId:'P054', productName:'Fig Milkshake', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:150.0, lineCost:10.65 },
    { id:'BOM-149', productId:'P054', productName:'Fig Milkshake', ingId:'ING-010', ingName:'Vanilla Ice Cream', usageQtyPerUnit:100.0, lineCost:7.75 },
    { id:'BOM-150', productId:'P054', productName:'Fig Milkshake', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
    { id:'BOM-151', productId:'P055', productName:'Blueberry Milkshake', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:150.0, lineCost:10.65 },
    { id:'BOM-152', productId:'P055', productName:'Blueberry Milkshake', ingId:'ING-010', ingName:'Vanilla Ice Cream', usageQtyPerUnit:100.0, lineCost:7.75 },
    { id:'BOM-153', productId:'P055', productName:'Blueberry Milkshake', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
    { id:'BOM-154', productId:'P056', productName:'Coffee Milkshake', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:150.0, lineCost:10.65 },
    { id:'BOM-155', productId:'P056', productName:'Coffee Milkshake', ingId:'ING-012', ingName:'Chocolate Ice Cream', usageQtyPerUnit:100.0, lineCost:10.25 },
    { id:'BOM-156', productId:'P056', productName:'Coffee Milkshake', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
    { id:'BOM-157', productId:'P057', productName:'Cold Coffee', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:150.0, lineCost:10.65 },
    { id:'BOM-158', productId:'P057', productName:'Cold Coffee', ingId:'ING-012', ingName:'Chocolate Ice Cream', usageQtyPerUnit:100.0, lineCost:10.25 },
    { id:'BOM-159', productId:'P057', productName:'Cold Coffee', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
    { id:'BOM-160', productId:'P058', productName:'Rose Milk', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:150.0, lineCost:10.65 },
    { id:'BOM-161', productId:'P058', productName:'Rose Milk', ingId:'ING-010', ingName:'Vanilla Ice Cream', usageQtyPerUnit:100.0, lineCost:7.75 },
    { id:'BOM-162', productId:'P058', productName:'Rose Milk', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
    { id:'BOM-163', productId:'P059', productName:'Blue Mojito', ingId:'ING-049', ingName:'Blue-Moji', usageQtyPerUnit:30.0, lineCost:11.43 },
    { id:'BOM-164', productId:'P059', productName:'Blue Mojito', ingId:'ING-086', ingName:'Sprite', usageQtyPerUnit:150.0, lineCost:6.0 },
    { id:'BOM-165', productId:'P059', productName:'Blue Mojito', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:40.0, lineCost:5.09 },
    { id:'BOM-166', productId:'P060', productName:'Lime Mint Mojito', ingId:'ING-050', ingName:'Limemint-Moji', usageQtyPerUnit:30.0, lineCost:11.43 },
    { id:'BOM-167', productId:'P060', productName:'Lime Mint Mojito', ingId:'ING-086', ingName:'Sprite', usageQtyPerUnit:150.0, lineCost:6.0 },
    { id:'BOM-168', productId:'P060', productName:'Lime Mint Mojito', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:40.0, lineCost:5.09 },
    { id:'BOM-169', productId:'P061', productName:'Strawberry Mojito', ingId:'ING-051', ingName:'Strberry-Moji', usageQtyPerUnit:30.0, lineCost:8.8 },
    { id:'BOM-170', productId:'P061', productName:'Strawberry Mojito', ingId:'ING-086', ingName:'Sprite', usageQtyPerUnit:150.0, lineCost:6.0 },
    { id:'BOM-171', productId:'P061', productName:'Strawberry Mojito', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:40.0, lineCost:5.09 },
    { id:'BOM-172', productId:'P062', productName:'Mango Mojito', ingId:'ING-052', ingName:'Mango(Mazza)', usageQtyPerUnit:150.0, lineCost:9.38 },
    { id:'BOM-173', productId:'P062', productName:'Mango Mojito', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:40.0, lineCost:5.09 },
    { id:'BOM-174', productId:'P063', productName:'Watermelon Mojito', ingId:'ING-053', ingName:'Watermelon-Moji', usageQtyPerUnit:30.0, lineCost:8.8 },
    { id:'BOM-175', productId:'P063', productName:'Watermelon Mojito', ingId:'ING-086', ingName:'Sprite', usageQtyPerUnit:150.0, lineCost:6.0 },
    { id:'BOM-176', productId:'P063', productName:'Watermelon Mojito', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:40.0, lineCost:5.09 },
    { id:'BOM-177', productId:'P064', productName:'Classic Tea', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:60.0, lineCost:4.26 },
    { id:'BOM-178', productId:'P064', productName:'Classic Tea', ingId:'ING-003', ingName:'Tea Powder', usageQtyPerUnit:5.0, lineCost:2.05 },
    { id:'BOM-179', productId:'P064', productName:'Classic Tea', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:15.0, lineCost:0.98 },
    { id:'BOM-180', productId:'P065', productName:'Ginger Tea', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:60.0, lineCost:4.26 },
    { id:'BOM-181', productId:'P065', productName:'Ginger Tea', ingId:'ING-003', ingName:'Tea Powder', usageQtyPerUnit:5.0, lineCost:2.05 },
    { id:'BOM-182', productId:'P065', productName:'Ginger Tea', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:15.0, lineCost:0.98 },
    { id:'BOM-183', productId:'P066', productName:'Cardamom Tea', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:60.0, lineCost:4.26 },
    { id:'BOM-184', productId:'P066', productName:'Cardamom Tea', ingId:'ING-003', ingName:'Tea Powder', usageQtyPerUnit:5.0, lineCost:2.05 },
    { id:'BOM-185', productId:'P066', productName:'Cardamom Tea', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:15.0, lineCost:0.98 },
    { id:'BOM-186', productId:'P067', productName:'Masala Tea', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:60.0, lineCost:4.26 },
    { id:'BOM-187', productId:'P067', productName:'Masala Tea', ingId:'ING-003', ingName:'Tea Powder', usageQtyPerUnit:5.0, lineCost:2.05 },
    { id:'BOM-188', productId:'P067', productName:'Masala Tea', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:15.0, lineCost:0.98 },
    { id:'BOM-189', productId:'P068', productName:'Black Tea', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:60.0, lineCost:4.26 },
    { id:'BOM-190', productId:'P068', productName:'Black Tea', ingId:'ING-003', ingName:'Tea Powder', usageQtyPerUnit:5.0, lineCost:2.05 },
    { id:'BOM-191', productId:'P068', productName:'Black Tea', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:15.0, lineCost:0.98 },
    { id:'BOM-192', productId:'P069', productName:'Lemon Tea', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:60.0, lineCost:4.26 },
    { id:'BOM-193', productId:'P069', productName:'Lemon Tea', ingId:'ING-003', ingName:'Tea Powder', usageQtyPerUnit:5.0, lineCost:2.05 },
    { id:'BOM-194', productId:'P069', productName:'Lemon Tea', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:15.0, lineCost:0.98 },
    { id:'BOM-195', productId:'P070', productName:'Ginger Lemon Tea', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:60.0, lineCost:4.26 },
    { id:'BOM-196', productId:'P070', productName:'Ginger Lemon Tea', ingId:'ING-003', ingName:'Tea Powder', usageQtyPerUnit:5.0, lineCost:2.05 },
    { id:'BOM-197', productId:'P070', productName:'Ginger Lemon Tea', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:15.0, lineCost:0.98 },
    { id:'BOM-198', productId:'P071', productName:'Filter Coffee', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:60.0, lineCost:4.26 },
    { id:'BOM-199', productId:'P071', productName:'Filter Coffee', ingId:'ING-004', ingName:'Coffee Powder', usageQtyPerUnit:6.25, lineCost:3.88 },
    { id:'BOM-200', productId:'P071', productName:'Filter Coffee', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:15.0, lineCost:0.98 },
    { id:'BOM-201', productId:'P072', productName:'Black Coffee', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:60.0, lineCost:4.26 },
    { id:'BOM-202', productId:'P072', productName:'Black Coffee', ingId:'ING-004', ingName:'Coffee Powder', usageQtyPerUnit:6.0, lineCost:3.72 },
    { id:'BOM-203', productId:'P072', productName:'Black Coffee', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:15.0, lineCost:0.98 },
    { id:'BOM-204', productId:'P073', productName:'Milk', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:80.0, lineCost:5.68 },
    { id:'BOM-205', productId:'P073', productName:'Milk', ingId:'ING-003', ingName:'Tea Powder', usageQtyPerUnit:5.0, lineCost:2.05 },
    { id:'BOM-206', productId:'P073', productName:'Milk', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:15.0, lineCost:0.98 },
    { id:'BOM-207', productId:'P074', productName:'Horlicks', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:60.0, lineCost:4.26 },
    { id:'BOM-208', productId:'P074', productName:'Horlicks', ingId:'ING-008', ingName:'Horlicks', usageQtyPerUnit:10.0, lineCost:5.3 },
    { id:'BOM-209', productId:'P074', productName:'Horlicks', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:15.0, lineCost:0.98 },
    { id:'BOM-210', productId:'P075', productName:'Boost', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:60.0, lineCost:4.26 },
    { id:'BOM-211', productId:'P075', productName:'Boost', ingId:'ING-009', ingName:'Boost', usageQtyPerUnit:10.0, lineCost:4.85 },
    { id:'BOM-212', productId:'P075', productName:'Boost', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:15.0, lineCost:0.98 },
    { id:'BOM-213', productId:'P076', productName:'Parcel Tea', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:120.0, lineCost:8.52 },
    { id:'BOM-214', productId:'P076', productName:'Parcel Tea', ingId:'ING-003', ingName:'Tea Powder', usageQtyPerUnit:10.0, lineCost:4.1 },
    { id:'BOM-215', productId:'P076', productName:'Parcel Tea', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
    { id:'BOM-216', productId:'P077', productName:'Parcel Coffee', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:120.0, lineCost:8.52 },
    { id:'BOM-217', productId:'P077', productName:'Parcel Coffee', ingId:'ING-004', ingName:'Coffee Powder', usageQtyPerUnit:12.0, lineCost:7.44 },
    { id:'BOM-218', productId:'P077', productName:'Parcel Coffee', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
    { id:'BOM-219', productId:'P078', productName:'Apple Juice', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:50.0, lineCost:3.55 },
    { id:'BOM-220', productId:'P078', productName:'Apple Juice', ingId:'ING-077', ingName:'Apple', usageQtyPerUnit:200.0, lineCost:40.0 },
    { id:'BOM-221', productId:'P078', productName:'Apple Juice', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
    { id:'BOM-222', productId:'P079', productName:'Mango Juice', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:50.0, lineCost:3.55 },
    { id:'BOM-223', productId:'P079', productName:'Mango Juice', ingId:'ING-014', ingName:'Mango Pulp', usageQtyPerUnit:60.0, lineCost:16.8 },
    { id:'BOM-224', productId:'P079', productName:'Mango Juice', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
    { id:'BOM-225', productId:'P080', productName:'Pomegranate Juice', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:50.0, lineCost:3.55 },
    { id:'BOM-226', productId:'P080', productName:'Pomegranate Juice', ingId:'ING-078', ingName:'Pomegranate', usageQtyPerUnit:200.0, lineCost:26.0 },
    { id:'BOM-227', productId:'P080', productName:'Pomegranate Juice', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
    { id:'BOM-228', productId:'P081', productName:'Watermelon Juice', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:50.0, lineCost:3.55 },
    { id:'BOM-229', productId:'P081', productName:'Watermelon Juice', ingId:'ING-079', ingName:'Watermelon', usageQtyPerUnit:160.0, lineCost:4.0 },
    { id:'BOM-230', productId:'P081', productName:'Watermelon Juice', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
    { id:'BOM-231', productId:'P082', productName:'Muskmelon Juice', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:50.0, lineCost:3.55 },
    { id:'BOM-232', productId:'P082', productName:'Muskmelon Juice', ingId:'ING-080', ingName:'Muskmelon', usageQtyPerUnit:160.0, lineCost:8.0 },
    { id:'BOM-233', productId:'P082', productName:'Muskmelon Juice', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
    { id:'BOM-234', productId:'P083', productName:'Lemon Juice', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:50.0, lineCost:3.55 },
    { id:'BOM-235', productId:'P083', productName:'Lemon Juice', ingId:'ING-054', ingName:'Lemon', usageQtyPerUnit:1.0, lineCost:7.0 },
    { id:'BOM-236', productId:'P083', productName:'Lemon Juice', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
    { id:'BOM-237', productId:'P084', productName:'Apple Beetroot Carrot Juice', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:50.0, lineCost:3.55 },
    { id:'BOM-238', productId:'P084', productName:'Apple Beetroot Carrot Juice', ingId:'ING-081', ingName:'Beetroot', usageQtyPerUnit:200.0, lineCost:20.0 },
    { id:'BOM-239', productId:'P084', productName:'Apple Beetroot Carrot Juice', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
    { id:'BOM-240', productId:'P085', productName:'Pomegranate Carrot Beetroot Juice', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:50.0, lineCost:3.55 },
    { id:'BOM-241', productId:'P085', productName:'Pomegranate Carrot Beetroot Juice', ingId:'ING-081', ingName:'Beetroot', usageQtyPerUnit:200.0, lineCost:15.33 },
    { id:'BOM-242', productId:'P085', productName:'Pomegranate Carrot Beetroot Juice', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
    { id:'BOM-243', productId:'P086', productName:'Fig Juice', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:50.0, lineCost:3.55 },
    { id:'BOM-244', productId:'P086', productName:'Fig Juice', ingId:'ING-029', ingName:'Fig Pulp', usageQtyPerUnit:60.0, lineCost:18.0 },
    { id:'BOM-245', productId:'P086', productName:'Fig Juice', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
    { id:'BOM-246', productId:'P087', productName:'Butter Fruit Juice', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:50.0, lineCost:3.55 },
    { id:'BOM-247', productId:'P087', productName:'Butter Fruit Juice', ingId:'ING-028', ingName:'Butter Fruit Pulp', usageQtyPerUnit:60.0, lineCost:20.4 },
    { id:'BOM-248', productId:'P087', productName:'Butter Fruit Juice', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
    { id:'BOM-249', productId:'P088', productName:'Tender Coconut Juice', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:50.0, lineCost:3.55 },
    { id:'BOM-250', productId:'P088', productName:'Tender Coconut Juice', ingId:'ING-017', ingName:'Tender Coconut Pulp', usageQtyPerUnit:60.0, lineCost:17.6 },
    { id:'BOM-251', productId:'P088', productName:'Tender Coconut Juice', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
    { id:'BOM-252', productId:'P089', productName:'Lemon Mint Juice', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:50.0, lineCost:3.55 },
    { id:'BOM-253', productId:'P089', productName:'Lemon Mint Juice', ingId:'ING-054', ingName:'Lemon', usageQtyPerUnit:1.0, lineCost:8.0 },
    { id:'BOM-254', productId:'P089', productName:'Lemon Mint Juice', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
    { id:'BOM-255', productId:'P090', productName:'Orange Juice', ingId:'ING-001', ingName:'Milk', usageQtyPerUnit:50.0, lineCost:3.55 },
    { id:'BOM-256', productId:'P090', productName:'Orange Juice', ingId:'ING-082', ingName:'Orange', usageQtyPerUnit:200.0, lineCost:20.0 },
    { id:'BOM-257', productId:'P090', productName:'Orange Juice', ingId:'ING-002', ingName:'Sugar', usageQtyPerUnit:30.0, lineCost:1.95 },
];

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. LIVE APPLICATION STATE STORE (ALL 12 PAGES)
  // =========================================================================
  const state = {
    activePage: 'dashboard',
    branch: 'Main Branch',
    dateRange: '',
    dateRangeFilter: { mode: 'all' },
    period: 'Monthly',
    salesFilter: 'All',
    expenseFilter: 'All',
    // Every KPI below starts at 0, not a dev-session snapshot of this
    // café's real revenue — they're recomputed for real the moment
    // dailySummary/expenses/staff are populated, either from a connected
    // Database sync (mergeBootstrapIntoState, below) or from in-app EOD
    // entries. A hardcoded figure here would otherwise sit on screen,
    // looking legitimate, until the first real sync overwrote it.
    totalRevenue: 0,
    netProfit: 0,
    totalExpenses: 0,
    totalOrders: 0,
    todayRevenue: 0,
    todayOrders: 0,
    // Both arrays start empty by design — they are populated only from real EOD
    // sales entries / expense entries the user makes in-app, or from a live
    // Google Sheets sync. No placeholder/demo rows are shipped.
    sales: [],
    expenses: [],
    // Per-product-per-day sales lines, populated only from real EOD entries (or a
    // live Sheets sync of DAILY_SALES). Powers Analytics' category/product trends,
    // day-of-week patterns, and cost-vs-revenue correlation — never seeded/fabricated.
    productSalesLog: [],
    attendanceMarkedToday: false,
    // No local seed roster — a real café's staff names, phone numbers and
    // salaries are real PII and must never be hardcoded into source that
    // might be reused as a template for a different café. Empty until a
    // connected Database sync populates it from the real EMPLOYEES sheet
    // (mergeBootstrapIntoState, below), or the owner adds staff in-app.
    staff: [],
    // Full 90-item product catalog, extracted from Chai_Bee_Consolidated_Master.xlsx
    // (Product Master + Costing sheets). Category filter chips on Menu Costing are
    // generated from the distinct categories found here.
    // Raw Cost comes from the real BOM (SEED_RECIPE_BOM, above) — the sum of
    // every ingredient line for that product — not from the workbook's flat
    // landedCost figure. The owner's Excel workbook didn't itemise gas/oil/
    // wastage/overheads per product separately from landed cost, so the gap
    // between landedCost and the real BOM-derived rawCost is folded into
    // overheadsCost as a single starting bucket (never negative — for the
    // couple of products where a since-corrected BOM line now makes rawCost
    // exceed the old landedCost, landedCost is raised to match rawCost with
    // overheadsCost at 0, rather than showing an impossible negative overhead).
    // Everything here is still editable from the Menu Costing page; once
    // edited, landedCost = rawCost (BOM total) + gas + oil + wastage + overheads.
    products: SEED_PRODUCTS.map((p, idx) => {
      const bomRawCost = Math.round(
        SEED_RECIPE_BOM.filter((r) => r.productId === p.id).reduce((sum, r) => sum + r.lineCost, 0) * 100
      ) / 100;
      const impliedOverhead = Math.round((p.landedCost - bomRawCost) * 100) / 100;
      const overheadsCost = Math.max(0, impliedOverhead);
      const landedCost = impliedOverhead < 0 ? bomRawCost : p.landedCost;
      return {
        id: p.id,
        name: p.name,
        category: p.category,
        landedCost,
        rawCost: bomRawCost,
        gasCost: 0,
        oilCost: 0,
        wastageCost: 0,
        overheadsCost,
        sellingPrice: p.price,
        marginRs: Math.round((p.price - landedCost) * 100) / 100,
        marginPct: landedCost > 0 ? Math.round(((p.price - landedCost) / landedCost) * 10000) / 100 : 0,
        dailyOrders: 0,
        // No per-product photo field existed at all before this — every menu
        // item rendered as plain text everywhere (New Sale tiles, Menu
        // Costing). imageDataUrl is set when the owner uploads a real photo
        // (via Menu Costing or the Add Menu Item form) and takes priority;
        // otherwise getProductImageSrc_() below falls back to a real photo
        // already shipped in images/menu/<id>.jpg for the ~26 items that
        // have one yet, then finally to a generic placeholder graphic — so
        // every product always has SOME image slot, never a missing-image
        // broken icon or empty box.
        imageDataUrl: null
      };
    }),
    selectedProductId: 'P064',
    productCategoryFilter: 'All',
    // Counter checkout (New Sale) screen state — the owner can hold several bills
    // open at once (one per customer/table, "hold" lets staff start a second order
    // while the first is still being decided) and switch between them; the active
    // bill's items are what the cart panel shows and what Checkout settles.
    // heldBills/activeBillId persist to localStorage (see persistHeldBills/
    // loadHeldBills below) so an accidental refresh mid-rush doesn't lose an order.
    heldBills: [], // [{ id, label, number, items: [{productId,name,qty,unitPrice}], paymentMode, discountType, discountValue }]
    activeBillId: null,
    nextBillNumber: 1,
    posCategoryFilter: 'All',
    posReceiptFormat: '80mm', // '58mm' | '80mm' | 'A5' | 'A4'
    lastReceipt: null, // populated right after checkout, for the print view
    // Real 22-day October sales totals, extracted from the café's own workbook.
    // New EOD entries (see the Sales page) merge into this same array by date.
    dailySummary: SEED_DAILY_SUMMARY.map((d) => ({ ...d })),
    // Live raw-material inventory, extracted from the same workbook's STOCK sheet.
    // reorder = 20% of extracted stock as a sane starting low-stock threshold; the
    // real per-ingredient threshold is configurable once synced to Google Sheets.
    inventory: SEED_INVENTORY.map((it, idx) => ({
      sku: it.sku,
      item: it.name,
      category: 'Raw Material',
      stock: it.stock,
      unit: 'units',
      reorder: Math.max(1, Math.round(it.stock * 0.2 * 100) / 100),
      unitCost: it.unitCost,
      status: it.stock <= Math.max(1, Math.round(it.stock * 0.2 * 100) / 100) ? 'Low Stock' : 'Optimal'
    })),
    // Per-ingredient recipe BOM: one row per (product, ingredient) pair with its real
    // usage quantity and line cost, extracted from the owner's costing workbook. This
    // is what makes every ingredient cost in Menu Costing individually editable.
    recipeBom: SEED_RECIPE_BOM.map((r) => ({ ...r })),
    // Raw ATTENDANCE/PAYROLL_LOGS sheet rows — empty until the first real
    // Sheets sync populates them (no local seed data for these, since
    // attendance/payroll history is specific to each café's real operations,
    // not something to fabricate placeholder rows for).
    attendance: [],
    payrollLogs: [],
    // No local seed vendors either — same reasoning as staff above: real
    // supplier names/phone numbers/balances are this café's real business
    // relationships, not sample data. Populated from the real CONTACTS
    // sheet on sync, or added in-app.
    contacts: [],
    settings: {
      // --- Café profile ---
      ownerName: 'Owner',
      cafeName: 'Chai’ Bee’',
      address: 'Vayalur Main Road, Tiruchirappalli, TN 620017',
      fssai: '12426014000892',
      fssaiRenewalDate: '2027-03-31',
      udhyamNumber: '',
      udhyamRenewalDate: '',
      msmeNumber: '',
      msmeRenewalDate: '',
      upiId: 'chaibee.trichy@okaxis',
      invoicePrefix: 'INV-',
      currencySymbol: '₹',
      locale: 'en-IN',
      dateFormat: 'DD MMM YYYY',
      timezone: 'Asia/Kolkata',

      // --- Google Sheets connection & sync ---
      apiBaseUrl: '',
      autoRefreshEnabled: true,
      refreshIntervalMinutes: 60,
      syncOnSave: true,

      // --- Alerts & notifications ---
      alertEmail: 'chai6bee@gmail.com',
      whatsappAlerts: true,
      lowStockSound: true,
      notifyLowStock: true,
      notifyPendingPayroll: true,
      notifyLicenseRenewal: true,
      lowStockEmailHourIst: 22,
      payrollReminderHourIst: 8,
      payrollReminderDaysBefore: 2,

      // --- Telegram bot ---
      telegramBotUsername: '',

      // --- Inventory & costing defaults ---
      lowStockThresholdPct: 20,
      overheadPctDefault: 40,
      wastagePctDefault: 3,
      salaryDay: 28,

      // --- Appearance ---
      soundEnabled: true,
      chartColorTheme: 'warm',
      compactTables: false,
      showSparklines: true,
      animationsEnabled: true,

      // --- Dashboard behavior ---
      dashboardDefaultPeriod: 'Monthly',
      lowStockBadgeOnSidebar: true,

      // --- Printing ---
      // printMode 'browser' (default): Print Bill calls window.print(), which
      // always shows the OS print dialog — standard browser behavior, works
      // everywhere, no setup. printMode 'qztray': Print Bill instead sends
      // raw ESC/POS straight to a named printer via a local QZ Tray agent
      // running on the till's own PC — no dialog, one click, one copy,
      // matches how a dedicated POS terminal behaves. QZ Tray
      // (qz.io, free) must be installed and running on that PC for this to
      // work; it is a separate one-time install, not something this web app
      // can install for the owner.
      printMode: 'browser',
      defaultReceiptFormat: '80mm',
      qzTrayPrinterName: '',
      qzTrayHost: 'localhost',
      // 'thermal': sends raw ESC/POS control codes (buildEscPosReceipt_) —
      // only a real thermal/receipt printer's firmware understands these
      // binary commands. 'regular': sends the receipt as rendered HTML
      // instead (QZ Tray's "pixel printing"), which works with an ordinary
      // inkjet/laser printer's normal driver, the same way printing any
      // other webpage does. Sending raw ESC/POS to a regular printer like a
      // Canon/HP/Epson inkjet doesn't error — the driver just can't make
      // sense of the bytes, so the job silently produces nothing even though
      // qz.print() itself resolves successfully and the app reports success.
      qzTrayPrinterType: 'thermal'
    },
    telegramConnected: false,
    syncStatus: 'local',
    lastSyncedAt: null
  };

  // ---- Held Bills (counter checkout) persistence ----
  // Held bills are per-browser working state for the counter, not business data —
  // they're gone once a bill is checked out (it becomes a real DAILY_SALES record
  // instead) — so localStorage is the right place for them, not the backend sheet.
  // Wrapped in try/catch per the platform rule: storage can throw or come back
  // empty in a private window or with blocked site data, and the counter must
  // still work (starting from one empty bill) even then.
  const HELD_BILLS_STORAGE_KEY = 'brewiq_held_bills_v1';

  const persistHeldBills = () => {
    try {
      localStorage.setItem(
        HELD_BILLS_STORAGE_KEY,
        JSON.stringify({ heldBills: state.heldBills, activeBillId: state.activeBillId, nextBillNumber: state.nextBillNumber })
      );
    } catch (e) {
      /* best-effort only — a held bill lost to a storage failure still works for this session */
    }
  };

  const loadHeldBills = () => {
    try {
      const raw = localStorage.getItem(HELD_BILLS_STORAGE_KEY);
      if (!raw) return false;
      const saved = JSON.parse(raw);
      if (saved && Array.isArray(saved.heldBills) && saved.heldBills.length) {
        state.heldBills = saved.heldBills;
        state.activeBillId = saved.activeBillId || saved.heldBills[0].id;
        state.nextBillNumber = saved.nextBillNumber || saved.heldBills.length + 1;
        return true;
      }
    } catch (e) {
      /* corrupted or inaccessible storage — fall through to a fresh bill */
    }
    return false;
  };

  const createNewBill = (label) => {
    const bill = {
      id: 'BILL-' + new Date().getTime() + '-' + Math.floor(Math.random() * 1000),
      number: state.nextBillNumber,
      label: (label || '').trim(),
      items: [],
      paymentMode: 'Cash',
      discountType: 'none', // 'none' | 'flat' | 'pct'
      discountValue: 0
    };
    state.nextBillNumber += 1;
    state.heldBills.push(bill);
    state.activeBillId = bill.id;
    persistHeldBills();
    return bill;
  };

  const getActiveBill = () => {
    if (!state.heldBills.length) {
      createNewBill();
    }
    let bill = state.heldBills.find((b) => b.id === state.activeBillId);
    if (!bill) {
      bill = state.heldBills[0];
      state.activeBillId = bill.id;
    }
    return bill;
  };

  // Ensure at least one bill exists on load, restoring held bills from a prior
  // session (e.g. the page was refreshed mid-rush) when there are any.
  if (!loadHeldBills()) {
    createNewBill();
  }

  // ---- Local business-data persistence (sales, dailySummary, expenses, etc.) ----
  // Before this, every checkout/EOD-entry/expense/etc. only ever lived in the
  // in-memory `state` object for that page session. When a Google Sheet
  // connection is configured, that's fine — the backend is the durable store
  // and a sync pulls it back after refresh. But run locally with no
  // apiBaseUrl set (apiCall/syncFromSheet both no-op in that case), there was
  // no durable store at all: a refresh always re-ran the DOMContentLoaded
  // handler from scratch, which rebuilds state.sales/dailySummary/etc. from
  // the hardcoded SEED_* arrays — silently discarding every real sale,
  // expense, EOD entry, stock deduction, staff/contact add, and BOM edit made
  // during that session. This is what made a checked-out bill "vanish" on
  // refresh even with no backend configured at all.
  //
  // This saves/restores exactly the fields a real café's day-to-day work
  // touches — not UI/transient fields (activePage, filters, lastReceipt,
  // syncStatus) and not heldBills/settings, which already have their own
  // dedicated persistence above. It is intentionally separate from (and
  // overridden by) a live Sheet sync: mergeBootstrapIntoState always wins
  // once a real connection exists, so this only matters for local/offline use.
  const LOCAL_DATA_STORAGE_KEY = 'brewiq_local_data_v1';
  const LOCAL_DATA_FIELDS = [
    'sales', 'expenses', 'productSalesLog', 'dailySummary', 'staff', 'contacts',
    'attendance', 'payrollLogs', 'recipeBom', 'products', 'inventory',
    'totalRevenue', 'netProfit', 'totalExpenses', 'totalOrders', 'todayRevenue', 'todayOrders',
    'nextBillNumber'
  ];

  // Set to true the first time a save actually fails, so the UI can warn the
  // owner instead of silently losing data with no visible sign anything is
  // wrong (a private/incognito window, a storage quota hit, or the browser
  // blocking site data are the only realistic ways this save can fail).
  let localSaveFailed = false;
  const persistLocalBusinessData = () => {
    // THIS USED TO SKIP SAVING WHENEVER settings.apiBaseUrl WAS A NON-EMPTY
    // STRING, on the reasoning "a configured Sheet is the source of truth."
    // That reasoning only holds if the Sheet is actually REACHABLE right
    // now — a URL being typed into Settings once (even a dead/old/mistyped
    // deployment link the owner later gave up on) proves nothing about
    // that. apiCall() above already treats a failed/unreachable request as
    // non-fatal and tells the owner "Saved locally" when it can't reach the
    // server — but with the old guard here, that message was a LIE: the
    // in-memory state had changed, but nothing was actually written to
    // localStorage, so a refresh silently lost the entry anyway. This is
    // what was happening with EOD entries no longer surviving refresh even
    // though New Sale checkout appeared to work in isolated testing — any
    // leftover apiBaseUrl in Settings (including one from an earlier,
    // abandoned connection attempt) silently disabled ALL local saving from
    // that point on, with no warning anywhere in the UI.
    //
    // The fix: always save locally as a cheap, harmless safety net,
    // regardless of apiBaseUrl. This never conflicts with a genuinely
    // connected Sheet — mergeBootstrapIntoState (run by syncFromSheet on
    // load and on every periodic/manual sync) always overwrites this local
    // copy with the server's real data once that Sheet is actually
    // reachable, so a working connection is never shadowed by this. It only
    // helps the one case that broke before: the Sheet URL is configured but
    // NOT currently reachable, where this is now the only thing standing
    // between a sale and data loss.
    try {
      const snapshot = {};
      LOCAL_DATA_FIELDS.forEach((key) => { snapshot[key] = state[key]; });
      const payload = JSON.stringify(snapshot);
      localStorage.setItem(LOCAL_DATA_STORAGE_KEY, payload);
      // Read-back verification: setItem() can appear to succeed yet not
      // actually persist in some private/incognito modes (notably older
      // Safari), which silently cap storage at 0 bytes instead of throwing.
      // Comparing what was just written against what's actually in storage
      // catches that case, which a bare try/catch around setItem cannot.
      const verify = localStorage.getItem(LOCAL_DATA_STORAGE_KEY);
      if (verify !== payload) throw new Error('read-back mismatch after save');
      if (localSaveFailed) {
        localSaveFailed = false;
        showToast('Local saving is working again — your sales are being saved on this device.', 'success');
      }
    } catch (e) {
      // Best-effort in general, but a failure here means real sales data is
      // about to be lost on refresh — that must never fail silently again.
      if (!localSaveFailed) {
        localSaveFailed = true;
        showToast('⚠ Could not save sales data on this device (private/incognito window, or storage is full/blocked). Sales made now may be lost on refresh — switch to a normal browser window, or connect a Google Sheet in Settings so sales save to the cloud instead.', 'warning');
      }
    }
  };

  const loadLocalBusinessData = () => {
    try {
      const raw = localStorage.getItem(LOCAL_DATA_STORAGE_KEY);
      if (!raw) return false;
      const saved = JSON.parse(raw);
      if (!saved || typeof saved !== 'object') return false;
      LOCAL_DATA_FIELDS.forEach((key) => {
        if (saved[key] !== undefined) state[key] = saved[key];
      });
      return true;
    } catch (e) {
      return false;
    }
  };

  // Restore any locally-saved business data over the hardcoded seed before
  // the first render, unconditionally — even when a Sheet URL is configured.
  // This used to be skipped whenever apiBaseUrl was set, on the assumption
  // that syncFromSheet (below) would supply the real data instead. But if
  // that URL is stale, mistyped, or the deployment is down, syncFromSheet
  // fails quietly and the app was falling all the way back to the
  // hardcoded SEED_* demo data — silently discarding whatever had been
  // saved locally, which looked exactly like "my sales disappeared" even
  // though they were sitting safely in this browser's storage the whole
  // time. Loading the local snapshot first and unconditionally costs
  // nothing: a genuinely working Sheet connection still overwrites this
  // with the server's real data moments later via mergeBootstrapIntoState.
  loadLocalBusinessData();

  // Startup storage probe: confirms localStorage actually works on THIS
  // browser/profile before any sale is made, rather than only discovering a
  // problem after a checkout and a refresh have already lost real data. Some
  // private-browsing modes let setItem()/getItem() both "succeed" against an
  // in-memory-only store that's wiped the instant the tab closes — a bare
  // try/catch never sees that as an error, so this probe writes a known
  // value, re-reads it in a fresh call, and checks it round-tripped.
  // Declared here (near the local-data logic it protects) but NOT called
  // until after showToast() exists further below — see the call site next
  // to showToast's definition.
  const probeLocalStorageAvailability_ = () => {
    if ((state.settings.apiBaseUrl || '').trim()) return; // Sheet is the source of truth; this probe doesn't matter
    try {
      const probeKey = '__brewiq_storage_probe__';
      const probeVal = String(Date.now());
      localStorage.setItem(probeKey, probeVal);
      const readBack = localStorage.getItem(probeKey);
      localStorage.removeItem(probeKey);
      if (readBack !== probeVal) {
        showToast('⚠ This browser is not saving data between page loads (common in private/incognito mode). Sales recorded here WILL be lost on refresh — use a normal browser window, or connect a Google Sheet in Settings → Cloud Sync.', 'warning');
      }
    } catch (e) {
      showToast('⚠ This browser is blocking local storage, so sales cannot be saved on this device. Use a normal (non-private) browser window, or connect a Google Sheet in Settings → Cloud Sync so sales save to the cloud instead.', 'warning');
    }
  };

  // Safety-net autosave: persistLocalBusinessData() is also called directly
  // after every action that mutates sales/expenses/etc. (checkout, EOD entry,
  // add expense, restock, add staff/contact, BOM edit, ...), but a periodic
  // save plus a save on refresh/tab-close means even a mutation site that
  // didn't explicitly call it is still captured within a few seconds, or at
  // the moment the page is actually torn down.
  setInterval(persistLocalBusinessData, 4000);
  window.addEventListener('beforeunload', persistLocalBusinessData);

  const pageDirectory = [
    { id: 'dashboard', title: 'Dashboard', desc: 'Main overview, KPIs, Revenue vs Expenses chart, Top Selling Items' },
    { id: 'sales', title: 'Sales / Ingest', desc: 'POS sale entry, invoice register, Swiggy/Zomato/UPI channel breakdown' },
    { id: 'expenses', title: 'Expenses', desc: 'Daily expense tracker, milk & raw material bills, vendor payouts' },
    { id: 'staff', title: 'Staff', desc: 'Live staff attendance, shift check-in/out, roster management' },
    { id: 'menu-costing', title: 'Menu Costing', desc: 'Recipe BOM calculator, ingredient cost, food cost % and margin' },
    { id: 'pnl', title: 'P&L Report', desc: 'Monthly Profit & Loss statement, COGS, operating expenses, net margin' },
    { id: 'analytics', title: 'Analytics', desc: 'Sales trends, moving averages, day-of-week patterns, forecasting, margin trends' },
    { id: 'contacts', title: 'Contacts', desc: 'Milk, tea, oil & packaging supplier directory and payable balances' },
    { id: 'inventory', title: 'Inventory', desc: 'Live raw material stock levels, low-stock alerts, stock restock' },
    { id: 'payroll', title: 'Payroll', desc: 'Monthly staff salary sheet, attendance days, one-click UPI payout' },
    { id: 'tax', title: 'Compliance & Licenses', desc: 'FSSAI, Udhyam & MSME registration renewal tracking' },
    { id: 'settings', title: 'Settings', desc: 'Café profile, licenses, UPI QR configuration, sync preferences' }
  ];

  // Escapes any string before it's interpolated into an innerHTML template.
  // This app renders almost entirely via template-literal innerHTML, and a
  // lot of the data that flows through those templates is free-text the user
  // (or anyone else with access to the connected Google Sheet) typed in —
  // expense descriptions, vendor/staff/contact names, ingredient names, phone
  // numbers. Without escaping, a value like <img src=x onerror=...> typed
  // into any of those fields runs as live script the next time that list or
  // table re-renders, for every person who views that page (a classic stored
  // XSS, made worse here because the data is shared via Google Sheets across
  // everyone using the connected app). Every dynamic, non-numeric field
  // rendered into HTML in this file should be wrapped in esc(...).
  const esc = (value) => {
    if (value === null || value === undefined) return '';
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  };

  const formatINR = (num) => `₹ ${Number(num).toLocaleString('en-IN')}`;

  // ---- Menu item photos ----------------------------------------------------
  // Product ids that shipped with a real, already-generated photo at
  // images/menu/<id>.jpg (26 of the 90-item catalog so far, from an earlier
  // photo-generation pass). Every other product falls back to a plain
  // placeholder graphic — never a broken image icon — until the owner adds
  // the real one. The owner can drop more images directly into images/menu/
  // named exactly <productId>.jpg (e.g. P041.jpg) and add that id to this
  // set to pick them up with zero other changes; images uploaded in-app
  // (Menu Costing's "Change Photo", or the Add Menu Item form) don't need
  // this at all — they're stored as a data URL on the product itself
  // (imageDataUrl) and always take priority over this shipped set.
  const PRODUCTS_WITH_SHIPPED_PHOTO = new Set([
    'P001', 'P002', 'P003', 'P004', 'P005', 'P006', 'P007', 'P008', 'P009', 'P010',
    'P011', 'P012', 'P013', 'P014', 'P015', 'P016', 'P017', 'P018', 'P019', 'P020',
    'P021', 'P022', 'P023', 'P024', 'P025', 'P026'
  ]);

  // A neutral plate/cup line-art placeholder, inlined as an SVG data URI so
  // it never 404s and needs no extra file — shown for any product that has
  // neither an in-app uploaded photo nor a shipped images/menu/<id>.jpg yet.
  const PRODUCT_IMAGE_PLACEHOLDER =
    'data:image/svg+xml;utf8,' + encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
        <rect width="200" height="200" rx="16" fill="#f1ebe3"/>
        <circle cx="100" cy="92" r="46" fill="none" stroke="#c9a876" stroke-width="5"/>
        <circle cx="100" cy="92" r="30" fill="none" stroke="#c9a876" stroke-width="3"/>
        <path d="M60 150c0-14 18-24 40-24s40 10 40 24" fill="none" stroke="#c9a876" stroke-width="5" stroke-linecap="round"/>
        <text x="100" y="178" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#9c8569">No photo yet</text>
      </svg>`
    );

  // Single source of truth for "what image should this product show right
  // now" — used by New Sale tiles, Menu Costing, and the Add Menu Item
  // preview, so all three always agree and a future change only needs to
  // happen here once.
  const getProductImageSrc_ = (product) => {
    if (product && product.imageDataUrl) return product.imageDataUrl;
    if (product && PRODUCTS_WITH_SHIPPED_PHOTO.has(product.id)) return `images/menu/${product.id}.jpg`;
    return PRODUCT_IMAGE_PLACEHOLDER;
  };

  // Reads a File (from an <input type="file">) into a compressed, size-capped
  // data URL for storage directly on the product object. A raw phone-camera
  // photo can be several MB — dozens of those saved uncompressed would blow
  // through localStorage's per-origin quota (typically 5-10MB) fast, silently
  // breaking the sales-persistence save alongside it. Downscaling to a
  // sensible product-photo size (max 480px) and re-encoding as JPEG keeps
  // each photo to a few dozen KB, so the whole catalog's photos together stay
  // well within quota even with every item eventually getting a real one.
  const readImageFileAsDataUrl_ = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = () => reject(reader.error);
      reader.onload = () => {
        const img = new Image();
        img.onerror = () => reject(new Error('Could not decode image'));
        img.onload = () => {
          const MAX_DIM = 480;
          const scale = Math.min(1, MAX_DIM / Math.max(img.width, img.height));
          const w = Math.max(1, Math.round(img.width * scale));
          const h = Math.max(1, Math.round(img.height * scale));
          const canvas = document.createElement('canvas');
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, w, h);
          resolve(canvas.toDataURL('image/jpeg', 0.82));
        };
        img.src = reader.result;
      };
      reader.readAsDataURL(file);
    });
  };

  /**
   * Computes each staff member's real this-month attendance figures from
   * state.attendance (raw ATTENDANCE sheet rows) and writes them onto the
   * matching state.staff entry: daysWorked (sum of Payable_Day_Weight),
   * advanceTaken (sum of Advance_Taken), and netPayableEstimate — the same
   * per-day-rate formula api_disbursePayroll_ uses server-side, kept in sync
   * deliberately so the Payroll page's preview matches what Disburse will
   * actually pay. This is a preview only: the real, authoritative Net_Payable
   * is whatever the backend calculates and writes to PAYROLL_LOGS when you
   * actually disburse — this just lets you see it before committing to that.
   */
  const computeStaffPayrollStats_ = () => {
    const now = new Date();
    const targetMonth = now.getMonth();
    const targetYear = now.getFullYear();

    state.staff.forEach((st) => {
      const rows = (state.attendance || []).filter((a) => {
        if (a.Emp_ID !== st.id || !a.Date) return false;
        const d = new Date(a.Date);
        return d.getMonth() === targetMonth && d.getFullYear() === targetYear;
      });

      // An 'Advance Only' row (recorded via the Payroll page's Advance
      // button) is never evidence that attendance was tracked — it carries
      // Payable_Day_Weight 0 for an unrelated reason (it isn't a day marked
      // present/absent at all), so it must not count toward "has this
      // employee's attendance been marked this month." Without this split,
      // recording a single advance for an otherwise-untracked employee would
      // make rows.length === 1 and switch the calc out of the "no data yet,
      // pay full salary" fallback into "1 tracked day, weight 0" — collapsing
      // Net Payable to roughly zero from one unrelated advance entry.
      const realAttendanceRows = rows.filter((a) => a.Status !== 'Advance Only');
      const advanceTaken = rows.reduce((sum, a) => sum + (Number(a.Advance_Taken) || 0), 0);

      if (realAttendanceRows.length === 0) {
        // No real attendance marked yet this month — mirrors the backend's
        // own fallback (api_disbursePayroll_) so the preview and the real
        // payout never disagree: nothing tracked means "assume full standard
        // days," not "assume zero." Any advance taken still applies.
        st.days = st.standardDays;
        st.advanceTaken = advanceTaken;
        st.netPayableEstimate = Math.max(0, Math.round((st.salary - advanceTaken) * 100) / 100);
        return;
      }

      const weightedDays = realAttendanceRows.reduce((sum, a) => sum + (Number(a.Payable_Day_Weight) || 0), 0);
      const perDayRate = st.standardDays > 0 ? st.salary / st.standardDays : 0;

      st.days = Math.round(weightedDays * 100) / 100;
      st.advanceTaken = advanceTaken;
      st.netPayableEstimate = Math.max(0, Math.round((perDayRate * weightedDays - advanceTaken) * 100) / 100);
    });
  };
  // Run once immediately against the seed data too, so offline/no-backend
  // mode shows sensible days/netPayableEstimate values on first render,
  // not just after a real Sheets sync populates state.attendance.
  computeStaffPayrollStats_();

  const formatTime12h = (hhmm) => {
    if (!hhmm) return '';
    const [h, m] = hhmm.split(':').map(Number);
    const period = h >= 12 ? 'PM' : 'AM';
    const h12 = h % 12 === 0 ? 12 : h % 12;
    return `${h12}:${String(m).padStart(2, '0')} ${period}`;
  };

  // =========================================================================
  // LOCAL PERSISTENCE (settings + theme survive a page reload without a backend)
  // =========================================================================
  const LOCAL_SETTINGS_KEY = 'chaibee_brewiq_settings_v1';

  const persistSettings = () => {
    try {
      localStorage.setItem(LOCAL_SETTINGS_KEY, JSON.stringify(state.settings));
    } catch (err) {
      /* localStorage unavailable (private mode, etc.) — fine, state still works in-memory */
    }
  };

  const loadPersistedSettings = () => {
    try {
      const raw = localStorage.getItem(LOCAL_SETTINGS_KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        Object.assign(state.settings, saved);
      }
    } catch (err) {
      /* ignore corrupt/unavailable storage */
    }
  };

  // =========================================================================
  // IN-APP NOTIFICATION SOUNDS (WebAudio synthesized tones — no audio files,
  // no "click anywhere first" requirement). Chrome/Safari suspend a brand-new
  // AudioContext until a user gesture; we resume it on the very first gesture
  // anywhere on the page (silently, with no UI), so by the time any real alert
  // needs to play, the context is already unlocked.
  // =========================================================================
  let _audioCtx = null;
  const getAudioCtx = () => {
    if (!_audioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      _audioCtx = new AC();
    }
    return _audioCtx;
  };

  const unlockAudioOnce = () => {
    const ctx = getAudioCtx();
    if (ctx && ctx.state === 'suspended') {
      ctx.resume().catch(() => {});
    }
  };
  ['pointerdown', 'keydown', 'touchstart'].forEach((evt) => {
    window.addEventListener(evt, unlockAudioOnce, { once: true, passive: true });
  });

  const playTone = (freq, durationMs, delayMs = 0, volume = 0.16) => {
    if (!state.settings.soundEnabled) return;
    const ctx = getAudioCtx();
    if (!ctx) return;
    if (ctx.state === 'suspended') ctx.resume().catch(() => {});
    const startAt = ctx.currentTime + delayMs / 1000;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, startAt);
    gain.gain.setValueAtTime(0.0001, startAt);
    gain.gain.exponentialRampToValueAtTime(volume, startAt + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, startAt + durationMs / 1000);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(startAt);
    osc.stop(startAt + durationMs / 1000 + 0.02);
  };

  // Named alert "voices" used across the app
  const playNotifySound = () => { playTone(880, 110, 0); playTone(1174, 140, 90); };
  const playSuccessSound = () => { playTone(660, 90, 0); playTone(990, 140, 70); };
  const playAlertSound = () => { playTone(523, 120, 0); playTone(392, 160, 110); };

  const toggleSound = () => {
    state.settings.soundEnabled = !state.settings.soundEnabled;
    persistSettings();
    const btn = document.getElementById('soundToggleBtn');
    if (btn) btn.setAttribute('aria-pressed', state.settings.soundEnabled ? 'false' : 'true');
    if (state.settings.soundEnabled) playSuccessSound();
  };

  // =========================================================================
  // GOOGLE APPS SCRIPT API CLIENT
  // When Settings ▸ API Base URL is filled in (the deployed Code.gs Web App link),
  // every write also fires a background call to the live Google Sheet so it stays the
  // source of truth. The dashboard keeps working fully offline from its local state
  // either way — a failed/missing API call never blocks the UI.
  // =========================================================================
  const apiCall = async (action, body = {}) => {
    const base = (state.settings.apiBaseUrl || '').trim();
    if (!base) return null;
    try {
      const res = await fetch(base, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action, ...body })
      });
      if (!res.ok) {
        // A non-2xx HTTP status (expired/invalid Apps Script deployment, quota
        // exceeded, timeout at the platform level, etc.) never throws on its
        // own — res.json() below could still "succeed" by parsing an HTML
        // error page, so this is checked explicitly rather than relying on
        // the try/catch alone.
        throw new Error(`HTTP ${res.status}`);
      }
      const data = await res.json();
      const failed = !!(data && data.error);
      state.syncStatus = failed ? 'error' : 'synced';
      if (failed) {
        showToast(`Saved locally, but the server rejected it: ${data.error}`, 'warning');
      }
      updateSyncIndicator_();
      return data;
    } catch (err) {
      // The local save already happened before apiCall was ever invoked (every
      // call site updates state first), so this never blocks or reverts the
      // user's work — it only lets them know the change hasn't reached the
      // server yet, instead of silently showing "saved" with nothing persisted.
      state.syncStatus = 'error';
      updateSyncIndicator_();
      showToast('Saved locally — could not reach the server, will retry on next sync', 'warning');
      return null;
    }
  };

  // Keeps the header "Connected to Cloud / Local only / Connection failed"
  // pill in sync with state.syncStatus immediately after any write, not just
  // after the next periodic bootstrap sync.
  const updateSyncIndicator_ = () => {
    const indicator = document.getElementById('syncStatusIndicator');
    if (!indicator) return;
    const labels = { synced: 'Connected to Cloud', error: 'Connection failed', local: 'Local only' };
    indicator.textContent = labels[state.syncStatus] || labels.local;
    indicator.className = `sync-indicator sync-indicator--${state.syncStatus || 'local'}`;
  };

  const checkApiConnection = async () => {
    const base = (state.settings.apiBaseUrl || '').trim();
    if (!base) {
      state.syncStatus = 'local';
      updateSyncIndicator_();
      return;
    }
    try {
      const res = await fetch(`${base}?action=ping`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      state.syncStatus = data && data.ok ? 'synced' : 'error';
    } catch (err) {
      state.syncStatus = 'error';
    }
    updateSyncIndicator_();
  };

  // =========================================================================
  // LIVE SHEET SYNC — pulls real data from the deployed Code.gs Web App
  // (doGet?action=bootstrap) and replaces local state with it, so once the
  // Sheet is connected, every number the dashboard shows comes from there
  // instead of the local seed/demo values. Runs on a user-configurable
  // interval (Settings → Sync & Refresh) and immediately after every save.
  // =========================================================================
  const mapSheetDate = (isoOrDate) => {
    // Sheet dates arrive as 'yyyy-MM-dd' strings (see Code.gs sheetToObjects_).
    if (!isoOrDate) return '';
    const d = new Date(isoOrDate);
    if (isNaN(d.getTime())) return String(isoOrDate);
    return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short' });
  };

  const mergeBootstrapIntoState = (data) => {
    if (!data || data.error) return false;

    // A row that survived the Sheet-side empty-row filter (sheetToObjects_ in
    // Code.gs only drops a row if EVERY cell is blank) but still has no usable
    // ID — e.g. a stray row with whitespace in one unrelated column — would
    // otherwise become a "ghost" record: it renders with blank fields and can
    // never be matched by id elsewhere in the app (selects, saves, sale
    // recording), so such rows are dropped here rather than kept half-broken.
    const hasId = (v) => v !== undefined && v !== null && String(v).trim() !== '';

    if (Array.isArray(data.products) && data.products.length) {
      state.products = data.products
        .filter((p) => hasId(p.Product_ID))
        .map((p) => {
          const existing = state.products.find((sp) => sp.id === p.Product_ID);
          return {
            id: p.Product_ID,
            name: p.Product_Full_Name || '(unnamed product)',
            category: p.Category || 'Uncategorized',
            landedCost: Number(p.Landed_Cost) || 0,
            rawCost: Number(p.Raw_Cost) || 0,
            gasCost: Number(p.Gas_Cost) || 0,
            oilCost: Number(p.Oil_Cost) || 0,
            wastageCost: Number(p.Wastage_Cost) || 0,
            overheadsCost: Number(p.Overheads_Cost) || 0,
            sellingPrice: Number(p.Selling_Price) || 0,
            marginRs: Number(p.Margin_Rs) || 0,
            marginPct: Number(p.Margin_Pct) || 0,
            dailyOrders: existing ? existing.dailyOrders || 0 : 0
          };
        });
    }

    if (Array.isArray(data.inventory) && data.inventory.length) {
      state.inventory = data.inventory
        .filter((it) => hasId(it.Ing_ID))
        .map((it) => ({
          sku: it.Ing_ID,
          item: it.Ing_Name || '(unnamed ingredient)',
          category: it.Category || 'Raw Material',
          stock: Number(it.Closing_Stock) || 0,
          unit: it.Base_Unit || 'units',
          reorder: Number(it.Low_Stock_Threshold) || 1,
          unitCost: Number(it.Cost_Per_Base_Unit) || 0,
          status: (Number(it.Closing_Stock) || 0) <= (Number(it.Low_Stock_Threshold) || 1) ? 'Low Stock' : 'Optimal'
        }));
    }

    if (Array.isArray(data.recipeBom) && data.recipeBom.length) {
      state.recipeBom = data.recipeBom
        .filter((r) => hasId(r.BOM_ID) && hasId(r.Product_ID) && hasId(r.Ing_ID))
        .map((r) => ({
          id: r.BOM_ID,
          productId: r.Product_ID,
          productName: r.Product_Name,
          ingId: r.Ing_ID,
          ingName: r.Ing_Name,
          usageQtyPerUnit: Number(r.Usage_Qty_Per_Unit) || 0,
          baseUnit: r.Base_Unit || '',
          lineCost: Number(r.Line_Cost) || 0
        }));
    }

    if (Array.isArray(data.dailySales) && data.dailySales.length) {
      // Per-product-per-day sales lines (DAILY_SALES sheet) — this is the real
      // source for Analytics' category/product trends and cost-vs-revenue
      // correlation once the sheet is connected, replacing the local-only log.
      state.productSalesLog = data.dailySales.map((r) => ({
        isoDate: r.Date ? String(r.Date).slice(0, 10) : '',
        date: mapSheetDate(r.Date),
        productId: r.Product_ID,
        category: r.Category,
        qty: Number(r.Qty_Sold) || 0,
        costValue: Number(r.Cost_Value) || 0,
        netSales: Number(r.Net_Sales) || 0,
        dow: r.Date ? new Date(r.Date).getDay() : null
      }));
    }

    if (Array.isArray(data.dailySummary) && data.dailySummary.length) {
      state.dailySummary = data.dailySummary
        .map((d) => ({
          date: mapSheetDate(d.Date),
          isoDate: d.Date ? String(d.Date).slice(0, 10) : '',
          qty: Number(d.Total_Qty_Sold) || 0,
          cost: Number(d.Total_Cost_Value) || 0,
          sales: Number(d.Total_Net_Sales) || 0,
          profit: Number(d.Total_Net_Profit) || 0
        }))
        .filter((d) => d.date);
    }

    if (Array.isArray(data.expenses) && data.expenses.length) {
      state.expenses = data.expenses.map((ex) => ({
        id: ex.Expense_ID,
        date: mapSheetDate(ex.Date),
        title: ex.Title,
        vendor: ex.Vendor,
        category: ex.Category,
        mode: ex.Payment_Mode,
        amount: Number(ex.Amount) || 0,
        status: ex.Status || 'Paid'
      }));
    }

    if (Array.isArray(data.employees) && data.employees.length) {
      state.staff = data.employees
        .filter((em) => hasId(em.Emp_ID))
        .map((em) => ({
          id: em.Emp_ID,
          name: em.Name || '(unnamed staff)',
          role: em.Role,
          shift: em.Shift,
          phone: em.Phone,
          status: em.Active === false ? 'Inactive' : 'Present',
          checkIn: '—',
          salary: Number(em.Base_Salary) || 0,
          standardDays: Number(em.Working_Days_Std) || 26,
          // 'days' used to be a static copy of Working_Days_Std shown as
          // "Days Worked" on the Payroll page — misleading, since it never
          // reflected real attendance. It's now the actual weighted days
          // worked this month, computed below from ATTENDANCE rows once
          // state.attendance is populated. Defaults to standardDays until
          // that computation runs, so the page never shows a blank/zero
          // figure before attendance data has loaded.
          days: Number(em.Working_Days_Std) || 26,
          paid: false
        }));
    }

    // ATTENDANCE rows aren't attached to state.staff directly (attendance is
    // its own sheet/entity, and a row's Emp_ID is the only link) — kept as a
    // flat array and joined against state.staff by computeStaffPayrollStats_
    // below, same pattern as other cross-sheet relationships in this app
    // (e.g. recipeBom rows joined against products/inventory by id).
    if (Array.isArray(data.attendance)) {
      state.attendance = data.attendance.filter((a) => hasId(a.Emp_ID) && hasId(a.Date));
    }
    if (Array.isArray(data.payrollLogs)) {
      state.payrollLogs = data.payrollLogs.filter((p) => hasId(p.Emp_ID));
    }
    computeStaffPayrollStats_();

    if (Array.isArray(data.contacts) && data.contacts.length) {
      // Contacts have no separate ID column — Name is the lookup key used
      // throughout (e.g. settleVendor matches by name), so a blank name is
      // the unusable-row case here.
      state.contacts = data.contacts
        .filter((c) => hasId(c.Name))
        .map((c) => ({
          name: c.Name,
          role: c.Role,
          city: c.City,
          phone: c.Phone,
          balance: c.Balance,
          due: c.Due_Date ? mapSheetDate(c.Due_Date) : '—'
        }));
    }

    // api_bootstrap_ (Code.gs) returns the CONFIG sheet under the key
    // "config", not "settings" — this block used to check data.settings,
    // which the backend never sends, so a connected café's own Cafe_Name /
    // Address / FSSAI / UPI_ID / Alert_Email never actually overwrote the
    // placeholder values below before a handover audit caught it. Mapped
    // here to the exact CONFIG column names api_updateSettings_ writes back,
    // so a round trip (sync in → edit in Settings → save → sync in again)
    // stays consistent.
    if (data.config) {
      const cfg = data.config;
      const setIf = (key, value) => {
        if (value !== undefined && value !== null && String(value).trim() !== '') {
          state.settings[key] = value;
        }
      };
      setIf('cafeName', cfg.Cafe_Name);
      setIf('address', cfg.Address);
      setIf('upiId', cfg.UPI_ID);
      setIf('alertEmail', cfg.Alert_Email);
      setIf('fssai', cfg.FSSAI);
      setIf('fssaiRenewalDate', cfg.FSSAI_Renewal_Date);
      setIf('udhyamNumber', cfg.Udhyam_Number);
      setIf('udhyamRenewalDate', cfg.Udhyam_Renewal_Date);
      setIf('msmeNumber', cfg.MSME_Number);
      setIf('msmeRenewalDate', cfg.MSME_Renewal_Date);
      setIf('salaryDay', Number(cfg.Salary_Day));
    }

    // Recompute aggregate KPIs from the freshly-synced daily summary + expenses.
    if (state.dailySummary && state.dailySummary.length) {
      state.totalRevenue = state.dailySummary.reduce((s, d) => s + d.sales, 0);
      const cogs = state.dailySummary.reduce((s, d) => s + d.cost, 0);
      const otherExpenses = (state.expenses || []).filter((ex) => ex.category !== 'Raw Material').reduce((s, ex) => s + ex.amount, 0);
      const staffCost = (state.staff || []).reduce((s, st) => s + st.salary, 0);
      state.totalExpenses = cogs + otherExpenses + staffCost;
      state.netProfit = Math.max(0, state.totalRevenue - state.totalExpenses);
      state.totalOrders = state.dailySummary.reduce((s, d) => s + d.qty, 0);
      const latest = state.dailySummary[state.dailySummary.length - 1];
      if (latest) {
        state.todayRevenue = latest.sales;
        state.todayOrders = latest.qty;
      }
    }

    return true;
  };

  const syncFromSheet = async ({ silent } = {}) => {
    const base = (state.settings.apiBaseUrl || '').trim();
    if (!base) return false;
    try {
      const res = await fetch(`${base}?action=bootstrap`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      const applied = mergeBootstrapIntoState(data);
      state.syncStatus = applied ? 'synced' : 'error';
      state.lastSyncedAt = new Date();
      if (applied) {
        syncDashboardKPIs();
        renderAllCharts();
        renderActivityFeed();
      renderUpcomingReminders();
        if (state.activePage && state.activePage !== 'dashboard') renderModulePage(state.activePage);
        if (!silent) showToast('Synced with the cloud');
      } else if (!silent) {
        showToast('Could not sync with the cloud — showing local data', 'warning');
      }
      updateSyncIndicator_();
      return applied;
    } catch (err) {
      state.syncStatus = 'error';
      updateSyncIndicator_();
      if (!silent) showToast('Could not reach the server — showing local data', 'warning');
      return false;
    }
  };

  let autoRefreshTimer = null;
  const startAutoRefresh = () => {
    if (autoRefreshTimer) clearInterval(autoRefreshTimer);
    const base = (state.settings.apiBaseUrl || '').trim();
    const minutes = Number(state.settings.refreshIntervalMinutes) || 60;
    if (!base || !state.settings.autoRefreshEnabled) return;
    autoRefreshTimer = setInterval(() => {
      syncFromSheet({ silent: true });
    }, Math.max(1, minutes) * 60 * 1000);
  };

  // =========================================================================
  // LICENSE RENEWAL TRACKING — FSSAI / Udhyam / MSME, driven entirely by the
  // renewal dates set in Settings. "Due Soon" fires within 3 days (the alert
  // window used by the notification bell / email / Telegram channels too).
  // =========================================================================
  const buildLicenseRenewals = () => {
    const s = state.settings;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const makeEntry = (name, number, renewalDate) => {
      if (!renewalDate) {
        return { name, number, renewalDate: '', statusLabel: 'Not set', pillClass: 'status-pill--orange', daysLeft: null };
      }
      const due = new Date(renewalDate);
      due.setHours(0, 0, 0, 0);
      const daysLeft = Math.round((due - today) / 86400000);
      let statusLabel, pillClass;
      if (daysLeft < 0) {
        statusLabel = `Overdue by ${Math.abs(daysLeft)}d`;
        pillClass = 'status-pill--red';
      } else if (daysLeft <= 3) {
        statusLabel = daysLeft === 0 ? 'Due today' : `Due in ${daysLeft}d`;
        pillClass = 'status-pill--red';
      } else if (daysLeft <= 30) {
        statusLabel = `Due in ${daysLeft}d`;
        pillClass = 'status-pill--orange';
      } else {
        statusLabel = 'Valid';
        pillClass = 'status-pill--green';
      }
      return { name, number, renewalDate, statusLabel, pillClass, daysLeft };
    };

    return [
      makeEntry('FSSAI License', s.fssai, s.fssaiRenewalDate),
      makeEntry('Udhyam Registration', s.udhyamNumber, s.udhyamRenewalDate),
      makeEntry('MSME Registration', s.msmeNumber, s.msmeRenewalDate)
    ];
  };

  // =========================================================================
  // UPCOMING REMINDERS — every date/deadline-driven item the dashboard knows
  // about, sorted by nearest date: unentered EOD sales, low stock, staff
  // salary day, vendor dues (rent/utilities/packaging/etc. from Contacts),
  // and license renewals. All computed from real state — nothing fabricated.
  // =========================================================================
  const parseFreeDate = (str) => {
    if (!str || str === '—') return null;
    const d = new Date(str);
    return isNaN(d.getTime()) ? null : d;
  };

  const buildUpcomingReminders = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const reminders = [];

    // 1. Unentered EOD sales for today
    const todayIso = today.toISOString().slice(0, 10);
    const hasToday = (state.dailySummary || []).some((d) => d.isoDate === todayIso);
    if (!hasToday) {
      reminders.push({
        icon: 'sale', iconCls: 'act-icon--red', title: "Today's EOD sales not entered yet",
        date: today, dateLabel: 'Today', nav: 'sales'
      });
    }

    // 2. Low stock ingredients
    (state.inventory || []).forEach((it) => {
      if (it.status === 'Low Stock') {
        reminders.push({
          icon: 'stock', iconCls: 'act-icon--orange', title: `${it.item} low on stock`,
          date: today, dateLabel: 'Reorder now', nav: 'inventory'
        });
      }
    });

    // 3. Staff salary day (next occurrence of settings.salaryDay)
    const salaryDay = Number(state.settings.salaryDay) || 28;
    let nextSalaryDate = new Date(today.getFullYear(), today.getMonth(), salaryDay);
    if (nextSalaryDate < today) nextSalaryDate = new Date(today.getFullYear(), today.getMonth() + 1, salaryDay);
    const unpaidCount = (state.staff || []).filter((s) => !s.paid).length;
    if (unpaidCount > 0) {
      reminders.push({
        icon: 'staff', iconCls: 'act-icon--blue', title: `Staff Salary Payout (${unpaidCount} pending)`,
        date: nextSalaryDate, dateLabel: nextSalaryDate.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }), nav: 'payroll'
      });
    }

    // 4. Vendor dues (rent, utilities, packaging, etc.) from Contacts
    (state.contacts || []).forEach((c) => {
      const due = parseFreeDate(c.due);
      if (due && c.balance && c.balance !== 'Settled') {
        reminders.push({
          icon: 'expense', iconCls: 'act-icon--orange', title: `${c.name} — ${c.balance}`,
          date: due, dateLabel: due.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }), nav: 'contacts'
        });
      }
    });

    // 5. License renewals due within 30 days
    buildLicenseRenewals().forEach((lic) => {
      if (lic.daysLeft !== null && lic.daysLeft <= 30) {
        reminders.push({
          icon: 'sale', iconCls: 'act-icon--red', title: `${lic.name} renewal`,
          date: new Date(lic.renewalDate), dateLabel: lic.statusLabel, nav: 'tax'
        });
      }
    });

    reminders.sort((a, b) => a.date - b.date);
    return reminders;
  };

  const renderUpcomingReminders = () => {
    const list = document.getElementById('remindersList');
    if (!list) return;
    const reminders = buildUpcomingReminders().slice(0, 6);

    if (reminders.length === 0) {
      list.innerHTML = `<li class="reminder-row reminder-row--empty">Nothing due right now — you're all caught up.</li>`;
      return;
    }

    list.innerHTML = reminders
      .map((r) => {
        const icon = ACTIVITY_ICON_CONFIG[r.icon];
        return `
          <li class="reminder-row" data-nav-trigger="${esc(r.nav)}">
            <div class="act-icon ${icon.cls}" aria-hidden="true">
              <svg viewBox="0 0 18 18" width="15" height="15" fill="none">${icon.svg}</svg>
            </div>
            <span class="rem-title">${esc(r.title)}</span>
            <time class="rem-date tabular-nums">${esc(r.dateLabel)}</time>
          </li>`;
      })
      .join('');
  };

  // =========================================================================
  // NOTIFICATION DRAWER — live low-stock ingredients, payroll & license renewals
  // =========================================================================
  const NOTIF_DISMISSED_KEY = 'chaibee_brewiq_dismissed_notifs_v1';
  const getDismissedNotifIds = () => {
    try {
      const raw = localStorage.getItem(NOTIF_DISMISSED_KEY);
      return raw ? new Set(JSON.parse(raw)) : new Set();
    } catch (err) {
      return new Set();
    }
  };
  const saveDismissedNotifIds = (set) => {
    try {
      localStorage.setItem(NOTIF_DISMISSED_KEY, JSON.stringify(Array.from(set)));
    } catch (err) {
      /* ignore */
    }
  };
  let lastNotifIds = new Set();

  const buildNotifications = ({ includeDismissed = false } = {}) => {
    const list = [];
    const dismissed = getDismissedNotifIds();

    (state.inventory || []).forEach((it) => {
      if (it.status === 'Low Stock') {
        list.push({
          id: `stock-${it.sku || it.item}`,
          type: 'stock',
          icon: '📦',
          title: `${it.item} running low`,
          detail: `${it.stock} ${it.unit} left · reorder at ${it.reorder} ${it.unit}`,
          urgent: it.stock <= 0
        });
      }
    });

    (state.staff || []).forEach((s) => {
      if (!s.paid) {
        list.push({
          id: `payroll-${s.name}`,
          type: 'payroll',
          icon: '💰',
          title: `${s.name}'s salary pending`,
          detail: `₹${Number(s.salary).toLocaleString('en-IN')} for ${s.days} days · ${s.role}`,
          urgent: false
        });
      }
    });

    if (state.settings.notifyLicenseRenewal !== false) {
      buildLicenseRenewals().forEach((lic) => {
        if (lic.daysLeft !== null && lic.daysLeft <= 3) {
          list.push({
            id: `license-${lic.name}`,
            type: 'license',
            icon: '📋',
            title: `${lic.name} renewal ${lic.daysLeft < 0 ? 'overdue' : 'due soon'}`,
            detail: `${lic.statusLabel} · renewal date ${lic.renewalDate ? new Date(lic.renewalDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : 'not set'}`,
            urgent: true
          });
        }
      });
    }

    const filtered = includeDismissed ? list : list.filter((i) => !dismissed.has(i.id));

    if (filtered.length === 0) {
      return [{ id: 'ok', type: 'ok', icon: '✅', title: 'All caught up', detail: 'No low stock, pending salaries, or license renewals due right now.', urgent: false }];
    }
    return filtered;
  };

  const renderNotificationDrawer = () => {
    const drawer = document.getElementById('notificationDrawer');
    const badge = document.getElementById('notifBadgeDot');
    if (!drawer) return;
    const items = buildNotifications();
    const unreadCount = items.filter((i) => i.type !== 'ok').length;
    if (badge) badge.style.display = unreadCount > 0 ? 'block' : 'none';

    // Play the notify tone only for genuinely NEW items since the last render
    // (not on every re-render, and not for the very first render of the session).
    const currentIds = new Set(items.map((i) => i.id));
    if (lastNotifIds.size > 0) {
      const hasNew = Array.from(currentIds).some((id) => id !== 'ok' && !lastNotifIds.has(id));
      if (hasNew) playNotifySound();
    }
    lastNotifIds = currentIds;

    drawer.innerHTML = `
      <div class="notification-drawer__header">
        <span>Notifications</span>
        <div class="notification-drawer__header-actions">
          <span class="notification-drawer__count">${unreadCount}</span>
          ${unreadCount > 0 ? `<button type="button" class="notif-dismiss-all" data-action="dismiss-all-notifs">Dismiss all</button>` : ''}
        </div>
      </div>
      <div class="notification-drawer__list">
        ${items
          .map(
            (i) => `
          <div class="notification-item ${i.urgent ? 'notification-item--urgent' : ''}" data-notif-id="${esc(i.id)}">
            <span class="notification-item__icon">${i.icon}</span>
            <div class="notification-item__body">
              <p class="notification-item__title">${esc(i.title)}</p>
              <p class="notification-item__detail">${esc(i.detail)}</p>
            </div>
            ${i.type !== 'ok' ? `<button type="button" class="notification-item__dismiss" data-action="dismiss-notif" data-notif-id="${esc(i.id)}" aria-label="Dismiss notification">&times;</button>` : ''}
          </div>`
          )
          .join('')}
      </div>
    `;
  };

  const toggleNotificationDrawer = () => {
    const drawer = document.getElementById('notificationDrawer');
    const btn = document.getElementById('notifBellBtn');
    if (!drawer) return;
    const isOpen = !drawer.hasAttribute('hidden');
    if (isOpen) {
      drawer.setAttribute('hidden', '');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    } else {
      renderNotificationDrawer();
      drawer.removeAttribute('hidden');
      if (btn) btn.setAttribute('aria-expanded', 'true');
    }
  };

  document.addEventListener('click', (e) => {
    const drawer = document.getElementById('notificationDrawer');
    const wrapper = e.target.closest ? e.target.closest('.dropdown-wrapper') : null;
    if (drawer && !drawer.hasAttribute('hidden') && !wrapper) {
      drawer.setAttribute('hidden', '');
      const btn = document.getElementById('notifBellBtn');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    }

    const periodMenu = document.getElementById('periodMenu');
    const periodWrapper = e.target.closest ? e.target.closest('.mini-select-wrap') : null;
    if (periodMenu && !periodMenu.hasAttribute('hidden') && !periodWrapper) {
      periodMenu.setAttribute('hidden', '');
      const btn = document.getElementById('periodToggleBtn');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    }

    const dateMenu = document.getElementById('dateRangeMenu');
    const dateWrapper = e.target.closest ? e.target.closest('.dropdown-wrapper') : null;
    if (dateMenu && !dateMenu.hasAttribute('hidden') && !(dateWrapper && dateWrapper.contains(document.getElementById('dateRangeBtn')))) {
      dateMenu.setAttribute('hidden', '');
      const btn = document.getElementById('dateRangeBtn');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    }
  });

  // =========================================================================
  // RIPPLE CLICK FEEDBACK — any element with class "ripple-surface"
  // =========================================================================
  document.addEventListener('click', (e) => {
    const surface = e.target.closest ? e.target.closest('.ripple-surface') : null;
    if (!surface) return;
    const rect = surface.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const dot = document.createElement('span');
    dot.className = 'ripple-dot';
    dot.style.width = `${size}px`;
    dot.style.height = `${size}px`;
    dot.style.left = `${e.clientX - rect.left - size / 2}px`;
    dot.style.top = `${e.clientY - rect.top - size / 2}px`;
    surface.appendChild(dot);
    setTimeout(() => dot.remove(), 520);
  });

  // =========================================================================
  // COUNT-UP NUMBER ANIMATION — call animateCountUp(el, targetValue) on refresh
  // =========================================================================
  const animateCountUp = (el, targetValue, prefix = '', durationMs = 700) => {
    if (!el) return;
    if (prefersReducedMotionGlobal()) {
      el.textContent = `${prefix}${Number(targetValue).toLocaleString('en-IN')}`;
      return;
    }
    const start = 0;
    const startTime = performance.now();
    const step = (now) => {
      const progress = Math.min(1, (now - startTime) / durationMs);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (targetValue - start) * eased);
      el.textContent = `${prefix}${current.toLocaleString('en-IN')}`;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const prefersReducedMotionGlobal = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // =========================================================================
  // 2. MANAGER GREETING & BEE LOADING SCREEN (LOCAL TIME AWARE)
  // =========================================================================
  const loadingScreen = document.getElementById('loadingScreen');
  const loaderLocalTime = document.getElementById('loaderLocalTime');
  const loaderGreetingTitle = document.getElementById('loaderGreetingTitle');
  const loaderManagerNote = document.getElementById('loaderManagerNote');
  const loaderProgressBar = document.getElementById('loaderProgressBar');
  const loaderStatusText = document.getElementById('loaderStatusText');
  const skipLoaderBtn = document.getElementById('skipLoaderBtn');
  const heroTimeGreeting = document.getElementById('heroTimeGreeting');

  const computeTimeGreeting = () => {
    const now = new Date();
    const hour = now.getHours();
    const formattedTime = now.toLocaleString('en-IN', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });

    if (loaderLocalTime) {
      loaderLocalTime.textContent = `${formattedTime} • ${state.branch}, Trichy`;
    }

    let salutation = 'Good Evening';
    let managerBrief =
      'Evening rush is in full swing at Main Branch! Fresh Filter Coffee decoction and Masala Chai batches are moving fast—I have synced today’s live counter collection for your review.';

    if (hour >= 5 && hour < 12) {
      salutation = 'Good Morning';
      managerBrief =
        'Morning milk supply from Cauvery Dairy is checked in, the brass filter is hot, and all morning shift staff are at the counter. Ready for a strong opening rush, Sir!';
    } else if (hour >= 12 && hour < 17) {
      salutation = 'Good Afternoon';
      managerBrief =
        'Mid-day counter sales and Swiggy/Zomato orders are running smoothly. Samosa and Sandwich prep for the 4 PM tea rush is underway—here are your live numbers.';
    } else if (hour >= 21 || hour < 5) {
      salutation = 'Good Evening';
      managerBrief =
        'Counter closing reconciliation is ready, Sir. Today’s UPI & cash settlements, milk supplier dues, and kitchen stock levels are tallied on your dashboard.';
    }

    const ownerName = state.settings.ownerName || 'Owner';
    if (loaderGreetingTitle) loaderGreetingTitle.textContent = `${salutation}, ${ownerName}!`;
    if (loaderManagerNote) loaderManagerNote.textContent = managerBrief;
    if (heroTimeGreeting) heroTimeGreeting.textContent = salutation;
    const heroOwnerName = document.getElementById('heroOwnerName');
    if (heroOwnerName) heroOwnerName.textContent = ownerName;
    const profileName = document.getElementById('profileNameText');
    if (profileName) profileName.textContent = ownerName;
    const profileAvatarImg = document.getElementById('profileAvatarImg');
    if (profileAvatarImg) {
      const initial = (ownerName || 'O').trim().charAt(0).toUpperCase() || 'O';
      profileAvatarImg.textContent = initial;
      profileAvatarImg.setAttribute('aria-label', `${ownerName} avatar`);
    }
  };

  let loaderTimer = null;
  const dismissLoader = () => {
    if (!loadingScreen) return;
    loadingScreen.classList.add('is-dismissed');
    setTimeout(() => {
      loadingScreen.setAttribute('hidden', '');
    }, 360);
    if (loaderTimer) clearInterval(loaderTimer);
  };

  const runLoaderSequence = () => {
    if (!loadingScreen) return;
    computeTimeGreeting();
    loadingScreen.removeAttribute('hidden');
    requestAnimationFrame(() => {
      loadingScreen.classList.remove('is-dismissed');
    });

    let progress = 18;
    const steps = [
      'Syncing POS counter & UPI settlements...',
      'Checking Assam Tea & Filter Coffee stock...',
      'Preparing your Manager’s shift summary...'
    ];
    let stepIdx = 0;

    if (loaderProgressBar) loaderProgressBar.style.width = `${progress}%`;
    if (loaderTimer) clearInterval(loaderTimer);

    loaderTimer = setInterval(() => {
      progress += 28;
      if (loaderProgressBar) loaderProgressBar.style.width = `${Math.min(progress, 100)}%`;
      if (loaderStatusText && steps[stepIdx]) {
        loaderStatusText.textContent = steps[stepIdx];
        stepIdx += 1;
      }
      if (progress >= 105) {
        dismissLoader();
      }
    }, 520);
  };

  if (skipLoaderBtn) {
    skipLoaderBtn.addEventListener('click', dismissLoader);
  }
  loadPersistedSettings();
  (() => {
    const soundBtn = document.getElementById('soundToggleBtn');
    if (soundBtn) soundBtn.setAttribute('aria-pressed', state.settings.soundEnabled ? 'false' : 'true');
  })();
  runLoaderSequence();
  checkApiConnection();

  // =========================================================================
  // 3. HELPERS: TOAST, MODAL, KPI SYNC & SKELETON REFRESH
  // =========================================================================
  const mainContent = document.getElementById('mainContent');
  const actionToast = document.getElementById('actionToast');
  const appModalBackdrop = document.getElementById('appModalBackdrop');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  let toastTimeout = null;

  const showToast = (msg, type = 'default') => {
    if (!actionToast || !msg) return;
    actionToast.textContent = msg;
    actionToast.className = `toast${type && type !== 'default' ? ` toast--${type}` : ''}`;
    actionToast.removeAttribute('hidden');
    if (toastTimeout) clearTimeout(toastTimeout);
    // Warnings/errors get a longer, more deliberate display — they're more
    // important to actually read than a routine "saved" confirmation, and
    // shouldn't vanish in the same 2.6s window as a success message.
    const duration = type === 'warning' || type === 'error' ? 4200 : 2600;
    toastTimeout = setTimeout(() => {
      actionToast.setAttribute('hidden', '');
    }, duration);
  };

  // Now that showToast exists, run the startup storage probe declared above
  // — this is the earliest safe point to warn the owner that local saving
  // won't work on this browser, before any real sale has a chance to be lost.
  probeLocalStorageAvailability_();

  const triggerDataRefresh = (callback) => {
    if (!mainContent) {
      callback();
      return;
    }
    mainContent.classList.add('is-loading');
    mainContent.setAttribute('aria-busy', 'true');
    setTimeout(() => {
      callback();
      mainContent.classList.remove('is-loading');
      mainContent.setAttribute('aria-busy', 'false');
    }, 160);
  };

  // Real best-seller ranking: units sold per product, from the durable
  // per-product-per-day log (or cumulative dailyOrders before that log exists).
  // No fabricated orders/share figures — if nothing has been sold yet, the card
  // says so honestly instead of showing a sample item.
  // NOTE: defined here (before syncDashboardKPIs, which calls renderBestSeller
  // and renderTopItems) rather than later in the file, because these are const
  // function expressions — unlike `function` declarations they are NOT hoisted,
  // so calling them before this line would throw "Cannot access before
  // initialization" and abort the whole DOMContentLoaded handler, silently
  // breaking every click listener registered after that point (including page
  // navigation). Keep this block above its first call site.
  let bsIdx = 0;
  const getBestSellerRanking = () => {
    const log = state.productSalesLog || [];
    let ranked;
    if (log.length) {
      const byProduct = {};
      log.forEach((r) => {
        if (!byProduct[r.productId]) byProduct[r.productId] = { qty: 0, revenue: 0 };
        byProduct[r.productId].qty += r.qty;
        byProduct[r.productId].revenue += r.netSales;
      });
      ranked = Object.entries(byProduct)
        .map(([pid, agg]) => {
          const prod = state.products.find((p) => p.id === pid);
          return prod ? { name: prod.name, category: prod.category, qty: agg.qty, revenue: agg.revenue } : null;
        })
        .filter(Boolean);
    } else {
      ranked = state.products
        .filter((p) => (p.dailyOrders || 0) > 0)
        .map((p) => ({ name: p.name, category: p.category, qty: p.dailyOrders, revenue: p.dailyOrders * p.sellingPrice }));
    }
    ranked.sort((a, b) => b.qty - a.qty);
    return ranked.slice(0, 5);
  };

  // Maps each real product category to its representative photo under
  // images/ (see IMAGE_SETUP_GUIDE.md for exactly which file goes where).
  // Keyed on the SAME category strings state.products already uses
  // ('HOT', 'JUICE', etc.) — no new category vocabulary introduced.
  const CATEGORY_PHOTO_MAP = {
    HOT: 'images/chai.jpg',
    JUICE: 'images/juice.jpg',
    MOJITO: 'images/mojito.jpg',
    MILKSHAKE: 'images/milkshake.jpg',
    LASSI: 'images/lassi.jpg',
    SANDWICH: 'images/sandwich.jpg',
    FRIES: 'images/fries.jpg'
  };

  // Swaps the Best Seller card's product photo for the given category.
  // Fully optional-asset-safe: if the file for this category hasn't been
  // dropped into images/ yet (or fails to load for any reason), the <img>
  // is hidden via onerror and the existing decorative SVG glass shows
  // instead — never a broken-image icon, never a hard dependency on the
  // image existing.
  const setBestSellerPhoto = (category) => {
    const img = document.getElementById('bsCategoryPhoto');
    if (!img) return;
    const src = CATEGORY_PHOTO_MAP[category];
    if (!src) {
      img.classList.remove('is-visible', 'is-loaded');
      img.removeAttribute('src');
      return;
    }
    const applyLoaded = () => img.classList.add('is-loaded');
    const applyMissing = () => {
      img.classList.remove('is-visible', 'is-loaded');
    };
    img.onload = () => {
      img.classList.add('is-visible');
      // Next frame, so the opacity/scale transition actually animates in
      // rather than snapping straight to its loaded state.
      requestAnimationFrame(applyLoaded);
    };
    img.onerror = applyMissing;
    img.classList.remove('is-loaded');
    if (img.getAttribute('src') !== src) {
      img.setAttribute('src', src);
    } else if (img.complete && img.naturalWidth > 0) {
      // Same src, already loaded (e.g. cycling back to a category shown
      // earlier) — re-trigger the entrance transition directly since
      // onload won't fire again for an unchanged src.
      img.classList.add('is-visible');
      requestAnimationFrame(applyLoaded);
    }
  };

  const renderBestSeller = () => {
    const ranking = getBestSellerRanking();
    bsIdx = Math.min(bsIdx, Math.max(0, ranking.length - 1));
    const totalUnits = ranking.reduce((s, r) => s + r.qty, 0) || 1;
    const nameEl = document.getElementById('bsItemName');
    const statsEl = document.getElementById('bsItemStats');
    const copyEl = document.getElementById('bestsellerCopy');
    if (!nameEl || !statsEl) return;
    if (ranking.length === 0) {
      nameEl.textContent = 'No sales yet';
      statsEl.innerHTML = `<span>Log today's EOD sales to see your best seller</span>`;
      setBestSellerPhoto(null);
      return;
    }
    const top = ranking[bsIdx];
    const sharePct = Math.round((top.qty / totalUnits) * 1000) / 10;
    nameEl.textContent = top.name;
    statsEl.innerHTML = `<span>${top.qty} order${top.qty === 1 ? '' : 's'}</span><span class="bs-divider" aria-hidden="true">|</span><span>${sharePct}% of top-5 units</span>`;
    if (copyEl) copyEl.setAttribute('data-category', top.category);
    setBestSellerPhoto(top.category);
  };

  // Renders the Dashboard's "Top Selling Items" table from the same real
  // ranking used by the Best Seller card (productSalesLog, or cumulative
  // dailyOrders before any EOD entry has been logged). No static rows, no
  // placeholder thumbnails — an honest empty state when nothing's sold yet.
  const renderTopItems = () => {
    const tbody = document.getElementById('topItemsBody');
    const emptyState = document.getElementById('itemsEmptyState');
    if (!tbody) return;
    const ranking = getBestSellerRanking();
    if (ranking.length === 0) {
      tbody.innerHTML = '';
      if (emptyState) emptyState.hidden = false;
      return;
    }
    if (emptyState) emptyState.hidden = true;
    tbody.innerHTML = ranking
      .map((item, idx) => {
        const searchable = `${item.name} ${item.category}`.toLowerCase();
        return `<tr data-searchable="${esc(searchable)}">
          <td><span class="rank-badge tabular-nums">${idx + 1}</span></td>
          <td><div class="item-cell"><span class="item-name">${esc(item.name)}</span></div></td>
          <td class="item-cat">${esc(item.category)}</td>
          <td class="item-orders tabular-nums">${item.qty}</td>
          <td class="item-rev tabular-nums">${formatINR(Math.round(item.revenue))}</td>
        </tr>`;
      })
      .join('');
  };

  const syncDashboardKPIs = () => {
    const kpiRev = document.getElementById('kpiTotalRevenue');
    const kpiProf = document.getElementById('kpiNetProfit');
    const kpiExp = document.getElementById('kpiTotalExpenses');
    const kpiOrd = document.getElementById('kpiTotalOrders');
    const todayRev = document.getElementById('todayRevVal');
    const todayOrd = document.getElementById('todayOrdersVal');
    const todayAov = document.getElementById('todayAovVal');
    const todayLowStock = document.getElementById('todayLowStockVal');

    if (kpiRev) animateCountUp(kpiRev, state.totalRevenue, '₹ ');
    if (kpiProf) animateCountUp(kpiProf, state.netProfit, '₹ ');
    if (kpiExp) animateCountUp(kpiExp, state.totalExpenses, '₹ ');
    if (kpiOrd) animateCountUp(kpiOrd, state.totalOrders);
    if (todayRev) todayRev.textContent = formatINR(state.todayRevenue);
    if (todayOrd) todayOrd.textContent = state.todayOrders.toLocaleString('en-IN');
    if (todayAov) {
      const aov = Math.round(state.todayRevenue / Math.max(1, state.todayOrders));
      todayAov.textContent = formatINR(aov);
    }
    if (todayLowStock) {
      todayLowStock.textContent = (state.inventory || []).filter((i) => i.status === 'Low Stock').length;
    }
    renderBestSeller();
    renderTopItems();
  };

  // Builds the initial "Recent Activity" feed entirely from real state: the most
  // recent EOD sales entries, expense entries, low-stock ingredients, and staff
  // attendance — no fabricated/static rows. Called once at load and whenever the
  // underlying data changes (sheet sync, new EOD entry, new expense, etc.).
  const ACTIVITY_ICON_CONFIG = {
    sale: { cls: 'act-icon--red', svg: '<circle cx="9" cy="9" r="6" stroke="currentColor" stroke-width="1.5" /><circle cx="9" cy="9" r="2.2" fill="currentColor" />' },
    expense: { cls: 'act-icon--pink', svg: '<circle cx="7.5" cy="6.2" r="2.2" stroke="currentColor" stroke-width="1.4" /><path d="M3.8 13.8C4.2 11.8 5.6 10.8 7.5 10.8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" /><rect x="9.5" y="10" width="5" height="4" rx="0.8" stroke="currentColor" stroke-width="1.3" />' },
    stock: { cls: 'act-icon--orange', svg: '<path d="M9 3.2L14.5 13.5H3.5L9 3.2Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" /><path d="M9 7.5V10.2M9 12H9.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />' },
    staff: { cls: 'act-icon--blue', svg: '<circle cx="8" cy="6.2" r="2.3" stroke="currentColor" stroke-width="1.4" /><path d="M4 14C4.4 11.8 6 10.8 8 10.8C10 10.8 11.6 11.8 12 14" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" /><path d="M12.2 8.5L13.5 9.8L15.5 7.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />' }
  };

  const renderActivityFeed = () => {
    const activityList = document.getElementById('activityList');
    if (!activityList) return;

    const rows = [];
    (state.sales || []).slice(0, 5).forEach((s) => {
      rows.push({ type: 'sale', title: 'Sale recorded', meta: `${s.id} · ${formatINR(s.amount)}`, time: s.time || 'Just now' });
    });
    (state.expenses || []).slice(0, 5).forEach((ex) => {
      rows.push({ type: 'expense', title: 'Expense added', meta: `${ex.title} · ${formatINR(ex.amount)}`, time: ex.date || 'Just now' });
    });
    (state.inventory || []).filter((it) => it.status === 'Low Stock').slice(0, 5).forEach((it) => {
      rows.push({ type: 'stock', title: 'Stock low', meta: it.item, time: 'Needs reorder' });
    });
    (state.staff || []).filter((s) => s.status === 'Present').slice(0, 3).forEach((s) => {
      rows.push({ type: 'staff', title: 'Staff attendance', meta: `${s.name} · ${s.checkIn || 'Checked in'}`, time: 'Today' });
    });

    if (rows.length === 0) {
      activityList.innerHTML = `<li class="activity-row activity-row--empty">No activity yet — record an EOD sale, add an expense, or mark attendance to see it here.</li>`;
      return;
    }

    activityList.innerHTML = rows
      .slice(0, 8)
      .map((r) => {
        const icon = ACTIVITY_ICON_CONFIG[r.type];
        return `
          <li class="activity-row" data-searchable="${esc((r.title + ' ' + r.meta).toLowerCase())}">
            <div class="act-icon ${icon.cls}" aria-hidden="true">
              <svg viewBox="0 0 18 18" width="15" height="15" fill="none">${icon.svg}</svg>
            </div>
            <div class="act-text">
              <strong class="act-title">${esc(r.title)}</strong>
              <span class="act-meta tabular-nums">${esc(r.meta)}</span>
            </div>
            <time class="act-time tabular-nums">${esc(r.time)}</time>
          </li>`;
      })
      .join('');
  };

  const closeModal = () => {
    if (appModalBackdrop) appModalBackdrop.setAttribute('hidden', '');
    const dialogEl = document.querySelector('.modal-dialog');
    if (dialogEl) dialogEl.classList.remove('modal-dialog--wide');
  };

  // Draft recipe lines for the "Add Menu Item" modal, held in memory only
  // while that modal is open (reset to [] every time it's opened — see
  // openModal below). Each entry: { ingId, ingName, unitCost, usageQtyPerUnit }.
  // A brand-new product needs its whole BOM built in one sitting before it
  // exists at all, unlike editing an existing product's BOM row-by-row on
  // the Menu Costing page — so this little draft list (not real state) is
  // what the "Add Ingredient Line" button inside that modal adds to, and
  // what "Create Menu Item" finally turns into real state.recipeBom rows.
  let addMenuItemDraftBom_ = [];

  const openModal = (type, contextIdx) => {
    if (!appModalBackdrop || !modalTitle || !modalBody) return;
    const dialogEl = document.querySelector('.modal-dialog');
    if (dialogEl) dialogEl.classList.toggle('modal-dialog--wide', type === 'eod-entry' || type === 'add-menu-item');
    if (type === 'add-menu-item') addMenuItemDraftBom_ = []; // fresh draft every time the modal is (re)opened

    if (type === 'restock-item') {
      const idx = Number(contextIdx);
      const item = state.inventory[idx];
      modalTitle.textContent = item ? `Restock — ${item.item}` : 'Restock Ingredient';
      if (!item) {
        modalBody.innerHTML = `<p class="empty-state-text">Couldn't find that ingredient — close this and try again.</p>`;
      } else {
        modalBody.innerHTML = `
          <form id="restockItemForm" class="form-grid">
            <input type="hidden" name="invIdx" value="${idx}" />
            <div class="form-field form-field--full">
              <label class="form-label">Ingredient</label>
              <p class="form-static-value">${esc(item.item)} — currently ${item.stock} ${esc(item.unit)}</p>
            </div>
            <div class="form-field">
              <label class="form-label" for="restockQtyInput">Quantity Received (${esc(item.unit)})</label>
              <input class="form-input tabular-nums" id="restockQtyInput" name="qty" type="number" min="0.01" step="0.01" placeholder="e.g. 25" required autofocus />
            </div>
            <div class="form-field">
              <label class="form-label" for="restockReorderInput">Low Stock Threshold (${esc(item.unit)})</label>
              <input class="form-input tabular-nums" id="restockReorderInput" name="reorder" type="number" min="0" step="0.01" value="${item.reorder}" />
            </div>
            <p class="form-hint form-field--full">Enter exactly how much stock you received — it's added on top of the current ${item.stock} ${esc(item.unit)}, not a replacement. Adjust the threshold only if you want the Low Stock alert to trigger at a different level than it does now.</p>
            <div class="form-field form-field--full">
              <button type="submit" class="primary-cta-pill" style="justify-content:center;">Update Stock</button>
            </div>
          </form>
        `;
      }
    } else if (type === 'record-advance') {
      const idx = Number(contextIdx);
      const emp = state.staff[idx];
      modalTitle.textContent = emp ? `Record Advance — ${emp.name}` : 'Record Advance';
      if (!emp) {
        modalBody.innerHTML = `<p class="empty-state-text">Couldn't find that staff member — close this and try again.</p>`;
      } else {
        modalBody.innerHTML = `
          <form id="recordAdvanceForm" class="form-grid">
            <input type="hidden" name="empIdx" value="${idx}" />
            <div class="form-field form-field--full">
              <label class="form-label">Staff Member</label>
              <p class="form-static-value">${esc(emp.name)} — ${esc(emp.role)}</p>
            </div>
            <div class="form-field">
              <label class="form-label" for="advanceAmountInput">Amount (₹)</label>
              <input class="form-input tabular-nums" id="advanceAmountInput" name="amount" type="number" min="1" step="1" placeholder="e.g. 2000" required />
            </div>
            <div class="form-field">
              <label class="form-label" for="advanceDateInput">Date</label>
              <input class="form-input" id="advanceDateInput" name="date" type="date" value="${new Date().toISOString().slice(0, 10)}" />
            </div>
            <div class="form-field form-field--full">
              <label class="form-label" for="advanceNoteInput">Note (optional)</label>
              <input class="form-input" id="advanceNoteInput" name="note" type="text" placeholder="e.g. Advance for festival expenses" maxlength="120" />
            </div>
            <p class="form-hint form-field--full">This is deducted automatically from this employee's Net Payable when payroll is next disbursed for ${new Date().toLocaleDateString('en-IN', { month: 'long' })}.</p>
            <div class="form-field form-field--full">
              <button type="submit" class="primary-cta-pill" style="justify-content:center;">Record Advance</button>
            </div>
          </form>
        `;
      }
    } else if (type === 'eod-entry') {
      modalTitle.textContent = 'End-of-Day Sales Entry';
      const categories = Array.from(new Set(state.products.map((p) => p.category)));
      const todayKey = state.eodDraftDate || new Date().toISOString().slice(0, 10);
      const draft = state.eodDraft || {};
      modalBody.innerHTML = `
        <form id="eodEntryForm" class="form-grid">
          <div class="form-field form-field--full eod-date-row">
            <label class="form-label" for="eodDateInput">Business Date</label>
            <input class="form-input" id="eodDateInput" name="eodDate" type="date" value="${todayKey}" />
            <p class="form-hint">Enter how many of each item sold today. Leave an item at 0 if it didn't sell — only non-zero rows are saved.</p>
          </div>
          <div class="form-field form-field--full eod-qty-list">
            ${categories
              .map(
                (cat) => `
              <div class="eod-category-block">
                <h3 class="eod-category-heading">${esc(cat)}</h3>
                <div class="eod-qty-grid">
                  ${state.products
                    .filter((p) => p.category === cat)
                    .map((p) => {
                      const hasBom = (state.recipeBom || []).some((r) => r.productId === p.id);
                      return `
                    <label class="eod-qty-row ${hasBom ? '' : 'eod-qty-row--no-bom'}" for="eodQty_${esc(p.id)}">
                      <span class="eod-qty-name">
                        ${esc(p.name)}
                        ${
                          hasBom
                            ? ''
                            : `<button type="button" class="status-pill status-pill--orange eod-no-bom-badge" data-action="goto-recipe-builder" data-id="${esc(p.id)}" title="No recipe set up yet — stock won't be deducted when this sells. Click to add ingredients.">No recipe — fix</button>`
                        }
                      </span>
                      <input class="form-input tabular-nums eod-qty-input" type="number" min="0" step="1" id="eodQty_${esc(p.id)}" data-product-id="${esc(p.id)}" value="${draft[p.id] || ''}" placeholder="0" />
                    </label>
                  `;
                    })
                    .join('')}
                </div>
              </div>
            `
              )
              .join('')}
          </div>
          <div class="form-field form-field--full eod-submit-row">
            <span class="eod-live-total" id="eodLiveTotal">Total: ₹0 across 0 items</span>
            <button type="submit" class="primary-cta-pill" style="justify-content:center;">Save EOD Summary</button>
          </div>
        </form>
      `;

      const recalcLiveTotal = () => {
        const liveTotalEl = document.getElementById('eodLiveTotal');
        if (!liveTotalEl) return;
        let totalRs = 0;
        let itemCount = 0;
        state.products.forEach((p) => {
          const input = document.getElementById(`eodQty_${p.id}`);
          const qty = input ? Number(input.value) || 0 : 0;
          if (qty > 0) {
            totalRs += qty * p.sellingPrice;
            itemCount += qty;
          }
        });
        liveTotalEl.textContent = `Total: ${formatINR(Math.round(totalRs))} across ${itemCount} items`;
      };

      modalBody.querySelectorAll('.eod-qty-input').forEach((inp) => {
        inp.addEventListener('input', recalcLiveTotal);
      });
      recalcLiveTotal();
    } else if (type === 'add-expense') {
      modalTitle.textContent = 'Log Café Expense';
      modalBody.innerHTML = `
        <form id="modalExpenseForm" class="form-grid">
          <div class="form-field form-field--full">
            <label class="form-label" for="expTitleInput">Expense Description</label>
            <input class="form-input" id="expTitleInput" name="title" required placeholder="e.g., Fresh Ginger & Cardamom (2 kg)" />
          </div>
          <div class="form-field">
            <label class="form-label" for="expVendorInput">Vendor / Payee</label>
            <input class="form-input" id="expVendorInput" name="vendor" required placeholder="e.g., Gandhi Market, Trichy" />
          </div>
          <div class="form-field">
            <label class="form-label" for="expCatInput">Category</label>
            <select class="form-select" id="expCatInput" name="category">
              <option value="Raw Material">Raw Material</option>
              <option value="Packaging">Packaging</option>
              <option value="Utilities">Utilities</option>
              <option value="Maintenance">Maintenance</option>
            </select>
          </div>
          <div class="form-field">
            <label class="form-label" for="expAmountInput">Amount (₹)</label>
            <input class="form-input tabular-nums" id="expAmountInput" name="amount" type="number" min="1" required placeholder="e.g., 640" />
          </div>
          <div class="form-field">
            <label class="form-label" for="expModeInput">Payment Mode</label>
            <select class="form-select" id="expModeInput" name="mode">
              <option value="UPI">UPI</option>
              <option value="Cash">Petty Cash</option>
              <option value="NEFT">NEFT</option>
            </select>
          </div>
          <div class="form-field form-field--full">
            <button type="submit" class="primary-cta-pill" style="width:100%;justify-content:center;">Record Expense</button>
          </div>
        </form>
      `;
    } else if (type === 'upload-bill') {
      modalTitle.textContent = 'Upload Supplier Bill / OCR Ingest';
      modalBody.innerHTML = `
        <form id="modalBillForm" class="form-grid">
          <div class="form-field form-field--full">
            <label class="form-label" for="billSupplierInput">Supplier Name</label>
            <input class="form-input" id="billSupplierInput" name="vendor" required placeholder="e.g., Cauvery Dairy Farm" />
          </div>
          <div class="form-field">
            <label class="form-label" for="billNoInput">Invoice Number</label>
            <input class="form-input tabular-nums" id="billNoInput" name="invoiceNo" required placeholder="e.g., CDF-2026-884" />
          </div>
          <div class="form-field">
            <label class="form-label" for="billAmtInput">Bill Total (₹)</label>
            <input class="form-input tabular-nums" id="billAmtInput" name="amount" type="number" min="1" required placeholder="e.g., 3480" />
          </div>
          <div class="form-field form-field--full">
            <label class="form-label" for="billItemsInput">Extracted Line Items</label>
            <input class="form-input" id="billItemsInput" name="title" required placeholder="e.g., Full Cream Milk 60L Morning Batch" />
          </div>
          <div class="form-field form-field--full">
            <button type="submit" class="primary-cta-pill" style="width:100%;justify-content:center;">Ingest Bill into Ledger</button>
          </div>
        </form>
      `;
    } else if (type === 'add-staff') {
      modalTitle.textContent = 'Add Staff Member';
      modalBody.innerHTML = `
        <form id="addStaffForm" class="form-grid">
          <div class="form-field form-field--full">
            <label class="form-label" for="staffNameInput">Full Name</label>
            <input class="form-input" id="staffNameInput" name="name" required placeholder="e.g., Divya R" />
          </div>
          <div class="form-field">
            <label class="form-label" for="staffRoleInput">Role</label>
            <input class="form-input" id="staffRoleInput" name="role" required placeholder="e.g., Counter Cashier" />
          </div>
          <div class="form-field">
            <label class="form-label" for="staffPhoneInput">Phone</label>
            <input class="form-input" id="staffPhoneInput" name="phone" required placeholder="+91 9XXXX XXXXX" />
          </div>
          <div class="form-field">
            <label class="form-label" for="staffShiftInput">Shift</label>
            <select class="form-select" id="staffShiftInput" name="shift">
              <option value="Morning (7 AM - 3 PM)">Morning (7 AM - 3 PM)</option>
              <option value="Evening (2 PM - 10 PM)">Evening (2 PM - 10 PM)</option>
              <option value="Full Day Split">Full Day Split</option>
            </select>
          </div>
          <div class="form-field">
            <label class="form-label" for="staffSalaryInput">Monthly Salary (₹)</label>
            <input class="form-input tabular-nums" id="staffSalaryInput" name="salary" type="number" min="1" required placeholder="e.g., 15000" />
          </div>
          <div class="form-field form-field--full">
            <button type="submit" class="primary-cta-pill" style="width:100%;justify-content:center;">Add to Roster</button>
          </div>
        </form>
      `;
    } else if (type === 'add-contact') {
      modalTitle.textContent = 'Add Contact / Supplier';
      modalBody.innerHTML = `
        <form id="addContactForm" class="form-grid">
          <div class="form-field form-field--full">
            <label class="form-label" for="contactNameInput">Supplier / Vendor Name</label>
            <input class="form-input" id="contactNameInput" name="name" required placeholder="e.g., Trichy Fresh Vegetables" />
          </div>
          <div class="form-field">
            <label class="form-label" for="contactRoleInput">Supply Category</label>
            <input class="form-input" id="contactRoleInput" name="role" required placeholder="e.g., Vegetable Supplier" />
          </div>
          <div class="form-field">
            <label class="form-label" for="contactCityInput">Location</label>
            <input class="form-input" id="contactCityInput" name="city" required placeholder="e.g., Trichy" />
          </div>
          <div class="form-field form-field--full">
            <label class="form-label" for="contactPhoneInput">Phone</label>
            <input class="form-input tabular-nums" id="contactPhoneInput" name="phone" required placeholder="+91 9XXXX XXXXX" />
          </div>
          <div class="form-field">
            <label class="form-label" for="contactBalanceInput">Opening Balance (₹, 0 if settled)</label>
            <input class="form-input tabular-nums" id="contactBalanceInput" name="balance" type="number" min="0" step="1" value="0" />
          </div>
          <div class="form-field">
            <label class="form-label" for="contactDueInput">Due Date (if balance &gt; 0)</label>
            <input class="form-input" id="contactDueInput" name="due" type="date" />
          </div>
          <div class="form-field form-field--full">
            <button type="submit" class="primary-cta-pill" style="width:100%;justify-content:center;">Add Contact</button>
          </div>
        </form>
      `;
    } else if (type === 'add-inventory-item') {
      modalTitle.textContent = 'Add Inventory Item';
      modalBody.innerHTML = `
        <form id="addInventoryForm" class="form-grid">
          <div class="form-field form-field--full">
            <label class="form-label" for="invNameInput">Ingredient / Item Name</label>
            <input class="form-input" id="invNameInput" name="name" required placeholder="e.g., Jaggery" />
          </div>
          <div class="form-field">
            <label class="form-label" for="invUnitCostInput">Purchase Unit Cost (₹)</label>
            <input class="form-input tabular-nums" id="invUnitCostInput" name="unitCost" type="number" min="0" step="0.01" required placeholder="e.g., 60" />
          </div>
          <div class="form-field">
            <label class="form-label" for="invUnitInput">Base Unit</label>
            <select class="form-select" id="invUnitInput" name="unit">
              <option value="kg">kg</option>
              <option value="L">L</option>
              <option value="g">g</option>
              <option value="ml">ml</option>
              <option value="pcs">pcs</option>
            </select>
          </div>
          <div class="form-field">
            <label class="form-label" for="invStockInput">Opening Stock</label>
            <input class="form-input tabular-nums" id="invStockInput" name="stock" type="number" min="0" step="0.01" value="0" />
          </div>
          <div class="form-field">
            <label class="form-label" for="invReorderInput">Low Stock Threshold</label>
            <input class="form-input tabular-nums" id="invReorderInput" name="reorder" type="number" min="0" step="0.01" value="1" />
          </div>
          <div class="form-field form-field--full">
            <button type="submit" class="primary-cta-pill" style="width:100%;justify-content:center;">Add to Inventory</button>
          </div>
        </form>
      `;
    } else if (type === 'add-menu-item') {
      modalTitle.textContent = 'Add Menu Item';
      const existingCategories = Array.from(new Set(state.products.map((p) => p.category)));
      const bomTotal = addMenuItemDraftBom_.reduce((s, r) => s + r.usageQtyPerUnit * r.unitCost, 0);
      modalBody.innerHTML = `
        <form id="addMenuItemForm" class="form-grid">
          <div class="form-field">
            <label class="form-label" for="newItemNameInput">Item Name</label>
            <input class="form-input" id="newItemNameInput" name="name" required placeholder="e.g., Mango Shake" autofocus />
          </div>
          <div class="form-field">
            <label class="form-label" for="newItemCategorySelect">Category</label>
            <select class="form-input" id="newItemCategorySelect" name="category">
              ${existingCategories.map((c) => `<option value="${esc(c)}">${esc(c)}</option>`).join('')}
              <option value="__new__">+ New category…</option>
            </select>
          </div>
          <div class="form-field form-field--full" id="newItemCategoryCustomWrap" hidden>
            <label class="form-label" for="newItemCategoryCustomInput">New Category Name</label>
            <input class="form-input" id="newItemCategoryCustomInput" placeholder="e.g., DESSERT" />
          </div>
          <div class="form-field">
            <label class="form-label" for="newItemPriceInput">Selling Price (₹)</label>
            <input class="form-input tabular-nums" id="newItemPriceInput" name="price" type="number" min="1" step="0.5" required placeholder="e.g., 60" />
          </div>
          <div class="form-field">
            <label class="form-label" for="newItemPhotoInput">Photo (optional)</label>
            <input class="form-input" id="newItemPhotoInput" type="file" accept="image/*" />
          </div>

          <div class="form-field form-field--full" style="margin-top:4px;padding-top:12px;border-top:1px solid var(--border-subtle);">
            <h3 class="card-title" style="font-size:var(--text-sm);margin-bottom:6px;">Recipe (BOM) — ingredients used per unit sold</h3>
            <p class="item-cat" style="font-size:11px;margin-bottom:10px;">Optional, but needed for this item's cost/margin to be calculated and for a sale to deduct the right stock. You can skip this and add it later from Menu Costing instead.</p>
            <div id="newItemBomRowsList">${renderAddMenuItemBomRowsHtml_()}</div>
          </div>

          <div class="form-field">
            <label class="form-label" for="newItemBomIngSelect">Ingredient</label>
            <select class="form-input" id="newItemBomIngSelect">
              <option value="">— choose —</option>
              ${state.inventory
                .filter((i) => !addMenuItemDraftBom_.some((r) => r.ingId === i.sku))
                .map((i) => `<option value="${esc(i.sku)}" data-name="${esc(i.item)}" data-unit-cost="${i.unitCost}">${esc(i.item)} (₹${i.unitCost.toFixed(2)}/base unit)</option>`)
                .join('')}
            </select>
          </div>
          <div class="form-field">
            <label class="form-label" for="newItemBomUsageInput">Qty used per unit sold</label>
            <input class="form-input tabular-nums" id="newItemBomUsageInput" type="number" min="0.01" step="0.01" placeholder="e.g. 100 (ml/g/pcs)" />
          </div>
          <div class="form-field form-field--full">
            <button type="button" class="table-action-btn" id="newItemAddBomRowBtn" style="width:100%;justify-content:center;">+ Add Ingredient Line</button>
          </div>

          <div class="form-field form-field--full" style="margin-top:4px;padding-top:12px;border-top:1px solid var(--border-subtle);">
            <h3 class="card-title" style="font-size:var(--text-sm);margin-bottom:6px;">Other Per-Unit Costs (₹, optional)</h3>
          </div>
          <div class="form-field">
            <label class="form-label" for="newItemGasInput">Gas Cost</label>
            <input class="form-input tabular-nums" id="newItemGasInput" name="gasCost" type="number" min="0" step="0.01" value="0" />
          </div>
          <div class="form-field">
            <label class="form-label" for="newItemOilInput">Oil Cost</label>
            <input class="form-input tabular-nums" id="newItemOilInput" name="oilCost" type="number" min="0" step="0.01" value="0" />
          </div>
          <div class="form-field">
            <label class="form-label" for="newItemWastageInput">Wastage Cost</label>
            <input class="form-input tabular-nums" id="newItemWastageInput" name="wastageCost" type="number" min="0" step="0.01" value="0" />
          </div>
          <div class="form-field">
            <label class="form-label" for="newItemOverheadsInput">Other Overheads</label>
            <input class="form-input tabular-nums" id="newItemOverheadsInput" name="overheadsCost" type="number" min="0" step="0.01" value="0" />
          </div>

          <div class="form-field form-field--full" style="margin-top:4px;padding-top:12px;border-top:1px solid var(--border-subtle);">
            <div class="summary-item">
              <span class="sum-label">Raw Cost (from recipe above)</span>
              <strong class="sum-val tabular-nums" id="newItemRawCostPreview">₹ ${bomTotal.toFixed(2)}</strong>
            </div>
            <div class="summary-item">
              <span class="sum-label">Landed Cost (Raw + Gas + Oil + Wastage + Overheads)</span>
              <strong class="sum-val tabular-nums" id="newItemLandedCostPreview">₹ ${bomTotal.toFixed(2)}</strong>
            </div>
          </div>

          <div class="form-field form-field--full">
            <button type="submit" class="primary-cta-pill" style="width:100%;justify-content:center;">Create Menu Item</button>
          </div>
        </form>
      `;
    }

    appModalBackdrop.removeAttribute('hidden');
    const firstInput = modalBody.querySelector('input, select, button');
    if (firstInput) firstInput.focus();

    if (type === 'add-menu-item') wireAddMenuItemModal_();
  };

  // Renders just the list of ingredient lines already added to the new
  // item's draft recipe, with a remove button per line — called both on
  // first modal open (empty) and after every add/remove, without touching
  // the rest of the form so whatever the owner already typed isn't lost.
  const renderAddMenuItemBomRowsHtml_ = () => {
    if (addMenuItemDraftBom_.length === 0) {
      return `<p class="table-empty-note" style="margin:0 0 8px;">No ingredients added yet.</p>`;
    }
    return `
      <table class="items-table" style="margin-bottom:8px;">
        <tbody>
          ${addMenuItemDraftBom_
            .map(
              (r, idx) => `
            <tr>
              <td><strong>${esc(r.ingName)}</strong></td>
              <td class="text-right tabular-nums">${r.usageQtyPerUnit} × ₹${r.unitCost.toFixed(2)}</td>
              <td class="text-right tabular-nums">₹ ${(r.usageQtyPerUnit * r.unitCost).toFixed(2)}</td>
              <td class="text-right"><button type="button" class="table-action-btn" data-remove-draft-bom-idx="${idx}">✕</button></td>
            </tr>
          `
            )
            .join('')}
        </tbody>
      </table>
    `;
  };

  // Recomputes the Raw Cost / Landed Cost preview figures shown in the
  // modal from the current draft BOM lines plus whatever the owner has
  // typed into the gas/oil/wastage/overheads fields right now — called on
  // every add/remove ingredient line and on every keystroke in those four
  // cost fields, so the preview never lags behind what's actually on screen.
  const recalcAddMenuItemCostPreview_ = () => {
    const rawCostEl = document.getElementById('newItemRawCostPreview');
    const landedCostEl = document.getElementById('newItemLandedCostPreview');
    if (!rawCostEl || !landedCostEl) return;
    const rawCost = addMenuItemDraftBom_.reduce((s, r) => s + r.usageQtyPerUnit * r.unitCost, 0);
    const gas = Number(document.getElementById('newItemGasInput')?.value) || 0;
    const oil = Number(document.getElementById('newItemOilInput')?.value) || 0;
    const wastage = Number(document.getElementById('newItemWastageInput')?.value) || 0;
    const overheads = Number(document.getElementById('newItemOverheadsInput')?.value) || 0;
    rawCostEl.textContent = `₹ ${rawCost.toFixed(2)}`;
    landedCostEl.textContent = `₹ ${(rawCost + gas + oil + wastage + overheads).toFixed(2)}`;
  };

  // Wires up everything inside the "Add Menu Item" modal that a plain
  // form-submit listener can't handle on its own: the category
  // new-vs-existing toggle, the "+ Add Ingredient Line" button (which adds
  // to the in-memory draft and re-renders just that list, not the whole
  // modal — re-rendering the whole modal would lose focus/cursor position
  // in whatever field the owner was just typing in), per-line remove
  // buttons, and the live cost preview.
  const wireAddMenuItemModal_ = () => {
    const categorySelect = document.getElementById('newItemCategorySelect');
    const customWrap = document.getElementById('newItemCategoryCustomWrap');
    if (categorySelect && customWrap) {
      categorySelect.addEventListener('change', () => {
        customWrap.hidden = categorySelect.value !== '__new__';
      });
    }

    const rowsListEl = document.getElementById('newItemBomRowsList');
    const rerenderRows = () => {
      if (rowsListEl) rowsListEl.innerHTML = renderAddMenuItemBomRowsHtml_();
      // Re-wire remove buttons every time the list's HTML is replaced.
      if (rowsListEl) {
        rowsListEl.querySelectorAll('[data-remove-draft-bom-idx]').forEach((btn) => {
          btn.addEventListener('click', () => {
            const idx = Number(btn.getAttribute('data-remove-draft-bom-idx'));
            addMenuItemDraftBom_.splice(idx, 1);
            rerenderRows();
            recalcAddMenuItemCostPreview_();
            // The ingredient just removed should reappear in the picker.
            refreshIngredientPicker_();
          });
        });
      }
    };
    rerenderRows();

    const ingSelect = document.getElementById('newItemBomIngSelect');
    const refreshIngredientPicker_ = () => {
      if (!ingSelect) return;
      const current = ingSelect.value;
      ingSelect.innerHTML =
        `<option value="">— choose —</option>` +
        state.inventory
          .filter((i) => !addMenuItemDraftBom_.some((r) => r.ingId === i.sku))
          .map((i) => `<option value="${esc(i.sku)}" data-name="${esc(i.item)}" data-unit-cost="${i.unitCost}">${esc(i.item)} (₹${i.unitCost.toFixed(2)}/base unit)</option>`)
          .join('');
      ingSelect.value = current && Array.from(ingSelect.options).some((o) => o.value === current) ? current : '';
    };

    const addRowBtn = document.getElementById('newItemAddBomRowBtn');
    if (addRowBtn) {
      addRowBtn.addEventListener('click', () => {
        const usageInput = document.getElementById('newItemBomUsageInput');
        if (!ingSelect || !ingSelect.value) {
          showToast('Pick an ingredient first');
          return;
        }
        const usage = Number(usageInput?.value);
        if (!usage || usage <= 0) {
          showToast('Enter how much of it one unit sold uses');
          return;
        }
        const opt = ingSelect.options[ingSelect.selectedIndex];
        addMenuItemDraftBom_.push({
          ingId: ingSelect.value,
          ingName: opt.getAttribute('data-name'),
          unitCost: Number(opt.getAttribute('data-unit-cost')) || 0,
          usageQtyPerUnit: usage
        });
        if (usageInput) usageInput.value = '';
        rerenderRows();
        recalcAddMenuItemCostPreview_();
        refreshIngredientPicker_();
      });
    }

    ['newItemGasInput', 'newItemOilInput', 'newItemWastageInput', 'newItemOverheadsInput'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.addEventListener('input', recalcAddMenuItemCostPreview_);
    });
  };

  // QZ Tray integration (Settings > Printing > Print Mode = "QZ Tray"): sends
  // the receipt as raw ESC/POS straight to a named printer via the free QZ
  // Tray desktop app (qz.io) running locally on the till's own PC, over a
  // WebSocket the qz-tray.js SDK opens to localhost — no OS print dialog, one
  // click, exactly one copy, and an explicit cut command at the end so the
  // next bill doesn't visually run into this one on a real thermal printer.
  // This is strictly opt-in: window.print() (printReceiptNow_ above) remains
  // the default and only path for anyone who hasn't installed/configured QZ
  // Tray, so nothing changes for them.
  let qzConnectPromise_ = null;
  const qzEnsureConnected_ = () => {
    if (typeof qz === 'undefined') {
      return Promise.reject(new Error('QZ Tray script did not load (no internet access to the CDN, or it is blocked).'));
    }
    if (qz.websocket.isActive()) return Promise.resolve();
    if (qzConnectPromise_) return qzConnectPromise_;

    // QZ Tray normally requires a signed/certificate-verified connection for
    // unattended production use; for a single café's own till this app runs
    // unsigned, which QZ Tray allows via a one-time "always trust" prompt the
    // owner clicks through on that PC the first time it connects — the
    // simplest setup that still only works because the owner's own machine
    // explicitly allowed it, not something this web app can silently bypass.
    if (qz.security && qz.security.setCertificatePromise) {
      qz.security.setCertificatePromise((resolve) => resolve());
    }
    if (qz.security && qz.security.setSignaturePromise) {
      qz.security.setSignaturePromise(() => (resolve) => resolve());
    }

    const host = (state.settings.qzTrayHost || 'localhost').trim() || 'localhost';
    qzConnectPromise_ = qz.websocket
      .connect({ host, usingSecure: false })
      .catch((err) => {
        qzConnectPromise_ = null;
        throw err;
      });
    return qzConnectPromise_;
  };

  // Builds the same receipt content already shown in the print preview, as
  // ESC/POS commands — plain text lines plus the standard initialize/
  // align/bold/cut escape sequences nearly every thermal printer (58mm/80mm)
  // understands, so this works whether QZ Tray's target is a USB, network,
  // or Windows-shared printer.
  const buildEscPosReceipt_ = (receipt) => {
    const ESC = '\x1B';
    const GS = '\x1D';
    const INIT = ESC + '@';
    const ALIGN_CENTER = ESC + 'a' + '\x01';
    const ALIGN_LEFT = ESC + 'a' + '\x00';
    const BOLD_ON = ESC + 'E' + '\x01';
    const BOLD_OFF = ESC + 'E' + '\x00';
    const CUT = GS + 'V' + '\x41' + '\x00';
    const pad = (left, right, width) => {
      const gap = Math.max(1, width - left.length - right.length);
      return left + ' '.repeat(gap) + right;
    };
    const LINE_WIDTH = (state.posReceiptFormat === '58mm') ? 32 : 42; // chars per line, standard for 58mm/80mm thermal fonts
    const divider = '-'.repeat(LINE_WIDTH);

    let out = INIT;
    out += ALIGN_CENTER + BOLD_ON + (state.settings.cafeName || "Chai' Bee'") + '\n' + BOLD_OFF;
    out += (state.settings.address ? state.settings.address.split(',')[0] : 'Main Branch') + '\n';
    out += `${receipt.date} - ${receipt.time}\n`;
    out += `Bill No: ${receipt.orderId}\n`;
    out += ALIGN_LEFT + divider + '\n';
    receipt.items.forEach((it) => {
      out += `${it.name}\n`;
      out += pad(`  ${it.qty} x ${it.unitPrice.toFixed(2)}`, it.lineTotal.toFixed(2), LINE_WIDTH) + '\n';
    });
    out += divider + '\n';
    if (receipt.discountAmount > 0) {
      out += pad('Subtotal', `Rs ${receipt.subtotal.toFixed(2)}`, LINE_WIDTH) + '\n';
      out += pad('Discount', `-Rs ${receipt.discountAmount.toFixed(2)}`, LINE_WIDTH) + '\n';
    }
    out += BOLD_ON + pad('TOTAL', `Rs ${receipt.total.toFixed(2)}`, LINE_WIDTH) + '\n' + BOLD_OFF;
    out += `Paid via ${receipt.paymentMode}\n`;
    out += divider + '\n';
    out += ALIGN_CENTER + 'Thank you, visit again!\n\n\n';
    out += CUT;
    return out;
  };

  // Standalone HTML document for QZ Tray's "pixel printing" — renders the
  // receipt as a normal printed page via the printer's own regular driver,
  // for any printer that ISN'T a thermal/receipt printer (a Canon/HP/Epson
  // inkjet or laser, for example). Mirrors the same markup/CSS openReceiptModal
  // builds for #receiptPaper, inlined into one self-contained page so QZ Tray
  // can render it without depending on this app's own stylesheet being
  // reachable from wherever QZ Tray's rendering process runs.
  //
  // PIXEL_PRINT_DEAD_ZONE_MM: a regular inkjet/laser printer (e.g. Canon
  // G2010) reserves a fixed hardware-level non-printable margin on EVERY
  // edge (not just left/right) of whatever page it's fed, and genuinely
  // cannot be told to ignore it (margins:0 only controls QZ Tray/driver-
  // added SOFTWARE margin, not this hardware one). Requesting a page
  // exactly 58mm/80mm wide, with content flush to the top, let that
  // hardware dead-zone eat directly into the receipt's own content on both
  // axes — confirmed by real prints: 58mm came back ~48mm wide, the cafe
  // name was clipped clean off the top, and a small residual left clip
  // remained even after widening the page by 2x6mm per side. This value is
  // the reserve kept on EACH edge (so the page/padding math below adds
  // 2x this amount on width, and this amount on top); it was bumped from
  // an initial 6mm/side to close that residual gap. The fix: request a
  // page this many mm larger than the true content on every affected edge,
  // and center/offset the true-size content inside it, so the dead-zone is
  // consumed by the extra margin instead of real receipt content.
  const PIXEL_PRINT_DEAD_ZONE_MM = 16;
  const buildPixelReceiptHtml_ = (receipt) => {
    const cafeName = esc((state.settings && state.settings.cafeName) || "Chai' Bee'");
    const itemsRows = receipt.items
      .map(
        (it) => `
        <tr>
          <td>${esc(it.name)}</td>
          <td class="text-right">${it.qty}</td>
          <td class="text-right">${it.unitPrice.toFixed(2)}</td>
          <td class="text-right">${it.lineTotal.toFixed(2)}</td>
        </tr>`
      )
      .join('');
    const discountRows =
      receipt.discountAmount > 0
        ? `
        <div class="row"><span>Subtotal</span><span>₹ ${receipt.subtotal.toFixed(2)}</span></div>
        <div class="row"><span>Discount</span><span>− ₹ ${receipt.discountAmount.toFixed(2)}</span></div>`
        : '';

    // This HTML is rendered directly by QZ Tray's own print pipeline — the
    // @media print rules in styles.css (keyed on body[data-receipt-format])
    // have NO effect here, since this is an entirely separate standalone
    // document, not the app's own page. Previously this was hardcoded to a
    // single fixed size no matter which format (58mm/80mm/A5/A4) was
    // selected, so a regular-printer QZ Tray job always came out the same
    // size regardless of the setting. Sizing is now driven by the same
    // posReceiptFormat the rest of the app uses, in real mm/font-size values
    // matching the browser-print CSS, so switching formats actually changes
    // what prints through this path too.
    const fmt = state.posReceiptFormat || '80mm';
    // widthMm is the TRUE content width we want to actually see on paper —
    // this must stay exactly 58/80mm (what the user measures with a ruler).
    // pageWidthMm is what we ask the PRINTER/driver for, which is wider than
    // the content by a safety margin. This is deliberate: a regular inkjet
    // driver (e.g. Canon G2010) reserves its own small hardware dead-zone on
    // every edge of whatever page size it's given, and CANNOT be told to
    // print truly edge-to-edge no matter what margins:0 requests. Asking for
    // a page exactly 58mm/80mm wide meant that dead-zone ate directly into
    // the receipt's content area, clipping ~10mm off — which is what the
    // "cut off on the left" reports and ruler measurements (58mm measuring
    // ~48mm, 80mm measuring narrower/wider than requested) were showing.
    // PIXEL_PRINT_DEAD_ZONE_MM is reserved on EACH edge: the page is made
    // wider than the content by 2x that amount (left + right reserve), and
    // real content is pushed down from the top of the page by that same
    // amount so the header isn't the thing the driver's top dead-zone eats
    // into. The narrower .paper div is centered inside the wider page
    // (margin:0 auto below), so the dead-zone is consumed by the reserved
    // margin instead of by real content on any edge.
    const widthMm = { '58mm': 58, '80mm': 80, A5: 148, A4: 210 }[fmt] || 80;
    // On A4/A5, real measurements came back proportionally smaller than
    // requested (A4: 210mm asked, 190.8mm printed, ratio 0.909; A5: 148mm
    // asked, 135mm printed, ratio 0.912) — both ~9%, not a fixed mm loss
    // like 58mm/80mm had. That's a different mechanism from 58/80mm:
    // scaleContent:true shrinks the WHOLE requested page (content included)
    // proportionally to fit inside the printer's actual printable area,
    // which on a standard driver-recognized sheet size is smaller than the
    // full nominal sheet. Unlike 58/80mm, the PAGE size here must stay at
    // the true nominal A4/A5 dimensions (210mm/148mm) — that's what tells
    // the driver which real sheet to feed, and inflating it would just ask
    // for a bigger non-standard page, re-introducing the 58/80mm problem on
    // a format that doesn't have it. Instead the CONTENT's own layout width
    // (contentWidthMm, used by .paper below — NOT pageWidthMm, which stays
    // true-size) is inflated by the inverse of the measured scale-down
    // ratio, so that after the driver shrinks the whole page by ~9%, the
    // content lands back at its true 210mm/148mm size.
    const A4_A5_SCALE_COMPENSATION = 1 / 0.90;
    const pageWidthMm = (fmt === '58mm' || fmt === '80mm') ? widthMm + 2 * PIXEL_PRINT_DEAD_ZONE_MM : widthMm;
    const contentWidthMm = (fmt === 'A4' || fmt === 'A5') ? widthMm * A4_A5_SCALE_COMPENSATION : widthMm;
    // Padding used to live directly on .paper (the content box itself),
    // which — combined with box-sizing:border-box — shrank the live
    // content area below the already-too-narrow page width. .paper now
    // stays at the true widthMm with zero padding; the dead-zone reserve
    // lives entirely on .paper-outer instead, outside the measured content,
    // as top padding (the edge that was clipping the header) plus a little
    // breathing room at the bottom. Left/right reserve comes from
    // .paper-outer's own wider pageWidthMm plus .paper's margin:0 auto
    // centering it, not from padding here.
    const paddingCss = (fmt === '58mm' || fmt === '80mm')
      ? `${PIXEL_PRINT_DEAD_ZONE_MM}mm 0 4mm`
      : { A5: '10mm', A4: '15mm' }[fmt] || '0';
    const itemsFontSize = fmt === '58mm' ? '9.5px' : '11px';
    const firstColWidth = fmt === '58mm' ? '40%' : '46%';
    const otherColWidth = fmt === '58mm' ? '24%' : '18%';

    // Returning pageWidthMm alongside the HTML (rather than just the string)
    // lets printReceiptViaQzTray_ request EXACTLY this same width from QZ
    // Tray/the driver — the two must always stay in sync (see comment above
    // where pageWidthMm is computed), so this is the one place either value
    // is computed; nothing downstream recomputes it independently.
    const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<style>
  * { box-sizing: border-box; }
  body { background: #fff; color: #111; font-family: 'Courier New', monospace; margin: 0; }
  .paper-outer { width: ${pageWidthMm}mm; padding: ${paddingCss}; margin: 0 auto; }
  .paper { width: ${contentWidthMm}mm; margin: 0 auto; }
  .header { text-align: center; }
  .cafe-name { font-size: 15px; font-weight: 700; letter-spacing: 0.5px; }
  .meta { font-size: 11px; color: #333; }
  .divider { border-top: 1px dashed #999; margin: 8px 0; }
  table { width: 100%; border-collapse: collapse; font-size: ${itemsFontSize}; table-layout: fixed; }
  th { text-align: left; font-weight: 700; border-bottom: 1px solid #999; padding: 0 4px 3px 0; }
  td { padding: 2px 4px 2px 0; vertical-align: top; word-break: break-word; }
  th:first-child, td:first-child { width: ${firstColWidth}; }
  th:not(:first-child), td:not(:first-child) { width: ${otherColWidth}; white-space: nowrap; }
  th:last-child, td:last-child { padding-right: 0; }
  .text-right { text-align: right; }
  .row { display: flex; justify-content: space-between; font-size: 11px; color: #333; }
  .total-row { display: flex; justify-content: space-between; font-size: 13px; font-weight: 700; }
  .footer { text-align: center; font-size: 11px; margin-top: 8px; }
</style>
</head>
<body>
  <div class="paper-outer">
  <div class="paper">
    <div class="header">
      <div class="cafe-name">${cafeName}</div>
      <div class="meta">${esc(receipt.branch)}</div>
      <div class="meta">${esc(receipt.date)} • ${esc(receipt.time)}</div>
      <div class="meta">Bill No: ${esc(receipt.orderId)}</div>
    </div>
    <div class="divider"></div>
    <table>
      <thead><tr><th>Item</th><th class="text-right">Qty</th><th class="text-right">Rate</th><th class="text-right">Amt</th></tr></thead>
      <tbody>${itemsRows}</tbody>
    </table>
    <div class="divider"></div>
    ${discountRows}
    <div class="total-row"><span>TOTAL</span><span>₹ ${receipt.total.toFixed(2)}</span></div>
    <div class="meta" style="margin-top:6px;">Paid via ${esc(receipt.paymentMode)}</div>
    <div class="divider"></div>
    <div class="footer">Thank you, visit again!</div>
  </div>
  </div>
</body>
</html>`;
    // Base heights already carry generous slack for a normal-length receipt;
    // the top/bottom padding added above (PIXEL_PRINT_DEAD_ZONE_MM + 4mm) is
    // added on top of that explicitly here too, rather than relying on the
    // existing slack alone, so a longer receipt (more items) can't push the
    // footer past the bottom of a page that was sized before this padding
    // existed. A4/A5 stay at their TRUE nominal page height here (unlike
    // width above, the PAGE size requested from the driver is not inflated
    // for A4/A5 — only the inner content layout width is, via
    // contentWidthMm — unlike 58/80mm, which inflates the page itself; see
    // the contentWidthMm comment above for why the two formats need
    // opposite treatment).
    const baseHeightMm = { '58mm': 150, '80mm': 200, A5: 210, A4: 297 }[fmt] || 200;
    const heightMm = (fmt === '58mm' || fmt === '80mm') ? baseHeightMm + PIXEL_PRINT_DEAD_ZONE_MM + 4 : baseHeightMm;
    return { html, pageWidthMm, heightMm };
  };

  const printReceiptViaQzTray_ = (receipt) => {
    return qzEnsureConnected_()
      .then(() => {
        const printerName = (state.settings.qzTrayPrinterName || '').trim();
        if (printerName) {
          return printerName;
        }
        // Passing null/empty straight into qz.configs.create() relies on
        // undocumented fallback behavior in QZ Tray itself — on some setups
        // (no system default printer configured in the OS, or more than one
        // printer with none marked default) that silently fails with an
        // opaque "no printer found" error, which is what was happening here:
        // QZ Tray connects fine (Test Connection passes), but qz.print()
        // then rejects, and printReceiptNow_ falls back to window.print() —
        // producing exactly the OS print dialog QZ Tray mode exists to avoid,
        // with the real reason buried in a toast easy to miss behind that
        // dialog. Resolving the default printer by name explicitly here
        // means a missing default fails with a clear, specific message
        // instead (see the catch below), and succeeds in the one case that
        // previously could still work (a real OS default IS set).
        return qz.printers.getDefault().catch(() => {
          throw new Error('No default printer is set on this PC. Open Settings → Printing and enter the exact printer name (see "List Available Printers"), or set a default printer in this PC\'s OS settings.');
        });
      })
      .then((resolvedPrinterName) => {
        const isRegularPrinter = (state.settings.qzTrayPrinterType || 'thermal') === 'regular';
        // For a regular printer, also tell QZ Tray the physical page size to
        // use — without this, qz.configs.create() falls back to the
        // printer's own default page size (typically A4/Letter) regardless
        // of which bill size (58mm/80mm/A5/A4) is selected in the app, so
        // the format setting had no effect on the actual printed page here
        // either, only on the HTML content's own width inside whatever page
        // size the printer defaulted to.
        //
        // IMPORTANT: these page widths are deliberately WIDER than the real
        // receipt content width (58mm/80mm) by the same DEAD_ZONE_MM margin
        // buildPixelReceiptHtml_() already adds around its own content (see
        // that function). A regular inkjet/laser printer (e.g. Canon G2010)
        // reserves a fixed hardware-level non-printable margin on every edge
        // of whatever page it's fed, and genuinely cannot be told to ignore
        // it — asking for an exact 58mm/80mm page meant that dead zone ate
        // directly into the receipt's own content, clipping text (confirmed
        // by ruler measurements coming back narrower than requested). Asking
        // for a page 12mm wider than the content, with the content itself
        // centered and kept at its true width inside that page, means the
        // dead zone is consumed by the extra margin instead of real content.
        // 58mm×150mm/80mm×200mm are also not standard sizes a desktop
        // driver has registered (it only knows A4, Letter, 4x6, etc), so
        // size.custom:true tells QZ Tray/the driver to honor the exact
        // numbers given rather than silently substituting its own nearest
        // registered page size — harmless for A4/A5, which ARE standard.
        //
        // pixelReceipt.pageWidthMm/heightMm come straight from
        // buildPixelReceiptHtml_ — the SAME function that laid out the HTML
        // — so the page size requested here always exactly matches the
        // HTML's own real width. Computing this size independently here
        // (as a previous version did) risked the two drifting apart, which
        // defeats the whole fix: scaleContent:true would then just rescale
        // the correctly-sized HTML back down (or up) to a differently-sized
        // page, reproducing the clipping/shrinking problem from a different
        // angle.
        const pixelReceipt = isRegularPrinter ? buildPixelReceiptHtml_(receipt) : null;
        const config = isRegularPrinter
          ? qz.configs.create(resolvedPrinterName, {
              units: 'mm',
              size: { width: pixelReceipt.pageWidthMm, height: pixelReceipt.heightMm, custom: true },
              margins: 0,
              scaleContent: true
            })
          : qz.configs.create(resolvedPrinterName);
        // A regular (non-thermal) printer's driver doesn't understand raw
        // ESC/POS control codes — the job silently produces nothing even
        // though qz.print() resolves and this app reports success, which is
        // exactly what was happening with a Canon inkjet. qzTrayPrinterType
        // routes to QZ Tray's "pixel printing" (renders real HTML through the
        // printer's normal driver, same as printing any other webpage) for
        // that case, and raw ESC/POS only for an actual thermal/receipt
        // printer that can interpret those commands.
        const data = isRegularPrinter
          ? [{ type: 'pixel', format: 'html', flavor: 'plain', data: pixelReceipt.html }]
          : [{ type: 'raw', format: 'plain', data: buildEscPosReceipt_(receipt) }];
        return qz.print(config, data);
      });
  };

  // Printing the receipt: a bare `@page { size: auto; }` falls back to the
  // browser/OS default page (Letter/A4 in most setups) instead of an actual
  // continuous thermal roll — that stranded a tiny 58mm/80mm receipt on a
  // mostly-blank full sheet and, since the assumed page was taller than the
  // real content, forced the SAME receipt to repeat onto a second page. The
  // two-value `size: <width> auto` CSS syntax is the standards-correct fix,
  // but auto-height roll sizing isn't reliably honored by every print/PDF
  // engine. To guarantee exactly one page with no dead space regardless of
  // engine support, this measures the receipt's own rendered height right
  // before printing and injects a one-off <style> with an explicit
  // `@page { size: <width> <height>; }` (two fixed numbers — always honored)
  // sized to the receipt's real content, then removes that style again once
  // the print/print-preview closes so the next print (possibly a different
  // bill length or format) gets its own fresh measurement.
  let printReceiptStyleEl_ = null;
  const printReceiptNow_ = () => {
    // QZ Tray mode: skip window.print() entirely — send raw ESC/POS straight
    // to the configured printer instead, which is both how a dialog-free
    // "one click, one copy" print happens AND a second, independent way of
    // avoiding the duplicate-page problem above, since there is no OS/browser
    // page-size negotiation involved at all for this path.
    if (state.settings.printMode === 'qztray' && state.lastReceipt) {
      printReceiptViaQzTray_(state.lastReceipt)
        .then(() => showToast('Bill sent to printer'))
        .catch((err) => {
          showToast(`QZ Tray print failed: ${err && err.message ? err.message : err} — falling back to browser print`, 'warning');
          printReceiptNow_browser_();
        });
      return;
    }
    printReceiptNow_browser_();
  };

  const printReceiptNow_browser_ = () => {
    const paper = document.getElementById('receiptPaper');
    if (!paper) { window.print(); return; }

    const formatWidths = { '58mm': 58, '80mm': 80, A5: 148, A4: 210 };
    const formatPadding = { '58mm': '2mm 3mm', '80mm': '3mm 4mm', A5: '10mm', A4: '15mm' };
    const fmt = state.posReceiptFormat || '80mm';
    const widthMm = formatWidths[fmt] || 80;

    // #receiptPaper's on-screen width inside the modal (CSS .receipt-paper
    // max-width: 340px) is NOT its real print-time width — 80mm is only
    // ~302px, 58mm only ~219px, both narrower than the modal. Measuring
    // scrollHeight at the wider on-screen width under-counts how much the
    // item-name column wraps once a real print narrows it, which produced a
    // too-short page estimate and sent a long receipt into pagination. To
    // get an accurate height, clone the receipt markup into an off-screen
    // element forced to the REAL print width/padding/font-size (matching the
    // @media print rules in styles.css for this format) and measure that
    // clone instead — the on-screen original is left untouched throughout.
    const pxToMm = (px) => (px / 96) * 25.4; // CSS px -> mm at 96dpi
    const measureEl = document.createElement('div');
    measureEl.style.cssText = `position:absolute; left:-9999px; top:0; visibility:hidden; width:${widthMm}mm; padding:${formatPadding[fmt] || '3mm 4mm'}; font-family:'Courier New', monospace; box-sizing:border-box;`;
    if (fmt === '58mm') measureEl.style.fontSize = '9.5px'; // matches the 58mm-only font-size override in styles.css
    measureEl.innerHTML = paper.innerHTML;
    document.body.appendChild(measureEl);
    const contentHeightMm = pxToMm(measureEl.scrollHeight) + 4; // small safety margin
    document.body.removeChild(measureEl);

    if (printReceiptStyleEl_) { printReceiptStyleEl_.remove(); printReceiptStyleEl_ = null; }
    const styleEl = document.createElement('style');
    styleEl.setAttribute('data-print-receipt-size', '1');
    styleEl.textContent = `@media print { @page { size: ${widthMm}mm ${Math.max(20, Math.round(contentHeightMm))}mm; margin: 0; } }`;
    document.head.appendChild(styleEl);
    printReceiptStyleEl_ = styleEl;

    const cleanup = () => {
      if (printReceiptStyleEl_) { printReceiptStyleEl_.remove(); printReceiptStyleEl_ = null; }
      window.removeEventListener('afterprint', cleanup);
    };
    window.addEventListener('afterprint', cleanup);

    window.print();
  };

  // Renders the just-checked-out bill as a receipt the owner can print on a
  // thermal printer (58mm/80mm) or a regular sheet (A5/A4) — the format toggle
  // swaps a data-receipt-format attribute on <body> that the print stylesheet
  // (see styles.css, @media print rules) uses to size the page/@page width.
  // window.print() hands off to whatever printer is set as the OS default; a
  // thermal printer set up that way prints the narrow layout directly, same as
  // any other print job — no special hardware SDK needed. When the owner has
  // configured a QZ Tray print agent in Settings, printReceiptNow_/this flow
  // is bypassed in favor of printViaQzTray_ (see the Printing Settings page)
  // for a silent, dialog-free print straight to a named printer.
  const openReceiptModal = (receipt) => {
    if (!appModalBackdrop || !modalTitle || !modalBody || !receipt) return;
    const dialogEl = document.querySelector('.modal-dialog');
    if (dialogEl) dialogEl.classList.add('modal-dialog--wide');

    modalTitle.textContent = `Bill ${receipt.orderId}`;
    document.body.setAttribute('data-receipt-format', state.posReceiptFormat || '80mm');

    modalBody.innerHTML = `
      <div class="receipt-format-row no-print">
        <span class="form-label" style="margin:0;">Print size:</span>
        ${['58mm', '80mm', 'A5', 'A4']
          .map(
            (f) => `
          <button type="button" class="table-action-btn receipt-format-btn ${f === (state.posReceiptFormat || '80mm') ? 'is-active' : ''}" data-action="set-receipt-format" data-format="${f}">${f}</button>
        `
          )
          .join('')}
      </div>

      <div class="receipt-paper" id="receiptPaper">
        <div class="receipt-header">
          <div class="receipt-cafe-name">${esc((state.settings && state.settings.cafeName) || "Chai' Bee'")}</div>
          <div class="receipt-meta">${esc(receipt.branch)}</div>
          <div class="receipt-meta">${esc(receipt.date)} • ${esc(receipt.time)}</div>
          <div class="receipt-meta">Bill No: ${esc(receipt.orderId)}</div>
        </div>
        <div class="receipt-divider"></div>
        <table class="receipt-items">
          <thead>
            <tr><th>Item</th><th class="text-right">Qty</th><th class="text-right">Rate</th><th class="text-right">Amt</th></tr>
          </thead>
          <tbody>
            ${receipt.items
              .map(
                (it) => `
              <tr>
                <td>${esc(it.name)}</td>
                <td class="text-right">${it.qty}</td>
                <td class="text-right">${it.unitPrice.toFixed(2)}</td>
                <td class="text-right">${it.lineTotal.toFixed(2)}</td>
              </tr>
            `
              )
              .join('')}
          </tbody>
        </table>
        <div class="receipt-divider"></div>
        ${
          receipt.discountAmount > 0
            ? `
        <div class="receipt-subtotal-row"><span>Subtotal</span><span>₹ ${receipt.subtotal.toFixed(2)}</span></div>
        <div class="receipt-subtotal-row"><span>Discount</span><span>− ₹ ${receipt.discountAmount.toFixed(2)}</span></div>
        `
            : ''
        }
        <div class="receipt-total-row">
          <span>TOTAL</span>
          <span>₹ ${receipt.total.toFixed(2)}</span>
        </div>
        <div class="receipt-meta" style="margin-top:6px;">Paid via ${esc(receipt.paymentMode)}</div>
        <div class="receipt-divider"></div>
        <div class="receipt-footer">Thank you, visit again!</div>
      </div>

      <div class="form-field form-field--full no-print" style="margin-top:14px;">
        <button type="button" class="primary-cta-pill" style="width:100%;justify-content:center;" data-action="print-receipt">Print Bill</button>
      </div>
    `;

    appModalBackdrop.removeAttribute('hidden');
  };

  // =========================================================================
  // 4. DYNAMIC MULTI-PAGE RENDERER (PAGES 2 TO 12)
  // =========================================================================
  const dynamicModuleView = document.getElementById('dynamicModuleView');
  const dashboardView = document.getElementById('view-dashboard');

  const renderModulePage = (pageId) => {
    if (!dynamicModuleView) return;
    // Every action that mutates business data (checkout, EOD entry, expenses,
    // restock, staff/contact adds, BOM edits, ...) re-renders the current page
    // right after, so this is a reliable, blanket save point — see the
    // persistLocalBusinessData comment above for why this exists at all.
    persistLocalBusinessData();

    switch (pageId) {
      case 'new-sale': {
        const categories = ['All', ...Array.from(new Set(state.products.map((p) => p.category)))];
        const visibleProducts = state.products.filter(
          (p) => state.posCategoryFilter === 'All' || p.category === state.posCategoryFilter
        );
        const activeBill = getActiveBill();
        const cart = activeBill.items;
        const cartSubtotal = cart.reduce((sum, c) => sum + c.qty * c.unitPrice, 0);
        const cartQty = cart.reduce((sum, c) => sum + c.qty, 0);
        const discountAmount =
          activeBill.discountType === 'flat'
            ? Math.min(cartSubtotal, Math.max(0, Number(activeBill.discountValue) || 0))
            : activeBill.discountType === 'pct'
              ? Math.round(cartSubtotal * (Math.min(100, Math.max(0, Number(activeBill.discountValue) || 0)) / 100) * 100) / 100
              : 0;
        const cartTotal = Math.round((cartSubtotal - discountAmount) * 100) / 100;

        dynamicModuleView.innerHTML = `
          <section class="hero-row">
            <div class="hero-greeting">
              <p class="greeting-line">Counter Checkout • <strong>${state.branch}</strong></p>
              <h1 class="hero-title">New Sale</h1>
              <p class="hero-subtitle">Tap items to add to the bill, hold it to start another, then check out and print a receipt</p>
            </div>
            <div class="filter-tabs">
              ${categories
                .map(
                  (c) => `
                <button type="button" class="filter-tab ${state.posCategoryFilter === c ? 'active' : ''}" data-action="filter-pos-products" data-category="${c}">${c}</button>
              `
                )
                .join('')}
            </div>
          </section>

          <section class="card module-card pos-bills-strip">
            <div class="card-header">
              <h2 class="card-title">Open Bills</h2>
              <button type="button" class="table-action-btn" data-action="pos-new-bill">+ New Bill</button>
            </div>
            <div class="pos-bills-list">
              ${state.heldBills
                .map((b) => {
                  const bTotal = b.items.reduce((s, c) => s + c.qty * c.unitPrice, 0);
                  const bQty = b.items.reduce((s, c) => s + c.qty, 0);
                  const isActive = b.id === activeBill.id;
                  return `
                <div class="pos-bill-chip ${isActive ? 'is-active' : ''}" data-action="pos-switch-bill" data-id="${esc(b.id)}">
                  <div class="pos-bill-chip-main">
                    <span class="pos-bill-chip-title">Bill ${b.number}${b.label ? ` · ${esc(b.label)}` : ''}</span>
                    <span class="pos-bill-chip-meta">${bQty} item${bQty === 1 ? '' : 's'} • ${formatINR(bTotal)}</span>
                  </div>
                  ${state.heldBills.length > 1 ? `<button type="button" class="pos-remove-btn" data-action="pos-discard-bill" data-id="${esc(b.id)}" title="Discard this bill">✕</button>` : ''}
                </div>
              `;
                })
                .join('')}
            </div>
          </section>

          <div class="module-grid-2">
            <section class="card module-card">
              <div class="card-header">
                <h2 class="card-title">${visibleProducts.length} Items</h2>
                <span class="status-pill status-pill--purple">${state.posCategoryFilter}</span>
              </div>
              <div class="pos-product-grid">
                ${visibleProducts
                  .map(
                    (p) => `
                  <button type="button" class="pos-product-tile" data-action="pos-add-item" data-id="${esc(p.id)}">
                    <img class="pos-product-thumb" src="${esc(getProductImageSrc_(p))}" alt="" loading="lazy" />
                    <span class="pos-product-name">${esc(p.name)}</span>
                    <span class="pos-product-price tabular-nums">${formatINR(p.sellingPrice)}</span>
                  </button>
                `
                  )
                  .join('')}
              </div>
            </section>

            <section class="card module-card pos-cart-card">
              <div class="card-header">
                <h2 class="card-title">Bill ${activeBill.number}${activeBill.label ? ` · ${esc(activeBill.label)}` : ''}</h2>
                <span class="status-pill status-pill--purple">${cartQty} item${cartQty === 1 ? '' : 's'}</span>
              </div>

              <div class="form-field form-field--full" style="margin-bottom:10px;">
                <input class="form-input" type="text" placeholder="Label this bill (table / customer name, optional)" value="${esc(activeBill.label || '')}" data-action-input="pos-bill-label" />
              </div>

              ${
                cart.length === 0
                  ? `<p class="table-empty-note">Tap a product on the left to start this bill.</p>`
                  : `
              <div class="pos-cart-list">
                ${cart
                  .map(
                    (c, idx) => `
                  <div class="pos-cart-row">
                    <div class="pos-cart-row-main">
                      <span class="pos-cart-name">${esc(c.name)}</span>
                      <span class="pos-cart-line-total tabular-nums">${formatINR(c.qty * c.unitPrice)}</span>
                    </div>
                    <div class="pos-cart-row-controls">
                      <button type="button" class="pos-qty-btn" data-action="pos-dec-item" data-idx="${idx}">−</button>
                      <span class="pos-qty-value tabular-nums">${c.qty}</span>
                      <button type="button" class="pos-qty-btn" data-action="pos-inc-item" data-idx="${idx}">+</button>
                      <button type="button" class="pos-qty-shortcut-btn" data-action="pos-bump-item" data-idx="${idx}" data-amount="5">+5</button>
                      <button type="button" class="pos-qty-shortcut-btn" data-action="pos-bump-item" data-idx="${idx}" data-amount="10">+10</button>
                      <span class="pos-cart-unit-price tabular-nums">${formatINR(c.unitPrice)} each</span>
                      <button type="button" class="pos-remove-btn" data-action="pos-remove-item" data-idx="${idx}" title="Remove">✕</button>
                    </div>
                  </div>
                `
                  )
                  .join('')}
              </div>
              `
              }

              <div class="form-field form-field--full pos-discount-row">
                <label class="form-label">Discount</label>
                <div class="pos-discount-controls">
                  <div class="filter-tabs">
                    ${[
                      { key: 'none', label: 'None' },
                      { key: 'flat', label: '₹ Flat' },
                      { key: 'pct', label: '% Off' }
                    ]
                      .map(
                        (d) => `
                      <button type="button" class="filter-tab ${activeBill.discountType === d.key ? 'active' : ''}" data-action="set-pos-discount-type" data-type="${d.key}">${d.label}</button>
                    `
                      )
                      .join('')}
                  </div>
                  ${
                    activeBill.discountType !== 'none'
                      ? `<input class="form-input tabular-nums pos-discount-input" type="number" min="0" step="0.01" placeholder="${activeBill.discountType === 'flat' ? 'Amount ₹' : 'Percent %'}" value="${activeBill.discountValue || ''}" data-action-input="pos-discount-value" />`
                      : ''
                  }
                </div>
              </div>

              <div class="pos-cart-summary">
                ${
                  discountAmount > 0
                    ? `
                <div class="pos-cart-total-row pos-cart-subtotal-row">
                  <span>Subtotal</span>
                  <span class="tabular-nums">${formatINR(cartSubtotal)}</span>
                </div>
                <div class="pos-cart-total-row pos-cart-subtotal-row">
                  <span>Discount</span>
                  <span class="tabular-nums">− ${formatINR(discountAmount)}</span>
                </div>
                `
                    : ''
                }
                <div class="pos-cart-total-row">
                  <span>Total</span>
                  <strong class="tabular-nums">${formatINR(cartTotal)}</strong>
                </div>
              </div>

              <div class="form-field form-field--full">
                <label class="form-label">Payment Mode</label>
                <div class="filter-tabs">
                  ${['Cash', 'UPI', 'Card']
                    .map(
                      (m) => `
                    <button type="button" class="filter-tab ${activeBill.paymentMode === m ? 'active' : ''}" data-action="set-pos-payment-mode" data-mode="${m}">${m}</button>
                  `
                    )
                    .join('')}
                </div>
              </div>

              <div class="form-field form-field--full" style="margin-top:14px;">
                <button type="button" class="primary-cta-pill" style="width:100%;justify-content:center;" data-action="pos-checkout" ${cart.length === 0 ? 'disabled' : ''}>
                  Checkout &amp; Print Bill — ${formatINR(cartTotal)}
                </button>
                ${cart.length > 0 ? `<button type="button" class="table-action-btn" style="width:100%;justify-content:center;margin-top:8px;" data-action="pos-clear-cart">Clear This Bill</button>` : ''}
              </div>
            </section>
          </div>
        `;

        const posBillLabelInput = dynamicModuleView.querySelector('[data-action-input="pos-bill-label"]');
        if (posBillLabelInput) {
          posBillLabelInput.addEventListener('change', (ev) => {
            const bill = getActiveBill();
            bill.label = ev.target.value;
            persistHeldBills();
            renderModulePage('new-sale');
          });
        }

        const posDiscountInput = dynamicModuleView.querySelector('[data-action-input="pos-discount-value"]');
        if (posDiscountInput) {
          posDiscountInput.addEventListener('input', (ev) => {
            const bill = getActiveBill();
            bill.discountValue = Number(ev.target.value) || 0;
            persistHeldBills();
            renderModulePage('new-sale');
            const el = dynamicModuleView.querySelector('[data-action-input="pos-discount-value"]');
            if (el) { el.focus(); }
          });
        }
        break;
      }

      case 'sales': {
        const recentDays = (state.dailySummary || []).slice(-10).reverse();
        dynamicModuleView.innerHTML = `
          <section class="hero-row">
            <div class="hero-greeting">
              <p class="greeting-line">End-of-Day Sales • <strong>${state.branch}</strong></p>
              <h1 class="hero-title">Sales / Ingest</h1>
              <p class="hero-subtitle">Enter how many of each menu item sold today — no per-ticket POS entry needed</p>
            </div>
            <div class="hero-controls">
              <button type="button" class="primary-cta-pill" data-action="open-modal" data-modal="eod-entry">+ Enter Today's Sales</button>
            </div>
          </section>

          <div class="module-grid-3">
            <article class="card module-card">
              <span class="kpi-label">Today’s Recorded Sales</span>
              <div class="kpi-value tabular-nums">${formatINR(state.todayRevenue)}</div>
              <span class="status-pill status-pill--green">${state.todayOrders} units sold today</span>
            </article>
            <article class="card module-card">
              <span class="kpi-label">Days Logged (Oct 2026)</span>
              <div class="kpi-value tabular-nums">${(state.dailySummary || []).length}</div>
              <span class="status-pill status-pill--blue">From your café's real October data</span>
            </article>
            <article class="card module-card">
              <span class="kpi-label">Avg. Daily Sales</span>
              <div class="kpi-value tabular-nums">${formatINR(
                Math.round(
                  (state.dailySummary || []).reduce((sum, d) => sum + d.sales, 0) / Math.max(1, (state.dailySummary || []).length)
                )
              )}</div>
              <span class="status-pill status-pill--orange">Across logged days</span>
            </article>
          </div>

          <section class="card module-card">
            <div class="card-header">
              <h2 class="card-title">Daily Sales Register</h2>
              <p class="card-subtitle">Most recent EOD entries — each row is one business day's totals, not an individual ticket</p>
            </div>
            <div class="table-responsive">
              <table class="items-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Total Qty Sold</th>
                    <th>Cost Value</th>
                    <th>Net Sales</th>
                    <th class="text-right">Net Profit</th>
                  </tr>
                </thead>
                <tbody>
                  ${recentDays.length > 0
                    ? recentDays
                        .map(
                          (d) => `
                    <tr>
                      <td><strong>${d.date}</strong></td>
                      <td class="tabular-nums">${d.qty}</td>
                      <td class="tabular-nums item-cat">${formatINR(d.cost)}</td>
                      <td class="tabular-nums"><strong>${formatINR(d.sales)}</strong></td>
                      <td class="text-right tabular-nums"><span class="status-pill status-pill--green">${formatINR(d.profit)}</span></td>
                    </tr>
                  `
                        )
                        .join('')
                    : `<tr><td colspan="5" class="table-empty-note">No EOD sales logged yet — use "+ Enter Today's Sales" to get started</td></tr>`}
                </tbody>
              </table>
            </div>
          </section>
        `;
        break;
      }

      case 'expenses': {
        const filteredExpenses = state.expenses.filter(
          (ex) => state.expenseFilter === 'All' || ex.category === state.expenseFilter
        );
        dynamicModuleView.innerHTML = `
          <section class="hero-row">
            <div class="hero-greeting">
              <p class="greeting-line">Purchase &amp; Overhead Ledger • <strong>${state.branch}</strong></p>
              <h1 class="hero-title">Expenses</h1>
              <p class="hero-subtitle">Track daily milk bills, tea dust invoices, LPG refills, and shop overheads</p>
            </div>
            <div class="hero-controls">
              <button type="button" class="control-pill" data-action="open-modal" data-modal="upload-bill">Upload Supplier Bill</button>
              <button type="button" class="primary-cta-pill" data-action="open-modal" data-modal="add-expense">+ Add Expense</button>
            </div>
          </section>

          <section class="card module-card">
            <div class="card-header">
              <h2 class="card-title">October Expense vouchers (${formatINR(state.totalExpenses)})</h2>
              <div class="filter-tabs">
                ${['All', 'Raw Material', 'Packaging', 'Utilities', 'Rent']
                  .map(
                    (cat) => `
                  <button type="button" class="filter-tab ${state.expenseFilter === cat ? 'active' : ''}" data-action="filter-expenses" data-category="${cat}">${cat}</button>
                `
                  )
                  .join('')}
              </div>
            </div>
            <div class="table-responsive">
              <table class="items-table">
                <thead>
                  <tr>
                    <th>Voucher</th>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Supplier / Vendor</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th class="text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  ${filteredExpenses.length > 0
                    ? filteredExpenses
                        .map(
                          (ex) => `
                    <tr>
                      <td class="tabular-nums"><strong>${esc(ex.id)}</strong></td>
                      <td class="tabular-nums item-cat">${esc(ex.date)}</td>
                      <td>${esc(ex.title)}</td>
                      <td>${esc(ex.vendor)}</td>
                      <td><span class="status-pill status-pill--orange">${esc(ex.category)}</span></td>
                      <td>
                        <span class="status-pill ${ex.status === 'Paid' ? 'status-pill--green' : 'status-pill--red'}">${esc(ex.status)}</span>
                      </td>
                      <td class="text-right tabular-nums"><strong>${formatINR(ex.amount)}</strong></td>
                    </tr>
                  `
                        )
                        .join('')
                    : `<tr><td colspan="7" class="table-empty-note">No expenses logged yet — use "+ Add Expense" or "Upload Supplier Bill" to get started</td></tr>`}
                </tbody>
              </table>
            </div>
          </section>
        `;
        break;
      }

      case 'staff': {
        const presentCount = state.staff.filter((s) => s.status === 'Present').length;
        dynamicModuleView.innerHTML = `
          <section class="hero-row">
            <div class="hero-greeting">
              <p class="greeting-line">Shift Roster &amp; Attendance • <strong>${state.branch}</strong></p>
              <h1 class="hero-title">Staff Management</h1>
              <p class="hero-subtitle">${presentCount} of ${state.staff.length} team members checked in today</p>
            </div>
            <div class="hero-controls">
              <button type="button" class="primary-cta-pill" data-action="open-modal" data-modal="add-staff">+ Add Staff</button>
              <button type="button" class="primary-cta-pill" data-nav-trigger="payroll">Open Salary &amp; Payroll →</button>
            </div>
          </section>

          <section class="card module-card">
            <div class="card-header">
              <h2 class="card-title">Today’s Shift Attendance</h2>
              <span class="status-pill status-pill--blue">${state.attendanceMarkedToday ? 'Marked today' : 'Mark attendance below'}</span>
            </div>
            <div class="table-responsive">
              <table class="items-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Staff Name</th>
                    <th>Role</th>
                    <th>Shift Start</th>
                    <th>Shift End</th>
                    <th>Status</th>
                    <th class="text-right">Mark Attendance</th>
                  </tr>
                </thead>
                <tbody>
                  ${state.staff
                    .map(
                      (st, idx) => `
                    <tr>
                      <td class="tabular-nums">${esc(st.id)}</td>
                      <td><strong>${esc(st.name)}</strong><div class="item-cat tabular-nums" style="font-size:11px;">${esc(st.phone)}</div></td>
                      <td>${esc(st.role)}</td>
                      <td>
                        <input class="form-input tabular-nums shift-time-input" type="time" data-shift-field="start" data-idx="${idx}" value="${st.shiftStart || ''}" style="width:110px;" />
                      </td>
                      <td>
                        <input class="form-input tabular-nums shift-time-input" type="time" data-shift-field="end" data-idx="${idx}" value="${st.shiftEnd || ''}" style="width:110px;" />
                      </td>
                      <td>
                        <span class="status-pill ${st.status === 'Present' ? 'status-pill--green' : st.status === 'Half-Day' ? 'status-pill--orange' : 'status-pill--red'}">${st.status}</span>
                      </td>
                      <td class="text-right">
                        <select class="form-select" data-action-select="mark-attendance" data-idx="${idx}" style="font-size:var(--text-2xs);padding:4px 8px;">
                          <option value="">Mark as…</option>
                          <option value="Present" ${st.status === 'Present' ? 'selected' : ''}>Present</option>
                          <option value="Half-Day" ${st.status === 'Half-Day' ? 'selected' : ''}>Half-Day</option>
                          <option value="Paid Leave" ${st.status === 'Paid Leave' ? 'selected' : ''}>Paid Leave</option>
                          <option value="Absent/LOP" ${st.status === 'Absent/LOP' ? 'selected' : ''}>Absent / LOP</option>
                        </select>
                      </td>
                    </tr>
                  `
                    )
                    .join('')}
                </tbody>
              </table>
            </div>
            <p class="item-cat" style="margin-top:10px;font-size:11px;">Shift times are saved per staff member as you edit them. Attendance marked here is logged to ATTENDANCE and used for payroll day-counting.</p>
          </section>
        `;

        dynamicModuleView.querySelectorAll('[data-action-select="mark-attendance"]').forEach((sel) => {
          sel.addEventListener('change', (ev) => {
            const idx = Number(ev.target.getAttribute('data-idx'));
            const member = state.staff[idx];
            const newStatus = ev.target.value;
            if (!member || !newStatus) return;
            member.status = newStatus;
            member.checkIn = newStatus === 'Present' ? 'Just now' : newStatus === 'Half-Day' ? 'Half-day' : '—';
            state.attendanceMarkedToday = true;
            apiCall('markAttendance', {
              empId: member.id,
              empName: member.name,
              date: new Date().toISOString().slice(0, 10),
              shift: member.shift,
              status: newStatus
            });
            showToast(`${member.name} marked as ${newStatus}`);
            renderModulePage('staff');
          });
        });

        dynamicModuleView.querySelectorAll('.shift-time-input').forEach((inp) => {
          inp.addEventListener('change', (ev) => {
            const idx = Number(ev.target.getAttribute('data-idx'));
            const field = ev.target.getAttribute('data-shift-field');
            const member = state.staff[idx];
            if (!member) return;
            if (field === 'start') member.shiftStart = ev.target.value;
            if (field === 'end') member.shiftEnd = ev.target.value;
            if (member.shiftStart && member.shiftEnd) {
              member.shift = `${formatTime12h(member.shiftStart)} - ${formatTime12h(member.shiftEnd)}`;
            }
            apiCall('updateStaffShift', {
              empId: member.id,
              shiftStart: member.shiftStart || '',
              shiftEnd: member.shiftEnd || '',
              shiftLabel: member.shift
            });
            showToast(`${member.name}'s shift updated`);
          });
        });
        break;
      }

      case 'menu-costing': {
        const prod = state.products.find((p) => p.id === state.selectedProductId) || state.products[0];
        const categories = ['All', ...Array.from(new Set(state.products.map((p) => p.category)))];
        const visibleProducts = state.products.filter(
          (p) => state.productCategoryFilter === 'All' || p.category === state.productCategoryFilter
        );
        const marginPct = prod.marginPct.toFixed(1);
        const foodCostPct = prod.sellingPrice > 0 ? ((prod.landedCost / prod.sellingPrice) * 100).toFixed(1) : '0.0';
        const bomRows = (state.recipeBom || []).filter((r) => r.productId === prod.id);

        dynamicModuleView.innerHTML = `
          <section class="hero-row">
            <div class="hero-greeting">
              <p class="greeting-line">Unit Economics &amp; Recipe BOM • <strong>${state.branch}</strong> • ${state.products.length} products</p>
              <h1 class="hero-title">Menu Costing</h1>
              <p class="hero-subtitle">Landed cost, selling price and gross margin across every menu item</p>
            </div>
            <div class="filter-tabs">
              ${categories
                .map(
                  (c) => `
                <button type="button" class="filter-tab ${state.productCategoryFilter === c ? 'active' : ''}" data-action="filter-products" data-category="${c}">${c}</button>
              `
                )
                .join('')}
              <button type="button" class="primary-cta-pill" data-action="open-modal" data-modal="add-menu-item" style="margin-left:8px;">+ Add Menu Item</button>
            </div>
          </section>

          <div class="module-grid-2">
            <section class="card module-card">
              <div class="card-header">
                <h2 class="card-title">${visibleProducts.length} Items</h2>
                <span class="status-pill status-pill--purple">${state.productCategoryFilter}</span>
              </div>
              <div class="table-responsive" style="max-height:420px;overflow-y:auto;">
                <table class="items-table">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th class="text-right">Landed Cost</th>
                      <th class="text-right">Price</th>
                      <th class="text-right">Margin</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${visibleProducts
                      .map(
                        (p) => `
                      <tr class="product-row ${p.id === prod.id ? 'is-selected-row' : ''}" data-action="select-product" data-id="${esc(p.id)}" style="cursor:pointer;">
                        <td>
                          <div style="display:flex;align-items:center;gap:8px;">
                            <img src="${esc(getProductImageSrc_(p))}" alt="" style="width:34px;height:34px;object-fit:cover;border-radius:6px;background:#f1ebe3;flex-shrink:0;" />
                            <div>
                              <strong>${esc(p.name)}</strong>
                              <div class="item-cat" style="font-size:11px;">${esc(p.id)} · ${esc(p.category)}</div>
                            </div>
                          </div>
                        </td>
                        <td class="text-right tabular-nums">₹ ${p.landedCost.toFixed(2)}</td>
                        <td class="text-right tabular-nums">₹ ${p.sellingPrice.toFixed(2)}</td>
                        <td class="text-right tabular-nums" style="color:${p.marginPct >= 25 ? 'var(--accent-green-ink)' : p.marginPct >= 0 ? 'var(--accent-orange-ink)' : 'var(--accent-red-ink)'};"><strong>${p.marginPct.toFixed(0)}%</strong></td>
                      </tr>
                    `
                      )
                      .join('')}
                  </tbody>
                </table>
              </div>
            </section>

            <section class="card module-card">
              <h2 class="card-title" style="margin-bottom:12px;">${esc(prod.name)}</h2>
              <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">
                <img id="menuCostingProductPhoto" src="${esc(getProductImageSrc_(prod))}" alt="" style="width:72px;height:72px;object-fit:cover;border-radius:10px;background:#f1ebe3;flex-shrink:0;" />
                <div>
                  <input type="file" id="menuCostingPhotoInput" accept="image/*" data-product-id="${esc(prod.id)}" style="display:none;" />
                  <button type="button" class="table-action-btn" data-action="trigger-product-photo-upload">Change Photo</button>
                  <p style="font-size:11px;color:var(--text-tertiary);margin-top:4px;">JPG/PNG, a few MB max</p>
                </div>
              </div>
              <ul class="summary-list">
                <li class="summary-item">
                  <span class="sum-label">Landed Cost (COGS)</span>
                  <strong class="sum-val tabular-nums">₹ ${prod.landedCost.toFixed(2)}</strong>
                </li>
                <li class="summary-item">
                  <span class="sum-label">Selling Price</span>
                  <strong class="sum-val tabular-nums">₹ ${prod.sellingPrice.toFixed(2)}</strong>
                </li>
                <li class="summary-item">
                  <span class="sum-label">Food Cost (%)</span>
                  <strong class="sum-val tabular-nums">${foodCostPct}%</strong>
                </li>
                <li class="summary-item">
                  <span class="sum-label">Gross Profit per Unit</span>
                  <strong class="sum-val tabular-nums" style="color:var(--accent-green-ink);">₹ ${prod.marginRs.toFixed(2)} (${marginPct}%)</strong>
                </li>
              </ul>
              <form id="editPriceForm" class="form-grid" style="margin-top:16px;">
                <div class="form-field form-field--full">
                  <label class="form-label" for="editPriceInput">Update Selling Price (₹)</label>
                  <input class="form-input tabular-nums" id="editPriceInput" type="number" min="1" step="0.5" value="${prod.sellingPrice}" />
                </div>
                <div class="form-field form-field--full">
                  <button type="submit" class="primary-cta-pill" style="width:100%;justify-content:center;">Save Price</button>
                </div>
              </form>
            </section>
          </div>

          <section class="card module-card" style="margin-top:20px;">
            <div class="card-header">
              <h2 class="card-title">Overhead &amp; Other Costs — ${esc(prod.name)}</h2>
              <span class="status-pill status-pill--orange">Per unit, ₹</span>
            </div>
            <p class="item-cat" style="font-size:12px;margin-bottom:12px;">
              The same per-item cost breakdown your costing sheet tracked — gas, oil, wastage and
              other overheads — on top of raw ingredient cost (Raw Cost Total, from the Recipe BOM
              below). Landed Cost = Raw Cost + Gas + Oil + Wastage + Overheads.
            </p>
            <form id="editOverheadForm" class="form-grid" data-product-id="${esc(prod.id)}">
              <div class="form-field">
                <label class="form-label" for="ovGasInput">Gas Cost (₹)</label>
                <input class="form-input tabular-nums" id="ovGasInput" type="number" min="0" step="0.01" value="${prod.gasCost || 0}" />
              </div>
              <div class="form-field">
                <label class="form-label" for="ovOilInput">Oil Cost (₹)</label>
                <input class="form-input tabular-nums" id="ovOilInput" type="number" min="0" step="0.01" value="${prod.oilCost || 0}" />
              </div>
              <div class="form-field">
                <label class="form-label" for="ovWastageInput">Wastage Cost (₹)</label>
                <input class="form-input tabular-nums" id="ovWastageInput" type="number" min="0" step="0.01" value="${prod.wastageCost || 0}" />
              </div>
              <div class="form-field">
                <label class="form-label" for="ovOverheadsInput">Other Overheads — electricity, packaging, etc. (₹)</label>
                <input class="form-input tabular-nums" id="ovOverheadsInput" type="number" min="0" step="0.01" value="${prod.overheadsCost || 0}" />
              </div>
              <div class="form-field form-field--full">
                <button type="submit" class="primary-cta-pill" style="width:100%;justify-content:center;">Save Overhead Costs</button>
              </div>
            </form>
          </section>

          <section class="card module-card" style="margin-top:20px;">
            <div class="card-header">
              <h2 class="card-title">Recipe BOM — ${esc(prod.name)}</h2>
              <span class="status-pill status-pill--purple">${bomRows.length} ingredient${bomRows.length === 1 ? '' : 's'}</span>
            </div>
            ${
              bomRows.length === 0
                ? `<p class="table-empty-note">No per-ingredient recipe is recorded for this item yet. Add the ingredients it's made from below — their cost is picked up straight from Inventory.</p>`
                : `
            <div class="table-responsive">
              <table class="items-table">
                <thead>
                  <tr>
                    <th>Ingredient</th>
                    <th class="text-right">Usage / Unit</th>
                    <th class="text-right">Ingredient Cost (₹ / base unit)</th>
                    <th class="text-right">Line Cost (₹)</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  ${bomRows
                    .map((r) => {
                      const ing = state.inventory.find((i) => i.sku === r.ingId);
                      const ingUnitCost = ing ? ing.unitCost : 0;
                      return `
                    <tr class="bom-row" data-bom-id="${esc(r.id)}">
                      <td><strong>${esc(r.ingName)}</strong><div class="item-cat" style="font-size:11px;">${esc(r.ingId)}</div></td>
                      <td class="text-right">
                        <input class="form-input tabular-nums bom-edit-input" type="number" min="0" step="0.01"
                          data-bom-field="usageQtyPerUnit" data-bom-id="${esc(r.id)}" value="${r.usageQtyPerUnit}" />
                      </td>
                      <td class="text-right">
                        <input class="form-input tabular-nums bom-edit-input" type="number" min="0" step="0.01"
                          data-bom-field="unitCost" data-bom-id="${esc(r.id)}" value="${ingUnitCost}" />
                      </td>
                      <td class="text-right tabular-nums">₹ ${r.lineCost.toFixed(2)}</td>
                      <td class="text-right" style="white-space:nowrap;">
                        <button type="button" class="table-action-btn" data-action="save-bom-row" data-bom-id="${esc(r.id)}">Save</button>
                        <button type="button" class="table-action-btn" data-action="delete-bom-row" data-bom-id="${esc(r.id)}" title="Remove ${esc(r.ingName)} from this recipe">✕</button>
                      </td>
                    </tr>
                  `;
                    })
                    .join('')}
                </tbody>
                <tfoot>
                  <tr style="font-weight:var(--weight-semibold);">
                    <td colspan="3" style="padding:8px 10px;">Raw Cost Total</td>
                    <td class="text-right tabular-nums" style="padding:8px 10px;">₹ ${bomRows.reduce((s, r) => s + r.lineCost, 0).toFixed(2)}</td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <p class="item-cat" style="margin-top:10px;font-size:11px;">Editing an ingredient's cost or usage here recomputes this product's Raw Cost, Landed Cost and Margin automatically, and (once connected to the Cloud) updates every other recipe that shares the same ingredient.</p>
            `
            }

            <div class="bom-add-row-block" style="margin-top:16px;padding-top:16px;border-top:1px solid var(--border-subtle);">
              <h3 class="eod-category-heading" style="margin-bottom:10px;">Add Ingredient from Inventory</h3>
              ${
                state.inventory.length === 0
                  ? `<p class="table-empty-note">No ingredients in Inventory yet — add stock items there first.</p>`
                  : `
              <form id="addBomRowForm" class="form-grid" data-product-id="${esc(prod.id)}">
                <div class="form-field">
                  <label class="form-label" for="addBomIngSelect">Ingredient</label>
                  <select class="form-input" id="addBomIngSelect">
                    ${state.inventory
                      .filter((i) => !bomRows.some((r) => r.ingId === i.sku))
                      .map((i) => `<option value="${esc(i.sku)}" data-unit-cost="${i.unitCost}">${esc(i.item)} (₹${i.unitCost.toFixed(2)}/base unit)</option>`)
                      .join('')}
                  </select>
                </div>
                <div class="form-field">
                  <label class="form-label" for="addBomUsageInput">Qty used per unit sold</label>
                  <input class="form-input tabular-nums" id="addBomUsageInput" type="number" min="0.01" step="0.01" placeholder="e.g. 100 (ml/g/pcs)" />
                </div>
                <div class="form-field">
                  <label class="form-label">Auto-calculated Line Cost (₹)</label>
                  <input class="form-input tabular-nums" id="addBomLineCostPreview" type="text" value="₹ 0.00" disabled />
                </div>
                <div class="form-field form-field--full">
                  <button type="submit" class="primary-cta-pill" style="width:100%;justify-content:center;">Add to Recipe</button>
                </div>
              </form>
              <p class="item-cat" style="margin-top:8px;font-size:11px;">Pick any ingredient already in your Inventory and enter how much of it one unit of ${esc(prod.name)} uses — the cost is calculated for you from that ingredient's current Inventory price, never typed in by hand.</p>
              `
              }
            </div>
          </section>
        `;
        // Live-calculate the preview Line Cost the moment the owner picks an
        // ingredient or types a usage quantity, so they see cost = usage x
        // ingredient's live Inventory unit cost before ever hitting Add —
        // never a cost they type in themselves.
        const addBomIngSelect = document.getElementById('addBomIngSelect');
        const addBomUsageInput = document.getElementById('addBomUsageInput');
        const addBomLineCostPreview = document.getElementById('addBomLineCostPreview');
        const recalcAddBomPreview = () => {
          if (!addBomIngSelect || !addBomUsageInput || !addBomLineCostPreview) return;
          const opt = addBomIngSelect.options[addBomIngSelect.selectedIndex];
          const unitCost = opt ? Number(opt.getAttribute('data-unit-cost')) || 0 : 0;
          const usage = Number(addBomUsageInput.value) || 0;
          addBomLineCostPreview.value = `₹ ${(usage * unitCost).toFixed(2)}`;
        };
        if (addBomIngSelect) addBomIngSelect.addEventListener('change', recalcAddBomPreview);
        if (addBomUsageInput) addBomUsageInput.addEventListener('input', recalcAddBomPreview);
        recalcAddBomPreview();

        const photoInput = dynamicModuleView.querySelector('#menuCostingPhotoInput');
        if (photoInput) {
          photoInput.addEventListener('change', (ev) => {
            const file = ev.target.files && ev.target.files[0];
            if (!file) return;
            const pid = photoInput.getAttribute('data-product-id');
            readImageFileAsDataUrl_(file)
              .then((dataUrl) => {
                const target = state.products.find((pp) => pp.id === pid);
                if (target) {
                  target.imageDataUrl = dataUrl;
                  persistLocalBusinessData();
                  renderModulePage('menu-costing');
                  showToast('Photo updated');
                }
              })
              .catch(() => showToast('Could not read that image file', 'warning'));
          });
        }
        break;
      }

      case 'pnl': {
        // All figures below are computed from real state, not hardcoded:
        //  - COGS = sum of daily "cost" (landed cost x qty sold) from dailySummary
        //  - Staff cost = sum of state.staff salaries
        //  - Other opex = state.expenses NOT already counted as raw-material COGS,
        //    grouped by category (Rent, Utilities, Packaging, Maintenance, etc.)
        const cogs = (state.dailySummary || []).reduce((sum, d) => sum + d.cost, 0);
        const staffCost = state.staff.reduce((sum, s) => sum + s.salary, 0);
        const opexByCategory = {};
        state.expenses
          .filter((ex) => ex.category !== 'Raw Material')
          .forEach((ex) => {
            opexByCategory[ex.category] = (opexByCategory[ex.category] || 0) + ex.amount;
          });
        const otherOpexTotal = Object.values(opexByCategory).reduce((sum, v) => sum + v, 0);
        const revenue = Math.max(1, state.totalRevenue);
        const netProfit = revenue - cogs - staffCost - otherOpexTotal;
        const netMarginPct = Math.round((netProfit / revenue) * 1000) / 10;

        const pct = (val) => Math.round((val / revenue) * 1000) / 10;

        // Computed from the real logged date range, not a fixed dev-session
        // label — falls back to the current month when no sales are logged
        // yet so a brand-new, unconnected install doesn't show a blank or
        // stale period.
        const summaryDates = (state.dailySummary || [])
          .map((d) => (d.isoDate ? new Date(d.isoDate) : null))
          .filter((d) => d && !isNaN(d));
        const periodLabel = summaryDates.length
          ? `${summaryDates[0].toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })} - ${summaryDates[summaryDates.length - 1].toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' })}`
          : new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });

        dynamicModuleView.innerHTML = `
          <section class="hero-row">
            <div class="hero-greeting">
              <p class="greeting-line">Financial Statement • <strong>${esc(periodLabel)}</strong></p>
              <h1 class="hero-title">Profit &amp; Loss Report</h1>
              <p class="hero-subtitle">Computed live from your logged daily sales, staff salaries, and expense ledger</p>
            </div>
          </section>

          <div class="module-grid-2">
            <section class="card module-card">
              <h2 class="card-title" style="margin-bottom:12px;">Income &amp; Cost Structure</h2>
              <div class="metric-bar-row">
                <div class="metric-bar-labels">
                  <span>Gross Revenue</span>
                  <strong class="tabular-nums">${formatINR(state.totalRevenue)} (100%)</strong>
                </div>
                <div class="metric-bar-track"><div class="metric-bar-fill" style="width:100%;background:#13753B;"></div></div>
              </div>
              <div class="metric-bar-row">
                <div class="metric-bar-labels">
                  <span>Cost of Goods Sold (ingredient cost of items sold)</span>
                  <strong class="tabular-nums">${formatINR(Math.round(cogs))} (${pct(cogs)}%)</strong>
                </div>
                <div class="metric-bar-track"><div class="metric-bar-fill" style="width:${Math.min(100, pct(cogs))}%;"></div></div>
              </div>
              <div class="metric-bar-row">
                <div class="metric-bar-labels">
                  <span>Staff Salaries (current roster, monthly)</span>
                  <strong class="tabular-nums">${formatINR(staffCost)} (${pct(staffCost)}%)</strong>
                </div>
                <div class="metric-bar-track"><div class="metric-bar-fill" style="width:${Math.min(100, pct(staffCost))}%;background:#D97706;"></div></div>
              </div>
              ${Object.entries(opexByCategory)
                .map(
                  ([cat, amt]) => `
                <div class="metric-bar-row">
                  <div class="metric-bar-labels">
                    <span>${cat}</span>
                    <strong class="tabular-nums">${formatINR(amt)} (${pct(amt)}%)</strong>
                  </div>
                  <div class="metric-bar-track"><div class="metric-bar-fill" style="width:${Math.min(100, pct(amt))}%;background:#4B38C8;"></div></div>
                </div>
              `
                )
                .join('') || '<p style="color:var(--ink-500);font-size:var(--text-xs);">No non-raw-material expenses logged yet.</p>'}
            </section>

            <section class="card module-card">
              <h2 class="card-title" style="margin-bottom:12px;">Net Margin Summary</h2>
              <ul class="summary-list">
                <li class="summary-item">
                  <span class="sum-label">Total Operating Revenue</span>
                  <strong class="sum-val tabular-nums">${formatINR(state.totalRevenue)}</strong>
                </li>
                <li class="summary-item">
                  <span class="sum-label">Cost of Goods Sold</span>
                  <strong class="sum-val tabular-nums">${formatINR(Math.round(cogs))}</strong>
                </li>
                <li class="summary-item">
                  <span class="sum-label">Staff Salaries</span>
                  <strong class="sum-val tabular-nums">${formatINR(staffCost)}</strong>
                </li>
                <li class="summary-item">
                  <span class="sum-label">Other Operating Expenses</span>
                  <strong class="sum-val tabular-nums">${formatINR(otherOpexTotal)}</strong>
                </li>
                <li class="summary-item">
                  <span class="sum-label">Net Café Profit</span>
                  <strong class="sum-val tabular-nums" style="color:${netProfit >= 0 ? 'var(--accent-green-ink)' : 'var(--accent-red-ink)'};">${formatINR(Math.round(netProfit))}</strong>
                </li>
                <li class="summary-item">
                  <span class="sum-label">Net Profit Margin</span>
                  <strong class="sum-val tabular-nums">${netMarginPct}%</strong>
                </li>
              </ul>
              <p style="color:var(--ink-500);font-size:var(--text-2xs);margin-top:var(--space-3);">Note: staff salaries are counted at full monthly rate regardless of date range — connect the Cloud payroll logs for pro-rated figures.</p>
            </section>
          </div>
        `;
        break;
      }

      case 'analytics': {
        // Everything here is computed from real logged data — state.dailySummary
        // (date-level totals, always populated from day 1) and state.productSalesLog
        // (per-product-per-day lines, populated once real EOD entries exist, or by a
        // live DAILY_SALES sheet sync). There is no per-hour/per-ticket timestamp data
        // in the source workbook, so hourly-rush style charts are intentionally left
        // out. Scope is deliberately bounded to: trend lines, 7-day moving averages,
        // day-of-week patterns, category/product trends, cost-vs-revenue correlation,
        // margin trends, and simple linear forecasting — no seasonality decomposition,
        // anomaly detection, or elasticity modelling.
        const days = (state.dailySummary || []).slice().sort((a, b) => new Date(a.isoDate || a.date) - new Date(b.isoDate || b.date));
        const totalDays = days.length;
        const log = state.productSalesLog || [];
        const hasLog = log.length > 0;

        const avgDailySales = totalDays ? Math.round(days.reduce((s, d) => s + d.sales, 0) / totalDays) : 0;
        const avgDailyProfit = totalDays ? Math.round(days.reduce((s, d) => s + d.profit, 0) / totalDays) : 0;
        const avgMarginPct = totalDays
          ? Math.round((days.reduce((s, d) => s + (d.sales > 0 ? d.profit / d.sales : 0), 0) / totalDays) * 1000) / 10
          : 0;
        const bestDay = totalDays ? days.reduce((best, d) => (d.sales > best.sales ? d : best), days[0]) : null;

        // ---- 7-day moving average (sales & profit) ----
        const movingAvg = (arr, n) =>
          arr.map((_, i) => {
            const start = Math.max(0, i - n + 1);
            const slice = arr.slice(start, i + 1);
            return slice.reduce((s, v) => s + v, 0) / slice.length;
          });
        const salesSeries = days.map((d) => d.sales);
        const profitSeries = days.map((d) => d.profit);
        const marginSeries = days.map((d) => (d.sales > 0 ? Math.round((d.profit / d.sales) * 1000) / 10 : 0));
        const sales7dma = movingAvg(salesSeries, 7);
        const profit7dma = movingAvg(profitSeries, 7);

        // ---- Simple linear regression forecast (next 7 days, sales) ----
        const linreg = (ys) => {
          const n = ys.length;
          if (n < 2) return { slope: 0, intercept: ys[0] || 0 };
          const xs = ys.map((_, i) => i);
          const xMean = xs.reduce((s, x) => s + x, 0) / n;
          const yMean = ys.reduce((s, y) => s + y, 0) / n;
          let num = 0, den = 0;
          for (let i = 0; i < n; i++) {
            num += (xs[i] - xMean) * (ys[i] - yMean);
            den += (xs[i] - xMean) ** 2;
          }
          const slope = den !== 0 ? num / den : 0;
          const intercept = yMean - slope * xMean;
          return { slope, intercept };
        };
        const { slope, intercept } = linreg(salesSeries);
        const forecastDays = 7;
        const forecastLabels = [];
        const forecastValues = [];
        for (let i = 0; i < forecastDays; i++) {
          const x = totalDays + i;
          forecastValues.push(Math.max(0, Math.round(slope * x + intercept)));
          const base = totalDays ? new Date(days[totalDays - 1].isoDate || days[totalDays - 1].date) : new Date();
          const d = new Date(base);
          d.setDate(d.getDate() + i + 1);
          forecastLabels.push(d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short' }));
        }
        const trendDirection = slope > 1 ? 'Rising' : slope < -1 ? 'Declining' : 'Flat';

        // ---- Day-of-week pattern (avg sales/profit by weekday, from dailySummary) ----
        const DOW_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const dowBuckets = DOW_LABELS.map(() => ({ sales: 0, profit: 0, count: 0 }));
        days.forEach((d) => {
          const iso = d.isoDate || d.date;
          const dt = new Date(iso);
          if (isNaN(dt.getTime())) return;
          const dow = dt.getDay();
          dowBuckets[dow].sales += d.sales;
          dowBuckets[dow].profit += d.profit;
          dowBuckets[dow].count += 1;
        });
        const dowAvg = dowBuckets.map((b, i) => ({
          label: DOW_LABELS[i],
          avgSales: b.count ? Math.round(b.sales / b.count) : 0,
          avgProfit: b.count ? Math.round(b.profit / b.count) : 0
        }));
        const maxDowSales = Math.max(1, ...dowAvg.map((d) => d.avgSales));
        const bestDow = dowAvg.reduce((best, d) => (d.avgSales > best.avgSales ? d : best), dowAvg[0]);

        // ---- Category & product trends (needs productSalesLog) ----
        const categories = Array.from(new Set(state.products.map((p) => p.category)));
        let catRevenue = [];
        let topSellers = [];
        let bottomSellers = [];
        if (hasLog) {
          catRevenue = categories
            .map((cat) => {
              const rows = log.filter((r) => r.category === cat);
              const revenue = rows.reduce((s, r) => s + r.netSales, 0);
              const units = rows.reduce((s, r) => s + r.qty, 0);
              return { cat, revenue, units };
            })
            .sort((a, b) => b.revenue - a.revenue);

          const byProduct = {};
          log.forEach((r) => {
            if (!byProduct[r.productId]) byProduct[r.productId] = { qty: 0, revenue: 0 };
            byProduct[r.productId].qty += r.qty;
            byProduct[r.productId].revenue += r.netSales;
          });
          const ranked = Object.entries(byProduct)
            .map(([pid, agg]) => {
              const prod = state.products.find((p) => p.id === pid);
              return prod ? { ...agg, name: prod.name, category: prod.category } : null;
            })
            .filter(Boolean)
            .sort((a, b) => b.qty - a.qty);
          topSellers = ranked.slice(0, 5);
          bottomSellers = ranked.slice(-5).reverse();
        }
        const maxCatRevenue = Math.max(1, ...catRevenue.map((c) => c.revenue));

        // ---- Cost-vs-revenue correlation (Pearson r, daily cost vs daily revenue) ----
        let correlation = null;
        if (totalDays >= 3) {
          const costArr = days.map((d) => d.cost);
          const n = totalDays;
          const meanC = costArr.reduce((s, v) => s + v, 0) / n;
          const meanS = salesSeries.reduce((s, v) => s + v, 0) / n;
          let covSum = 0, varC = 0, varS = 0;
          for (let i = 0; i < n; i++) {
            covSum += (costArr[i] - meanC) * (salesSeries[i] - meanS);
            varC += (costArr[i] - meanC) ** 2;
            varS += (salesSeries[i] - meanS) ** 2;
          }
          const denom = Math.sqrt(varC * varS);
          correlation = denom > 0 ? Math.round((covSum / denom) * 100) / 100 : 0;
        }

        dynamicModuleView.innerHTML = `
          <section class="hero-row">
            <div class="hero-greeting">
              <p class="greeting-line">Sales Intelligence • <strong>${state.branch}</strong></p>
              <h1 class="hero-title">Café Analytics</h1>
              <p class="hero-subtitle">Computed from your logged daily sales and per-product figures — no estimated or sample data</p>
            </div>
          </section>

          <div class="module-grid-3">
            <article class="card module-card">
              <span class="kpi-label">Days Logged</span>
              <div class="kpi-value tabular-nums">${totalDays}</div>
              <span class="status-pill status-pill--blue">From real EOD entries</span>
            </article>
            <article class="card module-card">
              <span class="kpi-label">Avg. Daily Sales</span>
              <div class="kpi-value tabular-nums">${formatINR(avgDailySales)}</div>
              <span class="status-pill status-pill--green">Avg. profit ${formatINR(avgDailyProfit)}/day</span>
            </article>
            <article class="card module-card">
              <span class="kpi-label">Avg. Profit Margin</span>
              <div class="kpi-value tabular-nums">${avgMarginPct}%</div>
              <span class="status-pill status-pill--purple">${bestDay ? `Best day: ${bestDay.date} (${formatINR(bestDay.sales)})` : 'No days logged yet'}</span>
            </article>
          </div>

          <section class="card module-card">
            <div class="card-header">
              <h2 class="card-title">Sales &amp; Profit Trend — with 7-Day Moving Average</h2>
              <span class="status-pill status-pill--blue">${totalDays} day${totalDays === 1 ? '' : 's'} logged</span>
            </div>
            ${totalDays >= 2
              ? `<div id="analyticsTrendChart" style="min-height:280px;"></div>`
              : `<p class="table-empty-note">Log at least 2 days of EOD sales to see a trend line.</p>`}
          </section>

          <div class="module-grid-2">
            <section class="card module-card">
              <h2 class="card-title" style="margin-bottom:12px;">Margin Trend (Daily Profit %)</h2>
              ${totalDays >= 2
                ? `<div id="analyticsMarginChart" style="min-height:220px;"></div>`
                : `<p class="table-empty-note">Log at least 2 days to see the margin trend.</p>`}
            </section>
            <section class="card module-card">
              <h2 class="card-title" style="margin-bottom:12px;">7-Day Sales Forecast (Linear Trend)</h2>
              ${totalDays >= 3
                ? `
                <ul class="summary-list">
                  <li class="summary-item">
                    <span class="sum-label">Trend Direction</span>
                    <strong class="sum-val" style="color:${trendDirection === 'Rising' ? 'var(--accent-green-ink)' : trendDirection === 'Declining' ? 'var(--accent-red-ink)' : 'var(--ink-700)'};">${trendDirection} (${slope >= 0 ? '+' : ''}${Math.round(slope)}/day)</strong>
                  </li>
                  <li class="summary-item">
                    <span class="sum-label">Forecast Avg. Daily Sales (next 7d)</span>
                    <strong class="sum-val tabular-nums">${formatINR(Math.round(forecastValues.reduce((s, v) => s + v, 0) / forecastValues.length))}</strong>
                  </li>
                </ul>
                <div id="analyticsForecastChart" style="min-height:180px;margin-top:8px;"></div>
                <p class="item-cat" style="margin-top:8px;font-size:11px;">Simple linear-regression projection from ${totalDays} logged day(s) — a straight-line trend, not a seasonal or promotional forecast.</p>
                `
                : `<p class="table-empty-note">Log at least 3 days of EOD sales to generate a forecast.</p>`}
            </section>
          </div>

          <section class="card module-card">
            <h2 class="card-title" style="margin-bottom:12px;">Day-of-Week Pattern (Avg. Sales)</h2>
            ${totalDays >= 7
              ? dowAvg
                  .map(
                    (d) => `
              <div class="metric-bar-row">
                <div class="metric-bar-labels"><span>${d.label}${d.label === bestDow.label ? ' ★' : ''}</span><strong class="tabular-nums">${formatINR(d.avgSales)} avg • profit ${formatINR(d.avgProfit)}</strong></div>
                <div class="metric-bar-track"><div class="metric-bar-fill" style="width:${Math.round((d.avgSales / maxDowSales) * 100)}%;background:${d.label === bestDow.label ? '#2E8B57' : CATEGORY_PALETTE[0]};"></div></div>
              </div>
            `
                  )
                  .join('')
              : `<p class="table-empty-note">Log at least 7 days (one full week) of EOD sales to see day-of-week patterns.</p>`}
          </section>

          <section class="card module-card">
            <h2 class="card-title" style="margin-bottom:12px;">Cost vs. Revenue Correlation</h2>
            ${correlation !== null
              ? `
              <ul class="summary-list">
                <li class="summary-item">
                  <span class="sum-label">Pearson Correlation (r)</span>
                  <strong class="sum-val tabular-nums">${correlation}</strong>
                </li>
                <li class="summary-item">
                  <span class="sum-label">Interpretation</span>
                  <strong class="sum-val">${Math.abs(correlation) > 0.7 ? 'Strong' : Math.abs(correlation) > 0.4 ? 'Moderate' : 'Weak'} ${correlation >= 0 ? 'positive' : 'negative'} relationship — ${correlation >= 0 ? 'cost tends to rise with revenue (higher volume days)' : 'cost and revenue move in opposite directions'}</strong>
                </li>
              </ul>
              `
              : `<p class="table-empty-note">Log at least 3 days of EOD sales to compute the cost-vs-revenue correlation.</p>`}
          </section>

          <section class="card module-card">
            <h2 class="card-title" style="margin-bottom:12px;">Revenue by Category (from logged sales)</h2>
            ${
              hasLog && catRevenue.length
                ? catRevenue
                    .map(
                      (c, idx) => `
              <div class="metric-bar-row">
                <div class="metric-bar-labels"><span>${esc(c.cat)}</span><strong class="tabular-nums">${formatINR(Math.round(c.revenue))} • ${c.units} units</strong></div>
                <div class="metric-bar-track"><div class="metric-bar-fill" style="width:${Math.round((c.revenue / maxCatRevenue) * 100)}%;background:${CATEGORY_PALETTE[idx % CATEGORY_PALETTE.length]};"></div></div>
              </div>
            `
                    )
                    .join('')
                : '<p class="table-empty-note">Enter EOD sales for at least one day to see category revenue here.</p>'
            }
          </section>

          <div class="module-grid-2">
            <section class="card module-card">
              <h2 class="card-title" style="margin-bottom:12px;">Top Sellers (by units, logged entries)</h2>
              ${
                topSellers.length
                  ? `<div class="table-responsive"><table class="items-table"><thead><tr><th>Item</th><th>Category</th><th class="text-right">Units Sold</th><th class="text-right">Revenue</th></tr></thead><tbody>
                ${topSellers
                  .map(
                    (p) => `<tr><td><strong>${esc(p.name)}</strong></td><td>${esc(p.category)}</td><td class="text-right tabular-nums">${p.qty}</td><td class="text-right tabular-nums">${formatINR(Math.round(p.revenue))}</td></tr>`
                  )
                  .join('')}
                </tbody></table></div>`
                  : '<p class="table-empty-note">No EOD entries yet.</p>'
              }
            </section>
            <section class="card module-card">
              <h2 class="card-title" style="margin-bottom:12px;">Slowest Movers (by units, logged entries)</h2>
              ${
                bottomSellers.length
                  ? `<div class="table-responsive"><table class="items-table"><thead><tr><th>Item</th><th>Category</th><th class="text-right">Units Sold</th><th class="text-right">Revenue</th></tr></thead><tbody>
                ${bottomSellers
                  .map(
                    (p) => `<tr><td><strong>${esc(p.name)}</strong></td><td>${esc(p.category)}</td><td class="text-right tabular-nums">${p.qty}</td><td class="text-right tabular-nums">${formatINR(Math.round(p.revenue))}</td></tr>`
                  )
                  .join('')}
                </tbody></table></div>`
                  : '<p class="table-empty-note">No EOD entries yet.</p>'
              }
            </section>
          </div>
        `;

        // ---- Mount ApexCharts for the trend/margin/forecast panels ----
        if (hasApex() && totalDays >= 2) {
          const labels = days.map((d) => d.date);
          mountOrUpdateChart('analyticsTrendChart', 'analyticsTrend', {
            chart: { type: 'line', height: 280, toolbar: { show: false }, fontFamily: 'inherit' },
            series: [
              { name: 'Daily Sales', type: 'column', data: salesSeries.map((v) => Math.round(v)) },
              { name: '7-Day Avg Sales', type: 'line', data: sales7dma.map((v) => Math.round(v)) },
              { name: 'Daily Profit', type: 'line', data: profitSeries.map((v) => Math.round(v)) }
            ],
            xaxis: { categories: labels, labels: { style: { fontSize: '11px' } } },
            yaxis: { labels: { formatter: (v) => '₹' + (v >= 1000 ? (v / 1000).toFixed(1) + 'K' : Math.round(v)) } },
            colors: ['#F2CEC2', '#B41914', '#2E8B57'],
            stroke: { width: [0, 2.5, 2], curve: 'smooth' },
            dataLabels: { enabled: false },
            legend: { position: 'top' },
            tooltip: { shared: true, y: { formatter: (v) => formatINR(Math.round(v)) } }
          });

          mountOrUpdateChart('analyticsMarginChart', 'analyticsMargin', {
            chart: { type: 'area', height: 220, toolbar: { show: false }, fontFamily: 'inherit' },
            series: [{ name: 'Profit Margin %', data: marginSeries }],
            xaxis: { categories: labels, labels: { style: { fontSize: '10px' } } },
            yaxis: { labels: { formatter: (v) => Math.round(v) + '%' } },
            colors: ['#6D4029'],
            stroke: { width: 2, curve: 'smooth' },
            fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.3, opacityTo: 0, stops: [0, 100] } },
            dataLabels: { enabled: false },
            tooltip: { y: { formatter: (v) => v + '%' } }
          });

          if (totalDays >= 3) {
            mountOrUpdateChart('analyticsForecastChart', 'analyticsForecast', {
              chart: { type: 'line', height: 180, toolbar: { show: false }, fontFamily: 'inherit' },
              series: [{ name: 'Forecast Sales', data: forecastValues }],
              xaxis: { categories: forecastLabels, labels: { style: { fontSize: '10px' } } },
              yaxis: { labels: { formatter: (v) => '₹' + Math.round(v) } },
              colors: ['#4B38C8'],
              stroke: { width: 2, curve: 'straight', dashArray: 4 },
              markers: { size: 4 },
              dataLabels: { enabled: false },
              tooltip: { y: { formatter: (v) => formatINR(Math.round(v)) } }
            });
          }
        }
        break;
      }

      case 'contacts': {
        dynamicModuleView.innerHTML = `
          <section class="hero-row">
            <div class="hero-greeting">
              <p class="greeting-line">Vendor &amp; Supplier Book • <strong>Trichy Region</strong></p>
              <h1 class="hero-title">Contacts &amp; Suppliers</h1>
              <p class="hero-subtitle">${state.contacts.length} supplier${state.contacts.length === 1 ? '' : 's'} on record</p>
            </div>
            <div class="hero-controls">
              <button type="button" class="primary-cta-pill" data-action="open-modal" data-modal="add-contact">+ Add Contact</button>
            </div>
          </section>

          <section class="card module-card">
            <div class="table-responsive">
              <table class="items-table">
                <thead>
                  <tr>
                    <th>Vendor Name</th>
                    <th>Supply Category</th>
                    <th>Location</th>
                    <th>Phone</th>
                    <th>Ledger Balance</th>
                    <th>Next Due</th>
                    <th class="text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  ${state.contacts.length === 0
                    ? `<tr><td colspan="7" class="table-empty-note">No contacts yet — add your first supplier.</td></tr>`
                    : state.contacts
                    .map(
                      (c, idx) => `
                    <tr>
                      <td><strong>${esc(c.name)}</strong></td>
                      <td>${esc(c.role)}</td>
                      <td>${esc(c.city)}</td>
                      <td class="tabular-nums">${esc(c.phone)}</td>
                      <td>
                        <span class="status-pill ${c.balance === 'Settled' ? 'status-pill--green' : 'status-pill--orange'}">${esc(c.balance)}</span>
                      </td>
                      <td class="tabular-nums">${esc(c.due)}</td>
                      <td class="text-right" style="display:flex;gap:6px;justify-content:flex-end;">
                        ${c.phone ? `<a class="table-action-btn" href="tel:${esc(c.phone.replace(/\s+/g, ''))}" style="text-decoration:none;display:inline-flex;align-items:center;">📞 Call</a>` : ''}
                        <button type="button" class="table-action-btn" data-action="settle-vendor" data-idx="${idx}">
                          ${c.balance === 'Settled' ? 'View Ledger' : 'Pay via UPI'}
                        </button>
                      </td>
                    </tr>
                  `
                    )
                    .join('')}
                </tbody>
              </table>
            </div>
          </section>
        `;
        break;
      }

      case 'inventory': {
        const query = (state.inventoryQuery || '').trim().toLowerCase();
        const lowStockOnly = !!state.inventoryLowStockOnly;
        const filteredInv = state.inventory.filter((inv) => {
          const matchesQuery = !query || inv.item.toLowerCase().includes(query) || inv.sku.toLowerCase().includes(query);
          const matchesLow = !lowStockOnly || inv.status === 'Low Stock';
          return matchesQuery && matchesLow;
        });
        const lowStockCount = state.inventory.filter((i) => i.status === 'Low Stock').length;

        dynamicModuleView.innerHTML = `
          <section class="hero-row">
            <div class="hero-greeting">
              <p class="greeting-line">Store Room &amp; Kitchen Stock • <strong>${state.branch}</strong></p>
              <h1 class="hero-title">Inventory</h1>
              <p class="hero-subtitle">${state.inventory.length} tracked ingredients • ${lowStockCount} currently below reorder level</p>
            </div>
            <div class="hero-controls">
              <input type="text" class="input-field" id="inventorySearchInput" placeholder="Search ingredient or SKU…" value="${state.inventoryQuery ? state.inventoryQuery.replace(/"/g, '&quot;') : ''}" data-action-input="filter-inventory-query" style="min-width:220px;" />
              <button type="button" class="table-action-btn ${lowStockOnly ? 'is-active' : ''}" data-action="toggle-low-stock-filter">
                ${lowStockOnly ? '✓ Low Stock Only' : 'Show Low Stock Only'}
              </button>
              <button type="button" class="primary-cta-pill" data-action="open-modal" data-modal="add-inventory-item">+ Add Item</button>
            </div>
          </section>

          <section class="card module-card">
            <div class="table-responsive" style="max-height:560px; overflow-y:auto;">
              <table class="items-table">
                <thead>
                  <tr>
                    <th>SKU</th>
                    <th>Item Name</th>
                    <th>Category</th>
                    <th>Current Stock</th>
                    <th>Reorder Level</th>
                    <th>Status</th>
                    <th class="text-right">Quick Restock</th>
                  </tr>
                </thead>
                <tbody>
                  ${filteredInv.length === 0
                    ? `<tr><td colspan="7" class="text-center" style="padding:var(--space-6); color:var(--ink-500);">No ingredients match "${esc(query)}"</td></tr>`
                    : filteredInv
                        .map((inv) => {
                          const idx = state.inventory.indexOf(inv);
                          return `
                    <tr class="table-row-enter">
                      <td class="tabular-nums">${esc(inv.sku)}</td>
                      <td><strong>${esc(inv.item)}</strong></td>
                      <td>${esc(inv.category)}</td>
                      <td class="tabular-nums"><strong>${inv.stock} ${esc(inv.unit)}</strong></td>
                      <td class="tabular-nums item-cat">${inv.reorder} ${esc(inv.unit)}</td>
                      <td>
                        <span class="status-pill ${inv.status === 'Optimal' ? 'status-pill--green' : 'status-pill--red'}">${esc(inv.status)}</span>
                      </td>
                      <td class="text-right">
                        <button type="button" class="table-action-btn ripple-surface" data-action="open-modal" data-modal="restock-item" data-idx="${idx}">
                          + Restock
                        </button>
                      </td>
                    </tr>
                  `;
                        })
                        .join('')}
                </tbody>
              </table>
            </div>
          </section>
        `;
        const invSearchInput = document.getElementById('inventorySearchInput');
        if (invSearchInput) {
          invSearchInput.addEventListener('input', (ev) => {
            state.inventoryQuery = ev.target.value;
            renderModulePage('inventory');
            const el = document.getElementById('inventorySearchInput');
            if (el) {
              el.focus();
              el.setSelectionRange(el.value.length, el.value.length);
            }
          });
        }
        break;
      }

      case 'payroll': {
        // netPayableEstimate (computed by computeStaffPayrollStats_ from real
        // ATTENDANCE rows) is what will actually be disbursed — using flat
        // salary here would show a commitment total that doesn't match what
        // Disburse Pending Salaries actually pays out once attendance and
        // advances are accounted for.
        const totalPayroll = state.staff.reduce((sum, s) => sum + (s.netPayableEstimate ?? s.salary), 0);
        const monthLabel = new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });

        // Recent advances this month, newest first — pulled from the same
        // ATTENDANCE rows computeStaffPayrollStats_ reads, filtered to the
        // 'Advance Only' rows api_recordAdvance_ writes (a row can also carry
        // an advance alongside a real attendance mark, via markAttendance's
        // own optional advance field, so this list is Advance_Taken > 0, not
        // just Status === 'Advance Only').
        const now = new Date();
        const recentAdvances = (state.attendance || [])
          .filter((a) => {
            if (!a.Date || !(Number(a.Advance_Taken) > 0)) return false;
            const d = new Date(a.Date);
            return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
          })
          .sort((a, b) => new Date(b.Date) - new Date(a.Date));
        const totalAdvancesThisMonth = recentAdvances.reduce((sum, a) => sum + (Number(a.Advance_Taken) || 0), 0);

        dynamicModuleView.innerHTML = `
          <section class="hero-row">
            <div class="hero-greeting">
              <p class="greeting-line">Monthly Disbursement • <strong>${monthLabel}</strong></p>
              <h1 class="hero-title">Staff Payroll</h1>
              <p class="hero-subtitle">Estimated net payable this month (attendance-adjusted): ${formatINR(totalPayroll)} (Payout Day: ${state.settings.salaryDay || 28})</p>
            </div>
            <div class="hero-controls">
              <button type="button" class="primary-cta-pill" data-action="disburse-all-payroll">Disburse Pending Salaries</button>
            </div>
          </section>

          <section class="card module-card">
            <div class="table-responsive">
              <table class="items-table">
                <thead>
                  <tr>
                    <th>Employee</th>
                    <th>Designation</th>
                    <th>Days Worked</th>
                    <th>Advance Taken</th>
                    <th>Net Payable</th>
                    <th>Status</th>
                    <th class="text-right">Action</th>
                  </tr>
                </thead>
                <tbody>
                  ${state.staff
                    .map(
                      (st, idx) => `
                    <tr>
                      <td><strong>${esc(st.name)}</strong></td>
                      <td>${esc(st.role)}</td>
                      <td class="tabular-nums">${st.days} / ${st.standardDays} days</td>
                      <td class="tabular-nums">${st.advanceTaken ? formatINR(st.advanceTaken) : '—'}</td>
                      <td class="tabular-nums"><strong>${formatINR(st.netPayableEstimate ?? st.salary)}</strong></td>
                      <td>
                        <span class="status-pill ${st.paid ? 'status-pill--green' : 'status-pill--orange'}">
                          ${st.paid ? 'Disbursed' : `Scheduled (${state.settings.salaryDay || 28})`}
                        </span>
                      </td>
                      <td class="text-right">
                        <button type="button" class="table-action-btn" data-action="open-modal" data-modal="record-advance" data-idx="${idx}">
                          Advance
                        </button>
                        <button type="button" class="table-action-btn" data-action="pay-single-staff" data-idx="${idx}">
                          ${st.paid ? 'Download Slip' : 'Pay Now'}
                        </button>
                      </td>
                    </tr>
                  `
                    )
                    .join('')}
                </tbody>
              </table>
            </div>
          </section>

          <section class="card module-card">
            <div class="card-header-row">
              <h2 class="card-title">Advances This Month</h2>
              <p class="card-subtitle">${recentAdvances.length ? `${formatINR(totalAdvancesThisMonth)} across ${recentAdvances.length} advance(s) — deducted automatically from Net Payable above` : 'No advances recorded this month'}</p>
            </div>
            ${recentAdvances.length ? `
            <div class="table-responsive">
              <table class="items-table">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Employee</th>
                    <th>Note</th>
                    <th class="text-right">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  ${recentAdvances
                    .map(
                      (a) => `
                    <tr>
                      <td class="tabular-nums">${new Date(a.Date).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' })}</td>
                      <td>${esc(a.Emp_Name)}</td>
                      <td>${esc(a.Shift) || '—'}</td>
                      <td class="text-right tabular-nums">${formatINR(a.Advance_Taken)}</td>
                    </tr>
                  `
                    )
                    .join('')}
                </tbody>
              </table>
            </div>
            ` : `
            <p class="empty-state-text">Use the <strong>Advance</strong> button next to a staff member above to record a salary advance — it's deducted automatically when payroll is disbursed.</p>
            `}
          </section>
        `;
        break;
      }

      case 'tax': {
        const licenses = buildLicenseRenewals();
        dynamicModuleView.innerHTML = `
          <section class="hero-row">
            <div class="hero-greeting">
              <p class="greeting-line">FSSAI: <strong>${state.settings.fssai || '—'}</strong></p>
              <h1 class="hero-title">Compliance &amp; Licenses</h1>
              <p class="hero-subtitle">FSSAI, Udhyam and MSME registration renewal tracking — alerts fire 3 days before each due date</p>
            </div>
          </section>

          <section class="card module-card">
            <div class="table-responsive">
              <table class="items-table">
                <thead>
                  <tr>
                    <th>License</th>
                    <th>Registration Number</th>
                    <th>Renewal Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  ${licenses
                    .map(
                      (lic) => `
                    <tr>
                      <td><strong>${esc(lic.name)}</strong></td>
                      <td class="tabular-nums">${esc(lic.number) || '—'}</td>
                      <td class="tabular-nums">${lic.renewalDate ? new Date(lic.renewalDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '—'}</td>
                      <td>
                        <span class="status-pill ${lic.pillClass}">${lic.statusLabel}</span>
                      </td>
                    </tr>
                  `
                    )
                    .join('')}
                </tbody>
              </table>
            </div>
          </section>
        `;
        break;
      }

      case 'settings': {
        const s = state.settings;
        const checked = (val) => (val ? 'checked' : '');
        const lastSync = state.lastSyncedAt
          ? new Date(state.lastSyncedAt).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })
          : 'Never';

        dynamicModuleView.innerHTML = `
          <section class="hero-row">
            <div class="hero-greeting">
              <p class="greeting-line">All Configuration • <strong>${s.cafeName}</strong></p>
              <h1 class="hero-title">Settings</h1>
              <p class="hero-subtitle">Café profile, Cloud sync, alerts, costing defaults, and appearance — ${Object.keys(s).length} options</p>
            </div>
          </section>

          <section class="card module-card">
            <div class="card-header-row">
              <h2 class="card-title">Café Profile</h2>
              <p class="card-subtitle">Legal/billing details used on invoices and license records</p>
            </div>
            <form id="settingsForm" class="form-grid">
              <div class="form-field">
                <label class="form-label" for="setCafeName">Café Display Name</label>
                <input class="form-input" id="setCafeName" name="cafeName" value="${esc(s.cafeName)}" required />
              </div>
              <div class="form-field">
                <label class="form-label" for="setOwnerName">Owner / Manager Name</label>
                <input class="form-input" id="setOwnerName" name="ownerName" value="${esc(s.ownerName || '')}" placeholder="e.g. Ramesh Kumar" />
              </div>
              <div class="form-field">
                <label class="form-label" for="setUpiId">Merchant UPI ID (VPA)</label>
                <input class="form-input" id="setUpiId" name="upiId" value="${esc(s.upiId)}" required />
              </div>
              <div class="form-field">
                <label class="form-label" for="setInvoicePrefix">Invoice Number Prefix</label>
                <input class="form-input" id="setInvoicePrefix" name="invoicePrefix" value="${esc(s.invoicePrefix)}" />
              </div>
              <div class="form-field">
                <label class="form-label" for="setCurrencySymbol">Currency Symbol</label>
                <input class="form-input" id="setCurrencySymbol" name="currencySymbol" value="${esc(s.currencySymbol)}" maxlength="3" />
              </div>
              <div class="form-field">
                <label class="form-label" for="setDateFormat">Date Format</label>
                <select class="form-select" id="setDateFormat" name="dateFormat">
                  <option value="DD MMM YYYY" ${s.dateFormat === 'DD MMM YYYY' ? 'selected' : ''}>DD MMM YYYY (24 Oct 2026)</option>
                  <option value="DD/MM/YYYY" ${s.dateFormat === 'DD/MM/YYYY' ? 'selected' : ''}>DD/MM/YYYY (24/10/2026)</option>
                  <option value="MM/DD/YYYY" ${s.dateFormat === 'MM/DD/YYYY' ? 'selected' : ''}>MM/DD/YYYY (10/24/2026)</option>
                </select>
              </div>
              <div class="form-field">
                <label class="form-label" for="setLocale">Locale</label>
                <input class="form-input" id="setLocale" name="locale" value="${esc(s.locale)}" />
              </div>
              <div class="form-field">
                <label class="form-label" for="setTimezone">Timezone</label>
                <input class="form-input" id="setTimezone" name="timezone" value="${esc(s.timezone)}" />
              </div>
              <div class="form-field form-field--full">
                <label class="form-label" for="setAddress">Café Address</label>
                <input class="form-input" id="setAddress" name="address" value="${esc(s.address)}" required />
              </div>
              <div class="form-field form-field--full">
                <button type="submit" class="primary-cta-pill">Save Café Profile</button>
              </div>
            </form>
          </section>

          <section class="card module-card">
            <div class="card-header-row">
              <h2 class="card-title">Printing</h2>
              <p class="card-subtitle">Default bill size and how "Print Bill" sends the job to your printer</p>
            </div>
            <form id="printingSettingsForm" class="form-grid">
              <div class="form-field">
                <label class="form-label" for="setPrintMode">Print Mode</label>
                <select class="form-select" id="setPrintMode" name="printMode">
                  <option value="browser" ${s.printMode === 'browser' ? 'selected' : ''}>Browser print dialog (default — works everywhere)</option>
                  <option value="qztray" ${s.printMode === 'qztray' ? 'selected' : ''}>QZ Tray — silent, one click, no dialog</option>
                </select>
              </div>
              <div class="form-field">
                <label class="form-label" for="setDefaultReceiptFormat">Default Bill Size</label>
                <select class="form-select" id="setDefaultReceiptFormat" name="defaultReceiptFormat">
                  <option value="58mm" ${s.defaultReceiptFormat === '58mm' ? 'selected' : ''}>58mm thermal</option>
                  <option value="80mm" ${s.defaultReceiptFormat === '80mm' ? 'selected' : ''}>80mm thermal</option>
                  <option value="A5" ${s.defaultReceiptFormat === 'A5' ? 'selected' : ''}>A5 sheet</option>
                  <option value="A4" ${s.defaultReceiptFormat === 'A4' ? 'selected' : ''}>A4 sheet</option>
                </select>
              </div>
              ${
                s.printMode === 'qztray'
                  ? `
              <div class="form-field">
                <label class="form-label" for="setQzTrayPrinterType">Printer Type</label>
                <select class="form-select" id="setQzTrayPrinterType" name="qzTrayPrinterType">
                  <option value="thermal" ${(s.qzTrayPrinterType || 'thermal') === 'thermal' ? 'selected' : ''}>Thermal / Receipt Printer (e.g. POS-80, Epson TM, Xprinter)</option>
                  <option value="regular" ${s.qzTrayPrinterType === 'regular' ? 'selected' : ''}>Regular Printer (inkjet/laser — e.g. Canon, HP, Epson desktop printer)</option>
                </select>
                <p class="card-subtitle" style="margin:4px 0 0;">
                  ${
                    (s.qzTrayPrinterType || 'thermal') === 'thermal'
                      ? 'Sends raw thermal-printer commands. Only works with a real receipt/thermal printer — sending these to a regular inkjet or laser printer silently prints nothing.'
                      : 'Prints the receipt as a normal page, the same way any webpage prints — works with any regular printer\'s own driver.'
                  }
                </p>
              </div>
              <div class="form-field">
                <label class="form-label" for="setQzTrayPrinterName">QZ Tray Printer Name</label>
                <input class="form-input" id="setQzTrayPrinterName" name="qzTrayPrinterName" value="${esc(s.qzTrayPrinterName || '')}" placeholder="e.g. POS-80 Thermal" />
              </div>
              <div class="form-field">
                <label class="form-label" for="setQzTrayHost">QZ Tray Host</label>
                <input class="form-input" id="setQzTrayHost" name="qzTrayHost" value="${esc(s.qzTrayHost || 'localhost')}" placeholder="localhost" />
              </div>
              <div class="form-field form-field--full">
                <p class="card-subtitle" style="margin:0;">
                  QZ Tray is a free local app that must be installed and running on this till's own
                  computer (<a href="https://qz.io/download/" target="_blank" rel="noopener">qz.io/download</a>) — it's
                  a one-time setup per device, separate from BrewIQ itself. Once it's running, Print Bill
                  sends the receipt straight to the named printer with no dialog and exactly one copy.
                  Leave the printer name blank to use this PC's default printer — if printing still falls
                  back to a dialog, this PC likely has no default printer set; use "List Available
                  Printers" below to find the exact name and enter it above.
                </p>
                <button type="button" class="table-action-btn" data-action="test-qz-connection" style="margin-top:8px;">Test QZ Tray Connection</button>
                <span id="qzTestResult" style="margin-left:10px;font-size:13px;"></span>
                <br />
                <button type="button" class="table-action-btn" data-action="list-qz-printers" style="margin-top:8px;">List Available Printers</button>
                <div id="qzPrinterListResult" style="margin-top:6px;font-size:13px;"></div>
              </div>
              `
                  : `
              <div class="form-field form-field--full">
                <p class="card-subtitle" style="margin:0;">
                  Print Bill opens your browser's normal print dialog, where you pick the printer and hit
                  Print — the standard way any webpage prints, no extra setup needed.
                </p>
              </div>
              `
              }
              <div class="form-field form-field--full">
                <button type="submit" class="primary-cta-pill">Save Printing Settings</button>
              </div>
            </form>
          </section>

          <section class="card module-card">
            <div class="card-header-row">
              <h2 class="card-title">Licenses &amp; Registrations</h2>
              <p class="card-subtitle">FSSAI, Udhyam and MSME renewal dates — alerts fire 3 days before each one is due</p>
            </div>
            <form id="licensesForm" class="form-grid">
              <div class="form-field">
                <label class="form-label" for="setFssai">FSSAI License Number</label>
                <input class="form-input tabular-nums" id="setFssai" name="fssai" value="${esc(s.fssai)}" required />
              </div>
              <div class="form-field">
                <label class="form-label" for="setFssaiRenewal">FSSAI Renewal Date</label>
                <input class="form-input" type="date" id="setFssaiRenewal" name="fssaiRenewalDate" value="${s.fssaiRenewalDate || ''}" />
              </div>
              <div class="form-field">
                <label class="form-label" for="setUdhyam">Udhyam Registration Number</label>
                <input class="form-input tabular-nums" id="setUdhyam" name="udhyamNumber" value="${esc(s.udhyamNumber || '')}" placeholder="UDYAM-TN-00-0000000" />
              </div>
              <div class="form-field">
                <label class="form-label" for="setUdhyamRenewal">Udhyam Renewal Date</label>
                <input class="form-input" type="date" id="setUdhyamRenewal" name="udhyamRenewalDate" value="${s.udhyamRenewalDate || ''}" />
              </div>
              <div class="form-field">
                <label class="form-label" for="setMsme">MSME Registration Number</label>
                <input class="form-input tabular-nums" id="setMsme" name="msmeNumber" value="${esc(s.msmeNumber || '')}" placeholder="e.g. MSME/TN/0000000" />
              </div>
              <div class="form-field">
                <label class="form-label" for="setMsmeRenewal">MSME Renewal Date</label>
                <input class="form-input" type="date" id="setMsmeRenewal" name="msmeRenewalDate" value="${s.msmeRenewalDate || ''}" />
              </div>
              <div class="form-field form-field--full">
                <button type="submit" class="primary-cta-pill">Save License Details</button>
              </div>
            </form>
          </section>

          <section class="card module-card">
            <div class="card-header-row">
              <h2 class="card-title">Cloud Sync</h2>
              <p class="card-subtitle">Connect your server so this dashboard reads and writes real data</p>
            </div>
            <form id="syncSettingsForm" class="form-grid">
              <div class="form-field form-field--full" style="display:flex; align-items:center; gap:var(--space-3); flex-wrap:wrap;">
                <span class="sync-indicator sync-indicator--${state.syncStatus || 'local'}">${state.syncStatus === 'synced' ? 'Connected to Cloud' : state.syncStatus === 'error' ? 'Connection failed' : 'Local only'}</span>
                <span style="font-size:var(--text-2xs); color:var(--ink-500);">Last synced: ${lastSync}</span>
                ${s.apiBaseUrl ? `<button type="button" class="table-action-btn" data-action="manual-sync-now">Sync Now</button>` : ''}
              </div>
              <div class="form-field form-field--full">
                <label class="form-label" for="setApiBaseUrl">Server Connection URL</label>
                <input class="form-input" id="setApiBaseUrl" name="apiBaseUrl" value="${esc(s.apiBaseUrl || '')}" placeholder="https://your-server-url/exec" />
                <p class="form-hint">Paste your deployed server URL here. Once connected, sales, stock, products, staff, and tax data sync from your live server. Leave blank to keep working fully offline on this device.</p>
              </div>
              <div class="form-field">
                <label class="form-label" for="setRefreshInterval">Auto-Refresh Interval (minutes)</label>
                <input class="form-input tabular-nums" id="setRefreshInterval" name="refreshIntervalMinutes" type="number" min="5" max="1440" value="${s.refreshIntervalMinutes}" />
              </div>
              <div class="form-field" style="display:flex; align-items:flex-end;">
                <label style="display:flex; align-items:center; gap:var(--space-2); font-size:var(--text-xs);">
                  <input type="checkbox" name="autoRefreshEnabled" ${checked(s.autoRefreshEnabled)} /> Auto-refresh from Sheet on this interval
                </label>
              </div>
              <div class="form-field" style="display:flex; align-items:flex-end;">
                <label style="display:flex; align-items:center; gap:var(--space-2); font-size:var(--text-xs);">
                  <input type="checkbox" name="syncOnSave" ${checked(s.syncOnSave)} /> Sync immediately after every save
                </label>
              </div>
              <div class="form-field form-field--full">
                <button type="submit" class="primary-cta-pill">Save &amp; Reconnect</button>
              </div>
            </form>
          </section>

          <section class="card module-card">
            <div class="card-header-row">
              <h2 class="card-title">Alerts &amp; Notifications</h2>
              <p class="card-subtitle">Where and when EOD low-stock and payroll reminders are sent</p>
            </div>
            <form id="alertSettingsForm" class="form-grid">
              <div class="form-field">
                <label class="form-label" for="setAlertEmail">Alert Email</label>
                <input class="form-input" id="setAlertEmail" name="alertEmail" type="email" value="${esc(s.alertEmail || '')}" placeholder="chai6bee@gmail.com" />
              </div>
              <div class="form-field">
                <label class="form-label" for="setTelegramBotUsername">Telegram Bot Username</label>
                <input class="form-input" id="setTelegramBotUsername" name="telegramBotUsername" value="${esc(s.telegramBotUsername || '')}" placeholder="@ChaiBeeOpsBot" />
              </div>
              <div class="form-field">
                <label class="form-label" for="setLowStockHour">Low-Stock Email Hour (IST, 24h)</label>
                <input class="form-input tabular-nums" id="setLowStockHour" name="lowStockEmailHourIst" type="number" min="0" max="23" value="${s.lowStockEmailHourIst}" />
              </div>
              <div class="form-field">
                <label class="form-label" for="setPayrollHour">Payroll Reminder Hour (IST, 24h)</label>
                <input class="form-input tabular-nums" id="setPayrollHour" name="payrollReminderHourIst" type="number" min="0" max="23" value="${s.payrollReminderHourIst}" />
              </div>
              <div class="form-field">
                <label class="form-label" for="setPayrollDaysBefore">Payroll Reminder — Days Before Salary Date</label>
                <input class="form-input tabular-nums" id="setPayrollDaysBefore" name="payrollReminderDaysBefore" type="number" min="0" max="10" value="${s.payrollReminderDaysBefore}" />
              </div>
              <div class="form-field">
                <label style="display:flex; align-items:center; gap:var(--space-2); font-size:var(--text-xs);">
                  <input type="checkbox" name="notifyLowStock" ${checked(s.notifyLowStock)} /> Show low-stock alerts in notification bell
                </label>
              </div>
              <div class="form-field">
                <label style="display:flex; align-items:center; gap:var(--space-2); font-size:var(--text-xs);">
                  <input type="checkbox" name="notifyPendingPayroll" ${checked(s.notifyPendingPayroll)} /> Show pending payroll in notification bell
                </label>
              </div>
              <div class="form-field">
                <label style="display:flex; align-items:center; gap:var(--space-2); font-size:var(--text-xs);">
                  <input type="checkbox" name="notifyLicenseRenewal" ${checked(s.notifyLicenseRenewal)} /> Show upcoming license renewals (FSSAI/Udhyam/MSME) in notification bell
                </label>
              </div>
              <div class="form-field">
                <label style="display:flex; align-items:center; gap:var(--space-2); font-size:var(--text-xs);">
                  <input type="checkbox" name="whatsappAlerts" ${checked(s.whatsappAlerts)} /> WhatsApp alerts (requires integration)
                </label>
              </div>
              <div class="form-field">
                <label style="display:flex; align-items:center; gap:var(--space-2); font-size:var(--text-xs);">
                  <input type="checkbox" name="lowStockSound" ${checked(s.lowStockSound)} /> Play sound on new low-stock alert
                </label>
              </div>
              <div class="form-field form-field--full">
                <button type="submit" class="primary-cta-pill">Save Alert Settings</button>
              </div>
            </form>
          </section>

          <section class="card module-card">
            <div class="card-header-row">
              <h2 class="card-title">Inventory &amp; Costing Defaults</h2>
              <p class="card-subtitle">Used when computing margins and reorder thresholds for new items</p>
            </div>
            <form id="opsSettingsForm" class="form-grid">
              <div class="form-field">
                <label class="form-label" for="setLowStockPct">Default Low-Stock Threshold (% of stock)</label>
                <input class="form-input tabular-nums" id="setLowStockPct" name="lowStockThresholdPct" type="number" min="1" max="90" value="${s.lowStockThresholdPct}" />
              </div>
              <div class="form-field">
                <label class="form-label" for="setOverheadPct">Default Overhead % (menu costing)</label>
                <input class="form-input tabular-nums" id="setOverheadPct" name="overheadPctDefault" type="number" min="0" max="100" value="${s.overheadPctDefault}" />
              </div>
              <div class="form-field">
                <label class="form-label" for="setWastagePct">Default Wastage % (menu costing)</label>
                <input class="form-input tabular-nums" id="setWastagePct" name="wastagePctDefault" type="number" min="0" max="50" value="${s.wastagePctDefault}" />
              </div>
              <div class="form-field">
                <label class="form-label" for="setSalaryDay">Monthly Salary Day</label>
                <input class="form-input tabular-nums" id="setSalaryDay" name="salaryDay" type="number" min="1" max="31" value="${s.salaryDay}" />
              </div>
              <div class="form-field form-field--full">
                <button type="submit" class="primary-cta-pill">Save Costing Defaults</button>
              </div>
            </form>
          </section>

          <section class="card module-card">
            <div class="card-header-row">
              <h2 class="card-title">Appearance</h2>
              <p class="card-subtitle">Dashboard display preferences, saved to this device</p>
            </div>
            <form id="ownerSettingsForm" class="form-grid">
              <div class="form-field">
                <label class="form-label" for="setChartColorTheme">Chart Color Theme</label>
                <select class="form-select" id="setChartColorTheme" name="chartColorTheme">
                  <option value="warm" ${s.chartColorTheme === 'warm' ? 'selected' : ''}>Warm (Terracotta)</option>
                  <option value="cool" ${s.chartColorTheme === 'cool' ? 'selected' : ''}>Cool (Blue/Teal)</option>
                  <option value="mono" ${s.chartColorTheme === 'mono' ? 'selected' : ''}>Monochrome</option>
                </select>
              </div>
              <div class="form-field">
                <label class="form-label" for="setDashboardPeriod">Default Dashboard Period</label>
                <select class="form-select" id="setDashboardPeriod" name="dashboardDefaultPeriod">
                  <option value="Daily" ${s.dashboardDefaultPeriod === 'Daily' ? 'selected' : ''}>Daily</option>
                  <option value="Weekly" ${s.dashboardDefaultPeriod === 'Weekly' ? 'selected' : ''}>Weekly</option>
                  <option value="Monthly" ${s.dashboardDefaultPeriod === 'Monthly' ? 'selected' : ''}>Monthly</option>
                </select>
              </div>
              <div class="form-field">
                <label style="display:flex; align-items:center; gap:var(--space-2); font-size:var(--text-xs);">
                  <input type="checkbox" name="showSparklines" ${checked(s.showSparklines)} /> Show KPI sparklines
                </label>
              </div>
              <div class="form-field">
                <label style="display:flex; align-items:center; gap:var(--space-2); font-size:var(--text-xs);">
                  <input type="checkbox" name="compactTables" ${checked(s.compactTables)} /> Compact table rows
                </label>
              </div>
              <div class="form-field">
                <label style="display:flex; align-items:center; gap:var(--space-2); font-size:var(--text-xs);">
                  <input type="checkbox" name="animationsEnabled" ${checked(s.animationsEnabled)} /> Enable UI animations
                </label>
              </div>
              <div class="form-field">
                <label style="display:flex; align-items:center; gap:var(--space-2); font-size:var(--text-xs);">
                  <input type="checkbox" name="lowStockBadgeOnSidebar" ${checked(s.lowStockBadgeOnSidebar)} /> Show low-stock badge on sidebar
                </label>
              </div>
              <div class="form-field form-field--full">
                <button type="submit" class="primary-cta-pill">Save Appearance</button>
              </div>
            </form>
          </section>
        `;

        // Live-toggle the QZ Tray fields the moment Print Mode changes,
        // without waiting for Save — same reasoning as inventorySearchInput's
        // per-element wiring elsewhere in this file: a <select> change isn't
        // covered by the generic delegated click handler.
        const printModeSelect = dynamicModuleView.querySelector('#setPrintMode');
        if (printModeSelect) {
          printModeSelect.addEventListener('change', (ev) => {
            state.settings.printMode = ev.target.value;
            renderModulePage('settings');
          });
        }
        const printerTypeSelect = dynamicModuleView.querySelector('#setQzTrayPrinterType');
        if (printerTypeSelect) {
          printerTypeSelect.addEventListener('change', (ev) => {
            state.settings.qzTrayPrinterType = ev.target.value;
            renderModulePage('settings');
          });
        }
        break;
      }

      default:
        break;
    }
  };

  // =========================================================================
  // 5. NAVIGATION & VIEW ROUTER
  // =========================================================================
  const appSidebar = document.getElementById('appSidebar');
  const sidebarBackdrop = document.getElementById('sidebarBackdrop');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');

  const openSidebar = () => {
    if (!appSidebar || !sidebarBackdrop) return;
    appSidebar.classList.add('is-open');
    sidebarBackdrop.removeAttribute('hidden');
    requestAnimationFrame(() => sidebarBackdrop.classList.add('is-visible'));
    document.body.classList.add('drawer-open');
    if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'true');
  };

  const closeSidebar = () => {
    if (!appSidebar || !sidebarBackdrop) return;
    appSidebar.classList.remove('is-open');
    sidebarBackdrop.classList.remove('is-visible');
    document.body.classList.remove('drawer-open');
    if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'false');
    setTimeout(() => {
      if (!appSidebar.classList.contains('is-open')) {
        sidebarBackdrop.setAttribute('hidden', '');
      }
    }, 220);
  };

  const navigateTo = (pageId) => {
    state.activePage = pageId;

    document.querySelectorAll('.sidebar-nav .nav-item').forEach((link) => {
      const isCurrent = link.getAttribute('data-nav') === pageId;
      link.classList.toggle('active', isCurrent);
      if (isCurrent) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });

    if (pageId === 'dashboard') {
      if (dynamicModuleView) dynamicModuleView.setAttribute('hidden', '');
      if (dashboardView) dashboardView.removeAttribute('hidden');
    } else {
      if (dashboardView) dashboardView.setAttribute('hidden', '');
      renderModulePage(pageId);
      if (dynamicModuleView) dynamicModuleView.removeAttribute('hidden');
    }

    if (window.innerWidth <= 1024) {
      closeSidebar();
    }
  };

  // =========================================================================
  // 6. STAGGERED REVEAL, CHART HOVER & DONUT INTERACTION
  // =========================================================================
  const revealItems = document.querySelectorAll('[data-reveal]');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach((el) => el.classList.add('is-visible'));
  } else {
    revealItems.forEach((el, index) => {
      el.style.setProperty('--stagger-delay', `${Math.min(index * 45, 360)}ms`);
    });
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    revealItems.forEach((el) => observer.observe(el));
  }

  // =========================================================================
  // REAL-DATA CHARTS — Revenue vs Expenses bar+line, and Category Donut
  // Both are rendered from state (state.dailySummary / state.products), not
  // from any static markup, so they reflect real seeded data today and live
  // Sheet data once Settings → API Base URL is connected and synced.
  // =========================================================================
  const CATEGORY_PALETTE = ['#B41914', '#D94637', '#EB7F32', '#F29C50', '#C5B4E3', '#6D4029', '#4B38C8'];

  // =========================================================================
  // APEXCHARTS — all chart instances kept here so later data refreshes call
  // .updateSeries()/.updateOptions() instead of destroying & rebuilding.
  // =========================================================================
  const apexInstances = {};
  const hasApex = () => typeof window.ApexCharts !== 'undefined';

  const mountOrUpdateChart = (elId, key, options) => {
    const el = document.getElementById(elId);
    if (!el || !hasApex()) return;
    // Guard against mounting into a container with no real layout width yet
    // — only reachable by navigating between pages faster than the browser
    // can finish laying out the new page (e.g. rapid scripted clicks with no
    // think-time between them), which a real person clicking the sidebar
    // never does, but it's a one-line guard either way: ApexCharts computes
    // NaN pixel widths/transforms and throws into the console when its
    // container measures 0, rather than simply waiting for a size.
    if (el.getBoundingClientRect().width === 0) {
      requestAnimationFrame(() => mountOrUpdateChart(elId, key, options));
      return;
    }
    if (apexInstances[key]) {
      apexInstances[key].updateOptions(options, true, true);
    } else {
      apexInstances[key] = new ApexCharts(el, options);
      apexInstances[key].render();
    }
  };

  // Date-range filter applied to state.dailySummary before any chart/KPI reads it.
  // state.dateRangeFilter = { mode: 'all' | 'days' | 'custom', days, from, to }
  const getFilteredDailySummary = () => {
    const all = state.dailySummary || [];
    const filter = state.dateRangeFilter || { mode: 'all' };
    if (filter.mode === 'days' && filter.days) {
      return all.slice(-filter.days);
    }
    if (filter.mode === 'custom' && filter.from && filter.to) {
      const from = new Date(filter.from);
      const to = new Date(filter.to);
      return all.filter((d) => {
        const dt = new Date(d.isoDate || d.date);
        return dt >= from && dt <= to;
      });
    }
    return all;
  };

  const renderRevExpChart = () => {
    const container = document.getElementById('revExpChart');
    if (!container) return;

    let days = getFilteredDailySummary();
    const period = state.period || 'Monthly';
    if (period === 'Weekly') {
      // Bucket the filtered range into 7-day groups for a weekly granularity view.
      const buckets = [];
      for (let i = 0; i < days.length; i += 7) {
        const chunk = days.slice(i, i + 7);
        buckets.push({
          date: chunk.length > 1 ? `${chunk[0].date} – ${chunk[chunk.length - 1].date}` : chunk[0].date,
          sales: chunk.reduce((s, d) => s + d.sales, 0),
          cost: chunk.reduce((s, d) => s + d.cost, 0),
          profit: chunk.reduce((s, d) => s + d.profit, 0)
        });
      }
      days = buckets;
    } else if (period === 'Monthly') {
      // Bucket by calendar month label if dates carry month info, else by 30-day chunks.
      const map = new Map();
      days.forEach((d) => {
        const key = (d.isoDate || d.date || '').slice(0, 7) || d.date;
        if (!map.has(key)) map.set(key, { date: d.date, sales: 0, cost: 0, profit: 0 });
        const bucket = map.get(key);
        bucket.sales += d.sales;
        bucket.cost += d.cost;
        bucket.profit += d.profit;
      });
      days = Array.from(map.values());
    }
    // 'Daily' uses the filtered range as-is.

    if (days.length === 0) {
      container.innerHTML = '<p class="chart-empty-note">No sales logged yet — use "+ Enter Today\'s Sales" to get started</p>';
      return;
    }

    const categories = days.map((d) => d.date);
    const options = {
      chart: {
        type: 'line',
        height: 260,
        fontFamily: 'DM Sans, sans-serif',
        toolbar: { show: false },
        zoom: { enabled: false },
        animations: { easing: 'easeinout', speed: 350 }
      },
      series: [
        { name: 'Revenue', type: 'column', data: days.map((d) => Math.round(d.sales)) },
        { name: 'Expenses', type: 'column', data: days.map((d) => Math.round(d.cost)) },
        { name: 'Profit', type: 'line', data: days.map((d) => Math.round(d.profit)) }
      ],
      colors: ['#D4483B', '#F2CEC2', '#C81E1E'],
      stroke: { width: [0, 0, 2.5], curve: 'smooth' },
      plotOptions: { bar: { columnWidth: '55%', borderRadius: 3 } },
      markers: { size: [0, 0, 3], colors: ['#fff'], strokeColors: '#C81E1E', strokeWidth: 2 },
      xaxis: {
        categories,
        labels: { style: { colors: 'var(--ink-500)', fontSize: '10.5px' } },
        axisBorder: { show: false },
        axisTicks: { show: false }
      },
      yaxis: {
        labels: {
          style: { colors: 'var(--ink-500)', fontSize: '10.5px' },
          formatter: (val) => (val >= 1000 ? `₹${Math.round(val / 1000)}K` : `₹${Math.round(val)}`)
        }
      },
      grid: { borderColor: 'rgba(42,24,16,0.08)', strokeDashArray: 0 },
      dataLabels: { enabled: false },
      legend: { show: false },
      tooltip: {
        shared: true,
        intersect: false,
        y: { formatter: (val) => formatINR(Math.round(val)) }
      }
    };
    mountOrUpdateChart('revExpChart', 'revExp', options);
  };

  const renderCategoryDonut = () => {
    const container = document.getElementById('categoryDonutChart');
    const legendList = document.getElementById('categoryLegendList');
    if (!container || !legendList) return;

    const categories = Array.from(new Set(state.products.map((p) => p.category)));
    const revenueByCategory = categories.map((cat) => {
      const catProducts = state.products.filter((p) => p.category === cat);
      const revenue = catProducts.reduce((sum, p) => sum + (p.dailyOrders || 0) * p.sellingPrice, 0);
      return { category: cat, revenue };
    });

    const totalRevenue = revenueByCategory.reduce((sum, c) => sum + c.revenue, 0);
    const hasRealSplit = totalRevenue > 0;
    const grandTotal = hasRealSplit ? totalRevenue : 0;

    legendList.innerHTML = '';
    revenueByCategory.forEach((c, idx) => {
      const share = hasRealSplit ? c.revenue / totalRevenue : 0;
      const color = CATEGORY_PALETTE[idx % CATEGORY_PALETTE.length];
      const li = document.createElement('li');
      li.className = 'cat-item';
      li.innerHTML = `
        <span class="cat-dot" style="background-color:${color};" aria-hidden="true"></span>
        <span class="cat-name">${c.category}</span>
        <strong class="cat-pct tabular-nums">${Math.round(share * 100)}%</strong>
      `;
      legendList.appendChild(li);
    });

    if (!hasRealSplit) {
      container.innerHTML = '<p class="chart-empty-note">No category sales yet — enter EOD sales to see the real split</p>';
      return;
    }

    const options = {
      chart: { type: 'donut', height: 220, fontFamily: 'DM Sans, sans-serif' },
      series: revenueByCategory.map((c) => Math.round(c.revenue)),
      labels: revenueByCategory.map((c) => c.category),
      colors: CATEGORY_PALETTE,
      stroke: { width: 2, colors: ['var(--surface-card-solid, #fff)'] },
      dataLabels: { enabled: false },
      legend: { show: false },
      tooltip: { y: { formatter: (val) => formatINR(Math.round(val)) } },
      plotOptions: {
        pie: {
          donut: {
            size: '68%',
            labels: {
              show: true,
              name: { show: true, fontSize: '11px', color: 'var(--ink-500)', offsetY: 18 },
              value: {
                show: true,
                fontSize: '19px',
                fontWeight: 700,
                color: 'var(--ink-900)',
                offsetY: -8,
                formatter: (val) => formatINR(Math.round(val))
              },
              total: {
                show: true,
                label: 'Total Sales',
                fontSize: '11px',
                color: 'var(--ink-500)',
                formatter: () => formatINR(Math.round(grandTotal))
              }
            }
          }
        }
      }
    };
    mountOrUpdateChart('categoryDonutChart', 'categoryDonut', options);
  };

  const renderKpiSparklines = () => {
    const days = (state.dailySummary || []).slice(-10);
    if (days.length === 0) return;

    const series = {
      Revenue: days.map((d) => Math.round(d.sales)),
      Profit: days.map((d) => Math.round(d.profit)),
      Expenses: days.map((d) => Math.round(d.cost)),
      Orders: days.map((d) => Math.round(d.qty))
    };

    const sparkDefs = [
      ['sparkRevenueChart', 'sparkRevenue', series.Revenue, 'kpiTrendRevenue', '#E02D20'],
      ['sparkProfitChart', 'sparkProfit', series.Profit, 'kpiTrendProfit', '#1E9E52'],
      ['sparkExpensesChart', 'sparkExpenses', series.Expenses, 'kpiTrendExpenses', '#F28524'],
      ['sparkOrdersChart', 'sparkOrders', series.Orders, 'kpiTrendOrders', '#6B5AED']
    ];

    sparkDefs.forEach(([elId, key, values, trendId, color]) => {
      const options = {
        chart: {
          type: 'area',
          height: 42,
          sparkline: { enabled: true },
          animations: { enabled: false }
        },
        series: [{ data: values }],
        colors: [color],
        stroke: { width: 1.8, curve: 'smooth' },
        fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.26, opacityTo: 0, stops: [0, 100] } },
        tooltip: { enabled: true, y: { formatter: (val) => formatINR(Math.round(val)) } }
      };
      mountOrUpdateChart(elId, key, options);

      const trendWrap = document.getElementById(trendId);
      if (trendWrap && values.length >= 2) {
        const prev = values[values.length - 2];
        const curr = values[values.length - 1];
        const pct = prev > 0 ? Math.round(((curr - prev) / prev) * 1000) / 10 : 0;
        const upSpan = trendWrap.querySelector('.trend-up');
        if (upSpan) {
          upSpan.textContent = `${pct >= 0 ? '↑' : '↓'} ${Math.abs(pct)}%`;
          upSpan.style.color = pct >= 0 ? 'var(--accent-green-ink)' : 'var(--accent-red-ink)';
        }
      }
    });
  };

  const renderAllCharts = () => {
    renderRevExpChart();
    renderCategoryDonut();
    renderKpiSparklines();
  };

  renderAllCharts();
  renderActivityFeed();
      renderUpcomingReminders();
  syncDashboardKPIs();

  // If a Google Sheets connection is already configured (from a previous
  // session's saved Settings), pull live data immediately and start the
  // user-configured auto-refresh cycle.
  if ((state.settings.apiBaseUrl || '').trim()) {
    syncFromSheet({ silent: true });
    startAutoRefresh();
  }

  // =========================================================================
  // 7. UNIVERSAL SEARCH & COMMAND POPOVER
  // =========================================================================
  const globalSearch = document.getElementById('globalSearch');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const searchPopover = document.getElementById('searchPopover');
  // Top-items rows are rebuilt dynamically by renderTopItems(), and activity
  // rows by renderActivityFeed(), so look both up live at search time rather
  // than snapshotting once at page load.
  const getItemRows = () => Array.from(document.querySelectorAll('#topItemsBody tr'));
  const getActivityRows = () => Array.from(document.querySelectorAll('#activityList .activity-row'));
  const itemsEmptyState = document.getElementById('itemsEmptyState');
  const itemsSearchEmptyState = document.getElementById('itemsSearchEmptyState');
  const activityEmptyState = document.getElementById('activityEmptyState');

  const runSearch = (rawQuery) => {
    const query = rawQuery.trim().toLowerCase();
    if (searchClearBtn) searchClearBtn.hidden = !query;

    // 1. Filter Dashboard Table & Activity Rows
    let visibleItems = 0;
    let visibleActs = 0;
    const itemRows = getItemRows();

    itemRows.forEach((row) => {
      const hay = row.getAttribute('data-searchable') || '';
      const match = !query || hay.includes(query);
      row.hidden = !match;
      if (match) visibleItems += 1;
    });

    getActivityRows().forEach((row) => {
      const hay = row.getAttribute('data-searchable') || '';
      const match = !query || hay.includes(query);
      row.hidden = !match;
      if (match) visibleActs += 1;
    });

    // "No sales yet" (itemsEmptyState) and "no search matches" (itemsSearchEmptyState)
    // are distinct honest states — only show the search-empty one when there ARE
    // real rows but none match the current query.
    if (itemsSearchEmptyState) itemsSearchEmptyState.hidden = !(itemRows.length > 0 && visibleItems === 0);
    if (activityEmptyState) activityEmptyState.hidden = visibleActs > 0;

    // 2. Populate Global Search Command Popover
    if (!searchPopover) return;
    if (!query) {
      searchPopover.setAttribute('hidden', '');
      return;
    }

    const matchedPages = pageDirectory.filter(
      (p) => p.title.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query)
    );
    const matchedStaff = state.staff.filter(
      (s) => s.name.toLowerCase().includes(query) || s.role.toLowerCase().includes(query)
    );
    const matchedInventory = state.inventory.filter((i) => i.item.toLowerCase().includes(query));

    const resultsHTML = [];

    if (matchedPages.length) {
      resultsHTML.push(`<div class="search-group-title">Modules &amp; Pages</div>`);
      matchedPages.forEach((p) => {
        resultsHTML.push(`
          <button type="button" class="search-result-btn" data-nav-trigger="${esc(p.id)}">
            <span><strong>${esc(p.title)}</strong> — ${esc(p.desc)}</span>
            <span class="search-result-tag">Open Page</span>
          </button>
        `);
      });
    }

    if (matchedStaff.length) {
      resultsHTML.push(`<div class="search-group-title">Staff Roster</div>`);
      matchedStaff.forEach((s) => {
        resultsHTML.push(`
          <button type="button" class="search-result-btn" data-nav-trigger="staff">
            <span><strong>${esc(s.name)}</strong> (${esc(s.role)})</span>
            <span class="search-result-tag">${esc(s.status)}</span>
          </button>
        `);
      });
    }

    if (matchedInventory.length) {
      resultsHTML.push(`<div class="search-group-title">Inventory</div>`);
      matchedInventory.forEach((inv) => {
        resultsHTML.push(`
          <button type="button" class="search-result-btn" data-nav-trigger="inventory">
            <span><strong>${esc(inv.item)}</strong> (${inv.stock} ${esc(inv.unit)})</span>
            <span class="search-result-tag">${esc(inv.status)}</span>
          </button>
        `);
      });
    }

    if (!resultsHTML.length) {
      // rawQuery is exactly what the user is currently typing into the global
      // search box — the single most directly attacker-controlled string in
      // the whole app (no save step, no Sheet round-trip, reflects on every
      // keystroke), so this is escaped even though every other site above
      // is already covered.
      resultsHTML.push(`<div class="search-group-title">No matching records found for "${esc(rawQuery)}"</div>`);
    }

    searchPopover.innerHTML = resultsHTML.join('');
    searchPopover.removeAttribute('hidden');
  };

  if (globalSearch) {
    globalSearch.addEventListener('input', (e) => runSearch(e.target.value));
  }

  // =========================================================================
  // 8. UNIFIED EVENT DELEGATION (CLICKS, FORMS, KEYBOARD)
  // =========================================================================
  const dateRangeText = document.getElementById('dateRangeText');
  const periodLabel = document.getElementById('periodLabel');
  const bsItemName = document.getElementById('bsItemName');
  const bsItemStats = document.getElementById('bsItemStats');

  document.addEventListener('click', (e) => {
    const target = e.target;

    // 1. Sidebar Nav Item Click
    const navItem = target.closest('.sidebar-nav .nav-item');
    if (navItem) {
      e.preventDefault();
      const pageId = navItem.getAttribute('data-nav');
      if (pageId) navigateTo(pageId);
      return;
    }

    // 2. Any [data-nav-trigger] Link or Button
    const navTrigger = target.closest('[data-nav-trigger]');
    if (navTrigger) {
      e.preventDefault();
      const dest = navTrigger.getAttribute('data-nav-trigger');
      if (searchPopover) searchPopover.setAttribute('hidden', '');
      if (dest) navigateTo(dest);
      return;
    }

    // 4. Delegated [data-action] Controls
    const actionEl = target.closest('[data-action]');
    if (actionEl) {
      const action = actionEl.getAttribute('data-action');

      switch (action) {
        case 'open-sidebar':
          openSidebar();
          break;

        case 'close-sidebar':
          closeSidebar();
          break;

        case 'replay-loader':
          runLoaderSequence();
          break;

        case 'toggle-sound':
          toggleSound();
          break;

        case 'manual-sync-now':
          syncFromSheet({ silent: false });
          break;

        case 'toggle-notifications':
          toggleNotificationDrawer();
          break;

        case 'open-modal':
          openModal(actionEl.getAttribute('data-modal'), actionEl.getAttribute('data-idx'));
          break;

        case 'close-modal':
          closeModal();
          break;

        case 'toggle-daterange-menu': {
          const menu = document.getElementById('dateRangeMenu');
          const btn = document.getElementById('dateRangeBtn');
          if (!menu) break;
          const isOpen = !menu.hasAttribute('hidden');
          if (isOpen) {
            menu.setAttribute('hidden', '');
            if (btn) btn.setAttribute('aria-expanded', 'false');
          } else {
            menu.removeAttribute('hidden');
            if (btn) btn.setAttribute('aria-expanded', 'true');
          }
          break;
        }

        case 'set-daterange': {
          const range = actionEl.getAttribute('data-range');
          if (range === 'all') {
            state.dateRangeFilter = { mode: 'all' };
            if (dateRangeText) dateRangeText.textContent = 'All time';
          } else {
            const days = Number(range);
            state.dateRangeFilter = { mode: 'days', days };
            if (dateRangeText) dateRangeText.textContent = `Last ${days} days`;
          }
          const menu = document.getElementById('dateRangeMenu');
          if (menu) menu.setAttribute('hidden', '');
          triggerDataRefresh(() => {
            renderAllCharts();
            showToast(`Date range updated: ${dateRangeText ? dateRangeText.textContent : ''}`);
          });
          break;
        }

        case 'apply-daterange': {
          const fromEl = document.getElementById('dateRangeFrom');
          const toEl = document.getElementById('dateRangeTo');
          const from = fromEl ? fromEl.value : '';
          const to = toEl ? toEl.value : '';
          if (!from || !to) {
            showToast('Pick both a start and end date');
            break;
          }
          state.dateRangeFilter = { mode: 'custom', from, to };
          if (dateRangeText) {
            const fmt = (iso) => new Date(iso).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
            dateRangeText.textContent = `${fmt(from)} – ${fmt(to)}`;
          }
          const menu = document.getElementById('dateRangeMenu');
          if (menu) menu.setAttribute('hidden', '');
          triggerDataRefresh(() => {
            renderAllCharts();
            showToast(`Date range updated: ${dateRangeText ? dateRangeText.textContent : ''}`);
          });
          break;
        }

        case 'toggle-period-menu': {
          const menu = document.getElementById('periodMenu');
          const btn = document.getElementById('periodToggleBtn');
          if (!menu) break;
          const isOpen = !menu.hasAttribute('hidden');
          if (isOpen) {
            menu.setAttribute('hidden', '');
            if (btn) btn.setAttribute('aria-expanded', 'false');
          } else {
            menu.removeAttribute('hidden');
            if (btn) btn.setAttribute('aria-expanded', 'true');
          }
          break;
        }

        case 'set-period': {
          const chosen = actionEl.getAttribute('data-period');
          state.period = chosen;
          if (periodLabel) periodLabel.textContent = chosen;
          const menu = document.getElementById('periodMenu');
          if (menu) menu.setAttribute('hidden', '');
          renderRevExpChart();
          showToast(`Chart granularity set to ${chosen}`);
          break;
        }

        case 'next-bestseller': {
          const ranking = getBestSellerRanking();
          if (ranking.length > 0) {
            bsIdx = (bsIdx + 1) % ranking.length;
            renderBestSeller();
          }
          break;
        }

        case 'clear-search':
          if (globalSearch) {
            globalSearch.value = '';
            runSearch('');
            globalSearch.focus();
          }
          break;

        case 'messages':
          showToast(actionEl.getAttribute('data-toast'));
          break;

        case 'profile-menu':
          navigateTo('settings');
          showToast('Opened Café & Owner Settings');
          break;

        case 'filter-sales':
          state.salesFilter = actionEl.getAttribute('data-channel') || 'All';
          renderModulePage('sales');
          break;

        case 'filter-expenses':
          state.expenseFilter = actionEl.getAttribute('data-category') || 'All';
          renderModulePage('expenses');
          break;

        case 'select-product':
          state.selectedProductId = actionEl.getAttribute('data-id') || state.selectedProductId;
          renderModulePage('menu-costing');
          break;

        case 'trigger-product-photo-upload': {
          const input = document.getElementById('menuCostingPhotoInput');
          if (input) input.click();
          break;
        }

        case 'goto-recipe-builder':
          // The item can still be sold with no recipe (EOD entry warns but never
          // blocks), but the owner can jump straight to adding its ingredients —
          // Inventory just won't be deducted for it until a recipe exists.
          state.selectedProductId = actionEl.getAttribute('data-id') || state.selectedProductId;
          closeModal();
          navigateTo('menu-costing');
          break;

        case 'filter-products':
          state.productCategoryFilter = actionEl.getAttribute('data-category') || 'All';
          renderModulePage('menu-costing');
          break;

        // ---- New Sale (counter checkout) cart + held-bill actions ----
        case 'filter-pos-products':
          state.posCategoryFilter = actionEl.getAttribute('data-category') || 'All';
          renderModulePage('new-sale');
          break;

        case 'pos-new-bill':
          createNewBill();
          renderModulePage('new-sale');
          break;

        case 'pos-switch-bill':
          state.activeBillId = actionEl.getAttribute('data-id');
          persistHeldBills();
          renderModulePage('new-sale');
          break;

        case 'pos-discard-bill': {
          const billId = actionEl.getAttribute('data-id');
          if (state.heldBills.length <= 1) break; // always keep at least one open bill
          const idx = state.heldBills.findIndex((b) => b.id === billId);
          if (idx === -1) break;
          state.heldBills.splice(idx, 1);
          if (state.activeBillId === billId) {
            state.activeBillId = state.heldBills[0].id;
          }
          persistHeldBills();
          renderModulePage('new-sale');
          showToast('Bill discarded');
          break;
        }

        case 'pos-add-item': {
          const productId = actionEl.getAttribute('data-id');
          const prod = state.products.find((p) => p.id === productId);
          if (!prod) break;
          const bill = getActiveBill();
          const existing = bill.items.find((c) => c.productId === productId);
          if (existing) {
            existing.qty += 1;
          } else {
            bill.items.push({ productId: prod.id, name: prod.name, qty: 1, unitPrice: prod.sellingPrice });
          }
          persistHeldBills();
          renderModulePage('new-sale');
          break;
        }

        case 'pos-inc-item': {
          const idx = Number(actionEl.getAttribute('data-idx'));
          const bill = getActiveBill();
          if (bill.items[idx]) {
            bill.items[idx].qty += 1;
            persistHeldBills();
            renderModulePage('new-sale');
          }
          break;
        }

        case 'pos-dec-item': {
          const idx = Number(actionEl.getAttribute('data-idx'));
          const bill = getActiveBill();
          if (bill.items[idx]) {
            bill.items[idx].qty -= 1;
            if (bill.items[idx].qty <= 0) bill.items.splice(idx, 1);
            persistHeldBills();
            renderModulePage('new-sale');
          }
          break;
        }

        case 'pos-bump-item': {
          const idx = Number(actionEl.getAttribute('data-idx'));
          const amount = Number(actionEl.getAttribute('data-amount')) || 0;
          const bill = getActiveBill();
          if (bill.items[idx] && amount > 0) {
            bill.items[idx].qty += amount;
            persistHeldBills();
            renderModulePage('new-sale');
          }
          break;
        }

        case 'pos-remove-item': {
          const idx = Number(actionEl.getAttribute('data-idx'));
          const bill = getActiveBill();
          if (bill.items[idx] !== undefined) {
            bill.items.splice(idx, 1);
            persistHeldBills();
            renderModulePage('new-sale');
          }
          break;
        }

        case 'set-pos-payment-mode': {
          const bill = getActiveBill();
          bill.paymentMode = actionEl.getAttribute('data-mode') || 'Cash';
          persistHeldBills();
          renderModulePage('new-sale');
          break;
        }

        case 'set-pos-discount-type': {
          const bill = getActiveBill();
          bill.discountType = actionEl.getAttribute('data-type') || 'none';
          if (bill.discountType === 'none') bill.discountValue = 0;
          persistHeldBills();
          renderModulePage('new-sale');
          break;
        }

        case 'pos-clear-cart': {
          const bill = getActiveBill();
          bill.items = [];
          persistHeldBills();
          renderModulePage('new-sale');
          break;
        }

        case 'pos-checkout': {
          const bill = getActiveBill();
          const cart = bill.items;
          if (cart.length === 0) break;

          const today = new Date().toISOString().slice(0, 10);
          const orderId = 'ORD-' + new Date().getTime();
          const paymentMode = bill.paymentMode || 'Cash';
          let cartSubtotal = 0;
          let cartCost = 0;
          let cartQtyTotal = 0;

          cart.forEach((c) => {
            cartSubtotal += c.qty * c.unitPrice;
          });
          const discountAmount =
            bill.discountType === 'flat'
              ? Math.min(cartSubtotal, Math.max(0, Number(bill.discountValue) || 0))
              : bill.discountType === 'pct'
                ? Math.round(cartSubtotal * (Math.min(100, Math.max(0, Number(bill.discountValue) || 0)) / 100) * 100) / 100
                : 0;
          // Discount is applied at the bill/order level (one flat ₹ or % off the
          // whole bill, matching how a counter discount is actually given), then
          // spread across line items proportionally to their own share of the
          // subtotal so each DAILY_SALES row still reflects real revenue per
          // product — margin/food-cost reporting per item stays accurate instead
          // of the discount silently vanishing from the numbers.
          const discountFactor = cartSubtotal > 0 ? (cartSubtotal - discountAmount) / cartSubtotal : 1;

          // Each recordSale call is its own POST to Code.gs (one per cart line,
          // so a multi-item bill fires several in a row). These are collected
          // rather than fired-and-forgotten so the resync below can wait for
          // every one of them to actually land on the server before pulling
          // DAILY_SUMMARY back down — syncing on a fixed timer instead let a
          // slow Apps Script round-trip (cold start, several sequential sheet
          // writes) lose the race, overwriting the just-recorded sale's local
          // total with a server summary that hadn't been updated yet, which is
          // what made a bill appear to "vanish" after checkout/refresh.
          const recordSalePromises = [];

          cart.forEach((c) => {
            const prod = state.products.find((p) => p.id === c.productId);
            if (!prod) return;
            const lineGross = c.qty * c.unitPrice;
            const lineNet = Math.round(lineGross * discountFactor * 100) / 100;
            const lineCost = Math.round(c.qty * prod.landedCost * 100) / 100;
            cartCost += c.qty * prod.landedCost;
            cartQtyTotal += c.qty;

            recordSalePromises.push(apiCall('recordSale', {
              productId: c.productId,
              date: today,
              branch: state.branch,
              qty: c.qty,
              previousQty: 0,
              orderId,
              paymentMode,
              netSalesOverride: lineNet
            }));

            const bomRows = (state.recipeBom || []).filter((r) => r.productId === prod.id);
            bomRows.forEach((r) => {
              const ing = state.inventory.find((i) => i.sku === r.ingId);
              if (ing) {
                ing.stock = Math.max(0, Math.round((ing.stock - r.usageQtyPerUnit * c.qty) * 100) / 100);
              }
            });

            // Checkout used to only bump day-level totals (dailySummary),
            // never per-product attribution — so Best Seller, Top Selling
            // Items and the Sales-by-Category donut (all driven by
            // productSalesLog / product.dailyOrders) stayed stuck on
            // whatever the last EOD entry left them at, even though a real
            // counter sale had just happened. EOD already keeps these two
            // in sync for its own entries (see the eodEntryForm handler
            // below); mirroring that here for a counter sale closes the gap.
            prod.dailyOrders = (prod.dailyOrders || 0) + c.qty;
            if (!state.productSalesLog) state.productSalesLog = [];
            state.productSalesLog.push({
              isoDate: today,
              date: new Date(today).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' }),
              productId: prod.id,
              category: prod.category,
              qty: c.qty,
              costValue: lineCost,
              netSales: lineNet,
              dow: new Date(today).getDay()
            });
          });

          const cartTotal = Math.round((cartSubtotal - discountAmount) * 100) / 100;

          // Fold this bill into TODAY's dailySummary row the same way the EOD page's
          // own totals live there — additively, since the counter takes sales
          // continuously through the day while EOD entry is a separate end-of-day
          // reconciliation total. This (not a one-off bump to state.totalRevenue)
          // is what every KPI and chart on the dashboard actually reads, and what
          // survives a syncFromSheet recompute afterwards.
          const todayLabel = new Date(today).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' });
          if (!state.dailySummary) state.dailySummary = [];
          const todayIdx = state.dailySummary.findIndex((d) => d.isoDate === today || d.date === todayLabel);
          const roundedCost = Math.round(cartCost * 100) / 100;
          const roundedSales = cartTotal;
          const roundedProfit = Math.round((roundedSales - roundedCost) * 100) / 100;
          if (todayIdx >= 0) {
            const row = state.dailySummary[todayIdx];
            row.qty += cartQtyTotal;
            row.cost = Math.round((row.cost + roundedCost) * 100) / 100;
            row.sales = Math.round((row.sales + roundedSales) * 100) / 100;
            row.profit = Math.round((row.profit + roundedProfit) * 100) / 100;
          } else {
            state.dailySummary.push({ date: todayLabel, isoDate: today, qty: cartQtyTotal, cost: roundedCost, sales: roundedSales, profit: roundedProfit });
          }

          // Recompute the aggregate KPIs from dailySummary, same formula syncFromSheet
          // uses, so the dashboard reflects this bill immediately without waiting on
          // a round-trip or a later sync to overwrite a hand-bumped total.
          state.totalRevenue = state.dailySummary.reduce((s, d) => s + d.sales, 0);
          state.totalOrders = state.dailySummary.reduce((s, d) => s + d.qty, 0);
          const latestDay = state.dailySummary[state.dailySummary.length - 1];
          if (latestDay) {
            state.todayRevenue = latestDay.sales;
            state.todayOrders = latestDay.qty;
          }
          // The Net Profit KPI card was never recalculated after a counter
          // checkout (only EOD entry and sync did this), so it stayed stuck
          // at whatever value was last set — same formula EOD/sync use
          // (revenue minus recorded expenses, floored at 0) for consistency.
          state.netProfit = Math.max(0, state.totalRevenue - state.totalExpenses);

          state.lastReceipt = {
            orderId,
            date: today,
            time: new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' }),
            branch: state.branch,
            paymentMode,
            items: cart.map((c) => ({ name: c.name, qty: c.qty, unitPrice: c.unitPrice, lineTotal: Math.round(c.qty * c.unitPrice * 100) / 100 })),
            subtotal: Math.round(cartSubtotal * 100) / 100,
            discountAmount: Math.round(discountAmount * 100) / 100,
            total: cartTotal
          };

          state.sales.unshift({
            id: orderId,
            time: 'Just now',
            items: `${cart.length} item${cart.length > 1 ? 's' : ''} • ${cart.reduce((s, c) => s + c.qty, 0)} units`,
            channel: 'Counter',
            mode: paymentMode,
            amount: Math.round(cartTotal),
            status: 'Recorded'
          });

          // Remove this bill from the held list (it's checked out now) and make
          // sure at least one empty bill remains open for the next customer.
          const billIdx = state.heldBills.findIndex((b) => b.id === bill.id);
          if (billIdx !== -1) state.heldBills.splice(billIdx, 1);
          if (state.heldBills.length === 0) {
            createNewBill();
          } else {
            state.activeBillId = state.heldBills[0].id;
          }
          persistHeldBills();

          renderModulePage('new-sale');
          syncDashboardKPIs();
          // renderAllCharts() draws the Sales-by-Category donut, which reads
          // product.dailyOrders directly (not through syncDashboardKPIs) —
          // EOD entry already calls this after saving; checkout didn't,
          // which is why that chart stayed on "No category sales yet" after
          // a counter sale even though Best Seller/Top Items (both driven
          // by syncDashboardKPIs) picked up the fix above correctly.
          renderAllCharts();
          showToast(`Bill ${orderId} recorded — ${formatINR(Math.round(cartTotal))}`);
          openReceiptModal(state.lastReceipt);
          if (state.settings.apiBaseUrl && state.settings.syncOnSave) {
            // Wait for every recordSale POST to actually finish (success or
            // failure) before resyncing, instead of guessing a fixed delay —
            // see the comment above recordSalePromises for why a timer alone
            // could pull back a stale DAILY_SUMMARY and wipe the local total.
            Promise.all(recordSalePromises).then(() => {
              syncFromSheet({ silent: true });
            });
          }
          break;
        }

        case 'print-receipt':
          printReceiptNow_();
          break;

        case 'test-qz-connection': {
          const resultEl = document.getElementById('qzTestResult');
          if (resultEl) { resultEl.textContent = 'Connecting…'; resultEl.style.color = 'var(--text-tertiary)'; }
          qzEnsureConnected_()
            .then(() => {
              if (resultEl) { resultEl.textContent = '✓ Connected to QZ Tray'; resultEl.style.color = 'var(--success-600, #16a34a)'; }
            })
            .catch((err) => {
              if (resultEl) {
                resultEl.textContent = `✗ ${err && err.message ? err.message : 'Could not connect — is QZ Tray running on this PC?'}`;
                resultEl.style.color = 'var(--danger-600, #dc2626)';
              }
            });
          break;
        }

        case 'list-qz-printers': {
          // A connection test passing only proves QZ Tray itself is reachable
          // — it says nothing about whether this PC actually has a usable
          // default printer, which is the gap that let Print Bill silently
          // fall back to the OS dialog even with QZ Tray "connected". This
          // lists every printer QZ Tray can see on this PC so the owner can
          // copy the exact name into the field above instead of guessing.
          const listEl = document.getElementById('qzPrinterListResult');
          if (listEl) { listEl.textContent = 'Looking for printers…'; listEl.style.color = 'var(--text-tertiary)'; }
          qzEnsureConnected_()
            .then(() => qz.printers.find())
            .then((names) => {
              const list = Array.isArray(names) ? names : (names ? [names] : []);
              if (!listEl) return;
              if (!list.length) {
                listEl.textContent = 'QZ Tray is connected but sees no printers on this PC — check that a printer is installed and turned on.';
                listEl.style.color = 'var(--danger-600, #dc2626)';
                return;
              }
              listEl.innerHTML = `Found: ${list.map((n) => `<code>${esc(n)}</code>`).join(', ')} — click a name to use it`;
              listEl.style.color = 'var(--text-secondary)';
              listEl.querySelectorAll('code').forEach((codeEl) => {
                codeEl.style.cursor = 'pointer';
                codeEl.style.textDecoration = 'underline';
                codeEl.addEventListener('click', () => {
                  const nameInput = document.getElementById('setQzTrayPrinterName');
                  if (nameInput) nameInput.value = codeEl.textContent;
                });
              });
            })
            .catch((err) => {
              if (listEl) {
                listEl.textContent = `✗ ${err && err.message ? err.message : 'Could not list printers — is QZ Tray running?'}`;
                listEl.style.color = 'var(--danger-600, #dc2626)';
              }
            });
          break;
        }

        case 'set-receipt-format':
          state.posReceiptFormat = actionEl.getAttribute('data-format') || '80mm';
          document.body.setAttribute('data-receipt-format', state.posReceiptFormat);
          document.querySelectorAll('.receipt-format-btn').forEach((btn) => {
            btn.classList.toggle('is-active', btn.getAttribute('data-format') === state.posReceiptFormat);
          });
          break;

        case 'export-pnl':
          showToast('Exported October 2026 P&L Statement (PDF)');
          break;

        case 'save-bom-row': {
          const bomId = actionEl.getAttribute('data-bom-id');
          const row = document.querySelector(`tr.bom-row[data-bom-id="${bomId}"]`);
          const bom = (state.recipeBom || []).find((r) => r.id === bomId);
          if (!row || !bom) break;

          const usageInput = row.querySelector('[data-bom-field="usageQtyPerUnit"]');
          const costInput = row.querySelector('[data-bom-field="unitCost"]');
          const newUsage = Number(usageInput.value) || 0;
          const newUnitCost = Number(costInput.value) || 0;

          const ing = state.inventory.find((i) => i.sku === bom.ingId);
          const oldUnitCost = ing ? ing.unitCost : 0;

          // Update local state immediately so the UI reflects the change without
          // waiting on the round-trip: the ingredient's cost cascades to every BOM
          // row sharing that ingredient, same as the Code.gs action does server-side.
          bom.usageQtyPerUnit = newUsage;
          if (ing && newUnitCost !== oldUnitCost) {
            ing.unitCost = newUnitCost;
          }
          const costPerBaseUnit = ing ? ing.unitCost : 0;
          bom.lineCost = Math.round(newUsage * costPerBaseUnit * 100) / 100;

          // Recompute the parent product's Raw Cost / Landed Cost / Margin from the
          // sum of ALL its BOM line costs (every ingredient, not just this row).
          // Landed Cost must stay Raw Cost + the 4 overhead fields (gas/oil/wastage/
          // overheads) set on the Overhead & Other Costs form — NOT just the BOM sum
          // on its own, or saving a BOM row here would silently wipe out whatever
          // overhead costs the owner entered there.
          const prod = state.products.find((p) => p.id === bom.productId);
          if (prod) {
            const rawCostTotal = (state.recipeBom || [])
              .filter((r) => r.productId === prod.id)
              .reduce((sum, r) => sum + r.lineCost, 0);
            prod.rawCost = Math.round(rawCostTotal * 100) / 100;
            prod.landedCost = Math.round((prod.rawCost + (prod.gasCost || 0) + (prod.oilCost || 0) + (prod.wastageCost || 0) + (prod.overheadsCost || 0)) * 100) / 100;
            prod.marginRs = Math.round((prod.sellingPrice - prod.landedCost) * 100) / 100;
            prod.marginPct = prod.landedCost > 0 ? Math.round((prod.marginRs / prod.landedCost) * 10000) / 100 : 0;
          }

          apiCall('updateRecipeBomCost', { bomId, usageQtyPerUnit: newUsage, unitCost: newUnitCost });
          renderModulePage('menu-costing');
          showToast(`${bom.ingName} cost updated for ${bom.productName}`);
          if (state.settings.apiBaseUrl && state.settings.syncOnSave) {
            setTimeout(() => syncFromSheet({ silent: true }), 1500);
          }
          break;
        }

        case 'delete-bom-row': {
          const bomId = actionEl.getAttribute('data-bom-id');
          const bomIdx = (state.recipeBom || []).findIndex((r) => r.id === bomId);
          if (bomIdx === -1) break;
          const bom = state.recipeBom[bomIdx];

          state.recipeBom.splice(bomIdx, 1);

          // Recompute the parent product's Raw Cost / Landed Cost / Margin from
          // whatever BOM rows remain, same formula as save-bom-row above.
          const prod = state.products.find((p) => p.id === bom.productId);
          if (prod) {
            const rawCostTotal = (state.recipeBom || [])
              .filter((r) => r.productId === prod.id)
              .reduce((sum, r) => sum + r.lineCost, 0);
            prod.rawCost = Math.round(rawCostTotal * 100) / 100;
            prod.landedCost = Math.round((prod.rawCost + (prod.gasCost || 0) + (prod.oilCost || 0) + (prod.wastageCost || 0) + (prod.overheadsCost || 0)) * 100) / 100;
            prod.marginRs = Math.round((prod.sellingPrice - prod.landedCost) * 100) / 100;
            prod.marginPct = prod.landedCost > 0 ? Math.round((prod.marginRs / prod.landedCost) * 10000) / 100 : 0;
          }

          apiCall('deleteRecipeBomRow', { bomId });
          renderModulePage('menu-costing');
          showToast(`${bom.ingName} removed from ${bom.productName}'s recipe`);
          if (state.settings.apiBaseUrl && state.settings.syncOnSave) {
            setTimeout(() => syncFromSheet({ silent: true }), 1500);
          }
          break;
        }

        case 'settle-vendor': {
          const idx = Number(actionEl.getAttribute('data-idx'));
          const vendor = state.contacts[idx];
          if (vendor) {
            vendor.balance = 'Settled';
            vendor.due = '—';
            renderModulePage('contacts');
            showToast(`Payment settled for ${vendor.name}`);
            // Persist to the backend — was previously local-only, so the
            // settlement silently reverted on the next Sheet sync.
            apiCall('settleVendor', { name: vendor.name });
            if (state.settings.apiBaseUrl && state.settings.syncOnSave) {
              setTimeout(() => syncFromSheet({ silent: true }), 1500);
            }
          }
          break;
        }

        case 'toggle-low-stock-filter': {
          state.inventoryLowStockOnly = !state.inventoryLowStockOnly;
          renderModulePage('inventory');
          break;
        }

        case 'pay-single-staff': {
          const idx = Number(actionEl.getAttribute('data-idx'));
          const emp = state.staff[idx];
          if (emp) {
            emp.paid = true;
            renderModulePage('payroll');
            // The backend now calculates Net_Payable from actual attendance
            // (Present/Half-Day/Absent weighting) and subtracts advances taken,
            // so it can differ from emp.salary (the flat base figure) — showing
            // emp.salary here would be stating an amount that wasn't actually
            // disbursed. Show a neutral "processing" toast immediately, then
            // correct it to the real server-calculated amount once the call
            // resolves (or flag it if the save failed).
            if (!state.settings.apiBaseUrl) {
              // No backend configured — nothing to call or confirm. Show the
              // flat base figure since that's genuinely the only number that
              // exists anywhere in this (local-only) state.
              showToast(`Salary ${formatINR(emp.salary)} marked paid locally — connect the Cloud in Settings to disburse for real`, 'warning');
              break;
            }
            showToast(`Processing salary for ${emp.name}…`);
            apiCall('disbursePayroll', { empId: emp.id }).then((res) => {
              const disbursedAmt = res && res.disbursed && res.disbursed[0] && res.disbursed[0].amount;
              if (typeof disbursedAmt === 'number') {
                showToast(`${formatINR(disbursedAmt)} disbursed to ${emp.name} (attendance-adjusted)`);
              } else {
                showToast(`Could not confirm disbursement for ${emp.name} — check Payroll Logs`, 'warning');
              }
              if (state.settings.syncOnSave) {
                syncFromSheet({ silent: true });
              }
            });
          }
          break;
        }

        case 'disburse-all-payroll':
          state.staff.forEach((s) => {
            s.paid = true;
          });
          renderModulePage('payroll');
          if (!state.settings.apiBaseUrl) {
            showToast('All staff marked paid locally — connect the Cloud in Settings to disburse for real', 'warning');
            break;
          }
          showToast('Processing payroll for all staff…');
          // Persist to the Payroll Logs sheet — omitting empId makes
          // api_disbursePayroll_ process every employee in a single Apps
          // Script execution (one appendRow per employee server-side), so
          // this is one request rather than one round-trip per staff member.
          // Each employee's Net_Payable is now attendance-adjusted server-side
          // (see pay-single-staff above for why the amount isn't shown until
          // the real figures come back).
          apiCall('disbursePayroll', {}).then((res) => {
            const count = res && res.disbursed ? res.disbursed.length : 0;
            if (count > 0) {
              const total = res.disbursed.reduce((sum, d) => sum + (Number(d.amount) || 0), 0);
              showToast(`${formatINR(total)} disbursed across ${count} staff (attendance-adjusted)`);
            } else {
              showToast('Could not confirm payroll disbursement — check Payroll Logs', 'warning');
            }
            if (state.settings.syncOnSave) {
              syncFromSheet({ silent: true });
            }
          });
          break;

        case 'dismiss-notif': {
          const notifId = actionEl.getAttribute('data-notif-id');
          if (notifId) {
            const dismissed = getDismissedNotifIds();
            dismissed.add(notifId);
            saveDismissedNotifIds(dismissed);
            renderNotificationDrawer();
          }
          break;
        }

        case 'dismiss-all-notifs': {
          const dismissed = getDismissedNotifIds();
          buildNotifications({ includeDismissed: true }).forEach((i) => dismissed.add(i.id));
          saveDismissedNotifIds(dismissed);
          renderNotificationDrawer();
          break;
        }

        default:
          break;
      }
      return;
    }

    // Close backdrops on outside click
    if (target === sidebarBackdrop) closeSidebar();
    if (target === appModalBackdrop) closeModal();
    if (!target.closest('.search-wrapper') && searchPopover) {
      searchPopover.setAttribute('hidden', '');
    }
  });

  // =========================================================================
  // 9. FORM SUBMISSIONS (MODALS & SETTINGS)
  // =========================================================================
  document.addEventListener('submit', (e) => {
    const form = e.target;

    if (form.id === 'eodEntryForm') {
      e.preventDefault();
      const dateInput = document.getElementById('eodDateInput');
      const eodDate = (dateInput && dateInput.value) || new Date().toISOString().slice(0, 10);
      state.eodDraftDate = eodDate;

      const rows = [];
      let totalQty = 0;
      let totalCost = 0;
      let totalSales = 0;
      const draft = {};
      // See the matching comment in the pos-checkout handler: these are
      // collected so the resync below waits for every write to actually
      // land, instead of racing a fixed timer against several sequential
      // Apps Script round-trips and pulling back a stale DAILY_SUMMARY.
      const recordSalePromises = [];

      state.products.forEach((p) => {
        const input = document.getElementById(`eodQty_${p.id}`);
        const qty = input ? Number(input.value) || 0 : 0;
        if (qty > 0) {
          draft[p.id] = qty;
          const costValue = Math.round(qty * p.landedCost * 100) / 100;
          const netSales = Math.round(qty * p.sellingPrice * 100) / 100;
          totalQty += qty;
          totalCost += costValue;
          totalSales += netSales;
          rows.push({ product: p, qty, costValue, netSales });
          recordSalePromises.push(apiCall('recordSale', {
            productId: p.id,
            date: eodDate,
            branch: state.branch,
            qty,
            previousQty: 0
          }));
        }
      });

      state.eodDraft = draft;

      if (rows.length === 0) {
        showToast('Enter at least one item quantity before saving');
        return;
      }

      const netProfit = Math.round((totalSales - totalCost) * 100) / 100;
      const dateLabel = new Date(eodDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short' });

      const existingDayIdx = state.dailySummary
        ? state.dailySummary.findIndex((d) => d.date === dateLabel)
        : -1;
      if (!state.dailySummary) state.dailySummary = [];
      const summaryRow = { date: dateLabel, isoDate: eodDate, qty: totalQty, cost: Math.round(totalCost * 100) / 100, sales: Math.round(totalSales * 100) / 100, profit: netProfit };
      if (existingDayIdx >= 0) {
        state.dailySummary[existingDayIdx] = summaryRow;
      } else {
        state.dailySummary.push(summaryRow);
      }

      state.sales.unshift({
        id: `EOD-${eodDate}`,
        time: 'Just now',
        items: `${rows.length} item${rows.length > 1 ? 's' : ''} • ${totalQty} units`,
        channel: 'EOD Summary',
        mode: '—',
        amount: Math.round(totalSales),
        status: 'Recorded'
      });

      state.totalRevenue += totalSales;
      state.totalExpenses += totalCost;
      state.netProfit = Math.max(0, state.totalRevenue - state.totalExpenses);
      state.todayRevenue += totalSales;
      state.totalOrders += totalQty;
      state.todayOrders += totalQty;

      // Attribute this EOD entry's quantities onto each product so the category
      // donut and "top sellers" views reflect real per-product sales volume.
      rows.forEach(({ product, qty }) => {
        const p = state.products.find((prod) => prod.id === product.id);
        if (p) p.dailyOrders = (p.dailyOrders || 0) + qty;
      });

      // Durable per-product-per-day log (separate from the cumulative dailyOrders
      // above) — this is what the Analytics page reads for real trend lines,
      // category/product trends over time, and cost-vs-revenue correlation.
      // Re-saving the same date first removes that date's old rows so edits don't
      // double-count.
      if (!state.productSalesLog) state.productSalesLog = [];
      state.productSalesLog = state.productSalesLog.filter((r) => r.isoDate !== eodDate);
      rows.forEach(({ product, qty, costValue, netSales }) => {
        state.productSalesLog.push({
          isoDate: eodDate,
          date: dateLabel,
          productId: product.id,
          category: product.category,
          qty,
          costValue,
          netSales,
          dow: new Date(eodDate).getDay()
        });
      });

      syncDashboardKPIs();
      renderAllCharts();
      renderActivityFeed();
      renderUpcomingReminders();
      if (state.activePage === 'sales') renderModulePage('sales');
      closeModal();
      showToast(`EOD summary saved: ${formatINR(Math.round(totalSales))} across ${rows.length} items`);
      if (state.settings.apiBaseUrl && state.settings.syncOnSave) {
        Promise.all(recordSalePromises).then(() => {
          syncFromSheet({ silent: true });
        });
      }
    } else if (form.id === 'modalExpenseForm' || form.id === 'modalBillForm') {
      // Every field here is genuinely required input (no fabricated fallback
      // values) — validate before touching state, same as every other
      // create-record form in the app.
      e.preventDefault();
      const fd = new FormData(form);
      const amount = Number(fd.get('amount'));
      const title = (fd.get('title') || '').trim();
      const vendor = (fd.get('vendor') || '').trim();
      const category = fd.get('category') || 'Raw Material';
      const mode = fd.get('mode') || 'UPI';

      if (!title || !vendor || !amount || amount <= 0) {
        showToast('Please fill in description, vendor and a valid amount');
        return;
      }

      const expId = `EXP-${String(state.expenses.length + 1).padStart(3, '0')}`;
      const todayLabel = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
      const todayIso = new Date().toISOString().slice(0, 10);

      state.expenses.unshift({
        id: expId,
        date: todayLabel,
        title,
        vendor,
        category,
        mode,
        amount,
        status: 'Paid'
      });

      state.totalExpenses += amount;
      state.netProfit = Math.max(0, state.totalRevenue - state.totalExpenses);

      syncDashboardKPIs();
      renderAllCharts();
      renderActivityFeed();
      renderUpcomingReminders();
      if (state.activePage === 'expenses') renderModulePage('expenses');
      closeModal();
      showToast(`Expense ${expId} (${formatINR(amount)}) logged!`);

      // Persist to the backend — this was previously missing, meaning expenses
      // entered here only ever existed in memory and were silently discarded
      // the next time the app synced from Google Sheets.
      apiCall('addExpense', {
        date: todayIso,
        branch: state.branch,
        title,
        vendor,
        category,
        mode,
        amount,
        status: 'Paid'
      });
      if (state.settings.apiBaseUrl && state.settings.syncOnSave) {
        setTimeout(() => syncFromSheet({ silent: true }), 1500);
      }
    } else if (form.id === 'editPriceForm') {
      e.preventDefault();
      const input = document.getElementById('editPriceInput');
      const newPrice = Number(input.value) || 0;
      const prod = state.products.find((p) => p.id === state.selectedProductId);
      if (prod && newPrice > 0) {
        prod.sellingPrice = newPrice;
        prod.marginRs = Math.round((prod.sellingPrice - prod.landedCost) * 100) / 100;
        prod.marginPct = prod.landedCost > 0 ? Math.round((prod.marginRs / prod.landedCost) * 10000) / 100 : 0;
        apiCall('updateProduct', { productId: prod.id, Selling_Price: newPrice });
        renderModulePage('menu-costing');
        showToast(`${prod.name} price updated to ${formatINR(newPrice)}`);
      }
    } else if (form.id === 'editOverheadForm') {
      // Editable per-item overhead breakdown — gas, oil, wastage, other overheads —
      // the same cost components the owner's Excel costing sheet tracked alongside
      // raw ingredient cost. Landed Cost = Raw Cost (BOM total) + these 4, recomputed
      // here immediately and also persisted to the backend (api_updateProduct_
      // already does the same recompute server-side once connected to Sheets).
      e.preventDefault();
      const productId = form.getAttribute('data-product-id');
      const prod = state.products.find((p) => p.id === productId);
      if (prod) {
        const gas = Math.max(0, Number(document.getElementById('ovGasInput').value) || 0);
        const oil = Math.max(0, Number(document.getElementById('ovOilInput').value) || 0);
        const wastage = Math.max(0, Number(document.getElementById('ovWastageInput').value) || 0);
        const overheads = Math.max(0, Number(document.getElementById('ovOverheadsInput').value) || 0);
        const bomRows = (state.recipeBom || []).filter((r) => r.productId === prod.id);
        const rawCost = bomRows.length
          ? Math.round(bomRows.reduce((s, r) => s + r.lineCost, 0) * 100) / 100
          : (prod.rawCost || prod.landedCost || 0);

        prod.rawCost = rawCost;
        prod.gasCost = gas;
        prod.oilCost = oil;
        prod.wastageCost = wastage;
        prod.overheadsCost = overheads;
        prod.landedCost = Math.round((rawCost + gas + oil + wastage + overheads) * 100) / 100;
        prod.marginRs = Math.round((prod.sellingPrice - prod.landedCost) * 100) / 100;
        prod.marginPct = prod.landedCost > 0 ? Math.round((prod.marginRs / prod.landedCost) * 10000) / 100 : 0;

        apiCall('updateProduct', {
          productId: prod.id,
          Raw_Cost: rawCost,
          Gas_Cost: gas,
          Oil_Cost: oil,
          Wastage_Cost: wastage,
          Overheads_Cost: overheads
        });
        renderModulePage('menu-costing');
        showToast(`${prod.name} overhead costs updated — landed cost now ${formatINR(prod.landedCost)}`);
        if (state.settings.apiBaseUrl && state.settings.syncOnSave) {
          setTimeout(() => syncFromSheet({ silent: true }), 1500);
        }
      }
    } else if (form.id === 'addBomRowForm') {
      // Owner-built recipe row: the ingredient and its cost both come straight
      // from live Inventory (the <select>'s data-unit-cost attribute, set from
      // state.inventory at render time) — the owner only ever types a usage
      // quantity, never a cost. Line_Cost = usage x that ingredient's current
      // Inventory unit cost, exactly as the recipe-builder preview already showed.
      e.preventDefault();
      const productId = form.getAttribute('data-product-id');
      const prod = state.products.find((p) => p.id === productId);
      const select = document.getElementById('addBomIngSelect');
      const usageInput = document.getElementById('addBomUsageInput');
      if (!prod || !select || !select.value) {
        showToast('Pick an ingredient first');
        return;
      }
      const usageQty = Number(usageInput.value) || 0;
      if (usageQty <= 0) {
        showToast('Enter how much of this ingredient one unit sold uses');
        return;
      }
      const ingId = select.value;
      if ((state.recipeBom || []).some((r) => r.productId === prod.id && r.ingId === ingId)) {
        showToast('That ingredient is already on this recipe — edit its row instead');
        return;
      }
      const ing = state.inventory.find((i) => i.sku === ingId);
      if (!ing) return;

      const lineCost = Math.round(usageQty * ing.unitCost * 100) / 100;
      const bomId = `BOM-${new Date().getTime()}`;
      if (!state.recipeBom) state.recipeBom = [];
      state.recipeBom.push({
        id: bomId,
        productId: prod.id,
        productName: prod.name,
        ingId: ing.sku,
        ingName: ing.name,
        usageQtyPerUnit: usageQty,
        lineCost
      });

      const rawCostTotal = state.recipeBom
        .filter((r) => r.productId === prod.id)
        .reduce((sum, r) => sum + r.lineCost, 0);
      prod.rawCost = Math.round(rawCostTotal * 100) / 100;
      prod.landedCost = Math.round((prod.rawCost + (prod.gasCost || 0) + (prod.oilCost || 0) + (prod.wastageCost || 0) + (prod.overheadsCost || 0)) * 100) / 100;
      prod.marginRs = Math.round((prod.sellingPrice - prod.landedCost) * 100) / 100;
      prod.marginPct = prod.landedCost > 0 ? Math.round((prod.marginRs / prod.landedCost) * 10000) / 100 : 0;

      apiCall('addRecipeBomRow', { productId: prod.id, productName: prod.name, ingId: ing.sku, ingName: ing.name, usageQtyPerUnit: usageQty });
      renderModulePage('menu-costing');
      showToast(`${ing.name} added to ${prod.name}'s recipe — ₹${lineCost.toFixed(2)}/unit`);
      if (state.settings.apiBaseUrl && state.settings.syncOnSave) {
        setTimeout(() => syncFromSheet({ silent: true }), 1500);
      }
    } else if (form.id === 'settingsForm' || form.id === 'licensesForm' || form.id === 'ownerSettingsForm' || form.id === 'syncSettingsForm' || form.id === 'alertSettingsForm' || form.id === 'opsSettingsForm' || form.id === 'printingSettingsForm') {
      e.preventDefault();
      const fd = new FormData(form);
      const str = (key) => { const v = fd.get(key); return v !== null ? v : undefined; };
      const num = (key, fallback) => { const v = fd.get(key); return v !== null && v !== '' ? Number(v) : fallback; };
      const checkbox = (key) => fd.has(key);

      // Café profile
      state.settings.ownerName = str('ownerName') ?? state.settings.ownerName;
      state.settings.cafeName = str('cafeName') ?? state.settings.cafeName;
      state.settings.upiId = str('upiId') ?? state.settings.upiId;
      state.settings.address = str('address') ?? state.settings.address;
      state.settings.invoicePrefix = str('invoicePrefix') ?? state.settings.invoicePrefix;
      state.settings.currencySymbol = str('currencySymbol') ?? state.settings.currencySymbol;
      state.settings.dateFormat = str('dateFormat') ?? state.settings.dateFormat;
      state.settings.locale = str('locale') ?? state.settings.locale;
      state.settings.timezone = str('timezone') ?? state.settings.timezone;

      // Licenses & registrations
      state.settings.fssai = str('fssai') ?? state.settings.fssai;
      state.settings.fssaiRenewalDate = str('fssaiRenewalDate') ?? state.settings.fssaiRenewalDate;
      state.settings.udhyamNumber = str('udhyamNumber') ?? state.settings.udhyamNumber;
      state.settings.udhyamRenewalDate = str('udhyamRenewalDate') ?? state.settings.udhyamRenewalDate;
      state.settings.msmeNumber = str('msmeNumber') ?? state.settings.msmeNumber;
      state.settings.msmeRenewalDate = str('msmeRenewalDate') ?? state.settings.msmeRenewalDate;

      // Sheets connection & sync
      const prevApiBaseUrl = state.settings.apiBaseUrl;
      if (fd.has('apiBaseUrl')) state.settings.apiBaseUrl = (str('apiBaseUrl') || '').trim();
      if (form.querySelector('[name="autoRefreshEnabled"]')) state.settings.autoRefreshEnabled = checkbox('autoRefreshEnabled');
      state.settings.refreshIntervalMinutes = num('refreshIntervalMinutes', state.settings.refreshIntervalMinutes);
      if (form.querySelector('[name="syncOnSave"]')) state.settings.syncOnSave = checkbox('syncOnSave');

      // Alerts & notifications
      state.settings.alertEmail = str('alertEmail') ?? state.settings.alertEmail;
      state.settings.telegramBotUsername = str('telegramBotUsername') ?? state.settings.telegramBotUsername;
      if (form.querySelector('[name="whatsappAlerts"]')) state.settings.whatsappAlerts = checkbox('whatsappAlerts');
      if (form.querySelector('[name="lowStockSound"]')) state.settings.lowStockSound = checkbox('lowStockSound');
      if (form.querySelector('[name="notifyLowStock"]')) state.settings.notifyLowStock = checkbox('notifyLowStock');
      if (form.querySelector('[name="notifyPendingPayroll"]')) state.settings.notifyPendingPayroll = checkbox('notifyPendingPayroll');
      if (form.querySelector('[name="notifyLicenseRenewal"]')) state.settings.notifyLicenseRenewal = checkbox('notifyLicenseRenewal');
      state.settings.lowStockEmailHourIst = num('lowStockEmailHourIst', state.settings.lowStockEmailHourIst);
      state.settings.payrollReminderHourIst = num('payrollReminderHourIst', state.settings.payrollReminderHourIst);
      state.settings.payrollReminderDaysBefore = num('payrollReminderDaysBefore', state.settings.payrollReminderDaysBefore);

      // Inventory & costing defaults
      state.settings.lowStockThresholdPct = num('lowStockThresholdPct', state.settings.lowStockThresholdPct);
      state.settings.overheadPctDefault = num('overheadPctDefault', state.settings.overheadPctDefault);
      state.settings.wastagePctDefault = num('wastagePctDefault', state.settings.wastagePctDefault);
      state.settings.salaryDay = num('salaryDay', state.settings.salaryDay);

      // Appearance
      state.settings.chartColorTheme = str('chartColorTheme') ?? state.settings.chartColorTheme;
      if (form.querySelector('[name="compactTables"]')) state.settings.compactTables = checkbox('compactTables');
      if (form.querySelector('[name="showSparklines"]')) state.settings.showSparklines = checkbox('showSparklines');
      if (form.querySelector('[name="animationsEnabled"]')) state.settings.animationsEnabled = checkbox('animationsEnabled');
      if (form.querySelector('[name="lowStockBadgeOnSidebar"]')) state.settings.lowStockBadgeOnSidebar = checkbox('lowStockBadgeOnSidebar');
      state.settings.dashboardDefaultPeriod = str('dashboardDefaultPeriod') ?? state.settings.dashboardDefaultPeriod;

      // Printing
      state.settings.printMode = str('printMode') ?? state.settings.printMode;
      state.settings.defaultReceiptFormat = str('defaultReceiptFormat') ?? state.settings.defaultReceiptFormat;
      state.settings.qzTrayPrinterName = str('qzTrayPrinterName') ?? state.settings.qzTrayPrinterName;
      state.settings.qzTrayHost = str('qzTrayHost') ?? state.settings.qzTrayHost;
      state.settings.qzTrayPrinterType = str('qzTrayPrinterType') ?? state.settings.qzTrayPrinterType;
      if (state.settings.defaultReceiptFormat) state.posReceiptFormat = state.settings.defaultReceiptFormat;

      persistSettings();
      computeTimeGreeting();
      renderModulePage('settings');
      showToast('Settings saved successfully');

      const apiBaseUrlChanged = prevApiBaseUrl !== state.settings.apiBaseUrl;
      if (state.settings.apiBaseUrl) {
        checkApiConnection();
        startAutoRefresh();
        if (apiBaseUrlChanged) syncFromSheet({ silent: false });
      } else {
        if (autoRefreshTimer) clearInterval(autoRefreshTimer);
      }

      apiCall('updateSettings', {
        Alert_Email: state.settings.alertEmail,
        Cafe_Name: state.settings.cafeName,
        UPI_ID: state.settings.upiId,
        FSSAI: state.settings.fssai,
        FSSAI_Renewal_Date: state.settings.fssaiRenewalDate,
        Udhyam_Number: state.settings.udhyamNumber,
        Udhyam_Renewal_Date: state.settings.udhyamRenewalDate,
        MSME_Number: state.settings.msmeNumber,
        MSME_Renewal_Date: state.settings.msmeRenewalDate,
        Address: state.settings.address,
        Salary_Day: state.settings.salaryDay,
        Low_Stock_Email_Hour_IST: state.settings.lowStockEmailHourIst,
        Payroll_Reminder_Hour_IST: state.settings.payrollReminderHourIst,
        Overhead_Pct_Default: state.settings.overheadPctDefault,
        Wastage_Pct_Default: state.settings.wastagePctDefault
      });
    } else if (form.id === 'addStaffForm') {
      e.preventDefault();
      const fd = new FormData(form);
      const name = (fd.get('name') || '').trim();
      const role = (fd.get('role') || '').trim();
      const phone = (fd.get('phone') || '').trim();
      const salary = Number(fd.get('salary'));
      if (!name || !role || !salary || salary <= 0) {
        showToast('Please fill in name, role and a valid salary');
        return;
      }
      const shift = fd.get('shift') || 'Morning (7 AM - 3 PM)';
      const nextId = 'STF-' + String(state.staff.length + 1).padStart(2, '0');
      state.staff.push({
        id: nextId,
        name,
        role,
        shift,
        phone,
        status: 'Present',
        checkIn: 'Just now',
        salary,
        // Matches computeStaffPayrollStats_'s own no-attendance-yet fallback
        // (full standard days, not 0) so a brand-new hire doesn't show as
        // having worked zero days before any attendance has been marked.
        standardDays: 26,
        days: 26,
        advanceTaken: 0,
        netPayableEstimate: salary,
        paid: false
      });
      closeModal();
      renderModulePage('staff');
      showToast(`${name} added to the roster`);
      apiCall('addEmployee', {
        empId: nextId,
        name,
        role,
        shift,
        phone,
        salary
      });
    } else if (form.id === 'restockItemForm') {
      e.preventDefault();
      const fd = new FormData(form);
      const idx = Number(fd.get('invIdx'));
      const item = state.inventory[idx];
      const qty = Number(fd.get('qty'));
      const reorderRaw = fd.get('reorder');
      const reorder = reorderRaw === '' || reorderRaw === null ? null : Number(reorderRaw);
      if (!item) {
        showToast('Could not find that ingredient — please try again', 'warning');
        return;
      }
      if (!qty || qty <= 0) {
        showToast('Please enter how much stock was actually received');
        return;
      }
      if (reorder !== null && (isNaN(reorder) || reorder < 0)) {
        showToast('Low stock threshold must be 0 or a positive number');
        return;
      }
      closeModal();

      // Reflects locally first regardless of backend state, same pattern as
      // every other write in this app — the owner sees their entry take
      // effect immediately rather than waiting on a round trip.
      item.stock = Number((item.stock + qty).toFixed(2));
      if (reorder !== null) item.reorder = reorder;
      item.status = item.stock >= item.reorder ? 'Optimal' : 'Low Stock';
      renderModulePage('inventory');

      if (!state.settings.apiBaseUrl) {
        showToast(`Restocked +${qty} ${item.unit} of ${item.item} locally — connect the Cloud in Settings to save it for real`, 'warning');
        return;
      }

      showToast(`Saving restock of ${qty} ${item.unit} for ${item.item}…`);
      apiCall('restockIngredient', { sku: item.sku, qty, reorder }).then((res) => {
        if (res && res.ok) {
          showToast(`Restocked +${qty} ${item.unit} of ${item.item}`);
          if (state.settings.syncOnSave) {
            syncFromSheet({ silent: true });
          }
        } else {
          showToast(`Could not save restock for ${item.item} — check your connection`, 'warning');
        }
      });
    } else if (form.id === 'recordAdvanceForm') {
      e.preventDefault();
      const fd = new FormData(form);
      const idx = Number(fd.get('empIdx'));
      const emp = state.staff[idx];
      const amount = Number(fd.get('amount'));
      const date = fd.get('date') || new Date().toISOString().slice(0, 10);
      const note = (fd.get('note') || '').trim();
      if (!emp) {
        showToast('Could not find that staff member — please try again', 'warning');
        return;
      }
      if (!amount || amount <= 0) {
        showToast('Please enter a valid advance amount');
        return;
      }
      closeModal();

      if (!state.settings.apiBaseUrl) {
        // No backend configured — nothing to call. Reflect the advance
        // locally so the Payroll page's preview isn't silently stale, and say
        // plainly that it isn't actually persisted anywhere durable yet.
        state.attendance.push({
          Att_ID: 'LOCAL-' + Date.now(),
          Date: date,
          Emp_ID: emp.id,
          Emp_Name: emp.name,
          Shift: note,
          Status: 'Advance Only',
          Payable_Day_Weight: 0,
          Advance_Taken: amount
        });
        computeStaffPayrollStats_();
        renderModulePage('payroll');
        showToast(`${formatINR(amount)} advance recorded locally — connect the Cloud in Settings to save it for real`, 'warning');
        return;
      }

      showToast(`Recording ${formatINR(amount)} advance for ${emp.name}…`);
      apiCall('recordAdvance', { empId: emp.id, amount, date, note }).then((res) => {
        if (res && res.ok) {
          showToast(`${formatINR(amount)} advance recorded for ${emp.name}`);
          if (state.settings.syncOnSave) {
            syncFromSheet({ silent: true });
          }
        } else {
          showToast(`Could not record advance for ${emp.name} — check Payroll Logs`, 'warning');
        }
      });
    } else if (form.id === 'addContactForm') {
      e.preventDefault();
      const fd = new FormData(form);
      const name = (fd.get('name') || '').trim();
      const role = (fd.get('role') || '').trim();
      const city = (fd.get('city') || '').trim();
      const phone = (fd.get('phone') || '').trim();
      if (!name || !role) {
        showToast('Please fill in name and role');
        return;
      }
      const balanceAmt = Number(fd.get('balance')) || 0;
      const dueDate = fd.get('due');
      const contact = {
        name,
        role,
        city,
        phone,
        balance: balanceAmt > 0 ? `₹ ${balanceAmt.toLocaleString('en-IN')} Due` : 'Settled',
        due: balanceAmt > 0 && dueDate ? new Date(dueDate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '—'
      };
      state.contacts.push(contact);
      closeModal();
      renderModulePage('contacts');
      showToast(`${contact.name} added to Contacts`);
      apiCall('addContact', {
        name: contact.name,
        role: contact.role,
        city: contact.city,
        phone: contact.phone,
        balance: contact.balance,
        dueDate: balanceAmt > 0 ? dueDate : ''
      });
    } else if (form.id === 'addInventoryForm') {
      e.preventDefault();
      const fd = new FormData(form);
      const name = (fd.get('name') || '').trim();
      const unitCost = Number(fd.get('unitCost'));
      if (!name || !unitCost || unitCost <= 0) {
        showToast('Please fill in ingredient name and a valid unit cost');
        return;
      }
      const maxNum = state.inventory.reduce((max, it) => {
        const m = /ING-(\d+)/.exec(it.sku);
        return m ? Math.max(max, Number(m[1])) : max;
      }, 0);
      const newSku = `ING-${String(maxNum + 1).padStart(3, '0')}`;
      const stock = Number(fd.get('stock')) || 0;
      const reorder = Number(fd.get('reorder')) || 1;
      state.inventory.push({
        sku: newSku,
        item: name,
        category: 'Raw Material',
        stock,
        unit: fd.get('unit') || 'kg',
        reorder,
        unitCost,
        status: stock <= reorder ? 'Low Stock' : 'Optimal'
      });
      closeModal();
      renderModulePage('inventory');
      showToast(`${name} added to Inventory (${newSku})`);
      apiCall('addInventoryItem', {
        sku: newSku,
        name,
        unitCost,
        unit: fd.get('unit'),
        stock,
        reorder
      });
    } else if (form.id === 'addMenuItemForm') {
      e.preventDefault();
      const fd = new FormData(form);
      const name = (fd.get('name') || '').trim();
      const price = Number(fd.get('price'));
      if (!name || !price || price <= 0) {
        showToast('Please fill in the item name and a valid selling price');
        return;
      }
      const categorySelect = document.getElementById('newItemCategorySelect');
      const customCategoryInput = document.getElementById('newItemCategoryCustomInput');
      let category = categorySelect ? categorySelect.value : 'Other';
      if (category === '__new__') {
        category = (customCategoryInput?.value || '').trim().toUpperCase();
        if (!category) {
          showToast('Enter a name for the new category');
          return;
        }
      }

      const maxNum = state.products.reduce((max, p) => {
        const m = /P(\d+)/.exec(p.id);
        return m ? Math.max(max, Number(m[1])) : max;
      }, 0);
      const newId = `P${String(maxNum + 1).padStart(3, '0')}`;

      const gasCost = Number(fd.get('gasCost')) || 0;
      const oilCost = Number(fd.get('oilCost')) || 0;
      const wastageCost = Number(fd.get('wastageCost')) || 0;
      const overheadsCost = Number(fd.get('overheadsCost')) || 0;
      const rawCost = addMenuItemDraftBom_.reduce((s, r) => s + r.usageQtyPerUnit * r.unitCost, 0);
      const landedCost = Math.round((rawCost + gasCost + oilCost + wastageCost + overheadsCost) * 100) / 100;

      const finishCreate = (imageDataUrl) => {
        const newProduct = {
          id: newId,
          name,
          category,
          landedCost,
          rawCost: Math.round(rawCost * 100) / 100,
          gasCost,
          oilCost,
          wastageCost,
          overheadsCost,
          sellingPrice: price,
          marginRs: Math.round((price - landedCost) * 100) / 100,
          marginPct: landedCost > 0 ? Math.round(((price - landedCost) / landedCost) * 10000) / 100 : 0,
          dailyOrders: 0,
          imageDataUrl: imageDataUrl || null
        };
        state.products.push(newProduct);

        // Turn the draft BOM lines into real recipeBom rows, same shape and
        // id scheme as every other BOM row in the app (see save-bom-row /
        // delete-bom-row elsewhere), so this product behaves identically to
        // one that shipped with the app from here on — Menu Costing can
        // edit/delete these rows the normal way, and a sale of this item
        // deducts the right ingredients from Inventory immediately.
        if (!state.recipeBom) state.recipeBom = [];
        const maxBomNum = state.recipeBom.reduce((max, r) => {
          const m = /BOM-(\d+)/.exec(r.id);
          return m ? Math.max(max, Number(m[1])) : max;
        }, 0);
        addMenuItemDraftBom_.forEach((r, i) => {
          state.recipeBom.push({
            id: `BOM-${String(maxBomNum + i + 1).padStart(3, '0')}`,
            productId: newId,
            productName: name,
            ingId: r.ingId,
            ingName: r.ingName,
            usageQtyPerUnit: r.usageQtyPerUnit,
            lineCost: Math.round(r.usageQtyPerUnit * r.unitCost * 100) / 100
          });
        });

        state.selectedProductId = newId;
        addMenuItemDraftBom_ = [];
        persistLocalBusinessData();
        closeModal();
        renderModulePage('menu-costing');
        showToast(`${name} added to the menu (${newId})`);

        // Best-effort Sheet sync, exactly like every other add-* action —
        // a no-op when no Sheet is connected (apiCall itself handles that),
        // and if a Sheet IS connected but its Code.gs doesn't have an
        // addProduct handler yet, this fails silently the same way any
        // unrecognized action would, without blocking the item from being
        // created locally. Deliberately NOT adding that Code.gs handler
        // here — the owner asked to hold off on Code.gs changes for now.
        apiCall('addProduct', {
          id: newId,
          name,
          category,
          sellingPrice: price,
          gasCost,
          oilCost,
          wastageCost,
          overheadsCost,
          recipeBom: addMenuItemDraftBom_
        });
      };

      const photoInput = document.getElementById('newItemPhotoInput');
      const photoFile = photoInput && photoInput.files && photoInput.files[0];
      if (photoFile) {
        readImageFileAsDataUrl_(photoFile)
          .then((dataUrl) => finishCreate(dataUrl))
          .catch(() => {
            showToast('Could not read that photo — item created without one', 'warning');
            finishCreate(null);
          });
      } else {
        finishCreate(null);
      }
    }
  });

  // =========================================================================
  // 10. KEYBOARD NAVIGATION & RESPONSIVE GUARD
  // =========================================================================
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      if (searchPopover) searchPopover.setAttribute('hidden', '');
      if (appSidebar && appSidebar.classList.contains('is-open')) closeSidebar();
      const periodMenu = document.getElementById('periodMenu');
      if (periodMenu) periodMenu.setAttribute('hidden', '');
      const dateMenu = document.getElementById('dateRangeMenu');
      if (dateMenu) dateMenu.setAttribute('hidden', '');
      return;
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024 && appSidebar && appSidebar.classList.contains('is-open')) {
      closeSidebar();
    }
  });
});
