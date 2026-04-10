import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/svelte";
import TuiButton from "./TuiButton.svelte";
import TuiButtonTest from "./TuiButton.test.svelte";

describe("TuiButton", () => {
  it("renders children content", () => {
    render(TuiButtonTest, { text: "Click me" });
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });

  it("applies disabled class and attribute when disabled", () => {
    render(TuiButtonTest, { disabled: true, text: "Disabled" });
    const button = screen.getByRole("button");
    expect(button).toHaveClass("disabled");
    expect(button).toBeDisabled();
  });

  it("calls onclick handler when clicked and not disabled", async () => {
    const handleClick = vi.fn();
    render(TuiButtonTest, {
      handleClick,
      text: "Click",
    });
    const button = screen.getByRole("button");
    await button.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onclick when disabled", async () => {
    const handleClick = vi.fn();
    render(TuiButtonTest, {
      disabled: true,
      handleClick,
      text: "Click",
    });
    const button = screen.getByRole("button");
    await button.click();
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("applies tui-button class", () => {
    render(TuiButtonTest, { text: "Styled" });
    expect(screen.getByRole("button")).toHaveClass("tui-button");
  });
});
