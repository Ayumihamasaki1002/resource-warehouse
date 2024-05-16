import { create } from 'zustand';

interface WarehouseState {
  Warehouses: [
    {
      WarehousesName: string;
      WarehouseOwner: string;
    },
  ];
  updateWarehouses: (
    params: [
      {
        WarehousesName: string;
        WarehouseOwner: string;
      },
    ],
  ) => void;
}

// 创建状态存储
const useWarehouseStore = create<WarehouseState>((set) => ({
  Warehouses: [
    {
      WarehousesName: 'warehouse',
      WarehouseOwner: '123',
    },
  ],
  //更新仓库数组
  updateWarehouses: (Warehouses) => set({ Warehouses }), //合并Warehouses
}));

export default useWarehouseStore;
