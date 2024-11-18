import axios from 'axios';

class HttpService {
      constructor() {
            this.service = axios.create();
            this.service.interceptors.response.use(
                  this.handleSuccess,
                  this.handleError
            );
      }

      sendRequest = async (config) => {
            return this.service.request(config);
      };

      handleSuccess = (response) => {
            return response?.data;
      };

      handleError = (error) => {
            if (!error.response) {
                  return {
                        success: false,
                        message: 'Network error. Please try again.',
                  };
            }
            switch (error.response.status) {
                  case 502:
                        window.location.replace('/500');
                        break;
                  case 500:
                        window.location.replace('/500');
                        break;
                  default:
                        throw error;
            }
      };
}

export default HttpService;
