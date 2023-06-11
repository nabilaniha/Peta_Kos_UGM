// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"dgrid/extensions/nls/pagination":{status:"${start} - ${end} \u5171 ${total} \u689d\u7d50\u679c",gotoFirst:"\u9996\u9801",gotoNext:"\u4e0a\u4e00\u9801",gotoPrev:"\u4e0b\u4e00\u9801",gotoLast:"\u672b\u9801",gotoPage:"\u5230\u9019\u9801",jumpPage:"\u8df3\u5230\u9801",rowsPerPage:"Number of rows per page",_localized:{}},"esri/layers/vectorTiles/nls/common":{_localized:{}},"widgets/Geoprocessing/nls/strings":{_widgetLabel:"\u5730\u7406\u8655\u7406",_featureAction_ReceiveFeatureSet:"\u8a2d\u5b9a\u8f38\u5165 ",
requiredInfo:"\u662f\u5fc5\u8981\u7684\u3002",drawnOnMap:"\u7d50\u679c\u7e6a\u88fd\u5728\u5730\u5716\u4e0a\u3002",noToolConfig:"\u7121\u53ef\u7528\u7684\u9810\u914d\u7f6e\u5730\u7406\u8655\u7406\u4efb\u52d9\u3002",useUrlForGPInput:"URL",useUploadForGPInput:"\u4e0a\u50b3\u6a94\u6848",selectFileToUpload:"\u9078\u64c7\u6a94\u6848...",rasterFormat:"\u5149\u67f5\u8cc7\u6599\u683c\u5f0f",noFileSelected:"\u672a\u9078\u64c7\u4efb\u4f55\u6a94\u6848!",uploadSuccess:"\u6a94\u6848\u4e0a\u50b3\u6210\u529f!",showLayerContent:"\u986f\u793a\u5716\u5c64\u5167\u5bb9",
invalidUrl:"\u5716\u5fb5\u670d\u52d9 url \u7121\u6548",urlPlaceholder:"\u7528\u4f86\u5b58\u53d6\u8cc7\u6599\u7684 URL",addShapefile:"\u65b0\u589e Shapefile",generateShapefileError:"\u7522\u751f shapefile \u932f\u8aa4\uff0c\u8acb\u6aa2\u67e5: ",cleared:"\u5df2\u6e05\u9664\u7d50\u679c\u3002",enlargeView:"\u653e\u5927\u8996\u5716",exportOutput:"\u532f\u51fa",emptyResult:"\u7d50\u679c\u70ba\u7a7a\u3002",useSelectedFeatureset:"\u4f7f\u7528\u7d50\u679c\u5716\u5fb5\u3002",closeSelectedFeatureset:"\u6e05\u9664\u548c\u4f7f\u7528\u914d\u7f6e\u7684\u8f38\u5165\u9078\u9805\u3002",
currentMapExtent:"\u76ee\u524d\u5730\u5716\u7bc4\u570d",generalize:"\u4e00\u822c\u5316\u5e7e\u4f55",jsonPlaceholder:"\u8cc7\u6599\u7684 JSON \u5b57\u4e32",chooseATable:"---\u9078\u64c7\u8868\u683c---",_localized:{}},"widgets/Geoprocessing/setting/nls/strings":{taskUrl:"\u4efb\u52d9 URL",serviceURLPlaceholder:"\u8acb\u8f38\u5165\u5730\u7406\u8655\u7406\u4efb\u52d9 URL",layerOrder:"\u5716\u5c64\u9806\u5e8f",defaultValue:"\u9810\u8a2d\u503c",inputFeatureBy:"\u8f38\u5165\u5716\u5fb5",inputRecordBy:"\u8f38\u5165\u8a18\u9304\u4f9d\u64da",
renderer:"\u8457\u8272\u5668",displayType:"\u986f\u793a\u985e\u578b",helpUrl:"\u8aaa\u660e URL",useResultMapService:"\u4f7f\u7528\u5730\u5716\u670d\u52d9\u6aa2\u8996\u7d50\u679c",drawOnMap:"\u5728\u5730\u5716\u4e0a\u4e92\u52d5\u7e6a\u88fd",selectLayer:"\u5f9e\u5730\u5716\u9078\u64c7\u5716\u5c64",selectTable:"\u5f9e\u5730\u5716\u9078\u64c7\u8868\u683c",shareResults:"\u5c07\u7d50\u679c\u65b0\u589e\u70ba\u64cd\u4f5c\u5716\u5c64",setTask:"\u8a2d\u5b9a",setTaskTitle:"\u8a2d\u5b9a GP \u4efb\u52d9",enablePopup:"\u555f\u7528\u5f48\u51fa\u8a0a\u606f",
unSupportGeometryType:"\u7531\u65bc\u5e7e\u4f55\u985e\u578b\u672a\u77e5\uff0c\u56e0\u6b64\u7121\u6cd5\u8a2d\u5b9a\u8457\u8272\u5668\u3002",useUrlForGPInput:"URL",useUploadForGPInput:"\u4e0a\u50b3\u6a94\u6848",selectFileToUpload:"\u9078\u64c7\u6a94\u6848...",rasterFormat:"\u5149\u67f5\u8cc7\u6599\u683c\u5f0f",noFileSelected:"\u672a\u9078\u64c7\u4efb\u4f55\u6a94\u6848!",uploadSuccess:"\u6a94\u6848\u4e0a\u50b3\u6210\u529f!",showLayerContent:"\u986f\u793a\u5716\u5c64\u5167\u5bb9",urlPlaceholder:"\u7528\u4f86\u5b58\u53d6\u8cc7\u6599\u7684 URL",
useShapefile:"\u4f7f\u7528\u672c\u6a5f\u6a94\u6848\u7cfb\u7d71\u4e2d\u7684 shapefile",allowToExport:"\u5141\u8a31\u532f\u51fa\u7d50\u679c",useDynamicSchema:"\u8f38\u51fa\u53ef\u80fd\u6709\u4e0d\u540c\u7684\u65b9\u6848\uff0c\u8acb\u4f7f\u7528\u52d5\u614b\u65b9\u6848\u800c\u975e\u9810\u5b9a\u7fa9\u7684\u65b9\u6848\u3002",useCurrentMapExtent:"\u4f7f\u7528\u76ee\u524d\u5730\u5716\u7bc4\u570d",ignoreOutput:"\u5ffd\u7565\u6b64\u8f38\u51fa",turnOffOutput:"\u9810\u8a2d\u6703\u95dc\u9589\u6b64\u5716\u5c64",
inputJSONString:"\u8f38\u5165 JSON \u5b57\u4e32",useFeatureCollection:"\u4e0d\u50b3\u9001 URL\uff0c\u800c\u662f\u50b3\u9001 FeatureCollections \u4f5c\u70ba\u8f38\u5165\u3002",_localized:{}}});