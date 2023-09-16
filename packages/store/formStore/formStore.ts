// formStore.ts
import create from 'zustand';

interface IformData {
  name: string;
  email: string;
}

interface IformStore {
  formData: IformData | null;
  setFormData: (data: IformData) => void;
  clearFormData: () => void;
}

export const useFormStore = create<IformStore>((set) => ({
  formData: null,

  setFormData: (data) => {
    set({ formData: data });
  },

  clearFormData: () => {
    set({ formData: null });
  },
}));
