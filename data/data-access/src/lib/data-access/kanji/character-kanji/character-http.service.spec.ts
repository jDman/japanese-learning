import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { CharacterHttpService } from './character-http.service';
import { baseUrl } from '../base-url';
import { CharacterErrorResponse } from './character-error-response-interface';
import { lastValueFrom } from 'rxjs';
import { CharacterRecord } from './character-record-interface';
import { HttpErrorResponse } from '@angular/common/http';
import { fail } from 'assert';

describe(CharacterHttpService.name, () => {
  let service: CharacterHttpService;
  let controller: HttpTestingController;

  const characterResponse: CharacterRecord = {
    kanji: '字',
    grade: 1,
    stroke_count: 6,
    meanings: [
      'character',
      'letter',
      'word',
      'section of village'
    ],
    kun_readings: ['あざ', 'あざな', '-な'],
    on_readings: ['ジ'],
    name_readings: []
  };

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

  it('should map response to null', waitForAsync(() => {
    // response
    const response: CharacterRecord | null = null;

    const value = lastValueFrom(service.get(''));

    //request
    const testRequest = controller.expectOne(request =>
      request.method === 'GET' &&
      request.url.startsWith(baseUrl)
    );

    testRequest.flush(response);

    expect(value).resolves.not.toEqual(characterResponse);
  }));

  it('should map response to character data', waitForAsync(() => {
    // response
    const response: CharacterRecord = characterResponse;

    service.get('字').subscribe(data => {
      expect(data).toEqual(characterResponse);
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
    const mockError = new ProgressEvent('an error occurred');

    service.get('字').subscribe({
      next: (res) => expect((res as CharacterErrorResponse).error).toEqual(mockError),
    });

    //request
    const testRequest = controller.expectOne(request =>
      request.method === 'GET' &&
      request.url.startsWith(baseUrl)
    );

    testRequest.error(mockError);  
  }));
});
