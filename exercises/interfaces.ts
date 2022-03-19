export interface IFooCepAPI {
  getAddressByCEP(cep: string, number: number): Promise<string>;
  getCepByAddress(address: string, number:number): Promise<string>
}

// ./interfaces.ts
export interface IVehicle {
  drive(): void;
  fly(): void;
}