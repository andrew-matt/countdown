export const subscribe = async (inputValue: string): Promise<Response | string> => {
  try {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: inputValue }),
    };

    const response = await fetch(
      'https://smtp-nodejs-server-mail-production.up.railway.app/subscribe',
      requestOptions,
    );

    if (response.ok) {
      return response;
    }

    return `Oops, something went wrong! Got status: ${response.status}`;
  } catch (error) {
    const err = error as Error;

    throw new Error(err.message);
  }
};
