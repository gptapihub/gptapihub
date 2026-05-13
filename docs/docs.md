---
title: 接入文档
description: 查看 GPT API 接入文档，支持 OpenAI 兼容格式，涵盖请求地址、鉴权方式、模型调用、代码示例与常见问题，帮助开发者快速完成 API 接入。
---

# 接入文档

本平台主要提供 GPT API 的接入说明与调用支持，默认兼容 OpenAI 格式，便于开发者快速完成对接。

> API 平台地址：<https://jeniya.cn>

> API 接入文档：<https://api-jeniya-cn.apifox.cn/>

## 快速开始

### 基本信息

- 平台地址：`https://jeniya.cn`
- API Base URL：`https://jeniya.cn/v1`
- 接口格式：兼容 OpenAI
- 重点支持：GPT 文本模型、GPT 图像模型
- 计费方式：文本按 Tokens，图像按次数

## 接入步骤

### 第一步：注册并获取 API Key

前往平台完成注册，并在控制台中创建 API Key，用于后续接口鉴权。

### 第二步：选择 GPT 模型

根据你的业务场景选择合适的模型，例如：

- `gpt-4o-mini`：适合测试、轻量调用和成本控制
- `gpt-4o`：适合通用正式场景
- `gpt-5.5`：适合更高能力需求
- `gpt-image-2`：适合图像生成

### 第三步：使用 OpenAI 兼容格式发送请求

本平台兼容 OpenAI 请求格式，通常可以直接使用现有 OpenAI SDK 或 HTTP 请求方式完成接入。

## 请求示例

### cURL 示例

```bash
curl https://jeniya.cn/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "gpt-4o-mini",
    "messages": [
      {
        "role": "user",
        "content": "你好，介绍一下你自己"
      }
    ]
  }'
```

### Python 示例

```python
from openai import OpenAI

client = OpenAI(
    api_key="YOUR_API_KEY",
    base_url="https://jeniya.cn/v1"
)

resp = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "user", "content": "你好，介绍一下你自己"}
    ]
)

print(resp)
```

## 常用接口

### 文本对话接口

常见接口：

- `/v1/chat/completions`

适合场景：

- 聊天机器人
- AI 写作
- 代码助手
- 知识库问答
- 自动化工作流

### 图像生成接口

图像模型适用于封面图、宣传图、插图等视觉内容生成。  
具体请求格式、参数和模型支持情况请以平台后台和文档为准。

## 接入前建议确认的事项

在正式接入前，建议先确认：

- 模型名称是否正确
- API Key 是否有效
- 账户余额或额度是否充足
- 当前使用的 SDK 是否支持自定义 `base_url`
- 是否需要超时、重试和异常处理机制

## 常见错误排查

### 1. 401 / 鉴权失败
请检查：

- API Key 是否正确
- 请求头中是否包含 `Authorization: Bearer YOUR_API_KEY`
- Key 是否失效或被禁用

### 2. 429 / 请求过多
请检查：

- 当前请求频率是否过高
- 账户额度是否不足
- 是否需要增加重试机制或降低并发

### 3. 模型不可用
请检查：

- 模型名称是否正确
- 当前模型是否可用
- 平台策略是否有临时调整

### 4. 请求格式错误
请检查：

- JSON 结构是否正确
- `messages`、`model` 等字段是否符合 OpenAI 兼容格式
- 参数名称是否填写错误

## 接入建议

- 先用轻量模型完成联调，再切换到正式模型
- 先小流量测试，再逐步放量
- 对生产环境建议增加超时、重试和异常处理机制
- 建议优先使用 OpenAI 兼容写法，降低后续迁移成本

## 相关页面

- [支持模型](/models.html)
- [模型价格](/pricing.html)
- [GPT API 教程](/blog/gpt-api/)
- [免责声明](/disclaimer.html)

## 开始使用

如果你已经准备好接入，可以前往平台创建 Key 并测试调用：

[前往 API 平台](https://jeniya.cn)