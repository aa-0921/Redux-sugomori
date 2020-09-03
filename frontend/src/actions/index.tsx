import axios from 'axios'

// Action & ActionCreator
export const countUp = () => {
  return ({ type: 'COUNT_UP' });
}
export const countDown = () => {
  return ({ type: 'COUNT_DOWN' });
}

export const thunkCountUp = () => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(countUp());
    }, 1000);
  };
}

export const dataToCountUp = (data) => {
  return {
    type: 'DATA_TO_COUNT_UP',
    data
  }
}

// ---------------------------------------------------

export const getAddressRequest = () => {
  return {
    type: 'GET_ADDRESS_REQUEST'
  }
}

export const getAddressSuccess = (data) => {
  console.log('getAddressSuccessのdata', data)
  return {
    type: 'GET_ADDRESS_SUCCESS',
    data
  }
}

export const getAddressFailure = (error) => {
  return {
    type: 'GET_ADDRESS_FAILURE',
    error
  }
}


export const getAddress = (zipcode) => {
  return async (dispatch) => {
    console.log('zipcode', zipcode)
    console.log('zipcode.class', zipcode.class)

    dispatch(getAddressRequest())
    try {
      const res = await axios.get('https://api.zipaddress.net/?', { params: { zipcode: zipcode } });
      console.log('getAddressのres.data', res.data.data.pref.length)
      // console.log('getAddressのres.data', res.data)

      return dispatch(getAddressSuccess(res.data.data.pref.length));
    }
    catch (err) {
      return dispatch(getAddressFailure(err));
    }
  }
}
