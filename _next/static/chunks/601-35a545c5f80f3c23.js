(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[601],{2962:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{PB:function(){return NextSeo}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7294),next_head__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(9008),next_head__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);function _extends(){return(_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}var _excluded$x=["keyOverride"],defaults={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},buildOpenGraphMediaTags=function(mediaType,media,_temp){void 0===media&&(media=[]);var _ref=void 0===_temp?{}:_temp,defaultWidth=_ref.defaultWidth,defaultHeight=_ref.defaultHeight;return media.reduce(function(tags,medium,index){return tags.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"og:"+mediaType+":0"+index,property:"og:"+mediaType,content:medium.url})),medium.alt&&tags.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"og:"+mediaType+":alt0"+index,property:"og:"+mediaType+":alt",content:medium.alt})),medium.secureUrl&&tags.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"og:"+mediaType+":secure_url0"+index,property:"og:"+mediaType+":secure_url",content:medium.secureUrl.toString()})),medium.type&&tags.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"og:"+mediaType+":type0"+index,property:"og:"+mediaType+":type",content:medium.type.toString()})),medium.width?tags.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"og:"+mediaType+":width0"+index,property:"og:"+mediaType+":width",content:medium.width.toString()})):defaultWidth&&tags.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"og:"+mediaType+":width0"+index,property:"og:"+mediaType+":width",content:defaultWidth.toString()})),medium.height?tags.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"og:"+mediaType+":height"+index,property:"og:"+mediaType+":height",content:medium.height.toString()})):defaultHeight&&tags.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"og:"+mediaType+":height"+index,property:"og:"+mediaType+":height",content:defaultHeight.toString()})),tags},[])},buildTags=function(config){var _config$openGraph,_config$openGraph3,_config$additionalLin,_config$openGraph2,_config$openGraph4,tagsToRender=[];config.titleTemplate&&(defaults.templateTitle=config.titleTemplate);var updatedTitle="";config.title?(updatedTitle=config.title,defaults.templateTitle&&(updatedTitle=defaults.templateTitle.replace(/%s/g,function(){return updatedTitle}))):config.defaultTitle&&(updatedTitle=config.defaultTitle),updatedTitle&&tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("title",{key:"title"},updatedTitle));var noindex=config.noindex||defaults.noindex||config.dangerouslySetAllPagesToNoIndex,nofollow=config.nofollow||defaults.nofollow||config.dangerouslySetAllPagesToNoFollow,robotsParams="";if(config.robotsProps){var _config$robotsProps=config.robotsProps,nosnippet=_config$robotsProps.nosnippet,maxSnippet=_config$robotsProps.maxSnippet,maxImagePreview=_config$robotsProps.maxImagePreview,maxVideoPreview=_config$robotsProps.maxVideoPreview,noarchive=_config$robotsProps.noarchive,noimageindex=_config$robotsProps.noimageindex,notranslate=_config$robotsProps.notranslate,unavailableAfter=_config$robotsProps.unavailableAfter;robotsParams=(nosnippet?",nosnippet":"")+(maxSnippet?",max-snippet:"+maxSnippet:"")+(maxImagePreview?",max-image-preview:"+maxImagePreview:"")+(noarchive?",noarchive":"")+(unavailableAfter?",unavailable_after:"+unavailableAfter:"")+(noimageindex?",noimageindex":"")+(maxVideoPreview?",max-video-preview:"+maxVideoPreview:"")+(notranslate?",notranslate":"")}if(noindex||nofollow?(config.dangerouslySetAllPagesToNoIndex&&(defaults.noindex=!0),config.dangerouslySetAllPagesToNoFollow&&(defaults.nofollow=!0),tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"robots",name:"robots",content:(noindex?"noindex":"index")+","+(nofollow?"nofollow":"follow")+robotsParams}))):tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"robots",name:"robots",content:"index,follow"+robotsParams})),config.description&&tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"description",name:"description",content:config.description})),config.themeColor&&tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"theme-color",name:"theme-color",content:config.themeColor})),config.mobileAlternate&&tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"alternate",key:"mobileAlternate",media:config.mobileAlternate.media,href:config.mobileAlternate.href})),config.languageAlternates&&config.languageAlternates.length>0&&config.languageAlternates.forEach(function(languageAlternate){tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"alternate",key:"languageAlternate-"+languageAlternate.hrefLang,hrefLang:languageAlternate.hrefLang,href:languageAlternate.href}))}),config.twitter&&(config.twitter.cardType&&tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"twitter:card",name:"twitter:card",content:config.twitter.cardType})),config.twitter.site&&tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"twitter:site",name:"twitter:site",content:config.twitter.site})),config.twitter.handle&&tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:config.twitter.handle}))),config.facebook&&config.facebook.appId&&tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:config.facebook.appId})),(null!=(_config$openGraph=config.openGraph)&&_config$openGraph.title||updatedTitle)&&tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"og:title",property:"og:title",content:(null==(_config$openGraph2=config.openGraph)?void 0:_config$openGraph2.title)||updatedTitle})),(null!=(_config$openGraph3=config.openGraph)&&_config$openGraph3.description||config.description)&&tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"og:description",property:"og:description",content:(null==(_config$openGraph4=config.openGraph)?void 0:_config$openGraph4.description)||config.description})),config.openGraph){if((config.openGraph.url||config.canonical)&&tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"og:url",property:"og:url",content:config.openGraph.url||config.canonical})),config.openGraph.type){var type=config.openGraph.type.toLowerCase();tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"og:type",property:"og:type",content:type})),"profile"===type&&config.openGraph.profile?(config.openGraph.profile.firstName&&tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:config.openGraph.profile.firstName})),config.openGraph.profile.lastName&&tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:config.openGraph.profile.lastName})),config.openGraph.profile.username&&tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"profile:username",property:"profile:username",content:config.openGraph.profile.username})),config.openGraph.profile.gender&&tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"profile:gender",property:"profile:gender",content:config.openGraph.profile.gender}))):"book"===type&&config.openGraph.book?(config.openGraph.book.authors&&config.openGraph.book.authors.length&&config.openGraph.book.authors.forEach(function(author,index){tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"book:author:0"+index,property:"book:author",content:author}))}),config.openGraph.book.isbn&&tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"book:isbn",property:"book:isbn",content:config.openGraph.book.isbn})),config.openGraph.book.releaseDate&&tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"book:release_date",property:"book:release_date",content:config.openGraph.book.releaseDate})),config.openGraph.book.tags&&config.openGraph.book.tags.length&&config.openGraph.book.tags.forEach(function(tag,index){tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"book:tag:0"+index,property:"book:tag",content:tag}))})):"article"===type&&config.openGraph.article?(config.openGraph.article.publishedTime&&tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"article:published_time",property:"article:published_time",content:config.openGraph.article.publishedTime})),config.openGraph.article.modifiedTime&&tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:config.openGraph.article.modifiedTime})),config.openGraph.article.expirationTime&&tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:config.openGraph.article.expirationTime})),config.openGraph.article.authors&&config.openGraph.article.authors.length&&config.openGraph.article.authors.forEach(function(author,index){tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"article:author:0"+index,property:"article:author",content:author}))}),config.openGraph.article.section&&tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"article:section",property:"article:section",content:config.openGraph.article.section})),config.openGraph.article.tags&&config.openGraph.article.tags.length&&config.openGraph.article.tags.forEach(function(tag,index){tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"article:tag:0"+index,property:"article:tag",content:tag}))})):("video.movie"===type||"video.episode"===type||"video.tv_show"===type||"video.other"===type)&&config.openGraph.video&&(config.openGraph.video.actors&&config.openGraph.video.actors.length&&config.openGraph.video.actors.forEach(function(actor,index){actor.profile&&tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"video:actor:0"+index,property:"video:actor",content:actor.profile})),actor.role&&tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"video:actor:role:0"+index,property:"video:actor:role",content:actor.role}))}),config.openGraph.video.directors&&config.openGraph.video.directors.length&&config.openGraph.video.directors.forEach(function(director,index){tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"video:director:0"+index,property:"video:director",content:director}))}),config.openGraph.video.writers&&config.openGraph.video.writers.length&&config.openGraph.video.writers.forEach(function(writer,index){tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"video:writer:0"+index,property:"video:writer",content:writer}))}),config.openGraph.video.duration&&tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"video:duration",property:"video:duration",content:config.openGraph.video.duration.toString()})),config.openGraph.video.releaseDate&&tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"video:release_date",property:"video:release_date",content:config.openGraph.video.releaseDate})),config.openGraph.video.tags&&config.openGraph.video.tags.length&&config.openGraph.video.tags.forEach(function(tag,index){tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"video:tag:0"+index,property:"video:tag",content:tag}))}),config.openGraph.video.series&&tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"video:series",property:"video:series",content:config.openGraph.video.series})))}config.defaultOpenGraphImageWidth&&(defaults.defaultOpenGraphImageWidth=config.defaultOpenGraphImageWidth),config.defaultOpenGraphImageHeight&&(defaults.defaultOpenGraphImageHeight=config.defaultOpenGraphImageHeight),config.openGraph.images&&config.openGraph.images.length&&tagsToRender.push.apply(tagsToRender,buildOpenGraphMediaTags("image",config.openGraph.images,{defaultWidth:defaults.defaultOpenGraphImageWidth,defaultHeight:defaults.defaultOpenGraphImageHeight})),config.defaultOpenGraphVideoWidth&&(defaults.defaultOpenGraphVideoWidth=config.defaultOpenGraphVideoWidth),config.defaultOpenGraphVideoHeight&&(defaults.defaultOpenGraphVideoHeight=config.defaultOpenGraphVideoHeight),config.openGraph.videos&&config.openGraph.videos.length&&tagsToRender.push.apply(tagsToRender,buildOpenGraphMediaTags("video",config.openGraph.videos,{defaultWidth:defaults.defaultOpenGraphVideoWidth,defaultHeight:defaults.defaultOpenGraphVideoHeight})),config.openGraph.audio&&tagsToRender.push.apply(tagsToRender,buildOpenGraphMediaTags("audio",config.openGraph.audio)),config.openGraph.locale&&tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"og:locale",property:"og:locale",content:config.openGraph.locale})),(config.openGraph.siteName||config.openGraph.site_name)&&tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",{key:"og:site_name",property:"og:site_name",content:config.openGraph.siteName||config.openGraph.site_name}))}return config.canonical&&tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",{rel:"canonical",href:config.canonical,key:"canonical"})),config.additionalMetaTags&&config.additionalMetaTags.length>0&&config.additionalMetaTags.forEach(function(_ref2){var _ref3,_ref4,keyOverride=_ref2.keyOverride,tag=function(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(_ref2,_excluded$x);tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta",_extends({key:"meta:"+(null!=(_ref3=null!=(_ref4=null!=keyOverride?keyOverride:tag.name)?_ref4:tag.property)?_ref3:tag.httpEquiv)},tag)))}),null!=(_config$additionalLin=config.additionalLinkTags)&&_config$additionalLin.length&&config.additionalLinkTags.forEach(function(tag){var _tag$keyOverride;tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_0__.createElement("link",_extends({key:"link"+(null!=(_tag$keyOverride=tag.keyOverride)?_tag$keyOverride:tag.href)+tag.rel},tag)))}),tagsToRender},WithHead=function(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default(),null,buildTags(props))},NextSeo=function(_ref){var title=_ref.title,themeColor=_ref.themeColor,_ref$noindex=_ref.noindex,noindex=void 0!==_ref$noindex&&_ref$noindex,nofollow=_ref.nofollow,robotsProps=_ref.robotsProps,description=_ref.description,canonical=_ref.canonical,openGraph=_ref.openGraph,facebook=_ref.facebook,twitter=_ref.twitter,additionalMetaTags=_ref.additionalMetaTags,titleTemplate=_ref.titleTemplate,defaultTitle=_ref.defaultTitle,mobileAlternate=_ref.mobileAlternate,languageAlternates=_ref.languageAlternates,additionalLinkTags=_ref.additionalLinkTags,_ref$useAppDir=_ref.useAppDir;return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,void 0!==_ref$useAppDir&&_ref$useAppDir?buildTags({title:title,themeColor:themeColor,noindex:noindex,nofollow:nofollow,robotsProps:robotsProps,description:description,canonical:canonical,facebook:facebook,openGraph:openGraph,additionalMetaTags:additionalMetaTags,twitter:twitter,titleTemplate:titleTemplate,defaultTitle:defaultTitle,mobileAlternate:mobileAlternate,languageAlternates:languageAlternates,additionalLinkTags:additionalLinkTags}):react__WEBPACK_IMPORTED_MODULE_0__.createElement(WithHead,{title:title,themeColor:themeColor,noindex:noindex,nofollow:nofollow,robotsProps:robotsProps,description:description,canonical:canonical,facebook:facebook,openGraph:openGraph,additionalMetaTags:additionalMetaTags,twitter:twitter,titleTemplate:titleTemplate,defaultTitle:defaultTitle,mobileAlternate:mobileAlternate,languageAlternates:languageAlternates,additionalLinkTags:additionalLinkTags}))};RegExp("["+Object.keys(Object.freeze({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"})).join("")+"]","g")},9749:function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=function(_param){let blurWidth,blurHeight;var src,{src:src1,sizes,unoptimized=!1,priority=!1,loading,className,quality,width,height,fill,style,onLoad,onLoadingComplete,placeholder="empty",blurDataURL,layout,objectFit,objectPosition,lazyBoundary,lazyRoot}=_param,all=_object_without_properties_loose(_param,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let configContext=_react.useContext(_imageConfigContext.ImageConfigContext),config=_react.useMemo(()=>{let c=configEnv||configContext||_imageConfig.imageConfigDefault,allSizes=[...c.deviceSizes,...c.imageSizes].sort((a,b)=>a-b),deviceSizes=c.deviceSizes.sort((a,b)=>a-b);return _extends({},c,{allSizes,deviceSizes})},[configContext]),rest=all,loader=rest.loader||_imageLoader.default;if(delete rest.loader,"__next_img_default"in loader){if("custom"===config.loader)throw Error('Image with src "'.concat(src1,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let customImageLoader=loader;loader=obj=>{let{config:_}=obj,opts=_object_without_properties_loose(obj,["config"]);return customImageLoader(opts)}}if(layout){"fill"===layout&&(fill=!0);let layoutStyle={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[layout];layoutStyle&&(style=_extends({},style,layoutStyle));let layoutSizes={responsive:"100vw",fill:"100vw"}[layout];layoutSizes&&!sizes&&(sizes=layoutSizes)}let staticSrc="",widthInt=getInt(width),heightInt=getInt(height);if("object"==typeof(src=src1)&&(isStaticRequire(src)||void 0!==src.src)){let staticImageData=isStaticRequire(src1)?src1.default:src1;if(!staticImageData.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(staticImageData)));if(!staticImageData.height||!staticImageData.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(staticImageData)));if(blurWidth=staticImageData.blurWidth,blurHeight=staticImageData.blurHeight,blurDataURL=blurDataURL||staticImageData.blurDataURL,staticSrc=staticImageData.src,!fill){if(widthInt||heightInt){if(widthInt&&!heightInt){let ratio=widthInt/staticImageData.width;heightInt=Math.round(staticImageData.height*ratio)}else if(!widthInt&&heightInt){let ratio1=heightInt/staticImageData.height;widthInt=Math.round(staticImageData.width*ratio1)}}else widthInt=staticImageData.width,heightInt=staticImageData.height}}let isLazy=!priority&&("lazy"===loading||void 0===loading);((src1="string"==typeof src1?src1:staticSrc).startsWith("data:")||src1.startsWith("blob:"))&&(unoptimized=!0,isLazy=!1),config.unoptimized&&(unoptimized=!0);let[blurComplete,setBlurComplete]=_react.useState(!1),[showAltText,setShowAltText]=_react.useState(!1),qualityInt=getInt(quality),imgStyle=Object.assign(fill?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit,objectPosition}:{},showAltText?{}:{color:"transparent"},style),blurStyle="blur"===placeholder&&blurDataURL&&!blurComplete?{backgroundSize:imgStyle.objectFit||"cover",backgroundPosition:imgStyle.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(_imageBlurSvg.getImageBlurSvg({widthInt,heightInt,blurWidth,blurHeight,blurDataURL}),'")')}:{},imgAttributes=function(param){let{config,src,unoptimized,width,quality,sizes,loader}=param;if(unoptimized)return{src,srcSet:void 0,sizes:void 0};let{widths,kind}=function(param,width,sizes){let{deviceSizes,allSizes}=param;if(sizes){let viewportWidthRe=/(^|\s)(1?\d?\d)vw/g,percentSizes=[];for(let match;match=viewportWidthRe.exec(sizes);match)percentSizes.push(parseInt(match[2]));if(percentSizes.length){let smallestRatio=.01*Math.min(...percentSizes);return{widths:allSizes.filter(s=>s>=deviceSizes[0]*smallestRatio),kind:"w"}}return{widths:allSizes,kind:"w"}}if("number"!=typeof width)return{widths:deviceSizes,kind:"w"};let widths=[...new Set([width,2*width].map(w=>allSizes.find(p=>p>=w)||allSizes[allSizes.length-1]))];return{widths,kind:"x"}}(config,width,sizes),last=widths.length-1;return{sizes:sizes||"w"!==kind?sizes:"100vw",srcSet:widths.map((w,i)=>"".concat(loader({config,src,quality,width:w})," ").concat("w"===kind?w:i+1).concat(kind)).join(", "),src:loader({config,src,quality,width:widths[last]})}}({config,src:src1,unoptimized,width:widthInt,quality:qualityInt,sizes,loader}),srcString=src1,linkProps={imageSrcSet:imgAttributes.srcSet,imageSizes:imgAttributes.sizes,crossOrigin:rest.crossOrigin},onLoadRef=_react.useRef(onLoad);_react.useEffect(()=>{onLoadRef.current=onLoad},[onLoad]);let onLoadingCompleteRef=_react.useRef(onLoadingComplete);_react.useEffect(()=>{onLoadingCompleteRef.current=onLoadingComplete},[onLoadingComplete]);let imgElementArgs=_extends({isLazy,imgAttributes,heightInt,widthInt,qualityInt,className,imgStyle,blurStyle,loading,config,fill,unoptimized,placeholder,loader,srcString,onLoadRef,onLoadingCompleteRef,setBlurComplete,setShowAltText},rest);return _react.default.createElement(_react.default.Fragment,null,_react.default.createElement(ImageElement,Object.assign({},imgElementArgs)),priority?_react.default.createElement(_head.default,null,_react.default.createElement("link",Object.assign({key:"__nimg-"+imgAttributes.src+imgAttributes.srcSet+imgAttributes.sizes,rel:"preload",as:"image",href:imgAttributes.srcSet?void 0:imgAttributes.src},linkProps))):null)};var _extends=__webpack_require__(6495).Z,_interop_require_default=__webpack_require__(2648).Z,_interop_require_wildcard=__webpack_require__(1598).Z,_object_without_properties_loose=__webpack_require__(7273).Z,_react=_interop_require_wildcard(__webpack_require__(7294)),_head=_interop_require_default(__webpack_require__(3121)),_imageBlurSvg=__webpack_require__(2675),_imageConfig=__webpack_require__(139),_imageConfigContext=__webpack_require__(8730);__webpack_require__(7238);var _imageLoader=_interop_require_default(__webpack_require__(9824));let configEnv={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function isStaticRequire(src){return void 0!==src.default}function getInt(x){return"number"==typeof x||void 0===x?x:"string"==typeof x&&/^[0-9]+$/.test(x)?parseInt(x,10):NaN}function handleLoading(img,src,placeholder,onLoadRef,onLoadingCompleteRef,setBlurComplete,unoptimized){if(!img||img["data-loaded-src"]===src)return;img["data-loaded-src"]=src;let p="decode"in img?img.decode():Promise.resolve();p.catch(()=>{}).then(()=>{if(img.parentNode){if("blur"===placeholder&&setBlurComplete(!0),null==onLoadRef?void 0:onLoadRef.current){let event=new Event("load");Object.defineProperty(event,"target",{writable:!1,value:img});let prevented=!1,stopped=!1;onLoadRef.current(_extends({},event,{nativeEvent:event,currentTarget:img,target:img,isDefaultPrevented:()=>prevented,isPropagationStopped:()=>stopped,persist(){},preventDefault(){prevented=!0,event.preventDefault()},stopPropagation(){stopped=!0,event.stopPropagation()}}))}(null==onLoadingCompleteRef?void 0:onLoadingCompleteRef.current)&&onLoadingCompleteRef.current(img)}})}let ImageElement=_param=>{var{imgAttributes,heightInt,widthInt,qualityInt,className,imgStyle,blurStyle,isLazy,fill,placeholder,loading,srcString,config,unoptimized,loader,onLoadRef,onLoadingCompleteRef,setBlurComplete,setShowAltText,onLoad,onError}=_param,rest=_object_without_properties_loose(_param,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return loading=isLazy?"lazy":loading,_react.default.createElement(_react.default.Fragment,null,_react.default.createElement("img",Object.assign({},rest,imgAttributes,{width:widthInt,height:heightInt,decoding:"async","data-nimg":fill?"fill":"1",className:className,loading:loading,style:_extends({},imgStyle,blurStyle),ref:_react.useCallback(img=>{img&&(onError&&(img.src=img.src),img.complete&&handleLoading(img,srcString,placeholder,onLoadRef,onLoadingCompleteRef,setBlurComplete,unoptimized))},[srcString,placeholder,onLoadRef,onLoadingCompleteRef,setBlurComplete,onError,unoptimized]),onLoad(event){let img=event.currentTarget;handleLoading(img,srcString,placeholder,onLoadRef,onLoadingCompleteRef,setBlurComplete,unoptimized)},onError(event){setShowAltText(!0),"blur"===placeholder&&setBlurComplete(!0),onError&&onError(event)}})))};("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},2675:function(__unused_webpack_module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getImageBlurSvg=function(param){let{widthInt,heightInt,blurWidth,blurHeight,blurDataURL}=param,svgWidth=blurWidth||widthInt,svgHeight=blurHeight||heightInt,feComponentTransfer=blurDataURL.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return svgWidth&&svgHeight?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(svgWidth," ").concat(svgHeight,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(blurWidth&&blurHeight?"1":"20","'/%3E").concat(feComponentTransfer,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(blurDataURL,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(blurDataURL,"'/%3E%3C/svg%3E")}},9824:function(__unused_webpack_module,exports){"use strict";function defaultLoader(param){let{config,src,width,quality}=param;return src.endsWith(".svg")&&!config.dangerouslyAllowSVG?src:"".concat(config.path,"?url=").concat(encodeURIComponent(src),"&w=").concat(width,"&q=").concat(quality||75)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0,defaultLoader.__next_img_default=!0,exports.default=defaultLoader},9008:function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__(3121)},5675:function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__(9749)},6362:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function on(obj){for(var args=[],_i=1;_i<arguments.length;_i++)args[_i-1]=arguments[_i];obj&&obj.addEventListener&&obj.addEventListener.apply(obj,args)}function off(obj){for(var args=[],_i=1;_i<arguments.length;_i++)args[_i-1]=arguments[_i];obj&&obj.removeEventListener&&obj.removeEventListener.apply(obj,args)}__webpack_require__.d(__webpack_exports__,{S1:function(){return off},jU:function(){return isBrowser},on:function(){return on}});var isBrowser="undefined"!=typeof window},621:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7294);__webpack_exports__.Z=function(ref,options){var _a=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),intersectionObserverEntry=_a[0],setIntersectionObserverEntry=_a[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(ref.current&&"function"==typeof IntersectionObserver){var observer_1=new IntersectionObserver(function(entries){setIntersectionObserverEntry(entries[0])},options);return observer_1.observe(ref.current),function(){setIntersectionObserverEntry(null),observer_1.disconnect()}}return function(){}},[ref.current,options.threshold,options.root,options.rootMargin]),intersectionObserverEntry}},5101:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return esm_useRafState}});var react=__webpack_require__(7294),esm_useEffectOnce=function(effect){(0,react.useEffect)(effect,[])},esm_useUnmount=function(fn){var fnRef=(0,react.useRef)(fn);fnRef.current=fn,esm_useEffectOnce(function(){return function(){return fnRef.current()}})},esm_useRafState=function(initialState){var frame=(0,react.useRef)(0),_a=(0,react.useState)(initialState),state=_a[0],setState=_a[1],setRafState=(0,react.useCallback)(function(value){cancelAnimationFrame(frame.current),frame.current=requestAnimationFrame(function(){setState(value)})},[]);return esm_useUnmount(function(){cancelAnimationFrame(frame.current)}),[state,setRafState]}},9727:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7294),_misc_util__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6362),_useRafState__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5101);__webpack_exports__.Z=function(){var _a=(0,_useRafState__WEBPACK_IMPORTED_MODULE_1__.Z)(function(){return{x:_misc_util__WEBPACK_IMPORTED_MODULE_2__.jU?window.pageXOffset:0,y:_misc_util__WEBPACK_IMPORTED_MODULE_2__.jU?window.pageYOffset:0}}),state=_a[0],setState=_a[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){var handler=function(){setState(function(state){var pageXOffset=window.pageXOffset,pageYOffset=window.pageYOffset;return state.x!==pageXOffset||state.y!==pageYOffset?{x:pageXOffset,y:pageYOffset}:state})};return handler(),(0,_misc_util__WEBPACK_IMPORTED_MODULE_2__.on)(window,"scroll",handler,{capture:!1,passive:!0}),function(){(0,_misc_util__WEBPACK_IMPORTED_MODULE_2__.S1)(window,"scroll",handler)}},[]),state}},8504:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(7294),_useRafState__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(5101),_misc_util__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(6362);__webpack_exports__.Z=function(initialWidth,initialHeight){void 0===initialWidth&&(initialWidth=1/0),void 0===initialHeight&&(initialHeight=1/0);var _a=(0,_useRafState__WEBPACK_IMPORTED_MODULE_1__.Z)({width:_misc_util__WEBPACK_IMPORTED_MODULE_2__.jU?window.innerWidth:initialWidth,height:_misc_util__WEBPACK_IMPORTED_MODULE_2__.jU?window.innerHeight:initialHeight}),state=_a[0],setState=_a[1];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(_misc_util__WEBPACK_IMPORTED_MODULE_2__.jU){var handler_1=function(){setState({width:window.innerWidth,height:window.innerHeight})};return(0,_misc_util__WEBPACK_IMPORTED_MODULE_2__.on)(window,"resize",handler_1),function(){(0,_misc_util__WEBPACK_IMPORTED_MODULE_2__.S1)(window,"resize",handler_1)}}},[]),state}}}]);