import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import {GenEdFormComponent } from '../gen-ed-form/gen-ed-form.component';
import {CourseService} from '../../services/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.css']
})
export class DropdownsComponent {
  completedCoreCourses: Array<any>;
  
  coreCourses: Array<any>;
  elective1Courses: Array<any>;
  elective2Courses: Array<any>;
  elective3Courses: Array<any>;

  //Progress Bar variables
  percentCore: String;
  colorCore: String;
  percentElectives1: String;
  colorElectives1: String;
  percentElectives2: String;
  colorElectives2: String;
  percentElectives3: String;
  colorElectives3: String;

  //Data: Array<any> = majorElectivesAtLeast12;
  igeCourses=[
    {"name":"AG 4010 - Ethical Issues in Food, Agricultural and Apparel Industries (3) (fulfills Area C3 or D4)"},
    {"name":"ANT 3500 - Environment, Technology and Culture (3) (fulfills Area B5 or D4)"},
    {"name":"ANT 3600 - Magic, Shamanism, and Religion (3) (fulfills Area C3 or D4)"},
    {"name":"ANT 4050 - Anthropology of Gender (3) (fulfills Area C3 or D4)"},
    {"name":"BUS 4820 - International Destinations and the United States: Cross-Cultural Analysis (3) (fulfills Area C3 or D4)"},
    {"name":"CLS 4100 - Model United Nations (3) (fulfills Area C3 or D4)"},
    {"name":"CS 3750 - Computers and Society (3) (fulfills Area B5 or D4)"},
    {"name":"EC 4441 - Industry Studies (3) (fulfills Area B5 or D4)"},
    {"name":"EWS 4430 - Women, Health, and Body Politics (3) (fulfills Area C3 or D4)"},
    {"name":"EWS 4500 - Multiracial and Hybrid Identities (3) (fulfills Area C3 or D4)"},
    {"name":"EWS 4510 - Diaspora Studies (3) (fulfills Area C3 or D4)"},
    {"name":"GEO 3510 - Geography of California (3) (fulfills Area B5 or D4)"},
    {"name":"HST 3306 - Modern India (3) (fulfills Area C3 or D4)"},
    {"name":"HST 4230 - Modern Science in World History (3) (fulfills Area C3 or D4)"},
    {"name":"HST 4406 - Women in the United States (3) (fulfills Area C3 or D4)"},
    {"name":"HST 4408 - History of American Science and Technology (3) (fulfills Area C3 or D4)"},
    {"name":"HST 4433 - Nonviolence in the Modern World (3) (fulfills Area C3 or D4)"},
    {"name":"IGE 3500 - The Creative Process: Theory and Practice (3) (fulfills Area C3 or D4)"},
    {"name":"IME 4020 - Ethical Concepts in Technology and Applied Science (3) (fulfills Area B5 or C3)"},
    {"name":"IME 4030 - Fiscal Implications in Technical Decision Making (3) (fulfills Area B5 or D4)"},
    {"name":"MU 3100 - History of Technology in Music (3) (fulfills Area B5, C3, or D4)"},
    {"name":"MU 4240 - Beatlemania (3) (fulfills Area C3 or D4)"},
    {"name":"PHL 3110 - Philosophical Issues in the Law (3) (fulfills Area C3 or D4)"},
    {"name":"PHL 3330 - Bioethics (3) (fulfills Area B5 or C3)"},
    {"name":"PHL 3530 - Cognitive Science (3) (fulfills Area B5 or C3)"},
    {"name":"PHL 3540 - The Philosophy and Science of Implicit Bias (3) (fulfills Area C3 or D4)"},
    {"name":"PHL 3810 - Race and Racism (3) (fulfills Area C3 or D4)"},
    {"name":"PSY 3326 - Health Psychology (3) (fulfills Area B5 or D4)"},
    {"name":"RS 3030 - Organization for Regenerative Practices (3) (fulfills Area C3 or D4)"},
    {"name":"RS 4500 - Sustainable Communities (3) (fulfills Area C3 or D4)"}
  ];
  
  a1courses=[
    "COM 1100 - Public Speaking (3)",
    "COM 2204 - Advocacy and Argument (3)"
  ];
  a2courses=[
    "ENG 1101 - Stretch Composition II (3)",
    "ENG 1103 - First Year Composition (3)"
  ];
  a3courses=[
    "PHL 2020 - Critical Thinking (3)",
    "ENG 2105 - Written Reasoning (3)"
  ];
  
  b1courses=[
    "AST 1010 - Stars, Galaxies, and the Universe (3)",
   
  
    "CHM 1010 - Chemistry in Our World (2) and  CHM 1010L - Chemistry in Our World Laboratory (1)",
     
  
  "CHM 1210 - General Chemistry I (3) and CHM 1210L - General Chemistry Laboratory I (1)",
     
  
    "CHM 1220 - General Chemistry II (3) and CHM 1220L - General Chemistry Laboratory II (1)",
     
  
    "CHM 2120 - Chemistry for Elementary Educators (2) and CHM 2120L - Chemistry for Elementary Educators Laboratory (1)",
    "GEO 1010 - Physical Geography (3) and GEO 1010L - Physical Geography Lab (1)",
  
    "GSC 1100 - Water in a Changing World (3)",
    "GSC 1110 - Principles of Geology (3) and GSC 1410L - Principles of Geology Laboratory (1)",
    "GSC 1120 - Earth, Time, and Life (3) and GSC 1510L - Earth, Time, and Life Laboratory (1)",
    "GSC 1160 - Introduction to Astronomy (3)",
    "GSC 1200 - Introduction to Oceanography (3)",
  "GSC 1950 - Living in Earthquake Country (3)",
    "GSC 2120 - Earth Science for Elementary Educators (2) and GSC 2120L - Earth Science for Elementary Educators Laboratory (1)",
  "PHY 1020 - Fundamentals of Physics (3)",   
    "PHY 1050 - The Physics of Musical Sound (2) and PHY 1050L - Physics of Musical Sound Laboratory (1)",
    "PHY 1210 - Physics of Motion, Fluids, and Heat (3) and PHY 1210L - Physics of Motion, Fluids, and Heat Laboratory (1)",
    "PHY 1510 - Introduction to Newtonian Mechanics (3) and PHY 1510L - Newtonian Mechanics Laboratory (1)",
    "PHY 2120 - Physics for Elementary Educators (2) and PHY 2120L - Physics for Elementary Educators Laboratory (1)"
  ];
  
  
  
  b2courses=[
    "ANT 1010 - Introduction to Biological Anthropology (3)",
    "BIO 1020 - Plagues, Pandemics and Bioterrorism (3)",
    "BIO 1040 - What is Evolution? (3)",
    "BIO 1060 - Human Biology (3)",
    "BIO 1110 - Life Science (2) and BIO 1110L - Life Science Laboratory (1)",
    "BIO 1150 - Basic Biology (3) and BIO 1150L - Basic Biology Laboratory (1)",
    "BIO 1210 - Foundations of Biology: Energy, Matter, and Information (3) and BIO 1210L - Foundations of Biology: Energy, Matter, and Information Laboratory (1)",           
    "BIO 2120 - Life Science for Elementary Educators (2) and BIO 2120L - Life Science for Elementary Educators Laboratory (1)",
    "GSC 2700 - Age of the Dinosaurs (3)"           
  ];

  b3courses=[
    "ANT 1010 - Introduction to Biological Anthropology (3)",
    "BIO 1020 - Plagues, Pandemics and Bioterrorism (3)",
    "BIO 1040 - What is Evolution? (3)",
    "BIO 1060 - Human Biology (3)",
    "BIO 1110 - Life Science (2) and BIO 1110L - Life Science Laboratory (1)",
    "BIO 1150 - Basic Biology (3) and BIO 1150L - Basic Biology Laboratory (1)",
    "BIO 1210 - Foundations of Biology: Energy, Matter, and Information (3) and BIO 1210L - Foundations of Biology: Energy, Matter, and Information Laboratory (1)",           
    "BIO 2120 - Life Science for Elementary Educators (2) and BIO 2120L - Life Science for Elementary Educators Laboratory (1)",
    "GSC 2700 - Age of the Dinosaurs (3)"           
  ];
  
  b4courses=[
    "CS 2180 - Logic and Computing (3)",
    "MAT 1050 - College Algebra (3)",
    "MAT 1052 - College Algebra Stretch II (3)",
    "MAT 1060 - Trigonometry (3)",
    "MAT 1140 - Calculus I (4)",
    "MAT 1150 - Calculus II (4)",
    "MAT 1200 - Calculus for Life Sciences (3)",
    "MAT 1250 - Introductory Calculus for Business (3)",
    "MAT 1300 - Technical Calculus I (4)",
    "MAT 1910 - Survey of Mathematics (3)",
    "MAT 1940 - Mathematical Concepts for Elementary School Teachers (4)",
    "PHL 2180 - Logic and Computing (3)",
    "STA 1200 - Statistics with Applications (3)",
    "STA 1202 - Statistics with Applications Stretch II (3)",
    "STA 1300 - Biostatistics (3)"
  
  ];
  
  b5courses=[
    "AMM 3650 - Color Science - Principles and Applications (2) and AMM 3650L - Color Science - Principles & Applications Laboratory (1)",
             
            "ANT 3050 - Archaeoastronomy (3)",
            "ANT 3500 - Environment, Technology and Culture (3) *",
            "ANT 4910 - Forensic Anthropology (3)",
            "AST 3050 - Archaeoastronomy (3)",
            "AST 3420 - Life, the Universe, and Everything (3)",
            "AVS 3311 - Animal Industry and Society (3)",
            "AVS 3333 - Canine and Feline Compendium (3)",
            "BIO 3000 - Genetics and Human Issues (3)",
            "BIO 3010 - Human Sexuality (3)",
            "BIO 3030 - Sexually Transmitted Diseases and Safer Sex (3)",
            "BIO 3040 - Environment and Society (3)",
            "BIO 3070 - Biology of Human Pregnancy (3)",
            "BIO 3090 - Biology of the Brain (3)",
            "BIO 3120 - Biodiversity Conservation (3)",
            "BIO 3130 - Marine Biology (3)",
            "CHM 3010 - Modeling the Fundamentals of Physical Chemistry (3)",
            "CS 3750 - Computers and Society (3) *",
            "EC 4441 - Industry Studies (3) *",
             
  
            "EGR 4810 - Project Design Principles and Applications (1) and EGR 4820 - Project Design Principles and Applications (1) and EGR 4830 - Project Design Principles and Applications (1)",
            "FST 3250 - Food Safety and Current Issues (3)",
            "GEO 3030 - Climatology (3)",
            "GEO 3510 - Geography of California (3) *",
            "GSC 3040 - Meteorology (3)",
            "GSC 3200 - Studies of a Blue Planet (3)",
             
  
            "GSC 3210 - Engineering Geology I (2) and GSC 3210L - Engineering Geology I Laboratory (1)",
             
  
            "GSC 3350 - Exploring Earth's Oceans: Oceanography (3)",
            "GSC 3500 - Natural Disasters (3)",
            "IME 4020 - Ethical Concepts in Technology and Applied Science (3) *",
            "IME 4030 - Fiscal Implications in Technical Decision Making (3) *",
            "KIN 3010 - Foundations of Exercise Science (3)",
            "MU 3100 - History of Technology in Music (3) *",
            "NTR 3050 - Nutrition, Science and Health (3)",
            "PHL 3330 - Bioethics (3) *",
            "PHL 3530 - Cognitive Science (3) *",
            "PHL 3830 - Philosophy of Science (3)",
            "PHY 3010 - Energy and Society (3)",
            "PHY 3020 - Physics for Future Presidents (3)",
            "PHY 3060 - History of Physics (3)",
            "PSY 3326 - Health Psychology (3) *",
            "PLT 3000 - Insects and Civilization (3)",
            "PLT 4311 - Plants and Civilization (3)",
            "RS 3010 - Life Support Processes (3)"
  ];
  
  c1courses=[
   " AH 2301 - World Art: Prehistory through Medieval Europe (3)",
            "AH 2302 - World Art: Renaissance through Modern Europe and the United States (3)",
           "AH 2303 - World Art: Asia (Prehistory to 12th Century) (3)",
            "AH 2305 - World Art: Africa, Oceania, and Native America (3)", 
            "ARC 3610 - World Architecture before the Renaissance (2) and ARC 3612 - World Architecture before the Renaissance Discussion (1)", 
            "COM 2280 - Understanding and Appreciating the Photographic Image (3)",
            "DAN 2020 - World Dance and Cultures (3)",
            "DAN 2300 - Live Dance Appreciation (3)",
            "LA 2261 - History I: History of Landscape Design (3)",
            "LA 2271 - History II: Modern Landscapes (3)",
            "MU 1000 - Introduction to Music (3)",
            "MU 1010 - Music Appreciation (3)",
            "MU 1030 - World of Music (3)",
            "MU 1100 - Jazz and Beyond (3)",
            "PLT 2140 - History of Garden Art (3)",
            "TH 1250 - Introduction to Acting (2) and TH 1250A - Introduction to Acting Activity (1)",
            "TH 2030 - Introduction to Theatre (3)",
            "TH 2080 - Introduction to Film and American Culture (3)",
            "VCD 1330A - Foundations in Ceramics Activity (3)"
  ];
  
  c2courses=[
    "ANT 1040 - Introduction to Linguistic Anthropology (3)",
    "ANT 1120 - World Cultures via the Internet (3)",
    "ARC 1020 - Visual Literacy and Civilization: An Architect's View (2)",
    "ARC 1022A - Visual Literacy and Civilization: An Architect's View Activity (1)",
    "CHN 1111 - Elementary Chinese I (3)",
    "CHN 1112 - Elementary Chinese II (3)",
    "CHN 2111 - Intermediate Chinese I (3)",
    "CHN 2112 - Intermediate Chinese II (3)",
    "CHN 2113 - Intermediate Chinese III (3)",
    "ENG 2200 - Introduction to English Linguistics (3)",
    "ENG 2300 - American Literature to 1865 (3)",
    "ENG 2320 - American Literature Since 1865 (3)",
    "ENG 2330 - Introduction to Multicultural Literature in the U.S. (3)",
    "ENG 2331 - Introduction to U.S. Latino/a Literature (3)",
    "ENG 2332 - Introduction to African American Literature (3)",
    "ENG 2500 - Introduction to Shakespeare (3)",
    "ENG 2510 - British Literature I (3)",
    "ENG 2520 - British Literature II (3)",
    "ENG 2700 - The Bible as Literature (3)",
    "ENG 2710 - World Literature I (3)",
    "ENG 2720 - World Literature II (3)",
    "ENG 2800 - Introduction to Folklore (3)",
    "ENG 2801 - Adolescent Literature (3)",
    "ENG 2803 - Fantasy and the Fantastic (3)",
    "ENG 2880 - Science Fiction (3)",
    "ENG 2882 - War and Peace in Literature (3)",
    "ENG 2883 - Women Writers (3)",
    "ENG 2884 - Contemporary Literature (3)",
    "ENG 2885 - Introduction to Fiction (3)",
    "FRE 1111 - Elementary French I (3)",
    "FRE 1112 - Elementary French II (3)",
    "FRE 2111 - Intermediate French (3)",
    "FRE 2112 - Intermediate French Reading (3)",
    "GER 1111 - Elementary German I (3)",
    "GER 1112 - Elementary German II (3)",
    "GER 2111 - Intermediate German I (3)",
    "HST 1101 - World Civilizations to 1500 (3)",
    "HST 1102 - World Civilizations from 1500 (3)",
    "HST 2213 - Introduction to Islam (3)",
    "LA 2771 - Environmental Design Theory (3)",
    "PHL 2010 - Ultimate Questions: An Introduction to Philosophy (3)",
    "PHL 2040 - Ethical Problems in Contemporary Life (3)",
    "PHL 2050 - Business and Professional Ethics (3)",
    "PHL 2200 - Religions of the World (3)",
    "PHL 2060 - Philosophy Through Children's Literature (3)",
    "SPN 1111 - Elementary Spanish I (3)",
    "SPN 1112 - Elementary Spanish II (3)",
    "SPN 1120 - Introduction to the Spanish-Speaking World (3)",
    "SPN 1130 - Spanish for Spanish Speakers I (3)",
    "SPN 2111 - Intermediate Spanish I (3)",
    "SPN 2112 - Intermediate Spanish II (3)",
    "SPN 2120 - Spanish for Spanish Speakers II (3)",
    "SPN 2130 - Spanish Intermediate Composition (3)",
    "SPN 2140 - Intermediate Spanish Conversation (3)",
    "STS 2010 - Introduction to Science, Technology, and Society (3)",
  ];
  
  c3courses=[
    "AG 4010 - Ethical Issues in Food, Agricultural and Apparel Industries (3) *",
            "ANT 3530 - Language and Culture (3)",
            "ANT 3600 - Magic, Shamanism, and Religion (3) *",
            "ANT 4050 - Anthropology of Gender (3) *",
            "ARC 4630 - Interpreting Architecture (3)",
            "BUS 4820 - International Destinations and the United States: Cross-Cultural Analysis (3) *",
            "CLS 4100 - Model United Nations (3) * ",
            "DAN 4460 - History of Dance and Its Art/istic and Cultural Influences (3)",
            "ENG 3520 - Harry Potter as Literature and Culture (3)",
            "ENG 4503 - Shakespeare before 1600 (3)",
            "ENG 4740 - Chinese Civilization and Culture (3)",
            "ENG 4880 - Modernism and Postmodernism (3)",
            "EWS 3010 - Ethnic Identity (3)",
            "EWS 3750 - Gender, Ethnicity, and Film (3)",
            "EWS 4430 - Women, Health, and Body Politics (3) *",
            "EWS 4500 - Multiracial and Hybrid Identities (3) *",
            "EWS 4510 - Diaspora Studies (3) *",
            "HST 3306 - Modern India (3) *",
            "HST 3313 - The Middle East from the Rise of Islam to 1500 (3)",
            "HST 3340 - History of American Institutions and Ideals, 1877-present (3) **",
            "HST 3352 - History and Culture of the British Empire (3)",
            "HST 3370 - History of California (3)",
            "HST 3373 - History and Hollywood (3)",
            "HST 4406 - Women in the United States (3) *",
            "HST 4408 - History of American Science and Technology (3) *",
            "HST 4230 - Modern Science in World History (3) *",
            "HST 4433 - Nonviolence in the Modern World (3) *",
            "IGE 3200 - Visions of Science and Technology (3)",
            "IGE 3300 - Demons, the Undead, and the Monstrous Other (3)",
            "IGE 3500 - The Creative Process: Theory and Practice (3) *",
            "IME 4020 - Ethical Concepts in Technology and Applied Science (3) *",
            "MU 3100 - History of Technology in Music (3) *",
            "MU 4171 - Theory, History, and Design of Musical Instruments (3)",
            "MU 4240 - Beatlemania (3) *",
            "MU 4250 - Life and Death in the Arts (3)",
            "PHL 3110 - Philosophical Issues in the Law (3) *",
            "PHL 3330 - Bioethics (3) *",
            "PHL 3400 - Current Debates About Sexuality (3)",
            "PHL 3450 - Confrontations With The Reaper (3)",
            "PHL 3530 - Cognitive Science (3) *",
            "PHL 3540 - The Philosophy and Science of Implicit Bias (3) *",
            "PHL 3810 - Race and Racism (3) *",
            "RS 3030 - Organization for Regenerative Practices (3) *",
            "RS 4500 - Sustainable Communities (3) *",
            "SPN 3420 - Latin American Civilization (3)",
            "TH 3010 - Through Artists' Eyes (3)",
            "TH 4100 - Theatrical Pursuit of an American Ideology (3)",
            "URP 4040 - Placemaking: Theories, Methods, and Practices (3)" 
          ];
  
  d1courses =[
    " HST 2201 - United States History to 1877 (3)",
    "HST 2202 - United States History, 1877-Present (3)"
  ];
  d2courses=[
    "PLS 2010 - Introduction to American Government (3)"
  ];
  
  d3courses=[
    "AG 1010 - Agriculture & The Modern World (3)",
            "AG 2010 - Global Resources for Food (3)",
            "AMM 1080 - Culture, People, and Dress (3)",
            "AMM 1200 - American Demographics and Lifestyles (3)",
            "AMM 2450 - Consumerism: Its Impact and Issues (3)",
            "ANT 1020 - Introduction to Cultural Anthropology (3)",
            "COM 2270 - Media, Politics, Sex and Violence (3)",
            "EC 1100 - Contemporary Economic Issues (3)",
            "EC 2201 - Principles of Microeconomics (3)",
            "EC 2202 - Principles of Macroeconomics (3)",
            "EWS 1400 - Introduction to Ethnic Studies (3)",
            "EWS 1450 - Introduction to Gender and Sexuality Studies (3)",
            "EWS 2010 - African American Historical Experience (3)",
            "EWS 2020 - Chicana/o and Latina/o Historical Experience (3)",
            "EWS 2030 - Native American Historical Experience (3)",
            "EWS 2040 - Asian/Pacific Islander American Historical Experience (3)",
            "FRL 1013 - Law for Everyday Living (3)",
            "GEO 1000 - World Regional Geography (3)",
            "GEO 1020 - Human Geography (3)",
            "KIN 4440 - Sport and Film (3)",
            "KIN 4490 - Sport and Culture (3)",
            "NTR 2280 - Food and Culture (3)",
            "PLS 2020 - Introduction to Comparative Government (3)",
            "PLS 2030 - Introduction to International Relations (3)",
            "SOC 2201 - Introduction to Sociology (3)",
             
  
            "URP 1040 - The City in Context - History, Politics, Environment (2) and URP 1040L - The City in Context - History, Politics, Environment-Laboratory (1)",
             
  
            "URP 1050 - Social Justice in Planning (3)"
  ];
  
  d4courses=[
    "AG 4010 - Ethical Issues in Food, Agricultural and Apparel Industries (3) *",
            "ANT 3500 - Environment, Technology and Culture (3) *",
            "ANT 3600 - Magic, Shamanism, and Religion (3) *",
            "ANT 3790 - Culture Areas of the World (3)",
            "ANT 4050 - Anthropology of Gender (3) *",
            "BUS 4820 - International Destinations and the United States: Cross-Cultural Analysis (3) *",
            "CLS 4100 - Model United Nations (3) *",
            "COM 3314 - Organizational Communication (3)",
            "COM 3327 - Intercultural Communication (3)",
            "COM 4133 - Public Opinion, Propaganda and Mass Media (3)",
            "COM 4222 - Crisis Communication (3)",
            "COM 4233 - Political Economy of Mass Communication (3)",
            "COM 4447 - Political Communication (3)",
            "CRM 3390 - Media and Crime (3)",
            "CS 3750 - Computers and Society (3) *",
            "DAN 4490 - Dance in Contemporary Culture (3)",
            "EC 4441 - Industry Studies (3) *",
            "EC 4442 - Countrywide Economic Studies (3)",
            "EGR 3321 - CA Boundary Law and Public Lands (3)",
            "EGR 4050 - Role of Design Professionals In Society (3)",
            "EWS 3300 - Ethnicity and Families (3)",
            "EWS 3700 - Race, Gender and the Law/Public Policies (3)",
            "EWS 3800 - Women in Global Perspective (3)",
            "EWS 4010 - Contemporary African American Studies (3)",
            "EWS 4020 - Contemporary Chicana/o and Latina/o Studies (3)",
            "EWS 4030 - Contemporary Native American Studies (3)",
            "EWS 4040 - Contemporary Asian Pacific Islander American Studies (3)",
            "EWS 4070 - Diverse Gender and Sexual Identities (3)",
            "EWS 4250 - Gender, Identity and Technology (3)",
            "EWS 4310 - Ethnicity, Gender and Religion/Spirituality (3)",
            "EWS 4430 - Women, Health, and Body Politics (3) *",
            "EWS 4450 - Multiethnic Heritage of California (3)",
            "EWS 4500 - Multiracial and Hybrid Identities (3) *",
            "EWS 4510 - Diaspora Studies (3) *",
            "EWS 4520 - Ethnicity, Race, and Sex/uality (3)",
            "GEO 3510 - Geography of California (3) *",
            "HST 3306 - Modern India (3) *",
            "HST 3315 - The Middle East from 1500 (3)",
            "HST 3324 - European Revolutions, 1789-1914 (3)",
            "HST 3337 - Latin America since 1810 (3)",
            "HST 4210 - History of the Scientific Revolution (3)",
            "HST 4230 - Modern Science in World History (3) *",
            "HST 4406 - Women in the United States (3) *",
            "HST 4407 - History of American Workers, 1877-Present (3)",
            "HST 4408 - History of American Science and Technology (3) *",
            "HST 4433 - Nonviolence in the Modern World (3) *",
            "IGE 3400 - Peoples and Cultures of Central Asia: Life along the Silk Road (3)",
            "IGE 3500 - The Creative Process: Theory and Practice (3) *",
            "IGE 3600 - UFOs, Illuminati, and Other Conspiracy Theories (3)",
            "IME 4030 - Fiscal Implications in Technical Decision Making (3) *",
            "KIN 4430 - Inequality in Sport and Physical Activity (3)",
            "MHR 3020 - Organizational Behavior (3)",
            "MU 3100 - History of Technology in Music (3) *",
            "MU 4240 - Beatlemania (3) *",
            "PHL 3110 - Philosophical Issues in the Law (3) *",
            "PHL 3540 - The Philosophy and Science of Implicit Bias (3) *",
            "PHL 3810 - Race and Racism (3) *",
            "PLS 3821 - Politics, Policies, Pop Culture (3)",
            "PLS 4205 - American Political Institutions and Behavior (3) **",
            "PLS 4800 - Policies of Need and Greed (3)",
            "PLS 4811 - California Government (3)",
            "PSY 3325 - Multicultural Psychology (3)",
            "PSY 3326 - Health Psychology (3) *",
            "PSY 4455 - Human Sexuality: Relationships (3)",
            "RS 3020 - Global Regenerative Systems (3)",
            "RS 3030 - Organization for Regenerative Practices (3) *",
            "RS 4500 - Sustainable Communities (3) *",
            "SOC 3345 - Crime, Criminalization and Society (3)",
            "SOC 4440 - Technology & Society (3)",
            "SOC 4451 - Social Inequality, Sport and the Body (3)",
            "SOC 4465 - Impact of Colonization on the Peoples of Hawaii (3)",
             
  
            "TH 4250 - Community Based Theatre (2) and TH 4250A - Community Based Theatre Activity (1)",
             
  
            "URP 3010 - Introduction to Urban Planning (3)",
            "URP 4110 - Evolution of American Cities and the Planning Movement (3)",
            "URP 4120 - Urban Design in Europe (3)",
            "URP 4220 - The Just City (3)",
            "URP 4750 - Planning in a Global Economy (3)",
            "URP 4820 - California Water (3)"
  ];
  
  ecourses=[
    "AMM 2480 - Focus on the Future: Leadership Skills for the 21st Century (3)",
          "ANT 2010 - Human Nature/Human Affairs: A Biocultural Perspective (3)",
          "ARC 1010 - Introduction to Architectural Design Theories and Methods (3)",
          "AVS 2211 - Drugs and Society (3)",
          "BUS 1010 - Business Freshman Experience (3)",
           
  
          "CLS 1101 - Freshman Experience (2) and CLS 1101A - Freshman Experience (1)",
           
  
          "EGR 1000 - Engineering, Society, and You (2) and EGR 1000L - Engineering, Society, and You Laboratory (1)",
           
  
          "ENV 1010 - Introduction to Design Theories and Methods (2) and ENV 1010L - Introduction to Design Theories and Methods Laboratory (1)",
          "EWS 1020 - Engaged Education: Integrating Knowledge, Learning and Success (3)",
          "EWS 2800S - Service Learning and Community Engagement Service Learning (3)",
          "FRL 1001 - Personal Money Management (3)",
           
  
          "GSC 1010 - Planet Earth: A Citizen's Guide (2) and GSC 1010A - Planet Earth: A Citizen's Guide Activity (1)",
           
  
          "HRT 2550 - Healthy American Cuisine (3)",
          "IGE 1020 - Engaged Education: Integrating Knowledge, Learning and Success (3)",
          "KIN 2070 - Health and Well-Being (3)",
          "KIN 2700 - Stress Management for Healthy Living (3)",
          "LA 1771 - Reading and Representing the Landscape (3)",
          "LIB 1500 - Information Literacy for the Digital Age (3)",
          "LS 1020 - Integrating Knowledge, Learning, and Engagement for Success (3)",
          "MU 1040 - Careers in Music (3)",
          "NTR 2030 - Health, Nutrition and the Integrated Being (3)",
          "PLS 1011 - Introduction to Political Science (3)",
          "PSY 2201 - Introduction to Psychology (3)",
          "PSY 2230 - Positive Psychology: The Science of the Good Life (3)",
          "RS 1110 - Introduction to Regenerative Studies (3)",
           
  
          "SCI 1010 - Science and Mathematics: Freshman Experience I (1) and SCI 1010A - Science and Mathematics: Freshman Experience I Activity (1) and SCI 1020A - Science and Mathematics: Freshman Experience II Activity (1)",
           
  
          "SCI 1100 - Integrative Science (1) and SCI 1100A - Integrative Science Activity I (1) and SCI 1110A - Integrative Science Activity II (1)",
           
  
          "VCD 2370 - Visual Thinking (3)"
  ];
  

    geForm: GenEdFormComponent;
    geForm2:GenEdFormComponent;
    geForm3: GenEdFormComponent;
    geForm4: GenEdFormComponent;
    geForm5: GenEdFormComponent;
    geForm6: GenEdFormComponent;
    geForm7: GenEdFormComponent;
    geForm8: GenEdFormComponent;
    geForm9: GenEdFormComponent;
    geForm10: GenEdFormComponent;
    completedGEs: any;

    form0: FormGroup;
    form1: FormGroup;
    form2: FormGroup;
    form3: FormGroup;
    form4: FormGroup;

  constructor(private fb: FormBuilder, private courseService: CourseService) {
    this.form0 = this.fb.group({
      checkArray0: this.fb.array([], [Validators.required])
    })

    this.form1 = this.fb.group({
      checkArray1: this.fb.array([], [Validators.required])
    })

    this.form2 = this.fb.group({
      checkArray2: this.fb.array([], [Validators.required])
    })

    this.form3 = this.fb.group({
      checkArray3: this.fb.array([], [Validators.required])
    })
    this.form4 = this.fb.group({
      checkArray4: this.fb.array([], [Validators.required])
    })
    this.geForm= new GenEdFormComponent( fb );
    
  }

  ngOnInit(): void {
  	this.retrieveCompletedCoreCourses();
    this.retrieveCourses();
    this.retrieveElective1Courses();
    this.retrieveElective2Courses();
    this.retrieveElective3Courses();
    this.retrieveGEAreaACourses();
    this.retrieveGEAreaBCourses();
    this.retrieveGEAreaCCourses();
    this.retrieveGEAreaDCourses();
    this.retrieveGEAreaECourses();
    // this.populateCore();

  }

  /**retrieveCourses populates the arrays needed for checkbox forms
   * calls course.service.ts to retrieve data from Java spring backend with HTTP get request
  */
  retrieveCompletedCoreCourses(): void{
  	this.courseService.getCoreCompleted()
  		.subscribe(
  			data=>{
  				this.completedCoreCourses=data;
  				console.log(this.completedCoreCourses);
  			},
  			error =>{
  				console.log(error);
  			}
  		);
  }
  
  retrieveCourses(): void{
    this.courseService.getAll()
      .subscribe(
        data=>{
          this.coreCourses=data;
        },
        error =>{
          console.log(error);
        });
    // this.populateCore();
  }

  retrieveElective1Courses(): void{
    this.courseService.getElective1All()
      .subscribe(
        data=>{
          this.elective1Courses=data;
        },
        error =>{
          console.log(error);
        });
  }

  retrieveElective2Courses(): void{
    this.courseService.getElective2All()
      .subscribe(
        data=>{
          this.elective2Courses=data;
        },
        error =>{
          console.log(error);
        });
  }

  retrieveElective3Courses(): void{
    this.courseService.getElective3All()
      .subscribe(
        data=>{
          this.elective3Courses=data;
        },
        error =>{
          console.log(error);
        });
  }

  retrieveGEAreaACourses(): void{
    this.courseService.getGEAreaA1All()
      .subscribe(
        data=>{
          this.a1courses=data;
        },
        error =>{
          console.log(error);
        });

    this.courseService.getGEAreaA2All()
      .subscribe(
        data=>{
          this.a2courses=data;
      },          
        error =>{
          console.log(error);
        });
        
    this.courseService.getGEAreaA3All()
      .subscribe(
        data=>{
          this.a3courses=data;
        },          
        error =>{
          console.log(error);
    });
  }

  retrieveGEAreaBCourses(): void{
    this.courseService.getGEAreaB1All()
      .subscribe(
        data=>{
          this.b1courses=data;
          console.log(data)
        },
        error =>{
          console.log(error);
        });

      this.courseService.getGEAreaB2All()
        .subscribe(
        data=>{
          this.b2courses=data;
        },          
        error =>{
          console.log(error);
        });
        
      this.courseService.getGEAreaB3All()
        .subscribe(
        data=>{
          this.b3courses=data;
        },          
        error =>{
          console.log(error);
        });

    this.courseService.getGEAreaB4All()
      .subscribe(
       data=>{
         this.b4courses=data;
       },          
       error =>{
         console.log(error);
       });
 
    this.courseService.getGEAreaB5All()
       .subscribe(
        data=>{
          this.b5courses=data;
          console.log(data);
        },          
        error =>{
          console.log(error);
        });
  }

  retrieveGEAreaCCourses(): void{
    this.courseService.getGEAreaC1All()
      .subscribe(
        data=>{
          this.c1courses=data;
        },
        error =>{
          console.log(error);
        });

    this.courseService.getGEAreaC2All()
      .subscribe(
        data=>{
          this.c2courses=data;
      },          
        error =>{
          console.log(error);
        });
        
    this.courseService.getGEAreaC3All()
      .subscribe(
        data=>{
          this.c3courses=data;
        },          
        error =>{
          console.log(error);
    });
  }

  retrieveGEAreaDCourses(): void{
    this.courseService.getGEAreaD1All()
      .subscribe(
        data=>{
          this.d1courses=data;
          console.log(data)
        },
        error =>{
          console.log(error);
        });

      this.courseService.getGEAreaD2All()
        .subscribe(
        data=>{
          this.d2courses=data;
        },          
        error =>{
          console.log(error);
        });
        
      this.courseService.getGEAreaD3All()
        .subscribe(
        data=>{
          this.d3courses=data;
        },          
        error =>{
          console.log(error);
        });

    this.courseService.getGEAreaD4All()
      .subscribe(
       data=>{
         this.d4courses=data;
       },          
       error =>{
         console.log(error);
       });
 
  }

  retrieveGEAreaECourses(): void{
    this.courseService.getGEAreaEAll()
      .subscribe(
        data=>{
          this.ecourses=data;
          console.log(data)
        },
        error =>{
          console.log(error);
        });
      }


  /**onCheckboxChange methods take in event from respective form, add checkbox value which is json object to FormArray */
  onCoreCheckboxChange(e) {
    const checkArray0: FormArray = this.form0.get('checkArray0') as FormArray;
    if (e.target.checked) {
      checkArray0.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray0.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray0.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onElective1CheckboxChange(e) {
    const checkArray1: FormArray = this.form1.get('checkArray1') as FormArray;
    if (e.target.checked) {
      checkArray1.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray1.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray1.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onElective2CheckboxChange(e) {
    const checkArray2: FormArray = this.form2.get('checkArray2') as FormArray;
    if (e.target.checked) {
      checkArray2.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray2.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray2.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onElective3CheckboxChange(e) {
    const checkArray3: FormArray = this.form3.get('checkArray3') as FormArray;
    if (e.target.checked) {
      checkArray3.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray3.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray3.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  onIgeCheckboxChange(e) {
    const checkArray4: FormArray = this.form4.get('checkArray4') as FormArray;
    if (e.target.checked) {
      checkArray4.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray4.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray4.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

/** submitForm methods user course.service.ts to send FormArray as HTTP Put request 
 * to Java Spring backend
 */
  submitFormCore() {
    // Gets the number of checkboxes checked for core courses
    var checkedUnits = 0;
    this.form0.value.checkArray0.forEach(function (value) {
    	let course = JSON.parse(value);
    	checkedUnits += course.units;
    });
    var percent = Math.round(checkedUnits / 65 * 100);
    this.percentCore = percent + "%";

    //Change the color of the progress bar based on how many courses completed
    if (percent < 26) {
      this.colorCore = 'Red';
    } else if (percent < 51) {
      this.colorCore = 'DarkOrange';
    } else if (percent < 76) {
        this.colorCore = 'GoldenRod';
    } else if (percent == 100) {
      this.colorCore = 'RoyalBlue';
    } else {
      this.colorCore = 'ForestGreen';
    }
    
    //console.log(this.form1.value)
    //console.log(this.form1.value.checkArray1);
    //don't need the json key checkArray#, so just get value of key and send
    this.courseService.updateCore(this.form0.value.checkArray0);
  }

  submitFormElective1() {
    // Gets the number of checkboxes checked for electives1 courses
    var checkedUnits = 0;
    this.form1.value.checkArray1.forEach(function (value) {
    	let course = JSON.parse(value);
    	checkedUnits += course.units;
    });
    var percent = Math.round(checkedUnits / 12 * 100);
    this.percentElectives1 = percent + "%";

    //Change the color of the progress bar based on how many courses completed
    if (percent < 26) {
      this.colorElectives1 = 'Red';
    } else if (percent < 51) {
      this.colorElectives1 = 'DarkOrange';
    } else if (percent < 76) {
        this.colorElectives1 = 'GoldenRod';
    } else if (percent < 100) {
      this.colorElectives1 = 'ForestGreen';
    } else {
      this.colorElectives1 = 'RoyalBlue';
      this.percentElectives1 = "100%";
    }

    console.log(this.form1.value);
    this.courseService.updateElectives1(this.form1.value.checkArray1);
  }

  submitFormElective2() {
    // Gets the number of checkboxes checked for electives2 courses
    var checkedUnits = 0;
    this.form2.value.checkArray2.forEach(function (value) {
    	let course = JSON.parse(value);
    	checkedUnits += course.units;
    });
    var percent = Math.round(checkedUnits / 3 * 100);
    this.percentElectives2 = percent + "%";

    //Change the color of the progress bar based on how many courses completed
    if (percent < 26) {
      this.colorElectives2 = 'Red';
    } else if (percent < 51) {
      this.colorElectives2 = 'DarkOrange';
    } else if (percent < 76) {
        this.colorElectives2 = 'GoldenRod';
    } else if (percent < 100) {
      this.colorElectives2 = 'ForestGreen';
    } else {
      this.colorElectives2 = 'RoyalBlue';
      this.percentElectives2 = "100%";
    }

    console.log(this.form2.value);
    this.courseService.updateElectives2(this.form2.value.checkArray2);
  }

  submitFormElective3() {
    // Gets the number of checkboxes checked for electives3 courses
    var checkedUnits = 0;
    this.form3.value.checkArray3.forEach(function (value) {
    	let course = JSON.parse(value);
    	checkedUnits += course.units;
    });
    var percent = Math.round(checkedUnits / 4 * 100);
    this.percentElectives3 = percent + "%";

    //Change the color of the progress bar based on how many courses completed
    if (percent < 26) {
      this.colorElectives3 = 'Red';
    } else if (percent < 51) {
      this.colorElectives3 = 'DarkOrange';
    } else if (percent < 76) {
        this.colorElectives3 = 'GoldenRod';
    } else if (percent < 100) {
      this.colorElectives3 = 'ForestGreen';
    } else {
      this.colorElectives3 = 'RoyalBlue';
      this.percentElectives3 = "100%";
    }

    console.log(this.form3.value);
    this.courseService.updateElectives3(this.form3.value.checkArray3);
  }

  submitFormIGE() {
    console.log(this.form4.value)
  }

  onGESubmit(e) {
    console.log(e);
  }
	
	populateCore() {
		this.completedCoreCourses.forEach(function (completedCourse) {
			var checked = "checked";
			var isChecked = false;
			this.coreCourses.forEach(function (coreCourse) {
				if(completedCourse.courseNumber == coreCourse.courseNumber) {
					isChecked = true;
				}
				if(isChecked) {
					return;
				}
			});
			completedCourse.push({checked: isChecked});
		});
	}
	
	isInCompletedCore(d) {
		console.log("checking...");
		this.completedCoreCourses.forEach(function (course) {
			if(course.courseNumber == d.courseNumber) {
				console.log("matches");
				return true;
			}
		});
		return false;
	}
	
}
