var iFileName = "The Raven Queen Revised by OdinTGE";
AddSubClass("warlock", "the raven queen", {
	regExpSearch : /^(?=.*\braven)(?=.*queen\b).*$/i,
	subname : "the Raven Queen",
	source : ["HB", 1],
	spellcastingExtra : ["false life", "sanctuary", "silence", "gentle repose", "feign death", "speak with dead", "ice storm", "locate creature", "commune", "cone of cold"],
	features : {
		"subclassfeature1.1" : {
			name : "Bonus Cantrip",
			source: ["HB", 1],
			minlevel : 1,
			description : "\n   " + "I know the Spare the Dying cantrip.",
			spellcastingBonus : {
				name : "Bonus Cantrip (Spare the Dying)",
				spells : ["spare the dying"],
				selection : ["spare the dying"]
			}
		},
		"subclassfeature1" : {
			name : "Sentinel Raven",
			source : ["HB", 1],
			minlevel : 1,
			description : desc([
				"I gain the services of a spirit in the form of a raven (using the stats of a raven)",
				"It always obeys my commands, rolls its own initiative, and can be slain",
				"While it's within 100 ft, I can telepathically speak with it and see/hear what it does",
				"While it's on my shoulder, I gain Darkvision 30 ft and add my Cha mod to Perception",
				"While it's on my shoulder, it can't be targeted, take damage, or take actions",
				"It vanishes if it is more than 5 miles away from me, it dies, or if I die",
				"If it dies, I gain advantage on all attack rolls against its killer for 24 hours",
				"It doesn't need to sleep, and while within 100 ft, can awaken me as a bonus action",
				"After a short rest, I can recall it to me regardless of its location or if it died"
			]),
			vision : [["Darkvision", 30]],
			addMod : { type : "skill", field : "Perc", mod : "Cha", text : "While my sentinel raven on my shoulder, I can add my Charisma modifier to Perception." }
		},
		"subclassfeature6" : {
			name : "Soul of the Raven",
			source : ["HB", 1],
			minlevel : 6,
			description : desc([
				"As a bonus action, when my raven is perched on my shoulder, I can merge our bodies",
				"I become tiny and replace my speed with the raven's (10 ft, fly 50 ft)",
				"I can then use my action only to Dash, Disengage, Dodge, Help, Hide, or Search",
				"While merged, I still get all the benefits of my raven being perched on my shoulder",
				"I can end this as an action, and it ends I take damage, returning us both to normal",
				"I can't use this ability for 1 minute if it ends due to damage"
			]),
			action : ["bonus action", " (start)"],
			eval : "AddAction('action', 'Soul of the Raven (end)', 'Warlock (the Raven Queen)')",
			removeeval : "RemoveAction('action', 'Soul of the Raven (end)')"
		},
		"subclassfeature10" : {
			name : "Raven's Shield",
			source : ["HB", 1],
			minlevel : 10,
			description : "\n   " + "I can't be frightened, have advantage on death saves, and resistance to necrotic damage",
			savetxt : { immune : ["frightened"], adv_vs : ["death"] },
			dmgres : ["Necrotic"]
		},
		"subclassfeature14" : {
			name : "Audience with the Queen",
			source : ["HB", 1],
			minlevel : 14,
			description : desc([
				"I can grant audiences with the Raven Queen once per long rest",
				"As an action, I can choose a creature I can see within 60 ft and instantly transport them in front of the Raven Queen's throne",
				"At the end of my next turn, it returns to the same space or the closest unoccupied one",
				"It is frightened of me and suffers more depending on its current hit points",
				" - 100 or fewer: blinded",
				" - 80 or fewer: blinded and deafened",
				" - 60 or fewer: blinded, deafened, and stunned",
				" - 40 or fewer: killed instantly and cannot become undead",
				"They can make a Wisdom save to end the effect at the end of each turn, and undead have disadvantage"
			]),
			usages : 1,
			recovery : "long rest",
			},
		}
	}
);