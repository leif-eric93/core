import { ChainIdToAddress, Network } from "../utils";

export const Exchange: ChainIdToAddress = {
  [Network.Ethereum]: "0x00000000006c3852cbef3e08e8df289169ede581",
  [Network.EthereumRinkeby]: "0x00000000006c3852cbef3e08e8df289169ede581",
  [Network.EthereumGoerli]: "0x00000000006c3852cbef3e08e8df289169ede581",
  [Network.Optimism]: "0x00000000006c3852cbef3e08e8df289169ede581",
  [Network.EthereumKovan]: "0x00000000006c3852cbef3e08e8df289169ede581",
  [Network.OptimismKovan]: "0x00000000006c3852cbef3e08e8df289169ede581",
  [Network.Gnosis]: "0x00000000006c3852cbef3e08e8df289169ede581",
  [Network.Polygon]: "0x00000000006c3852cbef3e08e8df289169ede581",
  [Network.Arbitrum]: "0x00000000006c3852cbef3e08e8df289169ede581",
  [Network.AvalancheFuji]: "0x00000000006c3852cbef3e08e8df289169ede581",
  [Network.Avalanche]: "0x00000000006c3852cbef3e08e8df289169ede581",
  [Network.PolygonMumbai]: "0x00000000006c3852cbef3e08e8df289169ede581",
};

export const ConduitController: ChainIdToAddress = {
  [Network.Ethereum]: "0x00000000f9490004c11cef243f5400493c00ad63",
  [Network.EthereumRinkeby]: "0x00000000f9490004c11cef243f5400493c00ad63",
  [Network.EthereumGoerli]: "0x00000000f9490004c11cef243f5400493c00ad63",
  [Network.Optimism]: "0x00000000f9490004c11cef243f5400493c00ad63",
  [Network.EthereumKovan]: "0x00000000f9490004c11cef243f5400493c00ad63",
  [Network.OptimismKovan]: "0x00000000f9490004c11cef243f5400493c00ad63",
  [Network.Gnosis]: "0x00000000f9490004c11cef243f5400493c00ad63",
  [Network.Polygon]: "0x00000000f9490004c11cef243f5400493c00ad63",
  [Network.Arbitrum]: "0x00000000f9490004c11cef243f5400493c00ad63",
  [Network.AvalancheFuji]: "0x00000000f9490004c11cef243f5400493c00ad63",
  [Network.Avalanche]: "0x00000000f9490004c11cef243f5400493c00ad63",
  [Network.PolygonMumbai]: "0x00000000f9490004c11cef243f5400493c00ad63",
};

export const PausableZone: ChainIdToAddress = {
  [Network.Ethereum]: "0x004c00500000ad104d7dbd00e3ae0a5c00560c00",
  [Network.EthereumRinkeby]: "0x00000000e88fe2628ebc5da81d2b3cead633e89e",
};

export const addToConfig = ({chainId, seaportExchange, seaportConduitController}:{chainId: number, seaportExchange: string, seaportConduitController: string} ) : void => {
  Exchange[chainId] = seaportExchange;
  ConduitController[chainId] = seaportConduitController;
}