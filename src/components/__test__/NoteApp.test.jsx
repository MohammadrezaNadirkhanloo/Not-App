import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import NoteApp from "../NoteApp";
import NoteProvider from "../../context/NoteContext";

const addNote = (notes) => {
  const inputTitle = screen.getByLabelText(/Note Title/i);
  const inputDescription = screen.getByLabelText(/Description/i);
  const button = screen.getByRole("button", { name: /Add new Note/i });
  notes.forEach((note) => {
    fireEvent.change(inputTitle, { target: { value: note.title } });
    fireEvent.change(inputDescription, { target: { value: note.description } });
    fireEvent.click(button);
  });
};

test("Note App 1: should input be empty after submit", () => {
  render(<NoteApp sortBy={"1"} />, { wrapper: NoteProvider });
  addNote([{ title: "Note Title", description: "Description" }]);
  const inputTitle = screen.getByLabelText(/Note Title/i);

  expect(inputTitle.value).toBe("");
});

test("Note App 2: should add multiple items ", () => {
  render(<NoteApp sortBy={"1"} />, { wrapper: NoteProvider });
  addNote([
    { title: "Note Title", description: "Description" },
    { title: "Note Title", description: "Description" },
    { title: "Note Title", description: "Description" },
  ]);
  const items = screen.getAllByTestId("item");

  expect(items.length).toBe(3);
});

test("Note App 3: should not have class complete ", () => {
  render(<NoteApp sortBy={"1"} />, { wrapper: NoteProvider });
  addNote([{ title: "Note Title", description: "Description" }]);
  const item = screen.getByTestId("item");

  expect(item).not.toHaveClass("complete");
});

test("Note App 4: should have class complete ", () => {
  render(<NoteApp sortBy={"1"} />, { wrapper: NoteProvider });
  addNote([{ title: "Note Title", description: "Description" }]);

  const checkbox = screen.getByRole("checkbox");
  fireEvent.click(checkbox);

  const item = screen.getByTestId("item");
  expect(item).toHaveClass("complete");
});
