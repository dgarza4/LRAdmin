import React from "react";
import { cleanup, render } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import user from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../store";
import Home from "../pages/user-reports";

afterEach(cleanup);

describe("UserReports component test suit", () => {
  it("Should take a snapshot", () => {
    const { asFragment } = render(
      <MockedProvider>
        <Provider store={store}>
          <Home />
        </Provider>
      </MockedProvider>
    );
    expect(asFragment(<Home />)).toMatchSnapshot();
  });

  it("Should render with out error", async () => {
    render(
      <MockedProvider>
        <Provider store={store}>
          <Home />
        </Provider>
      </MockedProvider>
    );
  });

  it("Correct title rendered", () => {
    const { getByTestId } = render(
      <MockedProvider>
        <Provider store={store}>
          <Home />
        </Provider>
      </MockedProvider>
    );
    const title = getByTestId("title");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("User Reports");
  });

  it("search field rendered", () => {
    const { getByTestId } = render(
      <MockedProvider>
        <Provider store={store}>
          <Home />
        </Provider>
      </MockedProvider>
    );
    const search = getByTestId("search");
    expect(search).toBeInTheDocument();
    expect(search).toHaveTextContent("");
  });

  it("search value should be consistent", async () => {
    const { getByTestId } = render(
      <MockedProvider>
        <Provider store={store}>
          <Home />
        </Provider>
      </MockedProvider>
    );
    const search = getByTestId("search");
    await user.type(search, "Roman");
    expect(search.value).toBe("Roman");
  });
});
