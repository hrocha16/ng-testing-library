import {
  getQueriesForElement,
  prettyDOM,
  BoundFunction,
  QueryByAttribute,
  AllByAttribute,
  GetByAttribute,
  QueryByText,
  AllByText,
  GetByText
} from 'dom-testing-library';
import {
  TestBed,
  ComponentFixture,
  TestModuleMetadata
} from '@angular/core/testing';
import { Type } from '@angular/core';

function renderIntoDocument<T>(
  ui: Type<T>,
  moduleMetadata: TestModuleMetadata
): ComponentTesting<T> {
  configureModule(ui, moduleMetadata);
  return render(ui);
}

async function configureModule(ui, moduleMetadata) {
  await TestBed.configureTestingModule(moduleMetadata).compileComponents();
}

function render<T>(ui: Type<T>): ComponentTesting<T> {
  const fixture = TestBed.createComponent(ui);
  fixture.detectChanges();
  return {
    fixture: fixture,
    component: fixture.componentInstance,
    ...getQueriesForElement(fixture.elementRef.nativeElement)
  };
}

interface ComponentTesting<T> extends GetsAndQueries {
  fixture: ComponentFixture<T>;
  component: T;
}

interface GetsAndQueries {
  queryByTitle: BoundFunction<QueryByAttribute>;
  getAllByTitle: BoundFunction<AllByAttribute>;
  queryAllByTitle: BoundFunction<AllByText>;
  getByTitle: BoundFunction<GetByAttribute>;
  queryByTestId: BoundFunction<QueryByAttribute>;
  queryAllByTestId: BoundFunction<AllByAttribute>;
  getByTestId: BoundFunction<GetByAttribute>;
  getAllByTestId: BoundFunction<AllByAttribute>;
  queryByText: BoundFunction<QueryByText>;
  queryAllByText: BoundFunction<AllByText>;
  getByText: BoundFunction<GetByText>;
  getAllByText: BoundFunction<AllByText>;
  queryByPlaceholderText: BoundFunction<QueryByAttribute>;
  queryAllByPlaceholderText: BoundFunction<AllByAttribute>;
  getByPlaceholderText: BoundFunction<GetByAttribute>;
  getAllByPlaceholderText: BoundFunction<AllByAttribute>;
  queryByLabelText: BoundFunction<QueryByAttribute>;
  queryAllByLabelText: BoundFunction<AllByAttribute>;
  getByLabelText: BoundFunction<GetByAttribute>;
  getAllByLabelText: BoundFunction<AllByAttribute>;
  queryByAltText: BoundFunction<QueryByAttribute>;
  queryAllByAltText: BoundFunction<AllByAttribute>;
  getByAltText: BoundFunction<GetByAttribute>;
  getAllByAltText: BoundFunction<AllByAttribute>;
}

export * from 'dom-testing-library';
export { renderIntoDocument };
