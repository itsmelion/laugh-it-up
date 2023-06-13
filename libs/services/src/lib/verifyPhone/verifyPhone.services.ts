const HOST = 'https://0ct5ps.sse.codesandbox.io';
const VERSION = 'v1'

type ResponseDTO = {
  success: boolean;
  user_id: string;
  product_url: string;
}

type PayloadDTO = {
  /* 4 digits */
  pin: string;
  // UUID
  user_id: string;
  // string: 2 letters code
  country: string;
}

export async function verifyPhone(payload: PayloadDTO) {
  const response = await fetch(`${HOST}/${VERSION}/trigger-pin`, {
    body: JSON.stringify(payload),
    method: 'POST',
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(response => {
      if (!response.ok) throw new Error('Error. Maybe wrong pin?');
      return response.json() as Promise<ResponseDTO>
    });

  return response;
}
