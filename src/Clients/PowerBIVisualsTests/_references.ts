/// <reference path="./typedefs/typedefs.ts"/>
/// <reference path="../VisualsContracts/_references.ts"/>
/// <reference path="../VisualsExtensibility/_references.ts"/>
/// <reference path="../VisualsCommon/_references.ts"/>
/// <reference path="../VisualsData/_references.ts"/>
/// <reference path="../Visuals/_references.ts"/>
/// <reference path="../CustomVisuals/_references.ts"/>
/// <reference path="../../../src/Clients/Typedefs/webpack/webpack-env.d.ts"/>
/// <reference path="../../../src/Clients/Typedefs/common/window.d.ts"/>
/// <reference path="./common.ts"/>
/// <reference path="./mocks.ts"/>
/// <reference path="./helpers/helpers.ts"/>
/// <reference path="./helpers/kpiHelper.ts"/>
/// <reference path="./helpers/performanceTestsHelpers.ts"/>
/// <reference path="./helpers/referenceLineHelper.ts"/>
/// <reference path="./helpers/slicerHelper.ts"/>
/// <reference path="./helpers/tableDataViewHelper.ts"/>
/// <reference path="./helpers/tablixHelper.ts"/>
/// <reference path="./helpers/trendLineHelper.ts"/>
/// <reference path="./jasmineMatchers/toEqualDeep.ts"/>
/// <reference path="./jasmineMatchers/toEqualSQExpr.ts"/>
/// <reference path="./sqFieldDef.ts"/>
/// <reference path="./common/arrayExtensionsTests.ts"/>
/// <reference path="./common/colorTests.ts"/>
/// <reference path="./common/doubleTests.ts"/>
/// <reference path="./common/prototypeTests.ts"/>
/// <reference path="./common/referenceLineHelperTests.ts"/>
/// <reference path="./common/standaloneUtilityTests.ts"/>
/// <reference path="./common/stringExtensionsTests.ts"/>
/// <reference path="./common/ThrottleUtilityTests.ts"/>
/// <reference path="./common/toEqualDeepTests.ts"/>
/// <reference path="./common/toEqualSQExprTests.ts"/>
/// <reference path="./common/trendLineHelperTests.ts"/>
/// <reference path="./common/urlUtilsTests.ts"/>
/// <reference path="./converters/slicerConverterTests.ts"/>
/// <reference path="./data/contracts/queryProjectionTests.ts"/>
/// <reference path="./data/dataView/dataViewCategoricalReaderTests.ts"/>
/// <reference path="./utils/kpiUtilTests.ts"/>
/// <reference path="./utils/newDataLabelUtilsTests.ts"/>
/// <reference path="./visuals/animatedNumberTests.ts"/>
/// <reference path="./visuals/animatedTextTests.ts"/>
/// <reference path="./visuals/basicShapeTests.ts"/>
/// <reference path="./visuals/cardTests.ts"/>
/// <reference path="./visuals/cartesianChartTests.ts"/>
/// <reference path="./visuals/columnChartTests.ts"/>
/// <reference path="./visuals/comboChartTests.ts"/>
/// <reference path="./visuals/common/animatorTests.ts"/>
/// <reference path="./visuals/common/axisHelperTests.ts"/>
/// <reference path="./visuals/common/capabilitiesValidationTests.ts"/>
/// <reference path="./visuals/common/cartesianHelperTests.ts"/>
/// <reference path="./visuals/common/colorHelperTests.ts"/>
/// <reference path="./visuals/common/converterHelperTests.ts"/>
/// <reference path="./visuals/common/dataLabelUtilsTests.ts"/>
/// <reference path="./visuals/common/dataRoleHelperTests.ts"/>
/// <reference path="./visuals/common/gradientUtilsTests.ts"/>
/// <reference path="./visuals/common/invalidDataValuesCheckerTests.ts"/>
/// <reference path="./visuals/common/listViewTests.ts"/>
/// <reference path="./visuals/common/objectEnumerationBuilderTests.ts"/>
/// <reference path="./visuals/common/pluginTests.ts"/>
/// <reference path="./visuals/common/selectionIdTests.ts"/>
/// <reference path="./visuals/common/selectionManagerTests.ts"/>
/// <reference path="./visuals/common/shapesTests.ts"/>
/// <reference path="./visuals/common/svgUtilTests.ts"/>
/// <reference path="./visuals/common/visibilityUtilTests.ts"/>
/// <reference path="./visuals/common/visualBackgroundHelperTests.ts"/>
/// <reference path="./visuals/common/visualObjectRepetitionTests.ts"/>
/// <reference path="./visuals/common/wordBreakerTests.ts"/>
/// <reference path="./visuals/controls/tablixControlTests.ts"/>
/// <reference path="./visuals/dataColorPaletteTests.ts"/>
/// <reference path="./visuals/dataDotChartTests.ts"/>
/// <reference path="./visuals/donutChartTests.ts"/>
/// <reference path="./visuals/formatting/dataLabelManagerTests.ts"/>
/// <reference path="./visuals/formatting/filledMapLabelLayoutTests.ts"/>
/// <reference path="./visuals/formatting/labelLayoutTests.ts"/>
/// <reference path="./visuals/formatting/donutLabelLayoutTests.ts"/>
/// <reference path="./visuals/formatting/valueFormatterTests.ts"/>
/// <reference path="./visuals/funnelChartTests.ts"/>
/// <reference path="./visuals/gaugeTests.ts"/>
/// <reference path="./visuals/horizontalSlicerTests.ts"/>
/// <reference path="./visuals/imageVisualTests.ts"/>
/// <reference path="./visuals/kpiTests.ts"/>
/// <reference path="./visuals/legendTests.ts"/>
/// <reference path="./visuals/lineChartTests.ts"/>
/// <reference path="./visuals/mapTests.ts"/>
/// <reference path="./visuals/matrixTests.ts"/>
/// <reference path="./visuals/multiRowCardTests.ts"/>
/// <reference path="./visuals/performance/performanceTests.ts"/>
/// <reference path="./visuals/playChartTests.ts"/>
/// <reference path="./visuals/scatterChartTests.ts"/>
/// <reference path="./visuals/scriptVisualTests.ts"/>
/// <reference path="./visuals/services/colorAllocatorFactoryTests.ts"/>
/// <reference path="./visuals/services/geocoderTests.ts"/>
/// <reference path="./visuals/services/geocodingCacheTests.ts"/>
/// <reference path="./visuals/services/geoTaggingAnalyzerServiceTests.ts"/>
/// <reference path="./visuals/services/interactivityServiceTests.ts"/>
/// <reference path="./visuals/services/storageServiceTests.ts"/>
/// <reference path="./visuals/services/textMeasurementServiceTests.ts"/>
/// <reference path="./visuals/services/visualPluginServiceTests.ts"/>
/// <reference path="./visuals/slicerTests.ts"/>
/// <reference path="./visuals/sunburstTests.ts"/>
/// <reference path="./visuals/tableTests.ts"/>
/// <reference path="./visuals/textboxTests.ts"/>
/// <reference path="./visuals/tooltipTests.ts"/>
/// <reference path="./visuals/treemapTests.ts"/>
/// <reference path="./visuals/verticalSlicerTests.ts"/>
/// <reference path="./visuals/visualFactoryTests.ts"/>
/// <reference path="./visuals/waterfallChartTests.ts"/>
/// <reference path="./visuals/system/debugVisualTests.ts"/>
/// <reference path="./extensibility/extensibilityMocks.ts"/>
/// <reference path="./extensibility/extensibilityHelpers.ts"/>
/// <reference path="./extensibility/VisualAdapterTests.ts"/>
/// <reference path="./extensibility/VisualSafeExecutionWrapperTests.ts"/>
/// <reference path="./extensibility/VisualVersionsTests.ts"/>
/// <reference path="./extensibility/versions/v1.0.0Tests.ts"/>
/// <reference path="./extensibility/versions/v1.1.0Tests.ts"/>
/// <reference path="./extensibility/components/selectionIdBuilderTests.ts"/>
/// <reference path="./extensibility/components/selectionManagerTests.ts"/>
/// <reference path="./customVisuals/helpers/dataViewHelpers.ts"/>
/// <reference path="./customVisuals/helpers/visualTestHelpers.ts"/>
/// <reference path="./customVisuals/sampleDataViews/DataViewBuilder.ts"/>
/// <reference path="./customVisuals/sampleDataViews/SalesByCountryData.ts"/>
/// <reference path="./customVisuals/sampleDataViews/SankeyDiagramData.ts"/>
/// <reference path="./customVisuals/sampleDataViews/MekkoChartData.ts"/>
/// <reference path="./customVisuals/sampleDataViews/BulletChartData.ts"/>
/// <reference path="./customVisuals/sampleDataViews/CarLogosData.ts"/>
/// <reference path="./customVisuals/sampleDataViews/CountriesData.ts"/>
/// <reference path="./customVisuals/sampleDataViews/ValueByNameGroupData.ts"/>
/// <reference path="./customVisuals/sampleDataViews/SalesByDayOfWeekData.ts"/>
/// <reference path="./customVisuals/sampleDataViews/EnhancedScatterChartData.ts"/>
/// <reference path="./customVisuals/sampleDataViews/forceGraphData.ts"/>
/// <reference path="./customVisuals/sampleDataViews/GanttData.ts"/>
/// <reference path="./customVisuals/sampleDataViews/TimelineData.ts"/>
/// <reference path="./customVisuals/sampleDataViews/valueByAgeData.ts"/>
/// <reference path="./customVisuals/sampleDataViews/ProductSalesByDateData.ts"/>
/// <reference path="./customVisuals/sampleDataViews/ValueByNameData.ts"/>
/// <reference path="./customVisuals/sampleDataViews/LineDotChartData.ts"/>
/// <reference path="./customVisuals/VisualBuilderBase.ts"/>
/// <reference path="./customVisuals/asterPlotTests.ts"/>
/// <reference path="./customVisuals/tornadoChartTests.ts"/>
/// <reference path="./customVisuals/sankeyDiagramTests.ts"/>
/// <reference path="./customVisuals/mekkoChartTests.ts"/>
/// <reference path="./customVisuals/bulletChartTests.ts"/>
/// <reference path="./customVisuals/wordCloudTests.ts"/>
/// <reference path="./customVisuals/chordChartTests.ts"/>
/// <reference path="./customVisuals/enhancedScatterChartTests.ts"/>
/// <reference path="./customVisuals/radarChartTests.ts"/>
/// <reference path="./customVisuals/dotPlotTests.ts"/>
/// <reference path="./customVisuals/forceGraphTests.ts"/>
/// <reference path="./customVisuals/histogramChartTests.ts"/>
/// <reference path="./customVisuals/timelineTests.ts"/>
/// <reference path="./customVisuals/ganttTests.ts"/>
/// <reference path="./customVisuals/chicletSlicerTests.ts"/>
/// <reference path="./customVisuals/streamGraphTests.ts"/>
/// <reference path="./customVisuals/lineDotChartTests.ts"/>
