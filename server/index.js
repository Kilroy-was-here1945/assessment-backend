const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!","Cool shirt!","Your Javascript skills are stellar.",];res.status(200).send(complements[Math.floor(Math.random()*complements.length)]);});

app.get("/api/insults", (res) => {
  const insultList = ['Youre so cool, youre like a dude in a girls body.','You look good for your age.','I love how you just dont care what you look like.','You look nothing like your pictures.','I always feel more intelligent after reading your code.','Your new haircut makes your nose look smaller.','That’s a beautiful photo of you. I didnt even recognise you','You’re really funny… in your own way.','You’re not as dumb as you look.'];res.status(200).send(insultList[Math.floor(Math.random()*insultList.length)]);}
);

app.get("/api/8ball", (res) => {
  let responce = ['It is certain.','It is decidedly so.','Without a doubt.','Yes definitely.','You may rely on it.','As I see it, yes.','Most likely.','Outlook good.','Yes.','Signs point to yes.','Reply hazy, try again.','Ask again later.','Better not tell you now.','Cannot predict now.','Concentrate and ask again.','Dont count on it.', 'My reply is no.','My sources say no.',' Outlook not so good','Very doubtful.'
];res.status(200).send(responce[Math.floor(Math.random()*responce.length)]);});

app.post("/api/weird", (res) => {
  let weird = ['Theres a company that turns dead bodies into an ocean reef.',
  'The name "bonobo" resulted from a misspelling.',
  'There is an annual Coffee Break Festival.',
  'You can buy a flying bicycle.',
  'Dolphins sleep with one eye open.',
  'Vacuum cleaners were originally horse-drawn.',
 ' 1. Humans have been performing dentistry since 7000BC, which makes dentists one of the oldest professions.',

'2. The first-ever documented feature film was made in Australia in 1906.',

'3. Ancient Roman surgeons were trained to block out the screams of human pain.',

'4. From 1953 to 1957, NBCs Today Show had a chimpanzee co-host named J. Fred Muggs. It is estimated he brought in the network around $100 million.',

'5. Apples, peaches, and raspberries are all members of the rose family.',

'6. There is a geocache on the International Space Station placed in 2008. It has since been visited four times by other astronauts.',

'7. Canada eats more macaroni and cheese than any other nation in the world.',

'8. Scotland wanted to replicate the Parthenon bigger and cheaper in 1826. It was never completed and is now nicknamed “Scotlands Disgrace”.',

'9. A French general gave John Quincy Adams a pet alligator. Adams kept it in one of the White House bathtubs and enjoyed showing it off.',

'10. Snakes can help predict earthquakes. They can sense a coming earthquake from 75 miles away, up to five days before it happens.',

'11. The hand and footprints in front of Los Angeless Chinese Theater tradition started accidentally when silent film actress, Norma Talmadge stepped on wet cement.',

'12. An animals yawn based on how large their brain is. The bigger the brain, the longer they will yawn.',

'13. In Switzerland, it is illegal to own just one guinea pig. This is because guinea pigs are social animals, and they are considered victims of abuse if they are alone',

'14. There are more Lego mini-figures than there are people on Earth.',

'15. Dinosaurs would swallow large rocks which stayed in their stomach to help churn and digest food.',


'16. Surgeons who play video games at least 3 hours a week perform 27% faster and make 37% fewer errors.',

'17. When cellophane was invented in 1908, it was originally intended to be used to protect tablecloths from wine spills.',

'18. The mayor of a historical district in Alaska is a cat named Stubbs.',

'19. In the 1980s, Fredric Baur, the founder of Pringles, requested to be buried in a Pringles can. His children honored the request.',

'20. You can now get a headstone with a QR code. Called “Living Headstones”, they show pages with photos, video biographies, and comments from loved ones.',



'21. The NYPD had a police officer follow Andre the Giant whenever he went out drinking. This was to make sure he didn’t get drunk and fall on anyone.',

'22. A strawberry is not an actual berry, but a banana is.',

'23. Hershey’s chocolate syrup, Ritz Crackers, DumDums, and Oreos are all vegan.',

'24. The sound of a Star Wars lightsaber was created by pairing together the sound of an idle film projector and the buzz from an old TV set.',

'25 .Your tonsils can grow back if there was tissue left behind during the removal process.',

'26. In Israel, it is illegal to bring bears to the beach.',

'27. There is an uninhabited island in the Bahamas known as Pig Beach, which is populated entirely by swimming pigs.',

'28. Without saliva, humans are unable to taste food.',

'29. It snowed in the Sahara desert for 30 minutes on February 18, 1979.',

'30. In every scene of Fight Club, there is a Starbucks coffee cup.',

'31. In Switzerland, it is illegal to flush the toilet after 10pm.',

'32. William Shakespeare had a curse engraved on his tombstone to prevent anyone from moving his bones.',

'33. On Valentine’s Day in South Korea, only women give gifts, not men.',

'34. Cookie Monster’s real name is Sid.',

'35. March 3 is known as “What if Cats and Dogs Had Opposable Thumbs Day”.',

'36. The largest living thing on earth is a giant sequoia named General Sherman.',

'37. Elvis was originally blonde. He started dying his hair black for an edgier look. Sometimes, he would touch it up himself using shoe polish.',

'38. Astronauts actually get taller when in space.',

'39. In California, you can get a ticket if you’re driving too slow.',

'40. Snoop Dogg’s real name is Cordozar Calvin Broadus Jr. His nickname came from his mother who thought he looked like Snoopy from the Peanuts.',

'41. Originally, the Eiffel Tower was going to be erected in Barcelona, but the project was rejected because citizens thought it was an eyesore.',

'42. Kangaroos keep growing until they die.',

'43. A snail can sleep for 3 years.',

'44. Females are better at distinguishing colors, while males excel at tracking fast-moving objects and discerning detail from a distance.',

'45. The fear of vegetables is called Lachanophobia.',

'46. Lettuce is a member of the sunflower family.',

'47. Using a hands-free device to talk on the phone while driving is shown to be equally or more dangerous than driving drunk.',

'48. A group of horses will not go to sleep at the same time – at least one of them will stay awake to look out for the others.',

'49. In Utah, birds have the right of way on a highway.',

'50. Jellyfish are considered biologically immortal. They don’t age and will never die unless they are killed.',

'51. There is an island called “Just Enough Room”, where there’s just enough room for a tree and a house.',

'52. The collective name for a group of unicorns is called a blessing.',

'53. Mob boss, Vincent Gigante, used to wander around New York in his bathrobe to convince the police he was insane and avoid capture.',

'54. There is a town in India called Santa Claus.',

'55. You’re not allowed to swear if playing in Wimbledon. Because of this, line judges have to learn curse words in every language.',

'56. Some people in Russia think that eating ice cream will keep you warm.',

'57. Originating in Berlin in 2008, aggressive sitting became a sport. You can purchase a special stool for this sport for around 70 dollars.',

'58. Cucumber can actually cure bad breath.',

'59. There are more than 70 species of mushrooms that glow in the dark.',

'60. Canadian law requires citizens to answer a math question when entering sweepstakes.',

'61. Neptune was the first planet to be found through mathematical predictions rather than telescopic location.',

'62. Crows can remember the faces of individual humans. They can also hold a grudge.',

'63. In America, it is a federal crime to use your roommate or friend’s Netflix account.',

'64. A fungus is more closely related to animals on a genetic level than they are to plants.',

'65. In Zimbabwe, it is illegal for citizens to make offensive gestures at a passing car.',



'66. “She sells seashells by the seashore” was written about a female paleontologist from the 1800s. She actually sold dinosaur bones and fossilized shells.',

'67. Jousting is the official sport in the state of Maryland.',

'68. Another term for your nieces or nephews would be “niblings”.',

'69. The “butterflies” you get in your stomach when you see someone you like is actually a stress response called adrenaline.',

'70. Pure cocoa can help prevent tooth decay',
];res.status(200).send(weird[Math.floor(Math.random()*weird.length)]);});

app.put("/api/fortune", (res) => {
  let fortune = ['A beautiful, smart, and loving person will be coming into your life.',
    'A dubious friend may be an enemy in camouflage.',
    'A faithful friend is a strong defense.',
    'A feather in the hand is better than a bird in the air. (2)',
    'A fresh start will put you on your way.',
    'A friend asks only for your time not your money.',
    'A friend is a present you give yourself.',
    'A gambler not only will lose what he has, but also will lose what he doesn’t have.',
    'A golden egg of opportunity falls into your lap this month.',
    'A good friendship is often more important than a passionate romance.',
    'A good time to finish up old tasks. (2)',
    'A hunch is creativity trying to tell you something.',
    'A lifetime friend shall soon be made.',
    'A lifetime of happiness lies ahead of you.',
    'A light heart carries you through all the hard times.',
    'A new perspective will come with the new year. (2)',
    'A person is never to (sic) old to learn. (2)',
    'A person of words and not deeds is like a garden full of weeds.',
    'A pleasant surprise is waiting for you.',
    'A short pencil is usually better than a long memory any day.',
    'A small donation is call for. It’s the right thing to do.',
    'A smile is your personal welcome mat.',
    'A smooth long journey! Great expectations.',
    'A soft voice may be awfully persuasive.',
    'A truly rich life contains love and art in abundance.',
    'Accept something that you cannot change, and you will feel better.',
    'Adventure can be real happiness.',
    'Advice is like kissing. It costs nothing and is a pleasant thing to do. (2)',
    'Advice, when most needed, is least heeded.',
    'All the effort you are making will ultimately pay off.',
    'All the troubles you have will pass away very quickly.',
    'All will go well with your new project.',
    'All your hard work will soon pay off.',
    'Allow compassion to guide your decisions.',
    'An acquaintance of the past will affect you in the near future.',
    'An agreeable romance might begin to take on the appearance.',
    'An important person will offer you support.',
    'An inch of time is an inch of gold.',
    'Any day above ground is a good day.',
    'Any decision you have to make tomorrow is a good decision.',
    'At the touch of love, everyone becomes a poet.',
    'Be careful or you could fall for some tricks today.',
    'Beauty in its various forms appeals to you. (2)',
    'Because you demand more from yourself, others respect you deeply.',
    'Believe in yourself and others will too.',
    'Believe it can be done.',
    'Better ask twice than lose yourself once.',
    'Bide your time, for success is near.',
    'Carve your name on your heart and not on marble.',
    'Chance favors those in motion.',
    'Change is happening in your life, so go with the flow!',
    'Competence like yours is underrated.,',
  ];
  delete fortune
  res.status(200).send(fortune[Math.floor(Math.random()*fortune.length)]);});

app.listen(4000, () => console.log("Server running on 4000"));
