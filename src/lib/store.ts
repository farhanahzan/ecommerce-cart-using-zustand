import {create} from 'zustand'
import { createProductSlice, ProductSlice } from './slices/CreateProductSlice'
import { createCartSlice, CartSlice } from './slices/CreateCartSlice'
import { persist } from 'zustand/middleware'

type StoreState = ProductSlice & CartSlice

export const useAppStore = create<StoreState>()(
    persist(( (...a) => ({
    ...createProductSlice(...a),
    ...createCartSlice(...a),
  })),
  { name: 'appStore', version: 1, getStorage: () => localStorage }
))