export type Language = "en" | "ml" | "ar";

export interface TranslationSchema {
  // Hero
  heroSubtitle: string;
  heroTitle: string;
  heroInviteText: string;
  heroDateVenue: string;
  heroScroll: string;

  // Islamic Decor
  surahTitle: string;
  quranTranslation: string;

  // Couple Reveal
  coupleSubtitle: string;
  coupleHeading: string;
  couple1Desc: string;
  couple2Desc: string;
  coupleQuote: string;

  // Wedding Info
  saveDateLabel: string;
  youAreInvited: string;
  dateLabel: string;
  dateVal: string;
  dateSub: string;
  timeLabel: string;
  timeVal: string;
  timeSub: string;
  venueLabel: string;
  venueVal: string;
  venueSub: string;

  // Add to Calendar
  saveHeaderLine1: string;
  saveHeaderLine2: string;
  saveHeaderFull: string;
  googleBtn: string;
  appleBtn: string;
  reminderBtn: string;
  customAlert: string;
  modalTitle: string;
  modalDesc: string;
  opt1Day: string;
  opt3Hours: string;
  opt1Hour: string;
  opt30Mins: string;
  toastCreated: string;

  // Schedule / Story
  scheduleLabel: string;
  scheduleHeading: string;
  scheduleDate: string;
  event1Time: string;
  event1Title: string;
  event1Desc: string;
  event2Time: string;
  event2Title: string;
  event2Desc: string;
  event3Time: string;
  event3Title: string;
  event3Desc: string;

  // Cinematic Gallery
  galleryLabel: string;
  galleryHeading: string;
  gallerySub: string;
  portraitLabel: string;
  portraitSub: string;
  sacredTitle: string;
  sacredSub: string;
  grandTitle: string;
  grandSub: string;

  // Venue Map
  findWayLabel: string;
  googleMapsBtn: string;
  appleMapsBtn: string;

  // Countdown
  countdownLabel: string;
  countdownHeading: string;
  unitDays: string;
  unitHours: string;
  unitMins: string;
  unitSecs: string;

  // Prayer / Dua
  duaLabel: string;
  duaTranslation: string;
  ameen: string;

  // Final Blessing
  blessingHeading: string;
  blessingSub: string;

  // RSVP
  rsvpLabel: string;
  rsvpHeading: string;
  fullNameLabel: string;
  phoneLabel: string;
  guestsLabel: string;
  personalNoteLabel: string;
  notePlaceholder: string;
  submitBtn: string;
  submittingBtn: string;
  successTitle: string;
  successMsg: string;

  // Loader
  loaderStatus: string;

  // Sticky Venue & Combined Menu Button
  stickyVenueBtn: string;
  floatingMenuBtn: string;
}

export const translations: Record<Language, TranslationSchema> = {
  en: {
    heroSubtitle: "Two Couples • One Sacred Celebration",
    heroTitle: "Bais & Nishad",
    heroInviteText: "Cordially invite you to celebrate their Walima",
    heroDateVenue: "Saturday, 29 August 2026 • Vista Convention Centre",
    heroScroll: "Scroll To Begin",

    surahTitle: "Surah Ar-Rum • 30:21",
    quranTranslation:
      "“And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them, and He has put love and mercy between your hearts.”",

    coupleSubtitle: "Two Families Joined",
    coupleHeading: "Grace & Divine Blessing",
    couple1Desc:
      "Beginning their lifelong journey of love, faith, and togetherness.",
    couple2Desc: "Stepping into a sacred chapter filled with grace and joy.",
    coupleQuote: "Two celebrations, one unforgettable evening",

    saveDateLabel: "Save The Date",
    youAreInvited: "You Are Lovingly Invited",
    dateLabel: "DATE",
    dateVal: "29 August",
    dateSub: "Saturday",
    timeLabel: "TIME",
    timeVal: "4:00 PM",
    timeSub: "Onwards",
    venueLabel: "VENUE",
    venueVal: "Vista Convention Centre",
    venueSub: "Vengad",

    saveHeaderLine1: "Save The Date",
    saveHeaderLine2: "To Your Calendar",
    saveHeaderFull: "Save The Date To Your Calendar",
    googleBtn: "Google Calendar",
    appleBtn: "Apple Calendar",
    reminderBtn: "Set A Reminder",
    customAlert: "Custom Alert",
    modalTitle: "Set Event Reminder",
    modalDesc:
      "Choose when you would like to receive an alert before the Walima ceremony:",
    opt1Day: "1 Day Before",
    opt3Hours: "3 Hours Before",
    opt1Hour: "1 Hour Before",
    opt30Mins: "30 Minutes Before",
    toastCreated: "Reminder event created!",

    scheduleLabel: "Schedule",
    scheduleHeading: "A Gentle Order of Events",
    scheduleDate: "Saturday, 29 August 2026",
    event1Time: "4:00 PM",
    event1Title: "Walima Ceremony",
    event1Desc: "Welcome & Gathering of Honored Guests",
    event2Time: "6:30 PM",
    event2Title: "Dinner & Feast",
    event2Desc: "A Delightful Celebration & Banquet",
    event3Time: "9:00 PM",
    event3Title: "Blessings & Farewell",
    event3Desc: "Prayers & Warm Expressions of Gratitude",

    galleryLabel: "Cinematic Moments",
    galleryHeading: "A Tale of Two Promises",
    gallerySub:
      "Unfolding the romance, elegance, and divine grace of our shared celebration.",
    portraitLabel: "Walima Portrait",
    portraitSub: "Where love finds its eternal home",
    sacredTitle: "Sacred Details",
    sacredSub: "Bound by faith and devotion",
    grandTitle: "Grand Celebration",
    grandSub: "Saturday, 29 August 2026",

    findWayLabel: "Find Your Way",
    googleMapsBtn: "Google Maps",
    appleMapsBtn: "Apple Maps",

    countdownLabel: "Counting Down To",
    countdownHeading: "The Day Our Families Unite",
    unitDays: "Days",
    unitHours: "Hours",
    unitMins: "Minutes",
    unitSecs: "Seconds",

    duaLabel: "A Prayer For The Couples",
    duaTranslation:
      "“May Allah bless you both, and shower His blessings upon you, and unite you both in goodness.”",
    ameen: "Ameen",

    blessingHeading: "We look forward to celebrating this joyous occasion with you.",
    blessingSub: "29 August • Vista Convention Centre • Vengad",

    rsvpLabel: "Will You Join Our Day?",
    rsvpHeading: "Kindly RSVP",
    fullNameLabel: "Full Name",
    phoneLabel: "Phone Number",
    guestsLabel: "Attending Guests",
    personalNoteLabel: "Personal Note",
    notePlaceholder: "A note for the couples (optional)",
    submitBtn: "Send RSVP",
    submittingBtn: "Sending...",
    successTitle: "Jazakumullahu Khairan",
    successMsg:
      "Your response has been received. We can’t wait to celebrate with you.",

    loaderStatus: "An Invitation Is Preparing",
    stickyVenueBtn: "Venue Location",
    floatingMenuBtn: "LOCATION & SETTINGS",
  },

  ml: {
    heroSubtitle: "രണ്ടു കുടുംബങ്ങൾ • ഒരു പവിത്രമായ ആഘോഷം",
    heroTitle: "ബെയ്സ് & നിഷാദ്",
    heroInviteText: "ഞങ്ങളുടെ വലിയാ സൽക്കാരത്തിലേക്ക് താങ്കളെ സ്നേഹപൂർവ്വം ക്ഷണിക്കുന്നു",
    heroDateVenue: "2026 ഓഗസ്റ്റ് 29 ശനിയാഴ്ച • വിസ്റ്റ കൺവെൻഷൻ സെന്റർ",
    heroScroll: "തുടങ്ങാൻ താഴേക്ക് സ്ക്രോൾ ചെയ്യുക",

    surahTitle: "സൂറ അൽ റൂം • 30:21",
    quranTranslation:
      "“തങ്ങളിൽ തന്നെ സമാധാനം കണ്ടെത്തുവാൻ നിങ്ങൾക്കായി നിങ്ങളുടെ വർഗ്ഗത്തിൽ നിന്ന് തന്നെ ഇണകളെ സൃഷ്ടിക്കുകയും, നിങ്ങൾക്കിടയിൽ സ്നേഹവും കരുണയും ഉണ്ടാക്കുകയും ചെയ്തത് അവന്റെ ദൃഷ്ടാന്തങ്ങളിൽ പെട്ടതാണ്.”",

    coupleSubtitle: "രണ്ട് കുടുംബങ്ങൾ ഒന്നിക്കുന്നു",
    coupleHeading: "ദൈവിക അനുഗ്രഹവും കൃപയും",
    couple1Desc:
      "സ്നേഹത്തിന്റെയും വിശ്വാസത്തിന്റെയും ഒത്തുചേരലിന്റെയും പുതിയ ജീവിത യാത്ര തുടങ്ങുന്നു.",
    couple2Desc: "സന്തോഷവും കൃപയും നിറഞ്ഞ പവിത്രമായ പുതിയ അധ്യായത്തിലേക്ക് കാലെടുത്തുവെക്കുന്നു.",
    coupleQuote: "രണ്ട് ആഘോഷങ്ങൾ, അവിസ്മരണീയമായ ഒരു സായാഹ്നം",

    saveDateLabel: "തീയതി കുറിച്ചുവെക്കൂ",
    youAreInvited: "നിങ്ങളെ സ്നേഹപൂർവ്വം ക്ഷണിക്കുന്നു",
    dateLabel: "തീയതി",
    dateVal: "29 ഓഗസ്റ്റ്",
    dateSub: "ശനിയാഴ്ച",
    timeLabel: "സമയം",
    timeVal: "വൈകു. 4:00",
    timeSub: "മുതൽ",
    venueLabel: "വേദി",
    venueVal: "വിസ്റ്റ കൺവെൻഷൻ സെന്റർ",
    venueSub: "വേങ്ങാട്",

    saveHeaderLine1: "തീയതി കലണ്ടറിലേക്ക്",
    saveHeaderLine2: "സേവ് ചെയ്യൂ",
    saveHeaderFull: "കലണ്ടറിലേക്ക് തീയതി സേവ് ചെയ്യൂ",
    googleBtn: "Google Calendar",
    appleBtn: "Apple Calendar",
    reminderBtn: "റിമൈൻഡർ വെക്കൂ",
    customAlert: "അലേർട്ട് സജ്ജമാക്കൂ",
    modalTitle: "ഇവന്റ് റിമൈൻഡർ സജ്ജമാക്കൂ",
    modalDesc:
      "ചടങ്ങിന് എത്ര സമയം മുമ്പ് അലേർട്ട് ലഭിക്കണം എന്ന് തിരഞ്ഞെടുക്കൂ:",
    opt1Day: "1 ദിവസം മുമ്പ്",
    opt3Hours: "3 മണിക്കൂർ മുമ്പ്",
    opt1Hour: "1 മണിക്കൂർ മുമ്പ്",
    opt30Mins: "30 മിനിറ്റ് മുമ്പ്",
    toastCreated: "റിമൈൻഡർ ഇവന്റ് നിർമ്മിച്ചു!",

    scheduleLabel: "പരിപാടികൾ",
    scheduleHeading: "ചടങ്ങുകളുടെ സമയക്രമം",
    scheduleDate: "2026 ഓഗസ്റ്റ് 29 ശനിയാഴ്ച",
    event1Time: "വൈകു. 4:00",
    event1Title: "വലിയാ ചടങ്ങ്",
    event1Desc: "പ്രിയപ്പെട്ട അതിഥികളുടെ വരവും സ്വീകരണവും",
    event2Time: "വൈകു. 6:30",
    event2Title: "സ്നേഹവിരുന്ന്",
    event2Desc: "രുചികരമായ മംഗള വിരുന്ന്",
    event3Time: "രാത്രി 9:00",
    event3Title: "പ്രാർത്ഥനയും യാത്രയയപ്പും",
    event3Desc: "പ്രാർത്ഥനകളും നന്ദി പ്രകടനവും",

    galleryLabel: "മനോഹര മുഹൂർത്തങ്ങൾ",
    galleryHeading: "രണ്ട് വാഗ്ദാനങ്ങളുടെ കഥ",
    gallerySub:
      "പ്രണയവും സൗന്ദര്യവും ദൈവകൃപയും നിറഞ്ഞ ഞങ്ങളുടെ ആഘോഷം.",
    portraitLabel: "വലിയാ പോർട്രെയിറ്റ്",
    portraitSub: "സ്നേഹം അതിന്റെ നിത്യവസതി കണ്ടെത്തുന്ന ഇടം",
    sacredTitle: "പവിത്രമായ കാഴ്ചകൾ",
    sacredSub: "വിശ്വാസത്താലും ഭക്തിയാലും ബദ്ധിതർ",
    grandTitle: "മഹാ ആഘോഷം",
    grandSub: "2026 ഓഗസ്റ്റ് 29 ശനിയാഴ്ച",

    findWayLabel: "സ്ഥലത്തെത്താൻ",
    googleMapsBtn: "Google Maps",
    appleMapsBtn: "Apple Maps",

    countdownLabel: "ഇനി എത്ര നാൾ",
    countdownHeading: "കുടുംബങ്ങൾ ഒന്നാകുന്ന ദിവസത്തിലേക്ക്",
    unitDays: "ദിവസം",
    unitHours: "മണിക്കൂർ",
    unitMins: "മിനിറ്റ്",
    unitSecs: "സെക്കൻഡ്",

    duaLabel: "നവദമ്പതികൾക്കായി പ്രാർത്ഥന",
    duaTranslation:
      "“അല്ലാഹു നിങ്ങൾക്ക് ഇരുവർക്കും ബറകത്ത് നൽകട്ടെ, നിങ്ങളുടെ മേൽ അനുഗ്രഹം ചൊരിയട്ടെ, നന്മയിൽ നിങ്ങളെ ഒന്നാക്കട്ടെ.”",
    ameen: "ആമീൻ",

    blessingHeading:
      "ഈ സന്തോഷ നിമിഷം നിങ്ങളോടൊപ്പം ആഘോഷിക്കാൻ ഞങ്ങൾ കാത്തിരിക്കുന്നു.",
    blessingSub: "ഓഗസ്റ്റ് 29 • വിസ്റ്റ കൺവെൻഷൻ സെന്റർ • വേങ്ങാട്",

    rsvpLabel: "ഞങ്ങളോടൊപ്പം പങ്കുചേരുമോ?",
    rsvpHeading: "നിങ്ങളുടെ വരവ് അറിയിക്കൂ",
    fullNameLabel: "പൂർണ്ണമായ പേര്",
    phoneLabel: "ഫോൺ നമ്പർ",
    guestsLabel: "അതിഥികളുടെ എണ്ണം",
    personalNoteLabel: "സന്ദേശം",
    notePlaceholder: "ആശംസകൾ അയക്കൂ (നിർബന്ധമില്ല)",
    submitBtn: "RSVP അയക്കൂ",
    submittingBtn: "അയക്കുന്നു...",
    successTitle: "ജസാക്കമുള്ളാഹു ഖൈറാൻ",
    successMsg:
      "നിങ്ങളുടെ മറുപടി ലഭിച്ചു. നിങ്ങളോടൊപ്പം ആഘോഷിക്കാൻ ഞങ്ങൾ കാത്തിരിക്കുന്നു.",

    loaderStatus: "ക്ഷണം തയ്യാറാകുന്നു",
    stickyVenueBtn: "വേദി അറിയാം",
    floatingMenuBtn: "മെനു & മാപ്പ്",
  },

  ar: {
    heroSubtitle: "زوجان • احتفال مقدس واحد",
    heroTitle: "بيس ونشاط",
    heroInviteText: "يتشرفون بدعوتكم لحضور حفل الوليمة المبارك",
    heroDateVenue: "السبت، 29 أغسطس 2026 • مركز فيستا للمؤتمرات",
    heroScroll: "تمرير للبدء",

    surahTitle: "سورة الروم • 30:21",
    quranTranslation:
      "«وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً»",

    coupleSubtitle: "عائلتان تتحدان",
    coupleHeading: "نعمة وبركة إلهية",
    couple1Desc:
      "بدء رحلة الحياة المحاطة بالمحبة والإيمان والوئام.",
    couple2Desc: "الخطو إلى فصل مقدس مليء بالبركة والسرور.",
    coupleQuote: "احتفالان، وأمسية واحدة لا تُنسى",

    saveDateLabel: "احفظ التاريخ",
    youAreInvited: "أنتم مدعوون بكل حب",
    dateLabel: "التاريخ",
    dateVal: "29 أغسطس",
    dateSub: "السبت",
    timeLabel: "الوقت",
    timeVal: "4:00 مساءً",
    timeSub: "فصاعداً",
    venueLabel: "المكان",
    venueVal: "مركز فيستا للمؤتمرات",
    venueSub: "فينجاد",

    saveHeaderLine1: "احفظ التاريخ",
    saveHeaderLine2: "في تقويمك",
    saveHeaderFull: "احفظ التاريخ في تقويمك",
    googleBtn: "Google Calendar",
    appleBtn: "Apple Calendar",
    reminderBtn: "ضبط تذكير",
    customAlert: "تنبيه مخصص",
    modalTitle: "ضبط تذكير بالحدث",
    modalDesc:
      "اختر الوقت الذي ترغب في تلقي تنبيه فيه قبل بدء حفل الوليمة:",
    opt1Day: "قبل يوم واحد",
    opt3Hours: "قبل 3 ساعات",
    opt1Hour: "قبل ساعة واحدة",
    opt30Mins: "قبل 30 دقيقة",
    toastCreated: "تم إنشاء التذكير بنجاح!",

    scheduleLabel: "الجدول الزمني",
    scheduleHeading: "ترتيب حفل الوليمة",
    scheduleDate: "السبت، 29 أغسطس 2026",
    event1Time: "4:00 مساءً",
    event1Title: "حفل الوليمة",
    event1Desc: "استقبال واستضافة الضيوف الكرام",
    event2Time: "6:30 مساءً",
    event2Title: "مأدبة العشاء",
    event2Desc: "احتفال بهيج ومأدبة فاخرة",
    event3Time: "9:00 مساءً",
    event3Title: "الدعاء والوداع",
    event3Desc: "الدعوات والثناء والامتنان",

    galleryLabel: "لحظات سينمائية",
    galleryHeading: "قصة وعدين",
    gallerySub:
      "تجسيد الرومانسية والأناقة والنعمة الإلهية لاحتفالنا المشترك.",
    portraitLabel: "صورة الوليمة",
    portraitSub: "حيث يجد الحب مأواه الأبدي",
    sacredTitle: "تفاصيل مقدسة",
    sacredSub: "مرتبطون بالإيمان والوفاء",
    grandTitle: "احتفال كبير",
    grandSub: "السبت، 29 أغسطس 2026",

    findWayLabel: "الوصول للمكان",
    googleMapsBtn: "Google Maps",
    appleMapsBtn: "Apple Maps",

    countdownLabel: "العد التنازلي",
    countdownHeading: "يوم اتحاد عائلتنا",
    unitDays: "أيام",
    unitHours: "ساعات",
    unitMins: "دقائق",
    unitSecs: "ثواني",

    duaLabel: "دعاء للزوجين",
    duaTranslation:
      "«بَارَكَ اللهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ»",
    ameen: "آمين",

    blessingHeading: "نتطلع إلى الاحتفال بهذه المناسبة السعيدة معكم.",
    blessingSub: "29 أغسطس • مركز فيستا للمؤتمرات • فينجاد",

    rsvpLabel: "هل ستنضم إلينا؟",
    rsvpHeading: "تأكيد الحضور",
    fullNameLabel: "الاسم الكامل",
    phoneLabel: "رقم الهاتف",
    guestsLabel: "عدد الضيوف",
    personalNoteLabel: "ملاحظة شخصية",
    notePlaceholder: "رسالة للزوجين (اختياري)",
    submitBtn: "إرسال التأكيد",
    submittingBtn: "جاري الإرسال...",
    successTitle: "جزاكم الله خيراً",
    successMsg:
      "تم استلام ردكم بنجاح. نتطلع بشوق للاحتفال معكم.",

    loaderStatus: "جاري إعداد الدعوة",
    stickyVenueBtn: "موقع القاعة",
    floatingMenuBtn: "القائمة والخيارات",
  },
};
