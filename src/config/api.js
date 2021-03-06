const hostname = window && window.location && window.location.hostname;
let apiUri = "https://localhost:5001/";
let apiPerson = "";

switch (true) {
  case hostname.includes("dev-"): {
    break;
  }

  case hostname.includes("qa-"): {
    break;
  }
  case hostname.includes("localhost"): {
    apiUri = "https://localhost:5001";
    apiPerson = `${apiUri}/v1`;
    break;
  }
  default: {
    break;
  }
}

const config = {
  apiUri,
  apiPerson,
};

export default config;
