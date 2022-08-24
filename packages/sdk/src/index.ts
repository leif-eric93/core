import * as Common from "./common";
import * as CryptoPunks from "./cryptopunks";
import * as Element from "./element";
import * as Foundation from "./foundation";
import * as LooksRare from "./looks-rare";
import * as OpenDao from "./opendao";
import * as Quixotic from "./quixotic";
import * as Rarible from "./rarible";
import * as Seaport from "./seaport";
import * as SuperRare from "./superrare";
import * as WyvernV2 from "./wyvern-v2";
import * as WyvernV23 from "./wyvern-v2.3";
import * as X2Y2 from "./x2y2";
import * as ZeroExV4 from "./zeroex-v4";
import * as Zora from "./zora";

import * as Router from "./router";

/*
Allows us to overwrite necessary config-props for not-yet supported networks or local setups.
The current scope targets on-chain setup of a single reservoir router and seaport.
*/
const addToConfig = ({chainId, wrappedNative, usdc, router, seaportExchange, seaportConduitController}:{chainId: number,wrappedNative:string, usdc:string, router:string, seaportExchange: string, seaportConduitController: string} ) : void => {
  Common.Addresses.addToConfig({chainId, wrappedNative, usdc, router});
  Seaport.Addresses.addToConfig({chainId,seaportExchange,seaportConduitController});
}

export {
  Common,
  CryptoPunks,
  Element,
  Foundation,
  LooksRare,
  OpenDao,
  Quixotic,
  Rarible,
  Seaport,
  SuperRare,
  WyvernV2,
  WyvernV23,
  X2Y2,
  ZeroExV4,
  Zora,
  Router,
  addToConfig
};
