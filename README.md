# CDC File Naming Convention Assistant

A web-based tool to help standardize file naming for CDC documents. This tool helps generate consistent filenames for:
- Discovery Requests
- Investigation Requests
- Immigration Consultations
- Motions (Serna, 1538, Williams Brief, DA Opposition)

## Usage

Visit [https://your-github-username.github.io/cdc-naming-conventions/](https://your-github-username.github.io/cdc-naming-conventions/)

1. Select your document type
2. Fill in the required fields:
  - Client name
  - Request number (for non-motion documents)
  - Version
3. Copy the generated filename

## Naming Convention Examples

Discovery/Investigation Requests:
- `Investig Req #1 Jones v2`
- `Specific Disco Req #2 Jones v3`
- `Specific Disco Req #2 Jones Final`

Motions:
- `Serna Brf Jones v1`
- `1538 Reply Jones v2`
- `Wms Brf Jones Final`

## Development

To run this project locally:

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
