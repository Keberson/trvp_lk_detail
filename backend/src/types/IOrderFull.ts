import IOrderRaw from "./IOrderRaw.js";
import IOrderRowFull from "./IOrderRowFull.js";

interface IOrderFull extends IOrderRaw {
    id: string,
    rows: IOrderRowFull[]
}

export default IOrderFull;
