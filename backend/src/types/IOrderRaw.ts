import IOrderRowRaw from "./IOrderRowRaw.js";
import IOrderInfoRaw from "./IOrderInfoRaw.js";

interface IOrderRaw extends IOrderInfoRaw {
    rows: IOrderRowRaw[]
}

export default IOrderRaw;
