const root = "http://localhost:4000/api/";

export const RegisterUser = async (user) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  };

  try {
    const response = await fetch(`${root}auth/register`, options);

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    return error;
  }
};

export const LoginUser = async (credenciales) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credenciales),
  };

  try {
    console.log("hola",credenciales);
    const response = await fetch(`${root}auth/login`, options);

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    return error;
  }
};

export const GetProfile = async (token) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  };

  try {
    const response = await fetch(`${root}users/profile`, options);
    console.log("hola");
    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    return error;
  }
};

export const GetAppointments = async (token) => {

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
  };

  try {
    const response = await fetch(`${root}appointments`, options);

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;

  } catch (error) {
    return error;
  }
};

export const deleteAppointment = async (postId, token) => {
  try {
    const response = await fetch(`${root}appointments/${postId}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    });
    if (!response.ok) {
      throw new Error('No se pudo eliminar el post');
    }
    return await response.json();
  } catch (error) {
    console.error('Error al actualizar el post:', error);
    throw error;
  }
};