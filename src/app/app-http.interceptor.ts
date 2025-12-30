import { HttpInterceptorFn } from '@angular/common/http';
import {inject} from '@angular/core';
import {AppStateService} from './services/app-state.service';
import {catchError, finalize, throwError} from 'rxjs';
import {LoadingService} from './services/loading.service';

export const appHttpInterceptor: HttpInterceptorFn = (req, next) => {
  const stateService = inject(AppStateService);
  const loadingService = inject(LoadingService);
  //stateService.setAppState({
    //   status: "LOADING"
    // })
  loadingService.showLoading();
  let request = req.clone( // immuable
    {
      setHeaders:{
        Authorization: "Bearer JWt",
      }
    }
  );

  return next(request).pipe(
    catchError(err => {
      stateService.setAppState({
        errorMessage: err.message
      })
      return throwError(() => err)
    }),
    finalize(() => {
      // stateService.setAppState({
      //   status: "LOADED"
      // })
      loadingService.hideLoading();
    })
  );
};
