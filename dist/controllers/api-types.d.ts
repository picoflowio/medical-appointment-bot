export declare class ApiConfigDto {
    fileName: string;
}
export declare class ApiRunBodyDto {
    userMessage: string;
    flowName: string;
    config: ApiConfigDto;
}
export declare class ApiRunResponseDto {
    success: boolean;
    completed: boolean;
    message: string;
    session: string;
}
export declare class ApiRunResponse400Dto {
    success: boolean;
    completed: boolean;
    message: string;
}
export declare class ApiEndResponseDto {
    success: boolean;
    session: string;
}
export declare class ApiEndResponse400Dto {
    success: boolean;
    message: string;
    session: string;
}
