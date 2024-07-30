export type Restaurant = {
    name: string;
    category: string;
    address: Address;
    menu: Menu[];
};

export type Address = {
    city: string;
    detail: string;
    zipCode: number;
};

export type Menu = {
    name: string;
    price: number;
    category: string;
};

// export type Menu = {
//     name?: string;  ? 있을 수도 있고 없을 수도 있고 **주의**
//     price?: number;
//     category?: string;
// };

export type AddressWithoutZip = Omit<Address, "zipCode">; // 빼주세요
export type RestaurantOnlyCategory = Pick<Restaurant, "category">; // 픽해주세요

// api 를 받을 때

// export type ApiResponse<T>{ //언제 무슨 데이터가 들어올지 모를 때 제너릭 <>쓰면 좋음
//     data: T[],
//     totalPage: number,
//     page: number
// }
// export type RestaurantResponse = ApiResponse<Restaurant>
