
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#374151',
            '[class~="lead"]': {
              color: '#4b5563',
            },
            a: {
              color: '#2563eb',
              textDecoration: 'underline',
              fontWeight: '500',
            },
            strong: {
              color: '#111827',
              fontWeight: '600',
            },
            'ol[type="A"]': {
              '--list-counter-style': 'upper-alpha',
            },
            'ol[type="a"]': {
              '--list-counter-style': 'lower-alpha',
            },
            'ol[type="A" s]': {
              '--list-counter-style': 'upper-alpha',
            },
            'ol[type="a" s]': {
              '--list-counter-style': 'lower-alpha',
            },
            'ol[type="I"]': {
              '--list-counter-style': 'upper-roman',
            },
            'ol[type="i"]': {
              '--list-counter-style': 'lower-roman',
            },
            'ol[type="I" s]': {
              '--list-counter-style': 'upper-roman',
            },
            'ol[type="i" s]': {
              '--list-counter-style': 'lower-roman',
            },
            'ol[type="1"]': {
              '--list-counter-style': 'decimal',
            },
            'ol > li::marker': {
              fontWeight: '400',
              color: '#6b7280',
            },
            'ul > li::marker': {
              color: '#d1d5db',
            },
            hr: {
              borderColor: '#e5e7eb',
              borderTopWidth: 1,
              marginTop: '3em',
              marginBottom: '3em',
            },
            blockquote: {
              fontWeight: '500',
              fontStyle: 'italic',
              color: '#111827',
              borderLeftWidth: '0.25rem',
              borderLeftColor: '#e5e7eb',
              quotes: '"\\201C""\\201D""\\2018""\\2019"',
              marginTop: '1.6em',
              marginBottom: '1.6em',
              paddingLeft: '1em',
            },
            h1: {
              color: '#111827',
              fontWeight: '800',
              fontSize: '2.25em',
              marginTop: '0',
              marginBottom: '0.8888889em',
              lineHeight: '1.1111111',
            },
            h2: {
              color: '#111827',
              fontWeight: '700',
              fontSize: '1.5em',
              marginTop: '2em',
              marginBottom: '1em',
              lineHeight: '1.3333333',
            },
            h3: {
              color: '#111827',
              fontWeight: '600',
              fontSize: '1.25em',
              marginTop: '1.6em',
              marginBottom: '0.6em',
              lineHeight: '1.6',
            },
            h4: {
              color: '#111827',
              fontWeight: '600',
              marginTop: '1.5em',
              marginBottom: '0.5em',
              lineHeight: '1.5',
            },
            'figure figcaption': {
              color: '#6b7280',
              fontSize: '0.875em',
              lineHeight: '1.4285714',
              marginTop: '0.8571429em',
            },
            code: {
              color: '#111827',
              fontWeight: '600',
              fontSize: '0.875em',
            },
            'a code': {
              color: '#111827',
            },
            pre: {
              color: '#e5e7eb',
              backgroundColor: '#1f2937',
              overflowX: 'auto',
              fontWeight: '400',
              fontSize: '0.875em',
              lineHeight: '1.7142857',
              marginTop: '1.7142857em',
              marginBottom: '1.7142857em',
              borderRadius: '0.375rem',
              paddingTop: '0.8571429em',
              paddingRight: '1.1428571em',
              paddingBottom: '0.8571429em',
              paddingLeft: '1.1428571em',
            },
            'pre code': {
              backgroundColor: 'transparent',
              borderWidth: '0',
              borderRadius: '0',
              padding: '0',
              fontWeight: 'inherit',
              color: 'inherit',
              fontSize: 'inherit',
              fontFamily: 'inherit',
              lineHeight: 'inherit',
            },
            table: {
              width: '100%',
              tableLayout: 'auto',
              textAlign: 'left',
              marginTop: '2em',
              marginBottom: '2em',
              fontSize: '0.875em',
              lineHeight: '1.7142857',
            },
            thead: {
              borderBottomWidth: '1px',
              borderBottomColor: '#d1d5db',
            },
            'thead th': {
              color: '#111827',
              fontWeight: '600',
              verticalAlign: 'bottom',
              paddingRight: '0.5714286em',
              paddingBottom: '0.5714286em',
              paddingLeft: '0.5714286em',
            },
            'tbody tr': {
              borderBottomWidth: '1px',
              borderBottomColor: '#e5e7eb',
            },
            'tbody tr:last-child': {
              borderBottomWidth: '0',
            },
            'tbody td': {
              verticalAlign: 'baseline',
            },
            tfoot: {
              borderTopWidth: '1px',
              borderTopColor: '#d1d5db',
            },
            'tfoot td': {
              verticalAlign: 'top',
            },
          },
        },
        sm: {
          css: {
            fontSize: '0.875rem',
            lineHeight: '1.7142857',
            p: {
              marginTop: '1.1428571em',
              marginBottom: '1.1428571em',
            },
            '[class~="lead"]': {
              fontSize: '1.2857143em',
              lineHeight: '1.5555556',
              marginTop: '0.8888889em',
              marginBottom: '0.8888889em',
            },
            blockquote: {
              marginTop: '1.3333333em',
              marginBottom: '1.3333333em',
              paddingLeft: '1.1111111em',
            },
            h1: {
              fontSize: '2.1428571em',
              marginTop: '0',
              marginBottom: '0.8em',
              lineHeight: '1.2',
            },
            h2: {
              fontSize: '1.4285714em',
              marginTop: '1.6em',
              marginBottom: '0.8em',
              lineHeight: '1.4',
            },
            h3: {
              fontSize: '1.2857143em',
              marginTop: '1.5555556em',
              marginBottom: '0.4444444em',
              lineHeight: '1.5555556',
            },
            h4: {
              marginTop: '1.4285714em',
              marginBottom: '0.5714286em',
              lineHeight: '1.4285714',
            },
            img: {
              marginTop: '1.7142857em',
              marginBottom: '1.7142857em',
            },
            video: {
              marginTop: '1.7142857em',
              marginBottom: '1.7142857em',
            },
            figure: {
              marginTop: '1.7142857em',
              marginBottom: '1.7142857em',
            },
            'figure > *': {
              marginTop: '0',
              marginBottom: '0',
            },
            'figure figcaption': {
              fontSize: '0.8571429em',
              lineHeight: '1.3333333',
              marginTop: '0.6666667em',
            },
            code: {
              fontSize: '0.8571429em',
            },
            'h2 code': {
              fontSize: '0.9090909em',
            },
            'h3 code': {
              fontSize: '0.8888889em',
            },
            pre: {
              fontSize: '0.8571429em',
              lineHeight: '1.6666667',
              marginTop: '1.6666667em',
              marginBottom: '1.6666667em',
              borderRadius: '0.25rem',
              paddingTop: '0.6666667em',
              paddingRight: '1em',
              paddingBottom: '0.6666667em',
              paddingLeft: '1em',
            },
            ol: {
              marginTop: '1.1428571em',
              marginBottom: '1.1428571em',
            },
            ul: {
              marginTop: '1.1428571em',
              marginBottom: '1.1428571em',
            },
            li: {
              marginTop: '0.2857143em',
              marginBottom: '0.2857143em',
            },
            'ol > li': {
              paddingLeft: '1.7142857em',
            },
            'ol > li:before': {
              left: '0',
            },
            'ul > li': {
              paddingLeft: '1.7142857em',
            },
            'ul > li::marker': {
              height: '0.3571429em',
              width: '0.3571429em',
              top: 'calc(0.8571429em - 0.1785714em)',
              right: 'calc(1.7142857em - 0.1785714em)',
            },
            '> ul > li p': {
              marginTop: '0.5714286em',
              marginBottom: '0.5714286em',
            },
            '> ul > li > *:first-child': {
              marginTop: '1.1428571em',
            },
            '> ul > li > *:last-child': {
              marginBottom: '1.1428571em',
            },
            '> ol > li > *:first-child': {
              marginTop: '1.1428571em',
            },
            '> ol > li > *:last-child': {
              marginBottom: '1.1428571em',
            },
            'ul ul, ul ol, ol ul, ol ol': {
              marginTop: '0.5714286em',
              marginBottom: '0.5714286em',
            },
            hr: {
              marginTop: '2.8571429em',
              marginBottom: '2.8571429em',
            },
            'hr + *': {
              marginTop: '0',
            },
            'h2 + *': {
              marginTop: '0',
            },
            'h3 + *': {
              marginTop: '0',
            },
            'h4 + *': {
              marginTop: '0',
            },
            table: {
              fontSize: '0.8571429em',
              lineHeight: '1.5',
            },
            'thead th': {
              paddingRight: '1em',
              paddingBottom: '0.6666667em',
              paddingLeft: '1em',
            },
            'thead th:first-child': {
              paddingLeft: '0',
            },
            'thead th:last-child': {
              paddingRight: '0',
            },
            'tbody td, tfoot td': {
              paddingTop: '0.6666667em',
              paddingRight: '1em',
              paddingBottom: '0.6666667em',
              paddingLeft: '1em',
            },
            'tbody td:first-child, tfoot td:first-child': {
              paddingLeft: '0',
            },
            'tbody td:last-child, tfoot td:last-child': {
              paddingRight: '0',
            },
          },
        },
        lg: {
          css: {
            fontSize: '1.125rem',
            lineHeight: '1.7777778',
            p: {
              marginTop: '1.3333333em',
              marginBottom: '1.3333333em',
            },
            '[class~="lead"]': {
              fontSize: '1.2222222em',
              lineHeight: '1.4545455',
              marginTop: '1.0909091em',
              marginBottom: '1.0909091em',
            },
            blockquote: {
              marginTop: '1.6666667em',
              marginBottom: '1.6666667em',
              paddingLeft: '1em',
            },
            h1: {
              fontSize: '2.6666667em',
              marginTop: '0',
              marginBottom: '0.8333333em',
              lineHeight: '1',
            },
            h2: {
              fontSize: '1.6666667em',
              marginTop: '1.8666667em',
              marginBottom: '1.0666667em',
              lineHeight: '1.3333333',
            },
            h3: {
              fontSize: '1.3333333em',
              marginTop: '1.6666667em',
              marginBottom: '0.6666667em',
              lineHeight: '1.5',
            },
            h4: {
              marginTop: '1.7777778em',
              marginBottom: '0.4444444em',
              lineHeight: '1.5555556',
            },
            img: {
              marginTop: '2em',
              marginBottom: '2em',
            },
            video: {
              marginTop: '2em',
              marginBottom: '2em',
            },
            figure: {
              marginTop: '2em',
              marginBottom: '2em',
            },
            'figure > *': {
              marginTop: '0',
              marginBottom: '0',
            },
            'figure figcaption': {
              fontSize: '0.8888889em',
              lineHeight: '1.5',
              marginTop: '1em',
            },
            code: {
              fontSize: '0.8888889em',
            },
            'h2 code': {
              fontSize: '0.8666667em',
            },
            'h3 code': {
              fontSize: '0.875em',
            },
            pre: {
              fontSize: '0.8888889em',
              lineHeight: '1.75',
              marginTop: '2em',
              marginBottom: '2em',
              borderRadius: '0.375rem',
              paddingTop: '1em',
              paddingRight: '1.5em',
              paddingBottom: '1em',
              paddingLeft: '1.5em',
            },
            ol: {
              marginTop: '1.3333333em',
              marginBottom: '1.3333333em',
            },
            ul: {
              marginTop: '1.3333333em',
              marginBottom: '1.3333333em',
            },
            li: {
              marginTop: '0.6666667em',
              marginBottom: '0.6666667em',
            },
            'ol > li': {
              paddingLeft: '1.6666667em',
            },
            'ol > li:before': {
              left: '0',
            },
            'ul > li': {
              paddingLeft: '1.6666667em',
            },
            'ul > li::marker': {
              width: '0.3333333em',
              height: '0.3333333em',
              top: 'calc(0.8888889em - 0.1666667em)',
              left: 'calc(1.6666667em - 0.1666667em)',
            },
            '> ul > li p': {
              marginTop: '0.8888889em',
              marginBottom: '0.8888889em',
            },
            '> ul > li > *:first-child': {
              marginTop: '1.3333333em',
            },
            '> ul > li > *:last-child': {
              marginBottom: '1.3333333em',
            },
            '> ol > li > *:first-child': {
              marginTop: '1.3333333em',
            },
            '> ol > li > *:last-child': {
              marginBottom: '1.3333333em',
            },
            'ul ul, ul ol, ol ul, ol ol': {
              marginTop: '0.8888889em',
              marginBottom: '0.8888889em',
            },
            hr: {
              marginTop: '3.1111111em',
              marginBottom: '3.1111111em',
            },
            'hr + *': {
              marginTop: '0',
            },
            'h2 + *': {
              marginTop: '0',
            },
            'h3 + *': {
              marginTop: '0',
            },
            'h4 + *': {
              marginTop: '0',
            },
            table: {
              fontSize: '0.8888889em',
              lineHeight: '1.5',
            },
            'thead th': {
              paddingRight: '0.75em',
              paddingBottom: '0.75em',
              paddingLeft: '0.75em',
            },
            'thead th:first-child': {
              paddingLeft: '0',
            },
            'thead th:last-child': {
              paddingRight: '0',
            },
            'tbody td, tfoot td': {
              paddingTop: '0.75em',
              paddingRight: '0.75em',
              paddingBottom: '0.75em',
              paddingLeft: '0.75em',
            },
            'tbody td:first-child, tfoot td:first-child': {
              paddingLeft: '0',
            },
            'tbody td:last-child, tfoot td:last-child': {
              paddingRight: '0',
            },
          },
        },
        xl: {
          css: {
            fontSize: '1.25rem',
            lineHeight: '1.8',
            p: {
              marginTop: '1.2em',
              marginBottom: '1.2em',
            },
            '[class~="lead"]': {
              fontSize: '1.2em',
              lineHeight: '1.5',
              marginTop: '1em',
              marginBottom: '1em',
            },
            blockquote: {
              marginTop: '1.6em',
              marginBottom: '1.6em',
              paddingLeft: '1.0666667em',
            },
            h1: {
              fontSize: '2.8em',
              marginTop: '0',
              marginBottom: '0.8571429em',
              lineHeight: '1',
            },
            h2: {
              fontSize: '1.8em',
              marginTop: '1.5555556em',
              marginBottom: '0.8888889em',
              lineHeight: '1.1111111',
            },
            h3: {
              fontSize: '1.5em',
              marginTop: '1.6em',
              marginBottom: '0.6666667em',
              lineHeight: '1.3333333',
            },
            h4: {
              marginTop: '1.8em',
              marginBottom: '0.6em',
              lineHeight: '1.6',
            },
            img: {
              marginTop: '2em',
              marginBottom: '2em',
            },
            video: {
              marginTop: '2em',
              marginBottom: '2em',
            },
            figure: {
              marginTop: '2em',
              marginBottom: '2em',
            },
            'figure > *': {
              marginTop: '0',
              marginBottom: '0',
            },
            'figure figcaption': {
              fontSize: '0.9em',
              lineHeight: '1.5555556',
              marginTop: '1em',
            },
            code: {
              fontSize: '0.9em',
            },
            'h2 code': {
              fontSize: '0.8611111em',
            },
            'h3 code': {
              fontSize: '0.9em',
            },
            pre: {
              fontSize: '0.9em',
              lineHeight: '1.7777778',
              marginTop: '2em',
              marginBottom: '2em',
              borderRadius: '0.5rem',
              paddingTop: '1.1111111em',
              paddingRight: '1.3333333em',
              paddingBottom: '1.1111111em',
              paddingLeft: '1.3333333em',
            },
            ol: {
              marginTop: '1.2em',
              marginBottom: '1.2em',
            },
            ul: {
              marginTop: '1.2em',
              marginBottom: '1.2em',
            },
            li: {
              marginTop: '0.6em',
              marginBottom: '0.6em',
            },
            'ol > li': {
              paddingLeft: '1.8em',
            },
            'ol > li:before': {
              left: '0',
            },
            'ul > li': {
              paddingLeft: '1.8em',
            },
            'ul > li::marker': {
              width: '0.35em',
              height: '0.35em',
              top: 'calc(0.9em - 0.175em)',
              left: 'calc(1.8em - 0.175em)',
            },
            '> ul > li p': {
              marginTop: '0.8em',
              marginBottom: '0.8em',
            },
            '> ul > li > *:first-child': {
              marginTop: '1.2em',
            },
            '> ul > li > *:last-child': {
              marginBottom: '1.2em',
            },
            '> ol > li > *:first-child': {
              marginTop: '1.2em',
            },
            '> ol > li > *:last-child': {
              marginBottom: '1.2em',
            },
            'ul ul, ul ol, ol ul, ol ol': {
              marginTop: '0.8em',
              marginBottom: '0.8em',
            },
            hr: {
              marginTop: '2.8em',
              marginBottom: '2.8em',
            },
            'hr + *': {
              marginTop: '0',
            },
            'h2 + *': {
              marginTop: '0',
            },
            'h3 + *': {
              marginTop: '0',
            },
            'h4 + *': {
              marginTop: '0',
            },
            table: {
              fontSize: '0.9em',
              lineHeight: '1.5555556',
            },
            'thead th': {
              paddingRight: '0.6666667em',
              paddingBottom: '0.8888889em',
              paddingLeft: '0.6666667em',
            },
            'thead th:first-child': {
              paddingLeft: '0',
            },
            'thead th:last-child': {
              paddingRight: '0',
            },
            'tbody td, tfoot td': {
              paddingTop: '0.8888889em',
              paddingRight: '0.6666667em',
              paddingBottom: '0.8888889em',
              paddingLeft: '0.6666667em',
            },
            'tbody td:first-child, tfoot td:first-child': {
              paddingLeft: '0',
            },
            'tbody td:last-child, tfoot td:last-child': {
              paddingRight: '0',
            },
          },
        },
        '2xl': {
          css: {
            fontSize: '1.5rem',
            lineHeight: '1.6666667',
            p: {
              marginTop: '1.3333333em',
              marginBottom: '1.3333333em',
            },
            '[class~="lead"]': {
              fontSize: '1.25em',
              lineHeight: '1.4666667',
              marginTop: '1.0666667em',
              marginBottom: '1.0666667em',
            },
            blockquote: {
              marginTop: '1.7777778em',
              marginBottom: '1.7777778em',
              paddingLeft: '1.1111111em',
            },
            h1: {
              fontSize: '2.6666667em',
              marginTop: '0',
              marginBottom: '0.875em',
              lineHeight: '1',
            },
            h2: {
              fontSize: '2em',
              marginTop: '1.5em',
              marginBottom: '0.8333333em',
              lineHeight: '1.0833333',
            },
            h3: {
              fontSize: '1.5em',
              marginTop: '1.5555556em',
              marginBottom: '0.6666667em',
              lineHeight: '1.2222222',
            },
            h4: {
              marginTop: '1.6666667em',
              marginBottom: '0.6666667em',
              lineHeight: '1.5',
            },
            img: {
              marginTop: '2em',
              marginBottom: '2em',
            },
            video: {
              marginTop: '2em',
              marginBottom: '2em',
            },
            figure: {
              marginTop: '2em',
              marginBottom: '2em',
            },
            'figure > *': {
              marginTop: '0',
              marginBottom: '0',
            },
            'figure figcaption': {
              fontSize: '0.8333333em',
              lineHeight: '1.6',
              marginTop: '1em',
            },
            code: {
              fontSize: '0.8333333em',
            },
            'h2 code': {
              fontSize: '0.875em',
            },
            'h3 code': {
              fontSize: '0.8888889em',
            },
            pre: {
              fontSize: '0.8333333em',
              lineHeight: '1.8',
              marginTop: '2em',
              marginBottom: '2em',
              borderRadius: '0.5rem',
              paddingTop: '1.2em',
              paddingRight: '1.6em',
              paddingBottom: '1.2em',
              paddingLeft: '1.6em',
            },
            ol: {
              marginTop: '1.3333333em',
              marginBottom: '1.3333333em',
            },
            ul: {
              marginTop: '1.3333333em',
              marginBottom: '1.3333333em',
            },
            li: {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
            'ol > li': {
              paddingLeft: '1.6666667em',
            },
            'ol > li:before': {
              left: '0',
            },
            'ul > li': {
              paddingLeft: '1.6666667em',
            },
            'ul > li::marker': {
              width: '0.3333333em',
              height: '0.3333333em',
              top: 'calc(0.8333333em - 0.1666667em)',
              left: 'calc(1.6666667em - 0.1666667em)',
            },
            '> ul > li p': {
              marginTop: '0.8333333em',
              marginBottom: '0.8333333em',
            },
            '> ul > li > *:first-child': {
              marginTop: '1.3333333em',
            },
            '> ul > li > *:last-child': {
              marginBottom: '1.3333333em',
            },
            '> ol > li > *:first-child': {
              marginTop: '1.3333333em',
            },
            '> ol > li > *:last-child': {
              marginBottom: '1.3333333em',
            },
            'ul ul, ul ol, ol ul, ol ol': {
              marginTop: '0.6666667em',
              marginBottom: '0.6666667em',
            },
            hr: {
              marginTop: '3em',
              marginBottom: '3em',
            },
            'hr + *': {
              marginTop: '0',
            },
            'h2 + *': {
              marginTop: '0',
            },
            'h3 + *': {
              marginTop: '0',
            },
            'h4 + *': {
              marginTop: '0',
            },
            table: {
              fontSize: '0.8333333em',
              lineHeight: '1.4',
            },
            'thead th': {
              paddingRight: '0.6em',
              paddingBottom: '0.8em',
              paddingLeft: '0.6em',
            },
            'thead th:first-child': {
              paddingLeft: '0',
            },
            'thead th:last-child': {
              paddingRight: '0',
            },
            'tbody td, tfoot td': {
              paddingTop: '0.8em',
              paddingRight: '0.6em',
              paddingBottom: '0.8em',
              paddingLeft: '0.6em',
            },
            'tbody td:first-child, tfoot td:first-child': {
              paddingLeft: '0',
            },
            'tbody td:last-child, tfoot td:last-child': {
              paddingRight: '0',
            },
          },
        },
      },
    },
  },
  plugins: [

  ],
}