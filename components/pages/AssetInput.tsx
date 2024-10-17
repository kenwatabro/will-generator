'use client'

import React, { useState } from 'react'
import { 
  Home,
  Banknote,
  CreditCard,
  Heart,
  Plus,
  Minus,
  MessageCircle,
  Sun,
  Moon,
  Type
} from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function AssetInput() {
  const [chatbotOpen, setChatbotOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">資産情報入力</h1>
        <p className="text-muted-foreground mb-8">あなたの資産情報を入力してください。この情報は最適な相続プランの作成に使用されます。</p>

        <Tabs defaultValue="real-estate">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="real-estate">不動産</TabsTrigger>
            <TabsTrigger value="financial-assets">金融資産</TabsTrigger>
            <TabsTrigger value="liabilities">負債</TabsTrigger>
            <TabsTrigger value="life-insurance">生命保険</TabsTrigger>
          </TabsList>
          <TabsContent value="real-estate">
            <Card>
              <CardHeader>
                <CardTitle>不動産情報</CardTitle>
                <CardDescription>所有している不動産の情報を入力してください。</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="property-type">物件種別</Label>
                    <Select>
                      <SelectTrigger id="property-type">
                        <SelectValue placeholder="物件種別を選択" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="house">一戸建て</SelectItem>
                        <SelectItem value="apartment">マンション</SelectItem>
                        <SelectItem value="land">土地</SelectItem>
                        <SelectItem value="commercial">商業用不動産</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="property-address">所在地</Label>
                    <Input id="property-address" placeholder="東京都渋谷区..." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="property-value">評価額（円）</Label>
                    <Input id="property-value" type="number" placeholder="10000000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="property-notes">備考</Label>
                    <Textarea id="property-notes" placeholder="その他、物件に関する特記事項があればご記入ください。" />
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="financial-assets">
            <Card>
              <CardHeader>
                <CardTitle>金融資産情報</CardTitle>
                <CardDescription>保有している金融資産の情報を入力してください。</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="asset-type">資産種別</Label>
                    <Select>
                      <SelectTrigger id="asset-type">
                        <SelectValue placeholder="資産種別を選択" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="savings">預貯金</SelectItem>
                        <SelectItem value="stocks">株式</SelectItem>
                        <SelectItem value="bonds">債券</SelectItem>
                        <SelectItem value="investment-trust">投資信託</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="financial-institution">金融機関名</Label>
                    <Input id="financial-institution" placeholder="○○銀行" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="asset-value">評価額（円）</Label>
                    <Input id="asset-value" type="number" placeholder="5000000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="asset-notes">備考</Label>
                    <Textarea id="asset-notes" placeholder="資産に関する特記事項があればご記入ください。" />
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="liabilities">
            <Card>
              <CardHeader>
                <CardTitle>負債情報</CardTitle>
                <CardDescription>抱えている負債の情報を入力してください。</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="liability-type">負債種別</Label>
                    <Select>
                      <SelectTrigger id="liability-type">
                        <SelectValue placeholder="負債種別を選択" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mortgage">住宅ローン</SelectItem>
                        <SelectItem value="car-loan">自動車ローン</SelectItem>
                        <SelectItem value="credit-card">クレジットカード債務</SelectItem>
                        <SelectItem value="other-loan">その他借入金</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="creditor">債権者</Label>
                    <Input id="creditor" placeholder="○○銀行" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="liability-amount">負債額（円）</Label>
                    <Input id="liability-amount" type="number" placeholder="10000000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="liability-notes">備考</Label>
                    <Textarea id="liability-notes" placeholder="負債に関する特記事項があればご記入ください。" />
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="life-insurance">
            <Card>
              <CardHeader>
                <CardTitle>生命保険情報</CardTitle>
                <CardDescription>加入している生命保険の情報を入力してください。</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="insurance-company">保険会社名</Label>
                    <Input id="insurance-company" placeholder="○○生命" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="insurance-type">保険種類</Label>
                    <Select>
                      <SelectTrigger id="insurance-type">
                        <SelectValue placeholder="保険種類を選択" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="term">定期保険</SelectItem>
                        <SelectItem value="whole">終身保険</SelectItem>
                        <SelectItem value="medical">医療保険</SelectItem>
                        <SelectItem value="cancer">がん保険</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="insurance-amount">保険金額（円）</Label>
                    <Input id="insurance-amount" type="number" placeholder="10000000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="beneficiary">受取人</Label>
                    <Input id="beneficiary" placeholder="配偶者" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="insurance-notes">備考</Label>
                    <Textarea id="insurance-notes" placeholder="保険に関する特記事項があればご記入ください。" />
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-8 flex justify-end">
          <Button type="submit">情報を保存</Button>
        </div>

        {/* チャットボットサポート */}
        <div className="fixed bottom-4 right-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full h-12 w-12"
            onClick={() => setChatbotOpen(!chatbotOpen)}
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
          {chatbotOpen && (
            <Card className="absolute bottom-16 right-0 w-80">
              <CardHeader>
                <CardTitle>チャットボットサポート</CardTitle>
                <CardDescription>資産情報の入力をサポートします。</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>こんにちは！資産情報の入力について、何かご質問はありますか？</p>
                  <Textarea placeholder="ここに質問を入力してください..." />
                  <Button className="w-full">送信</Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
