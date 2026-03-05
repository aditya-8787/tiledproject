import { useState } from "react";

const sections = [
  {
    id: "overview",
    label: "Overview",
    icon: "⬡",
  },
  {
    id: "architecture",
    label: "Architecture",
    icon: "⬢",
  },
  {
    id: "components",
    label: "Widget Coverage",
    icon: "⬡",
  },
  {
    id: "theming",
    label: "Theming System",
    icon: "⬢",
  },
  {
    id: "icons",
    label: "Icon Refresh",
    icon: "⬡",
  },
  {
    id: "testing",
    label: "Visual Regression",
    icon: "⬢",
  },
  {
    id: "timeline",
    label: "Timeline",
    icon: "⬡",
  },
];

const componentList = [
  { name: "QPushButton", priority: "P0", status: "In PR #3597", effort: "Low" },
  { name: "QTabBar / QTabWidget", priority: "P0", status: "In PR #3597", effort: "Medium" },
  { name: "QComboBox", priority: "P0", status: "Pending", effort: "Medium" },
  { name: "QCheckBox / QRadioButton", priority: "P0", status: "Pending", effort: "Low" },
  { name: "QLineEdit / QTextEdit", priority: "P0", status: "Partial", effort: "Low" },
  { name: "QScrollBar", priority: "P0", status: "Pending", effort: "High" },
  { name: "QSlider", priority: "P1", status: "Pending", effort: "Medium" },
  { name: "QMenu / QMenuBar", priority: "P1", status: "Pending", effort: "High" },
  { name: "QDockWidget", priority: "P1", status: "Pending", effort: "High" },
  { name: "QToolBar", priority: "P1", status: "Pending", effort: "Medium" },
  { name: "QGroupBox", priority: "P2", status: "Pending", effort: "Low" },
  { name: "QProgressBar", priority: "P2", status: "Pending", effort: "Low" },
  { name: "QSpinBox / QDoubleSpinBox", priority: "P2", status: "Pending", effort: "Medium" },
  { name: "QTreeView / QListView", priority: "P2", status: "Pending", effort: "High" },
  { name: "QToolTip", priority: "P2", status: "Pending", effort: "Low" },
];

const timelinePhases = [
  {
    phase: "Phase 1",
    weeks: "Weeks 1–3",
    title: "Foundation & Architecture Setup",
    hours: "~45 hrs",
    tasks: [
      "Set up TiledStyle class extending QProxyStyle",
      "Implement design token system (CSS-like variables in C++)",
      "Light/Dark palette generation infrastructure",
      "Platform detection utilities (Windows / macOS / Linux)",
      "CI screenshot harness baseline",
    ],
    color: "#00d4aa",
  },
  {
    phase: "Phase 2",
    weeks: "Weeks 4–7",
    title: "Core Widget Styling (P0)",
    hours: "~60 hrs",
    tasks: [
      "QPushButton (normal, hover, pressed, disabled, flat)",
      "QTabBar / QTabWidget (top, bottom, scrollable)",
      "QComboBox (popup, editable variants)",
      "QCheckBox / QRadioButton (all states + animations)",
      "QLineEdit with focus ring and validation states",
      "QScrollBar (thin overlay pattern, macOS-like)",
    ],
    color: "#3b82f6",
  },
  {
    phase: "Phase 3",
    weeks: "Weeks 8–11",
    title: "Complex Controls (P1) & Icon Theme",
    hours: "~65 hrs",
    tasks: [
      "QMenu / QMenuBar with keyboard nav styling",
      "QDockWidget title bar, float/close buttons",
      "QToolBar with separator and overflow styling",
      "QSlider with custom groove and handle",
      "Lucide-based icon theme integration",
      "SVG icon pipeline (size variants: 16/20/24px)",
    ],
    color: "#8b5cf6",
  },
  {
    phase: "Phase 4",
    weeks: "Weeks 12–14",
    title: "Polish, Regression & Docs",
    hours: "~55 hrs (350 hr track)",
    tasks: [
      "P2 widgets: QSpinBox, QProgressBar, QTreeView",
      "Full visual regression screenshot suite",
      "Platform-specific tweaks (HiDPI, font metrics)",
      "UX review pass with mentor",
      "Documentation and contributor guide",
    ],
    color: "#f59e0b",
  },
];

const priorityColor = {
  P0: { bg: "#ff4d6d22", text: "#ff4d6d", border: "#ff4d6d44" },
  P1: { bg: "#f59e0b22", text: "#f59e0b", border: "#f59e0b44" },
  P2: { bg: "#3b82f622", text: "#3b82f6", border: "#3b82f644" },
};

const statusColor = {
  "In PR #3597": { bg: "#00d4aa22", text: "#00d4aa" },
  "Partial": { bg: "#f59e0b22", text: "#f59e0b" },
  "Pending": { bg: "#ffffff11", text: "#888" },
};

export default function App() {
  const [active, setActive] = useState("overview");
  const [expandedPhase, setExpandedPhase] = useState(null);

  return (
    <div style={{
      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      background: "#0a0e1a",
      color: "#c9d1e0",
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #0d1829 0%, #0a0e1a 100%)",
        borderBottom: "1px solid #1e2a3a",
        padding: "20px 32px",
        display: "flex",
        alignItems: "center",
        gap: 16,
      }}>
        <div style={{
          width: 40, height: 40,
          background: "linear-gradient(135deg, #00d4aa, #3b82f6)",
          borderRadius: 8,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 20,
        }}>⬡</div>
        <div>
          <div style={{ fontSize: 11, color: "#00d4aa", letterSpacing: 3, textTransform: "uppercase", marginBottom: 2 }}>
            GSoC · mapeditor/tiled
          </div>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#e8edf5", letterSpacing: -0.5 }}>
            New Cross-Platform Style — Architecture
          </div>
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
          {["175 hrs", "350 hrs", "Medium Difficulty"].map(tag => (
            <span key={tag} style={{
              padding: "4px 10px",
              background: "#1e2a3a",
              border: "1px solid #2a3a4a",
              borderRadius: 20,
              fontSize: 10,
              color: "#7a8ba0",
              letterSpacing: 1,
            }}>{tag}</span>
          ))}
        </div>
      </div>

      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar */}
        <div style={{
          width: 200,
          background: "#0d1829",
          borderRight: "1px solid #1e2a3a",
          padding: "24px 0",
          flexShrink: 0,
        }}>
          {sections.map(s => (
            <button key={s.id} onClick={() => setActive(s.id)} style={{
              display: "flex", alignItems: "center", gap: 10,
              width: "100%", padding: "10px 20px",
              background: active === s.id ? "#1e2a3a" : "transparent",
              border: "none",
              borderLeft: active === s.id ? "2px solid #00d4aa" : "2px solid transparent",
              color: active === s.id ? "#e8edf5" : "#5a6a7a",
              fontSize: 12, fontFamily: "inherit",
              cursor: "pointer", textAlign: "left",
              letterSpacing: 0.5,
              transition: "all 0.15s",
            }}>
              <span style={{ color: active === s.id ? "#00d4aa" : "#3a4a5a" }}>{s.icon}</span>
              {s.label}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div style={{ flex: 1, padding: "32px 40px", overflowY: "auto" }}>

          {/* OVERVIEW */}
          {active === "overview" && (
            <div>
              <SectionHeader title="Project Overview" sub="Replacing Tiled Fusion with a modern Qt style engine" />

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 32 }}>
                {[
                  { label: "Current Style", value: "Tiled Fusion", note: "Introduced in Tiled 0.17", icon: "📦" },
                  { label: "Target", value: "TiledStyle", note: "QProxyStyle subclass", icon: "🎯" },
                  { label: "Platforms", value: "Win / Mac / Linux", note: "All Qt-supported", icon: "🖥️" },
                ].map(c => (
                  <Card key={c.label}>
                    <div style={{ fontSize: 22, marginBottom: 8 }}>{c.icon}</div>
                    <div style={{ fontSize: 10, color: "#5a6a7a", letterSpacing: 2, marginBottom: 4 }}>{c.label}</div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: "#e8edf5", marginBottom: 4 }}>{c.value}</div>
                    <div style={{ fontSize: 11, color: "#4a6070" }}>{c.note}</div>
                  </Card>
                ))}
              </div>

              <Card>
                <Label>Problem Statement</Label>
                <p style={{ fontSize: 13, lineHeight: 1.8, color: "#8a9ab0", marginBottom: 0 }}>
                  Tiled Fusion has served well since 0.17 but lacks modern aesthetics, consistent cross-platform behavior,
                  and configurability for light/dark themes. The new style must address readability, spacing consistency,
                  HiDPI rendering, and a refreshed icon system — while keeping the codebase maintainable and extensible
                  for future contributors.
                </p>
              </Card>

              <div style={{ marginTop: 24 }}>
                <Card>
                  <Label>Guiding Design Principles</Label>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 12 }}>
                    {[
                      ["Pixel-Perfect Consistency", "Uniform spacing grid (4px base), sub-pixel rendering aware"],
                      ["Platform Respect", "Adapt to native idioms while maintaining Tiled's visual identity"],
                      ["Token-Driven Theming", "All colors/metrics via design tokens — no hardcoded values"],
                      ["Progressive Enhancement", "Style degrades gracefully on older Qt versions"],
                      ["Maintainability", "One style class, clearly separated per-widget draw methods"],
                      ["Testability", "Screenshot-based visual regression from day one"],
                    ].map(([t, d]) => (
                      <div key={t} style={{
                        background: "#0a0e1a",
                        border: "1px solid #1e2a3a",
                        borderRadius: 6,
                        padding: "12px 14px",
                      }}>
                        <div style={{ fontSize: 11, fontWeight: 700, color: "#00d4aa", marginBottom: 4 }}>{t}</div>
                        <div style={{ fontSize: 11, color: "#5a6a7a", lineHeight: 1.6 }}>{d}</div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>
          )}

          {/* ARCHITECTURE */}
          {active === "architecture" && (
            <div>
              <SectionHeader title="System Architecture" sub="Class hierarchy, file structure & data flow" />

              <Card>
                <Label>File Structure</Label>
                <pre style={{
                  fontSize: 11, lineHeight: 1.9, color: "#8a9ab0",
                  background: "#060910", borderRadius: 6, padding: 16, marginTop: 12,
                  overflowX: "auto",
                }}>
{`src/tiled/
├── style/
│   ├── tiledstyle.h          ← QProxyStyle subclass (main entry)
│   ├── tiledstyle.cpp        ← drawControl / drawPrimitive / drawComplexControl
│   ├── tiledstylehelper.h    ← Geometry helpers, painter utilities
│   ├── tiledstylehelper.cpp
│   ├── tiledpalette.h        ← Light + Dark palette builders
│   ├── tiledpalette.cpp
│   ├── tileddesigntokens.h   ← All spacing/radius/color tokens
│   └── tileddesigntokens.cpp
│
├── icons/
│   ├── lucide/               ← Lucide SVG sources (16/20/24px)
│   ├── tiled-icons.qrc       ← Qt resource file
│   └── iconprovider.h/cpp    ← Theme-aware icon resolution
│
└── tests/
    └── style/
        ├── stylewidgetgallery.h/cpp   ← Interactive widget gallery app
        └── screenshots/              ← Baseline + diff images (CI)`}
                </pre>
              </Card>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 16 }}>
                <Card>
                  <Label>Class Hierarchy</Label>
                  <pre style={{
                    fontSize: 11, lineHeight: 1.9, color: "#8a9ab0",
                    background: "#060910", borderRadius: 6, padding: 14, marginTop: 12,
                  }}>
{`QStyle
  └── QCommonStyle
        └── QProxyStyle
              └── TiledStyle          ← owns
                    ├── TiledPalette  ← light/dark
                    ├── TiledTokens   ← metrics/colors
                    └── IconProvider  ← SVG icons`}
                  </pre>
                </Card>

                <Card>
                  <Label>Key Qt Override Points</Label>
                  <pre style={{
                    fontSize: 11, lineHeight: 1.9, color: "#8a9ab0",
                    background: "#060910", borderRadius: 6, padding: 14, marginTop: 12,
                  }}>
{`drawControl()      ← buttons, tabs, items
drawPrimitive()    ← frames, arrows, focus
drawComplexControl()← combos, scrollbars
pixelMetric()      ← spacing/sizing
styleHint()        ← behavior flags
standardIcon()     ← icon overrides
generatedIconPixmap() ← disabled tinting`}
                  </pre>
                </Card>
              </div>

              <Card style={{ marginTop: 16 }}>
                <Label>Design Token System (C++ API)</Label>
                <pre style={{
                  fontSize: 11, lineHeight: 1.9, color: "#8a9ab0",
                  background: "#060910", borderRadius: 6, padding: 16, marginTop: 12,
                  overflowX: "auto",
                }}>
{`// tileddesigntokens.h
struct TiledTokens {
    // Spacing (4px grid)
    int spacingXS  = 4;
    int spacingSM  = 8;
    int spacingMD  = 12;
    int spacingLG  = 16;

    // Border radii
    int radiusSM   = 3;
    int radiusMD   = 5;
    int radiusLG   = 8;

    // Control heights
    int controlHeightSM = 24;
    int controlHeightMD = 28;
    int controlHeightLG = 32;

    // Animation durations (ms)
    int durationFast   = 100;
    int durationNormal = 180;

    // Resolved from palette
    QColor accent;          // primary interactive color
    QColor accentHover;
    QColor accentPressed;
    QColor surface;         // widget background
    QColor surfaceRaised;   // elevated panels
    QColor border;
    QColor borderFocus;
    QColor textPrimary;
    QColor textSecondary;
    QColor textDisabled;

    static TiledTokens forPalette(const QPalette &, bool dark);
};`}
                </pre>
              </Card>

              <Card style={{ marginTop: 16 }}>
                <Label>Platform Adaptation Layer</Label>
                <pre style={{
                  fontSize: 11, lineHeight: 1.9, color: "#8a9ab0",
                  background: "#060910", borderRadius: 6, padding: 16, marginTop: 12,
                }}>
{`// tiledstylehelper.h
namespace TiledStyleHelper {
    Platform currentPlatform();   // Windows / macOS / Linux
    qreal    devicePixelRatio();
    bool     isDarkMode();        // OS-level dark mode detection
    QFont    systemUIFont();      // Platform-native UI font
    void     paintFocusRing(QPainter*, QRect, QColor, int radius);
    void     paintShadow(QPainter*, QRect, int blur, QColor);
    QPixmap  renderSVGIcon(const QString &path, QSize, QColor tint);
}`}
                </pre>
              </Card>
            </div>
          )}

          {/* COMPONENTS */}
          {active === "components" && (
            <div>
              <SectionHeader title="Widget Coverage Plan" sub="All targeted Qt widgets with priority, status & effort" />

              <div style={{ display: "flex", gap: 10, marginBottom: 20 }}>
                {Object.entries(priorityColor).map(([p, c]) => (
                  <span key={p} style={{
                    padding: "4px 12px",
                    background: c.bg, border: `1px solid ${c.border}`,
                    borderRadius: 20, fontSize: 11, color: c.text,
                  }}>{p} — {p === "P0" ? "Must Have" : p === "P1" ? "Should Have" : "Nice to Have"}</span>
                ))}
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {componentList.map((c) => {
                  const pc = priorityColor[c.priority];
                  const sc = statusColor[c.status];
                  const effortWidth = c.effort === "Low" ? "30%" : c.effort === "Medium" ? "60%" : "90%";
                  return (
                    <div key={c.name} style={{
                      background: "#0d1829",
                      border: "1px solid #1e2a3a",
                      borderRadius: 8,
                      padding: "14px 18px",
                      display: "flex",
                      alignItems: "center",
                      gap: 16,
                    }}>
                      <span style={{
                        padding: "2px 8px",
                        background: pc.bg, border: `1px solid ${pc.border}`,
                        borderRadius: 4, fontSize: 10, color: pc.text, fontWeight: 700,
                        minWidth: 28, textAlign: "center",
                      }}>{c.priority}</span>

                      <span style={{ flex: 1, fontSize: 13, color: "#c9d1e0", fontFamily: "inherit" }}>
                        {c.name}
                      </span>

                      <span style={{
                        padding: "2px 10px",
                        background: sc.bg,
                        borderRadius: 20,
                        fontSize: 11, color: sc.text,
                        minWidth: 90, textAlign: "center",
                      }}>{c.status}</span>

                      <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 120 }}>
                        <div style={{
                          flex: 1, height: 4, background: "#1e2a3a",
                          borderRadius: 2, overflow: "hidden",
                        }}>
                          <div style={{
                            width: effortWidth, height: "100%",
                            background: c.effort === "High" ? "#ff4d6d" : c.effort === "Medium" ? "#f59e0b" : "#00d4aa",
                            borderRadius: 2,
                          }} />
                        </div>
                        <span style={{ fontSize: 10, color: "#4a5a6a", minWidth: 40 }}>{c.effort}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              <Card style={{ marginTop: 24 }}>
                <Label>Per-Widget Implementation Pattern</Label>
                <pre style={{
                  fontSize: 11, lineHeight: 1.9, color: "#8a9ab0",
                  background: "#060910", borderRadius: 6, padding: 16, marginTop: 12,
                }}>
{`// Example: QPushButton draw method (tiledstyle.cpp)
void TiledStyle::drawControl(ControlElement element,
                              const QStyleOption *option,
                              QPainter *painter,
                              const QWidget *widget) const
{
    if (element == CE_PushButtonBevel) {
        const auto *btn = qstyleoption_cast<const QStyleOptionButton*>(option);
        const bool hovered  = option->state & State_MouseOver;
        const bool pressed  = option->state & State_Sunken;
        const bool disabled = !(option->state & State_Enabled);
        const bool flat     = btn->features & QStyleOptionButton::Flat;

        const QColor bg = disabled ? m_tokens.surface.darker(105)
                        : pressed  ? m_tokens.accentPressed
                        : hovered  ? m_tokens.accentHover
                        :            m_tokens.accent;

        painter->setRenderHint(QPainter::Antialiasing);
        painter->setPen(Qt::NoPen);
        painter->setBrush(flat ? Qt::transparent : bg);
        painter->drawRoundedRect(option->rect.adjusted(1,1,-1,-1),
                                 m_tokens.radiusMD, m_tokens.radiusMD);

        if (option->state & State_HasFocus)
            TiledStyleHelper::paintFocusRing(painter, option->rect,
                                             m_tokens.borderFocus,
                                             m_tokens.radiusMD + 2);
        return;
    }
    QProxyStyle::drawControl(element, option, painter, widget);
}`}
                </pre>
              </Card>
            </div>
          )}

          {/* THEMING */}
          {active === "theming" && (
            <div>
              <SectionHeader title="Theming System" sub="Light & Dark mode with OS-level detection" />

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <Card>
                  <Label>Light Palette</Label>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>
                    {[
                      ["accent", "#2563eb", "Interactive / brand"],
                      ["accentHover", "#1d4ed8", "Hover state"],
                      ["surface", "#ffffff", "Widget background"],
                      ["surfaceRaised", "#f8fafc", "Panels/cards"],
                      ["border", "#e2e8f0", "Control border"],
                      ["borderFocus", "#2563eb", "Focus ring"],
                      ["textPrimary", "#0f172a", "Body text"],
                      ["textSecondary", "#64748b", "Labels"],
                    ].map(([name, hex, desc]) => (
                      <div key={name} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{
                          width: 24, height: 24, borderRadius: 4,
                          background: hex, border: "1px solid #2a3a4a", flexShrink: 0,
                        }} />
                        <div style={{ flex: 1 }}>
                          <span style={{ fontSize: 11, color: "#c9d1e0" }}>{name}</span>
                          <span style={{ fontSize: 10, color: "#4a5a6a", marginLeft: 8 }}>{hex}</span>
                        </div>
                        <span style={{ fontSize: 10, color: "#3a4a5a" }}>{desc}</span>
                      </div>
                    ))}
                  </div>
                </Card>

                <Card>
                  <Label>Dark Palette</Label>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>
                    {[
                      ["accent", "#3b82f6", "Interactive / brand"],
                      ["accentHover", "#60a5fa", "Hover state"],
                      ["surface", "#1e2a3a", "Widget background"],
                      ["surfaceRaised", "#162030", "Panels/cards"],
                      ["border", "#2d3f52", "Control border"],
                      ["borderFocus", "#3b82f6", "Focus ring"],
                      ["textPrimary", "#e8edf5", "Body text"],
                      ["textSecondary", "#7a8ba0", "Labels"],
                    ].map(([name, hex, desc]) => (
                      <div key={name} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                        <div style={{
                          width: 24, height: 24, borderRadius: 4,
                          background: hex, border: "1px solid #2a3a4a", flexShrink: 0,
                        }} />
                        <div style={{ flex: 1 }}>
                          <span style={{ fontSize: 11, color: "#c9d1e0" }}>{name}</span>
                          <span style={{ fontSize: 10, color: "#4a5a6a", marginLeft: 8 }}>{hex}</span>
                        </div>
                        <span style={{ fontSize: 10, color: "#3a4a5a" }}>{desc}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>

              <Card style={{ marginTop: 16 }}>
                <Label>Dark Mode Detection Strategy</Label>
                <pre style={{
                  fontSize: 11, lineHeight: 1.9, color: "#8a9ab0",
                  background: "#060910", borderRadius: 6, padding: 16, marginTop: 12,
                }}>
{`// tiledstylehelper.cpp
bool TiledStyleHelper::isDarkMode() {
#if defined(Q_OS_WIN)
    // Windows registry: AppsUseLightTheme = 0 → dark
    QSettings reg("HKEY_CURRENT_USER\\\\Software\\\\Microsoft\\\\Windows\\\\"
                  "CurrentVersion\\\\Themes\\\\Personalize",
                  QSettings::NativeFormat);
    return reg.value("AppsUseLightTheme", 1).toInt() == 0;
#elif defined(Q_OS_MACOS)
    return qt_mac_applicationIsInDarkMode();       // Qt 6.5+ helper
#else
    // Linux: check QPalette luminance as fallback
    const QColor bg = qApp->palette().color(QPalette::Window);
    return bg.lightness() < 128;
#endif
}`}
                </pre>
              </Card>

              <Card style={{ marginTop: 16 }}>
                <Label>User Configurability</Label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 12 }}>
                  {[
                    ["Follow OS Theme", "Default: auto-detect light/dark", "✓"],
                    ["Force Light / Dark", "User preference override", "✓"],
                    ["Accent Color Picker", "Tiled Preferences dialog", "✓"],
                    ["Font Size Scaling", "Via Qt's font DPI", "✓"],
                    ["Compact / Comfortable", "Control height preset switch", "optional"],
                    ["Custom QSS Override", ".qss file in config dir", "optional"],
                  ].map(([f, d, s]) => (
                    <div key={f} style={{
                      background: "#0a0e1a", border: "1px solid #1e2a3a",
                      borderRadius: 6, padding: "10px 14px",
                      display: "flex", alignItems: "flex-start", gap: 10,
                    }}>
                      <span style={{ color: s === "✓" ? "#00d4aa" : "#4a5a6a", fontSize: 14, marginTop: 1 }}>{s}</span>
                      <div>
                        <div style={{ fontSize: 11, color: "#c9d1e0", fontWeight: 600 }}>{f}</div>
                        <div style={{ fontSize: 10, color: "#4a5a6a", marginTop: 2 }}>{d}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {/* ICONS */}
          {active === "icons" && (
            <div>
              <SectionHeader title="Icon Theme Refresh" sub="Lucide-based SVG icon system" />

              <Card>
                <Label>Why Lucide?</Label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginTop: 12 }}>
                  {[
                    ["1,400+ Icons", "Comprehensive coverage of all Tiled UI needs"],
                    ["MIT Licensed", "Fully open-source, safe for inclusion"],
                    ["Consistent Design", "2px stroke, rounded caps — cohesive look"],
                    ["SVG Native", "Crisp at all DPI scales including HiDPI"],
                    ["Active Maintenance", "Regular updates and community support"],
                    ["Easy Theming", "Single color stroke — trivially tintable"],
                  ].map(([t, d]) => (
                    <div key={t} style={{
                      background: "#0a0e1a", border: "1px solid #1e2a3a",
                      borderRadius: 6, padding: "12px 14px",
                    }}>
                      <div style={{ fontSize: 11, color: "#00d4aa", fontWeight: 700, marginBottom: 4 }}>{t}</div>
                      <div style={{ fontSize: 11, color: "#4a5a6a", lineHeight: 1.6 }}>{d}</div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card style={{ marginTop: 16 }}>
                <Label>Icon Pipeline Architecture</Label>
                <pre style={{
                  fontSize: 11, lineHeight: 1.9, color: "#8a9ab0",
                  background: "#060910", borderRadius: 6, padding: 16, marginTop: 12,
                }}>
{`// IconProvider — theme-aware icon resolution
class IconProvider {
public:
    // Returns icon at correct size with correct tint for current theme
    static QIcon get(const QString &name, IconSize size = Size16);

    // Batch preload for startup performance
    static void preload(const QStringList &names);

private:
    // SVG → QPixmap render cache (keyed by name+size+color)
    static QHash<QString, QPixmap> s_cache;

    static QColor tintForCurrentTheme();
    static QPixmap renderSVG(const QString &path, QSize, QColor tint);
};

// Usage in TiledStyle::standardIcon():
QIcon TiledStyle::standardIcon(StandardPixmap sp, ...) const {
    switch (sp) {
        case SP_DialogCloseButton:
            return IconProvider::get("x");
        case SP_ArrowDown:
            return IconProvider::get("chevron-down");
        // ... etc
    }
}`}
                </pre>
              </Card>

              <Card style={{ marginTop: 16 }}>
                <Label>Icon Mapping Table (Sample)</Label>
                <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 12 }}>
                  {[
                    ["New File", "file-plus", "Toolbar"],
                    ["Open File", "folder-open", "Toolbar / Menu"],
                    ["Save", "save", "Toolbar / Menu"],
                    ["Undo / Redo", "undo-2 / redo-2", "Toolbar"],
                    ["Zoom In/Out", "zoom-in / zoom-out", "Toolbar"],
                    ["Properties", "settings-2", "Context menu"],
                    ["Layers", "layers", "Panel header"],
                    ["Objects", "shapes", "Panel header"],
                    ["Tileset", "grid-2x2", "Panel header"],
                    ["Delete", "trash-2", "Toolbar / context"],
                    ["Close", "x", "Dock widget, tabs"],
                    ["Warning", "triangle-alert", "Status bar"],
                  ].map(([action, icon, ctx]) => (
                    <div key={action} style={{
                      display: "flex", alignItems: "center", gap: 16,
                      padding: "8px 12px",
                      background: "#0a0e1a", border: "1px solid #1a2030",
                      borderRadius: 6,
                    }}>
                      <span style={{ fontSize: 12, color: "#c9d1e0", minWidth: 100 }}>{action}</span>
                      <code style={{ fontSize: 11, color: "#00d4aa", flex: 1 }}>{icon}</code>
                      <span style={{ fontSize: 10, color: "#4a5a6a" }}>{ctx}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {/* TESTING */}
          {active === "testing" && (
            <div>
              <SectionHeader title="Visual Regression System" sub="Screenshot-based CI pipeline for style validation" />

              <Card>
                <Label>Widget Gallery Application</Label>
                <p style={{ fontSize: 12, color: "#6a7a8a", lineHeight: 1.7, marginBottom: 12 }}>
                  A standalone Qt application (<code style={{ color: "#00d4aa" }}>stylewidgetgallery</code>) renders
                  every styled widget in all states (normal, hover, pressed, disabled, focused) and saves screenshots.
                  This runs in CI on all 3 platforms on every PR that touches <code style={{ color: "#00d4aa" }}>src/tiled/style/</code>.
                </p>
                <pre style={{
                  fontSize: 11, lineHeight: 1.9, color: "#8a9ab0",
                  background: "#060910", borderRadius: 6, padding: 16,
                }}>
{`// stylewidgetgallery.cpp — simplified
class StyleWidgetGallery : public QWidget {
public:
    StyleWidgetGallery() {
        auto *layout = new QGridLayout(this);
        // Render all widget variants
        layout->addWidget(makeButtonRow());
        layout->addWidget(makeTabRow());
        layout->addWidget(makeInputRow());
        layout->addWidget(makeComboRow());
        layout->addWidget(makeScrollRow());
        // ...
        setStyle(new TiledStyle());
        setPalette(TiledPalette::light());   // or dark()
    }
};

// Screenshot harness
void captureScreenshots(const QString &outDir) {
    for (const auto &theme : {"light", "dark"}) {
        StyleWidgetGallery gallery;
        gallery.setPalette(theme == "dark"
            ? TiledPalette::dark() : TiledPalette::light());
        gallery.show();
        QTest::qWaitForWindowExposed(&gallery);
        gallery.grab().save(outDir + "/" + theme + ".png");
    }
}`}
                </pre>
              </Card>

              <Card style={{ marginTop: 16 }}>
                <Label>CI Diff Workflow</Label>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>
                  {[
                    ["1", "PR opened / pushed", "GitHub Actions triggered on all 3 OS runners"],
                    ["2", "Build style gallery", "Compile stylewidgetgallery on Win/Mac/Linux"],
                    ["3", "Render screenshots", "Capture light + dark for each widget"],
                    ["4", "Pixel diff vs baseline", "pixelmatch or ImageMagick compare"],
                    ["5", "Threshold check", "Fail if diff > 0.1% of pixels"],
                    ["6", "Upload artifacts", "Side-by-side diff images attached to PR"],
                    ["7", "Reviewer approves", "Baseline updated on merge if intentional change"],
                  ].map(([n, step, detail]) => (
                    <div key={n} style={{
                      display: "flex", gap: 14, padding: "10px 14px",
                      background: "#0a0e1a", border: "1px solid #1a2030",
                      borderRadius: 6, alignItems: "flex-start",
                    }}>
                      <span style={{
                        width: 22, height: 22, borderRadius: "50%",
                        background: "#1e2a3a", border: "1px solid #2a3a4a",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 10, color: "#00d4aa", flexShrink: 0, fontWeight: 700,
                      }}>{n}</span>
                      <div>
                        <div style={{ fontSize: 12, color: "#c9d1e0", marginBottom: 2 }}>{step}</div>
                        <div style={{ fontSize: 11, color: "#4a5a6a" }}>{detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              <Card style={{ marginTop: 16 }}>
                <Label>Platform Test Matrix</Label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, marginTop: 12 }}>
                  {[
                    { os: "Windows 11", qt: "Qt 6.6", concerns: "Native title bar integration, ClearType fonts, system DPI" },
                    { os: "macOS 14", qt: "Qt 6.6", concerns: "Retina display, native dark mode, accessibility colors" },
                    { os: "Ubuntu 22.04", qt: "Qt 6.6", concerns: "GTK theme interference, Wayland vs X11, font rendering" },
                  ].map(p => (
                    <div key={p.os} style={{
                      background: "#0a0e1a", border: "1px solid #1e2a3a",
                      borderRadius: 6, padding: "14px",
                    }}>
                      <div style={{ fontSize: 13, color: "#e8edf5", fontWeight: 600, marginBottom: 4 }}>{p.os}</div>
                      <div style={{ fontSize: 10, color: "#00d4aa", marginBottom: 8 }}>{p.qt}</div>
                      <div style={{ fontSize: 10, color: "#4a5a6a", lineHeight: 1.7 }}>{p.concerns}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}

          {/* TIMELINE */}
          {active === "timeline" && (
            <div>
              <SectionHeader title="Implementation Timeline" sub="14-week plan for 350-hour track (halve for 175hr)" />

              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {timelinePhases.map((p, i) => (
                  <div key={p.phase} style={{
                    background: "#0d1829",
                    border: "1px solid #1e2a3a",
                    borderLeft: `3px solid ${p.color}`,
                    borderRadius: 8,
                    overflow: "hidden",
                  }}>
                    <button
                      onClick={() => setExpandedPhase(expandedPhase === i ? null : i)}
                      style={{
                        width: "100%", padding: "16px 20px",
                        background: "transparent", border: "none",
                        display: "flex", alignItems: "center", gap: 16,
                        cursor: "pointer", color: "inherit", fontFamily: "inherit",
                        textAlign: "left",
                      }}
                    >
                      <div style={{
                        width: 36, height: 36, borderRadius: "50%",
                        background: `${p.color}22`, border: `1px solid ${p.color}44`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 10, color: p.color, fontWeight: 700, flexShrink: 0,
                      }}>{i + 1}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 10, color: p.color, letterSpacing: 2, marginBottom: 2 }}>
                          {p.phase} · {p.weeks}
                        </div>
                        <div style={{ fontSize: 14, color: "#e8edf5", fontWeight: 600 }}>{p.title}</div>
                      </div>
                      <span style={{
                        padding: "4px 12px", background: `${p.color}22`,
                        border: `1px solid ${p.color}44`,
                        borderRadius: 20, fontSize: 11, color: p.color,
                      }}>{p.hours}</span>
                      <span style={{ color: "#4a5a6a", fontSize: 16 }}>
                        {expandedPhase === i ? "▲" : "▼"}
                      </span>
                    </button>

                    {expandedPhase === i && (
                      <div style={{ padding: "0 20px 16px 72px" }}>
                        {p.tasks.map((t, ti) => (
                          <div key={ti} style={{
                            display: "flex", alignItems: "flex-start", gap: 10,
                            padding: "6px 0",
                            borderTop: ti === 0 ? `1px solid #1e2a3a` : "none",
                          }}>
                            <span style={{ color: p.color, marginTop: 1, fontSize: 12 }}>→</span>
                            <span style={{ fontSize: 12, color: "#8a9ab0" }}>{t}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <Card style={{ marginTop: 24 }}>
                <Label>175hr vs 350hr Scope Comparison</Label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 12 }}>
                  {[
                    {
                      label: "175 Hours", color: "#00d4aa",
                      items: [
                        "All P0 widgets fully styled",
                        "Light + Dark theme",
                        "Basic screenshot tests",
                        "Platform testing on 2/3 OS",
                        "Basic Lucide icon integration",
                      ]
                    },
                    {
                      label: "350 Hours", color: "#8b5cf6",
                      items: [
                        "All P0 + P1 + P2 widgets",
                        "Full configurability system",
                        "Automated CI diff pipeline",
                        "All 3 platforms validated",
                        "Full icon theme refresh",
                        "Compact/Comfortable modes",
                        "Contributor documentation",
                        "Interactive style gallery",
                      ]
                    }
                  ].map(scope => (
                    <div key={scope.label} style={{
                      background: "#0a0e1a", border: `1px solid ${scope.color}44`,
                      borderRadius: 6, padding: "16px",
                    }}>
                      <div style={{ fontSize: 13, color: scope.color, fontWeight: 700, marginBottom: 12 }}>
                        {scope.label}
                      </div>
                      {scope.items.map(item => (
                        <div key={item} style={{
                          display: "flex", gap: 8, padding: "4px 0",
                          fontSize: 12, color: "#7a8b9a",
                        }}>
                          <span style={{ color: scope.color }}>✓</span> {item}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ title, sub }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <h2 style={{ fontSize: 20, color: "#e8edf5", margin: 0, fontWeight: 700, letterSpacing: -0.5 }}>{title}</h2>
      <p style={{ fontSize: 12, color: "#4a5a6a", margin: "4px 0 0 0" }}>{sub}</p>
    </div>
  );
}

function Label({ children }) {
  return (
    <div style={{ fontSize: 10, color: "#00d4aa", letterSpacing: 2, textTransform: "uppercase", marginBottom: 2 }}>
      {children}
    </div>
  );
}

function Card({ children, style }) {
  return (
    <div style={{
      background: "#0d1829",
      border: "1px solid #1e2a3a",
      borderRadius: 8,
      padding: "16px 20px",
      ...style,
    }}>
      {children}
    </div>
  );
}