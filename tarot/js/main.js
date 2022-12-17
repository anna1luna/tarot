const start = document.querySelector('.button')
const screens = document.querySelectorAll('.screen')
let time = 6
const timeEl = document.querySelector('#time')
const caption = document.querySelector('#caption')
const again = document.querySelector('.again')
const card = ['The Fool: New beginnings, taking a leap of faith, new possibilities lie ahead, a new journey is about to begin.',
  'The Magician: Using all of your past experiences to create a new future, alchemizing your reality, taking confident action forward.',
  'The High Priestess: Intuition, gaining insight and power, secrets coming to light, spiritual insight, mystery ahead.',
  'The Empress: Divine Femininity, receiving, creation, pregnancy, nurturing yourself or those around you or being nurtured and cared for, a new opportunity is afoot, abundance.',
  'The Emperor: Divine Masculinity, stability, security, ambition, power, authority figure or stepping into a position of authority yourself, promotion.',
  'The Hierophant: Tradition, marriage, religion, higher education or learning, seeking guidance from wise figures or elders in order to complete a task.',
  'The Lovers: Temptation, commitment, balancing masculine and feminine energy, being at a crossroads and needing to make a clear choice, partnerships (romantic or business).',
  'The Chariot: Moving ahead, positive forward momentum, motivation, letting go of the past in order to step into the future, determination, fame, tapping into confidence and feeling self-assured in your path.',
  'Strength: Triumph over a difficult or long-standing situation, self-sufficiency, overcoming temptation or stagnation, internal mastery.',
  'The Hermit: Solitude, time alone, taking a break from others in order to clearly hear your own inner voice, withdrawal from society, reflection, self-awareness, soul-searching, meditation or retreat.',
  'Wheel of Fortune: Drastic change, destiny, fate, good luck coming your way, things taking a 180-degree turn from what you are currently experiencing (or have experienced in the past), aligning with your higher purpose.',
  'Justice: Fairness, legal matters, contracts being signed, responsibility, karma, law and order, restoring equilibrium to a chaotic situation.',
  'The Hanged Man: Change of perspective, an ultimate test of surrender, breaking old patterns, seeing things from a new perspective, letting go, a waiting period (suspension), the liminal space between stages of life, waiting, sacrifice.',
  'Death: The cycle of life-death-life, phoenix rising from the ashes, increased self-awareness that is brought on by loss or endings, grief, letting go of attachments, rebirth, intense and sudden change.',
  'Temperance: Balance being restored, symbiosis, equal give and take in a situation, Divine intervention that could not have been created through your own action, patience, building a home.',
  'The Devil: Obligation, hedonism, addictions, patterned thoughts and behaviors that need to be controlled, living in a state of fear, feeling trapped, needing to deal with the parts of your subconscious that are ruling your life negatively.',
  'The Tower: Sudden destruction, breaking down old patterns and belief systems that no longer serve a positive purpose, sudden endings, danger, catastrophic events, renovation of your life, ripping everything apart to be able to start over from scratch, leveling the foundation.',
  'The Star: Keeping the faith, holding on to hope, new fertile ground, inspiration, believing in a better future, feeling blessed by the universe, fulfilled dreams.',
  'The Moon: Confusion, everything is not as it seems, deception, illusions, insecurity, being dishonest with oneself, following things blindly.',
  'The Sun: Good fortune, positive outcomes, prosperity, happy outcomes, abundance, success, childlike joy, enlightenment, illumination on a once confusing or mysterious situation, marriage, achievement.',
  'Judgment: Resurrection, facing a situation head on, dealing with karma or past situations, renewal, life-calling, sorting out complex situations.',
  'The World: Completion, end of a cycle, successful conclusions, resting before starting a new chapter, a situation coming full circle, travel, endless possibilities.',
  'Ace of Cups: New beginnings in love, creating a deep romantic connection, creativity, birth, can predict a baby girl.',
  'Two of Cups: Love, soulmates, divine partnership, deep friendship bonds being created, union, perfect harmony, a sense of togetherness.',
  'Three of Cups: Celebration, group endeavors, weddings, third-party situations, co-collaboration, reconciliation of a relationship from the past.',
  'Four of Cups: Boredom, melancholy, lack of excitement, a grass-is-always greener complex, comparison, missing the point, a great awakening.',
  'Five of Cups: grief, sorrow, loss, sadness, emotional pain, a good omen that love is awaiting you in the future (as two cups are still left standing).',
  'Six of Cups: Past life connections, nostalgia, childlike joy, someone returning from your past, memories, reunion, sweetness, kindness, gentleness, ease, simplicity.',
  'Seven of Cups: Illusions, deception, needing to make a choice, discernment is needed for a situation, decision paralysis or indecisiveness, many ideas and inspiration to the point of being overwhelming.',
  'Eight of Cups: Leaving a situation behind, walking away from something emotionally draining, abandonment, escapism, time to make a change, breakups, taking a break.',
  'Nine of Cups: Wish fulfillment, overindulgence, greed, happy partnerships, dreams materializing, satisfaction.',
  'Ten of Cups: Long-term relationships, family building, home, fairytale endings, things ending up better than you could have imagined, achieving your desires.',
  'Page of Cups: Expressing true feelings, affection, sweetness, innocence, tenderness, love letters, romantic messages arriving, good news afoot.',
  'Knight of Cups: A romantic suitor, following your heart, being swept off your feet, receiving an offer or apology, use discernment for potential trickery or sweet-talking.',
  'Queen of Cups: Psychic visionary, an emotional or loving woman, being prone to deep or overwhelming emotions, melancholy, deep and intuitive insights arriving that will help to clear your future.',
  'King of Cups: Clarity, emotional balance, intuition, emotional maturity, devotion, a socially celebrated and accepted man.',
  'Ace of Swords: New contracts being signed, new thoughts or ideas arriving that change the course of your life, connecting and communicating with new people, clarity, truth, inspiration, raw and undeniable power.',
  'Two of Swords: Confusion, being at a crossroads, indecision, stalemate, limited communication, making a difficult or scary decision.',
  'Three of Swords: Heartbreak, breakup, despair, infidelity, pain, rejection, love triangle, poor health.',
  'Four of Swords: Needing to rest before the universe makes you rest, a much-needed break, rest, recuperation, vacation, solitude, temporary peace.',
  'Five of Swords: Cowardliness in conflict, pride, grave loss, defeat, unnecessary arguments, gossip, suspicion, jealousy, there is a snake in your inner circle.',
  'Six of Swords: Moving on to better things or people, healing, moving forward, leaving a tumultuous past behind you, relief, spiritual guidance, travel.',
  'Seven of Swords: Deception, either someone is deceiving you or you are deceiving yourself, lying, manipulation, dishonesty, lies, theft, enemies, spying, cunning behavior is afoot.',
  'Eight of Swords: Victimization, anxiety, being caught in the mind and causing unnecessary suffering, your thoughts are out of control, embarrassment, slander.',
  'Nine of Swords: Sleepless nights, mental anguish, insomnia, despair, anxiety, fear, stressful environment, outside experiences are causing you to question yourself.',
  'Ten of Swords: End of a cycle, betrayal, being back-stabbed, complete ruination of a situation, martyrdom, the worst has now passed.',
  'Page of Swords: Spying, stalking social media or being stalked, gossip, curiosity, rebellion, exams or studying for something, immaturity, needing to grow up.',
  'Knight of Swords: An aggressive figure, rushing to conclusions, coming in as quickly as one leaves, knee-jerk reactions, decisions being made hastily, hasty behavior.',
  'Queen of Swords: A cold figure, someone who has a hard outer shell but is extremely sensitive underneath it all, divorce, logic, righteousness, bitterness, an authoritative figure, cutting straight to the point.',
  'King of Swords: An intelligent figure, seriousness, regal behavior, research being conducted, control over one’s emotions, ability to think rationally in difficult situations, inventive, clear thinking is needed for a situation.',
  'Ace of Wands: A new and passionate beginning, bright future, new business or family, could predict a baby boy being conceived or born, good news.',
  'Two of Wands: Partnership, letting go of the past in order to move ahead with a new decision, collaboration, forward movement, leaving something behind.',
  'Three of Wands: Manifestation, old seeds that were planted in the past coming to fruition, patience, exploring the world, traveling, opportunities arriving, teamwork.',
  'Four of Wands: Marriage, home building, aligning with your path and purpose, connecting with the right people, a sense of belonging, matching the frequency of what you want in life, alignment.',
  'Five of Wands: Competition, argumentative conversations, bickering, disagreements, conflict, others fighting over you or a shared idea, resistance.',
  'Six of Wands: Victory, completion, celebration, being or feeling admired by others, accomplishments, moment of glory, arrogance, success going to your head.',
  'Seven of Wands: Courage, defending your honor, negotiation, defensiveness, miscommunications, high-stakes situations, dedication to a path or project.',
  'Eight of Wands: Travel, communication, quick changes, vitality, letters or emails coming in that change the course of your life.',
  'Nine of Wands: Roadblocks, pressure, delays, persistence is needed for the situation at hand, test of faith, sickness or injuries that put you out of commission.',
  'Ten of Wands: Burdens, fatigue, stress, hard work, achievement, finalizing a hard or tedious project, ending a cycle of taking on too much, putting down obligation or responsibilities.',
  'Page of Wands: Courage, going on a journey, enthusiasm, spiritual teachings or educational opportunities, impulsiveness, thrill, excitement, new ideas.',
  'Knight of Wands: Power, passion, energy, lust, adventure, an upcoming trip, meeting someone who opens your eyes to a new way of living.',
  'Queen of Wands: Ambition, confidence, lust, a strong-willed woman (either stepping into this energy or being met with someone externally who has this presence).',
  'King of Wands: Authority, incoming changes, successful or prosperous future ahead, a man in leadership, becoming a person of importance to others.',
  'Ace of Pentacles: New opportunities with work or money, new income or revenue streams, successful investments, good fortune, inheritance, stable foundation being built, new job or business.',
  'Two of Pentacles: Bringing balance, releasing stress, no longer overworking, transition, ups and downs, you are supported to make a difficult decision.',
  'Three of Pentacles: Building a solid foundation, working with others or collaborating, learning from others, planning, long-term goals.',
  'Four of Pentacles: Greed, closed-off-ness, fear of loss, unwillingness to share success or financial gain.',
  'Five of Pentacles: Feeling left out or rejected, poverty, dark night of the soul, loss, lack of resources, comparison to what others have, someone acting cold.',
  'Six of Pentacles: Balance, paying off debts, shared wealth, combining finances with another for a home or project, giving without the expectation of receiving anything in return, philanthropy, support, unity, community.',
  'Seven of Pentacles: Investments or investing your time/energy into someone or something, planning, patience, the beginning of something that will grow, long-term goals, commitment, stability, building a strong foundation.',
  'Eight of Pentacles: Hard work, apprenticeship, work or employment being a main focus, learn now for your future, discipline, diligence, tediousness or monotony.',
  'Nine of Pentacles: Independence, finding your niche, entrepreneurship, going off on your own path, achievements, prosperity, freedom, wisdom.',
  'Ten of Pentacles: Generational wealth, large sums of money, unexpected financial windfalls, financial security, stability, a happy family life, prosperity.',
  'Page of Pentacles: Good news arriving, the ability to grow, learning new life lessons, a young student, setting goals, loyalty.',
  'Knight of Pentacles: Reliability, stability, patience, slow forward movement in the right direction, a tortoise-and-hare complex, things may seem bleak or behind but they will prosper later on.',
  'Queen of Pentacles: A motherly figure, nurturing, a high-paying job or promotion arriving, financial security, opulence, luxury, spending more time connecting your mind, body, and spirit.',
  'King of Pentacles: A mature and grounded energy, building an empire, being at the top of your career or industry, power, prosperity, discipline, abundance, being in a position to give back to others.'
]
const ynm = ['Yes', 'Yes', 'Ask again', 'Yes', 'Yes',
  'Maybe', 'Yes', 'Yes', 'Yes', 'Maybe',
  'Yes', 'Ask again', 'Maybe', 'No', 'Yes',
  'No', 'No', 'Yes', 'No', 'Yes',
  'Yes', 'Yes', 'Yes', 'Yes', 'Yes',
  'Ask again', 'No', 'Yes', 'No', 'No',
  'Yes', 'Yes', 'Yes', 'Yes', 'Ask again',
  'Ask again', 'Yes', 'Maybe', 'No', 'Yes',
  'No', 'Yes', 'No', 'No', 'No',
  'No', 'Yes', 'No', 'Maybe', 'Maybe',
  'Yes', 'Maybe', 'Yes', 'Yes', 'No',
  'Yes', 'Yes', 'Yes', 'Maybe', 'No',
  'Yes', 'Yes', 'Yes', 'Yes', 'Yes',
  'Ask again', 'Yes', 'Yes', 'No', 'Yes',
  'Ask again', 'Yes', 'Yes', 'Yes', 'Yes',
  'Yes', 'Yes', 'Yes']

const result = document.querySelector('.txt-result')
const number = getRanNum(0, 77)
const pic = document.querySelector('#image')
const desc = document.querySelector('#description')


start.addEventListener('click', (event) => {
  event.preventDefault()
  screens[0].classList.add('up')
  startGame()
  changeCaption()
})

function startGame() {
  setInterval(decreaseTime, 1000)
  setTime(time)
}

function setTime(time) {
  timeEl.innerHTML = `${time}`
}

function decreaseTime() {
  if (time === 0) {
    finishGame()
  } else {
    let current = --time
  if (current < 10) {
    current = `${current}`
      if (current >= 5) {
        caption.innerHTML = `Sending your question`
      } else if (current >= 4) {
          caption.innerHTML = `Making a spread`
      } else if (current >= 2) {
          caption.innerHTML = `Interpreting results`
      } else {
        caption.innerHTML = `Almost done`
        }
  }
    setTime(current)
    
  }
}

function finishGame() {
  screens[1].classList.add('up')
  result.innerHTML = `-- ${ynm[number]} --`
  document.getElementById('image').src = `img/cards/${number}.jpg`
  desc.innerHTML = `${card[number]}`
  
}

function getRanNum(min, max) {
  const ranN = Math.floor(Math.random() * (min, max) + min)
  return ranN
}

again.addEventListener('click', (event) => {
  event.preventDefault()
  window.location.reload()
})

AOS.init();


