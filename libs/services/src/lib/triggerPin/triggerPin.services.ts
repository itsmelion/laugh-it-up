import { useAsyncCallback } from 'react-async-hook';

const HOST = 'https://0ct5ps.sse.codesandbox.io';
const VERSION = 'v1'

type ResponseDTO = {
  success: boolean;
  User_id: string;
  pin:string;
  msisdn: string;
  product_url: string;
}

type PayloadDTO = {
  /* valid phone number */
  msisdn: string;
  // UUID
  user_id: string;
  // string: 2 letters code
  country: string;
}

export async function triggerPin(payload: PayloadDTO) {
  const response = await fetch(`${HOST}/${VERSION}/trigger-pin`, {
    body: JSON.stringify(payload),
    method: 'POST',
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then(response => {
      if (!response.ok) throw new Error('Error. Maybe wrong phone input?');
      return response.json() as Promise<ResponseDTO>;
    });

  return response;
}

export function useTriggerPin() {
  return useAsyncCallback(triggerPin);
}
