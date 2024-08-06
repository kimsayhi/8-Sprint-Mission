const BASE_URL = import.meta.env.VITE_API_URL

interface GetItemCommentsParams {
  id: string
  limit?: number
}

export const getItemComments = async ({
  id,
  limit = 3,
}: GetItemCommentsParams) => {
  try {
    const responseComments = await fetch(
      `${BASE_URL}/products/${id}/comments?limit=${limit}`
    )
    const itemComments = await responseComments.json()
    return itemComments
  } catch (err) {
    console.log('패치에러', err)
  }
}
