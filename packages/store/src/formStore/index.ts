// formStore.ts
import create from 'zustand'

interface IformData {
  firstName: string
  lastName: string
  age: number
  id: number
  maidenName: string
  gender: string
  email: string
  phone: string
  username: string
  password: string
  birthDate: string
  image: string
  eyeColor: string
}

interface IformStore {
  formData: IformData | null
  setFormData: (data: IformData) => void
  clearFormData: () => void
}

export const useFormStore = create<IformStore>((set) => ({
  formData: null,

  setFormData: (data) => {
    set({ formData: data })
  },

  clearFormData: () => {
    set({ formData: null })
  },
}))
