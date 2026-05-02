# @primitivekit/svelte

Primitive Svelte components with zero hardcoded values. Fully customizable via CSS variables.

## Status

🚧 **In Development** - Version 0.0.1

This package is currently under active development. Components will be added incrementally.

## Philosophy

- **Zero Hardcoded Values** - Every visual property controlled through CSS variables
- **Type-Safe** - Full TypeScript support with comprehensive type definitions  
- **Accessible** - WCAG 2.1 AA compliant with proper ARIA attributes
- **Customizable** - 50-150+ CSS variables per component
- **Lightweight** - Minimal dependencies, maximum flexibility
- **Svelte 4/5 Ready** - Built with modern Svelte patterns

## Installation

```bash
npm install @primitivekit/svelte
```

## Planned Features

### 🎨 600+ Design Tokens
Comprehensive design token system with 21 categories (shared across all PrimitiveKit frameworks)

### 🧩 38 Components (Coming Soon)
Complete component library covering all essential UI needs:
- **Form Components**: Button, Input, Textarea, Select, Checkbox, Radio, Switch
- **Layout Components**: Card, Container, Stack, Grid, Divider, Space
- **Feedback Components**: Badge, Spinner, Alert, Progress, Skeleton
- **Navigation Components**: Link, Tabs, Breadcrumb
- **Overlay Components**: Modal, Tooltip, Popover, Dropdown
- **Data Display**: Avatar, Tag, Empty, Image, Collapse, Table
- **Data Entry**: Form, Slider, Upload
- **Other**: Typography, Menu, Drawer, Steps

## Quick Start (Coming Soon)

```svelte
<script lang="ts">
  import { Button, Input, Card } from '@primitivekit/svelte';
</script>

<Card>
  <Input
    label="Email"
    type="email"
    placeholder="Enter your email"
  />
  
  <Button variant="primary" size="large">
    Submit
  </Button>
</Card>
```

## Documentation

- **Main Docs:** [https://primitivekit.github.io/docs/](https://primitivekit.github.io/docs/)
- **Svelte Guide:** [https://primitivekit.github.io/docs/svelte/](https://primitivekit.github.io/docs/svelte/)

## Contributing

Contributions welcome! This is a new package and we'd love your help building it.

## License

MIT - See [LICENSE](./LICENSE) for details

## Links

- **NPM:** https://www.npmjs.com/package/@primitivekit/svelte
- **GitHub:** https://github.com/primitivekit/svelte
- **Documentation:** https://primitivekit.github.io/docs/

---

**Version:** 0.0.1  
**Status:** In Development  
**Maintained by:** PrimitiveKit Team
