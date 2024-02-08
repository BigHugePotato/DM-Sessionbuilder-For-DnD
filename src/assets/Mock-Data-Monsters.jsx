export const monsters = [
  {
    name: "Abyssal Horror",
    ac: 16,
    hp: 135,
    resistances: ["cold", "fire", "acid"],
    reactions: {
      "Infernal Retort":
        "When hit by a melee attack, deals 2d6 fire damage to the attacker.",
    },
    legendaryActions: {
      "Sweeping Tail":
        "Can make a tail attack against any number of creatures within 10 feet.",
    },
    savingThrows: {
      STR: "+5",
      DEX: "+2",
      CON: "+8",
    },
  },
  {
    name: "Goblin Chieftain",
    ac: 15,
    hp: 52,
    resistances: ["bludgeoning", "piercing"],
    savingThrows: {
      STR: "+1",
      DEX: "+3",
    },
  },
  {
    name: "Ethereal Wraith",
    ac: 13,
    hp: 67,
    resistances: ["necrotic", "poison"],
    reactions: {
      "Phase Shift":
        "When targeted by an attack, can become ethereal until the start of its next turn.",
    },
  },
];
