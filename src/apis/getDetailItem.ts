const BASE_URL = import.meta.env.VITE_API_URL

export const getDetailItem = async (id: string) => {
  try {
    const responseInfo = await fetch(`${BASE_URL}/products/${id}`)
    const itemInfo = await responseInfo.json()
    return itemInfo
  } catch (err) {
    console.log('패치에러', err)
  }
}
