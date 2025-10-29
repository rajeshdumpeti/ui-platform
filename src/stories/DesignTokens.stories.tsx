import type { Meta, StoryObj } from "@storybook/react";
import {
  colors,
  typography,
  spacing,
  borders,
  zIndex,
  breakpoints,
  animations,
} from "../tokens";
import { mediaQueries } from "../tokens";

const meta: Meta = {
  title: "Design System/Tokens",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

// Color Tokens Story
export const Colors: StoryObj = {
  render: () => (
    <div className="p-8 space-y-8">
      <h1 className="text-display-large text-neutral-900">Color System</h1>

      {/* Brand Colors */}
      <section>
        <h2 className="text-heading-large mb-6">Brand Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Primary Colors */}
          <div>
            <h3 className="text-heading-small mb-4">Primary</h3>
            <div className="space-y-2">
              {Object.entries(colors.brand.primary).map(([key, value]) => (
                <div key={key} className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded-lg border border-neutral-200"
                    style={{ backgroundColor: value }}
                  />
                  <div>
                    <p className="text-body-medium font-medium">
                      primary-{key}
                    </p>
                    <p className="text-caption text-neutral-600">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Colors */}
          <div>
            <h3 className="text-heading-small mb-4">Secondary</h3>
            <div className="space-y-2">
              {Object.entries(colors.brand.secondary).map(([key, value]) => (
                <div key={key} className="flex items-center gap-4">
                  <div
                    className="w-16 h-16 rounded-lg border border-neutral-200"
                    style={{ backgroundColor: value }}
                  />
                  <div>
                    <p className="text-body-medium font-medium">
                      secondary-{key}
                    </p>
                    <p className="text-caption text-neutral-600">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Semantic Colors */}
      <section>
        <h2 className="text-heading-large mb-6">Semantic Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {Object.entries(colors.semantic).map(([category, scale]) => (
            <div key={category}>
              <h3 className="text-heading-small mb-4 capitalize">{category}</h3>
              <div className="space-y-2">
                {Object.entries(scale)
                  .slice(-3)
                  .map(([key, value]) => (
                    <div key={key} className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded border border-neutral-200"
                        style={{ backgroundColor: value }}
                      />
                      <div>
                        <p className="text-body-small font-medium">
                          {category}-{key}
                        </p>
                        <p className="text-caption text-neutral-600">{value}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
};

// Typography Tokens Story
export const Typography: StoryObj = {
  render: () => (
    <div className="p-8 space-y-8">
      <h1 className="text-display-large text-neutral-900">Typography Scale</h1>

      {/* Font Families */}
      <section>
        <h2 className="text-heading-large mb-6">Font Families</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(typography.fontFamily).map(([name, fonts]) => (
            <div key={name} className="p-4 border rounded-lg">
              <h3 className="text-heading-small mb-2 capitalize">{name}</h3>
              <p
                className="text-body-small text-neutral-600"
                style={{ fontFamily: fonts[0] }}
              >
                {fonts.join(", ")}
              </p>
              <p
                className={`text-body-large mt-4`}
                style={{ fontFamily: fonts[0] }}
              >
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Font Sizes */}
      <section>
        <h2 className="text-heading-large mb-6">Font Sizes</h2>
        <div className="space-y-4">
          {Object.entries(typography.fontSize).map(([name, size]) => (
            <div key={name} className="border-b pb-4">
              <p className="text-caption text-neutral-600 mb-1">text-{name}</p>
              <p
                style={{
                  fontSize: size,
                  lineHeight: typography.lineHeight.normal,
                }}
              >
                The quick brown fox jumps over the lazy dog ({size})
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Font Weights */}
      <section>
        <h2 className="text-heading-large mb-6">Font Weights</h2>
        <div className="space-y-3">
          {Object.entries(typography.fontWeight).map(([name, weight]) => (
            <div key={name}>
              <p
                className="text-body-medium capitalize"
                style={{ fontWeight: weight }}
              >
                {name} - {weight} - The quick brown fox jumps over the lazy dog
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
};

// Spacing Tokens Story
export const Spacing: StoryObj = {
  render: () => (
    <div className="p-8 space-y-8">
      <h1 className="text-display-large text-neutral-900">Spacing Scale</h1>

      <div className="space-y-6">
        {Object.entries(spacing).map(([scale, value]) => (
          <div key={scale} className="flex items-center gap-6">
            <div className="w-20 text-body-medium font-medium">
              spacing-{scale}
            </div>
            <div className="w-20 text-caption text-neutral-600">{value}</div>
            <div
              className="h-8 bg-primary-500 rounded"
              style={{ width: value }}
            />
          </div>
        ))}
      </div>
    </div>
  ),
};

// Border & Shadow Tokens Story
export const BordersAndShadows: StoryObj = {
  render: () => (
    <div className="p-8 space-y-8">
      <h1 className="text-display-large text-neutral-900">Borders & Shadows</h1>

      {/* Border Radius */}
      <section>
        <h2 className="text-heading-large mb-6">Border Radius</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {Object.entries(borders.radius).map(([name, radius]) => (
            <div key={name} className="text-center">
              <div
                className="w-20 h-20 mx-auto mb-2 bg-primary-500"
                style={{ borderRadius: radius }}
              />
              <p className="text-body-small font-medium">rounded-{name}</p>
              <p className="text-caption text-neutral-600">{radius}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Shadows */}
      <section>
        <h2 className="text-heading-large mb-6">Shadows</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(borders.shadows).map(([name, shadow]) => (
            <div key={name} className="p-6 bg-white rounded-lg text-center">
              <div
                className="w-32 h-32 mx-auto mb-4 bg-white rounded-lg"
                style={{ boxShadow: shadow }}
              />
              <p className="text-body-medium font-medium">shadow-{name}</p>
              <p className="text-caption text-neutral-600 mt-2">{shadow}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
};

// Z-Index Tokens Story
export const ZIndex: StoryObj = {
  render: () => (
    <div className="p-8 space-y-8">
      <h1 className="text-display-large text-neutral-900">Z-Index Scale</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(zIndex).map(([name, value]) => (
          <div key={name} className="p-4 border rounded-lg text-center">
            <div className="text-display-medium text-primary-600 font-bold">
              {value}
            </div>
            <p className="text-body-medium font-medium mt-2">z-{name}</p>
            <p className="text-caption text-neutral-600 capitalize">
              {name.replace(/([A-Z])/g, " $1").toLowerCase()}
            </p>
          </div>
        ))}
      </div>
    </div>
  ),
};

// Breakpoints Tokens Story
export const Breakpoints: StoryObj = {
  render: () => (
    <div className="p-8 space-y-8">
      <h1 className="text-display-large text-neutral-900">Breakpoints</h1>

      <div className="space-y-4">
        {Object.entries(breakpoints).map(([name, value]) => (
          <div
            key={name}
            className="flex items-center justify-between p-4 border rounded-lg"
          >
            <div>
              <p className="text-body-large font-medium">breakpoint-{name}</p>
              <p className="text-caption text-neutral-600">
                {mediaQueries[name as keyof typeof mediaQueries]}
              </p>
            </div>
            <div className="text-body-large font-semibold text-primary-600">
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
};

// Animation Tokens Story
export const Animations: StoryObj = {
  render: () => (
    <div className="p-8 space-y-8">
      <h1 className="text-display-large text-neutral-900">
        Animations & Transitions
      </h1>

      {/* Durations */}
      <section>
        <h2 className="text-heading-large mb-6">Durations</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(animations.duration).map(([name, duration]) => (
            <div key={name} className="p-4 border rounded-lg text-center">
              <div
                className="w-16 h-16 mx-auto mb-2 bg-primary-500 rounded-full animate-pulse"
                style={{ animationDuration: duration }}
              />
              <p className="text-body-small font-medium">duration-{name}</p>
              <p className="text-caption text-neutral-600">{duration}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Easing Functions */}
      <section>
        <h2 className="text-heading-large mb-6">Easing Functions</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {Object.entries(animations.easing).map(([name, easing]) => (
            <div key={name} className="p-4 border rounded-lg text-center">
              <div
                className="w-16 h-16 mx-auto mb-2 bg-gradient-primary rounded-lg transition-transform hover:scale-110"
                style={{ transitionTimingFunction: easing }}
              />
              <p className="text-body-small font-medium">ease-{name}</p>
              <p className="text-caption text-neutral-600">{easing}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  ),
};
