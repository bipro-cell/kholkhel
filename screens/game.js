import React,{useState, useEffect} from 'react';
import { GameEngine } from "react-native-game-engine";

import Matter from "matter-js";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Animated,
  Button
  
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';




const Game= () => {
  const [running, setRunning] = useState(false);
  const [diceRollCount, setDiceRollCount] = useState(0);
  const [currentPoints, setCurrentPoints] = useState(0);
  
  
  const position = new Animated.ValueXY({x:0,y:0});


  var playerPositions = [{
    "x": 0,
    "y": 0,
    "topX": -416,
    "topY": 0,
    "posX": 360,
    "posY": 27,
    "postID": 551,
    "cellNo":1,
    "snakeLadder": 0,
    "stage": "Sanyaasa",
    "chakra": "Vaikuntha",
    "toast": "You have landed in <strong>vaikuṇṭha</strong> as a result of <strong>bhakti</strong>",
    "toastTitle": "Got Ladder from 54 to 68",
    "info": {
      "name": "vaikuṇṭha",
      "quote": [{
        "name": "I am equal in all existences, none is dear to Me, none hated – Gita 9.29"
      }],
      "movement": {
        "displacement": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -62, -62, -67],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -62, -62, -67],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["a", "b"],
    "Letter_Vowels": ["a", "e"],
    "Letter_Consonants": ["h", "b"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 0,
    "y": 0,
    "cellNo":2,
    "topX": 0,
    "topY": -800,
    "posX": 28,
    "posY": 685,
    "postID": 10,
    "snakeLadder": 0,
    "stage": "Brahmacharya",
    "chakra": "Mulaadhaara",
    "info": {
      "name": "janma",
      "quote": [{
        "saying": "Though birthless, and unchangeable, and supreme I am born through My māyā, defying the laws of Nature – Gita 4.6"
      }, {
        "saying": "Landing on this cell is a rare occurance! You start your journey as an 'avatār'; A being who at birth is free from the clutches of 'māyā' and the arshidvarga"
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["c", "d"],
    "Letter_Vowels": ["e", "e"],
    "Letter_Consonants": ["c", "d"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 42,
    "y": 0,
    "cellNo":3,
    "topX": -40,
    "topY": -800,
    "posX": 110,
    "posY": 685,
    "postID": 12,
    "snakeLadder": 0,
    "stage": "Brahmacharya",
    "chakra": "Mulaadhaara",
    "toast": "You have landed in <strong>māyā</strong> as a result of <strong>ahaṅkāra</strong>",
    "toastTitle": "It was a Snake from 55 to 2",
    "info": {
      "name": "māyā",
      "quote": [{
        "name": "It is difficult indeed to pierce this divine maya of the gunas. But the faithful are able to pierce it – Gita 7.14"
      }, {
        "name": "Does'nt the world revolve like a magic wheel? Isn't Brahman the hub? – Gita 18.61."
      }, {
        "name": "The scriptures itself declare that all duality is a mere illusion (maya), Non-duality alone is the Absolute Truth. Such is also our direct experience in deep-sleep – Shankara (Vivekachuramani – 406)"
      }, {
        "name": "māyā is an illusion, created and destroyed by Prakṛiti"
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["e", "f", "g"],
    "Letter_Vowels": ["e", "o", "u"],
    "Letter_Consonants": ["l", "f", "g"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 80,
    "y": 0,
    "cellNo":4,
    "topX": -214,
    "topY": -800,
    "posX": 194,
    "posY": 685,
    "postID": 15,
    "snakeLadder": 0,
    "stage": "Brahmacharya",
    "chakra": "Mulaadhaara",
    "toast": "You have landed in <strong>krodha</strong> as a result of <strong>durbuddhi</strong>",
    "toastTitle": "It was a Snake from 61 to 3",
    "info": {
      "name": "krodha",
      "quote": [{
        "name": "Anger leads to confusion, and confusion kills the power of memory; with the destruction of memory choice is rendered impossible; and when moral choice fails, man is doomed – Gita 2.63"
      }, {
        "name": "A quick temper will make a fool of you soon enough – Bruce Lee"
      }, {
        "name": "Anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured – Mark Twain"
      }, {
        "name": "Anger is never without a reason, but seldom with a good one – Benjamin Franklin"
      }, {
        "name": "Angry men are blind and foolish, for reason at such time takes flight; and, in her absence, wrath plunders all the riches of the intellect, while the judgement remains the prisoner of it's own pride – Pietro Aretino"
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["c", "d"],
    "Letter_Vowels": ["e", "e"],
    "Letter_Consonants": ["c", "d"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 120,
    "y": 0,
    "cellNo":5,
    "topX": -214,
    "topY": -800,
    "posX": 277,
    "posY": 685,
    "postID": 19,
    "snakeLadder": 0,
    "stage": "Brahmacharya",
    "chakra": "Mulaadhaara",
    "toast": "You have landed in <strong>lobha</strong> as a result of <strong>dveṣa</strong>",
    "toastTitle": "It was a Snake from 16 to 4",
    "info": {
      "name": "lobha",
      "quote": [{
        "name": "The greed for fruit misses the flower – Rabindranath Tagore"
      }, {
        "name": "Beware! Guard against every kind of greed. Life does not consist in an abundance of possessions – Luke 12.15"
      }, {
        "name": "Oh, the jealousy, the greed is the unraveling. It's the unraveling and it undoes all the joy that could be – Joni Mitchell"
      }, {
        "name": "How many fond fools serve mad jealousy – William Shakespeare (Comedy of Errors Act 2 Scene 1)"
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["m", "n"],
    "Letter_Vowels": ["e", "u"],
    "Letter_Consonants": ["m", "n"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 158,
    "y": 0,
    "cellNo":6,
    "topX": -548,
    "topY": -800,
    "posX": 360,
    "posY": 685,
    "postID": 24,
    "snakeLadder": 0,
    "stage": "Brahmacharya",
    "chakra": "Mulaadhaara",
    "info": {
      "name": "bhūloka",
      "quote": [{
        "name": "Bhuloka literally means ‘the earth-world’. Bhumi or the earth is considered as a ‘loka,’ a place for doing karma or actions and enjoy their fruits. Hence, it is this earth with all its living beings, that has been designated as ‘bhuloka.’"
      }, {
        "name": "The radius of Bhū-maṇḍala extends as far as the sun spreads its light and heat and as far as the moon and all the stars can be seen – Srimad Bhagvada 5.16.1"
      }, {
        "name": "Bhuloka literally means ‘the earth-world’. Bhumi or the earth is considered as a ‘loka,’ a place for doing karma or actions and enjoy their fruits. Hence, it is this earth with all its living beings, that has been designated as ‘bhuloka.’"
      }, {
        "name": "The Mūlādhār chakra defines our relation to Earth. It impacts our vitality, passion and survival instincts."
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["r", "s", "t"],
    "Letter_Vowels": ["i", "o", "u"],
    "Letter_Consonants": ["r", "s", "t"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 200,
    "y": 0,
    "cellNo":7,
    "topX": -715,
    "topY": -800,
    "posX": 444,
    "posY": 685,
    "postID": 26,
    "snakeLadder": 0,
    "stage": "Brahmacharya",
    "chakra": "Mulaadhaara",
    "toast": "You have landed in <strong>moha</strong> as a result of <strong>adharma</strong>",
    "toastTitle": "It was a Snake from 29 to 6",
    "info": {
      "name": "moha",
      "quote": [{
        "name": "That pleasure of which delusion is the beginning and delusion is the consequence, which arises from sleep, indolence and ignorance, that is declared tamasic – Gita 18.39"
      }, {
        "name": "Loving, hating, having expectations: all these are attachments. Attachment prevents the growth of one's true being – Laozi"
      }, {
        "name": "What we have to learn, in both meditation and in life, is to be free of attachment to the good experiences, and free of aversion to the negative ones – Sogyal Rinpoche"
      }, {
        "name": "Real meditation is not about mastering a technique; it's about letting go of control – Unknown "
      }, {
        "name": "Non-attachment is not the elimination of desire. It is the spaciousness to allow any quality of mind, any thought or any feeling, to arise without closing around it, without eliminating the pure witness of being. It is an active receptivity to life – Stephen Levine"
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["u", "v"],
    "Letter_Vowels": ["u", "e"],
    "Letter_Consonants": ["k", "v"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 240,
    "y": 0,
    "cellNo":8,
    "topX": -800,
    "topY": -800,
    "posX": 528,
    "posY": 685,
    "postID": 28,
    "snakeLadder": 0,
    "stage": "Brahmacharya",
    "chakra": "Mulaadhaara",
    "toast": "You have landed in <strong>abhimāna</strong> as a result of <strong>kusangati</strong>",
    "toastTitle": "It was a Snake from 24 to 7",
    "info": {
      "name": "abhimāna",
      "quote": [{
        "name": "Pride, obstreperousness, vanity, anger boorishness, and ignorance are the marks of the anti-divine – Gita 16.4"
      }, {
        "name": "It was pride that changed angels into devils; it is humility that makes men as angels – Saint Augustine"
      }, {
        "name": "False pride is like the self-esteem curriculum for toddlers where everything is praised and no achievement ultimately has any meaning – Anne-Marie Slaughter"
      }, {
        "name": "Bad company corrupts good character – Menander of Athens"
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["w", "x"],
    "Letter_Vowels": ["i", "o"],
    "Letter_Consonants": ["w", "x"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 275,
    "y": 0,
    "cellNo":9,
    "topX": -800,
    "topY": -800,
    "posX": 610,
    "posY": 685,
    "postID": 32,
    "snakeLadder": 0,
    "stage": "Brahmacharya",
    "chakra": "Mulaadhaara",
    "toast": "You have landed in <strong>mithyā</strong> as a result of <strong>ịrṣyā</strong>",
    "toastTitle": "It was a Snake from 12 to 8",
    "info": {
      "name": "mithyā",
      "quote": [{
        "name": "With two eyes we see the same image, with two feet we walk the same path. Duality is an illusion – Unknown"
      }, {
        "name": "Brahman alone is real; the world is non-real; and the individual Self is essentially not-different from Brahman – Shankara (Vivekachuramani)"
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["y", "z"],
    "Letter_Vowels": ["u", "o"],
    "Letter_Consonants": ["y", "z"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 320,
    "y": 0,
    "cellNo":10,
    "topX": -800,
    "topY": -800,
    "posX": 691,
    "posY": 685,
    "postID": 34,
    "snakeLadder": 0,
    "stage": "Brahmacharya",
    "chakra": "Mulaadhaara",
    "toast": "You have landed in <strong>kāma</strong> as a result of <strong>avidyā</strong>",
    "toastTitle": "It was a Snake from 44 to 9",
    "info": {
      "name": "kāma",
      "quote": [{
        "name": "This is desire and its companion wrath, children of rajas, know thou this as the soul's great enemy (which has to be slain) – Gita 3.37"
      }, {
        "name": "Memory creates a hallucination of the past, desire creates a hallucination of the future – Jaggi Vasudev"
      }, {
        "name": "All men by nature desire knowledge – Aristotle"
      }, {
        "name": "All suffering originates from carving, from attachment, from desire – Edgar Allan Poe"
      }, {
        "name": "Buddha's doctrine: Man suffers because of his craving to possess and keep forever things which are essentially impermanent. This frustration of the desire to possess is the immediate cause of suffering – Allan Watts"
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["u", "v"],
    "Letter_Consonants": ["k", "v"],
    "Letter_Vowels": ["u", "e"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 317,
    "y": -45,
    "cellNo":11,
    "topX": -800,
    "topY": -800,
    "posX": 691,
    "posY": 590,
    "postID": 36,
    "snakeLadder": 23,
    "stage": "Brahmacharya",
    "chakra": "Svadhishthaana",
    "info": {
      "name": "tapa",
      "quote": [{
        "name": "A gentleman avoids seeking to satisfy his appetite to the full when he eats and avoids seeking comfort when he is at home. He may simply be said to be fond of learning."
      }, {
        "name": "The study and the teaching of the vedas is tapa – Nāka son of Mudgala (Taittiriya Upanishad Ninth Anuvak)"
      }, {
        "name": "A good student should have the awareness of a crow, the concentration of a crane, shallow sleep like a dog, eat limited food and renounce the attachment to his house and family. To be able to study the vedas, a student must abide by these rules."
      }, {
        "name": "Discipline not desire determines your destiny – Unknown"
      }, {
        "name": "Tapasya means to accept inconvenience for higher purpose – Radhanath Swami"
      }, {
        "name": "With self-discipline most anything is possible – Theodore Roosevelt"
      }],
      "movement": {
        "displacement": [13, 13, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [13, 13, 13, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["j", "k"],
    "Letter_Vowels": ["o", "i"],
    "Letter_Consonants": ["j", "k"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 277,
    "y": -45,
    "cellNo":12,
    "topX": -800,
    "topY": -800,
    "posX": 610,
    "posY": 590,
    "postID": 39,
    "snakeLadder": 0,
    "stage": "Brahmacharya",
    "chakra": "Svadhishthaana",
    "info": {
      "name": "gandharva",
      "quote": [{
        "name": "Celestial musicians entertain the Gods and those who have risen to this plane by their austerities. A player in this cell experiences inward joy, a feeling of rhythm and a sense of harmony."
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["m", "n"],
    "Letter_Vowels": ["e", "u"],
    "Letter_Consonants": ["m", "n"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 238,
    "y": -45,
    "cellNo":13,
    "topX": -800,
    "topY": -800,
    "posX": 528,
    "posY": 590,
    "postID": 41,
    "snakeLadder": 8,
    "stage": "Brahmacharya",
    "chakra": "Svadhishthaana",
    "info": {
      "name": "ịrṣyā",
      "quote": [{
        "name": "Envy is the art of counting another's blessings instead of your own – Harold Coffin"
      }],
      "movement": {
        "displacement": [-4, -4, -4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [-4, -4, -4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["o", "p", "q"],
    "Letter_Vowels": ["o", "a", "e"],
    "Letter_Consonants": ["j", "p", "q"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 197,
    "y": -45,
    "cellNo":14,
    "topX": -593,
    "topY": -800,
    "posX": 444,
    "posY": 590,
    "postID": 43,
    "snakeLadder": 0,
    "stage": "Brahmacharya",
    "chakra": "Svadhishthaana",
    "toast": "You have landed in <strong>antarikṣa</strong> as a result of <strong>tāmasloka</strong>",
    "toastTitle": "It was a Snake from 63 to 13",
    "info": {
      "name": "antarikṣa",
      "quote": [{
        "name": "Action is greater than inaction. Therefore, Arjuna, work but work selflessly – Gita 3.8"
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["a", "b"],
    "Letter_Vowels": ["a", "a"],
    "Letter_Consonants": ["h", "b"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 158,
    "y": -45,
    "cellNo":15,
    "topX": -548,
    "topY": -800,
    "posX": 360,
    "posY": 590,
    "postID": 45,
    "snakeLadder": 0,
    "stage": "Brahmacharya",
    "chakra": "Svadhishthaana",
    "info": {
      "name": "bhuvaloka",
      "quote": [{
        "name": "The Astral Plane, where the player becomes alive with possibilities. The player engages in imagination as his physical body is also maturing."
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["e", "f"],
    "Letter_Vowels": ["e", "o"],
    "Letter_Consonants": ["l", "f"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 117,
    "y": -45,
    "cellNo":16,
    "topX": -251,
    "topY": -800,
    "posX": 277,
    "posY": 590,
    "postID": 47,
    "snakeLadder": 0,
    "stage": "Brahmacharya",
    "chakra": "Svadhishthaana",
    "info": {
      "name": "nāga loka",
      "quote": [{
        "name": "The realm of the Fantastic. The plane of the semi-divine Nāgas who are masters of great wisdom. Nāgas are known to be guardians of fantastic treasures."
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["i", "j"],
    "Letter_Vowels": ["e", "o"],
    "Letter_Consonants": ["s", "j"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 79,
    "y": -45,
    "cellNo":17,
    "topX": -84,
    "topY": -800,
    "posX": 194,
    "posY": 590,
    "postID": 51,
    "snakeLadder": 4,
    "stage": "Brahmacharya",
    "chakra": "Svadhishthaana",
    "info": {
      "name": "dveṣa",
      "quote": [{
        "name": "O, beware, my lord, of jealousy; It is the green-ey'd monster, which doth mock the meat it feeds on – William Shakespeare (Othello Act III Scene III)"
      }],
      "movement": {
        "displacement": [-12, -12, -12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [-12, -12, -12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["c", "d"],
    "Letter_Vowels": ["e", "e"],
    "Letter_Consonants": ["c", "d"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 40,
    "y": -45,
    "cellNo":18,
    "topX": -84,
    "topY": -800,
    "posX": 110,
    "posY": 590,
    "postID": 54,
    "snakeLadder": 69,
    "stage": "Brahmacharya",
    "chakra": "Svadhishthaana",
    "info": {
      "name": "dayā",
      "quote": [{
        "name": "Compassion is an experience that makes the player one with the divine. Love for other completely removes the veil of the ego in the self, thus breaking free of the most basic human bondage; māyā."
      }],
      "movement": {
        "displacement": [52, 52, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [52, 52, 52, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["e", "f"],
    "Letter_Vowels": ["e", "o"],
    "Letter_Consonants": ["l", "f"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 0,
    "y": -45,
    "cellNo":19,
    "topX": 0,
    "topY": -800,
    "posX": 28,
    "posY": 590,
    "postID": 56,
    "snakeLadder": 0,
    "stage": "Brahmacharya",
    "chakra": "Svadhishthaana",
    "info": {
      "name": "harṣa",
      "quote": [{
        "name": "Joy and Excitement are the feelings in this cell, the experiences as she enters from adolescence to youth. She is full of energy. Having moved away from the fear and insecurity of being a child (1st stage) she has risen above the sensual desires of the adolescent (2nd stage)."
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["w", "x"],
    "Letter_Vowels": ["i", "o"],
    "Letter_Consonants": ["w", "x"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 0,
    "y": -90,
    "cellNo":20,
    "topX": 0,
    "topY": -600,
    "posX": 28,
    "posY": 495,
    "postID": 61,
    "snakeLadder": 0,
    "stage": "Grihasta",
    "chakra": "Manipura",
    "info": {
      "name": "karmayoga",
      "quote": [{
        "name": "Know that work is born of Brahman!"
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["u", "v"],
    "Letter_Vowels": ["u", "e"],
    "Letter_Consonants": ["k", "v"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 40,
    "y": -90,
    "cellNo":21,
    "topX": 0,
    "topY": -600,
    "posX": 110,
    "posY": 495,
    "postID": 63,
    "snakeLadder": 32,
    "stage": "Grihasta",
    "chakra": "Manipura",
    "info": {
      "name": "dāna",
      "quote": [{
        "name": "Acts of sacrifice, giving, and askesis ought not be renounced at all, but should be performed, for they purify the wise – Gita 18.5"
      }],
      "movement": {
        "displacement": [12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["m", "n"],
    "Letter_Vowels": ["e", "u"],
    "Letter_Consonants": ["m", "n"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 79,
    "y": -90,
    "cellNo":22,
    "topX": 50,
    "topY": -600,
    "posX": 194,
    "posY": 495,
    "postID": 65,
    "snakeLadder": 0,
    "stage": "Grihasta",
    "chakra": "Manipura",
    "info": {
      "name": "prāyaścitta",
      "quote": [{
        "name": "Everyday I examine my character in three respects: am I disloyal in my designs for others, am I untrustworthy in my dealings with friends, have I failed to practise what has been passed to me?"
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["o", "p", "q"],
    "Letter_Vowels": ["o", "a", "e"],
    "Letter_Consonants": ["j", "p", "q"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 120,
    "y": -90,
    "cellNo":23,
    "topX": 50,
    "topY": -600,
    "posX": 277,
    "posY": 495,
    "postID": 67,
    "snakeLadder": 60,
    "stage": "Grihasta",
    "chakra": "Manipura",
    "info": {
      "name": "dharma",
      "quote": [{
        "name": "If one sets one's heart on humaneness, one will be without evil"
      }],
      "movement": {
        "displacement": [38, 38, 38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [38, 38, 38, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["a", "b", "c"],
    "Letter_Vowels": ["a", "a", "e"],
    "Letter_Consonants": ["h", "b", "c"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 160,
    "y": -90,
    "cellNo":24,
    "topX": -407,
    "topY": -600,
    "posX": 360,
    "posY": 495,
    "postID": 69,
    "snakeLadder": 0,
    "stage": "Grihasta",
    "chakra": "Manipura",
    "toast": "You have landed in <strong>swargaloka</strong> as a result of <strong>tapa</strong>",
    "toastTitle": "Got Ladder from 10 to 23",
    "info": {
      "name": "swargaloka",
      "quote": [{
        "name": "Heaven is where Indra dwells. Every religion has a heaven, for Marx, this was the classless society. In the Hindu tradition, this is the highest loka that perishes and is reborn every day of each day of Brahmā, the creator."
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 23, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["e", "f"],
    "Letter_Consonants": ["l", "f"],
    "Letter_Vowels": ["e", "o"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 200,
    "y": -90,
    "cellNo":25,
    "topX": -407,
    "topY": -600,
    "posX": 444,
    "posY": 495,
    "postID": 71,
    "snakeLadder": 7,
    "stage": "Grihasta",
    "chakra": "Manipura",
    "info": {
      "name": "kusaṅgati",
      "quote": [{
        "name": "Bad company ruins good morals – I Corinthians 15.33"
      }],
      "movement": {
        "displacement": [-17, -17, -17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [-17, -17, -17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["g", "h"],
    "Letter_Vowels": ["u", "a"],
    "Letter_Consonants": ["g", "h"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 238,
    "y": -90,
    "cellNo":26,
    "topX": -710,
    "topY": -600,
    "posX": 528,
    "posY": 495,
    "postID": 73,
    "snakeLadder": 0,
    "stage": "Grihasta",
    "chakra": "Manipura",
    "info": {
      "name": "susaṅgati",
      "quote": [{
        "name": "A gentleman is diligent in deed and cautious in word, and he associates with possessors of the Way and is put right by them."
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["i", "j"],
    "Letter_Vowels": ["e", "o"],
    "Letter_Consonants": ["s", "j"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 280,
    "y": -90,
    "cellNo":27,
    "topX": -800,
    "topY": -600,
    "posX": 610,
    "posY": 495,
    "postID": 75,
    "snakeLadder": 0,
    "stage": "Grihasta",
    "chakra": "Manipura",
    "info": {
      "name": "cintā",
      "quote": [{
        "name": "Stress & Sorrow are very real experiences. The player is nearing the end of her youth. She is contemplating family, and first experiences cintā. It bears down the player, bringing her back to reality."
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 26, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["k", "l"],
    "Letter_Vowels": ["i", "o"],
    "Letter_Consonants": ["k", "l"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 317,
    "y": -90,
    "cellNo":28,
    "topX": -800,
    "topY": -600,
    "posX": 691,
    "posY": 495,
    "postID": 77,
    "snakeLadder": 41,
    "stage": "Grihasta",
    "chakra": "Manipura",
    "info": {
      "name": "paramārtha",
      "quote": [{
        "name": "Param means supreme and Arth means meaning. Together they imply actions done harmoniously with nature while being fully conscious and aware of dharma."
      }],
      "movement": {
        "displacement": [14, 14, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [14, 14, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["m", "n"],
    "Letter_Vowels": ["e", "u"],
    "Letter_Consonants": ["m", "n"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 317,
    "y": -135,
    "cellNo":29,
    "topX": -800,
    "topY": -600,
    "posX": 691,
    "posY": 402,
    "postID": 303,
    "snakeLadder": 50,
    "stage": "Grihasta",
    "chakra": "Anaahata",
    "info": {
      "name": "sudharma",
      "quote": [{
        "name": "The gentleman is familiar with what is right, just as the small man is familiar with profit."
      }],
      "movement": {
        "displacement": [22, 22, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [22, 22, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["o", "p", "q"],
    "Letter_Vowels": ["o", "a", "e"],
    "Letter_Consonants": ["j", "p", "q"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 277,
    "y": -135,
    "cellNo":30,
    "topX": -750,
    "topY": -445,
    "posX": 610,
    "posY": 402,
    "postID": 305,
    "snakeLadder": 6,
    "stage": "Grihasta",
    "chakra": "Anaahata",
    "info": {
      "name": "adharma",
      "quote": [{
        "name": "Irreligiosity is the root of all our fears, troubles and sufferings. It is based on moha (attachment). adharma, like dharma, is also a constant, but varies from player to player in interpretation."
      }],
      "movement": {
        "displacement": [-23, -23, -23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [-23, -23, -23, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["r", "s"],
    "Letter_Vowels": ["i", "o"],
    "Letter_Consonants": ["r", "s"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 237,
    "y": -135,
    "cellNo":31,
    "topX": -750,
    "topY": -445,
    "posX": 528,
    "posY": 402,
    "postID": 307,
    "snakeLadder": 0,
    "stage": "Grihasta",
    "chakra": "Anaahata",
    "info": {
      "name": "uttamgati",
      "quote": [{
        "name": "Good Tendencies are the result of good habits, as they help the player act in the rhythm of the cosmic laws."
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["t", "u"],
    "Letter_Vowels": ["u", "u"],
    "Letter_Consonants": ["t", "k"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 200,
    "y": -135,
    "cellNo":32,
    "topX": -593,
    "topY": -445,
    "posX": 444,
    "posY": 402,
    "postID": 309,
    "snakeLadder": 0,
    "stage": "Grihasta",
    "chakra": "Anaahata",
    "info": {
      "name": "yakṣaloka",
      "quote": [{
        "name": "Abode of the Nature Spirits, is the experience the player is lead to, after Uttam Gati. The player on landing here gains the understanding and knowledge of cosmic principles."
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 31, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["v", "w"],
    "Letter_Vowels": ["e", "i"],
    "Letter_Consonants": ["v", "w"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 160,
    "y": -135,
    "cellNo":33,
    "topX": -416,
    "topY": -445,
    "posX": 360,
    "posY": 402,
    "postID": 311,
    "snakeLadder": 0,
    "stage": "Grihasta",
    "chakra": "Anaahata",
    "toast": "You have landed in <strong>mahaloka</strong> as a result of <strong>dāna</strong>",
    "toastTitle": "Got Ladder from 20 to 32",
    "info": {
      "name": "mahaloka",
      "quote": [{
        "name": "For the unpeaceful how can there be happiness?"
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["x", "y"],
    "Letter_Vowels": ["o", "u"],
    "Letter_Consonants": ["x", "y"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 120,
    "y": -135,
    "cellNo":34,
    "topX": -251,
    "topY": -445,
    "posX": 277,
    "posY": 402,
    "postID": 313,
    "snakeLadder": 0,
    "stage": "Grihasta",
    "chakra": "Anaahata",
    "info": {
      "name": "gandhaloka",
      "quote": [{
        "name": "Plane of Fragrance, that is released when the player is cleansed of the baser weaknesses and the body ceases to produce bad odours. This divine odour is not unlike known fragrances such as sandalwood and lotus."
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["z", "b"],
    "Letter_Vowels": ["o", "a"],
    "Letter_Consonants": ["z", "b"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 80,
    "y": -135,
    "cellNo":35,
    "topX": -80,
    "topY": -445,
    "posX": 194,
    "posY": 402,
    "postID": 315,
    "snakeLadder": 0,
    "stage": "Grihasta",
    "chakra": "Anaahata",
    "info": {
      "name": "rasaloka",
      "quote": [{
        "name": "Plane of Taste, is the aesthetic experience of the basic sense of taste.  Here the player enjoys the rasa, the very nature, of the taste."
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 34, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["m", "n", "o"],
    "Letter_Vowels": ["e", "u", "o"],
    "Letter_Consonants": ["m", "n", "j"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 40,
    "y": -135,
    "cellNo":36,
    "topX": 0,
    "topY": -445,
    "posX": 110,
    "posY": 402,
    "postID": 317,
    "snakeLadder": 0,
    "stage": "Grihasta",
    "chakra": "Anaahata",
    "toast": "You have landed in <strong>naraka</strong> as a result of <strong>himsā</strong>",
    "toastTitle": "It was a Snake from 52 to 35",
    "info": {
      "name": "naraka",
      "quote": [{
        "name": "Hell is the cleansing experience of a player. However, she is still not cleansed enough to experience the divine. It is a stage of atonement through suffering."
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["p", "q"],
    "Letter_Vowels": ["a", "e"],
    "Letter_Consonants": ["p", "q"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 0,
    "y": -135,
    "cellNo":37,
    "topX": 0,
    "topY": -445,
    "posX": 28,
    "posY": 402,
    "postID": 319,
    "snakeLadder": 0,
    "stage": "Grihasta",
    "chakra": "Anaahata",
    "info": {
      "name": "spaṣta cetanā",
      "quote": [{
        "name": "Plane of Clear Sound is the experience of a melodious cosmic rhythm within the player’s self. It means that the player’s body is now transparent to cosmic sound and vibrations. It is a beautiful result after the experience of naraka."
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 36, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["j", "k"],
    "Letter_Vowels": ["o", "i"],
    "Letter_Consonants": ["j", "k"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 0,
    "y": -180,
    "cellNo":38,
    "topX": 0,
    "topY": -445,
    "posX": 28,
    "posY": 310,
    "postID": 321,
    "snakeLadder": 66,
    "stage": "Vaanaprastha",
    "chakra": "Vishudhha",
    "info": {
      "name": "gyāna",
      "quote": [{
        "name": "True awareness and knowledge are realisations that lead to the experience of bliss. A player who lands on this cell discovers reality through insight, practice and knowledge."
      }],
      "movement": {
        "displacement": [29, 29, 29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [29, 29, 29, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["m", "n"],
    "Letter_Vowels": ["e", "u"],
    "Letter_Consonants": ["m", "n"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 40,
    "y": -180,
    "cellNo":39,
    "topX": -40,
    "topY": -250,
    "posX": 110,
    "posY": 310,
    "postID": 323,
    "snakeLadder": 0,
    "stage": "Vaanaprastha",
    "chakra": "Vishudhha",
    "info": {
      "name": "prāṇa",
      "quote": [{
        "name": "Life Energy is the energy we draw from our environment to sustain life. Life and consciousness are distinct from each other. Life is the vehicle through which consciousness manifests and prāna is the energising force of life."
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 38, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["o", "p"],
    "Letter_Vowels": ["o", "a"],
    "Letter_Consonants": ["j", "p"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 80,
    "y": -180,
    "cellNo":40,
    "topX": -214,
    "topY": -250,
    "posX": 194,
    "posY": 310,
    "postID": 325,
    "snakeLadder": 0,
    "stage": "Vaanaprastha",
    "chakra": "Vishudhha",
    "info": {
      "name": "apāna",
      "quote": [{
        "name": "Energy released is the energy that flows downwards through our intestines and is expelled. When apana is weak, we become susceptible to illness, fear, doubt, confusions, insecurity, and loss of purpose."
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 39, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["w", "x"],
    "Letter_Vowels": ["i", "o"],
    "Letter_Consonants": ["w", "x"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 120,
    "y": -180,
    "cellNo":41,
    "topX": -214,
    "topY": -250,
    "posX": 277,
    "posY": 310,
    "postID": 327,
    "snakeLadder": 0,
    "stage": "Vaanaprastha",
    "chakra": "Vishudhha",
    "info": {
      "name": "vayāna",
      "quote": [{
        "name": "A pervasive and expansive force, vayāna governs the movement of energy through the circulatory system and the nervous system; and the free flow of thoughts and feelings in the mind."
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["u", "v"],
    "Letter_Vowels": ["u", "e"],
    "Letter_Consonants": ["k", "v"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 158,
    "y": -180,
    "cellNo":42,
    "topX": -548,
    "topY": -250,
    "posX": 360,
    "posY": 310,
    "postID": 329,
    "snakeLadder": 0,
    "stage": "Vaanaprastha",
    "chakra": "Vishudhha",
    "toast": "You have landed in <strong>janaloka</strong> as a result of <strong>paramārtha</strong>",
    "toastTitle": "Got Ladder from 27 to 41",
    "info": {
      "name": "janaloka",
      "quote": [{
        "name": "This is the residence of the Rishis and demigods during the night of Brahmā, and is termed jana because the patriarchs are the progenitors of mankind."
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 41, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["a", "b"],
    "Letter_Vowels": ["a", "a"],
    "Letter_Consonants": ["h", "b"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 200,
    "y": -180,
    "cellNo":43,
    "topX": -715,
    "topY": -250,
    "posX": 444,
    "posY": 310,
    "postID": 331,
    "snakeLadder": 0,
    "stage": "Vaanaprastha",
    "chakra": "Vishudhha",
    "info": {
      "name": "agnikuṇḍ",
      "quote": [{
        "name": "The fire pit is used to venerate the fire-god Agni. He has three sons with Svāhā. They are Pāvaka (produced by energy, eg. electrical fire, lightning), Pāvamāna (produced by friction) and ṣuci (fire of the gods, that which pervades all the galaxies and our self). Agni is an immortal among mortals."
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 42, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 42, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["j", "k"],
    "Letter_Vowels": ["o", "i"],
    "Letter_Consonants": ["j", "k"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 237,
    "y": -180,
    "cellNo":44,
    "topX": -800,
    "topY": -250,
    "posX": 528,
    "posY": 310,
    "postID": 333,
    "snakeLadder": 0,
    "stage": "Vaanaprastha",
    "chakra": "Vishudhha",
    "info": {
      "name": "manuṣyajanman",
      "quote": [{
        "name": "Birth of the Evolved Man is the experience of the player as an evolved man. This is the man of the Sata Yuga. The man who has just been created by the progenitors of the human race, the most powerful ascetics. "
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 43, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 43, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["c", "d"],
    "Letter_Vowels": ["e", "e"],
    "Letter_Consonants": ["c", "d"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 277,
    "y": -180,
    "cellNo":45,
    "topX": -800,
    "topY": -250,
    "posX": 610,
    "posY": 310,
    "postID": 335,
    "snakeLadder": 9,
    "stage": "Vaanaprastha",
    "chakra": "Vishudhha",
    "info": {
      "name": "avidyā",
      "quote": [{
        "name": "Is ignorance of the self within. If the player lands here, she indulges in this ignorance and falls down to the 1st stage, the realm of kāma (desire). The player experiences the basest vibrations, and must again raise her awareness through the yoga of karma."
      }],
      "movement": {
        "displacement": [-35, -35, -35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [-35, -35, -35, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["y", "z"],
    "Letter_Vowels": ["u", "o"],
    "Letter_Consonants": ["y", "z"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 317,
    "y": -180,
    "cellNo":46,
    "topX": -800,
    "topY": -250,
    "posX": 691,
    "posY": 310,
    "postID": 337,
    "snakeLadder": 67,
    "stage": "Vaanaprastha",
    "chakra": "Vishudhha",
    "info": {
      "name": "suvidyā",
      "quote": [{
        "name": "If he appreciates men of quality, if he makes light of sexual attraction, if in serving his father and mother he is capable of using his strength to the utmost, if in serving his lord he is capable of offering up his life, if in his dealings with friends he is trustworthy in what he says, I would certainly call him learned even if it is said that he has never studied"
      }],
      "movement": {
        "displacement": [-22, -22, -22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [-22, -22, -22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["a", "b"],
    "Letter_Vowels": ["e", "e"],
    "Letter_Consonants": ["h", "b"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 317,
    "y": -225,
    "cellNo":47,
    "topX": -800,
    "topY": -30,
    "posX": 691,
    "posY": 215,
    "postID": 339,
    "snakeLadder": 62,
    "stage": "Vaanaprastha",
    "chakra": "Ajnaa",
    "info": {
      "name": "viveka",
      "quote": [{
        "name": "Asuric men have no true knowledge of action or the way of abstention – Gita 16.7"
      }],
      "movement": {
        "displacement": [16, 16, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [16, 16, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["c", "d"],
    "Letter_Vowels": ["e", "o"],
    "Letter_Consonants": ["c", "d"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 277,
    "y": -225,
    "cellNo":48,
    "topX": -800,
    "topY": -30,
    "posX": 610,
    "posY": 215,
    "postID": 341,
    "snakeLadder": 0,
    "stage": "Vaanaprastha",
    "chakra": "Ajnaa",
    "info": {
      "name": "sarasvati",
      "quote": [{
        "name": "The Plane of the Neutral is where the player realises and experiences the sushumna through yogic practices. The sushumna flows through the spine. The idā and the pingalā nāḍī entwine around the sushmna as they meet in the region of the third eye."
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 47, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["e", "f"],
    "Letter_Vowels": ["u", "a"],
    "Letter_Consonants": ["l", "f"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 237,
    "y": -225,
    "cellNo":49,
    "topX": -750,
    "topY": -30,
    "posX": 528,
    "posY": 215,
    "postID": 343,
    "snakeLadder": 0,
    "stage": "Vaanaprastha",
    "chakra": "Ajnaa",
    "info": {
      "name": "yamunā",
      "quote": [{
        "name": "The Plane of the Solar is the male energy in the player. If the player is a female, she will find it difficult to identify with the male in her. However, knowing and realising the male aspect of her self, will help her understand the nature of duality."
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 48, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["g", "h"],
    "Letter_Vowels": ["e", "o"],
    "Letter_Consonants": ["g", "h"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 200,
    "y": -225,
    "cellNo":50,
    "topX": -593,
    "topY": -30,
    "posX": 444,
    "posY": 215,
    "postID": 345,
    "snakeLadder": 0,
    "stage": "Vaanaprastha",
    "chakra": "Ajnaa",
    "info": {
      "name": "gaṅgā",
      "quote": [{
        "name": "The Plane of the Lunar is the female energy in the player. Ganga is also the only river that is believed to flow through all 3 lokas: heaven, earth and pātāla. Ganga is the purifier and liberator of souls."
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["i", "j"],
    "Letter_Vowels": ["i", "o"],
    "Letter_Consonants": ["s", "j"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 157,
    "y": -225,
    "cellNo":51,
    "topX": -416,
    "topY": -30,
    "posX": 360,
    "posY": 215,
    "postID": 347,
    "snakeLadder": 0,
    "stage": "Vaanaprastha",
    "chakra": "Ajnaa",
    "toast": "You have landed in <strong>tapaloka</strong> as a result of <strong>sudharma</strong>",
    "toastTitle": "Got Ladder from 28 to 50",
    "info": {
      "name": "tapaloka",
      "quote": [{
        "name": "The Plane of Austerity is the abode of eternal beings engaged in austerities and penance. The player is now in an evolved state, vibrating in the highest realms of creation."
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["k", "l"],
    "Letter_Vowels": ["e", "u"],
    "Letter_Consonants": ["k", "l"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 117,
    "y": -225,
    "cellNo":52,
    "topX": -251,
    "topY": -30,
    "posX": 277,
    "posY": 215,
    "postID": 349,
    "snakeLadder": 0,
    "stage": "Vaanaprastha",
    "chakra": "Ajnaa",
    "toast": "You have landed in <strong>prithvi</strong> as a result of <strong>tamoguna</strong>",
    "toastTitle": "It was a Snake from 72 to 51",
    "info": {
      "name": "prithvi",
      "quote": [{
        "name": "Earth is a magical loka. Its creation is the result of a lot of austerities. Prithvi is also a symbol of dharma, as she follows the laws of creation selflessly, not distinguishing between different beings."
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 51, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 51, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["m", "n"],
    "Letter_Vowels": ["o", "a"],
    "Letter_Consonants": ["m", "n"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 80,
    "y": -225,
    "cellNo":53,
    "topX": -251,
    "topY": -30,
    "posX": 194,
    "posY": 215,
    "postID": 351,
    "snakeLadder": 35,
    "stage": "Vaanaprastha",
    "chakra": "Ajnaa",
    "info": {
      "name": "hiṁsā",
      "quote": [{
        "name": "Violence is a cell that draws the player down to Naraka (hell)."
      }],
      "movement": {
        "displacement": [-17, -17, -17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [-17, -17, -17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["o", "p"],
    "Letter_Vowels": ["e", "i"],
    "Letter_Consonants": ["j", "p"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 40,
    "y": -225,
    "cellNo":54,
    "topX": 0,
    "topY": -30,
    "posX": 110,
    "posY": 215,
    "postID": 353,
    "snakeLadder": 0,
    "stage": "Vaanaprastha",
    "chakra": "Ajnaa",
    "info": {
      "name": "jalaloka",
      "quote": [{
        "name": "The Liquid Plane encapsulates the knowledge of the liquid energy. Humans are formed using 5 elements: prithvi, agni, jala, vāyu and ākāṣ. The player is inspired to realise the power and effects of the jala element within herself."
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 53, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 53, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["q", "r"],
    "Letter_Vowels": ["o", "u"],
    "Letter_Consonants": ["q", "r"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 0,
    "y": -225,
    "cellNo":55,
    "topX": 0,
    "topY": -30,
    "posX": 28,
    "posY": 215,
    "postID": 355,
    "snakeLadder": 68,
    "stage": "Vaanaprastha",
    "chakra": "Ajnaa",
    "info": {
      "name": "bhakti",
      "quote": [{
        "name": "But that supreme Purusha has to be won by a bhakti which turn to him alone – Gita 8.22"
      }],
      "movement": {
        "displacement": [14, 14, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [14, 14, 14, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["s", "t"],
    "Letter_Vowels": ["u", "e"],
    "Letter_Consonants": ["s", "t"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 0,
    "y": -270,
    "cellNo":56,
    "topX": 0,
    "topY": -30,
    "posX": 28,
    "posY": 121,
    "postID": 357,
    "snakeLadder": 2,
    "stage": "Sanyaasa",
    "chakra": "Sahasraara",
    "info": {
      "name": "ahaṅkāra",
      "quote": [{
        "name": "While the actions are being entirely done by the modes of Nature, he whose self is bewildered by egoism thinks that it is his “I” which is doing them – Gita 3.27"
      }],
      "movement": {
        "displacement": [-53, -53, -53, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [-53, -53, -53, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["u", "v"],
    "Letter_Vowels": ["i", "o"],
    "Letter_Consonants": ["k", "v"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 40,
    "y": -270,
    "cellNo":57,
    "topX": -40,
    "topY": 0,
    "posX": 110,
    "posY": 121,
    "postID": 359,
    "snakeLadder": 0,
    "stage": "Sanyaasa",
    "chakra": "Sahasraara",
    "info": {
      "name": "oṅkāra",
      "quote": [{
        "name": "Primal & Cosmic vibrations or Ether. The player realises the presence of ether in her body. oṅkāra is the natural sound of her body, a sound that helps her calm and unite all her senses."
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 56, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 56, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["w", "x"],
    "Letter_Vowels": ["u", "o"],
    "Letter_Consonants": ["w", "x"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 80,
    "y": -270,
    "cellNo":58,
    "topX": -214,
    "topY": 0,
    "posX": 194,
    "posY": 121,
    "postID": 361,
    "snakeLadder": 0,
    "stage": "Sanyaasa",
    "chakra": "Sahasraara",
    "info": {
      "name": "vāyuloka",
      "quote": [{
        "name": "The Gaseous State, where the player assumes and realises the formless, lightness of being. The Lord of this cell Mārut is known for his lightness and expansive existence. His son, Hanuman aka Māruti, is known for his supremacy over mass and weight."
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 57, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 57, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["y", "z"],
    "Letter_Vowels": ["o", "a", "e"],
    "Letter_Consonants": ["y", "z"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 117,
    "y": -270,
    "cellNo":59,
    "topX": -214,
    "topY": 0,
    "posX": 277,
    "posY": 121,
    "postID": 363,
    "snakeLadder": 0,
    "stage": "Sanyaasa",
    "chakra": "Sahasraara",
    "info": {
      "name": "tejaloka",
      "quote": [{
        "name": "The State of Light is the abode of “Surya”. The player on landing here assumes “zero mass”. She becomes a pure vibration and experiences the state of teja, of light and radiation."
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 58, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["o", "p", "q"],
    "Letter_Vowels": ["e", "u"],
    "Letter_Consonants": ["j", "p", "q"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 157,
    "y": -270,
    "cellNo":60,
    "topX": -548,
    "topY": 0,
    "posX": 360,
    "posY": 121,
    "postID": 365,
    "snakeLadder": 0,
    "stage": "Sanyaasa",
    "chakra": "Sahasraara",
    "info": {
      "name": "satyaloka",
      "quote": [{
        "name": "The World of the Creators, where the player experiences Brahma, the self, the divine consciousness; but does not merge with it."
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 59, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 59, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["o", "p", "q"],
    "Letter_Vowels": ["u", "o"],
    "Letter_Consonants": ["m", "n"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 200,
    "y": -270,
    "cellNo":61,
    "topX": -715,
    "topY": 0,
    "posX": 444,
    "posY": 121,
    "postID": 367,
    "snakeLadder": 0,
    "stage": "Sanyaasa",
    "chakra": "Sahasraara",
    "toast": "You have landed in <strong>Subuddhi</strong> as a result of <strong>dharma</strong>",
    "toastTitle": "Got Ladder from 22 to 60",
    "info": {
      "name": "subuddhi",
      "quote": [{
        "name": "Positive Intellect. The player guided by subuddhi will keep on the correct karmic path. Intellect which has no ego in it, is Subuddhi."
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["y", "z"],
    "Letter_Vowels": ["o", "u"],
    "Letter_Consonants": ["s", "t"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 237,
    "y": -270,
    "cellNo":62,
    "topX": -800,
    "topY": 0,
    "posX": 528,
    "posY": 121,
    "postID": 369,
    "snakeLadder": 3,
    "stage": "Sanyaasa",
    "chakra": "Sahasraara",
    "info": {
      "name": "durbuddhi",
      "quote": [{
        "name": "Weak Mindedness is the experience of a clouded perception. On many occasions, this momentary lapse of reason is the result of anger and frustration."
      }],
      "movement": {
        "displacement": [-58, -58, -58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [-58, -58, -58, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["s", "t"],
    "Letter_Vowels": ["o", "a", "e"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 277,
    "y": -270,
    "cellNo":63,
    "topX": -800,
    "topY": 0,
    "posX": 610,
    "posY": 121,
    "postID": 371,
    "snakeLadder": 0,
    "stage": "Sanyaasa",
    "chakra": "Sahasraara",
    "toast": "You have landed in <strong>Sukhaloka</strong> as a result of <strong>viveka</strong>",
    "toastTitle": "Got Ladder from 46 to 62",
    "info": {
      "name": "sukhaloka",
      "quote": [{
        "name": "Plane of Satisfaction. The player is in the later stages of life. She as a seeker, is satisfied with her achievements and experiences Sukha. Immersed in this experience she feels detached from materialistic needs."
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 62, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 62, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["a", "b"],
    "Letter_Vowels": ["a", "e"],
    "Letter_Consonants": ["h", "b"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 317,
    "y": -270,
    "cellNo":64,
    "topX": -800,
    "topY": 0,
    "posX": 691,
    "posY": 121,
    "postID": 373,
    "snakeLadder": 13,
    "stage": "Sanyaasa",
    "chakra": "Sahasraara",
    "info": {
      "name": "tāmasloka",
      "quote": [{
        "name": "What is action and what is inaction, as to this even the sages are perplexed and deluded – Gita 4.16"
      }],
      "movement": {
        "displacement": [-50, -50, -50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [-50, -50, -50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["c", "d"],
    "Letter_Vowels": ["e", "e"],
    "Letter_Consonants": ["c", "d"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 317,
    "y": -315,
    "cellNo":65,
    "topX": -800,
    "topY": 0,
    "posX": 691,
    "posY": 27,
    "postID": 375,
    "snakeLadder": 0,
    "stage": "Sanyaasa",
    "chakra": "Vaikuntha",
    "info": {
      "name": "prakṛitiloka",
      "quote": [{
        "name": "Prakriti is the cause of the body's and the sense's evolution – Gita 13.20"
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["e", "f", "g"],
    "Letter_Vowels": ["e", "o", "u"],
    "Letter_Consonants": ["l", "f", "g"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 277,
    "y": -315,
    "cellNo":66,
    "topX": -800,
    "topY": 0,
    "posX": 610,
    "posY": 27,
    "postID": 377,
    "snakeLadder": 0,
    "stage": "Sanyaasa",
    "chakra": "Vaikuntha",
    "info": {
      "name": "dushkṛitloka",
      "quote": [{
        "name": "The ill-minded and the ignorant are victims of maya and do not worship Me – Gita 7.15"
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 65, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 65, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["h", "i"],
    "Letter_Vowels": ["a", "e"],
    "Letter_Consonants": ["h", "s"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 237,
    "y": -315,
    "cellNo":67,
    "topX": -750,
    "topY": 0,
    "posX": 528,
    "posY": 27,
    "postID": 379,
    "snakeLadder": 0,
    "stage": "Sanyaasa",
    "chakra": "Vaikuntha",
    "toast": "You have landed in <strong>ānanda loka</strong> as a result of <strong>gyāna</strong>",
    "toastTitle": "Got Ladder from 37 to 66",
    "info": {
      "name": "ānanda loka",
      "quote": [{
        "name": "Abode of Brahma is the abode of supreme bliss. Ānanda loka is the inner most sheath, covering the cosmic consciousness."
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["j", "k", "l"],
    "Letter_Vowels": ["o", "i", "o"],
    "Letter_Consonants": ["j", "k", "l"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 200,
    "y": -315,
    "cellNo":68,
    "topX": -593,
    "topY": 0,
    "posX": 444,
    "posY": 27,
    "postID": 549,
    "snakeLadder": 0,
    "stage": "Sanyaasa",
    "chakra": "Vaikuntha",
    "toast": "You have landed in <strong>rudra loka</strong> as a result of <strong>suvidyā</strong>",
    "toastTitle": "Got Ladder from 45 to 67",
    "endingToast": "You need to throw 1, 2, 3, 4 or 5",
    "info": {
      "name": "rudra loka",
      "quote": [{
        "name": "Rudra loka is a group of Vedic Godheads, eleven in number: Hara, Bahurupa, Tryambaka, Aparajita, Vrishakapi, Shambhu, Kapardi, Raivata, Mrigavyadha, Sharva and Kapila.  Shiva is the Lord of Rudraloka. 'I am Shiva among the Rudras' - Gita 10.23"
      }, {
        "name": "Which are the Rudras ? The ten organs in the human body, with the prana as the tenth and the atma as the eleventh. When they depart from this mortal body, they make (one’s relatives) weep. Because they then make them weep, therefore they are called Rudras."
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["m", "n"],
    "Letter_Vowels": ["e", "u"],
    "Letter_Consonants": ["m", "n"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 157,
    "y": -315,
    "cellNo":69,
    "topX": -416,
    "topY": 0,
    "posX": 360,
    "posY": 27,
    "postID": 551,
    "snakeLadder": 0,
    "stage": "Sanyaasa",
    "chakra": "Vaikuntha",
    "toast": "You have landed in <strong>vaikuṇṭha</strong> as a result of <strong>bhakti</strong>",
    "toastTitle": "Got Ladder from 54 to 68",
    "info": {
      "name": "vaikuṇṭha",
      "quote": [{
        "name": "I am equal in all existences, none is dear to Me, none hated – Gita 9.29"
      }],
      "movement": {
        "displacement": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -62, -62, -67],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -62, -62, -67],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["o", "p", "q"],
    "Letter_Vowels": ["o", "a", "e"],
    "Letter_Consonants": ["j", "p", "q"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 117,
    "y": -315,
    "cellNo":70,
    "topX": -251,
    "topY": 0,
    "posX": 277,
    "posY": 27,
    "postID": 381,
    "snakeLadder": 0,
    "stage": "Sanyaasa",
    "chakra": "Vaikuntha",
    "toast": "You have landed in <strong>brahma loka</strong> as a result of <strong>dāya</strong>",
    "toastTitle": "Got Ladder from 17 to 69",
    "endingToast": "You need to throw 1, 2 or 3",
    "info": {
      "name": "brahma loka",
      "quote": [{
        "name": "I am the birth of everything and from me All proceeds into development of action and movement"
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 69, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 69, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["r", "s", "t"],
    "Letter_Vowels": ["i", "o", "u"],
    "Letter_Consonants": ["r", "s", "t"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 80,
    "y": -315,
    "cellNo":71,
    "topX": -84,
    "topY": 0,
    "posX": 194,
    "posY": 27,
    "postID": 553,
    "snakeLadder": 0,
    "stage": "Sanyaasa",
    "chakra": "Vaikuntha",
    "endingToast": "You need to throw 1 or 2",
    "info": {
      "name": "sattvaguṇa",
      "quote": [{
        "name": "Sattva unites with its purity and luminosity; its points of reference are happiness and knowledge – Gita 14.6"
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["u", "v"],
    "Letter_Vowels": ["u", "e"],
    "Letter_Consonants": ["k", "v"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 40,
    "y": -315,
    "cellNo":72,
    "topX": 0,
    "topY": 0,
    "posX": 110,
    "posY": 27,
    "postID": 555,
    "snakeLadder": 0,
    "stage": "Sanyaasa",
    "chakra": "Vaikuntha",
    "endingToast": "You need to throw 1",
    "info": {
      "name": "rajoguṇa",
      "quote": [{
        "name": "Rajas is the quality of passion and causes unrest and attachment: it unites by creating attachment to action – Gita 14.7"
      }],
      "movement": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 999],
        "state": [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0],
        "return": [999, 999, 999, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 71, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["w", "x"],
    "Letter_Vowels": ["i", "o"],
    "Letter_Consonants": ["w", "x"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }, {
    "x": 0,
    "y": -317,
    "cellNo":73,
    "topX": 0,
    "topY": 0,
    "posX": 28,
    "posY": 27,
    "postID": 557,
    "snakeLadder": 51,
    "stage": "Sanyaasa",
    "chakra": "Vaikuntha",
    "info": {
      "name": "tamoguṇa",
      "quote": [{
        "name": "Tamas is born of ignorance; it unites through unknowing, torpor and sleep – Gita 14.8"
      }],
      "movement": {
        "displacement": [-21, -21, -21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      "movementRule": {
        "displacement": [-21, -21, -21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "state": [0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2, 0, 1, 2],
        "return": [999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999, 999],
        "specialMove": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        "diceState": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    },
    "give": [0],
    "to": [],
    "auto_give": [0],
    "specialMoveTrigger": [0, 0],
    "cell_type": 0,
    "treasure_transfer": [0],
    "Letter_Collection": ["y", "z"],
    "Letter_Vowels": ["u", "o"],
    "Letter_Consonants": ["y", "z"],
    "questions": [],
    "images": [],
    "options": [],
    "answers": [],
    "game_restart_exit": [0, 0],
    "passing_direction": [0],
    "landing_direction": [1],
    "Dice_state": [1]
  }];




  var positionConfig = {
    "initCellPos": 68,
    "initPlayerPos": 68,
    "initTargetPos": 68,
    "shortTitle": "BY",
    "retreatCellResult": 6,
    "retreatCellOnCount": 3,
    "initialMoveResult": 6,
    "firstLandingCell": 6,
    "cellDimentionX": 95,
    "cellDimentionY": 95,
    "terminatingCellPos":3
  };

  /* Variables for the game  */


  var diceRolled=0,diceThrowResult=0;

  var iDisplacement = 0;
  var iSnakeLadderBase = 0;
  var iOld_state = 0;
  var iCurrent_state = 0;
  var iReverseTo = 0;
  var iRoll;
  var iOld_ReverseTo = 0;

  //Player Variable
  
  var player = {
    image: null,
    position: 68,
    targetPosition: 1,
    wallet: 100,
    
    global_direction: 1,
    current_cell_type: 0
};

var dice = {

  iDiceFace: 0,
  iDiceRollCount: 0,
  iDiceCurrentRoll: 0,
  
};

//End of player varibale

/* Variables for the game End */

const initializePawn = ()=>
{
    Animated.timing(position,{
      toValue:{x:playerPositions[positionConfig.initCellPos].x,y:playerPositions[positionConfig.initCellPos].y},
      useNativeDriver: true
      }).start()
}

var i=1;

 initializePawn();

  
  const DiceRoll =()=>{
    
    dice.iDiceRollCount++;


    let min = 1;
    let max = 7;
    dice.iDiceCurrentRoll= min+Math.floor( Math.random() * (max - min));
    console.log("Dice roll result :: "+dice.iDiceCurrentRoll);
    initiatePawnMovement();

    
    

  };


  const initiatePawnMovement = async ()=>{

    // console.log("Dice roll number :: "+ diceThrowResult);

       iRoll=dice.iDiceCurrentRoll;
       iOld_state = iCurrent_state;
       iCurrent_state = playerPositions[player.position].info.movement.state[(iRoll * 3) + iOld_state];

       console.log("Current State :: "+ iCurrent_state);

      if (iCurrent_state == 999) {
        iCurrent_state = iOld_state;
      }


      iDisplacement = playerPositions[player.position].info.movement.displacement[iOld_state];

      console.log("Current Displacement :: "+ iDisplacement);

      if (iDisplacement == 0) {
        iDisplacement = playerPositions[player.position].info.movement.displacement[(iRoll * 3) + iOld_state];
        console.log("Re-calculating Displacement is "+iDisplacement+ "For a Roll of "+iRoll);
      }

    if (iDisplacement < 999) {
      iSnakeLadderBase = playerPositions[player.position + iDisplacement].info.movement.displacement[iCurrent_state];
    }
    

      if ((iDisplacement != 0) && (iDisplacement < 999) ) {
      // console.log("Ready to set Target Position")
        iOld_ReverseTo = iReverseTo;
        iReverseTo = playerPositions[player.position].info.movement.return[(iRoll * 3) + iOld_state];
        if (iReverseTo == 999) {
            iReverseTo = iOld_ReverseTo;
        }
      // console.log("Reverse "+iReverseTo);

        player.targetPosition = player.position + iDisplacement;
      // player.targetPosition = player.position + iDisplacement;
      console.log("Player's Target Position is :: "+iDisplacement);
    }
    else if (iDisplacement == 999) {
        player.targetPosition = iReverseTo;
    }

     console.log("Player's Target Position is :: "+iDisplacement);


     if(iDisplacement < 0 || iDisplacement > 6 )
     {
      player.targetPosition=player.position+iDisplacement;
      console.log("Target Position is "+player.targetPosition);
      // console.log("Player's Target Position is Second :: "+iDisplacement+"Cell Name "+playerPositions[player.position + iDisplacement].info.name);
       movePawnToCell();
      
     }
     else if(iDisplacement!=0)
     {
      // console.log("Player's Target Position is Second :: "+iDisplacement+"Cell Name "+playerPositions[player.position + iDisplacement].info.name);
       dice.iDiceCurrentRoll=iDisplacement;
        movePawnNextCell();
     }

     
    
     
    // player.targetPosition=player.position+diceThrowResult;


    // console.log("Player's Target Position is"+player.targetPosition);
    
    // while(player.position!=player.targetPosition)
    // {
      
    //   flyoverEvent();

      // player.position=player.position+1;
       
      
       
      
    

    // landingEvent();
      


  };

  function delay(ms) {
    
    return new Promise( resolve=>{

      setTimeout(()=>{resolve,ms});
    
    });
    
      
  }





  const landingEvent =()=>{
    
    player.global_direction=1;
    player.targetPosition=player.position;
  };

  const flyoverEvent =()=>{

    // if(player.position>positionConfig.terminatingCellPos)
    // {
    //   player.global_direction=-1;
    // }
    // else if(player.position==positionConfig.initCellPos && player.global_direction==-1 )
    // {
    //   player.global_direction=0;
    // }

    if((player.position+1) > 72 )
    {
      player.global_direction=-1;
    }

  };

  const waitForPlayerActionEvent=()=>{

  };



  const movePawnNextCell=()=>{
    

    Animated.sequence([
    Animated.timing(position,{
      toValue:{x:playerPositions[player.position].x,y:playerPositions[player.position].y},
      useNativeDriver: true
    })]).start(()=>{

      if(dice.iDiceCurrentRoll>0)
      {
        flyoverEvent();
        player.position= player.position+(1*player.global_direction);
        dice.iDiceCurrentRoll--;
        movePawnNextCell();
      }
      else
      {
        landingEvent();
      }

    });

    

  };

  const movePawnToCell=()=>{
    

    
    Animated.timing(position,{
      toValue:{x:playerPositions[player.targetPosition].x,y:playerPositions[player.targetPosition].y},
      useNativeDriver: true
    }).start(()=>{
      player.position=player.targetPosition;
    });

    

    

  };
  
  return (
    <View style={styles.container} >
      
    <View style={styles.gameContainer}>

      <Image source={require('../assets/game/board.jpg')} style={{width:380,height:380,alignSelf:'center'}} />
      
      <Animated.View 
      style={{alignContent:'center',
      justifyContent:'center',
      width:40,
      height:40,
      bottom:46,
      left:28,
      transform:[{
        translateX:position.x
      },{translateY:position.y}]
      }} >
        <Image source={require('../assets/game/token4.png')} style={{width:40,height:40}}  />
      </Animated.View>
    </View> 
    <Button
        title="Press me"
        onPress={() => DiceRoll()}
      />
        
   </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignContent:'center',
    justifyContent:'center'
    
  },
  gameContainer:{
    flex:1,
    alignContent:'center',
    justifyContent:'center',
    width:"100%",
    height:"90%"
  },

});

export default Game;