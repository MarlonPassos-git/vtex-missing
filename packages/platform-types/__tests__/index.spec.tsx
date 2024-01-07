import React from 'react';
import { testType } from './test-utils';
import { StorefrontFunctionComponent, MasterDataV2Schema } from "../src"

// @dts-jest:group Alert
{
  // @dts-jest:pass:snap
  testType<StorefrontFunctionComponent>(() => <div>children</div>);
}

// @dts-jest:group Dropdown
{
  // @dts-jest:pass:snap
  testType<MasterDataV2Schema>({
    title: "Basic information of SKU",
    properties: {
      "name": { "type": "string" }
    },
    required: ["name"]
  });
}

