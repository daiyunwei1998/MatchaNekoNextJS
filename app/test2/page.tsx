import React from 'react';
import parse from 'html-react-parser';

export default function Page() {
  return (
    <div>
      {parse("I became <strong style= 'color:#ffaebc'>Matcha Neko @ Typhon</strong>")}
    </div>
  );
}
