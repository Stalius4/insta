




export const fetchPhotos =  async (setter) => {
    try {
    const response = await fetch("https://picsum.photos/v2/list?page=3&limit=10")
    const data = await response.json()
    if (!response.ok){
      throw new Error(response.statusText)
    }
    console.log(response)
    setter(data)
    } catch (err) {
    }
  }
  

  export const createUser = async (username, email, password, setter) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_REST_API}/user/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      setter(data.newUser.username);
    } catch (error) {
      console.log(error);
    }
  };

  
  export const loginUser = async (username, email, password, setJwt) => {
    try {
      const res = await fetch(`${process.env.REACT_APP_REST_API}/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });
      const data = await res.json();
      console.log(data)
      setJwt(data)
      // if (data.error) {
      //   throw new Error(data.error);
      // }
      // setter(data.newUser.username);
    } catch (error) {
      console.log(error);
    }
  };
