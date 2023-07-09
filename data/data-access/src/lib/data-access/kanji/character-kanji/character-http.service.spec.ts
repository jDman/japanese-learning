import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CharacterHttpService } from './character-http.service';
import { baseUrl } from '../base-url';
import { lastValueFrom } from 'rxjs';
import { CharacterRecord } from './character-record-interface';
import { characterRecordMock } from './character-record-mock';

describe(CharacterHttpService.name, () => {
  let service: CharacterHttpService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(CharacterHttpService);
    controller = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should map response to character data', waitForAsync(() => {
    // response
    const response: CharacterRecord = characterRecordMock;

    service.get('字').subscribe(data => {
      expect(data).toEqual(characterRecordMock);
    });

    //request
    const testRequest = controller.expectOne(request =>
      request.method === 'GET' &&
      request.url.startsWith(baseUrl)
    );

    testRequest.flush(response);
  }));

  it('should catch an error when error response received', waitForAsync(() => {
    // response
    const errMsg = 'an error occurred';

    service.get('字').subscribe({
      next: () => fail('a failure occurred'),
      error: (err) => expect(err).toEqual(new Error(errMsg))
    });

    //request
    const testRequest = controller.expectOne(request =>
      request.method === 'GET' &&
      request.url.startsWith(baseUrl)
    );

    testRequest.flush(errMsg, { status: 404, statusText: 'Not Found' });  
  }));
});
