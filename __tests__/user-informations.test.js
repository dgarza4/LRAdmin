import React from "react";
import { cleanup, render } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import user from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../store";
import UserInformation from "../pages/user-information";

afterEach(cleanup);

describe("UserInformation component test suit", () => {
  it("Should take a snapshot", () => {
    const { asFragment } = render(
      <MockedProvider>
        <Provider store={store}>
          <UserInformation />
        </Provider>
      </MockedProvider>
    );
    expect(asFragment(<UserInformation />)).toMatchSnapshot();
  });

  it("Should render with out error", async () => {
    render(
      <MockedProvider>
        <Provider store={store}>
          <UserInformation />
        </Provider>
      </MockedProvider>
    );
  });

  it("Correct title rendered", () => {
    const { getByTestId } = render(
      <MockedProvider>
        <Provider store={store}>
          <UserInformation />
        </Provider>
      </MockedProvider>
    );
    const title = getByTestId("title");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("User Information");
  });

  it("search field rendered", () => {
    const { getByTestId } = render(
      <MockedProvider>
        <Provider store={store}>
          <UserInformation />
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
          <UserInformation />
        </Provider>
      </MockedProvider>
    );
    const search = getByTestId("search");
    await user.type(search, "Roman");
    expect(search.value).toBe("Roman");
  });
});
