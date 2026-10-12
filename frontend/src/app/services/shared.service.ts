import { environment } from '../../environments/environment';

export class SharedService {
  url = environment.backendUrl;
}
