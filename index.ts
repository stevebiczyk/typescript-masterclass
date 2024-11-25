type NetworkLoadingState = {
  status: "loading";
};

type NetworkFailedState = {
  status: "failed";
  code: number;
};

type NetworkSuccessState = {
  status: "success";
  response: {
    title: string;
    duration: number;
    summary: string;
  };
};

type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState;

function logger(state: NetworkState): string {
  switch (state.status) {
    case "loading":
      return "Loading...";
    case "failed":
      return `Error ${state.code}`;
    case "success":
      return `Downloaded ${state.response.title} - ${state.response.summary}`;
  }
}
