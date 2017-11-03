{"version":3,"file":"script.min.js","sources":["script.js"],"names":["BX","CLBlock","arParams","this","arData","UTPopup","createTaskPopup","entity_type","entity_id","event_id","event_id_fullset","cb_id","t_val","ind","type","prototype","DataParser","str","replace","length","charCodeAt","substring","eval","__logFilterShow","style","display","window","XMLHttpRequest","ActiveXObject","e","LBlock","__logOnAjaxInsertToNode","params","arPos","counterNode","counterNodeWaiter","findChild","tag","className","addClass","pos","oLF","nodeTmp1Cap","document","body","appendChild","create","position","width","height","top","left","zIndex","nodeTmp2Cap","unbind","__logChangeCounter","count","bZeroCounterFromDB","parseInt","oCounter","iCommentsRead","onCustomEvent","__logChangeCounterAnimate","__logDecrementCounter","iDecrement","oldVal","innerHTML","newVal","bShow","reloadNode","bLockCounterAnimate","setTimeout","visibility","hasClass","removeClass","__logChangeCounterArray","arCount","message","__logShowPostMenu","bindElement","fullset_event_id","user_id","log_id","bFavorites","arMenuItemsAdditional","PopupMenu","destroy","itemFavorites","text","onclick","__logChangeFavorites","PreventDefault","arItems","getAttribute","href","id","menuItemText","menuItemIconDone","clipboard","isCopySupported","copy","adjust","attrs","data-block-click","it","proxy_context","offsetHeight","setAttribute","node","pos2","parentNode","pos3","findParent","bx-height","overflow","children","value","events","click","select","fx","time","step","start","finish","callback","delegate","show","hide","confirm","__logDelete","isArray","i","util","array_merge","offsetLeft","offsetTop","lightShadow","angle","offset","onPopupShow","ob","menuItems","findChildren","contentContainer","favoritesMenuItem","undefined","linkMenuItem","popupContainer","__logGetNextPageLinkEntities","entities","correspondences","__logGetNextPageFormName","linkEntity","ii","newState","bFromMenu","menuItem","nodeToAdjust","title","sonetLXmlHttpSet5","open","setRequestHeader","onreadystatechange","readyState","status","data","responseText","sonetLErrorDiv","abort","strMessage","send","Math","floor","random","urlencode","encodeURIComponent","ajax","url","method","dataType","sessid","bitrix_sessid","site","action","onsuccess","bResult","__logDeleteSuccess","__logDeleteFailure","onfailure","callback_start","minHeight","callback_complete","marginBottom","cleanNode","props","html","insertBefore","marginLeft","marginRight","marginTop","firstChild","__socOnUCFormClear","obj","LHEPostForm","reinitDataBefore","editorId","__socOnUCFormAfterShow","eId","entitiesCorrespondence","join","form","post_data","ENTITY_XML_ID","ENTITY_TYPE","entitiesId","ENTITY_ID","parentId","comment_post_id","edit_id","act","logId","name","__socOnLightEditorShow","__socOnUCFormSubmit","__socOnUCFormResponse","return_data","errorMessage","res","arComment","arComm","ratingNode","thisId","ID","FULL_ID","NEW","APPROVED","POST_TIMESTAMP","POST_TIME","POST_DATE","~POST_MESSAGE_TEXT","POST_MESSAGE_TEXT","PANELS","MODERATE","URL","LINK","AUTHOR","NAME","AVATAR","BEFORE_ACTIONS","AFTER","okMessage","messageCode","messageId","~message","messageFields","strFollowOld","tagName","val","OnUCFormResponseData","content","tmp2","size","ij","FILE_ID","FILE_NAME","FILE_SIZE","CONTENT_TYPE","USER_TYPE_ID","FIELD_NAME","VALUE","clone","reinitData","SLEC","BitrixLF","bLoadStarted","nextURL","scrollInitialized","bStopTrackNextPage","arMoreButtonID","logAjaxMode","cmdPressed","nextPageFirst","firstPageLastTS","firstPageLastId","initOnce","loaderContainer","bind","proxy","_onAnimationEnd","addCustomEvent","filterValues","filterPromise","showRefreshFade","filterParams","autoResolve","refresh","useBXMainFilter","searchString","trim","hideRefreshFade","init","refreshUrl","location","initScroll","throttle","onFeedScroll","windowSize","GetWindowSize","maxScroll","scrollHeight","innerHeight","scrollTop","getNextPage","counterWrap","getBoundingClientRect","onFeedKeyDown","event","in_array","keyCode","onFeedKeyUp","oNode","isNotEmptyString","more_url","PROPS","CONTENT","LAST_TS","LAST_ID","contentBlockId","processAjaxBlock","clearContainerExternal","f","recalcMoreButton","prepareData","indexOf","fulfill","emptyBlock","EMPTY","emptyTextNode","arCommentsMoreButtonID","upBtn","windowScroll","GetWindowScrollPos","easing","duration","scroll","transition","makeEaseOut","transitions","quart","state","scrollTo","complete","animate","reject","showRefreshError","animationName","arPosOuter","obOuter","obInner","bodyBlockID","moreButtonBlockID","outerBlockID","overflowX","LazyLoadCheckVisibility","image","img","textType","textBlock","moreBlock","block","nodeId","insertHidden","htmlWasInserted","scriptsLoaded","processCSS","insertHTML","processExternalJS","processInlineJS","CSS","load","JS","processRequestData","scriptsRunFirst","mode","removeChild","clearContainerExternalNew","clearContainerExternalMore","createTask","PopupWindow","autoHide","overlay","closeIcon","right","draggable","restrict","closeByEsc","contentColor","contentNoPaddings","buttons","onAfterPopupShow","createTaskSetContent","entityType","entityId","getSonetGroupAvailableList","getLivefeedUrl","checkParams","feature","operation","TITLE","DESCRIPTION","DISK_OBJECTS","taskDescription","formatTaskDescription","LIVEFEED_URL","taskData","RESPONSIBLE_ID","CREATED_BY","UF_TASK_WEBDAV_FILES","sonetGroupId","GROUPS_AVAILABLE","hasOwnProperty","push","GROUP_ID","Tasks","Util","Query","runOnce","then","result","resultData","getData","DATA","createTaskSetContentSuccess","TASK_ID","createTaskSetContentFailure","getErrors","getMessages","onPopupClose","WindowManager","GetZIndex","taskId","setButtons","PopupWindowButton","taskLink","Bitrix24","PageSlider","errors","contentNode","containerNode","livefeedUrl"],"mappings":"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"}