import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { userService } from "./user.service";

describe('userService', () => {
    let service: userService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [
          HttpClientModule
        ],
        providers: [
          HttpClient
        ]
      });
      service = TestBed.inject(userService);
    });
  
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });