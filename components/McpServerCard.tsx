import { Sparkles, Link2, Code, Code2 } from 'lucide-react';

export function MCPServer() {
  const tools = [
    { icon: Code, label: 'GitHub' },
    { icon: Code2, label: 'VS Code' },
    { icon: Sparkles, label: 'Figma' },
    { icon: Link2, label: 'Tools' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-16">
      <div className="flex flex-col items-center gap-12">
        {/* Content */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground">
            MCP Server
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Seamlessly integrates into your favorite IDE, generating stunning
            components, blocks, and pages by leveraging shadcn/studio premium
            components.
          </p>
        </div>

        {/* Visual Flow Diagram */}
        <div className="flex flex-col items-center gap-8">
          {/* Top combined icon */}
          <div className="flex items-center gap-4 p-6 rounded-full border border-border bg-card">
            <div className="p-3 rounded-full bg-black">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-3xl text-muted-foreground">+</span>
            <div className="p-3 rounded-full bg-muted border border-border">
              <Link2 className="w-6 h-6 text-foreground" />
            </div>
          </div>

          {/* Connecting line */}
          <div className="h-12 w-1 bg-border"></div>

          {/* Bottom tools grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-2xl">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3"
                >
                  <div className="p-4 rounded-full border-2 border-border hover:border-primary transition-colors bg-card">
                    <Icon className="w-6 h-6 text-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground text-center">
                    {tool.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
