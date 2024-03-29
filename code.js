let currentComponentDSIndex;
const collectedStyleData = [];
const IS_COLLECT_MODE = false;
const OUTPUT_SHARED_STYLES = false;
const baseStyles = [
    {
        name: "Gray6-1",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: {
                    r: 0.250980406999588,
                    g: 0.25882354378700256,
                    b: 0.2980392277240753,
                },
            },
        ],
    },
    {
        name: "Gray1",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: { r: 1, g: 1, b: 1 },
            },
        ],
    },
    {
        name: "Gradient1",
        type: "PAINT",
        paints: [
            {
                type: "GRADIENT_LINEAR",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                gradientStops: [
                    {
                        color: {
                            r: 0.364705890417099,
                            g: 0.364705890417099,
                            b: 0.42352941632270813,
                            a: 1,
                        },
                        position: 0,
                    },
                    {
                        color: {
                            r: 0.13333334028720856,
                            g: 0.15294118225574493,
                            b: 0.16862745583057404,
                            a: 1,
                        },
                        position: 1,
                    },
                ],
                gradientTransform: [
                    [-0.4999999701976776, 0.5, 0.4999999701976776],
                    [-1.2370890378952026, -1.2370890378952026, 1.7370890378952026],
                ],
            },
        ],
    },
    {
        name: "Gradient2",
        type: "PAINT",
        paints: [
            {
                type: "GRADIENT_LINEAR",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                gradientStops: [
                    {
                        color: {
                            r: 0.6941176652908325,
                            g: 0.6941176652908325,
                            b: 0.7254902124404907,
                            a: 1,
                        },
                        position: 0,
                    },
                    {
                        color: {
                            r: 0.9176470637321472,
                            g: 0.9176470637321472,
                            b: 0.9176470637321472,
                            a: 1,
                        },
                        position: 1,
                    },
                ],
                gradientTransform: [
                    [0.5, -0.5, 0.5],
                    [0.5, 0.5, 1.1657341758564144e-15],
                ],
            },
        ],
    },
    {
        name: "Gradient3",
        type: "PAINT",
        paints: [
            {
                type: "GRADIENT_LINEAR",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                gradientStops: [
                    {
                        color: {
                            r: 0.8627451062202454,
                            g: 0.8980392217636108,
                            b: 0.843137264251709,
                            a: 1,
                        },
                        position: 0,
                    },
                    {
                        color: {
                            r: 0.658823549747467,
                            g: 0.6980392336845398,
                            b: 0.6549019813537598,
                            a: 1,
                        },
                        position: 1,
                    },
                ],
                gradientTransform: [
                    [-0.4999999403953552, 0.5000000596046448, 0.4999999403953552],
                    [-1.2370891571044922, -1.2370891571044922, 1.7370891571044922],
                ],
            },
        ],
    },
    {
        name: "Gradient4",
        type: "PAINT",
        paints: [
            {
                type: "GRADIENT_LINEAR",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                gradientStops: [
                    {
                        color: {
                            r: 0.2980392277240753,
                            g: 0.8666666746139526,
                            b: 0.7411764860153198,
                            a: 1,
                        },
                        position: 0,
                    },
                    {
                        color: {
                            r: 0.0235294122248888,
                            g: 0.9490196108818054,
                            b: 0.5254902243614197,
                            a: 1,
                        },
                        position: 1,
                    },
                ],
                gradientTransform: [
                    [-0.4999999403953552, 0.4999999701976776, 0.4999999403953552],
                    [-1.237088918685913, -1.237088918685913, 1.737088918685913],
                ],
            },
        ],
    },
    {
        name: "Gradient5",
        type: "PAINT",
        paints: [
            {
                type: "GRADIENT_LINEAR",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                gradientStops: [
                    {
                        color: {
                            r: 1,
                            g: 0.4627451002597809,
                            b: 0.38823530077934265,
                            a: 1,
                        },
                        position: 0,
                    },
                    {
                        color: {
                            r: 0.9725490212440491,
                            g: 0.7372549176216125,
                            b: 0.4627451002597809,
                            a: 1,
                        },
                        position: 0.7395833134651184,
                    },
                    {
                        color: { r: 1, g: 0.7019608020782471, b: 0.3607843220233917, a: 1 },
                        position: 1,
                    },
                ],
                gradientTransform: [
                    [-0.4999999403953552, 0.4999999701976776, 0.4999999403953552],
                    [-1.237088918685913, -1.237088918685913, 1.737088918685913],
                ],
            },
        ],
    },
    {
        name: "Gradient6",
        type: "PAINT",
        paints: [
            {
                type: "GRADIENT_LINEAR",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                gradientStops: [
                    {
                        color: {
                            r: 0.7843137383460999,
                            g: 0.4274509847164154,
                            b: 0.843137264251709,
                            a: 1,
                        },
                        position: 0,
                    },
                    {
                        color: { r: 0.4588235318660736, g: 0.4745098054409027, b: 1, a: 1 },
                        position: 1,
                    },
                ],
                gradientTransform: [
                    [-0.4999999403953552, 0.4999999701976776, 0.4999999403953552],
                    [-1.237088918685913, -1.237088918685913, 1.737088918685913],
                ],
            },
        ],
    },
    {
        name: "Gradient7",
        type: "PAINT",
        paints: [
            {
                type: "GRADIENT_LINEAR",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                gradientStops: [
                    {
                        color: {
                            r: 0.8549913763999939,
                            g: 0.2858259677886963,
                            b: 0.6062450408935547,
                            a: 1,
                        },
                        position: 0,
                    },
                    {
                        color: {
                            r: 1,
                            g: 0.4627451002597809,
                            b: 0.38823530077934265,
                            a: 1,
                        },
                        position: 0.4459567666053772,
                    },
                    {
                        color: { r: 1, g: 0.7019608020782471, b: 0.3607843220233917, a: 1 },
                        position: 1,
                    },
                ],
                gradientTransform: [
                    [1, 4.951591581203729e-9, 4.683853749298805e-9],
                    [-4.920102991690101e-9, 0.0010256404057145119, 0.4994871914386749],
                ],
            },
        ],
    },
    {
        name: "Gradient8",
        type: "PAINT",
        paints: [
            {
                type: "GRADIENT_LINEAR",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                gradientStops: [
                    {
                        color: {
                            r: 0.8549913763999939,
                            g: 0.2858259677886963,
                            b: 0.6062450408935547,
                            a: 1,
                        },
                        position: 0,
                    },
                    {
                        color: {
                            r: 0.32176312804222107,
                            g: 0.21949917078018188,
                            b: 0.9499567747116089,
                            a: 1,
                        },
                        position: 1,
                    },
                ],
                gradientTransform: [
                    [1, 4.951591581203729e-9, 4.683853749298805e-9],
                    [-4.920102991690101e-9, 0.0010256404057145119, 0.4994871914386749],
                ],
            },
        ],
    },
    {
        name: "Gradient9",
        type: "PAINT",
        paints: [
            {
                type: "GRADIENT_LINEAR",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                gradientStops: [
                    {
                        color: {
                            r: 0.3041379153728485,
                            g: 0.17799031734466553,
                            b: 0.27816638350486755,
                            a: 1,
                        },
                        position: 0.015226147137582302,
                    },
                    {
                        color: {
                            r: 0.41960784792900085,
                            g: 0.2078431397676468,
                            b: 0.3529411852359772,
                            a: 1,
                        },
                        position: 0.12110528349876404,
                    },
                    {
                        color: {
                            r: 0.33725491166114807,
                            g: 0.1921568661928177,
                            b: 0.30588236451148987,
                            a: 1,
                        },
                        position: 0.30100977420806885,
                    },
                    {
                        color: {
                            r: 0.2235294133424759,
                            g: 0.16862745583057404,
                            b: 0.23529411852359772,
                            a: 1,
                        },
                        position: 0.7388178706169128,
                    },
                    {
                        color: {
                            r: 0.0941176488995552,
                            g: 0.13333334028720856,
                            b: 0.15294118225574493,
                            a: 1,
                        },
                        position: 1,
                    },
                ],
                gradientTransform: [
                    [0.9607733488082886, 0.008821492083370686, 0.0014183017192408442],
                    [-0.016784923151135445, 0.011562366038560867, 0.5018589496612549],
                ],
            },
        ],
    },
    {
        name: "Gradient10",
        type: "PAINT",
        paints: [
            {
                type: "GRADIENT_LINEAR",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                gradientStops: [
                    {
                        color: {
                            r: 0.9458045959472656,
                            g: 0.6402109861373901,
                            b: 0.9335808753967285,
                            a: 1,
                        },
                        position: 0,
                    },
                    {
                        color: {
                            r: 0.8823529481887817,
                            g: 0.6627451181411743,
                            b: 0.811764657497406,
                            a: 0.6700000166893005,
                        },
                        position: 0.30271387100219727,
                    },
                    {
                        color: {
                            r: 0.6470588445663452,
                            g: 0.8196079134941101,
                            b: 0.8588235378265381,
                            a: 0.5299999713897705,
                        },
                        position: 0.6104611158370972,
                    },
                    {
                        color: {
                            r: 0.9098039269447327,
                            g: 0.6627451181411743,
                            b: 0.8196078538894653,
                            a: 1,
                        },
                        position: 0.992431104183197,
                    },
                ],
                gradientTransform: [
                    [-0.3705243468284607, 0.3526301085948944, 0.37057235836982727],
                    [-0.2989751994609833, -0.21303315460681915, 0.6645089387893677],
                ],
            },
        ],
    },
    {
        name: "Gradient11",
        type: "PAINT",
        paints: [
            {
                type: "GRADIENT_LINEAR",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                gradientStops: [
                    {
                        color: {
                            r: 0.003921568859368563,
                            g: 0.8980392217636108,
                            b: 0.6078431606292725,
                            a: 1,
                        },
                        position: 0,
                    },
                    {
                        color: {
                            r: 0.08365589380264282,
                            g: 0.6230474710464478,
                            b: 0.8429935574531555,
                            a: 1,
                        },
                        position: 0.498943954706192,
                    },
                    {
                        color: {
                            r: 0.20164942741394043,
                            g: 0.24214565753936768,
                            b: 1,
                            a: 1,
                        },
                        position: 1,
                    },
                ],
                gradientTransform: [
                    [-0.6133548617362976, -0.19739550352096558, 0.7654197812080383],
                    [0.05995051935315132, -0.13000109791755676, 0.5402161478996277],
                ],
            },
        ],
    },
    {
        name: "Gray9",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: {
                    r: 0.0235294122248888,
                    g: 0.027450980618596077,
                    b: 0.05098039284348488,
                },
            },
        ],
    },
    {
        name: "Gray8",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: {
                    r: 0.08627451211214066,
                    g: 0.10196078568696976,
                    b: 0.12156862765550613,
                },
            },
        ],
    },
    {
        name: "Gray7",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: {
                    r: 0.13333334028720856,
                    g: 0.15294118225574493,
                    b: 0.16862745583057404,
                },
            },
        ],
    },
    {
        name: "Gray6",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: {
                    r: 0.364705890417099,
                    g: 0.364705890417099,
                    b: 0.42352941632270813,
                },
            },
        ],
    },
    {
        name: "Gray5",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: {
                    r: 0.5137255191802979,
                    g: 0.5215686559677124,
                    b: 0.572549045085907,
                },
            },
        ],
    },
    {
        name: "Gray4",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: {
                    r: 0.6941176652908325,
                    g: 0.6941176652908325,
                    b: 0.7254902124404907,
                },
            },
        ],
    },
    {
        name: "Gray3",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: {
                    r: 0.9176470637321472,
                    g: 0.9176470637321472,
                    b: 0.9176470637321472,
                },
            },
        ],
    },
    {
        name: "Gray2",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: {
                    r: 0.9725490212440491,
                    g: 0.9725490212440491,
                    b: 0.9725490212440491,
                },
            },
        ],
    },
    {
        name: "Green9",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: { r: 0, g: 0.18039216101169586, b: 0.12156862765550613 },
            },
        ],
    },
    {
        name: "Green8",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: { r: 0, g: 0.2980392277240753, b: 0.20392157137393951 },
            },
        ],
    },
    {
        name: "Green7",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: { r: 0, g: 0.4000000059604645, b: 0.27462682127952576 },
            },
        ],
    },
    {
        name: "Green6",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: { r: 0, g: 0.6235294342041016, b: 0.42352941632270813 },
            },
        ],
    },
    {
        name: "Green5",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: { r: 0, g: 0.7816406488418579, b: 0.5297374725341797 },
            },
        ],
    },
    {
        name: "Green4",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: { r: 0, g: 0.8980392217636108, b: 0.6078431606292725 },
            },
        ],
    },
    {
        name: "Green3",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: { r: 0.6041666269302368, g: 1, b: 0.8691459894180298 },
            },
        ],
    },
    {
        name: "Green2",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: { r: 0.7254902124404907, g: 1, b: 0.9098039269447327 },
            },
        ],
    },
    {
        name: "Green1",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: { r: 0.9098039269447327, g: 1, b: 0.9686274528503418 },
            },
        ],
    },
    {
        name: "Khaki9",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: {
                    r: 0.13050749897956848,
                    g: 0.19162343442440033,
                    b: 0.14884227514266968,
                },
            },
        ],
    },
    {
        name: "Khaki8",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: {
                    r: 0.1923229694366455,
                    g: 0.27079010009765625,
                    b: 0.2172897756099701,
                },
            },
        ],
    },
    {
        name: "Khaki7",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: {
                    r: 0.27450981736183167,
                    g: 0.3607843220233917,
                    b: 0.3019607961177826,
                },
            },
        ],
    },
    {
        name: "Khaki6",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: {
                    r: 0.3803921639919281,
                    g: 0.45098039507865906,
                    b: 0.3843137323856354,
                },
            },
        ],
    },
    {
        name: "Khaki5",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: {
                    r: 0.545098066329956,
                    g: 0.6196078658103943,
                    b: 0.5607843399047852,
                },
            },
        ],
    },
    {
        name: "Khaki4",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: {
                    r: 0.658823549747467,
                    g: 0.6980392336845398,
                    b: 0.6549019813537598,
                },
            },
        ],
    },
    {
        name: "Khaki3",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: {
                    r: 0.8235294222831726,
                    g: 0.8705882430076599,
                    b: 0.800000011920929,
                },
            },
        ],
    },
    {
        name: "Khaki2",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: {
                    r: 0.8627451062202454,
                    g: 0.8980392217636108,
                    b: 0.843137264251709,
                },
            },
        ],
    },
    {
        name: "Khaki1",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: {
                    r: 0.9058823585510254,
                    g: 0.929411768913269,
                    b: 0.8941176533699036,
                },
            },
        ],
    },
    {
        name: "Purple9",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: {
                    r: 0.13359373807907104,
                    g: 0.13359373807907104,
                    b: 0.3958333432674408,
                },
            },
        ],
    },
    {
        name: "Purple8",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: {
                    r: 0.16442707180976868,
                    g: 0.16442707180976868,
                    b: 0.512499988079071,
                },
            },
        ],
    },
    {
        name: "Purple7",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: {
                    r: 0.24463993310928345,
                    g: 0.24463993310928345,
                    b: 0.6791234612464905,
                },
            },
        ],
    },
    {
        name: "Purple6",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: {
                    r: 0.3137255012989044,
                    g: 0.3137255012989044,
                    b: 0.7529411911964417,
                },
            },
        ],
    },
    {
        name: "Purple5",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: { r: 0.4588235318660736, g: 0.4745098054409027, b: 1 },
            },
        ],
    },
    {
        name: "Purple4",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: { r: 0.6509804129600525, g: 0.658823549747467, b: 1 },
            },
        ],
    },
    {
        name: "Purple3",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: { r: 0.8901960849761963, g: 0.8941176533699036, b: 1 },
            },
        ],
    },
    {
        name: "Purple2",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: { r: 0.929411768913269, g: 0.929411768913269, b: 1 },
            },
        ],
    },
    {
        name: "Purple1",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: { r: 0.9647058844566345, g: 0.9647058844566345, b: 1 },
            },
        ],
    },
    {
        name: "Red9",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: {
                    r: 0.2235294133424759,
                    g: 0.0117647061124444,
                    b: 0.027450980618596077,
                },
            },
        ],
    },
    {
        name: "Red8",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: {
                    r: 0.3019607961177826,
                    g: 0.01568627543747425,
                    b: 0.03921568766236305,
                },
            },
        ],
    },
    {
        name: "Red7",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: {
                    r: 0.45098039507865906,
                    g: 0.0235294122248888,
                    b: 0.05882352963089943,
                },
            },
        ],
    },
    {
        name: "Red6",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: {
                    r: 0.6745098233222961,
                    g: 0.03529411926865578,
                    b: 0.08627451211214066,
                },
            },
        ],
    },
    {
        name: "Red5",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: {
                    r: 0.9607843160629272,
                    g: 0.2235294133424759,
                    b: 0.2823529541492462,
                },
            },
        ],
    },
    {
        name: "Red4",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: {
                    r: 0.9686274528503418,
                    g: 0.3803921639919281,
                    b: 0.4274509847164154,
                },
            },
        ],
    },
    {
        name: "Red3",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: {
                    r: 0.9921568632125854,
                    g: 0.843137264251709,
                    b: 0.8549019694328308,
                },
            },
        ],
    },
    {
        name: "Red2",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: {
                    r: 0.9960784316062927,
                    g: 0.8980392217636108,
                    b: 0.9058823585510254,
                },
            },
        ],
    },
    {
        name: "Red1",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: {
                    r: 0.9960784316062927,
                    g: 0.9490196108818054,
                    b: 0.9529411792755127,
                },
            },
        ],
    },
    {
        name: "Header Image Gradient",
        type: "PAINT",
        paints: [
            {
                type: "GRADIENT_LINEAR",
                visible: true,
                opacity: 0.6000000238418579,
                blendMode: "NORMAL",
                gradientStops: [
                    {
                        color: {
                            r: 0.08627451211214066,
                            g: 0.10196078568696976,
                            b: 0.12156862765550613,
                            a: 0,
                        },
                        position: 0,
                    },
                    {
                        color: {
                            r: 0.08627451211214066,
                            g: 0.10196078568696976,
                            b: 0.12156862765550613,
                            a: 1,
                        },
                        position: 1,
                    },
                ],
                gradientTransform: [
                    [6.123234262925839e-17, 1, 0],
                    [-1, 6.123234262925839e-17, 1],
                ],
            },
        ],
    },
    {
        name: "Khaki6-1",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: {
                    r: 0.3294117748737335,
                    g: 0.40784314274787903,
                    b: 0.3450980484485626,
                },
            },
        ],
    },
    {
        name: "Gray3-2",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: {
                    r: 0.7686274647712708,
                    g: 0.7686274647712708,
                    b: 0.7882353067398071,
                },
            },
        ],
    },
    {
        name: "Gray3-1",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: {
                    r: 0.843137264251709,
                    g: 0.843137264251709,
                    b: 0.8549019694328308,
                },
            },
        ],
    },
    {
        name: "Khaki3-2",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: {
                    r: 0.7137255072593689,
                    g: 0.7568627595901489,
                    b: 0.7019608020782471,
                },
            },
        ],
    },
    {
        name: "Khaki3-1",
        type: "PAINT",
        paints: [
            {
                type: "SOLID",
                visible: true,
                opacity: 1,
                blendMode: "NORMAL",
                color: {
                    r: 0.7686274647712708,
                    g: 0.8117647171020508,
                    b: 0.7529411911964417,
                },
            },
        ],
    },
];
// DEEP EQUAL
// DEEP EQUAL
// DEEP EQUAL
var pSlice = Array.prototype.slice;
var Object_keys = typeof Object.keys === "function"
    ? Object.keys
    : function (obj) {
        var keys = [];
        for (var key in obj)
            keys.push(key);
        return keys;
    };
var deepEqual = function (actual, expected) {
    if (actual === expected) {
        return true;
    }
    else if (actual instanceof Date && expected instanceof Date) {
        return actual.getTime() === expected.getTime();
    }
    else if (typeof actual != "object" && typeof expected != "object") {
        return actual == expected;
    }
    else {
        return objEquiv(actual, expected);
    }
};
function isUndefinedOrNull(value) {
    return value === null || value === undefined;
}
function isArguments(object) {
    return Object.prototype.toString.call(object) == "[object Arguments]";
}
function objEquiv(a, b) {
    if (isUndefinedOrNull(a) || isUndefinedOrNull(b))
        return false;
    if (a.prototype !== b.prototype)
        return false;
    if (isArguments(a)) {
        if (!isArguments(b)) {
            return false;
        }
        a = pSlice.call(a);
        b = pSlice.call(b);
        return deepEqual(a, b);
    }
    try {
        var ka = Object_keys(a), kb = Object_keys(b), key, i;
    }
    catch (e) {
        return false;
    }
    if (ka.length != kb.length) {
        return false;
    }
    ka.sort();
    kb.sort();
    for (i = ka.length - 1; i >= 0; i--) {
        if (ka[i] != kb[i])
            return false;
    }
    for (i = ka.length - 1; i >= 0; i--) {
        key = ka[i];
        let isDeepEqual = deepEqual(a[key], b[key]);
        if (["r", "g", "b"].includes(key)) {
            isDeepEqual = deepEqual(Math.round(a[key] * 255), Math.round(b[key] * 255));
        }
        if (!isDeepEqual) {
            return false;
        }
    }
    return true;
}
// DEEP EQUAL END
// DEEP EQUAL END
// DEEP EQUAL END
// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.
// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).
// This shows the HTML page in "ui.html".
figma.showUI(__html__, { width: 600, height: 400 });
// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = (msg) => {
    // One way of distinguishing between different types of messages sent from
    // your HTML page is to use an object with a "type" property like this.
    if (msg.type === "create-rectangles") {
        const nodes = [];
        for (let i = 0; i < msg.count; i++) {
            const rect = figma.createRectangle();
            rect.x = i * 150;
            rect.fills = [{ type: "SOLID", color: { r: 1, g: 0.5, b: 0 } }];
            figma.currentPage.appendChild(rect);
            nodes.push(rect);
        }
        figma.currentPage.selection = nodes;
        figma.viewport.scrollAndZoomIntoView(nodes);
    }
    // Make sure to close the plugin when you're done. Otherwise the plugin will
    // keep running, which shows the cancel button at the bottom of the screen.
    figma.closePlugin();
};
function getDSindex(name) {
    const matchResult = name.match(/^([0-9]+\.[0-9]+.*?)\s/);
    return matchResult && matchResult[1];
}
function collectColorStyles(node) {
    if (node.children) {
        node.children.forEach((child) => {
            if (child.type === "INSTANCE" &&
                currentComponentDSIndex &&
                getDSindex(child.name) &&
                getDSindex(child.name) !== currentComponentDSIndex) {
                // a different component inside -- skip
                return;
            }
            collectColorStyles(child);
        });
    }
    if (node.type === "COMPONENT" || "INSTANCE" || "FRAME" || "GROUP") {
        if (node.backgroundStyleId && typeof node.backgroundStyleId === "string") {
            let objectStyle = figma.getStyleById(node.backgroundStyleId);
            if (objectStyle && objectStyle.key) {
                let style = {
                    name: objectStyle.name,
                    description: objectStyle.description,
                    key: objectStyle.key,
                    type: "PAINT",
                    paints: objectStyle["paints"],
                };
                if (style.name && style.key && style.type) {
                    collectedStyleData.push(style);
                }
                else {
                    figma.notify("Error adding theme");
                    throw new Error("Error adding theme");
                }
            }
        }
    }
    if (node.type === "RECTANGLE" ||
        "POLYGON" ||
        "ELLIPSE" ||
        "STAR" ||
        "TEXT" ||
        "VECTOR" ||
        "BOOLEAN_OPERATION" ||
        "LINE") {
        if (node.fillStyleId && typeof node.fillStyleId === "string") {
            let objectStyle = figma.getStyleById(node.fillStyleId);
            if (objectStyle && objectStyle.key) {
                // if (objectStyle.name.includes("D1")) {
                //   console.log(">>>", node.name);
                // }
                let style = {
                    name: objectStyle.name,
                    description: objectStyle.description,
                    key: objectStyle.key,
                    type: "PAINT",
                    paints: objectStyle["paints"],
                };
                if (style.name && style.key && style.type) {
                    collectedStyleData.push(style);
                }
                else {
                    figma.notify("Error adding theme");
                    throw new Error("Error adding theme");
                }
            }
        }
        if (node.strokeStyleId && typeof node.strokeStyleId === "string") {
            let objectStyle = figma.getStyleById(node.strokeStyleId);
            if (objectStyle && objectStyle.key) {
                let style = {
                    name: objectStyle.name,
                    description: objectStyle.description,
                    key: objectStyle.key,
                    type: "PAINT",
                    paints: objectStyle["paints"],
                };
                if (style.name && style.key && style.type) {
                    collectedStyleData.push(style);
                }
                else {
                    figma.notify("Error adding theme");
                    return;
                }
            }
        }
    }
}
function collectTextStyles(node) {
    // check for children on note, if they exist, run them through this function
    // this will help us walk the tree to the bottom most level
    if (node.children) {
        node.children.forEach((child) => {
            collectTextStyles(child);
        });
    }
    if (node.type === "TEXT" &&
        node.textStyleId != "MIXED" &&
        node.textStyleId &&
        typeof node.textStyleId === "string") {
        let objectStyle = figma.getStyleById(node.textStyleId);
        // key will only be available for remote styles
        if (objectStyle && objectStyle.key) {
            let style = {
                name: objectStyle.name,
                description: objectStyle.description,
                key: objectStyle.key,
                type: "TEXT",
            };
            if (style.name && style.key && style.type) {
                collectedStyleData.push(style);
            }
            else {
                figma.notify("Error adding theme");
                throw new Error("Error adding theme");
            }
        }
    }
}
// grab effect styles
function collectEffectStyles(node) {
    if (node.children) {
        node.children.forEach((child) => {
            collectEffectStyles(child);
        });
    }
    if (node.effectStyleId && typeof node.effectStyleId === "string") {
        let objectStyle = figma.getStyleById(node.effectStyleId);
        // key will only be available for remote styles
        if (objectStyle && objectStyle.key) {
            let style = {
                name: objectStyle.name,
                description: objectStyle.description,
                key: objectStyle.key,
                type: "TEXT",
            };
            if (style.name && style.key && style.type) {
                collectedStyleData.push(style);
            }
            else {
                figma.notify("Error adding theme");
                throw new Error("Error adding theme");
            }
        }
    }
}
const getStyleNameWithoutTheme = (name) => {
    const nameParts = name.split("/");
    return nameParts.pop();
};
const toCSSCase = (name) => name.toLowerCase().replace(/(\s|\/)/g, "-");
const selections = Array.from(figma.currentPage.selection);
if (IS_COLLECT_MODE) {
    // collect mode
    selections.forEach((selection) => {
        if (selection) {
            collectColorStyles(selection);
        }
    });
    const existingStyleNames = [];
    const collectedStyleDataSimple = [];
    collectedStyleData.forEach((style) => {
        const name = style.name.split("/").pop();
        if (!/(Gray|Green|Khaki|Purple|Red|Gradient)/.test(name)) {
            return;
        }
        if (existingStyleNames.includes(name)) {
            return;
        }
        collectedStyleDataSimple.push({
            name,
            type: style.type,
            paints: style.paints,
        });
        existingStyleNames.push(name);
    });
    console.log(JSON.stringify(collectedStyleDataSimple));
}
else {
    // generate mode
    if (selections.length === 1) {
        const selection = selections[0];
        const frameName = selection.name;
        currentComponentDSIndex = getDSindex(frameName);
    }
    selections.forEach((selection) => {
        console.log({ selection });
        collectColorStyles(selection);
        collectEffectStyles(selection);
        collectTextStyles(selection);
    });
    console.log({ collectedStyleData });
    const processedStyleNames = [];
    const noThemeStyleNames = [];
    const nonPaletteStylesNames = [];
    const stylesGrouped = {
        Dark: [],
        Light: [],
        Green: [],
        Any: [],
    };
    collectedStyleData.forEach((style) => {
        const name = style.name;
        const isComponentStyle = /(Dark|Light|Green|Any)\/[0-9]+\./.test(name);
        if (processedStyleNames.includes(name)) {
            return;
        }
        const nameParts = name.split("/");
        if (nameParts[1] === "Specs Kit") {
            return; // ignore
        }
        const theme = nameParts.shift();
        const nameWithoutTheme = nameParts.join("/");
        if (!["Dark", "Light", "Green", "Any"].includes(theme)) {
            noThemeStyleNames.push(name);
        }
        else {
            let baseStyleName = style.description;
            if (!baseStyleName) {
                baseStyleName = (baseStyles.find((baseStyle) => deepEqual(baseStyle.paints, style.paints)) || {}).name;
            }
            if (baseStyleName) {
                stylesGrouped[theme].push({
                    styleName: name,
                    baseStyleName: baseStyleName,
                    scope: isComponentStyle ? "component" : "shared",
                });
            }
            else {
                nonPaletteStylesNames.push(name);
            }
        }
        processedStyleNames.push(name);
    });
    let output = "";
    Object.keys(stylesGrouped).forEach((theme) => {
        const printedStyles = [];
        if (stylesGrouped[theme].length === 0) {
            return;
        }
        output += `@include theme-${theme.toLowerCase()}() {\n`;
        const sharedStyles = stylesGrouped[theme].filter((s) => s.scope === "shared");
        const componentStyles = stylesGrouped[theme].filter((s) => s.scope === "component");
        if (OUTPUT_SHARED_STYLES && sharedStyles.length) {
            if (componentStyles.length) {
                output += `\n`;
            }
            sharedStyles.forEach((style) => {
                const styleName = toCSSCase(getStyleNameWithoutTheme(style.styleName));
                const baseStyleName = toCSSCase(style.baseStyleName);
                output += `  --${styleName}: var(--${baseStyleName});\n`;
            });
            if (componentStyles.length) {
                output += `\n`;
            }
        }
        if (componentStyles.length) {
            output += `  .root {\n`;
            componentStyles.forEach((style) => {
                const styleName = toCSSCase(style.styleName.split("/").pop());
                if (printedStyles.includes(styleName)) {
                    return;
                }
                const baseStyleName = toCSSCase(style.baseStyleName);
                output += `    --${styleName}: var(--${baseStyleName});\n`;
                printedStyles.push(styleName);
            });
            output += `  }\n`;
        }
        output += `}\n\n`;
    });
    figma.ui.postMessage({ code: output, nonPaletteStylesNames });
}
