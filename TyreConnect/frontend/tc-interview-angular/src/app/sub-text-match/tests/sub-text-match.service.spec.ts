import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SubtextMatchService } from '../services/sub-text-match.service';
import { SubtextMatch } from '../types/sub-text-match'

describe('SubtextMatchService', () => {
  let service: SubtextMatchService;

  describe('HttpClient testing', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
      });
      service = TestBed.inject(SubtextMatchService);
  
      // Inject the http service and test controller for each test
      httpClient = TestBed.inject(HttpClient);
      httpTestingController = TestBed.inject(HttpTestingController);
    });

    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('can test HttpClient.get', () => {
      const testData: SubtextMatch = {
        text: 'TestTest',
        subtext: 'Test',
        indexes: [0,4]
      };
    
      // Make an HTTP GET request
      httpClient.get<SubtextMatch>('/SubtextMatch')
        .subscribe(data =>
          // When observable resolves, result should match test data
          expect(data).toEqual(testData)
        );
    
      // The following `expectOne()` will match the request's URL.
      // If no requests or multiple requests matched that URL
      // `expectOne()` would throw.
      const req = httpTestingController.expectOne('/SubtextMatch');
    
      // Assert that the request is a GET.
      expect(req.request.method).toEqual('GET');
    
      // Respond with mock data, causing Observable to resolve.
      // Subscribe callback asserts that correct data was returned.
      req.flush(testData);
    
      // Finally, assert that there are no outstanding requests.
      httpTestingController.verify();
    });
  });
});
