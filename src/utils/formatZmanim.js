 export function formatZmanim(zman) {
   // chatzot
   var zmanim = {
     chatzot:"חצות",
     chatzot_night:"חצות לילה",
     alot_hashacher:"עלות השחר",
     misheyakir:"משיכיר",
     misheyakir_machmir:"",
     sof_zman_shma:"",
     sof_zman_tfilla:"",
     mincha_gedola:"מנחה גדולה",
     mincha_ketana:"מנחה קטנה",
     plag_hamincha:"פלג המנחה",
     tzeit:"צאת הכוכבים",
     tzeitstars:"",
     neitz_hachama:"הנץ החמה",
     shkiah:"שקיעת החמה"
   }
   return zmanim[zman];
};