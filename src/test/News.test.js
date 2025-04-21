import { render, screen, expect } from "@testing-library/react";
import News from "../components/Main"; // Correct import for the Main component
import { mockArticlesData } from "./mockdata";

test("renders article titles", async () => {
  // Render the Main component with mock data
  render(<News newsData={mockArticlesData} />);

  // Query all elements with the test ID "article-title"
  const articleTitles = await screen.getAllByTestId("article-title");

  // Assert that the number of titles matches the mock data length
  expect(articleTitles).toHaveLength(mockArticlesData.length);

  //Assert that the first title matches the expected text
  expect(articleTitles[0]).toHaveTextContent(mockArticlesData[0].title);
});

test("renders no data available message", () => {
  // Render the Main component with empty data assuming no data is available
  render(<News newsData={[]} />);

  // Assert that the "No data available" message is displayed
  expect(screen.getByText(/No data available/i)).toBeInTheDocument();
});

test("renders loading spinner", () => {
  // Mock articles data for testing loading state
  render(<News articles={mockArticlesData} loading={true} />);

  // Expect the loading spinner to be in the document
  expect(screen.getByRole("progressbar")).toBeInTheDocument();
});
