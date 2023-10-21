import React from 'react';

interface FFIconProps {
  type: string;
}

const FFIcon = ({ type }:{type:string}) => {
  // Define a mapping of "type" values to image URLs
  const imageMap = {
    BTN:'/images/fficon/Botanist.png',
    CRP:'/images/fficon/Carpenter.png',
    CNJ:'/images/fficon/Conjurer.png',
    CUL:'/images/fficon/Culinarian.png',
    DNC :'/images/fficon/Dancer.png',
    DRK:'/images/fficon/DarkKnight.png',
    DPS:'/images/fficon/DPSRole.png',
    DRG:'/images/fficon/Dragoon.png',
    FSH:'/images/fficon/Fisher.png',
    GLA:'/images/fficon/Gladiator.png',
    GSM:'/images/fficon/Goldsmith.png',
    GNB:'/images/fficon/Gunbreaker.png',
    HEALER:'/images/fficon/HealerRole.png',
    LNC:'/images/fficon/Lancer.png',
    LTW:'/images/fficon/Leatherworker.png',
    MCH:'/images/fficon/Machinist.png',
    MRD:'/images/fficon/Marauder.png',
    MIN:'/images/fficon/Miner.png',
    MNK:'/images/fficon/Monk.png',
    NIN:'/images/fficon/Ninja.png',
    PLD:'/images/fficon/Paladin.png',
    PGL:'/images/fficon/Pugilist.png',
    RPR:'/images/fficon/Reaper.png',
    RDM:'/images/fficon/RedMage.png',
    ROG:'/images/fficon/Rogue.png',
    SGE:'/images/fficon/Sage.png',
    SAM:'/images/fficon/Samurai.png',
    SCH:'/images/fficon/Scholar.png',
    SMN:'/images/fficon/Summoner.png',
    TANK:'/images/fficon/TankRole.png',
    THM:'/images/fficon/Thaumaturge.png',
    WAR:'/images/fficon/Warrior.png',
    WVR:'/images/fficon/Weaver.png',
    WHM:'/images/fficon/WhiteMage.png',
    ALC:'/images/fficon/Alchemist.png',
    ACN:'/images/fficon/Arcanist.png',
    ARC:'/images/fficon/Archer.png',
    ARM:'/images/fficon/Armorer.png',
    AST:'/images/fficon/Astrologian.png',
    BRD:'/images/fficon/Bard.png',
    BLM:'/images/fficon/BlackMage.png',
    BSM:'/images/fficon/Blacksmith.png',
    BLU:'/images/fficon/BlueMage.png',
    DD:'/images/fficon/DeepDungeon.png',
    HighEndDuty:'/images/fficon/HighEndDuty.png',
    Sprout:'/images/fficon/Sprout.png',
    Returner:'/images/fficon/Returner.png',
  };

  // Check if the provided "type" exists in the mapping
  if (type in imageMap) {
    const imageUrl = imageMap[type];
    return <img src={imageUrl} alt={type} style={{ height: '1.5em' ,verticalAlign: 'middle'}} />;
  } else {
    return <div>ICON not found for type: {type}</div>;
  }
};

export default FFIcon;