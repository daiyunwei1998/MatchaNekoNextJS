import React from 'react';
import FFIcon from '../components/FFIcon';

export default function PartyList({ plist }) {
  return (
    <div>
      {plist.map((pMember, index) => (
        <div key={index}>
            <FFIcon type={pMember[0]} />&nbsp;

            {pMember[1] === '抹茶猫' || pMember[1] === 'Matcha Neko' ? (
                <strong style={{color:"#ffaebc"}}>{pMember[1]}</strong>
            ) : (
                pMember[1]
            )}

            <br />
        </div>
    
      ))}
    </div>
  );
}