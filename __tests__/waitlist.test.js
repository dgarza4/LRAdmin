import React from "react";
import { cleanup, render } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import Waitlist from "../pages/waitlist";
import { Provider } from "react-redux";
import store from "../store";

afterEach(cleanup);

describe("Waitlist component test suit", () => {
  it("Should take a snapshot", () => {
    const { asFragment } = render(
      <MockedProvider>
        <Provider store={store}>
          <Waitlist />
        </Provider>
      </MockedProvider>
    );
    expect(asFragment(<Waitlist />)).toMatchSnapshot();
  });

  it("Should render with out error", async () => {
    render(
      <MockedProvider>
        <Provider store={store}>
         <Waitlist />
        </Provider>
      </MockedProvider>
    );
  });
});
