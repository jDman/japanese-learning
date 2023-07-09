import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { KanjiHttpService } from './kanji-http.service';
import { lastValueFrom } from 'rxjs';
import { baseUrl } from '../base-url';

describe(KanjiHttpService.name, () => {
  let service: KanjiHttpService;
  let controller: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(KanjiHttpService);
    controller = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    controller.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initially return empty array', waitForAsync(() => {
    const response: string[] = [];

    const value = lastValueFrom(service.get(''));

    const testRequest = controller.expectOne(request =>
      request.method === 'GET' &&
      request.url.startsWith(baseUrl)
    );

    testRequest.flush(response);

    expect(value).resolves.toEqual(response);
  }));

  it('should respond with array of character strings on success', () => {
    const response: string[] = [
      '亜',
      '哀',
      '愛',
      '挨',
      '悪',
      '握',
      '圧',
      '扱',
      '宛',
      '安',
      '暗',
      '案'
    ];

    service.get('jouyou').subscribe(data => {
      expect(data).toEqual(response);
    });

    //request
    const testRequest = controller.expectOne(request =>
      request.method === 'GET' &&
      request.url.startsWith(baseUrl)
    );

    testRequest.flush(response);
  });

  it('should catch an error when error response received', waitForAsync(() => {
    // response
    const errMsg = 'an error occurred';

    service.get('jouyou').subscribe({
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
