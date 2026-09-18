// ─────────────────────────────
// STRIDE
// ─────────────────────────────
import strideRender from "@/assets/stride-render.svg";
import strideFOG from "@/assets/stride-fog.jpg";
import strideUsers from "@/assets/stride-users.svg";
import strideUXMap from "@/assets/stride-uxmap.svg";
import strideIdeation from "@/assets/stride-ideation.svg";
import strideInitialThoughts from "@/assets/stride-initialthoughts.svg";
import strideHandleV1 from "@/assets/stride-handle-v1.png";
import strideHandleV2 from "@/assets/stride-handle-v2.png";
import strideHandleV3 from "@/assets/stride-handle-v3.png";
import strideHousingV1 from "@/assets/stride-housing-v1.png";
import strideHousingV2 from "@/assets/stride-housing-v2.png";
import strideBaseV1 from "@/assets/stride-base-v1.png";
import strideBaseV2 from "@/assets/stride-base-v2.png";
import strideBaseV3 from "@/assets/stride-base-v3.png";
import strideFritzing from "@/assets/stride-fritzing.jpeg";
import strideFinalHandle from "@/assets/stride-finalhandle.svg";
import strideCMF from "@/assets/stride-cmf.svg";
import stridePackaging from "@/assets/stride-packaging.svg";
import strideUserGuide from "@/assets/stride-userguide.svg";
import strideSensor from "@/assets/stride-sensor.svg";
import strideExploded from "@/assets/stride-exploded.svg";
import strideBenjamin from "@/assets/stride-benjamin.svg";
import strideEdith from "@/assets/stride-edith.svg";
import stridePatricia from "@/assets/stride-patricia.svg";

// ─────────────────────────────
// MONOPOLY
// ─────────────────────────────
import monopolyRender from "@/assets/monopoly-render.png";
import monopolyProperties from "@/assets/monopoly-properties.png";
import codingUrl from "@/assets/coding.png";
import logicUrl from "@/assets/logic.png";
import accessibilityUrl from "@/assets/accessibility.png";
import monopolyPopup from "@/assets/monopoly-popup.svg";
import monopolyAccessibility from "@/assets/monopoly-accessibility.jpg";
import monopolyNoEnd from "@/assets/monopoly-noend.png";

export const Assets = {
  stride: {
    render: strideRender,
    fog: strideFOG,
    users: strideUsers,
    uxMap: strideUXMap,
    ideation: strideIdeation,
    initialThoughts: strideInitialThoughts,

    handle: {
      v1: strideHandleV1,
      v2: strideHandleV2,
      v3: strideHandleV3,
    },

    housing: {
      v1: strideHousingV1,
      v2: strideHousingV2,
    },

    base: {
      v1: strideBaseV1,
      v2: strideBaseV2,
      v3: strideBaseV3,
    },

    fritzing: strideFritzing,

    finalHandle: strideFinalHandle,
    cmf: strideCMF,
    packaging: stridePackaging,
    userGuide: strideUserGuide,
    sensor: strideSensor,
    exploded: strideExploded,

    personas: {
      benjamin: strideBenjamin,
      edith: strideEdith,
      patricia: stridePatricia,
    },
  },

  monopoly: {
    render: monopolyRender,
    properties: monopolyProperties,
    coding: codingUrl, //TODO move to icons
    logic: logicUrl, //TODO move to icons
    accessibilityIcon: accessibilityUrl, //TODO move to icons
    popup: monopolyPopup,
    accessibility: monopolyAccessibility,
    noEnd: monopolyNoEnd
  }
};