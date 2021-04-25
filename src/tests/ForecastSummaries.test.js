import React from "react";
import { render } from "@testing-library/react";
import ForecastSummaries from "../components/ForecastSummaries";

describe("ForecastSummary", () => {
    const validProps = [
        {
            date: 1111111,
            description: "Stub description",
            icon: "stubIcon",
            temperature: {
                min: 12,
                max: 22,
            },
        },
        {
            date: 2222222,
            description: "Stub description2",
            icon: "stubIcon2",
            temperature: {
                min: 13,
                max: 24,
            },
        },   
    ];
    
    it("renders correctly", () => {
        const { asFragment } = render(<ForecastSummaries forecasts={validProps} />);
        expect(asFragment()).toMatchSnapshot();
    });
});