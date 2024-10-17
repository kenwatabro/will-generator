'use client'

import React, { useState } from 'react'
import { MessageCircle, Download, Edit2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// 仮の遺言書テンプレート
const willTemplates = {
  holographic: `私、[氏名]は、以下の通り、私の遺言を記します。

1. 私の全財産を以下のように分配します：
   [相続人1]に対し、[割合または金額]
   [相続人2]に対し、[割合または金額]
   ...

2. [特定の遺贈がある場合]
   [受遺者]に対し、[特定の財産]を遺贈します。

3. この遺言書は、私の最終意思を表すものであり、これ以前に作成した遺言書は全て無効とします。

作成日：[日付]
署名：[署名]`,

  notarized: `公正証書遺言

遺言者 [氏名] は、公証人 [公証人氏名] の面前において、以下の通り遺言する。

第1条 遺産の分配
私の遺産を以下のように分配する：
1. [相続人1]に対し、[割合または金額]
2. [相続人2]に対し、[割合または金額]
...

第2条 [特定の遺贈がある場合]
[受遺者]に対し、[特定の財産]を遺贈する。

第3条 遺言執行者
本遺言の執行者として、[執行者氏名]を指名する。

第4条 その他
本遺言は、遺言者の最終意思を表すものであり、これ以前に作成した遺言は全て無効とする。

作成日：[日付]
公証人役場：[役場名]
公証人：[公証人署名]
遺言者：[遺言者署名]`
}

export function WillDraftEditor() {
  const [selectedTemplate, setSelectedTemplate] = useState('holographic')
  const [willContent, setWillContent] = useState(willTemplates.holographic)
  const [chatbotOpen, setChatbotOpen] = useState(false)

  const handleTemplateChange = (value: string) => {
    setSelectedTemplate(value)
    setWillContent(willTemplates[value as keyof typeof willTemplates])
  }

  const handleWillContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setWillContent(e.target.value)
  }

  const highlightLegalTerms = (content: string) => {
    const legalTerms = ['遺言', '相続人', '遺贈', '遺産', '公証人', '遺言執行者']
    let highlightedContent = content

    legalTerms.forEach(term => {
      const regex = new RegExp(term, 'g')
      highlightedContent = highlightedContent.replace(regex, `<span class="bg-yellow-200">${term}</span>`)
    })

    return highlightedContent
  }

  const handleDownloadPDF = () => {
    // この部分は実際にはバックエンドと連携してPDF生成を行う必要があります
    alert('PDFのダウンロードが開始されます。（実際の実装では、ここでPDF生成とダウンロードが行われます）')
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">遺言書ドラフト生成・編集</h1>
      <p className="text-muted-foreground mb-8">
        遺言書のドラフトを生成し、編集することができます。法的な効力を持たせるには、専門家に相談することをおすすめします。
      </p>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>テンプレート選択</CardTitle>
          <CardDescription>遺言書のタイプを選択してください。</CardDescription>
        </CardHeader>
        <CardContent>
          <Select value={selectedTemplate} onValueChange={handleTemplateChange}>
            <SelectTrigger>
              <SelectValue placeholder="テンプレートを選択" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="holographic">自筆証書遺言</SelectItem>
              <SelectItem value="notarized">公正証書遺言</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>遺言書エディター</CardTitle>
          <CardDescription>内容を編集し、必要な情報を入力してください。</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="edit">
            <TabsList>
              <TabsTrigger value="edit">編集</TabsTrigger>
              <TabsTrigger value="preview">プレビュー</TabsTrigger>
            </TabsList>
            <TabsContent value="edit">
              <Textarea
                value={willContent}
                onChange={handleWillContentChange}
                className="min-h-[500px] font-mono"
              />
            </TabsContent>
            <TabsContent value="preview">
              <div
                className="border p-4 min-h-[500px] whitespace-pre-wrap font-serif"
                dangerouslySetInnerHTML={{ __html: highlightLegalTerms(willContent) }}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <div className="flex justify-end mb-8">
        <Button onClick={handleDownloadPDF}>
          <Download className="mr-2 h-4 w-4" />
          PDFでダウンロード
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>注意事項</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-500">
            このツールで作成された遺言書ドラフトは、法的な効力を持ちません。正式な遺言書として認められるためには、
            法律の定める方式に従って作成する必要があります。専門家（弁護士や公証人）に相談することを強くおすすめします。
          </p>
        </CardContent>
      </Card>

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
              <CardDescription>遺言書作成に関する質問にお答えします。</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>こんにちは！遺言書の作成について、何かご質問はありますか？</p>
                <Textarea placeholder="ここに質問を入力してください..." />
                <Button className="w-full">送信</Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}