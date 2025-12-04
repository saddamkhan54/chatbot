export const Message = async (req, res) => {
  try {
    const { text } = req.body;

    if (!text?.trim()) {
      return res.status(400).json({ error: "Text cannot be empty" });
    }

    const botResponses = {
      "hello": "Hello! I’m your Blood Donation Assistant. How can I help you today?",
      "hi": "Hi! Ask me anything about blood donation.",
      "bye": "Goodbye! Stay healthy and keep saving lives.",
      "thank you": "You're welcome!",
      "who are you": "I am a Blood Donation FAQ Chatbot.",
      "what is your name": "I’m the BloodCare Assistant — your donation guide.",
      "can we become friend": "Yes",
      "how are you": "I am fine, what about you?",

      "eligibility": "Eligibility:\n• Age 18–60\n• Weight 50kg+\n• Hemoglobin 12.5+",

      "minimum age to donate": "Minimum age is 18.",
      "weight for blood donation": "Minimum weight is 50kg.",

      "how often can i donate": "Every 3 months.",
      "donation gap": "3 months gap required.",

      "universal": "Universal Donor: O−\nUniversal Receiver: AB+",
"what is your name": "I’m the BloodCare Assistant — your donation guide.",
  "who build you": "I am build by Mr.Saddam khan.",
    "How are you": "I am a fine what's about you",
        "how are you": "I am a fine what's about you",
        "fine":"great",
        "i am fine":"great",

  "can we become friend": "Yes",
    "what is your name?": "I’m ChatBot, your virtual assistant.",
      "what is the time": "I can’t see a clock, but your device should know.",
  "i love you": "That’s sweet! I’m here to help you anytime.",
"where are you": "I live in the cloud — no rent, no bills!",
"what is blood":"Blood is a vital fluid connective tissue that circulates oxygen, nutrients, and hormones throughout the body while also carrying waste products away.",
"blood":"Blood is a vital fluid connective tissue that circulates oxygen, nutrients, and hormones throughout the body while also carrying waste products away.",


  // Eligibility
  "eligibility": "Eligibility Requirements:\n• Age: 18–60 years\n• Weight: Minimum 50 kg\n• Hemoglobin: 12.5 g/dL or above\n• No fever, flu, or infection\n• Not taking antibiotics currently\n• Blood pressure normal",
  
  "minimum age to donate": "The minimum age to donate blood is 18 years.",
  "age for donation": "Eligible age range: 18–60 years.",
  "weight for blood donation": "Minimum required weight is 50 kg.",
  "can i donate blood": "You can donate if you're 18–60 years old, 50kg+, healthy and not sick.",
  
  // Donation rules
  "how often can i donate": "You can donate whole blood every 3 months.",
  "donation gap": "There must be a gap of **3 months** between whole blood donations.",
  "can i donate if i have cold": "No. You should not donate if you have a cold, fever, or infection.",
  "can pregnant women donate": "No, pregnant or breastfeeding women cannot donate blood.",
  
  // Blood groups & matching [' ]
  "what is my blood group": "Blood group is determined by A, B, AB, O and Rh factor (+/-).",
  
  "universal": "Universal Donor: O−\nUniversal Receiver: AB+\n",
  "who can donate to whom": 
  "Here is the blood donation compatibility:\n\n" +

  "Universal Donor: O− (can donate to all blood groups)\n" +
  "Universal Receiver: AB+ (can receive from all blood groups)\n\n" +

  "Donation Compatibility:\n" +
  "O− → All blood groups\n" +
  "O+ → O+, A+, B+, AB+\n" +
  "A− → A−, A+, AB−, AB+\n" +
  "A+ → A+, AB+\n" +
  "B− → B−, B+, AB−, AB+\n" +
  "B+ → B+, AB+\n" +
  "AB− → AB−, AB+\n" +
  "AB+ → AB+ only (but can receive from all)\n",


  "o+": "O+ can donate to: O+, A+, B+, AB+\nCan receive from: O+, O−",
  "o-": "O− can donate to all blood groups.\nCan receive only from O−.",
  "a+": "A+ can donate to: A+, AB+\nCan receive from: A+, A−, O+, O−",
  "a-": "A− can donate to: A+, A−, AB+, AB−\nCan receive from: A−, O−",
  "b+": "B+ can donate to: B+, AB+\nCan receive from: B+, B−, O+, O−",
  "b-": "B− can donate to: B+, B−, AB+, AB−\nCan receive from: B−, O−",
  "ab+": "AB+ is Universal Receiver.\nCan donate to: AB+ only.",
  "ab-": "AB− can donate to: AB+, AB−\nCan receive from: AB−, O−, A−, B−",

  // Donor advice
  "how to prepare for donation": "Before donation:\n• Eat a healthy meal\n• Drink plenty of water\n• Avoid oily foods\n• Sleep well\n• Carry ID proof",
  
  "what happens after donation": "After donation:\n• You get a refreshment\n• Rest for 10–15 minutes\n• Avoid heavy exercise for the day\n• Drink lots of water",

  // Medical & safety
  "is blood donation safe": "Yes! Blood donation is completely safe. All equipment is sterile and used only once.",
  "can diabetic donate": "Yes, diabetics can donate if sugar is under control and no insulin is taken.",
  "can heart patients donate": "People with major heart conditions should not donate blood.",
  
  // Fun messages
  "tell me a joke": "Here’s a blood donation joke: Why did the blood donor always stay calm? Because he knew how to keep his pressure low!",
  "i am scared": "No worries! Donation is safe, painless, and takes only 10 minutes.",
  
  // Unknown input
  "default": "Sorry, I couldn't understand. Try asking:\n• 'Minimum age to donate'\n• 'Can A+ donate to B+'\n• 'Eligibility for donation'"



    };

    const normalized = text.toLowerCase().trim();
    const botMessage = botResponses[normalized] || botResponses["default"];

    return res.status(200).json({
      userMessage: text,
      botMessage,
    });

  } catch (error) {
    console.log("Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
