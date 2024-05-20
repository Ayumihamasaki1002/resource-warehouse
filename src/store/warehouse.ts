import { produce } from 'immer';
import { create } from 'zustand';

interface WarehouseInfo {
  warehouseId: string;
  fileId: string;
  flag: number;
  fileName: string;
}

interface WarehouseState {
  warehouseInfo: WarehouseInfo;
  //更新整个对象
  updateWarehouseInfo: (params: WarehouseInfo) => void;
  // 首页内容
  facePage: string;
  // 更新首页内容传递
  updateFacePage: (params: string) => void;
  // 更新单个属性
  updateWarehouseInfoSingle: (params: number) => void;
}

// 创建状态存储
const useWarehouseStore = create<WarehouseState>((set) => ({
  warehouseInfo: {
    warehouseId: '',
    fileId: '',
    flag: 1,
    fileName: '',
  },
  // 更新整个对象
  updateWarehouseInfo: (warehouseInfo) => set({ warehouseInfo }),
  // 更新单个属性
  updateWarehouseInfoSingle: (flag) =>
    set(
      produce((state) => {
        state.warehouseInfo.flag = flag;
      }),
    ),
  //首页内容
  facePage: '',
  // 更新首页内容
  updateFacePage: (facePage) => set({ facePage }),
}));

export default useWarehouseStore;
