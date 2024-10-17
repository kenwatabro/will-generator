'use client'

import React, { useState } from 'react'
import { Eye, EyeOff, Lock, Mail, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"

export function AuthPageComponent() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState({ email: '', password: '', confirmPassword: '' })

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return re.test(String(email).toLowerCase())
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    setErrors(prev => ({ ...prev, email: validateEmail(e.target.value) ? '' : 'メールアドレスの形式が正しくありません' }))
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    setErrors(prev => ({ ...prev, password: e.target.value.length >= 8 ? '' : 'パスワードは8文字以上である必要があります' }))
  }

  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value)
    setErrors(prev => ({ ...prev, confirmPassword: e.target.value === password ? '' : 'パスワードが一致しません' }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ここで実際の登録またはログイン処理を行います
    console.log('Form submitted')
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-foreground">
            相続プランナーへようこそ
          </h2>
        </div>
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">ログイン</TabsTrigger>
            <TabsTrigger value="register">新規登録</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <Label htmlFor="login-email" className="sr-only">
                    メールアドレス
                  </Label>
                  <Input
                    id="login-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="rounded-t-md"
                    placeholder="メールアドレス"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                <div className="relative">
                  <Label htmlFor="login-password" className="sr-only">
                    パスワード
                  </Label>
                  <Input
                    id="login-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    className="rounded-b-md"
                    placeholder="パスワード"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <Eye className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Checkbox id="remember-me" />
                  <Label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-muted-foreground"
                  >
                    ログイン情報を保存する
                  </Label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-primary hover:text-primary/80">
                    パスワードをお忘れですか？
                  </a>
                </div>
              </div>

              <div>
                <Button type="submit" className="w-full">
                  ログイン
                </Button>
              </div>
            </form>
          </TabsContent>
          <TabsContent value="register">
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <Label htmlFor="register-email" className="sr-only">
                    メールアドレス
                  </Label>
                  <Input
                    id="register-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="rounded-t-md"
                    placeholder="メールアドレス"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
                <div className="relative">
                  <Label htmlFor="register-password" className="sr-only">
                    パスワード
                  </Label>
                  <Input
                    id="register-password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    placeholder="パスワード"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <Eye className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                <div>
                  <Label htmlFor="register-confirm-password" className="sr-only">
                    パスワード（確認）
                  </Label>
                  <Input
                    id="register-confirm-password"
                    name="confirm-password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="new-password"
                    required
                    className="rounded-b-md"
                    placeholder="パスワード（確認）"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                  {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
                </div>
              </div>

              <div className="flex items-center">
                <Checkbox id="agree-terms" required />
                <Label
                  htmlFor="agree-terms"
                  className="ml-2 block text-sm text-muted-foreground"
                >
                  <a href="#" className="text-primary hover:text-primary/80">
                    利用規約
                  </a>
                  と
                  <a href="#" className="text-primary hover:text-primary/80">
                    プライバシーポリシー
                  </a>
                  に同意します
                </Label>
              </div>

              <div>
                <Button type="submit" className="w-full">
                  アカウントを作成
                </Button>
              </div>
            </form>
          </TabsContent>
        </Tabs>

        <div className="mt-6">
          <p className="text-center text-sm text-muted-foreground">
            二要素認証を有効にすることで、アカウントのセキュリティを強化できます。
            <a href="#" className="font-medium text-primary hover:text-primary/80">
              詳細はこちら
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}