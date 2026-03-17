"use client";

import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '@/lib/supabase';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 px-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to home
          </Link>
          <Badge variant="secondary" className="mb-4">
            🃏 Join the Community
          </Badge>
          <h1 className="text-3xl font-bold">Create Your Account</h1>
          <p className="text-muted-foreground">
            Start your poker journey with Raiceanus today
          </p>
        </div>

        {/* Auth Form */}
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Sign Up</CardTitle>
            <CardDescription className="text-center">
              Create your account to access tournaments and premium content
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Auth
              supabaseClient={supabase}
              view="sign_up"
              appearance={{
                theme: ThemeSupa,
                variables: {
                  default: {
                    colors: {
                      brand: 'hsl(var(--primary))',
                      brandAccent: 'hsl(var(--primary))',
                      brandButtonText: 'hsl(var(--primary-foreground))',
                      defaultButtonBackground: 'hsl(var(--background))',
                      defaultButtonBackgroundHover: 'hsl(var(--muted))',
                      inputBackground: 'hsl(var(--background))',
                      inputBorder: 'hsl(var(--border))',
                      inputBorderHover: 'hsl(var(--ring))',
                      inputBorderFocus: 'hsl(var(--ring))',
                    },
                    space: {
                      spaceSmall: '4px',
                      spaceMedium: '8px',
                      spaceLarge: '16px',
                      labelBottomMargin: '8px',
                      anchorBottomMargin: '4px',
                      emailInputSpacing: '4px',
                      socialAuthSpacing: '4px',
                      buttonPadding: '10px 15px',
                      inputPadding: '10px 15px',
                    },
                    fontSizes: {
                      baseBodySize: '14px',
                      baseInputSize: '14px',
                      baseLabelSize: '14px',
                      baseButtonSize: '14px',
                    },
                    radii: {
                      borderRadiusButton: '6px',
                      buttonBorderRadius: '6px',
                      inputBorderRadius: '6px',
                    },
                  },
                },
                className: {
                  container: 'space-y-4',
                  button: 'w-full',
                  input: 'w-full',
                  label: 'text-sm font-medium',
                  message: 'text-sm',
                },
              }}
              providers={['google', 'github']}
              redirectTo={`${typeof window !== 'undefined' ? window.location.origin : ''}/auth/callback?next=/admin`}
              onlyThirdPartyProviders={false}
              localization={{
                variables: {
                  sign_up: {
                    email_label: 'Email address',
                    password_label: 'Create a password',
                    button_label: 'Sign Up',
                    loading_button_label: 'Creating Account...',
                    social_provider_text: 'Sign up with {{provider}}',
                    link_text: 'Don\'t have an account? Sign up',
                  },
                  forgotten_password: {
                    link_text: 'Forgot your password?',
                    button_label: 'Send reset password instructions',
                    confirmation_text: 'Check your email for the password reset link',
                  },
                },
              }}
            />
          </CardContent>
        </Card>

        {/* Terms */}
        <div className="text-center text-xs text-muted-foreground">
          By signing up, you agree to our{' '}
          <Link href="/terms" className="text-primary hover:underline">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="text-primary hover:underline">
            Privacy Policy
          </Link>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Already have an account?{' '}
            <Link href="/auth/signin" className="text-primary hover:underline font-medium">
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
