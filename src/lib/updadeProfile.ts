import { api } from '@/lib/axios'

interface UpdadeProfileBody {
  name: string
  description: string | null
}
export async function updateProfile({ name, description }: UpdadeProfileBody) {
  await api.put('/profile', { name, description })
}
