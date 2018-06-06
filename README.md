<div align="center">
<h1>ng-testing-library</h1>

<a href="https://www.emojione.com/emoji/1f980">
<img height="80" width="80" alt="crab" src="https://raw.githubusercontent.com/hrocha16/ng-testing-library/master/other/crab.png" />
</a>

<p>Simple Angular testing utilities.</p>
</div>

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [`configureEnvironment`](#configureEnvironment)
- [`TextMatch`](#textmatch)

## Installation

```
npm install --save-dev ng-testing-library
```

## Usage

```javascript
import { async, TestModuleMetadata } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { configureEnvironment } from 'ng-testing-library';

import { FetchComponent } from './fetch.component';
import { FetchService } from './fetch.service';

describe('FetchComponent', () => {
  const metaData: TestModuleMetadata = {
    imports: [HttpClientModule],
    declarations: [FetchComponent],
    providers: [FetchService]
  };

  it('should create', () => {
    const { component } = configureEnvironment(FetchComponent, metaData);
    expect(component).toBeTruthy();
  });

  it('should fetch data on click', async(() => {
    const { getByText, fixture, component } = configureEnvironment(
      FetchComponent,
      metaData
    );
    const spy = spyOn(component.fetchService, 'queryData');
    getByText('Fetch').click();
    expect(spy).toHaveBeenCalledTimes(1);
  }));
});
```

### `configureEnvironment`

The `configureEnvironment` method returns an object with the following properties:

#### `fixture`

Test harness for interacting with the created component and its corresponding element.

#### `component`

The instance of the root component class.

#### `getByLabelText(text: TextMatch, options: {selector: string = '*'}): HTMLElement`

This will search for the label that matches the given [`TextMatch`](#textmatch),
then find the element associated with that label.

#### `getByPlaceholderText(text: TextMatch): HTMLElement`

This will search for all elements with a placeholder attribute and find one
that matches the given [`TextMatch`](#textmatch).

#### `getByText(text: TextMatch): HTMLElement`

This will search for all elements that have a text node with `textContent`
matching the given [`TextMatch`](#textmatch).

#### `getByAltText(text: TextMatch): HTMLElement`

This will return the element (normally an `<img>`) that has the given `alt`
text. Note that it only supports elements which accept an `alt` attribute:
[`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img),
[`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input),
and [`<area>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area)
(intentionally excluding [`<applet>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/applet) as it's deprecated).

#### `getByTestId(text: TextMatch): HTMLElement`

A shortcut to `` container.querySelector(`[data-testid="${yourId}"]`) `` (and it
also accepts a [`TextMatch`](#textmatch)).

## `TextMatch`

Several APIs accept a `TextMatch` which can be a `string`, `regex` or a
`function` which returns `true` for a match and `false` for a mismatch.

See [dom-testing-library#textmatch](https://github.com/kentcdodds/dom-testing-library/#textmatch) for options.
