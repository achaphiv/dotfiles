import {
  isToolCallEventType,
  type ExtensionAPI,
} from '@earendil-works/pi-coding-agent'

export default function (pi: ExtensionAPI) {
  pi.on('message_end', (event) => {
    if (event.message.role !== 'assistant') return

    let changed = false
    const content = event.message.content.map((block) => {
      if (
        block.type !== 'toolCall' ||
        block.name !== 'bash' ||
        !('timeout' in block.arguments)
      )
        return block

      const { timeout: _timeout, ...argumentsWithoutTimeout } = block.arguments
      changed = true
      return { ...block, arguments: argumentsWithoutTimeout }
    })

    if (changed) return { message: { ...event.message, content } }
  })

  pi.on('tool_call', (event) => {
    if (isToolCallEventType('bash', event)) delete event.input.timeout
  })
}
