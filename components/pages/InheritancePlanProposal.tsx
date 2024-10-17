'use client'

import React, { useState } from 'react'
import { MessageCircle, Edit2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts'

// 仮のデータ（実際の実装では、バックエンドから取得したデータを使用します）
const inheritanceData = {
  assets: {
    realEstate: 50000000,
    financialAssets: 30000000,
    otherAssets: 10000000,
  },
  liabilities: 5000000,
  heirs: [
    { name: "配偶者", legalShare: 0.5, proposedShare: 0.6 },
    { name: "長男", legalShare: 0.25, proposedShare: 0.2 },
    { name: "長女", legalShare: 0.25, proposedShare: 0.2 },
  ],
  legalReserve: 0.5,
  taxSavingStrategies: [
    "配偶者の税額軽減特例の活用",
    "相続時精算課税制度の利用",
    "生前贈与の活用",
  ],
}

export function InheritancePlanProposal() {
  const [chatbotOpen, setChatbotOpen] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [proposedShares, setProposedShares] = useState(
    inheritanceData.heirs.map(heir => ({ name: heir.name, share: heir.proposedShare }))
  )
  const [showProposal, setShowProposal] = useState(false)

  const totalAssets = Object.values(inheritanceData.assets).reduce((sum, value) => sum + value, 0)
  const netAssets = totalAssets - inheritanceData.liabilities

  const handleShareChange = (index: number, value: string) => {
    const newShares = [...proposedShares]
    newShares[index].share = parseFloat(value)
    setProposedShares(newShares)
  }

  const renderPieChart = () => (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={proposedShares}
          dataKey="share"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )

  const renderBarChart = () => (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={inheritanceData.heirs}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="legalShare" name="法定相続分" fill="#8884d8" />
        <Bar dataKey="proposedShare" name="提案相続分" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  )

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">相続プラン提案</h1>
      <p className="text-muted-foreground mb-8">
        入力された情報を確認し、相続プランを生成します。
      </p>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>資産状況の確認</CardTitle>
          <CardDescription>入力された資産情報を確認してください。</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            <li>不動産: {inheritanceData.assets.realEstate.toLocaleString()}円</li>
            <li>金融資産: {inheritanceData.assets.financialAssets.toLocaleString()}円</li>
            <li>その他資産: {inheritanceData.assets.otherAssets.toLocaleString()}円</li>
            <li>負債: {inheritanceData.liabilities.toLocaleString()}円</li>
          </ul>
          <p className="mt-4"><strong>純資産総額:</strong> {netAssets.toLocaleString()}円</p>
        </CardContent>
      </Card>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>家族構成の確認</CardTitle>
          <CardDescription>入力された家族構成を確認してください。</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside">
            {inheritanceData.heirs.map((heir, index) => (
              <li key={index}>{heir.name}</li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <div className="mb-8">
        <Button onClick={() => setShowProposal(true)}>相続プランを生成</Button>
      </div>

      {showProposal && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>相続プラン提案</CardTitle>
            <CardDescription>AIが提案する最適な相続プランの概要です。</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p><strong>法定相続分:</strong></p>
              <ul className="list-disc list-inside">
                {inheritanceData.heirs.map((heir, index) => (
                  <li key={index}>
                    {heir.name}: {(heir.legalShare * 100).toFixed(1)}%
                  </li>
                ))}
              </ul>
              <p><strong>遺留分:</strong> 純資産の{(inheritanceData.legalReserve * 100).toFixed(1)}%</p>
              <p><strong>提案する相続分:</strong></p>
              <ul className="list-disc list-inside">
                {proposedShares.map((heir, index) => (
                  <li key={index}>
                    {heir.name}: {(heir.share * 100).toFixed(1)}%
                  </li>
                ))}
              </ul>
              {renderPieChart()}
              <h3 className="text-xl font-semibold mt-6 mb-2">法定相続分と提案相続分の比較</h3>
              {renderBarChart()}
              <h3 className="text-xl font-semibold mt-6 mb-2">節税対策</h3>
              <ul className="list-disc list-inside">
                {inheritanceData.taxSavingStrategies.map((strategy, index) => (
                  <li key={index}>{strategy}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      )}

      {showProposal && (
        <Card>
          <CardHeader>
            <CardTitle>プランのカスタマイズ</CardTitle>
            <CardDescription>提案された相続プランを調整できます。</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {proposedShares.map((heir, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <Label htmlFor={`share-${index}`} className="w-24">{heir.name}</Label>
                  <Input
                    id={`share-${index}`}
                    type="number"
                    value={heir.share}
                    onChange={(e) => handleShareChange(index, e.target.value)}
                    step="0.01"
                    min="0"
                    max="1"
                  />
                  <span>{(heir.share * 100).toFixed(1)}%</span>
                </div>
              ))}
              <Button onClick={() => setEditMode(!editMode)}>
                {editMode ? '変更を保存' : 'プランを編集'}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

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
              <CardDescription>相続プランに関する質問にお答えします。</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>こんにちは！相続プランについて、何かご質問はありますか？</p>
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