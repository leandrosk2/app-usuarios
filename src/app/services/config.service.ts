export class ConfigService {
    private urlService: string;

    constructor() {
        /*Tem que mudar depois para a porta do meu servidor backend */
        this.urlService = 'http://localhost:8080/service';
    }

    getUrlService(): string {

        return this.urlService;
    }
}
