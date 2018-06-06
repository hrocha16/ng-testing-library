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
    const { getByText, fixture, component } = configureEnvironment(
      FetchComponent,
      metaData
    );
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
