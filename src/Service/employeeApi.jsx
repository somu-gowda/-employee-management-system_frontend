import axios from "axios";

const baseUrl = "http://localhost:8000/api/v1/employees";

class EmployeeApi {
  static GetEmployee = (setData) => {
    axios
      .get(baseUrl)
      .then((response) => {
        const data = response.data.data;
        setData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  static CreateEmployee = (data, callBack) => {
    axios
      .post(baseUrl, data)
      .then((response) => {
        callBack(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  static UpdateEmployee = (id, data, callBack) => {
    axios
      .put(`${baseUrl}/${id}`, data)
      .then((response) => {
        const data = response.data.data;
        callBack(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  static DeleteEmployee = (id, callBack) => {
    axios
      .delete(`${baseUrl}/${id}`)
      .then((response) => {
        callBack(response.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  static LoginApi = (data, callBack) => {
    axios
      .put(`${baseUrl}/login`, data)
      .then((response) => {
        callBack(response);
      })
      .catch((err) => {
        console.log(err);
        callBack(err);
      });
  };
}

export default EmployeeApi;
