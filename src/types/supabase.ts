export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      posts: {
        Row: {
          id: string
          title: string
          content: string
          excerpt: string
          slug: string
          published: boolean
          published_at: string | null
          author_id: string
          created_at: string
          updated_at: string
          tags: string[] | null
          featured_image: string | null
        }
        Insert: {
          id?: string
          title: string
          content: string
          excerpt: string
          slug: string
          published?: boolean
          published_at?: string | null
          author_id: string
          created_at?: string
          updated_at?: string
          tags?: string[] | null
          featured_image?: string | null
        }
        Update: {
          id?: string
          title?: string
          content?: string
          excerpt?: string
          slug?: string
          published?: boolean
          published_at?: string | null
          author_id?: string
          created_at?: string
          updated_at?: string
          tags?: string[] | null
          featured_image?: string | null
        }
      }
      videos: {
        Row: {
          id: string
          title: string
          description: string
          youtube_id: string
          thumbnail_url: string
          published: boolean
          published_at: string | null
          author_id: string
          created_at: string
          updated_at: string
          tags: string[] | null
        }
        Insert: {
          id?: string
          title: string
          description: string
          youtube_id: string
          thumbnail_url: string
          published?: boolean
          published_at?: string | null
          author_id: string
          created_at?: string
          updated_at?: string
          tags?: string[] | null
        }
        Update: {
          id?: string
          title?: string
          description?: string
          youtube_id?: string
          thumbnail_url?: string
          published?: boolean
          published_at?: string | null
          author_id?: string
          created_at?: string
          updated_at?: string
          tags?: string[] | null
        }
      }
      comments: {
        Row: {
          id: string
          content: string
          author_id: string
          post_id: string | null
          video_id: string | null
          parent_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          content: string
          author_id: string
          post_id?: string | null
          video_id?: string | null
          parent_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          content?: string
          author_id?: string
          post_id?: string | null
          video_id?: string | null
          parent_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      tournaments: {
        Row: {
          id: string
          name: string
          description: string
          start_date: string
          end_date: string
          buy_in: number
          max_players: number
          current_players: number
          status: 'upcoming' | 'active' | 'completed' | 'cancelled'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          start_date: string
          end_date: string
          buy_in: number
          max_players: number
          current_players?: number
          status?: 'upcoming' | 'active' | 'completed' | 'cancelled'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          start_date?: string
          end_date?: string
          buy_in?: number
          max_players?: number
          current_players?: number
          status?: 'upcoming' | 'active' | 'completed' | 'cancelled'
          created_at?: string
          updated_at?: string
        }
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
  }
}
