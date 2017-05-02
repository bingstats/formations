import React from 'react';
import createFragment from 'react-addons-create-fragment';
import { Player } from 'components';
import { withHomeAway } from 'enhancers';

export const f433 = withHomeAway(({
  near, far, dir, left, right, center, middle,
}) =>
  createFragment({
    gk: <Player
      w={2} h={2}
      color="gold"
      col={`${dir*3} / ${dir*4}`}
      row={`${dir*1} / ${dir*2}`}
      className={`${center} ${far}`}
    />,
    lb: <Player
      w={2} h={2}
      color="gold"
      col={`${dir*1} / ${dir*2}`}
      row={`${dir*3} / ${dir*4}`}
      className={`${center} ${near}`}
    />,
    cb1: <Player
      w={2} h={2}
      color="gold"
      col={`${dir*2} / ${dir*3}`}
      row={`${dir*3} / ${dir*4}`}
      className={`${left} ${near}`}
    />,
    cb2: <Player
      w={2} h={2}
      color="gold"
      col={`${dir*-2} / ${dir*-3}`}
      row={`${dir*3} / ${dir*4}`}
      className={`${right} ${near}`}
    />,
    rb: <Player
      w={2} h={2}
      color="gold"
      col={`${dir*-1} / ${dir*-2}`}
      row={`${dir*3} / ${dir*4}`}
      className={`${center} ${near}`}
    />,
    dm: <Player
      w={2} h={2}
      color="gold"
      col={`${dir*3} / ${dir*4}`}
      row={`${dir*4} / ${dir*5}`}
      className={`${middle} ${center}`}
    />,
    cm2: <Player
      w={2} h={2}
      color="gold"
      col={`${dir*2} / ${dir*3}`}
      row={`${dir*5} / ${dir*6}`}
      className={`${center} ${near}`}
    />,
    cm1: <Player
      w={2} h={2}
      color="gold"
      col={`${dir*-2} / ${dir*-3}`}
      row={`${dir*5} / ${dir*6}`}
      className={`${center} ${near}`}
    />,
    rw: <Player
      w={2} h={2}
      color="gold"
      col={`${dir*1} / ${dir*2}`}
      row={`${dir*7} / ${dir*8}`}
      className={`${left} ${near}`}
    />,
    lw: <Player
      w={2} h={2}
      color="gold"
      col={`${dir*-1} / ${dir*-2}`}
      row={`${dir*7} / ${dir*8}`}
      className={`${right} ${near}`}
    />,
    rs: <Player
      w={2} h={2}
      color="gold"
      col={`${dir*3} / ${dir*4}`}
      row={`${dir*7} / ${dir*8}`}
      className={`${middle} ${center}`}
    />,
  }));
