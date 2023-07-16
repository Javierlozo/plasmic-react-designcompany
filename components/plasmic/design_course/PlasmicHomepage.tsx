// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: tDjtrzzZWsZ9KMtCu27ZC9
// Component: Ijoy0b_Xmc

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Navbar from "../../Navbar"; // plasmic-import: IzCzcwrfjf/component

import { useScreenVariants as useScreenVariantswjGmM7AF85Z } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: wjGmM7aF85Z/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_design_course.module.css"; // plasmic-import: tDjtrzzZWsZ9KMtCu27ZC9/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: Ijoy0b_Xmc/css

import VectorIcon from "./icons/PlasmicIcon__Vector"; // plasmic-import: UA-TyLtClo/icon
import Vector1Icon from "./icons/PlasmicIcon__Vector1"; // plasmic-import: 7O8tlaBSjx/icon

createPlasmicElementProxy;

export type PlasmicHomepage__VariantMembers = {};
export type PlasmicHomepage__VariantsArgs = {};
type VariantPropType = keyof PlasmicHomepage__VariantsArgs;
export const PlasmicHomepage__VariantProps = new Array<VariantPropType>();

export type PlasmicHomepage__ArgsType = {};
type ArgPropType = keyof PlasmicHomepage__ArgsType;
export const PlasmicHomepage__ArgProps = new Array<ArgPropType>();

export type PlasmicHomepage__OverridesType = {
  root?: p.Flex<"div">;
  homePage?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  navbar?: p.Flex<typeof Navbar>;
  frame2?: p.Flex<"div">;
  frame3?: p.Flex<"div">;
  frame4?: p.Flex<"div">;
  streamlineIconOfficeBuilding400X4001?: p.Flex<"div">;
  rectangle1?: p.Flex<"div">;
  rectangle2?: p.Flex<"div">;
  frame5?: p.Flex<"div">;
  garySimon?: p.Flex<"div">;
  frame6?: p.Flex<"div">;
  janeDoe?: p.Flex<"div">;
};

export interface DefaultHomepageProps {}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicHomepage__RenderFunc(props: {
  variants: PlasmicHomepage__VariantsArgs;
  args: PlasmicHomepage__ArgsType;
  overrides: PlasmicHomepage__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantswjGmM7AF85Z()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          {(
            hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
          ) ? (
            <div
              data-plasmic-name={"homePage"}
              data-plasmic-override={overrides.homePage}
              className={classNames(projectcss.all, sty.homePage)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__z1CkX
                )}
              >
                {"DesignCourse"}
              </div>
              {true ? (
                <div
                  data-plasmic-name={"freeBox"}
                  data-plasmic-override={overrides.freeBox}
                  className={classNames(projectcss.all, sty.freeBox)}
                >
                  <Navbar
                    data-plasmic-name={"navbar"}
                    data-plasmic-override={overrides.navbar}
                    className={classNames("__wab_instance", sty.navbar)}
                  />
                </div>
              ) : null}
              <p.Stack
                as={"div"}
                data-plasmic-name={"frame2"}
                data-plasmic-override={overrides.frame2}
                hasGap={true}
                className={classNames(projectcss.all, sty.frame2)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__pqtdy
                  )}
                >
                  {"Get a Quote"}
                </div>
              </p.Stack>
              <p.Stack
                as={"div"}
                data-plasmic-name={"frame3"}
                data-plasmic-override={overrides.frame3}
                hasGap={true}
                className={classNames(projectcss.all, sty.frame3)}
              >
                <p.Stack
                  as={"div"}
                  data-plasmic-name={"frame4"}
                  data-plasmic-override={overrides.frame4}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.frame4)}
                  onClick={async event => {
                    const $steps = {};
                    $steps["goToOurWork"] = true
                      ? (() => {
                          const actionArgs = {
                            destination: __wrapUserFunction(
                              {
                                type: "InteractionArgLoc",
                                actionName: "navigation",
                                interactionUuid: "lhgbygpSI",
                                componentUuid: "Ijoy0b_Xmc",
                                argName: "destination"
                              },
                              () => `/our-work`
                            )
                          };
                          return __wrapUserFunction(
                            {
                              type: "InteractionLoc",
                              actionName: "navigation",
                              interactionUuid: "lhgbygpSI",
                              componentUuid: "Ijoy0b_Xmc"
                            },
                            () =>
                              (({ destination }) => {
                                __nextRouter?.push(destination);
                              })?.apply(null, [actionArgs]),
                            actionArgs
                          );
                        })()
                      : undefined;
                    if (
                      typeof $steps["goToOurWork"] === "object" &&
                      typeof $steps["goToOurWork"].then === "function"
                    ) {
                      $steps["goToOurWork"] = await __wrapUserPromise(
                        {
                          type: "InteractionLoc",
                          actionName: "navigation",
                          interactionUuid: "lhgbygpSI",
                          componentUuid: "Ijoy0b_Xmc"
                        },
                        $steps["goToOurWork"]
                      );
                    }
                  }}
                >
                  <VectorIcon
                    className={classNames(projectcss.all, sty.svg__hNvl)}
                    role={"img"}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__kgO2V
                    )}
                  >
                    {"Our Work"}
                  </div>
                </p.Stack>
              </p.Stack>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__dtUop
                )}
              >
                {"We make your business look great"}
              </div>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__qdp67
                )}
              >
                {"Award winning design"}
              </div>
              <Vector1Icon
                className={classNames(projectcss.all, sty.svg__fuJM)}
                role={"img"}
              />

              <div
                data-plasmic-name={"streamlineIconOfficeBuilding400X4001"}
                data-plasmic-override={
                  overrides.streamlineIconOfficeBuilding400X4001
                }
                className={classNames(
                  projectcss.all,
                  sty.streamlineIconOfficeBuilding400X4001
                )}
              />

              <div
                data-plasmic-name={"rectangle1"}
                data-plasmic-override={overrides.rectangle1}
                className={classNames(projectcss.all, sty.rectangle1)}
              />

              <div
                data-plasmic-name={"rectangle2"}
                data-plasmic-override={overrides.rectangle2}
                className={classNames(projectcss.all, sty.rectangle2)}
              />

              <p.Stack
                as={"div"}
                data-plasmic-name={"frame5"}
                data-plasmic-override={overrides.frame5}
                hasGap={true}
                className={classNames(projectcss.all, sty.frame5)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__lCyM1)}
                  displayHeight={"15px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"247px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/design_course/images/frame8.svg",
                    fullWidth: 247,
                    fullHeight: 15,
                    aspectRatio: 1.668919
                  }}
                />

                <div
                  data-plasmic-name={"garySimon"}
                  data-plasmic-override={overrides.garySimon}
                  className={classNames(projectcss.all, sty.garySimon)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__pKTiL
                    )}
                  >
                    {"gary simon"}
                  </div>
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__x61Le
                  )}
                >
                  {"Award winning UI/UX designer and educator"}
                </div>
              </p.Stack>
              <p.Stack
                as={"div"}
                data-plasmic-name={"frame6"}
                data-plasmic-override={overrides.frame6}
                hasGap={true}
                className={classNames(projectcss.all, sty.frame6)}
              >
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img___0RkCd)}
                  displayHeight={"15px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"247px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/design_course/images/frame9.svg",
                    fullWidth: 247,
                    fullHeight: 15,
                    aspectRatio: 1.668919
                  }}
                />

                <div
                  data-plasmic-name={"janeDoe"}
                  data-plasmic-override={overrides.janeDoe}
                  className={classNames(projectcss.all, sty.janeDoe)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__tH2Hd
                    )}
                  >
                    {"Jane Doe"}
                  </div>
                </div>
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__vGb8
                  )}
                >
                  {"Award winning UI/UX designer and educator"}
                </div>
              </p.Stack>
            </div>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "homePage",
    "freeBox",
    "navbar",
    "frame2",
    "frame3",
    "frame4",
    "streamlineIconOfficeBuilding400X4001",
    "rectangle1",
    "rectangle2",
    "frame5",
    "garySimon",
    "frame6",
    "janeDoe"
  ],
  homePage: [
    "homePage",
    "freeBox",
    "navbar",
    "frame2",
    "frame3",
    "frame4",
    "streamlineIconOfficeBuilding400X4001",
    "rectangle1",
    "rectangle2",
    "frame5",
    "garySimon",
    "frame6",
    "janeDoe"
  ],
  freeBox: ["freeBox", "navbar"],
  navbar: ["navbar"],
  frame2: ["frame2"],
  frame3: ["frame3", "frame4"],
  frame4: ["frame4"],
  streamlineIconOfficeBuilding400X4001: [
    "streamlineIconOfficeBuilding400X4001"
  ],
  rectangle1: ["rectangle1"],
  rectangle2: ["rectangle2"],
  frame5: ["frame5", "garySimon"],
  garySimon: ["garySimon"],
  frame6: ["frame6", "janeDoe"],
  janeDoe: ["janeDoe"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  homePage: "div";
  freeBox: "div";
  navbar: typeof Navbar;
  frame2: "div";
  frame3: "div";
  frame4: "div";
  streamlineIconOfficeBuilding400X4001: "div";
  rectangle1: "div";
  rectangle2: "div";
  frame5: "div";
  garySimon: "div";
  frame6: "div";
  janeDoe: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHomepage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHomepage__VariantsArgs;
    args?: PlasmicHomepage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHomepage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicHomepage__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHomepage__ArgProps,
          internalVariantPropNames: PlasmicHomepage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    homePage: makeNodeComponent("homePage"),
    freeBox: makeNodeComponent("freeBox"),
    navbar: makeNodeComponent("navbar"),
    frame2: makeNodeComponent("frame2"),
    frame3: makeNodeComponent("frame3"),
    frame4: makeNodeComponent("frame4"),
    streamlineIconOfficeBuilding400X4001: makeNodeComponent(
      "streamlineIconOfficeBuilding400X4001"
    ),
    rectangle1: makeNodeComponent("rectangle1"),
    rectangle2: makeNodeComponent("rectangle2"),
    frame5: makeNodeComponent("frame5"),
    garySimon: makeNodeComponent("garySimon"),
    frame6: makeNodeComponent("frame6"),
    janeDoe: makeNodeComponent("janeDoe"),

    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
