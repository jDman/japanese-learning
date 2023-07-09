import { TestBed, waitForAsync } from '@angular/core/testing';

import { ReadingKanjiHttpService } from './reading-kanji.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ReadingKanjiResponse } from './reading-kanji-response-interface';
import { readingKanjiResponseMock } from './reading-kanji-response-mock';
import { baseUrl } from '../base-url';

describe(ReadingKanjiHttpService.name, () => {
  let service: ReadingKanjiHttpService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(ReadingKanjiHttpService);
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
    const response: ReadingKanjiResponse = readingKanjiResponseMock;

    service.get('あり').subscribe(data => {
      expect(data).toEqual(readingKanjiResponseMock);
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

    service.get('あり').subscribe({
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
