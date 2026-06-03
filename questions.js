// Class 10 Biology - Chapter metadata and question database
// Contains questions in English and Hindi

const CHAPTERS = [
  {
    id: "life-processes",
    name: {
      en: "Life Processes",
      hi: "जैव प्रक्रम"
    },
    description: {
      en: "Nutrition, Respiration, Transportation, and Excretion.",
      hi: "पोषण, श्वसन, वहन, और उत्सर्जन।"
    },
    icon: "🌱"
  },
  {
    id: "control-coordination",
    name: {
      en: "Control and Coordination",
      hi: "नियंत्रण एवं समन्वय"
    },
    description: {
      en: "Nervous system, brain, and chemical coordination in plants and animals.",
      hi: "तंत्रिका तंत्र, मस्तिष्क, तथा पौधों और जंतुओं में रासायनिक समन्वय।"
    },
    icon: "🧠"
  },
  {
    id: "reproduction",
    name: {
      en: "How do Organisms Reproduce?",
      hi: "जीव जनन कैसे करते हैं?"
    },
    description: {
      en: "Asexual and sexual reproduction, human reproduction, and reproductive health.",
      hi: "अलैंगिक और लैंगिक जनन, मानव जनन, और जनन स्वास्थ्य।"
    },
    icon: "🌸"
  },
  {
    id: "heredity",
    name: {
      en: "Heredity",
      hi: "आनुवंशिकता"
    },
    description: {
      en: "Mendelian genetics, laws of inheritance, and sex determination.",
      hi: "मेंडल के नियम, वंशागति के सिद्धांत, और लिंग निर्धारण।"
    },
    icon: "🧬"
  },
  {
    id: "environment",
    name: {
      en: "Our Environment",
      hi: "हमारा पर्यावरण"
    },
    description: {
      en: "Ecosystems, food chains, trophic levels, and environmental issues.",
      hi: "पारितंत्र, खाद्य श्रृंखला, पोषी स्तर, और पर्यावरणीय समस्याएं।"
    },
    icon: "🌍"
  }
];

const BIOLOGY_QUESTIONS = [
  // ================= CHAPTER 1: LIFE PROCESSES =================
  {
    id: 101,
    chapterId: "life-processes",
    question: {
      en: "Which of the following tissues is responsible for the transport of water and minerals in plants?",
      hi: "पौधों में जल और खनिजों के परिवहन के लिए निम्नलिखित में से कौन सा ऊतक उत्तरदायी है?"
    },
    options: {
      en: ["Phloem", "Xylem", "Parenchyma", "Sclerenchyma"],
      hi: ["फ्लोएम", "जाइलम", "पैरेंकाइमा", "स्क्लेरेंकाइमा"]
    },
    correctIndex: 1,
    explanation: {
      en: "Xylem tissue is responsible for the upward transport of water and minerals from the roots. Phloem transports prepared food.",
      hi: "जाइलम ऊतक जड़ों से पानी और खनिजों के ऊपर की ओर परिवहन के लिए जिम्मेदार है। फ्लोएम तैयार भोजन का परिवहन करता है।"
    }
  },
  {
    id: 102,
    chapterId: "life-processes",
    question: {
      en: "The breakdown of pyruvate to give carbon dioxide, water, and energy takes place in which cellular organelle?",
      hi: "पायरुवेट के विखंडन से कार्बन डाइऑक्साइड, जल तथा ऊर्जा देने वाली क्रिया कोशिका के किस अंगक में होती है?"
    },
    options: {
      en: ["Cytoplasm", "Mitochondria", "Chloroplast", "Nucleus"],
      hi: ["कोशिकाद्रव्य", "माइटोकॉन्ड्रिया", "हरितलवक", "केंद्रक"]
    },
    correctIndex: 1,
    explanation: {
      en: "The aerobic breakdown of pyruvate to release carbon dioxide, water, and a large amount of energy (ATP) takes place in the mitochondria.",
      hi: "कार्बन डाइऑक्साइड, जल और बड़ी मात्रा में ऊर्जा (ATP) जारी करने के लिए पायरुवेट का वायवीय विखंडन माइटोकॉन्ड्रिया में होता है।"
    }
  },
  {
    id: 103,
    chapterId: "life-processes",
    question: {
      en: "Which enzyme present in saliva breaks down starch into simple sugars?",
      hi: "लार में मौजूद कौन सा एंजाइम स्टार्च को साधारण शर्करा में तोड़ता है?"
    },
    options: {
      en: ["Pepsin", "Trypsin", "Salivary Amylase", "Lipase"],
      hi: ["पेप्सिन", "ट्रिप्सिन", "लार एमाइलेज", "लाइपेज"]
    },
    correctIndex: 2,
    explanation: {
      en: "Salivary amylase (also known as ptyalin) is an enzyme in saliva that digests complex starch molecules into simple sugars like maltose.",
      hi: "लार एमाइलेज (जिसे टायलिन भी कहा जाता है) लार में एक एंजाइम है जो जटिल स्टार्च अणुओं को माल्टोज़ जैसी साधारण शर्करा में पचाता है।"
    }
  },
  {
    id: 104,
    chapterId: "life-processes",
    question: {
      en: "In which part of the human alimentary canal does complete digestion of food take place?",
      hi: "मानव आहार नाल के किस भाग में भोजन का पूर्ण पाचन होता है?"
    },
    options: {
      en: ["Stomach", "Large Intestine", "Small Intestine", "Oesophagus"],
      hi: ["आमाशय", "बड़ी आंत", "छोटी आंत", "ग्रासनली"]
    },
    correctIndex: 2,
    explanation: {
      en: "The small intestine is the site of complete digestion of carbohydrates, proteins, and fats, where secretions from the liver and pancreas act on food.",
      hi: "छोटी आंत कार्बोहाइड्रेट, प्रोटीन और वसा के पूर्ण पाचन का स्थल है, जहां यकृत और अग्न्याशय से स्राव भोजन पर कार्य करते हैं।"
    }
  },
  {
    id: 105,
    chapterId: "life-processes",
    question: {
      en: "Which instrument is used to measure human blood pressure?",
      hi: "मानव रक्तचाप मापने के लिए किस उपकरण का उपयोग किया जाता है?"
    },
    options: {
      en: ["Barometer", "Sphygmomanometer", "Thermometer", "Stethoscope"],
      hi: ["बैरोमीटर", "स्फिग्मोमैनोमीटर", "थर्मामीटर", "स्टेथोस्कोप"]
    },
    correctIndex: 1,
    explanation: {
      en: "A sphygmomanometer is the medical device used to measure arterial blood pressure. Normal blood pressure is 120/80 mmHg.",
      hi: "स्फिग्मोमैनोमीटर एक चिकित्सा उपकरण है जिसका उपयोग धमनी रक्तचाप को मापने के लिए किया जाता है। सामान्य रक्तचाप 120/80 mmHg होता है।"
    }
  },
  {
    id: 106,
    chapterId: "life-processes",
    question: {
      en: "What is the structural and functional unit of the human excretory system (kidneys)?",
      hi: "मानव उत्सर्जन तंत्र (वृक्क) की संरचनात्मक और क्रियात्मक इकाई क्या है?"
    },
    options: {
      en: ["Neuron", "Nephron", "Alveoli", "Capillary"],
      hi: ["न्यूरॉन", "नेफ्रॉन", "कूपिका", "केशिका"]
    },
    correctIndex: 1,
    explanation: {
      en: "Nephrons are the microscopic filtering units of kidneys that filter waste, excess salts, and water from blood to form urine.",
      hi: "नेफ्रॉन वृक्क (किडनी) की सूक्ष्म छानने वाली इकाइयाँ हैं जो मूत्र बनाने के लिए रक्त से अपशिष्ट, अतिरिक्त लवण और पानी को छानती हैं।"
    }
  },
  {
    id: 107,
    chapterId: "life-processes",
    question: {
      en: "What are the raw materials required for photosynthesis in autotrophs?",
      hi: "स्वपोषी जीवों में प्रकाश संश्लेषण के लिए आवश्यक कच्ची सामग्रियां कौन सी हैं?"
    },
    options: {
      en: ["Carbon dioxide, Water, Sunlight, Chlorophyll", "Oxygen, Water, Sunlight", "Carbon dioxide, Nitrogen, Sunlight", "Oxygen, Glucose, Sunlight"],
      hi: ["कार्बन डाइऑक्साइड, जल, सूर्य का प्रकाश, क्लोरोफिल", "ऑक्सीजन, जल, सूर्य का प्रकाश", "कार्बन डाइऑक्साइड, नाइट्रोजन, सूर्य का प्रकाश", "ऑक्सीजन, ग्लूकोज, सूर्य का प्रकाश"]
    },
    correctIndex: 0,
    explanation: {
      en: "Photosynthesis requires carbon dioxide, water, sunlight, and chlorophyll to produce glucose and oxygen.",
      hi: "प्रकाश संश्लेषण को ग्लूकोज और ऑक्सीजन बनाने के लिए कार्बन डाइऑक्साइड, पानी, सूर्य के प्रकाश और क्लोरोफिल की आवश्यकता होती है।"
    }
  },
  {
    id: 108,
    chapterId: "life-processes",
    question: {
      en: "Why is the separation of oxygenated and deoxygenated blood useful in mammals?",
      hi: "स्तनधारियों में ऑक्सीजन युक्त और ऑक्सीजन रहित रक्त को अलग रखना क्यों उपयोगी है?"
    },
    options: {
      en: ["To reduce body temperature", "To ensure high efficiency supply of oxygen for constant body temperature", "To slow down the circulatory process", "To decrease blood pressure"],
      hi: ["शरीर के तापमान को कम करने के लिए", "शरीर के निरंतर तापमान को बनाए रखने के लिए ऑक्सीजन की उच्च दक्षता आपूर्ति सुनिश्चित करने हेतु", "रक्त संचार प्रक्रिया को धीमा करने के लिए", "रक्तचाप को कम करने के लिए"]
    },
    correctIndex: 1,
    explanation: {
      en: "Mammals are warm-blooded and need constant energy to maintain body temperature. Separation of blood prevents mixing and ensures highly efficient oxygen supply.",
      hi: "स्तनधारी गर्म खून वाले जीव होते हैं और उन्हें शरीर का तापमान बनाए रखने के लिए निरंतर ऊर्जा की आवश्यकता होती है। रक्त का अलगाव मिश्रण को रोकता है और कुशल ऑक्सीजन आपूर्ति सुनिश्चित करता है।"
    }
  },

  // ================= CHAPTER 2: CONTROL AND COORDINATION =================
  {
    id: 201,
    chapterId: "control-coordination",
    question: {
      en: "What is the microscopic gap between two adjacent neurons across which nerve impulses pass called?",
      hi: "दो आसन्न न्यूरॉन्स के बीच के सूक्ष्म अंतराल को क्या कहा जाता है जिससे होकर तंत्रिका आवेग गुजरते हैं?"
    },
    options: {
      en: ["Axon", "Dendrite", "Synapse", "Myelin sheath"],
      hi: ["एक्सॉन", "द्रुमाकृतिक (डेंड्राइट)", "सिनेप्स (अंतर्ग्रथन)", "मायलिन आच्छद"]
    },
    correctIndex: 2,
    explanation: {
      en: "A synapse is the junction/gap between the axon ending of one neuron and the dendrites of the next, where signals travel chemically.",
      hi: "सिनेप्स एक न्यूरॉन के एक्सॉन अंत और अगले न्यूरॉन के डेंड्राइट्स के बीच का जोड़/अंतराल है, जहां संकेत रासायनिक रूप से यात्रा करते हैं।"
    }
  },
  {
    id: 202,
    chapterId: "control-coordination",
    question: {
      en: "Which part of the brain is primarily responsible for maintaining posture, balance, and precision in voluntary actions?",
      hi: "मस्तिष्क का कौन सा भाग मुख्य रूप से मुद्रा, संतुलन और स्वैच्छिक क्रियाओं में सटीकता बनाए रखने के लिए जिम्मेदार है?"
    },
    options: {
      en: ["Cerebrum", "Cerebellum", "Medulla Oblongata", "Pons"],
      hi: ["प्रमस्तिष्क (सेरेब्रम)", "अनुमस्तिष्क (सेरेबेलम)", "मध्यांश (मेडुला ऑबलोंगेटा)", "पोंस"]
    },
    correctIndex: 1,
    explanation: {
      en: "The cerebellum, located at the hindbrain, coordinates voluntary movements such as walking, body posture, and physical balance.",
      hi: "अनुमस्तिष्क (सेरेबेलम), जो पश्चमस्तिष्क में स्थित है, चलने, शरीर की मुद्रा और शारीरिक संतुलन जैसी स्वैच्छिक गतिविधियों का समन्वय करता है।"
    }
  },
  {
    id: 203,
    chapterId: "control-coordination",
    question: {
      en: "Which plant hormone is responsible for promoting cell division?",
      hi: "कोशिका विभाजन को बढ़ावा देने के लिए कौन सा पादप हार्मोन जिम्मेदार है?"
    },
    options: {
      en: ["Auxin", "Gibberellin", "Cytokinin", "Abscisic Acid"],
      hi: ["ऑक्सिन", "जिबरेलिन", "साइटोकाइनिन", "एब्सिसिक एसिड"]
    },
    correctIndex: 2,
    explanation: {
      en: "Cytokinins promote cell division and are present in higher concentrations in areas of rapid cell division, like seeds and fruits.",
      hi: "साइटोकाइनिन कोशिका विभाजन को बढ़ावा देते हैं और वे बीज और फलों जैसे तीव्र कोशिका विभाजन वाले क्षेत्रों में उच्च सांद्रता में मौजूद होते हैं।"
    }
  },
  {
    id: 204,
    chapterId: "control-coordination",
    question: {
      en: "Which plant hormone acts as a growth inhibitor and is responsible for the wilting of leaves?",
      hi: "कौन सा पादप हार्मोन वृद्धि अवरोधक के रूप में कार्य करता है और पत्तियों के मुरझाने के लिए जिम्मेदार है?"
    },
    options: {
      en: ["Gibberellin", "Auxin", "Abscisic Acid", "Cytokinin"],
      hi: ["जिबरेलिन", "ऑक्सिन", "एब्सिसिक एसिड", "साइटोकाइनिन"]
    },
    correctIndex: 2,
    explanation: {
      en: "Abscisic acid (ABA) is a growth-inhibiting plant hormone that triggers leaf shedding, wilting, and seed dormancy.",
      hi: "एब्सिसिक एसिड (ABA) एक वृद्धि-अवरोधक पादप हार्मोन है जो पत्तियों के झड़ने, मुरझाने और बीज प्रसुप्ति (सुप्तावस्था) को सक्रिय करता है।"
    }
  },
  {
    id: 205,
    chapterId: "control-coordination",
    question: {
      en: "Which hormone, secreted by the pancreas, regulates the sugar level in human blood?",
      hi: "अग्न्याशय द्वारा स्रावित कौन सा हार्मोन मानव रक्त में शर्करा (शुगर) के स्तर को नियंत्रित करता है?"
    },
    options: {
      en: ["Thyroxine", "Adrenaline", "Insulin", "Estrogen"],
      hi: ["थायरोक्सिन", "एड्रिनालिन", "इंसुलिन", "एस्ट्रोजन"]
    },
    correctIndex: 2,
    explanation: {
      en: "Insulin is secreted by the pancreas. It helps cells absorb glucose from blood, thereby lowering blood sugar levels.",
      hi: "इंसुलिन अग्न्याशय द्वारा स्रावित होता है। यह कोशिकाओं को रक्त से ग्लूकोज को अवशोषित करने में मदद करता है, जिससे रक्त शर्करा का स्तर कम होता है।"
    }
  },
  {
    id: 206,
    chapterId: "control-coordination",
    question: {
      en: "Which endocrine gland is known as the 'Master Gland' because it controls other endocrine glands?",
      hi: "किस अंतःस्रावी ग्रंथि को 'मास्टर ग्रंथि' के रूप में जाना जाता है क्योंकि यह अन्य अंतःस्रावी ग्रंथियों को नियंत्रित करती है?"
    },
    options: {
      en: ["Thyroid Gland", "Adrenal Gland", "Pituitary Gland", "Pancreas"],
      hi: ["थायराइड ग्रंथि", "एड्रिनल ग्रंथि", "पीयूष ग्रंथि (पिट्यूटरी)", "अग्न्याशय"]
    },
    correctIndex: 2,
    explanation: {
      en: "The pituitary gland, located at the base of the brain, secretes hormones that regulate growth and instruct other glands to release hormones.",
      hi: "पीयूष ग्रंथि, जो मस्तिष्क के आधार पर स्थित है, ऐसे हार्मोन स्रावित करती है जो विकास को नियंत्रित करते हैं और अन्य ग्रंथियों को हार्मोन जारी करने का निर्देश देते हैं।"
    }
  },
  {
    id: 207,
    chapterId: "control-coordination",
    question: {
      en: "What is an immediate, automatic, and involuntary response to a sensory stimulus called?",
      hi: "किसी संवेदी उद्दीपन के प्रति तत्काल, स्वचालित और अनैच्छिक प्रतिक्रिया को क्या कहा जाता है?"
    },
    options: {
      en: ["Reflex Action", "Voluntary Movement", "Phototropism", "Chemical Coordination"],
      hi: ["प्रतिवर्ती क्रिया", "ऐच्छिक गति", "प्रकाशानुवर्तन", "रासायनिक समन्वय"]
    },
    correctIndex: 0,
    explanation: {
      en: "A reflex action is a rapid, automatic response to a stimulus (like pulling hand away from fire) managed directly by the spinal cord to save time.",
      hi: "प्रतिवर्ती क्रिया किसी उद्दीपन के प्रति एक तीव्र, स्वचालित प्रतिक्रिया है (जैसे आग से हाथ पीछे खींचना) जो समय बचाने के लिए सीधे मेरुरज्जू द्वारा नियंत्रित होती है।"
    }
  },
  {
    id: 208,
    chapterId: "control-coordination",
    question: {
      en: "Iodine is essential for the synthesis of which hormone by the thyroid gland?",
      hi: "थायराइड ग्रंथि द्वारा किस हार्मोन के संश्लेषण के लिए आयोडीन आवश्यक है?"
    },
    options: {
      en: ["Insulin", "Thyroxine", "Adrenaline", "Growth Hormone"],
      hi: ["इंसुलिन", "थायरोक्सिन", "एड्रिनालिन", "वृद्धि हार्मोन"]
    },
    correctIndex: 1,
    explanation: {
      en: "Iodine is necessary for the thyroid gland to produce thyroxine, which regulates carbohydrate, protein, and fat metabolism in the body.",
      hi: "थायराइड ग्रंथि को थायरोक्सिन का उत्पादन करने के लिए आयोडीन की आवश्यकता होती है, जो शरीर में कार्बोहाइड्रेट, प्रोटीन और वसा के चयापचय को नियंत्रित करता है।"
    }
  },

  // ================= CHAPTER 3: HOW DO ORGANISMS REPRODUCE? =================
  {
    id: 301,
    chapterId: "reproduction",
    question: {
      en: "By which method of asexual reproduction does Amoeba reproduce?",
      hi: "अमीबा अलैंगिक जनन की किस विधि द्वारा जनन करता है?"
    },
    options: {
      en: ["Budding", "Fragmentation", "Binary Fission", "Spore Formation"],
      hi: ["मुकुलन", "खंडन", "द्विखंडन", "बीजाणु समासंघ"]
    },
    correctIndex: 2,
    explanation: {
      en: "Amoeba reproduces through binary fission, where the single parent cell divides into two identical daughter cells during cell division.",
      hi: "अमीबा द्विखंडन के माध्यम से जनन करता है, जहां कोशिका विभाजन के दौरान एकल जनक कोशिका दो समान संतति कोशिकाओं में विभाजित हो जाती है।"
    }
  },
  {
    id: 302,
    chapterId: "reproduction",
    question: {
      en: "Budding is a common asexual method in which of the following organisms?",
      hi: "मुकुलन निम्नलिखित में से किस जीव में एक सामान्य अलैंगिक विधि है?"
    },
    options: {
      en: ["Amoeba", "Hydra & Yeast", "Plasmodium", "Spirogyra"],
      hi: ["अमीबा", "हाइड्रा और यीस्ट", "प्लास्मोडियम", "स्पाइरोगाइरा"]
    },
    correctIndex: 1,
    explanation: {
      en: "Hydra and Yeast reproduce by budding, where a small outgrowth (bud) develops on the parent body, matures, and eventually detaches.",
      hi: "हाइड्रा और यीस्ट मुकुलन द्वारा जनन करते हैं, जहां जनक शरीर पर एक छोटा उभार (मुकुल) विकसित होता है, परिपक्व होता है, और अंततः अलग हो जाता है।"
    }
  },
  {
    id: 303,
    chapterId: "reproduction",
    question: {
      en: "Which part of a flower's stamen contains the pollen grains?",
      hi: "फूल के पुंकेसर के किस भाग में परागकण होते हैं?"
    },
    options: {
      en: ["Style", "Filament", "Anther", "Stigma"],
      hi: ["वर्तिका", "तंतु", "परागकोश", "वर्तिकाग्र"]
    },
    correctIndex: 2,
    explanation: {
      en: "The stamen is the male reproductive part of a flower. It consists of a filament and an anther, which produces and contains pollen grains.",
      hi: "पुंकेसर फूल का नर जनन अंग है। इसमें एक तंतु और एक परागकोश होता है, जो परागकणों का उत्पादन और धारण करता है।"
    }
  },
  {
    id: 304,
    chapterId: "reproduction",
    question: {
      en: "Which of the following forms the female reproductive organ (pistil/carpel) of a flower?",
      hi: "निम्नलिखित में से कौन फूल का मादा जनन अंग (स्त्रीकेसर) बनाता है?"
    },
    options: {
      en: ["Anther, Filament, Sepals", "Stigma, Style, Ovary", "Petals, Sepals, Receptacle", "Pollen grain, Style, Stamen"],
      hi: ["परागकोश, तंतु, बाह्यदल", "वर्तिकाग्र, वर्तिका, अंडाशय", "पंखुड़ियाँ, बाह्यदल, पुष्पासन", "परागकण, वर्तिका, पुंकेसर"]
    },
    correctIndex: 1,
    explanation: {
      en: "The female reproductive organ, carpel/pistil, is located in the center of the flower and consists of three parts: stigma, style, and ovary.",
      hi: "मादा जनन अंग, स्त्रीकेसर, फूल के केंद्र में स्थित होता है और इसके तीन भाग होते हैं: वर्तिकाग्र, वर्तिका और अंडाशय।"
    }
  },
  {
    id: 305,
    chapterId: "reproduction",
    question: {
      en: "Where does fertilization of the human egg by sperm typically occur?",
      hi: "आमतौर पर शुक्राणु द्वारा मानव अंडे का निषेचन कहाँ होता है?"
    },
    options: {
      en: ["Uterus", "Vagina", "Oviduct (Fallopian Tube)", "Ovary"],
      hi: ["गर्भाशय", "योनि", "डिंबवाहिनी (फैलोपियन ट्यूब)", "अंडाशय"]
    },
    correctIndex: 2,
    explanation: {
      en: "Fertilization (the fusion of sperm and egg) occurs in the oviduct (also called the Fallopian tube). The fertilized egg (zygote) then implants in the uterus.",
      hi: "निषेचन (शुक्रानु और अंडे का मिलन) डिंबवाहिनी (फैलोपियन ट्यूब) में होता है। निषेचित अंडा (युग्मनज) फिर गर्भाशय में प्रत्यारोपित होता है।"
    }
  },
  {
    id: 306,
    chapterId: "reproduction",
    question: {
      en: "Which specialized disc-like tissue facilitates the exchange of nutrients, oxygen, and waste between mother and embryo?",
      hi: "कौन सा विशिष्ट डिस्क जैसा ऊतक मां और भ्रूण के बीच पोषक तत्वों, ऑक्सीजन और अपशिष्ट के आदान-प्रदान की सुविधा प्रदान करता है?"
    },
    options: {
      en: ["Uterus wall", "Placenta", "Amniotic Sac", "Fallopian Tube"],
      hi: ["गर्भाशय की दीवार", "प्लेसेंटा (अपरा)", "उल्व कोष (एमनियोटिक सैक)", "फैलोपियन ट्यूब"]
    },
    correctIndex: 1,
    explanation: {
      en: "The placenta is a specialized tissue embedded in the uterine wall that connects the embryo to the mother's blood supply for nourishment and waste removal.",
      hi: "प्लेसेंटा गर्भाशय की दीवार में धंसा हुआ एक विशिष्ट ऊतक है जो पोषण और अपशिष्ट हटाने के लिए भ्रूण को मां की रक्त आपूर्ति से जोड़ता है।"
    }
  },
  {
    id: 307,
    chapterId: "reproduction",
    question: {
      en: "Which of the following is a mechanical barrier method of contraception?",
      hi: "निम्नलिखित में से कौन गर्भनिरोधक की एक यांत्रिक अवरोधक (Barrier) विधि है?"
    },
    options: {
      en: ["Copper-T", "Condom", "Oral Pills", "Vasectomy"],
      hi: ["कॉपर-टी", "कंडोम", "गर्भनिरोधक गोलियां", "नसबंदी (वासेक्टॉमी)"]
    },
    correctIndex: 1,
    explanation: {
      en: "Condoms act as mechanical barriers that prevent sperms from reaching the egg. They also protect against Sexually Transmitted Diseases (STDs).",
      hi: "कंडोम यांत्रिक अवरोधक के रूप में कार्य करते हैं जो शुक्राणुओं को अंडे तक पहुँचने से रोकते हैं। वे यौन संचारित रोगों (STDs) से भी रक्षा करते हैं।"
    }
  },
  {
    id: 308,
    chapterId: "reproduction",
    question: {
      en: "In sexual reproduction, what develops from the ovule after fertilization?",
      hi: "लैंगिक जनन में, निषेचन के बाद बीजांड (Ovule) से क्या विकसित होता है?"
    },
    options: {
      en: ["Fruit", "Seed", "Flower", "Bud"],
      hi: ["फल", "बीज", "फूल", "कली"]
    },
    correctIndex: 1,
    explanation: {
      en: "After fertilization, the zygote divides repeatedly to form an embryo within the ovule. The ovule develops a tough coat and gradually converts into a seed.",
      hi: "निषेचन के बाद, बीजांड के भीतर भ्रूण बनाने के लिए युग्मनज बार-बार विभाजित होता है। बीजांड एक सख्त आवरण विकसित करता है और धीरे-धीरे बीज में बदल जाता है।"
    }
  },

  // ================= CHAPTER 4: HEREDITY =================
  {
    id: 401,
    chapterId: "heredity",
    question: {
      en: "Who is known as the 'Father of Genetics' for his pioneering work on inheritance?",
      hi: "वंशागति पर अपने अग्रणी कार्य के लिए किसे 'अनुवांशिकी का जनक' माना जाता है?"
    },
    options: {
      en: ["Charles Darwin", "Gregor Mendel", "Jean-Baptiste Lamarck", "Watson and Crick"],
      hi: ["चार्ल्स डार्विन", "ग्रेगर मेंडल", "जीन-बैप्टिस्ट लैमार्क", "वाटसन और क्रिक"]
    },
    correctIndex: 1,
    explanation: {
      en: "Gregor Johann Mendel conducted experiments on garden pea plants and formulated the fundamental laws of inheritance.",
      hi: "ग्रेगर जोहान मेंडल ने मटर के पौधों पर प्रयोग किए और वंशागति के मूलभूत नियमों को प्रतिपादित किया।"
    }
  },
  {
    id: 402,
    chapterId: "heredity",
    question: {
      en: "What is the scientific name of the garden pea plant selected by Mendel for his genetic experiments?",
      hi: "मेंडल द्वारा अपने आनुवंशिक प्रयोगों के लिए चुने गए बगीचे के मटर के पौधे का वैज्ञानिक नाम क्या है?"
    },
    options: {
      en: ["Pisum sativum", "Solanum tuberosum", "Rosa indica", "Mangifera indica"],
      hi: ["पाइसम सैटाइवम (Pisum sativum)", "सोलेनम ट्यूबरोसम", "रोजा इंडिका", "मंगिफेरा इंडिका"]
    },
    correctIndex: 0,
    explanation: {
      en: "Pisum sativum is the scientific name of the garden pea. Mendel chose it due to its clear contrasting traits and short life cycle.",
      hi: "पाइसम सैटाइवम मटर का वैज्ञानिक नाम है। मेंडल ने इसे इसके स्पष्ट विपरीत लक्षणों और छोटे जीवन चक्र के कारण चुना था।"
    }
  },
  {
    id: 403,
    chapterId: "heredity",
    question: {
      en: "What is the phenotypic ratio of Mendel's dihybrid cross in the F2 generation?",
      hi: "मेंडल के द्विसंकर क्रॉस (Dihybrid Cross) का F2 पीढ़ी में लक्षणप्ररुपी (Phenotypic) अनुपात क्या होता है?"
    },
    options: {
      en: ["3:1", "1:2:1", "9:3:3:1", "1:1:1:1"],
      hi: ["3:1", "1:2:1", "9:3:3:1", "1:1:1:1"]
    },
    correctIndex: 2,
    explanation: {
      en: "The F2 generation of a dihybrid cross (studying two traits simultaneously, e.g., seed shape and color) yields a phenotypic ratio of 9:3:3:1.",
      hi: "द्विसंकर क्रॉस की F2 पीढ़ी (एक साथ दो लक्षणों का अध्ययन, जैसे बीज का आकार और रंग) 9:3:3:1 का लक्षणप्ररुपी अनुपात देती है।"
    }
  },
  {
    id: 404,
    chapterId: "heredity",
    question: {
      en: "How many chromosomes are present in a normal human somatic (body) cell?",
      hi: "एक सामान्य मानव कायिक (शरीर) कोशिका में कितने गुणसूत्र (Chromosomes) होते हैं?"
    },
    options: {
      en: ["23 chromosomes", "46 chromosomes (23 pairs)", "44 chromosomes", "48 chromosomes (24 pairs)"],
      hi: ["23 गुणसूत्र", "46 गुणसूत्र (23 जोड़े)", "44 गुणसूत्र", "48 गुणसूत्र (24 जोड़े)"]
    },
    correctIndex: 1,
    explanation: {
      en: "Human body cells contain 46 chromosomes, arranged in 23 pairs. Out of these, 22 pairs are autosomes and 1 pair is sex chromosomes.",
      hi: "मानव शरीर की कोशिकाओं में 46 गुणसूत्र होते हैं, जो 23 जोड़ों में व्यवस्थित होते हैं। इनमें से 22 जोड़े अलिंगसूत्र (ऑटोसोम) और 1 जोड़ा लिंग गुणसूत्र होते हैं।"
    }
  },
  {
    id: 405,
    chapterId: "heredity",
    question: {
      en: "What pair of sex chromosomes is present in human females?",
      hi: "मानव मादा (महिला) में कौन से लिंग गुणसूत्रों का जोड़ा मौजूद होता है?"
    },
    options: {
      en: ["XY", "YY", "XX", "XO"],
      hi: ["XY", "YY", "XX", "XO"]
    },
    correctIndex: 2,
    explanation: {
      en: "Human females possess two similar sex chromosomes (XX), while males possess two different ones (XY).",
      hi: "मानव मादाओं में दो समान लिंग गुणसूत्र (XX) होते हैं, जबकि पुरुषों में दो अलग-अलग (XY) होते हैं।"
    }
  },
  {
    id: 406,
    chapterId: "heredity",
    question: {
      en: "A gene is a functional segment of which biomolecule?",
      hi: "जीन (Gene) किस जैव अणु का एक कार्यात्मक खंड है?"
    },
    options: {
      en: ["RNA", "Protein", "DNA", "Carbohydrate"],
      hi: ["आरएनए (RNA)", "प्रोटीन", "डीएनए (DNA)", "कार्बोहाइड्रेट"]
    },
    correctIndex: 2,
    explanation: {
      en: "Genes are specific sections of DNA molecules located on chromosomes that code for specific proteins, carrying hereditary information.",
      hi: "जीन गुणसूत्रों पर स्थित डीएनए (DNA) अणुओं के विशिष्ट खंड हैं जो विशिष्ट प्रोटीन के लिए कोड करते हैं, और आनुवंशिक जानकारी ले जाते हैं।"
    }
  },
  {
    id: 407,
    chapterId: "heredity",
    question: {
      en: "What is the genotypic ratio of a Mendel's monohybrid cross in the F2 generation?",
      hi: "मेंडल के एकसंकर क्रॉस (Monohybrid Cross) का F2 पीढ़ी में जीनप्ररुपी (Genotypic) अनुपात क्या होता है?"
    },
    options: {
      en: ["3:1", "9:3:3:1", "1:2:1", "1:1"],
      hi: ["3:1", "9:3:3:1", "1:2:1", "1:1"]
    },
    correctIndex: 2,
    explanation: {
      en: "While the phenotypic physical ratio is 3:1 (dominant:recessive), the genotypic genetic ratio is 1:2:1 (1 homozygous dominant, 2 heterozygous, 1 homozygous recessive).",
      hi: "जबकि भौतिक लक्षणप्ररुपी अनुपात 3:1 (प्रभावी:अप्रभावी) होता है, आनुवंशिक जीनप्ररुपी अनुपात 1:2:1 (1 समयुग्मजी प्रभावी, 2 विषमयुग्मजी, 1 समयुग्मजी अप्रभावी) होता है।"
    }
  },
  {
    id: 408,
    chapterId: "heredity",
    question: {
      en: "What biological factor determines the genetic sex of a newborn child in humans?",
      hi: "मनुष्यों में नवजात शिशु का आनुवंशिक लिंग किस जैविक कारक द्वारा निर्धारित होता है?"
    },
    options: {
      en: ["The type of sex chromosome in the egg cell from the mother (always X)", "The type of sex chromosome in the sperm cell from the father (X or Y)", "Nutrition levels of mother", "Environmental temperature during gestation"],
      hi: ["माता से प्राप्त अंडाणु में लिंग गुणसूत्र का प्रकार (हमेशा X)", "पिता से प्राप्त शुक्राणु में लिंग गुणसूत्र का प्रकार (X या Y)", "माता का पोषण स्तर", "गर्भावस्था के दौरान पर्यावरणीय तापमान"]
    },
    correctIndex: 1,
    explanation: {
      en: "Mother always contributes an X chromosome. If the father's sperm carries an X, the child is female (XX). If it carries a Y, the child is male (XY). Thus, the father determines the sex of the child.",
      hi: "माता हमेशा X गुणसूत्र देती है। यदि पिता के शुक्राणु में X होता है, तो संतान लड़की (XX) होती है। यदि उसमें Y होता है, तो संतान लड़का (XY) होता है। अतः पिता का शुक्राणु लिंग का निर्धारण करता है।"
    }
  },

  // ================= CHAPTER 5: OUR ENVIRONMENT =================
  {
    id: 501,
    chapterId: "environment",
    question: {
      en: "In a food chain, herbivores occupy which trophic level?",
      hi: "एक खाद्य श्रृंखला में, शाकाहारी जीव किस पोषी स्तर पर होते हैं?"
    },
    options: {
      en: ["First Trophic Level", "Second Trophic Level", "Third Trophic Level", "Fourth Trophic Level"],
      hi: ["प्रथम पोषी स्तर", "द्वितीय पोषी स्तर", "तृतीय पोषी स्तर", "चतुर्थ पोषी स्तर"]
    },
    correctIndex: 1,
    explanation: {
      en: "First trophic level consists of producers (plants). Herbivores eat plants and thus occupy the second trophic level (primary consumers).",
      hi: "प्रथम पोषी स्तर में उत्पादक (पौधे) होते हैं। शाकाहारी पौधे खाते हैं और इसलिए वे दूसरे पोषी स्तर (प्राथमिक उपभोक्ता) पर होते हैं।"
    }
  },
  {
    id: 502,
    chapterId: "environment",
    question: {
      en: "The flow of energy in an ecosystem is always:",
      hi: "किसी पारितंत्र में ऊर्जा का प्रवाह हमेशा कैसा होता है?"
    },
    options: {
      en: ["Unidirectional (one way)", "Bidirectional (two way)", "Multidirectional", "Cyclic"],
      hi: ["एकदिशीय (एक तरफा)", "द्विदिशीय", "बहुदिशीय", "चक्रीय"]
    },
    correctIndex: 0,
    explanation: {
      en: "Energy flow is unidirectional. Solar energy captured by autotrophs cannot revert back, and energy passed to consumers does not go back to producers.",
      hi: "ऊर्जा प्रवाह एकदिशीय होता है। स्वपोषी जीवों द्वारा ग्रहण की गई सौर ऊर्जा वापस नहीं लौट सकती, और उपभोक्ताओं को दी गई ऊर्जा वापस उत्पादकों को नहीं मिलती।"
    }
  },
  {
    id: 503,
    chapterId: "environment",
    question: {
      en: "According to Lindeman's law, what percentage of energy is transferred from one trophic level to the next?",
      hi: "लिंडमैन के नियम के अनुसार, एक पोषी स्तर से अगले पोषी स्तर पर कितने प्रतिशत ऊर्जा का हस्तांतरण होता है?"
    },
    options: {
      en: ["100%", "50%", "10%", "1%"],
      hi: ["100%", "50%", "10%", "1%"]
    },
    correctIndex: 2,
    explanation: {
      en: "The '10% Law' states that only about 10% of energy available at a trophic level is transferred to the next level. The rest is lost as heat and used for metabolic processes.",
      hi: "10% का नियम बताता है कि एक पोषी स्तर पर उपलब्ध ऊर्जा का केवल 10% ही अगले स्तर पर स्थानांतरित होता है। बाकी ऊष्मा के रूप में खो जाती है और चयापचय में खर्च होती है।"
    }
  },
  {
    id: 504,
    chapterId: "environment",
    question: {
      en: "The depletion of the protective ozone layer in the upper atmosphere is mainly due to which chemicals?",
      hi: "ऊपरी वायुमंडल में सुरक्षात्मक ओजोन परत के ह्रास (कमी) के लिए मुख्य रूप से कौन से रसायन जिम्मेदार हैं?"
    },
    options: {
      en: ["Carbon dioxide", "Chlorofluorocarbons (CFCs)", "Methane", "Sulfur dioxide"],
      hi: ["कार्बन डाइऑक्साइड", "क्लोरोफ्लोरोकार्बन (CFCs)", "मीथेन", "सल्फर डाइऑक्साइड"]
    },
    correctIndex: 1,
    explanation: {
      en: "Chlorofluorocarbons (CFCs) used in refrigerators and fire extinguishers reach the stratosphere and release chlorine atoms that destroy ozone molecules.",
      hi: "रेफ्रिजरेटर और अग्निशामक यंत्रों में उपयोग किए जाने वाले क्लोरोफ्लोरोकार्बन (CFCs) समताप मंडल में पहुंचकर क्लोरीन परमाणु छोड़ते हैं जो ओजोन अणुओं को नष्ट करते हैं।"
    }
  },
  {
    id: 505,
    chapterId: "environment",
    question: {
      en: "Increased exposure of skin to solar ultraviolet (UV) radiation due to ozone depletion can cause:",
      hi: "ओजोन क्षरण के कारण सौर पराबैंगनी (UV) विकिरण के त्वचा पर पड़ने से क्या हो सकता है?"
    },
    options: {
      en: ["Tuberculosis", "Skin Cancer", "Cholera", "Malaria"],
      hi: ["तपेदिक (टीबी)", "त्वचा का कैंसर", "हैजा", "मलेरिया"]
    },
    correctIndex: 1,
    explanation: {
      en: "Ozone absorbs harmful UV radiation from the sun. Depletion of ozone increases UV levels on Earth, leading to skin cancer and cataracts.",
      hi: "ओजोन सूर्य से आने वाले हानिकारक यूवी विकिरण को अवशोषित करती है। ओजोन के कम होने से पृथ्वी पर यूवी का स्तर बढ़ जाता है, जिससे त्वचा का कैंसर और मोतियाबिंद हो सकता है।"
    }
  },
  {
    id: 506,
    chapterId: "environment",
    question: {
      en: "An ecosystem comprises which of the following components?",
      hi: "एक पारितंत्र (Ecosystem) में निम्नलिखित में से कौन से घटक शामिल होते हैं?"
    },
    options: {
      en: ["Biotic (living) components only", "Abiotic (non-living) components only", "Both Biotic and Abiotic components", "Chemical substances only"],
      hi: ["केवल जैविक (सजीव) घटक", "केवल अजैविक (निर्जीव) घटक", "जैविक और अजैविक दोनों घटक", "केवल रासायनिक पदार्थ"]
    },
    correctIndex: 2,
    explanation: {
      en: "An ecosystem is a community of living organisms (biotic: plants, animals) interacting with their physical non-living environment (abiotic: air, water, soil).",
      hi: "एक पारितंत्र भौतिक निर्जीव पर्यावरण (अजैविक: हवा, पानी, मिट्टी) के साथ बातचीत करने वाले जीवित जीवों (जैविक: पौधे, जानवर) का एक समुदाय है।"
    }
  },
  {
    id: 507,
    chapterId: "environment",
    question: {
      en: "Which of the following wastes is biodegradable?",
      hi: "निम्नलिखित में से कौन सा कचरा जैव-निम्नीकरणीय (Biodegradable) है?"
    },
    options: {
      en: ["Plastic bottles", "Glass pieces", "Fruit and vegetable peels", "Aluminium cans"],
      hi: ["प्लास्टिक की बोतलें", "कांच के टुकड़े", "फलों और सब्जियों के छिलके", "एल्यूमीनियम के डिब्बे"]
    },
    correctIndex: 2,
    explanation: {
      en: "Fruit and vegetable peels are organic wastes that can be broken down into simpler non-toxic substances by bacteria or decomposers over time.",
      hi: "फलों और सब्जियों के छिलके जैविक कचरे हैं जिन्हें समय के साथ जीवाणुओं या अपघटकों द्वारा सरल गैर-विषैले पदार्थों में तोड़ा जा सकता है।"
    }
  },
  {
    id: 508,
    chapterId: "environment",
    question: {
      en: "The progressive accumulation of non-biodegradable harmful chemicals (like pesticides) at each higher trophic level is called:",
      hi: "प्रत्येक उच्च पोषी स्तर पर जैव-अनिम्नीकरणीय हानिकारक रसायनों (जैसे कीटनाशक) के क्रमिक संचय को क्या कहा जाता है?"
    },
    options: {
      en: ["Eutrophication", "Biological Magnification", "Photosynthesis", "Pollution cycle"],
      hi: ["सुपोषण (Eutrophication)", "जैव आवर्धन (Biological Magnification)", "प्रकाश संश्लेषण", "प्रदूषण चक्र"]
    },
    correctIndex: 1,
    explanation: {
      en: "Biological magnification is the increase in concentration of toxic substances (like DDT) in organisms as you go up the food chain, reaching maximum in apex predators (humans).",
      hi: "जैव आवर्धन खाद्य श्रृंखला में ऊपर जाने पर जीवों में विषाक्त पदार्थों (जैसे डीडीटी) की सांद्रता में वृद्धि है, जो शीर्ष शिकारियों (जैसे मनुष्यों) में अधिकतम पहुंचती है।"
    }
  }
];
