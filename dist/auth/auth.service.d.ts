import { SupabaseClient } from '@supabase/supabase-js';
import { AuditLogService } from '../supabase/audit-log.service';
interface AuthUser {
    id: string;
    email: string;
    session: {
        access_token: string;
    };
}
export declare class AuthService {
    private readonly supabase;
    private readonly auditLogService;
    constructor(supabase: SupabaseClient, auditLogService: AuditLogService);
    validateUser(email: string, password: string): Promise<AuthUser | null>;
    login(user: AuthUser): Promise<{
        access_token: string;
    }>;
    forgotPassword(email: string): Promise<void>;
}
export {};
