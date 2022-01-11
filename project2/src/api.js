const API_END_POINT = 'https://free-quotes-api.herokuapp.com';

export const request = async () => {
  try {
    const res = await fetch(`${API_END_POINT}`);

    if (!res.ok) {
      throw new Error('API Call Failed');
    }

    return await res.json();
  } catch (e) {
    alert(e.message);
  }
};
