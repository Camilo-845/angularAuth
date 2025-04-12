import { HttpInterceptorFn } from "@angular/common/http";
import { LocalManagerService, localKeys } from "@/services/local-manager.service";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = LocalManagerService.getElement(localKeys.token);

  let headers = req.headers.set('Content-Type', 'application/json')

  if (token) {
    headers.set('Authorization', `Bearer ${token}`)
  }

  const authReq = req.clone({ headers })

  return next(authReq)
}
