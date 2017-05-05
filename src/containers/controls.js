import React from 'react';
import { injectState } from 'freactal';
import { Block, MatchSelector, TeamSelector, FooterBlock } from 'components';

export const Controls = injectState(({ state, effects }) => (
  <Block
    mv={{ all: 4, l: 0 }}
    w={{ all: 100, l: 5 }}
    ph={{ all: 3, ns: 0 }}
  >
    <MatchSelector>
      <TeamSelector
        name="away"
        symbol="🛫‍‍"
        onSelectFormation={effects.pickAwayFormation}
        onSelectColour={effects.pickAwayColour}
        team={state.away}
        mb={4}
      />
      <TeamSelector
        name="home"
        symbol="🏠"
        onSelectFormation={effects.pickHomeFormation}
        onSelectColour={effects.pickHomeColour}
        team={state.home}
      />
    </MatchSelector>
    <FooterBlock pa={3} />
  </Block>
));