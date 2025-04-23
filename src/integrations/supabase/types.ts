export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      DGP_portal_master_project: {
        Row: {
          created_at: string
          created_by: number | null
          proj_category: string | null
          proj_company: number | null
          proj_country: string | null
          proj_detail: string | null
          proj_id: number
          proj_name: string | null
          proj_phase: string | null
          proj_remark: string | null
          proj_short_name: string | null
          proj_sts: string | null
          proj_version: string | null
          proj_year: number | null
          req_id: number
          sts: boolean | null
          updated_at: string | null
          updated_by: number | null
        }
        Insert: {
          created_at?: string
          created_by?: number | null
          proj_category?: string | null
          proj_company?: number | null
          proj_country?: string | null
          proj_detail?: string | null
          proj_id?: number
          proj_name?: string | null
          proj_phase?: string | null
          proj_remark?: string | null
          proj_short_name?: string | null
          proj_sts?: string | null
          proj_version?: string | null
          proj_year?: number | null
          req_id: number
          sts?: boolean | null
          updated_at?: string | null
          updated_by?: number | null
        }
        Update: {
          created_at?: string
          created_by?: number | null
          proj_category?: string | null
          proj_company?: number | null
          proj_country?: string | null
          proj_detail?: string | null
          proj_id?: number
          proj_name?: string | null
          proj_phase?: string | null
          proj_remark?: string | null
          proj_short_name?: string | null
          proj_sts?: string | null
          proj_version?: string | null
          proj_year?: number | null
          req_id?: number
          sts?: boolean | null
          updated_at?: string | null
          updated_by?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "DGP_portal_master_project_req_id_fkey"
            columns: ["req_id"]
            isOneToOne: false
            referencedRelation: "DGP_portal_trans_request_project"
            referencedColumns: ["req_id"]
          },
        ]
      }
      DGP_portal_master_users: {
        Row: {
          created_at: string
          created_by: number | null
          emp_code: number
          emp_email: string | null
          id: number
          is_change_pwd: boolean | null
          password: string | null
          sts: boolean | null
          system_role_code: number | null
          system_status: boolean | null
          updated_at: string | null
          updated_by: number | null
          username: string | null
        }
        Insert: {
          created_at?: string
          created_by?: number | null
          emp_code: number
          emp_email?: string | null
          id?: number
          is_change_pwd?: boolean | null
          password?: string | null
          sts?: boolean | null
          system_role_code?: number | null
          system_status?: boolean | null
          updated_at?: string | null
          updated_by?: number | null
          username?: string | null
        }
        Update: {
          created_at?: string
          created_by?: number | null
          emp_code?: number
          emp_email?: string | null
          id?: number
          is_change_pwd?: boolean | null
          password?: string | null
          sts?: boolean | null
          system_role_code?: number | null
          system_status?: boolean | null
          updated_at?: string | null
          updated_by?: number | null
          username?: string | null
        }
        Relationships: []
      }
      DGP_portal_trans_request_project: {
        Row: {
          created_at: string
          created_by: number | null
          req_id: number
          req_proj_detail: string | null
          req_proj_name: string | null
          req_proj_reason: string | null
          req_proj_sts: string | null
          sts: boolean | null
          updated_at: string | null
          updated_by: number | null
        }
        Insert: {
          created_at?: string
          created_by?: number | null
          req_id?: number
          req_proj_detail?: string | null
          req_proj_name?: string | null
          req_proj_reason?: string | null
          req_proj_sts?: string | null
          sts?: boolean | null
          updated_at?: string | null
          updated_by?: number | null
        }
        Update: {
          created_at?: string
          created_by?: number | null
          req_id?: number
          req_proj_detail?: string | null
          req_proj_name?: string | null
          req_proj_reason?: string | null
          req_proj_sts?: string | null
          sts?: boolean | null
          updated_at?: string | null
          updated_by?: number | null
        }
        Relationships: []
      }
      jomoo_master_file: {
        Row: {
          created_at: string
          file_name: string
          file_name_en: string
          file_url: string
          id: string
        }
        Insert: {
          created_at?: string
          file_name: string
          file_name_en: string
          file_url: string
          id?: string
        }
        Update: {
          created_at?: string
          file_name?: string
          file_name_en?: string
          file_url?: string
          id?: string
        }
        Relationships: []
      }
      jomoo_master_role: {
        Row: {
          created_at: string
          role_desc: string | null
          role_id: number
          role_name: string | null
          sts: boolean | null
        }
        Insert: {
          created_at?: string
          role_desc?: string | null
          role_id?: number
          role_name?: string | null
          sts?: boolean | null
        }
        Update: {
          created_at?: string
          role_desc?: string | null
          role_id?: number
          role_name?: string | null
          sts?: boolean | null
        }
        Relationships: []
      }
      jomoo_trans_information: {
        Row: {
          created_at: string
          id: number
          info_desc: string | null
          info_email: string | null
          info_name: string | null
          info_type: string | null
          sts: boolean | null
        }
        Insert: {
          created_at?: string
          id?: number
          info_desc?: string | null
          info_email?: string | null
          info_name?: string | null
          info_type?: string | null
          sts?: boolean | null
        }
        Update: {
          created_at?: string
          id?: number
          info_desc?: string | null
          info_email?: string | null
          info_name?: string | null
          info_type?: string | null
          sts?: boolean | null
        }
        Relationships: []
      }
      jomoo_trans_section_content: {
        Row: {
          created_at: string
          id: number
          jm_desc: string | null
          jm_explore: boolean | null
          jm_img: string | null
          jm_name: string | null
          jm_url: string | null
          sts: boolean | null
        }
        Insert: {
          created_at?: string
          id?: number
          jm_desc?: string | null
          jm_explore?: boolean | null
          jm_img?: string | null
          jm_name?: string | null
          jm_url?: string | null
          sts?: boolean | null
        }
        Update: {
          created_at?: string
          id?: number
          jm_desc?: string | null
          jm_explore?: boolean | null
          jm_img?: string | null
          jm_name?: string | null
          jm_url?: string | null
          sts?: boolean | null
        }
        Relationships: []
      }
      master_project: {
        Row: {
          created_at: string
          id: number
          project_code: string | null
          project_detail: string | null
          project_name: string | null
          project_short_name: string | null
          project_summary: string | null
          project_version: string | null
          project_year: number | null
          request_id: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          project_code?: string | null
          project_detail?: string | null
          project_name?: string | null
          project_short_name?: string | null
          project_summary?: string | null
          project_version?: string | null
          project_year?: number | null
          request_id?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          project_code?: string | null
          project_detail?: string | null
          project_name?: string | null
          project_short_name?: string | null
          project_summary?: string | null
          project_version?: string | null
          project_year?: number | null
          request_id?: string | null
        }
        Relationships: []
      }
      master_roles: {
        Row: {
          created_at: string | null
          role_id: number
          role_name: string
          sts: number | null
        }
        Insert: {
          created_at?: string | null
          role_id?: number
          role_name: string
          sts?: number | null
        }
        Update: {
          created_at?: string | null
          role_id?: number
          role_name?: string
          sts?: number | null
        }
        Relationships: []
      }
      master_users: {
        Row: {
          avatar: string | null
          branch_code: string | null
          branch_name: string | null
          company_code: string | null
          company_name: string | null
          created_at: string | null
          department_code: string | null
          department_name: string | null
          division_code: string | null
          division_name: string | null
          employee_email: string | null
          employee_id: string
          firstname: string
          firstname_en: string | null
          fullname: string
          fullname_en: string | null
          group_name: string | null
          id: number
          job_description: string | null
          joined: string | null
          last_name: string
          last_name_en: string | null
          nickname: string | null
          nickname_en: string | null
          position_name: string | null
          pre_name: string | null
          pre_name_en: string | null
          rank_code: string | null
          rank_no: number | null
          section_code: string | null
          section_name: string | null
          sts: number | null
          sup_id: string | null
          tel: string | null
        }
        Insert: {
          avatar?: string | null
          branch_code?: string | null
          branch_name?: string | null
          company_code?: string | null
          company_name?: string | null
          created_at?: string | null
          department_code?: string | null
          department_name?: string | null
          division_code?: string | null
          division_name?: string | null
          employee_email?: string | null
          employee_id: string
          firstname: string
          firstname_en?: string | null
          fullname: string
          fullname_en?: string | null
          group_name?: string | null
          id?: number
          job_description?: string | null
          joined?: string | null
          last_name: string
          last_name_en?: string | null
          nickname?: string | null
          nickname_en?: string | null
          position_name?: string | null
          pre_name?: string | null
          pre_name_en?: string | null
          rank_code?: string | null
          rank_no?: number | null
          section_code?: string | null
          section_name?: string | null
          sts?: number | null
          sup_id?: string | null
          tel?: string | null
        }
        Update: {
          avatar?: string | null
          branch_code?: string | null
          branch_name?: string | null
          company_code?: string | null
          company_name?: string | null
          created_at?: string | null
          department_code?: string | null
          department_name?: string | null
          division_code?: string | null
          division_name?: string | null
          employee_email?: string | null
          employee_id?: string
          firstname?: string
          firstname_en?: string | null
          fullname?: string
          fullname_en?: string | null
          group_name?: string | null
          id?: number
          job_description?: string | null
          joined?: string | null
          last_name?: string
          last_name_en?: string | null
          nickname?: string | null
          nickname_en?: string | null
          position_name?: string | null
          pre_name?: string | null
          pre_name_en?: string | null
          rank_code?: string | null
          rank_no?: number | null
          section_code?: string | null
          section_name?: string | null
          sts?: number | null
          sup_id?: string | null
          tel?: string | null
        }
        Relationships: []
      }
      master_users_regis: {
        Row: {
          created_at: string | null
          employee_id: string
          id: number
          password: string
          sts: number | null
          system_role_id: number | null
          system_status: number | null
          username: string
        }
        Insert: {
          created_at?: string | null
          employee_id: string
          id?: number
          password: string
          sts?: number | null
          system_role_id?: number | null
          system_status?: number | null
          username: string
        }
        Update: {
          created_at?: string | null
          employee_id?: string
          id?: number
          password?: string
          sts?: number | null
          system_role_id?: number | null
          system_status?: number | null
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "master_users_regis_employee_id_fkey"
            columns: ["employee_id"]
            isOneToOne: true
            referencedRelation: "master_users"
            referencedColumns: ["employee_id"]
          },
          {
            foreignKeyName: "master_users_regis_system_role_id_fkey"
            columns: ["system_role_id"]
            isOneToOne: false
            referencedRelation: "master_roles"
            referencedColumns: ["role_id"]
          },
        ]
      }
      project_documents: {
        Row: {
          created_at: string
          data_dictionary_url: string | null
          design_url: string | null
          document_field_url: string | null
          id: number
          project_id: number
          srs_url: string | null
          workflow_url: string | null
        }
        Insert: {
          created_at?: string
          data_dictionary_url?: string | null
          design_url?: string | null
          document_field_url?: string | null
          id?: number
          project_id: number
          srs_url?: string | null
          workflow_url?: string | null
        }
        Update: {
          created_at?: string
          data_dictionary_url?: string | null
          design_url?: string | null
          document_field_url?: string | null
          id?: number
          project_id?: number
          srs_url?: string | null
          workflow_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "project_documents_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "master_project"
            referencedColumns: ["id"]
          },
        ]
      }
      project_other_links: {
        Row: {
          created_at: string
          id: number
          project_id: number
          title: string
          url: string
        }
        Insert: {
          created_at?: string
          id?: number
          project_id: number
          title: string
          url: string
        }
        Update: {
          created_at?: string
          id?: number
          project_id?: number
          title?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_other_links_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "master_project"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
