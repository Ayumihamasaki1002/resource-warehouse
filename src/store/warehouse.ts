import { create } from 'zustand';

interface WarehouseInfo {
  warehouseId: string;
  fileId: string;
  flag: number;
}

interface WarehouseState {
  warehouseInfo: WarehouseInfo;
  updateWarehouseInfo: (params: WarehouseInfo) => void;
}

// 创建状态存储
const useWarehouseStore = create<WarehouseState>((set) => ({
  warehouseInfo: {
    warehouseId: '',
    fileId: '',
    flag: 1,
  },
  //更新整个对象
  updateWarehouseInfo: (warehouseInfo) => set({ warehouseInfo }),
}));

export default useWarehouseStore;
