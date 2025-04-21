import { api } from "@/lib/axios";

export interface DispathOrderQuery {
  orderId: string
}

export async function dispatchOrder({ orderId }: DispathOrderQuery) { 
  await api.patch(`/orders/${orderId}/dispatch`)
}