import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/svelte";
import userEvent from "@testing-library/user-event";
import TuiInput from "./TuiInput.svelte";

describe("TuiInput", () => {
  it("renders with placeholder text", () => {
    render(TuiInput, { props: { placeholder: "Enter name" } });
    expect(screen.getByPlaceholderText("Enter name")).toBeInTheDocument();
  });

  it("renders with correct type attribute", () => {
    render(TuiInput, { props: { type: "password" } });
    const input = screen.getByPlaceholderText("") as HTMLInputElement;
    expect(input).toHaveAttribute("type", "password");
  });

  it("applies disabled class and attribute when disabled", () => {
    render(TuiInput, { props: { disabled: true } });
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("disabled");
    expect(input).toBeDisabled();
  });

  it("supports two-way value binding via input event", async () => {
    const user = userEvent.setup();
    render(TuiInput, { props: { value: "" } });
    const input = screen.getByRole("textbox") as HTMLInputElement;

    await user.type(input, "test");
    expect(input.value).toBe("test");
  });

  it("calls oninput handler when user types", async () => {
    const user = userEvent.setup();
    const handleInput = vi.fn();
    render(TuiInput, { props: { oninput: handleInput } });
    const input = screen.getByRole("textbox");

    await user.type(input, "a");
    expect(handleInput).toHaveBeenCalled();
  });

  it("calls onchange handler when input loses focus", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(TuiInput, { props: { onchange: handleChange } });
    const input = screen.getByRole("textbox");

    await user.type(input, "test");
    await user.tab(); // trigger blur/change
    expect(handleChange).toHaveBeenCalled();
  });

  it("applies tui-input class", () => {
    render(TuiInput);
    expect(screen.getByRole("textbox")).toHaveClass("tui-input");
  });
});
