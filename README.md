# Solar Flow

**Languages:** [English](README.md) | [Nederlands](README.nl.md)

Make solar production useful in your Flows. Compare generated and exported power, estimate self-consumption, and translate daily production into potential energy savings. Connect your existing Homey sensor tags; calculations run locally.

## What is included

- Bilingual Homey Flow actions, result tags, and conditions.
- Local calculations; no external services, API credentials, or account linking.
- Input validation and tests for edge cases and units.
- App Store images, localized listing text, MIT license, and CI validation.

## Use in a Flow

Add an action to calculate a value, then use its output tag in a later Advanced Flow card. Condition cards let you compare readings against thresholds. Number arguments accept tags from supported Homey devices, so you can connect the sensors and meters already in your home.

## Install and test

Install Node.js 24 or newer and the [Homey CLI](https://apps.developer.homey.app/the-basics/getting-started). Run `npm test` for the calculation tests, then `homey app build` and `homey app validate --level publish` to check the Homey package. Use `homey app install` to install a test build on a Homey Pro linked to your developer account.

## Store release

This repository is prepared for Homey Apps SDK v3 and includes a Homey App Store image set, English and Dutch App Store texts, and an automated `publish`-level validation workflow. A developer must still link their Athom account, test the app on their own Homey, and submit it for Athom certification. Approval and store publication are decided by Athom.

## Scope and accuracy

This app processes values supplied by your Flow. It does not discover sensors, keep an automatic history, change device settings, or guarantee safety, savings, or equipment performance. Check the help text on each card and verify the units of your Homey sensor tags.

## License

MIT. See [LICENSE](LICENSE).
