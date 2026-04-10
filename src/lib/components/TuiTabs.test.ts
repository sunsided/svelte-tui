import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import TuiTabsTest from "./TuiTabs.test.svelte";

describe("TuiTabs", () => {
  const tabs = [
    { id: "tab1", label: "First" },
    { id: "tab2", label: "Second" },
    { id: "tab3", label: "Third", disabled: true },
  ];

  it("renders all tab labels", () => {
    render(TuiTabsTest, { props: { tabs } });
    expect(screen.getByRole("button", { name: "First" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Second" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Third" })).toBeInTheDocument();
  });

  it("sets first tab as active by default", () => {
    render(TuiTabsTest, { props: { tabs } });
    const firstTab = screen.getByRole("button", { name: "First" });
    expect(firstTab).toHaveClass("active");
  });

  it("switches active tab when clicked", async () => {
    const user = userEvent.setup();
    render(TuiTabsTest, { props: { tabs } });

    const firstTab = screen.getByRole("button", { name: "First" });
    const secondTab = screen.getByRole("button", { name: "Second" });

    expect(firstTab).toHaveClass("active");
    expect(secondTab).not.toHaveClass("active");

    await user.click(secondTab);

    expect(firstTab).not.toHaveClass("active");
    expect(secondTab).toHaveClass("active");
  });

  it("does not activate disabled tabs when clicked", async () => {
    const user = userEvent.setup();
    render(TuiTabsTest, { props: { tabs } });

    const firstTab = screen.getByRole("button", { name: "First" });
    const disabledTab = screen.getByRole("button", { name: "Third" });

    expect(disabledTab).toHaveClass("disabled");
    expect(firstTab).toHaveClass("active");

    await user.click(disabledTab);

    // First tab should still be active
    expect(firstTab).toHaveClass("active");
    expect(disabledTab).not.toHaveClass("active");
  });

  it("renders children snippet with active tab id", () => {
    const { container } = render(TuiTabsTest, { props: { tabs } });
    expect(container).toHaveTextContent("Active: tab1");
  });

  it("supports custom initial active tab", () => {
    render(TuiTabsTest, { props: { tabs, activeTab: "tab2" } });

    const secondTab = screen.getByRole("button", { name: "Second" });
    expect(secondTab).toHaveClass("active");
  });
});
